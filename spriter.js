class SpriteAnimation {
  constructor(spriteSheet, x, y, w, h, frames, speed) {
    this.spriteSheet = spriteSheet;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.frames = frames;
    this.speed = speed;
    this.index = 0;
    this.counter = 0;
  }
  
  display() {
    image(this.spriteSheet, this.x, this.y, this.w, this.h,
          this.index * this.w, 0, this.w, this.h);
    this.counter++;
    if (this.counter >= this.speed) {
      this.counter = 0;
      this.index++;
      if (this.index >= this.frames) {
        this.index = 0;
      }
    }
  }
}