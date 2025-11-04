//버튼을 누르면 해당 사이트 링크가 연동이 되어야함
//사이트 이동을 누르면 연동된 링크로 이동
const aElem = document.querySelector('a');
const naverBtn = document.querySelector('.btn-wrap>button:nth-child(1)');
naverBtn.onclick = ()=>{
  aElem.href = 'https://naver.com'
}
const daumBtn = document.querySelector('.btn-wrap>button:nth-child(2)');
daumBtn.onclick = ()=>{
  aElem.href = 'https://daum.net'
}
const googleBtn = document.querySelector('.btn-wrap>button:nth-child(3)');
googleBtn.onclick = ()=>{
  aElem.href = 'https://google.com'
}
