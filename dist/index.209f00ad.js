const form = document.getElementById("form");
form.addEventListener("formdata", handleform);
function handleform(e) {
    for (const [key, value] of e.formData)console.table(`${key}`, `${value}`);
}

//# sourceMappingURL=index.209f00ad.js.map
