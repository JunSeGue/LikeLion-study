let x = 20;
let valid = typeof x === "number" && x>100 &&x%3 ==0 

console.log(valid);

/*
{ 
    var json = '{"kor":100, "eng":90, "math":80}';
    var obj = JSON.parse(json);
    // console.log(obj.kor, obj.eng, obj.math);
    console.log(obj)
    
}
*/
/* let funcs = [];

for (let i=0; i<3; i++){
	funcs[i] = function(){
        console.log(i)
    }
};
funcs[0]();
funcs[1]();
funcs[2]();
*/

// {
// var gx = 1;
// gy = 2;
// function test() {
//     var x = 20;
//     y=30;
//     console.log(x, y, gx, gy);
//     console.log(window.x, window.y,window.gx, window.gy);
//     console.log(global.x, global.y, global.gx, global.gy);
// }
// test();
// }
/*
// let x=20;
var x= 20;
console.log(x);
console.log(window.x)
*/

/*{
    let f3;
    let x = 100;
    let f1 = function () {
        x = 40;

        f3 = function () {
            console.log(x);
        }
    }

    f1();
    console.log("f1실행", )
    f3();
    console.log("f3 실행")
}*/

/*
{
  // let add = new Function('a', 'b', 'return a+b')
  let add = function (a, b) {
    return a + b;
  };
  console.log("add call", add(10, 20));
}

{
  let nums = [1, 32, 23, 14, 5, 100, 80];
  // 20 인 숫자를 2배로 만들어서 합을 구하기
  let result = nums
    .filter((num) => num < 20)
    .map((num) => num * 2)
    .reduce((acc, num) => acc + num, 0);
  console.log("result", result);
}
*/

/*
// filter()
{
    let nums = [1, 32, 23, 14, 5, 100, 80];
    let result = nums.map((num) => num * 2 );
    let sum = result.reduce(
        (acc, num) => acc+num, 0
    );
    console.log("SUM:",sum);

    for(const num of result)
        console.log(num);
}

// splice() 활용 예제
{
    let nums = [1, 2, 3, 4, 5];
    console.log("FUllArray",nums);
    // nums.splice(2);
    // nums.splice(2,1);
    nums.splice(2,0);
    console.log(nums);
}
*/
