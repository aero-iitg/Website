
const carousalImages= document.getElementsByClassName("fig")
const carousal= document.getElementsByClassName("carousal")
const c= document.getElementsByClassName("c");
const projectDesc= document.querySelectorAll(".project-desc");
const fig =document.getElementsByClassName('fig');
let flag =false;

document.addEventListener("click", function(event) {
    // Check if the clicked element is not within the carousal
    if (flag && !carousal[0].contains(event.target) && !projectDesc[0].contains(event.target)) {
        // carousal[0].classList.add("smallcarousal");
        // c[0].style.width = "0";
        //     c[0].style.height ="0";
        for (var k = 0; k < projectDesc.length; k++){
                    
            // fig[j].style.boxShadow="none";
            projectDesc[k].style.display ="none";
            setTimeout(function() {
                
                flag = false;
                for (var j = 0; j < fig.length; j++){
                    
                    fig[j].style.boxShadow="none";
                }
                // fig[0].style.boxShadow="none";
                projectDesc[0].style.transform = "scaleY(0) ";
                carousal[0].style.animation = "largecaro 1s";  // Remove the inline animation style
                // carousal[0].style.animation = "rotation 14s infinite linear";  // Remove the inline animation style
                setTimeout(function() {
                    carousal[0].style.animation = "rotation 14s infinite linear forwards";
                }, 1000);
                // carousal[0].style.transform = "scale(1)"; // Remove the inline transform style
                carousal[0].style.transition = "all 3s ease";
                carousal[0].style.left = "36%";
            }, 50);
        }
        // carousal[0].style.animationPlayState = "running";  // Remove the inline animation style
        // carousal[0].style.transition = "";
        // setTimeout(function() {
            //     carousal[0].classList.remove("smallcarousal");
            //   }, 10);
        }
    });
    
    for (let i = 0; i < carousalImages.length; i++) {
        const carousalImage = carousalImages[i];
        
        carousalImage.addEventListener("click",function() {
            //   carousal[0].classList.remove("smallcarousal");
            // c[0].style.width = "100%";
            // c[0].style.height ="45%";
            if(!flag){

                   
                // Get the index of the clicked element
                const clickedIndex = Array.from(carousalImages).indexOf(this);

                // Rearrange the order of the fig elements
                const figs = Array.from(carousal[0].getElementsByClassName("fig"));
                const reorderedFigs = figs.slice(clickedIndex).concat(figs.slice(0, clickedIndex));

                // Remove existing fig elements
                while (carousal[0].firstChild) {
                carousal[0].removeChild(carousal[0].firstChild);
                }

                // Append reordered fig elements
                for (const fig of reorderedFigs) {
                carousal[0].appendChild(fig);
                }
                        //till here

                projectDesc[i].style.display ="block";
                flag =true;
                console.log(projectDesc[i]);
                setTimeout(function() {
                    
                    for (var j = 0; j < fig.length; j++){
                        
                        fig[j].style.boxShadow="2px -30px 59px 10px aliceblue";
                    }
                    
                    projectDesc[i].style.transform = "none";
                carousal[0].style.animation = "smallcaro 1s forwards";
                // carousal[0].style.animation = "rotation 14s infinite linear";
                // carousal[0].style.transform = "scale(0.4) translateY(500px) ";
                carousal[0].style.transition = "all 3s ease";
                carousal[0].style.left = "36%";
                
            }, 50);

                console.log("clicked");
            }
            });
        }
        const s = document.body;
        const clubName = document.getElementsByClassName('clubName');
        const earth = document.getElementsByClassName('earth');
        const clouds = document.getElementsByClassName('clouds');
        const spans = document.querySelectorAll('h1.clubName div');

        let zoom =1;
        // Attach the wheel event listener
        s.addEventListener('wheel', handleWheel);
        
        // Handle the wheel event
        function handleWheel(event) {
          // Check the delta value to determine the scroll direction
          const delta = Math.sign(event.deltaY);
            
          if (delta >=0) {
            // Scroll down
            console.log('Scroll down');
            zoom+=0.11;
            
            spans.forEach((span)=>{
                
                // span.style.transform = `translate(98%,0.4vw)`;
                clubName[0].style.position = 'fixed';
                clubName[0].style.right = '0';
                clubName[0].style.backgroundColor = 'black';
                clubName[0].style.backgroundColor = 'black';
                clubName[0].style.borderTopLeftRadius = '9px';
                clubName[0].style.borderBottomLeftRadius = '9px';
                clubName[0].style.zIndex = '1';
                clubName[0].style.fontSize= "23px";
                clubName[0].style.transition = 'all 1s ease';
                clouds[0].style.zIndex = '0';
                clubName[0].style.flexDirection = 'column';
            })
            // clubName[0].style.transform = `scale(${zoom+=0.11})`;
            // Perform actions or execute code for scrolling down
        } else if (delta < 0) {
            // Scroll up
            console.log('Scroll up');
            zoom-=0.11;
            window.addEventListener('scroll', function() {
                // Check if scrolled to the top
                if (window.scrollY <=10) {
                    // Execute your code here
                    console.log('Scrolled to the top!');
                    spans.forEach((span)=>{
                        clubName[0].style.position = '';
                        clubName[0].style.right = '';
                        clubName[0].style.backgroundColor = '';
                        clubName[0].style.borderTopLeftRadius = '';
                        clubName[0].style.borderBottomLeftRadius = '';
                        clubName[0].style.zIndex = '';
                        clubName[0].style.fontSize= "";
                        clubName[0].style.transition = 'all 1s ease';
                        clubName[0].style.flexDirection = '';
                        clouds[0].style.zIndex = '1';
                        // span.style.transform = ``;
                        // span.style.fontSize= "";
                        // span.style.transition = 'all 3s ease';
                        // span.style.display ="fixed";
                        clubName[0].style.flexDirection = 'row';
                    })
                  
                  // Your code logic goes here
                  // ...
                }
              });

            // Perform actions or execute code for scrolling up
        }

         
        
        //   Prevent the default scroll behavior if needed
          event.preventDefault();
        }
        window.addEventListener('scroll', function() {
            // Check if scrolled to the top
            if (window.pageYOffset <=10) {
              // Execute your code here
            //   console.log('Scrolled to the top!');
              
              // Your code logic goes here
              // ...
            }
          });

        // function moveClubName()
    

