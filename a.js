function generateRandomMatrix(size) {
    const matrix = [];
    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            matrix[i][j] = Math.floor(Math.random() * 9) + 1; // números aleatórios de 1 a 9
        }
    }
    return matrix;
}


const size = 3;
let matrix = generateRandomMatrix(size);
console.log("Matriz Aleatória Inicial:");
matrix[0][0] = 0
console.table(matrix)

function organizar(matriz){
    let troca;
    const size = matriz.length;
    for (let linha = 0;linha < size;linha++){
       for (let coluna = 0;coluna < size;coluna++){
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

