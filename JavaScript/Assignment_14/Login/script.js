const marriedSection = document.getElementById("marriedSection");
const childrenSection = document.getElementById("childrenSection");
const hasChild = document.getElementById("hasChild");

const radios = document.getElementsByName("status");
const addChildBtn = document.getElementById("addChild");
const removeChildBtn = document.getElementById("removeChild");

const startBtn = document.getElementById("startBtn");
const form = document.getElementById("loginForm");

startBtn.addEventListener("click", () => {
    form.classList.remove("hidden");
    startBtn.style.display = "none";
});

// Show married part
radios.forEach(radio => {
    radio.addEventListener("change", () => {
        if (radio.value === "married" && radio.checked) {
            marriedSection.classList.remove("hidden");
        } else if (radio.value === "single" && radio.checked) {
            marriedSection.classList.add("hidden");
            childrenSection.classList.add("hidden");
        }
    });
});

// Show children part
hasChild.addEventListener("change", () => {
    if (hasChild.checked) {
        childrenSection.classList.remove("hidden");
    } else {
        childrenSection.classList.add("hidden");
        document.querySelectorAll(".child-input").forEach(e => e.remove());
    }
});

//  Add children
addChildBtn.addEventListener("click", () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "child's name";
    input.className = "child-input";
    childrenSection.appendChild(input);
});

//  Remove children
removeChildBtn.addEventListener("click", () => {
    const children = document.querySelectorAll(".child-input");
    if (children.length > 0) {
        children[children.length - 1].remove();
    }
});
