

const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
      const maxScroll = 300; 
      let opacity = Math.min(window.scrollY / maxScroll, 1);
      const rgb = getComputedStyle(document.documentElement)
                    .getPropertyValue('--color-primario-rgb')
                    .trim();
      header.style.backgroundColor = `rgba(${rgb}, ${opacity})`;
    });


    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");
    });
