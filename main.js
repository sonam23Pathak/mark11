const dateOfbirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const button = document.querySelector("#check-number");

const outputBox = document.querySelector("#output-box");

function compareValues(sum, luckyNumber) {
    if (sum % luckyNumber === 0) {
        outputBox.innerText = "Your birthday is lucky";
    } else {
        outputBox.innerText = "Your birthday is not lucky";
    }
}

function checkBirthdateIsLucky() {
    const dob = dateOfbirth.value;
    const sum = calculateSum(dob);
    console.log(sum);

}

function calculateSum(dob) {
    dob = dob.replaceALl("-", "");
    let sum = 0;
    for (let index = 0; index < dob.length; index++) {
        sum = sum + Number(dob.chaerAt(index));
    }
    return sum;
}

check.addEventlistener('click', checkBirthdateIsLucky)