 function showSection(id) {
            const forms = document.querySelectorAll("#content form");
            forms.forEach(form => form.classList.remove("active"));
            document.getElementById(id).classList.add("active");
}