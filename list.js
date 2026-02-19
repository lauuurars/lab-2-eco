const container = document.getElementById("postsContainer");

// obteniendo los posts de la db 

const getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json()

    container.innerHTML = "";

    posts.forEach(post => {
        container.innerHTML += `
        <div id="post-${post.id}" class="bg-white p-4 rounded-xl shadow-lg">
            <img src="${post.image}" class="w-full h-40 object-cover rounded-lg mb-3" />
            <h2 class="font-bold text-lg">${post.title}</h2>
            <p class="text-gray-600 text-sm mb-3">${post.description}</p>
            <button 
            onclick="deletePost(${post.id})"
            class="bg-red-400 text-white px-3 py-1 rounded hover:bg-red-500 transition"
            >
                Delete
            </button>
        </div>
    `;
    });
};

// función de borrar el post :o

const deletePost = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/posts/${id}`, {
            method: "DELETE"
        });

        if (!response.ok) {
            throw new Error("No se pudo eliminar el post :c");
        }

        document.getElementById(`post-${id}`).remove();

        alert("Post eliminado ( • ᴗ - ) ✧");

    } catch (error) {
        console.error("Error deleting post:", error);
    }
};

getPosts();
