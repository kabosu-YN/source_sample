document.addEventListener('DOMContentLoaded', function(){
    luxy.init()

    let elmScrollTrigger = document.getElementsByClassName('scroll_trigger')

    let scrollTopPos = window.pageYOffset;
        let elmMoreBtnPosArray = new Array();
    
    // .scroll_triggerの上座標取得
    for(i=0; i < elmScrollTrigger.length; i++){
        let elmMoreBtnRect = elmScrollTrigger[i].getBoundingClientRect();
        elmMoreBtnPosArray[i] = elmMoreBtnRect.top;
    }

    window.addEventListener('scroll',function(){

        for(i=0; i < elmScrollTrigger.length; i++){

            scrollTopPos = window.pageYOffset + window.innerHeight - 100;
            elmMoreBtnPos = elmMoreBtnPosArray[i];

            if(scrollTopPos > elmMoreBtnPos){
                elmScrollTrigger[i].classList.add('active')
            }
        }
    });
})
