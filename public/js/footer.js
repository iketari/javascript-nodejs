require=function t(e,n,o){function i(s,u){if(!n[s]){if(!e[s]){var a="function"==typeof require&&require;if(!u&&a)return a(s,!0);if(r)return r(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[s]={exports:{}};e[s][0].call(l.exports,function(t){var n=e[s][1][t];return i(n?n:t)},l,l.exports,t,e,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({"/root/javascript-nodejs/node_modules/client/dom/findClosest.js":[function(t,e){e.exports=function(t,e){for(;t;){if(t.matches(e))return t;t=t.parentElement}return null}},{}],"/root/javascript-nodejs/node_modules/client/footer/showLinkType.js":[function(t,e){var n=t("client/dom/findClosest"),o=t("client/hoverIntent");e.exports=function(){function t(t){var e=t.clientX+s;e+r.offsetWidth>document.documentElement.clientWidth&&(e=Math.max(0,t.clientX-s-r.offsetWidth)),r.style.left=e+"px";var n=t.clientY+u;n+r.offsetHeight>document.documentElement.clientHeight&&(n=Math.max(0,t.clientY-u-r.offsetHeight)),r.style.top=n+"px"}function e(e){var o=n(e.target,"a");o&&(r=document.createElement("span"),r.className="link__type",o.getAttribute("data-tooltip")?r.setAttribute("data-tooltip",o.getAttribute("data-tooltip")):r.setAttribute("data-url",o.getAttribute("href")),document.body.appendChild(r),t(e),document.addEventListener("mousemove",t))}function i(){r&&(document.removeEventListener("mousemove",t),r.remove(),r=null)}var r=null,s=8,u=10,a=o(e,i,"a");document.addEventListener("mouseover",function(t){n(t.target,"a")&&a.call(this,t)}),document.addEventListener("mouseout",a)}},{"client/dom/findClosest":"/root/javascript-nodejs/node_modules/client/dom/findClosest.js","client/hoverIntent":"/root/javascript-nodejs/node_modules/client/hoverIntent.js"}],"/root/javascript-nodejs/node_modules/client/hoverIntent.js":[function(t,e){function n(t,e){function n(t){i=t.pageX,r=t.pageY}function o(t,e){return e.hoverIntentTimer=clearTimeout(e.hoverIntentTimer),Math.sqrt((s-i)*(s-i)+(u-r)*(u-r))<a.sensitivity?(e.removeEventListener("mousemove",n),e.hoverIntentState=!0,void a.over.call(e,t)):(s=i,u=r,void(e.hoverIntentTimer=setTimeout(function(){o(t,e)},a.interval)))}var i,r,s,u,a={interval:100,sensitivity:6,timeout:0,over:t,out:e};return function(t){this.hoverIntentTimer&&(clearTimeout(this.hoverIntentTimer),delete this.hoverIntentTimer),"mouseover"===t.type?(s=t.pageX,u=t.pageY,this.addEventListener("mousemove",n),this.hoverIntentState||(this.hoverIntentTimer=setTimeout(function(){o(t,this)}.bind(this),a.interval))):(this.removeEventListener("mousemove",n),this.hoverIntentState&&(this.hoverIntentTimer=setTimeout(function(){this.hoverIntentState=!1,a.out.call(this,t)}.bind(this),a.timeout)))}}e.exports=n},{}],"client/footer":[function(t,e,n){var o=t("./showLinkType");n.init=function(){o()}},{"./showLinkType":"/root/javascript-nodejs/node_modules/client/footer/showLinkType.js"}]},{},[]);