//define fn for displaying numbers and operators
function display(num) {
    results.value +=num
}

function allclear(){
    results.value=''
}

function calc(){
    results.value=eval(results.value)//eval- evaluate a string
}

function dlt(){
    results.value=results.value.slice(0,-1)// slice- to slice a string
    //slice(0,2): value at index 0 and 1 of string will be displayed
    //slice(0,-1): last char of string will not be displayed
}

function opposite(){
    results.value*=-1


}