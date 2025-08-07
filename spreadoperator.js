/* 전개 연산자 (Spread Operator, 스프레드 연산자) 
문법: ...
기능: 배열, 객체, 문자열 등 반복 가능한(iterable) 값을 ‘펼쳐서’ 사용할 수 있게 해주는 문법
*/
const colorArray = ["red", "green", "blue"];
const newColorArray = [...colorArray, "orange"];
console.log(colorArray);
console.log(newColorArray);
console.log("------------------");

for(let apple of colorArray){
	console.log(apple);
}
console.log("------------------");

newColorArray.forEach((value, index)=>{
    console.log(`${value}`);
});
console.log("------------------");



const numArray = [2, 3, 4];
const newNumArray = [1, ... numArray, 5];
console.log(newNumArray);
console.log("------------------");



/* 함수 인수 목록 전개 - 전개 연산자를 사용하여 함수의 인수 목록으로 펼칠 수 있다.  */
const array = [1, 2, 3];
console.log(`array 배열출력: ${array}`);

function myPrint(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
myPrint(...array);
console.log("------------------");

const display = ([a, b, c]) => {    
    console.log(a);
    console.log(b);
    console.log(c);
}
display(array);
console.log("------------------");



const stringArray = [ ..."xyz"];    //문자는 하나씩 하나씩 분리를 함.  [x,y,z] 이 배열 형태가 된거임
console.log(stringArray);
myPrint(...stringArray); 
console.log("------------------");

const print = (...array) => {
    for(let a of array){
        console.log(a);
    }
}



/* 배열 연결 - 전개 연산자를 활용하여 배열을 연결한다. */
const array1 = ["a", "b", "c"];
array1.push( ... ["d", "e"]);
console.log(array1);
print(...array1);
console.log("------------------");



/*  배열 최대값 - Math.max로 전개 연산자를 이용한 값을 인자로 전달하여 배열 최대값을 구한다. */
const array2 = [10, 20, 60, 50, 30];
console.log("최대값: " + Math.max(...array2));
console.log("최대값: " + Math.max(10, 20, 60, 50, 30));
console.log("최대값: " + Math.max(array2));