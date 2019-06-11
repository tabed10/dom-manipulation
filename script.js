/* Task 1 */
Element = document.title
console.log(Element)

/* Task 2 using plain JavaScript */
function addTxt(){
    var el1 = document.getElementById("task2a")
    el1.innerHTML = "Hello World"
}
var el2 = document.getElementById("btn") 
el2.addEventListener("click",addTxt)

/* Task 4 using jQuery */
