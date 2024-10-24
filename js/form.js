document
  .getElementById("blogForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const blog = {
      username: username,
      title: title,
      content: content,
    };

    // Get existing blogs from localStorage or initialize an empty array
    let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

    // Add the new blog post
    blogs.push(blog);

    // Store the updated blogs array back in localStorage
    localStorage.setItem("blogs", JSON.stringify(blogs));

    // Clear the form fields (optional)
    document.getElementById("username").value = "";
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    // Redirect to blog.html (optional)
    window.location.href = "blog.html";
  });
