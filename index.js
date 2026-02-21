const form = document.getElementById("post-form");

// creando el post!!

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const image = document.getElementById("image-input").value;
    const title = document.getElementById("title-input").value;
    const body = document.getElementById("description-input").value;

    const newPost = { image, title, body };

    try {
        const response = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        if (!response.ok) {
            throw new Error("Server Error");
        }

        window.location.href = "list.html";

    } catch (error) {
        alert("The server is down (×𐃷×)");
    }
});

// navegación de list POSTS btn :p

const listBtn = document.getElementById("list-btn");

listBtn.addEventListener("click", () => {
    window.location.href = "list.html";
});
