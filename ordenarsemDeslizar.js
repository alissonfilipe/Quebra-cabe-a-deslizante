// Função para gerar um número aleatório entre min (inclusive) e max (exclusive)
function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}


function trocarIndice(array, l1, c1, l2, c2) {
    let meuarray = array;
    meuarray[0][0] = meuarray[l1][c1];
    meuarray[l1][c1] = meuarray[l2][c2];
    meuarray[l2][c2] = meuarray[0][0];
    meuarray[0][0] = 0;
    return meuarray;
}


// Cria uma matriz 3x3 inicializada com zeros
let matriz = Array.from({ length: 3 }, () => Array(3).fill(0));


// Preenche a matriz com números aleatórios entre 1 e 10
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        matriz[i][j] = getRandom(1, 10); // Define um valor aleatório para cada célula
    }
}
matriz[0][0] = 0;


console.log("Matriz antes de ordenar:");
// Exibe a matriz inicial no console
console.table(matriz);


// Função para ordenar a matriz
function ordenarMatriz(matrix) {
    // Passa todos os elementos da matriz para um único array
    let elementos = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            elementos.push(matrix[i][j]);
        }
    }


    // Ordena o array de elementos
    elementos.sort((a, b) => a - b);


    // Repassa os elementos ordenados de volta para a matriz
    let contador = 0;
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = elementos[contador++];
        }
    }
}


// Ordena a matriz
ordenarMatriz(matriz);




console.log("Matriz após ordenar:");
// Exibe a matriz ordenada no console
console.table(matriz);





