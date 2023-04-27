function shuffleDeck() {
    var numbers = [];
    while (numbers.length < 9) {
        var randomNumber = getRndInteger(1, 9);
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

function setNumbers(numbers) {
    var buttons = document.getElementsByTagName("button");
    for (idx in numbers) {
        buttons[idx].innerHTML = numbers[idx];
    }
}

function hideNumbers() {
    var buttons = document.getElementsByTagName("button");
    for (button of buttons) {
        button.classList.add("hiddenText");
    }
}

var shuffledNumbers = shuffleDeck();
setNumbers(shuffledNumbers);
setTimeout(hideNumbers, 2000);

var clicks = 0;
function checkPress(button) {
    clicks++;
    if (clicks == 9) {
        button.style.visibility = "hidden";
        alert("You won!")
    }
    else {
        if (clicks == button.innerHTML) {
            button.style.visibility = "hidden";
        }
        else {
            alert("You losed!");
            var buttons = document.getElementsByTagName("button");
            for (button of buttons) {
                button.disabled = true;
        }
        }
    }
    
    console.log(clicks);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}