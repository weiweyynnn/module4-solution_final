# Module 4 Coding Assignment — Working Solution

This folder is ready to publish to **GitHub Pages**. It completes the original course's **harder starter** by correctly repairing the two JavaScript greeting libraries and looping over the names.

## Required behavior

Open `index.html` in a browser and press **F12 → Console**. The following output is printed automatically on page load:

```text
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
```

The official starter examples spell it **"Good Bye"**, with a space. This preserves that expected output. Names starting with either uppercase `J` or lowercase `j` are treated identically.

## How the code follows the assignment

1. **`SpeakHello.js`** — IIFE, private `speakWord`, global `helloSpeaker.speak()` method.
2. **`SpeakGoodBye.js`** — separate IIFE, private `speakWord`, global `byeSpeaker.speak()` method.
3. **`script.js`** — IIFE, names array, `for` loop, `charAt(0).toLowerCase()`, and `if/else` speaker selection.
4. **`index.html`** — includes the three original JavaScript scripts in the correct order, and presents an optional interactive output preview.
5. **`js/ui.js` and `css/styles.css`** — optional preview UI; the actual graded console behavior does **not** rely on either file.

The page includes a name field to experiment with additional names. The first 10 lines are from the assignment's original list.

## Uploading to GitHub Pages

Upload the **entire `module4-solution` folder** to your class repository (keeping its contents and paths unchanged), then open:

`https://YOUR-USERNAME.github.io/YOUR-REPO/module4-solution/`

If your GitHub repository is named `module4-solution`, you can place the files in the repository root instead and use `https://YOUR-USERNAME.github.io/module4-solution/`.

## Note

This is a separate **Module 4** JavaScript assignment, not a replacement for the **Module 3** Food, LLC responsive website. Both should remain separate for grading.
