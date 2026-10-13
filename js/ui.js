/* Optional visual demonstration; assignment scoring still uses the console. */
(function () {
  "use strict";

  var api = window.module4Demo;
  var output = document.getElementById("greeting-output");
  var form = document.getElementById("try-form");
  var input = document.getElementById("name-input");
  var message = document.getElementById("form-message");

  function render() {
    var results = api.getResults();
    var helloCount = 0;
    var goodbyeCount = 0;

    output.textContent = "";
    for (var i = 0; i < results.length; i++) {
      var line = results[i];
      var isGoodbye = line.indexOf("Good Bye ") === 0;
      var item = document.createElement("li");
      var text = document.createElement("span");
      text.className = isGoodbye ? "line-goodbye" : "line-hello";
      text.textContent = line;
      item.appendChild(text);
      output.appendChild(item);
      if (isGoodbye) goodbyeCount++;
      else helloCount++;
    }

    document.getElementById("stat-total").textContent = String(results.length);
    document.getElementById("stat-hello").textContent = String(helloCount);
    document.getElementById("stat-goodbye").textContent = String(goodbyeCount);
    document.getElementById("log-count").textContent = results.length + " lines";
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var name = input.value.trim().replace(/\s+/g, " ");
    if (!name || name.length > 40) {
      message.textContent = "Enter a name between 1 and 40 characters.";
      input.focus();
      return;
    }
    var greeting = api.greetName(name);
    render();
    message.textContent = "Printed to the browser console: " + greeting;
    input.value = "";
    input.focus();
    output.lastElementChild.scrollIntoView({behavior: "smooth", block: "nearest"});
  });

  document.getElementById("reset-button").addEventListener("click", function () {
    api.runDefaultNames();
    render();
    message.textContent = "Original 10 names rerun and printed to the console.";
  });

  render();
})();
