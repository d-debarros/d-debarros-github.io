function changeStyleOnScroll () {
    var navElement = document.querySelector(".sticky-header-wrapper");
    // this.scrollY > 500 ? navElement.style.opacity = .8 : navElement.style.opacity = 6 ;
    this.scrollY > 10 ? navElement.style.backgroundColor = "rgba(0, 0, 0, 0.95)": navElement.style.backgroundColor = "";
    this.scrollY > 10 ? navElement.style.width = "imherit": navElement.style.width = "100%";

  }
  
  window.addEventListener("scroll", changeStyleOnScroll , false);