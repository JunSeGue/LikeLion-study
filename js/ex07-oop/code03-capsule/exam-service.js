// 캡슐이 아닌 캡슐
// 캡슐의 조건
/*
캡슐화란?
- 객체의 속성과 행위를 하나로 묶고
실제 구현 내용 일부를 외부에 감추어 은닉한다.
*/
/*
 1. 현재 이코드는 exam 데이터들을 관리하는 서비스이다.
 하지만 exam이 제공하는 서비스는 아직  분리학
 
 2. exam.js가 하는 역활을 exam단위 데이터
 */

 /*
let exams =[];  //성적 데이터

export const add= (exam) => {
    exams.push(exam);
};

export const getList = (page = 1, size = 3) => {
    let exams1 = exams
      .sort((a, b) => b.kor - a.kor)
      .slice(0, 3)

      return exams1;
}

export const size = () => exams.length
*/

// 위의 코드를 이용해서ExamService 캡술을 작성해주세요
// ExamService는 서비스 함수는 add, getLsit, size, get(index)4개입력력
// 내부적으로 사용하는 속성은 Exam객체를 담을 수 있는 배열열
// 배열명은 exams로 하겠습니다.

export default class ExamService {
    #exams = [];
    constructor() {
        this.#exams = [];
    }

    add(exam) {
        this.#exams.push(exam);
    }

    getList(page = 1, size = 3) {
        let exams = this.#exams
            .sort((a, b) => b.total() - a.total())
            .slice(0, 3);

            return exams;
    }

    get size() {
        return this.#exams.length;
    }

    get(index) {
        return this.#exams[index];
    }
}
