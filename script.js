
const userInputTag = document.querySelector("#fruit");
const unorderListTag = document.querySelector("ol");

userInputTag.addEventListener("change", addingFood);
unorderListTag.addEventListener("click", clickingList);


function addingFood(event) {
    const items = document.createElement("div");
    items.classList.add('items');
    items.textContent = userInputTag.value;
    items.innerHTML = `
    <li>${items.textContent}</li>
    <span class="material-symbols-outlined"> delete </span>
    `;
    unorderListTag.append(items);
    userInputTag.value = "";
}

function clickingList(event) {
    const targetTag = event.target;
    switch (event.target.tagName) {
        case "LI":
            if (targetTag.classList.contains('purchased'))
                targetTag.classList.remove('purchased');
            else
                targetTag.classList.add('purchased');
            break;
        case "SPAN":
            targetTag.parentElement.remove();
            break;
        default:
            break;
    }
}