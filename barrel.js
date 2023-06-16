class Barrel {
  constructor() {
    this.width = 100;
    this.height = 200;
  }

  render() {
    this.#base();
    this.#sides();
  }

  #sides() {
    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(x, y, -this.height / 2, 0, 0);
      vertex(1.2 * x, 1.2 * y, -this.height / 2 + 10, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.2 * x, 1.2 * y, -this.height / 2 + 10, 0, 0);
      vertex(1.4 * x, 1.4 * y, -this.height / 2 + 30, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.4 * x, 1.4 * y, -this.height / 2 + 30, 0, 0);
      vertex(1.5 * x, 1.5 * y, -this.height / 2 + 50, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.5 * x, 1.5 * y, -this.height / 2 + 50, 0, 0);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 70, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 70, 0, 0);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 90, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 90, 0, 0);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 110, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.6 * x, 1.6 * y, -this.height / 2 + 110, 0, 0);
      vertex(1.5 * x, 1.5 * y, -this.height / 2 + 130, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.5 * x, 1.5 * y, -this.height / 2 + 130, 0, 0);
      vertex(1.4 * x, 1.4 * y, -this.height / 2 + 150, 1, 0);
    }
    endShape();

    beginShape(TRIANGLE_STRIP);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(1.4 * x, 1.4 * y, -this.height / 2 + 150, 0, 0);
      vertex(1.2 * x, 1.2 * y, -this.height / 2 + 170, 1, 0);
    }
    endShape();

    translate(0, 0, -this.height / 2 + 170);
    torus(60, 6);
  }

  #base() {
    beginShape(TRIANGLE_FAN);
    vertex(0, 0, -this.height / 2, 0, 0);
    for (let i = 0; i <= 360; i += 10) {
      const theta = (i * PI) / 180;
      const x = (this.width / 2) * cos(theta);
      const y = (this.width / 2) * sin(theta);
      vertex(x, y, -this.height / 2, 1, 0);
    }
    endShape();
  }
}
