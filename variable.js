let language = "java";
console.log(language);
// 같은 일므으로 중복 선언 불가
// 변수 선언의 끌어올림이 발생하지 않는다. (호이스팅)
console.log("------------------------")

// const 상수 선언. 선언과 동시에 초기화해야 한다.
const number = 10;
console.log(number);

// 여러 타입의 문자열 출력 
const myName = "홍길동";
const age = 25;
const height = 178.5;

console.log("연결 연산자로 출력");
console.log("My name is " + myName + ", " + "My age is " + age + ", " + "My height is " + height);
console.log("-------------------");

// 백틱(`)을 사용한 여러 타입의 문자열 출력
// 템플릿 리터럴에는 플레이스홀더 ${...}를 사용할 수 있다.
// 변수 삽입 시에는 ${변수명} 문법을 사용하여 문자열 내부에 값을 삽입한다. 
console.log("템플릿을 리터럴로 출력");
console.log(`My name is ${myName}, My age is ${age}, My height is ${height}`);
console.log("--------------------");

console.log("여러 라인으로 출력");
console.log("My name is " + myName + "\n" + "My age is " + age + "\n" + "My height is " + height);
console.log("--------------------");    

console.log("템플릿 리터럴로 출력");
console.log(`My name is ${myName}
My age is ${age}
My height is ${height}`);
console.log("----------------------");

// 백틱 안에서의 따옴표 사용
const say = `안녕맨은 나에게 이렇게 말했다. "안녕!"`;
const intro = `I'm a programmer`;
console.log(say);
console.log(intro);
console.log("--------------------")

// 예제 - 아래 변수로 출력구문을 정의해 출력해 주세요.
const userName = "김민호";
const userAge = 35;
const location = "인천 광역시 연수구";
const job = "백엔드 개발자";
const hobby = "영화보기, 산책하기";
const email = "minhode@example.com";

console.log(`
my name is ${userName}
my age is ${userAge}
my address is ${location}
my job is ${job}
my hobby is ${hobby}
my email is ${email}    
`)