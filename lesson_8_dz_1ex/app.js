


const originalArray = [15.69, 14.20, 58.5, 147, 258.96, 142.10, 5.47, 78];

function renderArray(array, container) {
    container.innerHTML = "";
    // container.children = [];
    // for (const item of array) {
    //     const itemDiv = renderArrayItem(item);
    //     container.append(itemDiv);
    // }

    if(array.length === 0) {
        container.innerHTML = "<h2>Items not found</h2>";
        return;
    }

    const arrayItems = array.map(function (item) {
        // return `<div class="array-item">${item}</div>`;
        return renderArrayItem(item);

    });
    container.append(...arrayItems);
}

function renderArrayItem(value) {
    const div = document.createElement("div");
    div.className = "array-item";
    div.textContent = value;
    return div;
}

const originalContainer = document.querySelector("#original .array");
const updatedContainer = document.querySelector("#updated .array");
const buttonsContainer = document.querySelector(".methods");

renderArray(originalArray, originalContainer);

buttonsContainer.onclick = function (event) {

    console.log(event.target.tagName)
    if(event.target.tagName.toLowerCase() !== "button") return;

    const method = event.target.textContent;

    if (method === "map в сомах") {
        const newArray = originalArray.map(function (item) {
            return Math.round((item * 11)*100)/100 + " сом";
            // return item * 11 + " сом";
        });
        renderArray(newArray, updatedContainer);
    }

    if (method === "map в ¥") {
        const newArray = originalArray.map(function (item) {
            return item + " ¥";
        });
        renderArray(newArray, updatedContainer);
    }


};
