let inp = document.querySelector('input')
let btn = document.querySelector('#btn')
let list = document.querySelector('#list')

btn.addEventListener('click',function(){
    let li = document.createElement('li')
    li.innerText=inp.value
    inp.value=""
    list.append(li)

    let editbtn = document.createElement('button')
    editbtn.innerText="Edit-Task"
    editbtn.classList='edit'
    li.append(editbtn)


    let deletebtn = document.createElement('button')
    deletebtn.innerText="Delete"
    deletebtn.classList='delete'
    li.append(deletebtn)


    deletebtn.addEventListener('click',function(){
        li.remove()
    })

})

