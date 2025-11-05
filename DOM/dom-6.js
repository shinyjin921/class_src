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
const imgEiem = document.querySelectorAll('aside>img');
/*
 *imgElem : img객체가지고 왔음
  imgElem : 0~2번까지 하나씩 읽어 들여서 onclick처리
*/
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

for( let i=0; i<imgEiem.length; i++){
  imgEiem[i].onclick = ()=>{
    //1번 이미지의 src가 바뀌어야함.
    const elem =document.querySelector('main>img');
    // elem.src = `./images/img-0${i+2}.png`;
    elem.setAttribute('src',`./images/img-0${i+2}.png`);
    //위의 방식과 같은 방식
  }
}

//상세 설명보기 버튼을 누르면 아래 내용이 보이기
//버튼 요소 가져오기
const detailBtn = document.querySelector('#detail>button');
const detailTxt = document.querySelector('#detail>.txt');
//버튼을 클릭해서 텍스트 영역을 보이게
detailBtn.onclick = ()=>{
  // detailTxt.style.display = 'block';
  detailTxt.classList.toggle('hide');
  //toggle >있으면 하고 없으면 말고~ 의 역활
  //버튼의 글씨가 상세설명 "보기"면 상세설명 "닫기"로
  //상세설명 닫기면 상세설명 보기로 변경
  const btnTxt = detailBtn.textContent;
  if( btnTxt === '상세설명보기' ){
    detailBtn.textContent = '상세설명닫기';
  }else{
    detailBtn.textContent = '상세설명보기';
  }
}
const init = ()=>{
  minusBtn.disabled =true;
  count = 1;
  pElem.innerHTML = `${count}`;
}

init();

