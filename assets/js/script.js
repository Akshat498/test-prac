const checkbox = document.getElementById("check");

let x = document.getElementById("navbar")
checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
        console.log("ram ram ji");
        x.classList.add("no-scroll")
        document.body.style.overflow = "hidden"
    } else {
        x.classList.remove("no-scroll")
        document.body.style.overflow = "unset"
    }
});