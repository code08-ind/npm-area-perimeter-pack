function areaOfCircle(radius) {
    return Math.PI * radius * radius;
}

function perimeterOfCircle(radius) {
    return 2 * Math.PI * radius;
}

function areaOfSquare(side) {
    return side * side;
}

function perimeterOfSquare(side) {
    return 4 * side;
}

function perimeterOfRectangle(length, width) {
    return 2 * (length + width);
}

function perimeterOfParallelogram(length, width) {
    return 2 * (length + width);
}

function areaOfTriangle(base, height) {
    return 1 / 2 * base * height;
}

function areaOfParallelogram(base, height) {
    return base * height;
}

function areaOfRectangle(length, width) {
    return 1 / 2 * length * width;
}

function areaOfTrapezium(a, b, height) {
    return 1 / 2 * height * (a + b);
}

function areaOfEllipse(a, b) {
    return Math.PI * a * b;
}

module.exports.areaOfCircle = areaOfCircle;
module.exports.perimeterOfCircle = perimeterOfCircle;
module.exports.areaOfSquare = areaOfSquare;
module.exports.areaOfTriangle = areaOfTriangle;
module.exports.areaOfTrapezium = areaOfTrapezium;
module.exports.areaOfRectangle = areaOfRectangle;
module.exports.areaOfParallelogram = areaOfParallelogram;
module.exports.areaOfEllipse = areaOfEllipse;
module.exports.perimeterOfSquare = perimeterOfSquare;
module.exports.perimeterOfRectangle = perimeterOfRectangle;
module.exports.perimeterOfParallelogram = perimeterOfParallelogram;