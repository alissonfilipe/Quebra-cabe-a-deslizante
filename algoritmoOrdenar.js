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

function ordenarMatriz(matriz) {
    let linhas = matriz.length;
    let colunas = matriz[0].length;

    // Itera sobre cada posição da matriz como índice de referência
    for (let i = 0; i < linhas; i++) {
        for (let j = 0; j < colunas; j++) {
            let posMenor = [i, j];

            // Encontra a posição do menor valor que ainda não foi explorado
            for (let x = i; x < linhas; x++) {
                for (let y = (x === i ? j : 0); y < colunas; y++) {
                    if (matriz[x][y] < matriz[posMenor[0]][posMenor[1]]) {
                        posMenor = [x, y];
                    }
                }
            }

            // Movendo o menor valor para a posição correta
            while (posMenor[1] !== j) {
                if (posMenor[1] > j) {
                    // Movendo para a esquerda
                    [matriz[posMenor[0]][posMenor[1]], matriz[posMenor[0]][posMenor[1] - 1]] = [matriz[posMenor[0]][posMenor[1] - 1], matriz[posMenor[0]][posMenor[1]]];
                    posMenor[1]--;
                } else {
                    // Movendo para a direita
                    [matriz[posMenor[0]][posMenor[1]], matriz[posMenor[0]][posMenor[1] + 1]] = [matriz[posMenor[0]][posMenor[1] + 1], matriz[posMenor[0]][posMenor[1]]];
                    posMenor[1]++;
                }
                console.log("Matriz após mover na coluna:");
                console.table(matriz);
            }

            // Movendo dentro da coluna para a posição correta
            while (posMenor[0] !== i) {
                if (posMenor[0] > i) {
                    // Movendo para cima
                    [matriz[posMenor[0]][j], matriz[posMenor[0] - 1][j]] = [matriz[posMenor[0] - 1][j], matriz[posMenor[0]][j]];
                    posMenor[0]--;
                } else {
                    // Movendo para baixo
                    [matriz[posMenor[0]][j], matriz[posMenor[0] + 1][j]] = [matriz[posMenor[0] + 1][j], matriz[posMenor[0]][j]];
                    posMenor[0]++;
                }
                console.log("Matriz após mover na linha:");
                console.table(matriz);
            }
        }
    }

    return matriz;
}

// Exemplo de uso
let matriz = [
    [1, 6, 0],
    [2, 3, 5],
    [7, 8, 4]
];

matriz = generateRandomMatrix(3)

console.log("Matriz inicial:");
console.table(matriz);

ordenarMatriz(matriz);
