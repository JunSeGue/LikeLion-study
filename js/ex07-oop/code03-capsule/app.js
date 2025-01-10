// 외부라이브러리 : npm install readline-sync
// 절차적인 프로그래밍
/*
1. 고급언어를 이용한 절차작성
2. 제어구조를 이용한 흐름제어
*/

/*
    1. 코드가 커지는 문제 : 함수로 분리
    2. 변수의 스코프가 너무 넓은 문제 : 지역화
    3. 데이터의 구조화 : 데이터를 표현하지 않고 있다. : 구조화된 데이터 형식
    4. 집중화
*/
// const readlineSync =require("readline-sync");
// const lib = require("./lib.js");

import {
  printHeader,
  inputMenu,
  inputScore,
  printScore,
  printFooter,
} from "./lib.js";

// let kors = [];
// let engs = [];
// let maths = [];

let isRun = true;

printHeader();

while (isRun) {
  let menu = inputMenu();
  switch (menu) {
    case 1:
      inputScore();
      break;
    case 2:
      printScore();
      break;
    case 3:
      isRun = false;
      break;
  }
}

printFooter();

// -------------------------------------
