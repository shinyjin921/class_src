/**
 * 배열과 같이 사용되는 for
 * for-of문
 */
let colors = ['red','green','blue'];
/**
 * color-1:red    0 colors[0]
 * color-2:green  1 colors[1]
 * color-3:blue   2 colors[2]
 */

// for(let i=0; i<colors.length; i++){
//   console.log(`color-${i+1} : ${colors[i]}`)
// }

for(let color of colors){
  console.log(`색상:${color}`);
}

//for-of 연습문제
/**배열[34,67,23,12,54] 가장 작은수와 가장 큰 수를 출력해보세요. */

/**
 * 객체:모든 사물
 *     키:값,(프로퍼티)
 */
// let user = {
//   user_name : '홍길동',
//   age: 30,
//   job: '의적'
// }
// console.log( user.job );

/**
 * for-in
 */
// for(let key in user){
//   console.log( user[key] );
// }

//문자열:문자들의 결합 ex>h+e+l+l+o
//문자열은 배열로 처리가능
// let txt = 'hello';
// console.log(txt[1]);

/**
 * 1~25까지 출력
 */

let a=1;
