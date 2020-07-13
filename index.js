function palindromo() {
    const A = getArray() //get input trim spaces and transform to lowercase in an array
    console.log(A)
    const B = A.slice() //copy array A in B
    A.reverse()         //reverse array A
    
    if(compareArray(A,B)){
        document.getElementById("result-container").className = "alert alert-success mt-5"
        document.getElementById("result").innerHTML = "Es Palindromo "
    } else {
        document.getElementById("result-container").className = "alert alert-danger mt-5"
        document.getElementById("result").innerHTML = "No es Palindromo "
    }
}
function getArray(){
    return A = Array.from(document.getElementById("cadena").value.toLowerCase().replace(/ /g,''))
}
function compareArray(a, b){
    if(a.length == 0){
        return false
    }
    for (i in a) {
        if (a[i] != b[i]) {
            return false
        }
    }
    return true
}
