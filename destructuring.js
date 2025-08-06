/* 비구조화 할당 이전 (파일명: destructuring.js) */
console.log("-------------비구조화 할당 안 쓸 때");
const week1 = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']; // 배열: const array = []; 객체 리터럴: const obj = {}; 
const mon = week1[0];
const tue = week1[1];
const wed = week1[2];
console.log(mon);
console.log(tue);
console.log(wed);
//console.log(`${mon} ${tue} ${wed}`); 


//비구조화 할당(구조 분해 할당): 객체의 속성 또는 배열의 값을 분해하여 그 값을 변수에 각각 할당하여 사용하는 표현식.

/*const color = ['red', 'green', 'blue'];
let r = color[0];
let g = color[1];
let b = color[2];*/
console.log("------------비구조화 할당 쓸 때(구조 분해 할당)");

const color = ['red', 'green', 'blue'];
const [r, g, b] = color;  // 앞에서 부터 순서대로 담는다.
console.log(r);
console.log(g);
console.log(b); 
console.log("------------------"); 

/* const array = [1, 2, 3];
const one = array[0];
const two = array[1];
const three = array[2]; */

const array = [1,2,3];
const [one, two, three] = array;

console.log(`${one} ${two} ${three}`); 
console.log("------------------"); 

/* 변수 값 수정 */
const color1 = ['red', 'green', 'blue'];
let [r1, g1, b1] = color1;        // 값을 변경하기 위해 let 으로 선언 
[b1, g1, r1] = [r1, g1, b1];
console.log(`${r1} ${g1} ${b1}`)
console.log("------------------"); 

/* 더 간결하게 */ 
const [b2, g2, r2] = ['red', 'green', 'blue'];
console.log(r2);
console.log(g2);
console.log(b2);
console.log("------------------"); 


/* 기본값 할당 */
const [j1, js1, c1 = 'C언어'] = ['java','javascript'];
console.log(j1);
console.log(js1);
console.log(c1);
console.log("------------------"); 

/* 일부 요소값 생략하기 */
const [c2,,py2,re2] = ['C#', 'javascript', 'python', 'react'];
console.log(c2);
console.log(py2);
console.log(re2);
console.log("------------------"); 

// [요구사항 1] 3개 이상의 과일를 배열로 정의한 후 각각의 변수에 대입하여 출력해 주세요 
const [x,y,z,w] = ['apple', 'banana', 'carrot', 'deliment'];
console.log(x);
console.log(y);
console.log(z);
console.log(w);



/* rest 문법 (= rest 연산자)
형태: ...변수명
정의: 비구조화 할당 시, 남은 값들을 하나의 배열(또는 객체)로 모아서 저장
배열이나 객체를 비구조화 할당할 때 남는 값을 처리.

다음과 같이 배열을 비구조화 할당할 때 rest 문법으로 나머지 값을 처리할 수 있다. */
const [c, j, ...language] = ['C', 'javascript', 'python', 'react', 'C++'];
console.log(c);
console.log(j);
console.log("language 개수: ", language.length);
/*console.log(language[0]);
console.log(language[1]);
console.log(language[2]);*/
for(lang of language){
     console.log(lang);
}
console.log("------------------"); 


/* 배열의 결합 */
const array1 = ['html', 'javascript'];
const array2 = ['python', 'react', 'C++'];
const array3 = [array1, array2];

console.log("array1 배열 출력");
for(let i=0; i<array1.length; i++){
     console.log(array1[i]);
}
console.log("------------------"); 

console.log("array3 배열 출력");
console.log(array3);
console.log("------------------"); 

console.log("coffeeNames 배열 출력");
let coffeeNames = ["Americano", "Cappuccino", "Espresso"];
for(let name of coffeeNames) {     // of : 배열
     console.log(name);
}
console.log("------------------");

console.log("array3 배열 출력");
// const array3 = [array1, array2];
for(let language of array3){
     console.log(language);
}
console.log("------------------");

console.log("array4 배열 출력");
/* 전개 연산자(스프레드 연산자) 배열, 객체, 문자열 등의 반복 가능한 값을 개별 요소로 펼쳐서 사용하는 문법 */
const array4 = [...array1, ...array2];   //원소 하나하나 펼치겠다. 
for(let language of array4){
     console.log(language);
}
console.log("------------------"); 


