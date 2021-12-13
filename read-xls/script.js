function upload2() {
  console.log("1111111");
  const readLine = require("readline");
  const fs = require("fs");
  const readAble = fs.createReadStream("debounce.html");

  const rl = readLine.createInterface({
    input: readAble,
    output: process.stdout,
  });

  rl.on("line", (line) => {
    console.log("kakakaka: ", line);
  });
}

input = document.querySelector("#formFileLg");

function upload() {
  console.log("upload");

  readXlsxFile(input.files[0]).then((data) => {
    console.log(data);
  });
}
