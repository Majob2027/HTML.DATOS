function longestCommonPrefix(strs) {
  if (strs.length === 0) return "";

  strs.sort();
  const firstStr = strs[0];
  const lastStr = strs[strs.length - 1];
  let idx = 0;

  while (idx < firstStr.length && idx < lastStr.length) {
    if (firstStr.charAt(idx) === lastStr.charAt(idx)) {
      idx++;
    } else {
      break;
    }
  }

  return firstStr.substring(0, idx);
}

let palabras= prompt ("ingrese la cantidad de palabras a guardar")
let strs= []
for (let i of palabras){
    strs = input ("ingrese la palabra #" , {i})
}
longestCommonPrefix(strs)