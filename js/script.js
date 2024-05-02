
// let display = document.getElementById('display');
// let resultDisplay = document.getElementById('resultDisplay');
let temporaryNumber = '';
let firstValue = 0;
let ativo = false;

function clean() {
  temporaryNumber = [];
  display.value = [];
  resultDisplay.value = [];
}

function cleanLastElement() {
  display.value = display.value.slice(0, -1);
  resultDisplay = resdisplay.value.slice(0, -1)
}

function operationsMath(expressao = null) { /* é preciso adicionar um parametro nulo, para que a funçao funcione mesmo se for chamada sem um parâmetro */
  // temporaryNumber = temporaryNumber.replace(/,/g, '.');
  let elements = display.value.match(/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g); /* elements é a variável que armazena cada string, cada valor. */
  console.log(elements);
  firstValue = Number(elements[0]); /* Armazena a primeira posição do array */
  console.log(firstValue, 'oi');
  for (let i = 1; i < elements.length; i += 2) { /* Percorre o array incrementando e concatenando de dois em dois */
    console.log(elements);
    let temporaryNumber = elements[i]; /* Recebe o indice atual do array */
    let nextNumber = Number(elements[i + 1]); /* Recebe o incremento de cada indice */
    switch (temporaryNumber) { /* Caso cada operação seja escolhida, será exucatada tal opereção */
      case '+':
        firstValue += nextNumber;
        break;
      case '-':
        firstValue -= nextNumber;
        break;
      case 'x':
        firstValue *= nextNumber;
        break;
      case '÷':
        firstValue /= nextNumber;
        break;
      case '%':
        firstValue = firstValue * (nextNumber / 100);
    }
  }
  console.log("resultado", firstValue);
  return firstValue;
}

// function parenthesesResolution(num) {
//   temporaryNumber = num;
//   for (let i = 1; i < temporaryNumber.length; i += 2) {
//     if (temporaryNumber == '(') {
//       temporaryNumber.match(/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g)
//       temporaryNumber = operationsMath(temporaryNumber);
//     }
//   }
// }

function hasParantese() {
  if (ativo == false) {
    display.value += "(";
    ativo = true;
    console.log(ativo);
  }
  else {
    display.value += ")";
    ativo = false;
    console.log(ativo);
  }
}

function btnClick(num) {
  const number = Number(num);
  let guarda = '';
  if (number >= 0) {
    display.value += num;
    guarda = display.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));
    console.log(isImpar(guarda.length, display.value));
    return;
  }

  if (num === '=') {
    temporaryNumber = operationsMath(temporaryNumber);
    // guarda = resultDisplay.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));
    resultDisplay.value = '';
    display.value = temporaryNumber;
  }
}

function isImpar(num) {
  let somaImpar;
  if ((num % 2 != 0) && (num > 1)) {
    somaImpar = operationsMath(num);
    resultDisplay.value = somaImpar;
  }
}

function verifyOperator(num) {
  return num === '+' || num === '-' || num === '÷' || num === 'x' || num === '%' || num === ',' || num === '()'
}

function operators(num) {
  let armazena = display.value;
  const lastCaractere = armazena[armazena.length - 1];

  if (verifyOperator(lastCaractere)) {
    return;
  }
  display.value += num
  console.log(lastCaractere, 'aqui');
}

// function calcular() {
//   let stack = [];
//   let currentoperator = null;

//   for (let i = 0; i < elements.length; i++) {
//     const element = elements[i];

//     if (!isMathematicalOperator(element)) {
//       if (!currentoperator) {
//         stack.push(element);

//         continue;
//       }

//       if (currentoperator === 'x') {
//         stack[stack.length - 1] *= element;
//       }

//       if (currentoperator === '/') {
//         stack[stack.length - 1] /= element;
//       }

//       currentoperator = null;

//       continue;
//     }

//     if (element === 'x' || element === '/') {
//       currentoperator = element;
//     }

//     if (element === '+' || element === '-') {
//       stack.push(element);
//     }
//   }


//   let result = stack[0];
//   for (let i = 1; i < stack.length; i += 2) {
//     const operator = stack[i];

//     if (operator === '+') {
//       result += stack[i + 1];
//     }

//     if (operator === '-') {
//       result -= stack[i + 1];
//     }
//   }
//   // document.getElementById('display-continues').innerHTML = result
//   return result;
// }


// function organizaConta(elements) {
//   let posicaoComeco;
//   let posicaoFinal;
//   for (let index = 0; index < elements.length; index++) {
//     if (elements[index] == '(') {
//       posicaoComeco = elements[index];
//     }
//     if (elements[index] == ')') {
//       posicaoFinal = elements[index];
//       break;
//     }
//   }

//   let resultadoFinal = operationsMath(elements[posicaoComeco][posicaoFinal]);
//   elements[posicaoComeco][posicaoFinal] = resultadoFinal;

//   //   if (indexOf('()'))

//   // }
// }
