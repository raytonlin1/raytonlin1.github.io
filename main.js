function Clicked(age) {
    this.age=age;
    alert("My age is "+this.age+" years old.");
}

function changeText(id) {
    if (id.num > 0) {
        id.num++;
    } else {
        id.num = 1;
    }
    if (id.num == 1) {
        id.innerHTML = "You clicked this 1 time!"
    } else {
        id.innerHTML = "You clicked this "+id.num+" times!";
    }
}

function addTextBox() {
    var items = document.getElementsByClassName('itemm');
    for (var key in items) {
        items[key].innerText = document.forms["myForm"]["textboxtext"].value;
    }
}