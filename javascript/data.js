// let today="20251031";
// const NUM = 5;
// today = "금요일";
// NUM ="5";
// console.log(typeof today);
// console.log( today );

// A and B 결과
// true  false  false
// false true   false
// true  true   true

let a=20;
b= a++;
console.log( b ); 
console.log ( a );

b = --a;
console.log( b ); 
console.log ( a );

a=a++;
console.log( a ); 

// let isLogin = true;
// isLogin && console.log( "로그인을 했습니다" );

let isLogin = false;
isLogin && console.log( "로그인을 했습니다" );

let isEmail = false;
isEmail || console.log( "이메일입력!" );

let userName = ""; 
// 0,nullm,'',false,undefined
let displayName = userName || "Guest";
console.log(displayName);


