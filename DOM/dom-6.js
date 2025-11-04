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

const MAX_LAN = 10;
let count = 1;
const minusBtn =document.querySelector('.product>button:nth-child(1)');
const plusBtn = document.querySelector('.product>button:nth-child(3)');
const pElem = document.querySelector('div>p');

plusBtn.onclick = ()=>{
  count++;
  if( count >= MAX_LAN ){
    count = MAX_LAN;
    plusBtn.disabled = true;
  }
  minusBtn.disabled = false;
  pElem.innerHTML = `${count}`;
}

minusBtn.onclick = ()=>{
  count--;
  if (count <= 1){
    count = 1;
    minusBtn.disabled = true;
  }
  plusBtn.disabled = false;
  pElem.innerHTML = `${count}`;
}

const init = ()=>{
  minusBtn.disabled =true;
  count = 1;
  pElem.innerHTML = `${count}`;
}

init();

