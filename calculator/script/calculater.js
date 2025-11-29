const input = document.querySelector(".input")
const buttons = document.querySelectorAll(".btn")
const equal =document.querySelector(".equal")
const c = document.querySelector(".clear")

buttons.forEach(i => {
    i.addEventListener("click",function(){
          input.value += i.innerHTML
    })
});
equal.addEventListener("click",function(e){
    try{
        input.value=eval(input.value)
    }catch(error){
        input.value="Error"
    }
})
c.addEventListener("click",function(){
    input.value = ""
})