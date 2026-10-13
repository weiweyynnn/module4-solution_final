/*
 * Module 4 - Steps 2 through 5 (Harder starter).
 * Keep speakWord private, expose only helloSpeaker.
 */
(function (window) {
  "use strict";

  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.helloSpeaker = helloSpeaker;
})(window);
