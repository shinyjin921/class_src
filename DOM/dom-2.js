//1.버튼이 클릭 했을때
//2.이미지 속성을 변경:src
const btnElem = document.querySelector("button");
  const imgElem = document.querySelector("img");
// console.log(btnElem);
let count =1;
const handleClick = () => {
  count++;
  if(count >= 6 ){
    count = 1;
  }
  imgElem.src = `./images/img-0${count}.png`;
};
btnElem.onclick = handleClick;
