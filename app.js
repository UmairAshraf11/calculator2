function getNumber(num){
    
    var result = document.getElementById("result")
result.value += num
}
function clearResult(){
    var result = document.getElementById("result")
result.value = ""
}
function getResult(){
    var result = document.getElementById("result")
result.value=eval(result.value)   
}
function domath(){
    var result =  document.getElementById("resultt")
    
    result.value += domath()
}