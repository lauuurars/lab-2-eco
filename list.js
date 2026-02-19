const container = document.getElementById("postsContainer");

const getPosts = async () => {
    const response = await fetch("http://localhost:3000/data");
    const data = await response.json();
    const posts = data.posts;

    container.innerHTML = "";

    posts.forEach(post => {
        container.innerHTML += `
        <div class="bg-white p-4 rounded-xl shadow-lg">
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

const deletePost = async (id) => {
    await fetch(`http://localhost:3000/data/posts/${id}`, {
        method: "DELETE"
    });

    getPosts();
};

getPosts();
