const btn = document.querySelector(".btn"),
    tip = document.querySelector(".tip"),
    total = document.querySelector(".total"),
    error = document.querySelector(".error");

//create a funtion to calculate tip

const hideError =() => {
    setTimeout(() => {
        error.style.display = "none";
    }, 5000)
}

const calculateTip = () => {
    const bill = document.querySelector(".bill").value;
    const rate = document.querySelector(".rate").value;

    if (bill === "" || rate == "") {
        error.style.display = "block";
        hideError();

    }
}

btn.addEventListener("click", calculateTip);
