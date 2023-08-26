// tìm số nguyên nhỏ nhất
document.getElementById("findNumberForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let sum = 0;
    let n = 1;

    while (sum <= 10000) {
        sum += n;
        n++;
    }


    document.getElementById("result").value = n;
});

// bài 2: Viết chương trình nhập vào 2 số x, n
// tính tổng: S(n) = x + x^2 + x^3 + … + x^n (Sử dụng vòng lặp và hàm)

document.querySelector("#CalTotal").addEventListener("submit", function (event) {
    event.preventDefault();
    var x = document.getElementById("num1").value;
    var n = document.getElementById("num2").value;
    console.log('n: ', n);

    var total = 0;
    for (let i = 1; i <= n; i++) {
        total += Math.pow(x, i);
    }
    document.querySelector("#rs_total").innerHTML = `<span>Tổng S(${n}) = <b>${total}</b></span>`;
});

// bài : tính giai thừa
function calculateFactorial() {
    const numberInput = document.getElementById("number");
    const number = parseInt(numberInput.value);

    if (number < 0) {
        document.getElementById("result").innerText = "Invalid number!";
        return;
    }

    let factorial = 1;

    for (let i = 2; i <= number; i++) {
        factorial *= i;
    }

    document.getElementById("resultFactorial").innerText =number+ " != " + factorial;
}
// bài 4:

document.getElementById("printDivButton").addEventListener("click", function () {
    var resultDiv = document.getElementById("resultDiv");
    resultDiv.innerHTML = "";

    for (var i = 0; i < 10; i++) {
        var div = document.createElement("div");
        div.textContent = "Div " + (i + 1);

        if (i % 2 === 0) {
            div.className = "even";
        } else {
            div.className = "odd";
        }

        resultDiv.appendChild(div);
    }
});


// bài 5 tìm số nguyên tố
function isPrime(number) {
    if (number < 2) {
        return false;
    }

    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

document.getElementById("printButton").addEventListener("click", function () {
    var inputNumber = document.getElementById("inputNumber").value;
    var resultDiv = document.getElementById("resultPrime");
    resultDiv.innerHTML = "";

    for (var i = 1; i <= inputNumber; i++) {
        if (isPrime(i)) {
            var span = document.createElement("span");
            span.textContent = i + " ";
            resultDiv.appendChild(span);
        }
    }
});
