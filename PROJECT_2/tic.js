let val = "x";

function mouseMove(obj1) {
    if (obj1.innerHTML == "") {
        if (val == "x") {
            obj1.innerHTML = val;
            check(obj1);
            val = "o";
        } else {
            obj1.innerHTML = val;
            check(obj1);
            val = "x";
        }
    }
    let key = obj1.innerHTML;
    console.log(key);
    console.log(obj1.id);
}

function reset() {
    location.reload();
}

function check(obj1) {
    let a1 = document.getElementById("v1").innerHTML;
    let a2 = document.getElementById("v2").innerHTML;
    let a3 = document.getElementById("v3").innerHTML;
    let a4 = document.getElementById("v4").innerHTML;
    let a5 = document.getElementById("v5").innerHTML;
    let a6 = document.getElementById("v6").innerHTML;
    let a7 = document.getElementById("v7").innerHTML;
    let a8 = document.getElementById("v8").innerHTML;
    let a9 = document.getElementById("v9").innerHTML;

    let key = obj1.innerHTML;
    if(a1==key&& a2==key&&a3==key||a1==key&&a5==key&&a9==key||a1==key&&a4==key && a7==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a2==key&&a1==key&&a3==key || a2==key&&a5==key&&a8==key){
        console.log(`${key}wins`);  
          alert(`${key}wins`);
        reset();
    }
    else if(a3==key&&a1==key&&a2==key ||a3==key&&a5==key&&a7==key||a3==key&&a6==key&&a9==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a4==key&&a1==key&&a7==key||a4==key&&a5==key&&a6==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
reset();
    }
    else if(a5==key&&a1==key&&a9==key||a5==key&&a3==key&&a7==key||a5==key&&a2==key&&a8==key||a5==key&&a4==key&&a6==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a6==key&&a3==key&&a9==key||a6==key&&a4==key&&a5==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a7==key&&a1==key&&a4==key||a7==key&&a3==key&&a5==key||a7==key&&a8==key&&a9==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a8==key&&a2==key&&a5==key||a8==key&&a7==key&&a9==key){
        console.log(`${key}wins`);
        alert(`${key}wins`);
        reset();
    }
    else if(a9==key&&a1==key&&a5==key||a3==key&&a6==key&&a9==key||a7==key&&a8==key&&a9==key){
        console.log(`${key}wins`);

        alert(`${key}wins`);
        reset();
    }
   

    else {

        let allSquaresFilled = true;
        for (let i = 1; i <= 9; i++) {
            if (document.getElementById(`v${i}`).innerHTML === "") {
                allSquaresFilled = false;
                break;
            }
        }
        if (allSquaresFilled) {
            console.log("It's a draw");
            alert("It's a draw");
            reset();
        }
    }
}