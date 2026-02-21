const container = document.getElementById("postsContainer");

// obteniendo los posts de la db 

const getPosts = async () => {
    container.innerHTML = `
        <p class="text-2xl text-center text-violet-800 font-semibold col-span-3">
            Loading posts...
        </p>
    `;

    try {
        const response = await fetch("http://localhost:3000/posts");

        if (!response.ok) {
            throw new Error("Server responded with error");
        }

        const posts = await response.json()

        container.innerHTML = "";

        posts.forEach(post => {
            container.innerHTML += `
            <div id="post-${post.id}" class="bg-purple-100 p-6 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                <img src="${post.image}" class="w-full h-50 object-cover rounded-lg mb-3" />
                <h2 class="font-bold text-lg">${post.title}</h2>
                <p class="text-gray-600 text-sm mb-3">${post.body}</p>
                <button 
                onclick="deletePost('${post.id}')"
                class="bg-violet-500 text-white px-3 py-1 rounded hover:bg-violet-600 transition"
                >
                    Delete Post
                </button>
            </div>
        `;
        });
    } catch (error) {
        container.innerHTML = `
            <div class="col-span-full max-w-md mx-auto text-center 
                bg-violet-900 text-gray-100 
                p-6 rounded-xl shadow-lg">
                <h1 class="text-4xl font-bold">(×𐃷×)</h1>
                <h2 class="text-xl font-semibold mt-3 mb-2">Error Loading Posts</h2>
                <p class="mb-4">The server appears to be down or unavailable.</p>
                <button 
                    onclick="getPosts()"
                    class="bg-violet-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-violet-500 transition">
                    Try Again
                </button>
            </div>
        `;
    }
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

// navegación al formulario :p

const backToBtn = document.getElementById("back-btn");

backToBtn.addEventListener("click", () => {
    window.location.href = "index.html";
});
