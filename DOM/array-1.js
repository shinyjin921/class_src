/**
 * 배열 객체의 4총사
 * 고차 메서드 : 함수를 인자로 받거나,함수를 반환하는 메서드
 * (high-order method)
 * forEach,map,filter,reduce
 */

const colors = ['red','purple','green','blue','black'];
// for( let i=0; i<colors.length; i++ ){
//   console.log(colors[i]);
// }
//forEach는 각 요소를 순서대로 꺼내서 실행,출력용
colors.forEach((_,idx)=>{
  // console.log( `${idx}번째 색상은 ${color}입니다`)
});
  
//map : 새로운 배열을 만들어 줍니다.(필수로 값을 되돌려준게 필요)
    // ㄴ배열의 각요소를 가공하여 새로운 배열을 만들어 줌//원본의 길이와 같을때 사용
// const addColors = colors.map((value)=>{
//   return value+'-1';
// });
const addColors = colors.map(value=>value+'-1');//위의 문장과 같은 문장(매개변수가 하나밖에 없으면 괄호 생략 가능,받아오는 값도 하나면 중괄호 생략가능)
console.log( colors );
console.log(addColors);

if(5 === '5') console.log( '같다' );

//filter : 조건에 맞는 요소만 새 배열로 반환
//         조건식이 참인 경우//원본의 길이와 다를때 사용
const longColors = colors.filter((color)=>{
  return color.length>=5;
});
console.log( longColors );

//reduce : 누적 계산값을 만듬(합계,문자열 결합)//값만 읽어서 사용을 할때 사용
const numbers = [4,6,2,7];
// let sum = 0;
// for(let i =0; i<numbers.length; i++){
//   sum+=numbers[i];
// }
// console.log( sum );
const total = numbers.reduce((sum,i)=>{
  return sum+i;
});
console.log( 'total=',total );