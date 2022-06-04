// NavBar

// For Navbutton
const navbuttons = document.querySelector(".navbuttons");
// console.log(navbuttons);
navbuttons.addEventListener("click", () => {
    navbuttons.classList.toggle("changes");
});

// For Navbar

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
    const getscroll = window.scrollY;
    // console.log(getscroll);
    if (getscroll >= 200) {
        navbar.classList.add("navmenus");
    } else {
        navbar.classList.remove("navmenus");
    }
});

// end Navbar

//gallery

const gallerylists = document.querySelectorAll(".gallerylists");
const filtersnew = document.querySelectorAll(".filters.new"),
    filterspro = document.querySelectorAll(".filters.pro"),
    filtersfree = document.querySelectorAll(".filters.free");

gallerylists.forEach((gallerylists) => {
    // console.log(gallerylists);
    gallerylists.addEventListener("click", (e) => {
        // console.log("hello");
        let datafilter = gallerylists.getAttribute("data-filter");
        console.log(datafilter);

        removeactive();
        e.target.classList.add("activeitems");

        switch (datafilter) {
            case "all": {
                newexpose();
                freeexpose();
                proexpose();
                break;
            }

            case "new":
                newexpose();
                freehide();
                prohide();
                break;

            case "free":
                freeexpose();
                newhide();
                prohide();
                break;

            case "pro":
                proexpose();
                freehide();
                newhide();
                break;
        }
    });
});

//remove active items

function removeactive() {
    gallerylists.forEach((gallerylists) => {
        gallerylists.classList.remove("activeitems");
        // console.log(gallerylists);
    });
}

//hide function

let newhide = () => {
    filtersnew.forEach((filtersnew) => {
        filtersnew.style.display = "none";
    });
};

let freehide = () => {
    filtersfree.forEach((filtersfree) => {
        filtersfree.style.display = "none";
    });
};
let prohide = () => {
    filterspro.forEach((filterspro) => {
        filterspro.style.display = "none";
    });
};

// expose function
let newexpose = () => {
    filtersnew.forEach((filtersnew) => {
        filtersnew.style.display = "inline-block";
    });
};

let freeexpose = () => {
    filtersfree.forEach((filtersfree) => {
        filtersfree.style.display = "inline-block";
    });
};

let proexpose = () => {
    filterspro.forEach((filterspro) => {
        filterspro.style.display = "inline-block";
    });
};

//end gallery

// start footer
const year = document.querySelector(".years");
const getyear = new Date().getFullYear();
year.textContent = getyear;
// end footer
