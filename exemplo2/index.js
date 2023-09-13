//para importar um recuro
//import soma from './modulos/funcoes.mjs';

//para importar vários recurso de uma vez;
import{soma, multiplica, dividir, subtrai} from './modulos/funcoes.mjs'

let resultadoSoma = soma(10, 50);
let resultadoMultiplica = multiplica(2, 10);

console.log(`Soma: ${resultadoSoma}`);
console.log(`multiplicação ${resultadoMultiplica}`);

let resultadoDividir = dividir(40, 20);

let resultadoSubtrai = subtrai(50, 50);

console.log(`dividir: ${resultadoDividir}`);
console.log(`subtrai ${resultadoSubtrai}`);






