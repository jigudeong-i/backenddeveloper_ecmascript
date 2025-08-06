/* 함수 선언식 */
function sum1(num1, num2) {
    return num1 + num2
}
console.log(sum1(5, 4));
console.log("----------------"); 


/* 함수 표현식 - 익명함수 */
const sum2 = function(num1, num2){
    return num1 + num2;
};
console.log(sum2(4, 7));
console.log("----------------"); 


/* 함수 표현식 - 화살표 함수
// function을 생략하고 =>로 대체한다. 
// 함수가 return문만 가지고 있다면 return문 생략가능. */
const sum3 = (num1, num2) => num1 + num2;
console.log(sum3(2, 9));
console.log("----------------"); 


// 익명함수와 화살표 함수
const fn = function(){
    return "자바스크립트";
};
console.log("fn()", fn());

/*const afn = () => {
    return "자바스크립트";
};*/
const afn = () => "자바스크립트";
console.log("afn()", afn());
console.log("----------------");


// 화살표 함수는 매개변수가 하나일 때 - 괄호()를 생략할 수 있다. (매개변수가 2개이상이면 생략x)
/*const fn1 = function(value) { 
    return 100 + value;
};
console.log("fn1(10)", fn1(10));*/
const afn2 = value => 100 + value;
console.log("afn2(1)", afn2(1));
console.log("----------------");

