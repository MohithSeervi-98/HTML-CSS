let btns = document.querySelectorAll('.drum')


for(let i =0; i<btns.length;i++){
    btns[i].addEventListener('click',function(){
        console.log('hi');
        let btnName= btns[i].innerHTML.toLowerCase()
        let audio = document.querySelector('#'+btnName)
        audio.play();
        
        
    })
}

