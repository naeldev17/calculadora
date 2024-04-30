
// let display = document.getElementById('display');
let resultDisplay = document.getElementById('resultDisplay');
let temporaryNumber = '';
let SecondValue = '';
let firstValue = 0;
let ativo = false;

function clean() {
  temporaryNumber = [];
  display.value = [];
  temporaryNumber = [];
  resultDisplay.value = [];
}

function cleanLastElement() {
  temporaryNumber = [];
  display.value = display.value.toString().slice(0, -1);
  temporaryNumber = display.value;
}



function operationsMath(expressao = null) { /* é preciso adicionar um parametro nulo, para que a funçao funcione mesmo se for chamada sem um parâmetro */
  temporaryNumber = temporaryNumber.replace(/,/g, '.');
  let elements = temporaryNumber.match(/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g); /* elements é a variável que armazena cada string, cada valor. */
  console.log(elements);
  let firstValue = Number(elements[0]); /* Armazena a primeira posição do array */
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

function parenthesesResolution(num) {
  temporaryNumber = num;
  for (let i = 1; i < temporaryNumber.length; i += 2) {
    if (temporaryNumber == '(') {
      temporaryNumber.match(/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g)
      temporaryNumber = operationsMath(temporaryNumber);

    }
  }
}

function hasParantese() {
  if (ativo == false) {
    temporaryNumber += "(";
    ativo = true;
    display.value = temporaryNumber;
    console.log(ativo);
  }
  else {
    temporaryNumber += ")";
    ativo = false;
    display.value = temporaryNumber;
    console.log(ativo);
  }
}

function btnClick(num) {
  const number = Number(num);
  let guarda = '';
  if (number >= 0) {
    // temporaryNumber += num;
    console.log(temporaryNumber, 'leo');
    display.value += num;
    guarda = display.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));

    // console.log(guarda.length);
    console.log(isImpar(guarda.length, display.value));
    return;
  }

  // if ((num === '+' || num === '-' || num === '÷' || num === 'x' || num === '%' || num === ',') || num === '()') {
  //   temporaryNumber += num;
  //   display.value = temporaryNumber;
  //   guarda = display.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));
  //   console.log(isImpar(guarda.length, display.value));
  //   return;
  // }

  if (num === '=') {
    temporaryNumber = operationsMath(temporaryNumber);
    // console.log("op", temporaryNumber);
    resultDisplay.value = temporaryNumber;
    guarda = resultDisplay.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));
    // console.log(isImpar(guarda.length, display.value))
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
  // temporaryNumber += num;
  // resultDisplay.value = temporaryNumber;
  // guarda = display.value.match((/(\d+\.\d+|\d+|[%\+\-\x\÷\(\),])/g));
  // console.log(isImpar(guarda.length, display.value));
  // return;
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

//     if (element === 'x'  element === '/') {
//       currentoperator = element;
//     }

//     if (element === '+'  element === '-') {
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


// function hasParantese(num) {
//   let elements = temporaryNumber.split(' ');
//   console.log(elements);
//   parenteses = false;
//   for (i = 0; i < num.length; i++) {
//     if (num === "()") {
//       temporaryNumber += "(";
//       display.value = temporaryNumber;
//       console.log('entrou ()');
//     }
//     for (i = 0; i < num.length; i++) 
//     if (temporaryNumber === "(") {
//       temporaryNumber += ")"
//       display.value = temporaryNumber;
//       console.log(display.value);
//       console.log('possui (');
//     }
//     console.log(display.value);
//     return;
//   }
// }


// switch (num) {
//   case !isNaN(num):
//     temporaryNumber += num;
//     temporaryNumber += num
//     document.getElementById('display').value = temporaryNumber;
//     break;
//   case (num === '+' || num === '-' || num === '÷' || num === 'x' || num === '()' || num === '%'): /* Se o num for um operador de soma ou de igual */
//     temporaryNumber += ' ' + num + ' '; /**/
//     document.getElementById('display').setAttribute("value", temporaryNumber);
//     break;
//   case (num === '='):  /* Se não houver um operador previamente definido */
//     temporaryNumber += operationsMath(temporaryNumber) /* Insere a função onde tem os cálculos matemáticos dentro de opertador */
//     document.getElementById('firstValue-display').setAttribute("value", temporaryNumber); /*Atualiza o valor do display */
//     break;
// }






// function btnClick(num) {
//   switch (true) {
//     case !isNaN(num): // Se o num for um número
//       temporaryNumber += num;
//       temporaryNumber += num;
//       document.getElementById('display').setAttribute("value", temporaryNumber);
//       break;
//     case (num === '+' || num === '-' || num === '*' || num === '/'): // Se o num for um operador
//       temporaryNumber += ' ' + num + ' ';
//       document.getElementById('display').setAttribute("value", temporaryNumber);
//       break;
//     case (num === '='): // Se o num for igual
//       temporaryNumber = evaluateExpression(temporaryNumber);
//       document.getElementById('display').setAttribute("value", temporaryNumber);
//       temporaryNumber = '';
//       break;
//   }
// }

// function evaluateExpression(temporaryNumber) {
//   let tokens = temporaryNumber.split(' ');
//   let firstValue = parseFloat(tokens[0]);

//   for (let i = 1; i < tokens.length; i += 2) {
//     let temporaryNumber = tokens[i];
//     let nextNumber = parseFloat(tokens[i + 1]);

//     switch (temporaryNumber) {
//       case '+':
//         firstValue += nextNumber;
//         break;
//       case '-':
//         firstValue -= nextNumber;
//         break;
//       case '*':
//         firstValue *= nextNumber;
//         break;
//       case '/':
//         firstValue /= nextNumber;
//         break;
//     }
//   }

//   return firstValue;
// }



