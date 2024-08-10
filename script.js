//Getting variables into js
const textField = document.querySelector("#itemInput");
const enterButton = document.querySelector("#enterButton")
const listBackground = document.querySelector(".listBackground");
const unorderedList = document.querySelector(".unorderedList");


//give the button an onaction event.
enterButton.addEventListener("click", listItemAdder)

//making the color of the listBackground match the surrounding to make it seem as if 
//the background doesn't exist before the li items are added.
document.addEventListener("DOMContentLoaded", () => {
    listBackground.style.backgroundColor = "#fff3f3";
});

function listItemAdder() {
    //if the value of the input field is something then...
    if (textField.value.length > 0) {
        //changing the listBackground to white.
        listBackground.style.backgroundColor = "white";
        //create a listitem.
        const listItem = document.createElement("li");
        //give it the val of the inputfield
        listItem.textContent = textField.value; 
        //give it a class that makes it a grid item for visual cleanliness
        listItem.classList.add("newListItem");
        //then add it to the unordered list.
        unorderedList.appendChild(listItem);
        //focusing back to the textField to give the user the option to add more items.
        textField.focus();

        

        // creating a delete button to add next to the newly created list item.
        const deleteButton = document.createElement("Button");
        //creating the textNode that will be inside the button.
        const deleteText = document.createTextNode("Delete");
        //linking the textNode with the button.
        deleteButton.appendChild(deleteText);
        //giving the button a class that sets a constant height for the button for visual cleanliness.
        deleteButton.classList.add("newButton");
        //linking the listitem with the button.
        listItem.appendChild(deleteButton);

        //giving the deletebutton a function through eventlisteners.
        deleteButton.addEventListener("click", () => {
            listItem.parentNode.removeChild(listItem);
        });
    }
    //alerting the user that they haven't typed into the inputfield.
    else{
        alert("you cannot enter an empty item");
    }

  }