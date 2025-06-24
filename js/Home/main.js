// Original script for typing effect
{
  const jop = document.getElementById("jop");

  setTimeout(() => {
    jop.style.opacity = "1";
  }, 500);
  let content = "Photographer";
  let index = 1;
  let stop = setInterval(() => {
    if (index > content.length) {
      clearInterval(stop);
      return; // Exit after clearing interval
    }
    jop.innerHTML = content.slice(0, index);
    index++;
  }, 200); // Typing speed
}

{
  const navLinks = document.querySelectorAll(".nav-links");
  navLinks.forEach((element) => {
    element.addEventListener("click", (eo) => {
      document.getElementsByClassName("active")[0].classList.remove("active");
      element.classList.add("active");
    });
  });
}

// Go to Page Booking Session

{
  const btnBookingNow = document.getElementById("bookNewBtn");
  btnBookingNow.addEventListener("click", () => {
    window.location.href = "booking.html";
  });
}

// Profile
{
  // تحديد الأزرار وإضافة مستمعات الأحداث
  const btnType = document.querySelectorAll(".btn-type");
  const buttons = document.querySelectorAll(".buttons")[0];

  btnType.forEach((item) => {
    item.addEventListener("click", () => {
      buttons
        .getElementsByClassName("active-btn-portfolio")[0]
        .classList.remove("active-btn-portfolio");
      item.classList.add("active-btn-portfolio");
    });
  });

  // مصفوفة الفيديوهات (بدلاً من JSX، نستخدم سلاسل نصوص HTML)
  const storiesImg = [
    '<video controls preload="none"><source src="stories/v1.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v2.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v3.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v4.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v5.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v6.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v7.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v8.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v9.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v10.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v11.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v12.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="stories/v13.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  ];

  // مصفوفة الصور (فارغة في البداية)
  let imgs = [
   
  ];

  // دالة لجلب الصور من Google Sheets
  async function getImages() {
    try {
      const sheetURL =
        "https://script.google.com/macros/s/AKfycbyCJ-xxIhhnIbRuwKuwZ1tjEsHFye5BstG5P9PIflRLr-k-INWUKEq5Ln1xMpwt9neo/exec";
      let response = await fetch(sheetURL);
      let data = await response.json();

      // تحويل البيانات إلى سلاسل HTML صالحة
      data.forEach((item) => {
        imgs.push(`<img src="${item.image}" alt="Photo" loading="lazy">`);
      });
    } catch (error) {
      console.error("Error", error);
    }
  }

  // مصفوفة الفيديوهات
  const video = [
    '<video controls preload="none"><source src="video/mo.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v1.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v2.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v3.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v4.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v5.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
    '<video controls preload="none"><source src="video/v6.mp4" type="video/mp4">Your browser does not support the video tag.</video>',
  ];

  const cardImgs = document.getElementById("card-images");
  const cardButtons = document.getElementsByClassName("card-buttons")[0];
  function globalFun(arr) {
    // تحديث أزرار التنقل
    cardButtons.innerHTML = `
    <button id="pre">&lt; Prev</button>
    <div class="num-imgs"></div>
    <button id="next">Next &gt;</button>
  `;

    const numImgs = document.getElementsByClassName("num-imgs")[0];
    numImgs.innerHTML = '<div class="num-img active-icon"></div>';
    for (let i = 0; i < arr.length - 1; i++) {
      numImgs.innerHTML += '<div class="num-img"></div>';
    }

    const pre = document.getElementById("pre");
    const next = document.getElementById("next");

    let i = 0;

    // عرض العنصر الأول
    cardImgs.innerHTML =
      arr[i] +
      `<div id="counter-photo">#${i + 1} of ${arr.length} photos</div>`;
    pre.setAttribute("disabled", "");

    const iconsCard = document.getElementsByClassName("num-imgs")[0];

    // زر التالي
    next.addEventListener("click", () => {
      pre.removeAttribute("disabled");
      i++;
      cardImgs.innerHTML =
        arr[i] +
        `<div id="counter-photo">#${i + 1} of ${arr.length} photos</div>`;
      if (i === arr.length - 1) next.setAttribute("disabled", "");
      iconsCard
        .getElementsByClassName("active-icon")[0]
        .classList.remove("active-icon");
      document
        .getElementsByClassName("num-img")
        [i].classList.add("active-icon");
    });

    // زر السابق
    pre.addEventListener("click", () => {
      next.removeAttribute("disabled");
      i--;
      cardImgs.innerHTML =
        arr[i] +
        `<div id="counter-photo">#${i + 1} of ${arr.length} photos</div>`;
      if (i === 0) pre.setAttribute("disabled", "");
      iconsCard
        .getElementsByClassName("active-icon")[0]
        .classList.remove("active-icon");
      document
        .getElementsByClassName("num-img")
        [i].classList.add("active-icon");
    });
  }

  // دوال التحكم في العرض
  function typeVideos() {
    globalFun(video);
    // cardImgs.style.maxWidth = "90%";
    // cardImgs.style.height = "345px";
    // cardButtons.style.maxWidth = "80%";
  }

  function typePhotos() {
    globalFun(imgs);
    // cardImgs.style.maxWidth = "100%";
    // cardImgs.style.height = "700px";
    // cardButtons.style.maxWidth = "70%";
  }

  function typeStories() {
    globalFun(storiesImg);
    // cardImgs.style.maxWidth = "100%";
    // cardImgs.style.height = "100%";
    // cardButtons.style.maxWidth = "70%";
  }

  (async () => {
    await getImages();
    typePhotos();
  })();
}

// scroll to section
{
  const menu = document.getElementById("menu-icon");
  const nav = document.getElementById("nav");

  menu.addEventListener("click", () => {
    if (nav.style.display == "block") nav.style.display = "none";
    else nav.style.display = "block";
  });

  function scrollToSection(idSeciton) {
    const section = document.getElementById(idSeciton);
    const targetPosition =
      section.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // مدة التمرير بالمللي ثانية
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // تقدم التمرير (0 إلى 1)
      const ease = easeInOutQuad(progress); // دالة لجعل التمرير ناعمًا

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    // دالة لتسهيل الحركة (Easing Function)
    function easeInOutQuad(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
  }

  function scrollToHome() {
    scrollToSection("Home");
  }

  function scrollToAboutUs() {
    scrollToSection("aboutUs");
  }

  function scrollToPortfolio() {
    scrollToSection("portfolio");
  }

  function scrollToTeams() {
    scrollToSection("teams");
  }

  function scrollToContact() {
    scrollToSection("contact");
  }
}

// Animation to scroll
{
  function animation(direction) {
    const boxes = document.querySelectorAll(`.${direction}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("start-animaion");
          } else {
            entry.target.classList.remove("start-animaion");
          }
        });
      },
      {
        threshold: 0.4, // 20% من العنصر لازم تظهر عشان يتفعل
      }
    );

    boxes.forEach((box) => {
      observer.observe(box);
    });
  }

  animation("show-animation-x");
  animation("show-animation-x-reverse");
  animation("show-animation-y");
  animation("show-animation-y-reverse");
}
