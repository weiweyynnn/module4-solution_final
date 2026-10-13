/*
 * Module 4 - Steps 1 and 10 through 12 (Harder starter).
 * Automatically logs the ten required greetings when the page opens.
 */
(function (window) {
  "use strict";

  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  var results = [];

  function greetName(name) {
    var firstLetter = name.charAt(0).toLowerCase();
    var greeting;

    if (firstLetter === "j") {
      byeSpeaker.speak(name);
      greeting = "Good Bye " + name;
    } else {
      helloSpeaker.speak(name);
      greeting = "Hello " + name;
    }

    results.push(greeting);
    return greeting;
  }

  function runDefaultNames() {
    results = [];
    for (var i = 0; i < names.length; i++) {
      greetName(names[i]);
    }
    return results.slice();
  }

  // Graded functionality: log all ten names immediately on page load.
  runDefaultNames();

  // Small optional demo API for the UI; it does not change the graded loop.
  window.module4Demo = {
    getResults: function () { return results.slice(); },
    getDefaultNames: function () { return names.slice(); },
    greetName: greetName,
    runDefaultNames: runDefaultNames
  };
})(window);
