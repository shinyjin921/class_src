/**
 * 반복문:코드를 원하는 횟수만큼 반복
 * for,for-in,for-of
 * Array 객체-map,foreach,filter.........
 * while,do-while >거의 사용할일이 없음
*/
//배열,객체,함수---->object(간접참조)
//배열 :변수명 = [값1,값2,값3,값4..]
//               변수명[0],변수명[2]............변수명.length
// 마지막 변수 수를 알고싶으면length -1
// let a = [1,2,3,4,5,6];
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a[5]);
// //console.log(a[n]);
// console.log("a의 데이터 갯수", a.length);

/**
 * for(초기값;조선식;증감식){반복되는 문장}
 *  */
// for( let i=0; i<6; i++ ){
//   console.log(`a[${i}]=${a[i]}`);
// }
/**
 * 1.1~5까지 출력
 * 반복문 1번째
 * 반복문 2번째
 * ...
 * 반복문 5번째*/

// let a = [1,2,3,4,5];

// for( let b=1; b<=5; b++){
//   console.log(`반복문-${b}번째`);
// }

/**
 * 1~10까지 숫자를 출력해주세요.
 */
// for( let c=1; c<=10; c++){
//   console.log(`${c}`);
// }

/**
 * hello,js를 5번 출력하세요
 */
// for( let i=0; i<5; i++){
//   console.log(`hello,js`);
// }

/**
 * 1~10사이의 짝수만 출력하세요.
 */
// for(let i=1; i<11; i++){
//   if(i%2 === 0){
//     console.log(i);
//   }왜 %로 하는건지...?
// }
/**
 * 카운트 : 5 4 3 2 1
 */

// for( i=5; i>=1; i--){
//   console.log(`카운트-${i}`);
// }
/**
 * 1~10까지의 합을 구하세요.
 * 1+2+3+4+5+6+7+8+9+10
 */
// let sum = 0;
// for( let i=1; i<=11; i++){
//   sum +=i;
// }
// console.log("1부터 10까지의 합:",sum);

// let a=3;
// for( let i=1; i<=9; i++){
//   console.log(`3*${i} = ${3*i}`)
// }

/**
 * 2~9단까지 출력
 * 2*1=2 3*1=3 4*1=4
 */

for(let i=2; i<10; i++){
  for(let a =1; a<10; a++){
    console.log( `${i}*${a}= ${i*a}` );
  }
  console.log('-----------------------');
}
