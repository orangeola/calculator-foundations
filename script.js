const topOutPut = document.getElementById("text-small");
const bottomOutPut = document.getElementById("text");

bottomOutPut.textContent = "0";
topOutPut.textContent = "";

let firstNum = "";
let secondNum = "";
let operator = "";

const buttonList = document.querySelectorAll(".number");
const buttonList2 = document.querySelectorAll(".number-l");
for(let i = 0; i < buttonList.length; i++)
{
    console.log(buttonList[i].textContent);
    if(buttonList[i].textContent === "÷")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "divide";
        });
    }
    else if(buttonList[i].textContent === "×")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "multiply";
        });
    }
    else if(buttonList[i].textContent === "−")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "subtract";
        });
    }
    else if(buttonList[i].textContent === "+")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "add";
        });
    }
    else if(buttonList[i].textContent === "=")
    {
        buttonList[i].addEventListener("click", () => {
            bottomOutPut.textContent = operate(firstNum, secondNum, operator);
        });
    }
    else
    {
        buttonList[i].addEventListener("click", () => {
            if(firstNum !== "")
            {
                secondNum = buttonList[i].textContent;
                bottomOutPut.textContent = secondNum;
            }
            else
            {
                firstNum = buttonList[i].textContent;
                bottomOutPut.textContent = firstNum;
            } 
    });}
}

for(let i = 0; i < buttonList2.length; i++)
{
    if(buttonList2[i].textContent === "+ / -")
    {

    }
    else if(buttonList2[i].textContent === "Backspace")
    {

    }
    else if(buttonList2[i].textContent === "Clear")
    {
    buttonList2[i].addEventListener("click", () => {
        firstNum = "";
        secondNum = "";
        operator = "";
        bottomOutPut.textContent = "0";
        topOutPut.textContent = "";
    });
    }
}

function operate(a, b, op)
{
    if(op === "add")
    {
        return Number(a) + Number(b);
    }
    else if(op === "subtract")
    {
        return Number(a) - Number(b);
    }
    else if(op === "multiply")
    {
        return Number(a) * Number(b);
    }
    else if(op === "divide")
    {
        if(Number(b) === 0)
        {
            return "Black hole spawned";
        }
        return Number(a) / Number(b);
    }
}