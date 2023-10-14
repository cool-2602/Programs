function submitForm() {
    const form = document.getElementById("surveyForm");
    if (form.checkValidity()) {
        const formData = new FormData(form);
        const submissionData = document.getElementById("submissionData");

        submissionData.innerHTML = "";
        for (const [key, value] of formData.entries()) {
            const label = form.querySelector(`[for="${key}"]`).textContent;
            const listItem = document.createElement("li");
            listItem.textContent = `${label}: ${value}`;
            submissionData.appendChild(listItem);
        }

        document.getElementById("popup").style.display = "block";
        form.reset();
    } else {
        alert("Please fill out all required fields.");
    }
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function resetForm() {
    const form = document.getElementById("surveyForm");
    form.reset();
}