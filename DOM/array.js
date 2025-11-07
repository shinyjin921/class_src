/**
 * 배열객체
 * 배열:순서가 있는 데이터의 묶음
 *      [a,b,c]
 * index = 0부터 시작
 * 
 */
// const colors = ['red','green','blue'];
// console.log(colors[0])
//배열에서 꺼냄.
//끝에 추가(push),제거=꺼낸다(pop)
// const data = colors.pop();
// colors.push('black');
// console.log( colors );

// //배열
// const arr = [1,2,3];
// //생성자에 의해서 생성 : new
// const arr1 = new Array(3);
// console.log( arr1 );
// //배열 변환
// const arr2 = Array.from('abc');
// console.log( arr2 );

//맨 끝에 추가/제거 :push ,pop
//맨 앞에 추가/제거 :unshift()/shift
//중간 추가/제거/변경 : splice()

colors = ['red','green','blue']
colors.unshift('black');
let result = colors.shift();
// console.log( result );
// console.log( colors );
//splice ::여기서 처리되는건 배열
// result = colors.splice(1,2);
//pop
// result = colors.splice(colorslength-1,1);
//splice를 이용한 추가
colors.splice(1,0,'black');
console.log( colors );
//black를 purple로 변경
colors.splice(1,1,'purple');//시작값을 -로 넣으면 뒤에서부터!!
console.log( colors );

//배열에서 위치값을 찾을때
result = colors.indexOf('orange'); //인덱스 번호를 찾을때 indexO)f //값이 없는것을 찾을땐 -값으로 추출
console.log( result );
//값이 있는지 없는지
result = colors.includes('red');
console.log( result );