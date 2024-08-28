function generateRandomMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 9) + 0; // números aleatórios de 1 a 9
        }
    }
    return matrix;
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

function Mover(array, linha, coluna) {
    // validar se o movimento é possível
    if (indiceExiste(array, linha, coluna)) {

    }
}


const size = 3;
let matrix = generateRandomMatrix(size);
console.log("Matriz Aleatória Inicial:");
console.table(matrix)

function organizar(matriz) {
    let troca;
    const size = matriz.length;
    for (let linha = 0; linha < size; linha++) {
        for (let coluna = 0; coluna < size; coluna++) {
            // substituição para o código funcional

        }

    }
    return matriz;
}



// começar do primeiro índice e ir subindo se ele for o maior
// se não passar para o próximo
// verificar linha mais um, linha menos 1
// verificar coluna mais um, coluna menos 1

console.log("\nMatriz Ordenada:");
matrix = organizar(matrix)
console.table(matrix)

