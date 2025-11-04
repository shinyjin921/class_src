/**
 * 반복을 이용해서 click처리
 * class로 list의 백그라운드 컬러 변경
 */
const h1Elem = document.querySelector('h1');
const imgElem = document.querySelector('img');
const liElem = document.querySelectorAll('ul>li');
console.log( liElem );
const showImg = (num)=>{
  imgElem.src = `./images/img-0${num}.png`;
}
console.dir (liElem[0]);
const init = ()=>{
  for(let i=1; i<6; i++){
    liElem[i-1].onclick =() =>{
      h1Elem.textContent = `${i}번 이미지`;
      imgElem.src = `./images/img-0${i}.png`;
      imgElem.alt = `${i}-이미지`;
      //이전에 이미 show 라는 클래스가 들어간 항목을 찾습니다
      const preElem = document.querySelector('.show');
      //첫번째 class show가 없을 경우
      if( preElem ){
        // preElem.className='';
        preElem.classList.remove('show');
      }
      // preElem.className='';
      // liElem[i-1].className = 'show line';
      liElem[i-1].classList.add('show');
    }
  }
}
init();

