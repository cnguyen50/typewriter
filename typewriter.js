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







































// const typewriter = function() {
//   let sentenceArray = sentence.split('');
//   for (let i = 0; i < sentence.length; i++) {
//     setTimeout(() => {
//       process.stdout.write(sentenceArray[i]);
//       if (i === sentence.length - 1) {
//         process.stdout.write('\n');
//       }
//     }, 50 * i);
//   }
// };

// typewriter();