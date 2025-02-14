alert("Hello World")
function calculateAverage(numbers: number[]): number {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

function countInRange(matrix: number[][], min: number, max: number): number {
    let count = 0;
    for (const row of matrix) {
        for (const value of row) {
            if (value >= min && value <= max) {
                count++;
            }
        }
    }
    return count;
}

type MyTuple = [string, string, number];

function formatTuple(tuple: MyTuple): string {
    return `${tuple[0]} – ${tuple[2]} – ${tuple[1]}`;
}

enum OilType {
    Rapeseed = "Рапсовое",
    Sunflower = "Подсолнечное",
    Olive = "Оливковое"
}

const intArray = [10, 20, 30, 40, 50];
console.log("Среднее арифметическое:", calculateAverage(intArray));

const intMatrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("Количество значений в интервале (2-6):", countInRange(intMatrix, 2, 6));

const myTuple: MyTuple = ["Первая строка", "Вторая строка", 42];
console.log(formatTuple(myTuple));

const myOil: OilType = OilType.Sunflower;
console.log("Тип масла:", myOil); 
