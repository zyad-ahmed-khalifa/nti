class rectangle {
    public width = 0
    public height = 0

    constructor (width: number, height: number) {
        this.width = width
        this.height = height
    }

    circumference() {
        return 2 * (this.width +this.height)
    }

}

const rect: rectangle = new rectangle(100, 10)
console.log(rect.circumference())