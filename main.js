function showSection(id) {
    const forms = document.querySelectorAll("#content form");

    forms.forEach(form => {
        if (form.id === id) {
            form.style.display = "block";
            // Allow layout to register display before animating
            requestAnimationFrame(() => {
                form.classList.add("active");
            });
        } else {
            form.classList.remove("active");
            form.style.display = "none";
        }
    });
}
