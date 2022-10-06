        //javascript for navigation bar effects on scroll
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle('sticky', window.scrollY > 0);
          });
          
          //javascript for responsive navigation sidebar menu
          const menuBtn = document.querySelector(".menu-btn");
          const navigation = document.querySelector(".navigation");
          const navigationItems = document.querySelectorAll(".navigation a")
          
          menuBtn.addEventListener("click",  () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
          });
          
          navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
              menuBtn.classList.remove("active");
              navigation.classList.remove("active");
            });
          });
          
          //javascript for scroll to top button
          const scrollBtn = document.querySelector(".scrollToTop-btn");
          
          window.addEventListener("scroll", function(){
            scrollBtn.classList.toggle("active", window.scrollY > 500);
          });
          
          //javascript for scroll back to top on click scroll-to-top button
          scrollBtn.addEventListener("click", () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
          });
          
          //javascript for reveal website elements on scroll
          window.addEventListener("scroll", reveal);
          
          function reveal(){
            var reveals = document.querySelectorAll(".reveal");
          
            for(var i = 0; i < reveals.length; i++){
              var windowHeight = window.innerHeight;
              var revealTop = reveals[i].getBoundingClientRect().top;
              var revealPoint = 50;
          
              if(revealTop < windowHeight - revealPoint){
                reveals[i].classList.add("active");
              }
            }
          }
      
          





          window.onload = function() {
            // Month Day, Year Hour:Minute:Second, id-of-element-container
            countUpFromTime("Aug 5, 2020 12:00:00", 'countup1'); // ****** Change this line!
          };
          function countUpFromTime(countFrom, id) {
            countFrom = new Date(countFrom).getTime();
            var now = new Date(),
                countFrom = new Date(countFrom),
                timeDifference = (now - countFrom);
              
            var secondsInADay = 60 * 60 * 1000 * 24,
                secondsInAHour = 60 * 60 * 1000;
              
            days = Math.floor(timeDifference / (secondsInADay) * 1);
            years = Math.floor(days / 365);
            if (years >= 1){ days = days - (years * 365) }
            hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
            mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
            secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);
          
            var idEl = document.getElementById(id);
            idEl.getElementsByClassName('years')[0].innerHTML = years;
            idEl.getElementsByClassName('days')[0].innerHTML = days;
            idEl.getElementsByClassName('hours')[0].innerHTML = hours;
            idEl.getElementsByClassName('minutes')[0].innerHTML = mins;
            idEl.getElementsByClassName('seconds')[0].innerHTML = secs;
          
            clearTimeout(countUpFromTime.interval);
            countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
          }