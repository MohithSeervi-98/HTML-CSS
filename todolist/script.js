let inp = document.querySelector('input')
let but = document.querySelector('#but')
let tasklist = document.querySelector('#tasklist')


but.addEventListener("click",function(){

    let task =inp.value;
    inp.value=""

    if(task==""){
        alert("enter your task")
        return
    }

    let li = document.createElement("li")
    li.textContent=task


    let deletebtn = document.createElement('button')
    deletebtn.textContent='Delete'
    deletebtn.classList='deletebtn'
    

    deletebtn.addEventListener("click", function(){
        li.remove()
    })

    tasklist.appendChild(li)
    li.appendChild(deletebtn)
})