// /* [요구사항 2] 학과 정보를 아래의 요청사항에 맞게 코딩해 주세요  
// const subject = ["컴퓨터공학과", "인문학과", "전기전자공학과", "역사학과"];
// // 1. 배열의 값 출력 (2가지 이상)
// // 2. 구조분해할당으로 설정하여 값 출력 */

const subject = ["컴퓨터 공학과", "인문학과", "전기전자공학과", "역사학과"];
for (let info of subject){
    console.log(info);
}
for (let i=0; i<subject.length; i++){
    console.log(subject[i]);
}
subject.forEach((value, index) => {     // 이거 몰랐음 
    console.log(`${index}. ${value}`)
});

subject.forEach((value, index)) => {
    console.log(``)
}


// /* 객체의 구조 분해 할당 
// 배열뿐만 아니라 객체도 구조 분해 할당이 가능하다.
// 객체를 구조 분해 할당할 때는 데이터 저장 순서가 아니라 key를 기준으로 한다. */

// const user = {
//      userId : 'javauser',
//      userPwd : 'java1234',
//      userName : '홍길동',
//      userAge : 30
// };

// //변수 userId, userPwd, userName, userAge에는 
// //user 객체 프로퍼티의 value가 key를 기준으로 각각 할당된다.
// let {userId, userPwd, userName, userAge} = user;

// console.log(userId);
// console.log(userPwd);
// console.log(userName);
// console.log(userAge); 
// console.log("------------------"); 


// /* 객체의 구조분해 할당 간소화 
// const {userId, userPwd, userName, userAge} = { 
//      userId : 'javauser', 
//      userPwd : 'java1234', 
//      userName : '홍길동', 
//      userAge : 30
// };

// console.log(userId);
// console.log(userPwd);
// console.log(userName);
// console.log(userAge);
// console.log("------------------"); 
// */

// /* 객체의 기본값 설정하기 
// const user = {
//      userName : '홍길동',
//      userAge : 30,
// };

// let {userId = 'guest', userPwd, userName, userAge} = user;
// console.log(userId);
// console.log(userPwd);
// console.log(userName);
// console.log(userAge);
// console.log("------------------");  
// */

// /* 객체의 나머지 요소 가져오기 
// const user = {
//      userId : 'nodeuser',
//      userPwd : 'node1234',
//      userName : '김철수',
//      userAge : 25
//  };
 
//  let {userId, ...rest} = user;
//  console.log(userId);
//  console.log(rest.userPwd);
//  console.log(rest.userName);
//  console.log(rest.userAge);
//  console.log("------------------");

//  let {...newUser} = user;
//  console.log(newUser.userId);
//  console.log(newUser.userPwd);
//  console.log(newUser.userName);
//  console.log(newUser.userAge);
//  console.log("------------------"); 
// */

// /* [요구사항 3] 구조 분해 할당으로 출력해 주세요. 
// const person = {
//      myName : "홍길동",
//      age : 25,
//      location: "서울시 강남구 테헤란로14길"
// };
// */
// /* 배열의 정렬(sort() 메서드) */
// const score = [88, 79, 99, 62, 100, 81];
// const sortedScore = score.sort();
// console.log(sortedScore.toString());
// console.log("------------------"); 

// /* 배열의 map() 메서드
// - 배열명.map()
// - 각 배열 요소에 대해 함수를 수행하여 새 배열을 만든다.
// - 값이 없는 배열 요소에 대해 함수를 실행하지 않는다.
// - 원래 배열을 변경하지 않는다. 
// */

// const numbers1 = [1, 2, 3, 4, 5];
// let numbers2 = numbers1.map(myFunction);
// //                 항목 값, 인덱스, 배열 자체 
// function myFunction(value, index, array) { // 이 함수는 3개의 인수를 취한다.
//      return value * 2;
// }

// console.log(numbers1.toString());
// console.log(numbers2.toString());

// /*const numbers3 = numbers1.map((value, index)=>{
//      return value * 5;
// });*/

// const numbers3 = numbers1.map((value, index) => value * 5);
// console.log(numbers3.toString()); 
// console.log("------------------"); 

// numbers1.forEach((value) => {
//   console.log(value);
// });
// console.log("------------------");