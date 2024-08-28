function generateRandomMatrix(size) {
    const matrix = [];

    // Gerar a matriz com números aleatórios de 1 a 9
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 9) + 1; // números aleatórios de 1 a 9
        }
    }

    // Escolher uma posição aleatória para o zero
    const zeroRow = Math.floor(Math.random() * size);
    const zeroCol = Math.floor(Math.random() * size);

    // Colocar o zero na posição aleatória
    matrix[zeroRow][zeroCol] = 0;

    return matrix;
}

function trocarElementos(array2D, row1, col1, row2, col2) {
    // Realiza a troca dos elementos
    let temp = array2D[row1][col1];
    array2D[row1][col1] = array2D[row2][col2];
    array2D[row2][col2] = temp;

    return array2D;
}

function indiceExiste(array2d, linha, coluna) {
    // Verifica se a linha está dentro do limite do array 2D
    if (linha >= 0 && linha < array2d.length) {
        // Verifica se a coluna está dentro do limite da linha específica
        if (coluna >= 0 && coluna < array2d[linha].length) {
            return true;
        }
    }
    return false;
}

// os argumentos vai ser matriz, e índices de troca
// ele vai testar todas as possibildades para mover o item
function Mover(array, linha, coluna) {
    // trade
    let troca;
    // na troca ele vai ter no total 4 números para trocar
    // vou precisar de uma cadeia de if?

    // direita
    if (indiceExiste(array, linha, coluna)) {
        array = trocarElementos(array, linha, coluna, linha + 1, coluna)
    }


}


function organizar(matriz) {
    const size = matriz.length;
    let menor = 0 // declaração do menor valor
    menor = matriz[0][0]
    let contador = 0;
    for (let linha = 0; linha < size; linha++) {
        for (let coluna = 0; coluna < size; coluna++) {
            // primeiro laço, primeiro índice
            // encontrar o menor
            if (matriz[linha][coluna] > 0) {
                menor = matriz[linha][coluna];
            }
        }


    }
    return matriz;
}



const size = 3;
let matrix = generateRandomMatrix(size);
console.log("Matriz Aleatória Inicial:");
console.table(matrix)



console.log("\nMatriz Ordenada:");
matrix = organizar(matrix)
console.table(matrix)

