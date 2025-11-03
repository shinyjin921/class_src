/**
 * 배열에서 원하는 값의 index 번호 알아오기
 * index는 2 입니다.
 */
let list = ['사과','포도','바나나','딸기','수박'];
let target = '바나나';

let index = 0;
while(index<list.length){
  if(list[index] === target){
    console.log(`index는 ${index}입니다`);
    break;
  }
  index++;
}
/**
 * 숫자배열:[5,8,2,10,3,7]
 * 배열에 있는 숫자들의 합이 20이 넘으면 종료하세요.
 * 1.숫자 배열을 선언:numbers
 * 2.numbers의 첫번째 값을 읽어와야 함.
 *   index 값을 선언 : i
 * 3.값을 읽어와서 -->변수에 더해야 함.sum
 * 4.sum값이 20보다 크거나 같은지 체크 : if
 *   참-->멈추기
 *   거짓 -->i++
 */

// let numbers = [5,8,2,10,3,7];
// let i = 0, sum =0;
// while(i<numbers.length){
//   sum+=numbers[i];
//   if(sum>=20){
//     console.log(`sum=${sum}`);
//     break;
//   }
//   i++;
// }

/**
 * 숫자배열 [5,-1,8,-1,2,-1,9]
 * -1을 제외한 양수의 합을 출력하세요
 * 24출력
 * 1.숫자 배열을 선언:data
 * 2.data에서 첫번째 값을 읽어와야 함
 *  index값을 이용하여 읽어오기:n
 *3.숫자배열의 data 갯수만큼 반복해서 읽어오기
    합계를 구하는데, 읽어온 값이 -1임 건너뛰기
 */

// let data=[5,-1,8,-1,2,-1,9];
// let n=0;
// let total = 0;
// while(n<data.length){
//   if(data[n] === -1){
//     continue;
//   }
//   n++;
//   total += data[n];
// }
// console.log(`total = ${total}`);

//for-of
let data=[5,-1,8,-1,2,-1,9];
let total = 0;
for(let n of data){
  if(n < 0 ){
    continue;
  }
  total+=n;
}
console.log(`total = ${total}`);