let dic = {
    boy : "소년",
    girl : "소녀",
    friend : "친구"
};
console.log(dic.boy);
console.log(dic.girl);
console.log(dic.friend);

//프로퍼티 추가
dic.apple = '사과';
dic.ten = 10;
console.log(dic.apple);
console.log(dic.ten);

//프로퍼티 삭제
delete dic.girl;
console.log(dic.girl);
console.log("---------------");

// [요구사항 1] 책정보를 가진 객체를 생성하여 출력 (프로퍼티 3개 이상)
let book = {
    title : "little princess",
    author : "perry",
    price : "3000"
}
console.log(`
    title is ${book.title}
    author is ${book.author}
    price is ${book.price}
`);
console.log("------------")


//프로퍼티 수정
let obj1 = {
    present : "현재",
};
console.log(obj1.present);
obj1.present = "선물";
console.log(obj1.present);

//객체 상수 프로퍼티 수정 
const obj2 = {
    present : "현재",
};
console.log(obj2.present);
obj2.present = "선물";
console.log(obj2.present);
console.log("-------------------");


//객체 상수 변경 (실행결과? 오류 발생)
// const obj3 = {
//     present : "현재",
// };
// obj3 = { };   // 'obj3에 비어있는 객체를 주겠다' -> 오류(상수니까)  const를 let으로 바꿔보기 
// console.log(obj3.present); 
// obj3.present = "선물";
// console.log(obj3.present);


//객체의 메소드 
const musician = {
    play: function(instrument){
        return `${instrument}을(를) 연주한다.`;
    }
}
console.log(musician.play("기타"));
console.log(musician.play("피아노"));
console.log("----------------");

//메소드 축약형
const tool = {
    play(instrument) {
        return `${instrument}을(를) 연주한다.`;
    }
}
console.log(tool.play("베이스"));
console.log(tool.play("드럼"));
console.log("----------------");


//[요구사항 2] 이름, 나이를 프로퍼티로 가진 객체 리터럴을 정의해 주세요.
//프로퍼티를 출력할 수 있는 메서드를 정의해 주세요(객체명: memberData)
//예시: 20세인 홍길동님을 소개합니다.
let memberData = {
    name : "홍길동",
    age : 20,
    display: function(){
        return `${this.age}세인 ${this.name}님을 소개합니다.`;
    }
    // display(){
    //     return `${this.age}세인 ${this.name}님을 소개합니다.`;
    // }
};
console.log(memberData.display());
console.log("--------------------");



//대괄호 표기법
console.log(dic['boy']);
console.log(dic['friend']);
console.log("--------------------")

let idx = 0;
let code = {
    ['index' + idx++] : idx,
    ['index' + idx++] : idx,
    ['index' + idx++] : idx,
};
console.log(code.index0);
console.log(code.index1);
console.log(code.index2);
console.log("----------------")

//단출 프로퍼티 적용전
// let id = "javauser";
// let pwd = "java1234";

// let userLogin = {
//     id: id,
//     pwd: pwd,
// }
// console.log(userLogin.id);
// console.log(userLogin.pwd);
// console.log("----------------"); 


//단축 프로퍼티 적용 
let id = "javauser";
let pwd = "java1234";
        
let userLogin = {id, pwd}

console.log(userLogin.id);
console.log(userLogin.pwd);
console.log("----------------");

let course = "백엔드 개발 심화";
let subject = "Spring Boot";

const training = { course, subject };

console.log(`${training.course} 과정의 과목은 ${training.subject}입니다.`);
console.log("----------------");

//for...in
let user = {
    id : "nodeuser", 
    pw : "node1234",
    name : "홍길동",
    mobile : "010-8934-XXXX", 
    country : "대한민국"
}
                             
for(let info in user){       //in을 쓸때 : 값이 아니라 user에 있는 프로퍼티 명(key)을 가져옴. 
  console.log(`${info} : ${user[info]}`);   //info. 이라고 해버리면 info라고 하는 프로퍼티 찾는거지 키를 찾는게 아니다.
}
console.log("----------------");

const examples = [
  { course: "프론트엔드 입문 과정", subject: "HTML과 CSS 기초" },
  { course: "백엔드 개발 심화", subject: "Node.js 실무" },
  { course: "앱 개발 종합반", subject: "React 실습" }
];

for (const training of examples) {   //of을 쓸 때: 배열
  console.log(`${training.course}의 과목은 ${training.subject}입니다.`);
}
console.log("----------------");



// 클래스 선언문
class Coffee1 {
     constructor() {      // 생성자 역할 = 필드 초기화
          this.name = "아메리카노";
     }
     getName() {
          return this.name;
     }
     setName(name) {
          this.name = name;
     }
     display() {
          console.log(this.name);
     }
}
let coffee1 = new Coffee1();
console.log(coffee1.name);
console.log(coffee1.getName());
coffee1.display();
console.log("----------------"); 


/* 클래스 표현식 */
const Coffee2 = class {
     constructor() {
          this.name = "카푸치노";
     }
     getName() {   // 설정자 접근자x 그냥 일반 매서드.
          return this.name;
     }
     setName(name) {
          this.name = name;
     }
     display() {
          console.log(this.name);
     }
};
const coffee2 = new Coffee2();
console.log(coffee2.name);
console.log(coffee2.getName());
coffee2.display();
console.log("----------------");


/* 설정자, 접근자 */
console.log("----------설정자 접근자----------")
class Coffee {
     constructor(name) {
          this._name = name;    //매개변수와 필드의 변수 구분하고자 
     }
     // getter 함수
     get name() {
          console.log("call getter");
          return this._name;
     }
     // setter 함수
     set name(name) {
          console.log("call setter");
          this._name = name;
     }
     display() {
          console.log(this._name);
     }
}
let coffee = new Coffee("Americano");
console.log(coffee.name);
coffee.name = "Espresso"  //Espresso로 다시 설정하겠다. 설정자 호출 
console.log(coffee.name);
//coffee.display();
console.log("----------------"); 


//[요구사항 3] 영화정보를 가진 클래스를 선언하고 영화 제목과 장르를 프로퍼티로 선언한다.
// 인스턴스 생성시 값 대입하여 영화정보를 출력하라.
class movie{
    constructor(title, genre){
        this._title = title;
        this._genre = genre;
    }
    
    get title(){
        return this._title;
    }
    set title(title){
        this._title = title;
    }

    get genre(){
        return this._genre
    }
    set genre(genre){
        this._genre = genre
    }

    display(){
        console.log(`영화 제목은 ${this.title}이고, 장르는 ${this.genre}입니다.`)
    }
}
let apple = new movie("인터스텔라", "과학");
apple.display();

