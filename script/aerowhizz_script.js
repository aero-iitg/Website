document.addEventListener("DOMContentLoaded", async function () {
    const slider = document.querySelector(".slider");
    let Cont = document.querySelector('.details');


  
    try {
      const response = await fetch("https://aeroclubbackend.onrender.com/initiatives/accessaerowhizz");
      const data = await response.json();
  
      data.forEach((ele,index) => {
        const item = document.createElement("div");
        item.classList.add("item");
        const i= index+6;
        const dataNameValue = "p-" + i;
        item.setAttribute("data-name", dataNameValue);
        const image = document.createElement("img");
        image.src = ele.postImagesLinks[0];
        image.alt = "aerowhizz";
        item.appendChild(image);
        slider.appendChild(item);
      });
      data.forEach((ele,index) => {
        const item1 = document.createElement("div");
        item1.classList.add("item1");
        const i= index+6;
        const dataTargetValue = "p-" + i;
        item1.setAttribute("data-target", dataTargetValue);
        item1.insertAdjacentHTML("afterbegin", "<span>&times;</span>");
        
        ele.postImagesLinks.forEach((imageUrl)=>{
            const image = document.createElement("img");
            image.src = imageUrl;
            image.alt = "";
            image.classList.add("image");

            item1.appendChild(image);
        })
        item1.insertAdjacentHTML("beforeend", '<button class="next1" onclick="goNext()">next</button>');
        item1.insertAdjacentHTML("beforeend", '<button class="prev1" onclick="goPrev()">prev</button>');
        Cont.appendChild(item1);
        
      });

      
  
      let items = document.querySelectorAll('.slider .item');
      let next = document.getElementById('next');
      let prev = document.getElementById('prev');
      console.log(items.length);
  
      let active = 0;
  
      function loadShow() {
        let stt = 0;
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;
        for (var i = active + 1; i < items.length; i++) {
          stt++;
          items[i].style.transform = `translateX(${550*stt}px) scale(${1 - 0.5*stt}) perspective(27px) rotateY(-1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(3px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
        stt = 0;
        for (var i = active - 1; i >= 0; i--) {
          stt++;
          items[i].style.transform = `translateX(${-550*stt}px) scale(${1 - 0.5*stt}) perspective(27px) rotateY(1deg)`;
          items[i].style.zIndex = -stt;
          items[i].style.filter = 'blur(3px)';
          items[i].style.opacity = stt > 2 ? 0 : 0.6;
        }
      }
  
      loadShow();
  
      next.onclick = function() {
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
      }
  
      prev.onclick = function() {
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
      }
  
      let Container = document.querySelector('.details');
      let Box = Container.querySelectorAll('.item1');
      let nav = document.getElementsByClassName('nav_list');
  
      document.querySelectorAll('.slider .item').forEach(item => {
        item.onclick = () => {
          Container.style.display = 'flex';
          let name = item.getAttribute('data-name');
          Box.forEach(item1 => {
            let target = item1.getAttribute('data-target');
            if (name == target) {
              item1.classList.add('active');
              let images = item1.querySelectorAll(".image");
              var current = 0;
  
              for (let i = 0; i < images.length; i++) {
                images[i].style.left = `${i * 100}%`;
              }
  
              function slideImage() {
                for (let i = 0; i < images.length; i++) {
                  images[i].style.transform = `translateX(-${current * 250}%)`;
                }
              }
  
              slideImage();
  
              window.goNext = function() {
                current = current + 1 < images.length ? current + 1 : current;
                slideImage();
              }
  
              window.goPrev = function() {
                current = current - 1 >= 0 ? current - 1 : current;
                slideImage();
              }
            }
          });
        };
      });
  
      Box.forEach(item1 => {
        item1.querySelector('span').onclick = () => {
          item1.classList.remove('active');
          Container.style.display = 'none';
        };
      });
    } catch (error) {
      console.error("Error:", error);
    }
  });
  