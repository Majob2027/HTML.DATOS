function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  strs.sort();
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];
  let idx = 0;

  if (firstStr > 200 || firstStr<0) 
  {
    console.log("Error")
  }
  if (lastStr > 200 || lastStr<0) 
  {
    console.log("Error")
  }
  

  while (idx < firstStr.length && idx < lastStr.length) {
    if (firstStr.charAt(idx) === lastStr.charAt(idx)) {
      idx++;
    } else {
      break;
    }
  }

  return firstStr.substring(0, idx);
}

let palabras = prompt("Ingrese la cantidad de palabras a guardar");
let strs = [];

for (let i = 0; i < palabras; i++) {
  strs.push(prompt(`Ingrese la palabra #${i + 1}`));
}

alert("Prefijo común más largo: " + longestCommonPrefix(strs));
