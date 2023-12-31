//folder changing - click on courses
let categories = Array.from(document.getElementsByClassName("subcat"));
let courses = Array.from(document.getElementsByClassName("course"));
let activeCourse = courses[0];
let colorIndex = 0;

for(let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", function() {
        setTimeout(function() {
            if(activeCourse != courses[i]) {
                courses[i].classList.remove("hidden");
                activeCourse.classList.add("hidden");
                activeCourse = courses[i];
                
                categories[i].classList.remove(`darken-${i+1}`);
                categories[colorIndex].classList.add(`darken-${colorIndex+1}`);
                colorIndex = i;  
            } 
        }, 50);

    });
}

// animation on scroll settings
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden-element');
hiddenElements.forEach((element) => {
    observer.observe(element);
});