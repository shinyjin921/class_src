/**
 * 다음 버튼을 누르면 1>2>3>4>5
 * 5번이 되면 멈추도록
 * 0.변수가 선언이 되어야함:count
  변수명:elem,e,$btn
*/
/**
 * 1.다음버튼의 요소를 선택
 * 2.다음 버튼을 누르면 count 값이 1 ->2 ->3 ->4 ->5
 */
//전역변수 선언
let count = 1;
//1.다음 버튼의 요소를 선택
const $nextBtn = document.querySelector('.next');
//이전버튼의 요소를 선택
const $prevBtn =document.querySelector('.prev');
$prevBtn.disabled = true; //기본적으로 1이기때문에 disabled 처리
//이미지 요소를 선택
const $img = document.querySelector('img');
//2.다음 버튼이 클릭을 하면
$nextBtn.onclick = ()=>{
  //이전버튼 활성화
  $prevBtn.disabled =false;
  //count값이 1씩 증가
  count++;
  //카운트 값이 5보다 커지면 count = 5가 되어야 함.
  if( count >= 5 ){
    count = 5;
    //더이상 다음 버튼이 눌리지 않게 disabled
    $nextBtn.disabled = true;
  }
  //이미지의 src 속성을 변경
  $img.src = `./images/img-0${count}.png`;
}
//이전버튼을 클릭을 했을때 할일을 등록
$prevBtn.onclick = ()=>{
  //다음버튼을 활성
  $nextBtn.disabled = false;
  //5번>4>3>2>1 1번이 되면 이전버튼을 비활성화
  count--;
  if( count <= 1 ){
    count=1;
    $prevBtn.disabled = true;
  }
  $img.src = `./images/img-0${count}.png`;
}