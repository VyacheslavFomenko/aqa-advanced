let averageGrade = 61;
let gradeGroup = Math.floor(averageGrade / 10);

switch (gradeGroup) {
    case 0: case 1: case 2: case 3: case 4: case 5:
        console.log("Незадовільно");
        break;
    case 6:
        console.log("Задовільно");
        break;
    case 7:
        console.log("Добре");
        break;
    case 8:
        console.log("Дуже добре");
        break;
    case 9: case 10:
        console.log("Відмінно");
        break;
    default:
        console.log("Некоректне значення оцінки");
}