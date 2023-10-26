
const userInputTag = document.querySelector("#fruit");
const unorderListTag = document.querySelector("ol");

userInputTag.addEventListener("change", addingFruit);


function addingFruit(event) {
    const listTag = document.createElement("li");
    listTag.textContent = `${userInputTag.value}`;
    unorderListTag.append(listTag);
    userInputTag.value = "";
}