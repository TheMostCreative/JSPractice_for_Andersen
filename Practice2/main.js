var a;
function drawTriangle(a) {  //рисуем треугольник
    var i = 0, j = 0;
    if (a == undefined) {  //задаем высоту, если undefined, то рисуем предполагая что это 1
        var height = 3;
    } else {
        var height = 3 * a;
    }
    var space, innerSpace, slash, backslash, underscore;

    while (i < height) {
        space = "";
        innerSpace = "";
        slash = "/";
        backslash = "\\";
        underscore = "";
        for (j = 0; j < height - i + 1; j++) space += " "; //отсчитывает от начала количество пробелов
        for (j = 0; j < 2 * i; j++) innerSpace += " ";  // Количество внутренних пробелов
        if (i == height - 1) {
            for (j = 0; j < 2 * i; j++) underscore += "_"; // Если мы подходим к нижней границе то рисуем с нижним подчеркиванием
            console.log(space + slash + underscore + backslash);
            i++;
        } else                                             // Иначе продолжаем
            console.log(space + slash + innerSpace + backslash);
        i++;
    }
}


/* ********************************************************************************************************** */

var a;
function drawRomb(a) { // Рисуем ромб
    var i = 0, j = 0;
    if (a == undefined) {
        var height = 6; // Задаем высоту для различных условий
    } else {
        var height = 6 * a;
    }
    var space, innerSpace, slash, backslash;

    while (i < height) {
        space = "";
        innerSpace = "";
        slash = "/";
        backslash = "\\";
        underscore = "";
        if (i < height - i) {
            for (j = 0; j < height / 3 - i + a - 1; j++) space += " "; //Точно так же как и в случае вверху, вначале пробелы до, потом внутренние
            for (j = 0; j < 2 * i; j++) innerSpace += " ";
            console.log(space + slash + innerSpace + backslash);
            i++;
        } else {                                                   //Когда доходим до середины то пишем слэши наоборот
            for (j = 0; j < i - height / 3 - a; j++) space += " ";
            for (j = 0; j < (height - i - 1) * 2; j++)  innerSpace += " ";
            console.log(space + backslash + innerSpace + slash);
            i++;
        }
    }
}

/* ********************************************************************************************************** */

function multiply(a,b) { //Умножение без использования операции умножения при помощи цикла
    var i;
    var iterations = Math.abs(a);
    var sum = 0;
    for(i=0;i<iterations;i++)(iterations===a?sum=sum+b:sum=sum-b);
    return sum;
}

function multiply(a, b) {  //Умножение без использования операции умножения
    return a / (1 / b);
  }
  