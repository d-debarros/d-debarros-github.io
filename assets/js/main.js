document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const homeSection = document.getElementById('home');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > homeSection.offsetHeight) {
        header.style.display = 'flex';
      } else {
        header.style.display = 'none';
      }
    });
  
    // Infinite scroll logic
    let page = 1;
    const container = document.getElementById('infinite-scroll-container');
  
    const loadMoreContent = () => {
      fetch(`/page/${page}/`)
        .then(response => response.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, 'text/html');
          const newContent = doc.querySelector('.page-content');
          container.appendChild(newContent);
          page++;
        });
    };
  
    window.addEventListener('scroll', () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        loadMoreContent();
      }
    });
  
    loadMoreContent(); // Initial load
  });
  