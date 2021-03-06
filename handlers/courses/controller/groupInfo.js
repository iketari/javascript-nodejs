"use strict";

var Course = require('../models/course');
var CourseParticipant = require('../models/courseParticipant');
var SlackUser = require('slack').SlackUser;

// Group info for a participant, with user instructions on how to login
exports.get = function*() {

  var group = this.locals.group = this.groupBySlug;

  // can be teacher! no participant then!
  this.locals.participant = yield CourseParticipant.findOne({
    isActive: true,
    group: group._id,
    user: this.user._id
  });

  this.locals.teacherSlackUser = yield SlackUser.findOne({
    email: group.teacher.teacherEmail
  });

  this.body = this.render('groupInfo/' + group.course.slug);
};
