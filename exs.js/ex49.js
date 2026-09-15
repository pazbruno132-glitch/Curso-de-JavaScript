let idade = 20;
let temCarteira = false;
let temAutorizacao = true;

let res = idade >= 18 && (temAutorizacao || temCarteira);

console.log(res);