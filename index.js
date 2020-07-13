function palindromo() {
    const A = Array.from(document.getElementById("cadena").value.toLowerCase())
    const B = A.slice()
    A.reverse()
    
    if(compareArray(A,B)){
        document.getElementById("result-container").className = "alert alert-success mt-5"
        document.getElementById("result").innerHTML = "Es Palindromo "
    } else {
        document.getElementById("result-container").className = "alert alert-danger mt-5"
        document.getElementById("result").innerHTML = "No es Palindromo "
    }
}

function compareArray(a, b){
    for (i in a) {
        if (a[i] != b[i]) {
            return false
        } 
    }
    return true
}
