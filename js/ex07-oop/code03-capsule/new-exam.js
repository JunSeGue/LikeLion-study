import Exam from "./exam.js";

class NewExam extends Exam{
    #com = 0;
    constructor(kor, eng, math, com = 0) {
        super(kor, eng, math);
        this.#com = com;
    }
    
    total() {
        return super.total() + this.#com;
    }
    
    avg() {
        return this.total() / 4;
    }
    
}

let ex1 = new NewExam(1,1,1,1);
console.log(ex1.total(), ex1.avg());