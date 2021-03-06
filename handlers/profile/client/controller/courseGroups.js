var angular = require('angular');
var notification = require('client/notification');
var profile = angular.module('profile');

profile.controller('ProfileCourseGroupsCtrl', ($scope, $http, courseGroups) => {

  $scope.courseGroups = courseGroups;

  $scope.slackInvite = function(group) {

    $http({
      method:           'POST',
      url:              '/courses/groups/' + group.slug + '/slack-invite',
      headers:          {'Content-Type': undefined},
      transformRequest: angular.identity
    }).then((response) => {

      new notification.Success(response.data.message);

      group.inSlack = true;

    }, (response) => {
      if (response.status == 403) {
        new notification.Error(response.data.error);
      } else {
        new notification.Error("Ошибка загрузки, статус " + response.status);
      }
    });

  };

});
