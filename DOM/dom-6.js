/**
 * 상품 수량 조절 기능 만들기
 * MAX_LAN은 10으로 설정합니다.
 * 1.상품 수량은 1~MAX_LAN사이에서만 변경이 가능합니다.
 * 2.초기 수량은 1로 설정합니다.
 * 3.(-)버튼을 누르면 수량이 1씩 감소합니다
 *   (+)버튼을 누르면 수량이 1씩 증가합니다
 * 4.수량이 1일때는 (-)버튼을 비활성화 합니다
 * 5.수량이 MAX_LAN일때는 (+)버튼을 비활성화 합니다
*/

const MAX_LEN = 10;
const minusBtn =document.querySelector('.product>button:nth-child(1)');
const plusBtn = document.querySelector('.product>button:nth-child(3)');
const pElem = document.querySelector('div>p');

for($pElem of MAX_LEN){
}

$plusBtn.onclikck =() =>{
  MAX_LEN++;
  if(MAX_LEN <= 10){
    MAX_LEN = 10
    $plusBtn.disabled = true;
  }
}
console.log( $plusBtn );
$minusBtn.onclikck = ()=>{
  MAX_LEN--;
  if(MAX_LEN <= 1 ){
    MAX_LEN = 1
    $minusBtn.disabled = true;
  }
}
