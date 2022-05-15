const topOutPut = document.getElementById("text-small");
const bottomOutPut = document.getElementById("text");

bottomOutPut.textContent = "";
topOutPut.textContent = "";

let firstNum = "";
let secondNum = "";
let operator = "";

const buttonList = document.querySelectorAll(".number");
const buttonList2 = document.querySelectorAll(".number-l");
for(let i = 0; i < buttonList.length; i++)
{
    if(buttonList[i].textContent === "÷")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "÷";
            topOutPut.textContent = firstNum + " " + "÷";
        });
    }
    else if(buttonList[i].textContent === "×")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "×";
            topOutPut.textContent = firstNum + " " + "×";
        });
    }
    else if(buttonList[i].textContent === "−")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "−";
            topOutPut.textContent = firstNum + " " + "−";
        });
    }
    else if(buttonList[i].textContent === "+")
    {
        buttonList[i].addEventListener("click", () => {
            operator = "+";
            topOutPut.textContent = firstNum + " " + "+";
        });
    }
    else if(buttonList[i].textContent === "=")
    {
        buttonList[i].addEventListener("click", () => {
            bottomOutPut.textContent = operate(firstNum, secondNum, operator);
            topOutPut.textContent = firstNum + " " + operator + " " + secondNum + " " + "=";
            operator = "";
            firstNum = bottomOutPut.textContent;
            secondNum = " ";
        });
    }
    else
    {
        buttonList[i].addEventListener("click", () => {
            if(operator === "")
            {
                if(secondNum !== "")
                {
                    firstNum = "";
                    secondNum = "";
                }
                firstNum += buttonList[i].textContent;
                bottomOutPut.textContent = firstNum;
            }
            else
            {
                if(secondNum === " ")
                {
                    secondNum = "";
                }
                secondNum += buttonList[i].textContent;
                bottomOutPut.textContent = secondNum;
            }
    });}
}

for(let i = 0; i < buttonList2.length; i++)
{
    if(buttonList2[i].textContent === "+ / -")
    {
        buttonList2[i].addEventListener("click", () => {
        if(operator === "")
        {
            firstNum = firstNum * -1;
            bottomOutPut.textContent = firstNum;
        }
        else
        {
            secondNum = secondNum * -1;
            bottomOutPut.textContent = secondNum; 
        }})
    }
    else if(buttonList2[i].textContent === "Backspace")
    {
        buttonList2[i].addEventListener("click", () => {
            if(operator === "")
            {
                firstNum = firstNum.slice(0, -1);
                if(firstNum.length === 0)
                {
                    firstNum = "0";
                }
                bottomOutPut.textContent = firstNum;
            }
            else
            {
                secondNum = secondNum.slice(0, -1);
                if(secondNum.length === 0)
                {
                    secondNum = "0";
                }
                bottomOutPut.textContent = secondNum; 
            }})
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
    if(op === "+")
    {
        return Number(a) + Number(b);
    }
    else if(op === "−")
    {
        return Number(a) - Number(b);
    }
    else if(op === "×")
    {
        return Number(a) * Number(b);
    }
    else if(op === "÷")
    {
        if(Number(b) === 0)
        {
            return "Black hole spawned";
        }
        return Number(a) / Number(b);
    }
}