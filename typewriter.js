const sentence = "hello there from lighthouse labs";



let len  = sentence.length;
for (let i = 0; i < len; i++) {
  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, 50 + 50 * i);
}

  
