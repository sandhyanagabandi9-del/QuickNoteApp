document.getElementById("noteForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let content = document.getElementById("content").value;

    fetch("/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "content=" + encodeURIComponent(content)
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
        location.reload();
    });
});