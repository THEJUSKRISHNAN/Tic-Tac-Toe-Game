let boxes = document.querySelectorAll('.box');
let restBtn = document.querySelector('.reset');
let message= document.querySelector('#msg');
let turnO = true;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]

restBtn.addEventListener('click',resetGame);
function resetGame()
{
    turnO = true;
    enabled();
    message.innerText="";
    restBtn.innerText="Reset Game";
}


boxes.forEach((box) => {
    box.addEventListener("click",function addfn()
    {
        if(turnO)
        {
            box.textContent="O";
            turnO=false;

        }
        else
        {
            box.textContent="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

function disabled()
{
    for(let a of boxes )
    {
        a.disabled=true;

    }
}

function enabled()
{
    for(let a of boxes )
    {
        a.disabled=false;
        a.innerText="";

    }
}

function checkWinner()
{
    for(let pattrn of winPattern)
    {
        let pos1=boxes[pattrn[0]].innerText;
        let pos2=boxes[pattrn[1]].innerText;
        let pos3=boxes[pattrn[2]].innerText;

        if(pos1!=="" &&pos2!=="" && pos3!=="")
        {
            if(pos1 === pos2 && pos2 ==pos3)
            {
                disabled();
               
               message.innerText="Congratulation Winner is "+pos1;
               restBtn.innerText=" Start New Game";

                
            }
        }
    }
}


    
