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
//Task 4a
$('#addText2').click(function(event){
    var paragraph = $('<p>').text('Hello World')
    $('#task4a').append(paragraph)
})
//Task 4b
function changeBG(event){
    var color = event.target.innerText.toLowerCase()
    $('body').css('background-color',color)
}
//Task 4c

$('#add').click(function(event){
    var sum = Number($('#num1').val()) + Number($('#num2').val())
    $('#sum').text(sum)
})