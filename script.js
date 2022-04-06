let addBtn = document.getElementById("addBtn");
let dialogBox = document.getElementById("dialog-box")
let close = document.getElementById("clse")
let content = document.getElementById("cnt")
let submitbtn = document.getElementById("submit-btn");
let dialog_title=document.getElementById("dialog-title")
let dialog_detail=document.getElementById("dialog-detail")
let error = document.querySelector(".error")
addBtn.addEventListener("click", function () {
    dialogBox.style.display = "flex";
})
close.addEventListener("click", function () {
    dialogBox.style.display = "none";
})
submitbtn.addEventListener("click", addTask);
function addTask() {
    if(dialog_title.value!=="" && dialog_detail.value !== ""){
    let todo_text = `<div class="box">
    <div class="box-header">
    <div class="heading">${dialog_title.value}</div>
    <div class="btn-container">
        <div class="minimize">-</div>
        <div class="crossTicket">x</div>
    </div>
    </div>
     <textarea class="textArea1">${dialog_detail.value}</textarea>`
    content.innerHTML = content.innerHTML + todo_text
    dialog_title.value=""
    dialog_detail.value=""
    dialogBox.style.display = "none";
    error.style.display="none";
    todo();
    minimize();
    }
    else{
        error.style.display="block";
    }
    function todo()
    {
        let ticketCrossbtnArr = document.querySelectorAll('.crossTicket')
        for (let i = 0; i < ticketCrossbtnArr.length; i++) {
            ticketCrossbtnArr[i].addEventListener('click',(e) =>{
            let todobox = e.target.closest('.box')
            todobox.remove()
            } )
            
        }


    }

    function minimize()
    {
        let minBtnArr = document.querySelectorAll('.minimize')

        for(let i=0;i<minBtnArr.length;i++)
        {
            minBtnArr[i].addEventListener("click",(e) => {
                let box = e.target.closest('.box');
                console.log(box)
                let textArea = box.querySelector('.textArea1');
                if(textArea.style.display !== 'none')
                {
                    textArea.style.display='none'
                }
                else{
                    textArea.style.display='block'
                }
            })
        }
    }
}
