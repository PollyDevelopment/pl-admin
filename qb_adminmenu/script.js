function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.style.display = "none";
    });

    document.querySelectorAll('.tab-button').forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(tabName).style.display = "flex";
    event.currentTarget.classList.add("active");
}

function closeMenu() {
    fetch(`https://${GetParentResourceName()}/closeMenu`, {
        method: "POST",
        body: JSON.stringify({})
    }).then(() => {
        document.getElementById("adminMenu").style.display = "none";
    });
}

window.addEventListener("message", function(event) {
    if (event.data.action === "openMenu") {
        document.getElementById("adminMenu").style.display = "flex";
    }
});
