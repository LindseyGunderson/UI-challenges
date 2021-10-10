
        const slides = document.querySelectorAll('.slides');
        const dots = document.querySelectorAll('.dot');

        function setActive(i) {

            for(slide of slides){

                slide.classList.remove('active-slide');
                slides[i].classList.add('active-slide');
            }

                // 
                for(dot of dots){

                    dot.classList.remove('active-dot');
                    dots[i].classList.add('active-dot');
                }
        
            }

            for(let j = 0; j < dots.length; j++) {
                dots[j].addEventListener("click", function(){

                    setActive(j);
                });
            }
