const topOutPut = document.getElementById("text-small");
const bottomOutPut = document.getElementById("text");
const minusButton = document.getElementById("minusBtn");
const backButton = document.getElementById("backBtn");
const clearButton = document.getElementById("clearBtn");

bottomOutPut.textContent = "";
topOutPut.textContent = "";

let firstNum = "";
let secondNum = "";
let operator = "";
let currentScreen = firstNum;

minusButton.addEventListener("click", () => {
    if(currentScreen.length !== 0)
    {
        currentScreen *= -1;
        bottomOutPut.textContent = currentScreen;
    }
});

backButton.addEventListener("click", () => {
    currentScreen = currentScreen.toString().slice(0, -1);
    bottomOutPut.textContent = currentScreen;
});

clearButton.addEventListener("click", () => {
    firstNum = "";
    secondNum = "";
    operator = "";
    currentScreen = firstNum;
    bottomOutPut.textContent = "";
});

//set up event listeners on the rest of the buttons
const buttonList = document.querySelectorAll(".number");
for(let i = 0; i < buttonList.length; i++)
{
    if(!(Number.isInteger(Number(buttonList[i].textContent))))
    {
        if(buttonList[i].textContent === ".")
        {
            buttonList[i].addEventListener("click", () => {
                if(!(currentScreen.includes(".")))
                {
                    currentScreen += ".";
                    bottomOutPut.textContent = currentScreen;
                }
            });
        }
        else{
            buttonList[i].addEventListener("click", () => {
                if(currentScreen.length !== 0 && currentScreen !== " ")
                {
                    executeOp(buttonList[i].textContent);  
                }
            });
        }
    }
    else
    {
        buttonList[i].addEventListener("click", () => {
            currentScreen += buttonList[i].textContent;
            bottomOutPut.textContent = currentScreen;
        });
    }
}

function executeOp(op)
{
    if(firstNum !== "" && secondNum !== "")
    {
        if(op === "=")
        {
            //operate on firstNum
            secondNum = currentScreen;
            currentScreen = operate(firstNum, secondNum, operator);
            bottomOutPut.textContent = currentScreen;
            secondNum = "";
        }
        else
        {
            //operate on secondnum
            currentScreen = operate(firstNum, currentScreen, operator);
            bottomOutPut.textContent = currentScreen;
            firstNum = currentScreen;
            secondNum = " "; 
            operator = op;
            currentScreen = secondNum;
        }
    }
    else
    {
        operator = op;
        firstNum = currentScreen;
        currentScreen = secondNum;
        secondNum = " ";
    }
}

function operate(a, b, op)
{
    switch(op) {
        case "+":
            return Number(a) + Number(b); 
        case "−":
            return Number(a) - Number(b);
        case "×":
            return Number(a) * Number(b);
        case "÷":
            if(Number(b) === 0)
            {
                return "Black hole spawned";
            }
            return Number(a) / Number(b);    
    }
}