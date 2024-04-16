class Solution {
    replaceWords(dictionary, sentence) {
      dictionary = new Set(dictionary);
      const lens = Array.from(dictionary).map(w => w.length).sort((a, b) => a - b);
      const words = sentence.split(" ");
      const op = [];
  
      for (let w of words) {
        let found = false;
        for (let l of lens) {
          if (dictionary.has(w.slice(0, l))) {
            op.push(w.slice(0, l));
            found = true;
            break;
          }
        }
        if (!found) {
          op.push(w);
        }
      }
  
      return op.join(" ");
    }
  }
  
  // Ejemplo de uso:
  const solution = new Solution();
  const dictionary = ["a", "b", "c"];
  const sentence = "aadsfasf absbs bbab cadsfafs";
  console.log(solution.replaceWords(dictionary, sentence));