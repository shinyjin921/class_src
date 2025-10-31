/**
 * datatype 자료형
 * 프로그램에서 처리할 자료의 형태
 * typeof
 * 숫자형:정수,실수(소수점)
 * 문자열
 * booelean : true/false
 * undefined null
 * ***/
// console.log(5+3);
// console.log(0.1+0.2);
//문자열 : '',"",`${}`,+
let userName = "홍길동"; //홍+길+동
console.log( "안녕하세요" + userName + "님");
console.log( `안녕하세요 ${userName}님`); //#{}

let data;
userName = null;
console.log( data );
console.log( userName );

//간접참조형:하나의 변수에 여러개의 데이터를 넣을 경우
//배열,객체(자바스크립트는 기본적으로 객체 배열),함수
//배열:하나의 변수에 여러개의 값을 저장 []
//변수명=[값,값,값,값........]; index

let colors = ['red','green','blue'];
console.log( colors[1] );
console.log( colors.length );

let txt = "홍길동";
let add = txt;
console.log( txt,add);
txt = "신해철";
console.log( txt,add);

let a = [1,2,3];
let b = a;
console.log( a,b );
// a=[5,6,7,8];
// console.log( a,b );
// a[4] = 9;
// console.log( a,b );
a[3] = 9;
console.log( a,b );

let c = ['홍길동',4,false]
console.log( c[0] );
let d = c;
console.log( c===d );
c[3] = 100;
console.log( d );
console.log( typeof c ); //object
/*
*객체 : 여러개의 유형을 하나로 묶어놓은 것
*JS에서는 배열과 함수도 객체로 취급합니다.
*객체안에는 키:값(프로퍼티)
*변수명 = {
키:값,(프로퍼티)
키:값,
키:값.........
}
 */
let person = {
  user:"홍길동",
  age:30,
  phone:"010-1111-2222" //한줄로도 표기 가능!
}
console.log( person.user );
person.user = "신해철";
console.log( person.user );