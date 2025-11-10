const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const sliderElem = document.querySelector('.slider');
const stopBtn = document.querySelector('.stop');
const playBtn = document.querySelector('.play');
//변수선언
let count = 1;
const MAX_SIZE = sliderElem.children.length +2;
const MAX_WIDTH = MAX_SIZE*300;
let timer = null;

//버튼 비활성화 함수
const disableButtons = ()=>{
    prevBtn.style.pointerEvents = 'none';
    nextBtn.style.pointerEvents = 'none';
}
//버튼 활성화 함수
const enableButtons = ()=>{
    prevBtn.style.pointerEvents = 'auto';
    nextBtn.style.pointerEvents = 'auto';
}

//prev버튼 처리될 때 실행되는 함수
const handlePrevClick = ()=>{
    if( count <= 0){
        return; //break,continue
    }
    disableButtons(); //클릭하면 바로 비활성화
    count--;
    sliderElem.style.transition = '0.5s';
    sliderElem.style.left = `-${count*100}%`;
}
//멈춤버튼을 누르면 자동 실행이 멈추고
stopBtn.addEventListener('click',()=>{
    clearInterval(timer);});
//플레이버튼을 누르면 자동 실행
playBtn.addEventListener('click',()=>{
    timer = setInterval(handleNextClick,3000);
});

//next버튼 처리될때 실행되는 함수
const handleNextClick = ()=>{
    //사진 넘길 떄
    if( count>= MAX_SIZE ){
        //실행이 안되게끔 
        return;
    }
    count++;
    //position을 slider에게 줬으니까 slider가 움직여야함.
    //sliderElem의 위치값이 변경 : left:-100%( main의 width값의)
    sliderElem.style.transition = '0.5s';
    sliderElem.style.left = `-${count*100}%`;
}

//prev버튼을 클릭했을 때
prevBtn.addEventListener('click',handlePrevClick);
//next 버튼을 클릭했을 떄
nextBtn.addEventListener('click', handleNextClick);

//css에서 트렌지션이 끝났을 때 발생되는 이벤트
//transitionend
sliderElem.addEventListener('transitionend',()=>{
    //순간 이동처리 마지막 count 5가 되면 첫번째가 보여지도록
    if( count === MAX_SIZE-1 ){
        sliderElem.style.transition = 'none';
        count = 1;  //시작값
        sliderElem.style.left = `-${count*100}%`;
    }
    //순간 이동처리 맨 앞이 0번이 보여지면 이동
    if( count === 0 ){
        sliderElem.style.transition = 'none';
        count = MAX_SIZE-2;
    }
//트렌지션 처리가 완료되면 버튼을 다시 활성화
    enableButtons();
});


//시작되자마자 실행되는 함수
const init=()=>{
    //3.슬라이더 width값을 변경
    sliderElem.style.width = `${MAX_WIDTH}px`;
    //1.1번이미지를 5번뒤에 붙임(맨 뒤에 1번을 복제해서 추가)
    const firstClone = sliderElem.children[0].cloneNode(true);
    //자식 노드의 첫번째 값 [인덱스번호]
    // console.log(firstClone);
    sliderElem.append(firstClone);
    //2.이때 사이즈 안맞음. width값 수정해야함.
    //3.무한반복 실행
    // setInterval(handleNextClick,1000);
    //맨 앞에 5번을 복제해서 추가
    const lastClone = sliderElem.children[4].cloneNode(true);
    sliderElem.prepend(lastClone);

//1번 이미지가 보여지는 상태
sliderElem.style.left = `-${count*100}%`

}

init(); //시작되면 바로 함수 호출