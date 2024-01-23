var num = prompt("لطفا عددی وارد نمایید:" , "0")

while(isNaN(num)){
    num = prompt("لطفا فقط عدد وارد نمایید:" , "0")
}
if(num%2==0){
    alert("عدد شما زوج است!")
}else{
    alert("عدد شما فرد است!")
}