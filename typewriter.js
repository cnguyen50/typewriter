const sentence = "hello there from lighthouse labs";

const typewriter = function(sentence) {
  let timer = 0;
  for (const char of sentence) {
    setTimeout(() => {
      process.stdout.write(char);
    }, timer)
    timer += 50;
  }
  const newLine = () => console.log("\n");

  setTimeout(newLine,2000);


};

typewriter(sentence);

