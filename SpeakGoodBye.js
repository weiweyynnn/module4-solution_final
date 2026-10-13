/*
 * Module 4 - Steps 6 through 9 (Harder starter).
 * The course starter uses "Good Bye" with a space.
 */
(function (window) {
  "use strict";

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  window.byeSpeaker = byeSpeaker;
})(window);
