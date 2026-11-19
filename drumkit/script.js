let btns = document.querySelectorAll('.drum')


for(let i =0; i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        // console.log('hi');
        let btnName= btns[i].innerHTML.toLowerCase()
        let audio = document.querySelector('#'+btnName)
        audio.currentTime=0;
        audio.play();
        
    })
}

document.addEventListener("keydown",function(event){
    let btnName = event.key.toLowerCase()
    let audio = document.querySelector('#'+btnName)
if(audio!==null){
    audio.currentTime=0;w
    audio.play();
}

    
})

