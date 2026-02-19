const form = document.getElementById("post-form");

// creando el post!!

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const image = document.getElementById("image-input").value;
    const title = document.getElementById("title-input").value;
    const description = document.getElementById("description-input").value;

    const newPost = {
        id: Date.now(),
        image,
        title,
        description
    };

    const response = await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    });    
    
    if (!response.ok) {
        throw new Error("No se pudo crear el post :c");
    }
});
