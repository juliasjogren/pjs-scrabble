const { readFileSync, writeFileSync, existsSync } = require("fs");

const [inputFileName, outputFileName] = readArguments();

const executionTimerLabel = "Execution time";

console.time(executionTimerLabel);

printGreeting(inputFileName, outputFileName);

exitIfMissing(inputFileName, "input file name missing");
exitIfMissing(outputFileName, "output file name missing");

const inputAsJSON = txtToJSON(inputFileName);
console.log("Input parsed.");
const fileName = saveFile(outputFileName, inputAsJSON);
console.log(`Input saved in "${fileName}"`);
console.log("");
console.timeEnd(executionTimerLabel);

// Functions

function readArguments() {
  return process.argv.slice(2);
}

function printGreeting(inputName, outputName) {
  console.log("Pontus txt to JSON converter starting!");
  console.log("");
  console.log(`Converting ${inputName} to ${outputName}`);
  console.log("");
}

function exitIfMissing(thing, message) {
  if (!thing) {
    throw message;
  }
}

function txtToJSON(txtFileName) {
  const newLineSignWindows = "\r\n";
  try {
    const input = readFileSync(inputFileName).toString();
    return JSON.stringify(
      input.split(newLineSignWindows).reduce((words, word) => {
        words[word] = word;
        return words;
      }, {})
    );
  } catch (error) {
    throw new Error("failed reading input file", error);
  }
}

function saveFile(fileName, contents) {
  try {
    writeFileSync(fileName, contents);
  } catch (error) {
    throw new Error("failed writing output file", error);
  }
  return fileName;
}

function getCurrentDateTimeString() {
  const now = new Date();
  return `${now.getFullYear()}-${now.toLocaleDateString("en", {
    month: "2-digit"
  })}-${now.toLocaleDateString("en", {
    day: "2-digit"
  })} ${now.toLocaleTimeString("en", {
    hour12: false
  })}`;
}
