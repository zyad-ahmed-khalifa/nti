"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class rectangle {
    width = 0;
    height = 0;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    circumference() {
        return 2 * (this.width + this.height);
    }
}
const rect = new rectangle(100, 10);
console.log(rect.circumference());
//# sourceMappingURL=index.js.map