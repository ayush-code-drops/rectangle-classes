class rectangle{
    #length;
    #width;
    constructor(l,w) {
        this.#length = l;
        this.#width = w;
    }

    getArea(){
    return this.#length*this.#width
    }
}

class square extends rectangle{

}

const rect = new rectangle(10, 20);
console.log(rect.getArea())

const sq = new square(10, 10);
console.log(sq.getArea())
