class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(area) {
    switch (true) {
      case area instanceof Square:
        return area.side ** 2;
        break;
      case area instanceof Rectangle:
        return area.width * area.height;
        break;
      case area instanceof Circle:
        return area.radius ** 2 * Math.PI;
        break;
      default:
        return "Incalcolable";
        break;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));