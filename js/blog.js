document.addEventListener("DOMContentLoaded", function () {
  const blogPostsContainer = document.getElementById("blogPostsContainer"); // Use a container element in blog.html

  // Get blog posts from localStorage
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];

  // Loop through the blogs and create HTML for each post
  blogs.forEach((blog) => {
    const blogPostElement = `
      <div class="blog-post">
        <h2>${blog.title}</h2>
        <p class="meta">By <span class="author">${
          blog.username
        }</span> on <span class="date">${new Date().toLocaleDateString()}</span></p> 
        <p>${blog.content}</p>
      </div>
    `;
    blogPostsContainer.innerHTML += blogPostElement;
  });
});
