// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export function Size (width = 80, height = 60) {
  this.width = width;
  this.height = height;

  Size.prototype.resize = function (newWidth, newHeight) {
    this.width = newWidth;
    this.height = newHeight;
  };
};

export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;

  Position.prototype.move = function (newX, newY) {
    this.x = newX;
    this.y = newY;
  };
};

export function changeWindow(ProgramWindow) {
  ProgramWindow.resize(new Size(400, 300));
  ProgramWindow.move(new Position(100, 150));
  return ProgramWindow;
};


export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  };
  
  resize(Size) {
    let width = Size.width;
    let height = Size.height;
    if (width < 1) width = 1;
    if (height < 1) height = 1;
    if (width + this.position.x > this.screenSize.width){
      width = this.screenSize.width - this.position.x;
    };
    if (height + this.position.y > this.screenSize.height) {
      height = this.screenSize.height - this.position.y;
    }; 
    this.size.resize(width, height);
  };

  move(Position) {
    let x = Position.x;
    let y = Position.y;
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + this.size.width > this.screenSize.width) x = this.screenSize.width - this.size.width;
    if (y + this.size.height > this.screenSize.height) y = this.screenSize.height - this.size.height;
    this.position.move(x, y);
  };
};
