// <<<<<<<<<<<<<<<<Rock Paper Scissors >>>>>>>>>>>>>
var Num = Math.random() 
var con = (Num*2)
var new_num = Math.round(con)
console.log(new_num)
var arr = ["rock","paper","scissors"]
var value = prompt("enter a value")
if(arr[0]==value && arr.indexOf("rock")==new_num){
    alert('Draw')
}else if(arr[1]==value && arr.indexOf("paper")==new_num){
    alert('Draw')
}else if(arr[2]==value && arr.indexOf("scissors")==new_num){
    alert('Draw')
}else if(arr[0]==value && arr.indexOf("rock")==(new_num-1)){
    alert('You Lose')
}else if(arr[0]==value && arr.indexOf("rock")==(new_num+1)){
    alert('Draw')
}else if(arr[1]==value && arr.indexOf("paper")==(new_num-1)){
    alert('you lose')
}else if(arr[1]==value && arr.indexOf("paper")==(new_num+1)){
    alert('you win')
}else if(arr[2]==value && arr.indexOf("scissors")==(new_num+1)){
    alert('You win')
}else if(arr[2]==value && arr.indexOf("scissors")==(new_num-1)){
    alert('Draw')
}else if(arr[2]==value && arr.indexOf("scissors")==(new_num+2)){
    alert('you lose')
}else if(arr[0]==value && arr.indexOf("rock")==(new_num-2)){
    alert('you win')
}

