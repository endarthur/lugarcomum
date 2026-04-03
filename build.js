const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src");
const template = fs.readFileSync(path.join(src, "template.html"), "utf-8");
const questions = fs.readFileSync(path.join(src, "questions.json"), "utf-8");

// Minify the JSON to a single line
const questionsInline = JSON.stringify(JSON.parse(questions));

const output = template.replace("/*__QUESTIONS__*/[]", questionsInline);

fs.writeFileSync(path.join(__dirname, "index.html"), output, "utf-8");

const count = JSON.parse(questions).length;
console.log(`Built index.html with ${count} questions.`);
