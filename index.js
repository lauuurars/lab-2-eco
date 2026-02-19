const getPosts = async () => {
    const response = await fetch("http://localhost:3000/data")
    const result = await response.json()
    return result
}

getPosts().then(r => console.log(r))

// creando el post !!!

const form = document.getElementById("post-form");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const image = document.getElementById("image").value;
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;

    const newPost = {
        image,
        title,
        description
    };

    try {
        await fetch("http://localhost:3000/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPost)
        });

        window.location.href = "list.html";

    } catch (error) {
        console.error("Error creating post:", error);
    }
});
