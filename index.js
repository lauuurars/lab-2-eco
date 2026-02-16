const getPosts = async () => {
    const response = await fetch("http://localhost:3000/data/posts")
    const result = await response.json()
    return result 
}

getPosts().then(r => console.log(r))