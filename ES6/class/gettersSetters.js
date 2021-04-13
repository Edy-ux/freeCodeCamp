// TODO GETTERS
/*As funções getter têm como objetivo simplesmente retornar (obter) o valor da variável
privada de um objeto para o usuário, sem que o usuário acesse diretamente a variável 
privada.*/

// TODO SETTERS
/* As funções setter destinam-se a modificar (definir) o valor da variável privada 
de um objeto com base no valor passado para a função setter. Essa alteração pode 
envolver cálculos ou até mesmo sobrescrever completamente o valor anterior. */

// Only change code below this line
class Thermostat {
  constructor(fahrenheit) {
    this.fahrenheit = fahrenheit;
  }
  get temperature() {
    return (5 / 9) * (this.fahrenheit - 32);
  }
  set temperature(celsius) {
    this.fahrenheit = (celsius * 9.0) / 5 + 32;
  }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius

console.log(temp.toFixed(2));

thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);

/*NOTE: Este é o poder de um getter e de um setter. Você está criando uma API para outro
 usuário, que pode obter o resultado correto independentemente de qual deles você rastreia.*/

/* Getters e setters são importantes porque ocultam detalhes de implementação internos. */
