const $ = (selector) => document.querySelector(selector)
const pjsConfig = {
    "particles": {
        "number": {
            "value": 150,
            "density": {
                "enable": true,
                "value_area": 2000
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 4,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 125,
            "color": "#ffffff",
            "opacity": 0.5,
            "width": 1.5
        },
        "move": {
            "enable": true,
            "speed": 2.5,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 3156.5905665290907,
                "rotateY": 7339.073067180137
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "grab"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 300,
                "line_linked": {
                    "opacity": .5
                }
            },
            "bubble": {
                "distance": 400,
                "size": 1,
                "duration": 1,
                "opacity": 1,
                "speed": 3
            },
            "repulse": {
                "distance": 430.4009225197129,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 1
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
}

var topStates = ["about", "work", "media", "contact"]
var state = "home"

let logoContainer, logo, navPlaceholder, navMobile, menuButton, backButton, 
    aboutText

window.addEventListener("load", () => {
    logoContainer = $(".container.logo")
    logo = $("img.logo")
    navPlaceholder = $(".navlink.placeholder")
    navMobile = $(".nav-mobile")
    menuButton = $(".bars")
    backButton = $(".arrow")
    aboutText = $(".acticle.about")

    /// Add particles to scene
    particlesJS("particles", pjsConfig)

    /// Append event listeners
    $(".navlink.about").addEventListener("click", aboutDesktopNavlinkClick)
    $(".navlink.work").addEventListener("click", workDesktopNavlinkClick)
    $(".navlink.media").addEventListener("click", mediaDesktopNavlinkClick)
    $(".navlink.contact").addEventListener("click", contactDesktopNavlinkClick)
    
    menuButton.addEventListener("click", hamburgerMenuClick)
    backButton.addEventListener("click", backButtonClick);
    
    $(".navlink-mobile.about").addEventListener("click", () => { aboutDesktopNavlinkClick(); hamburgerMenuClick(); })
    $(".navlink-mobile.work").addEventListener("click", () => { workDesktopNavlinkClick(); hamburgerMenuClick(); })
    $(".navlink-mobile.media").addEventListener("click", () => { mediaDesktopNavlinkClick(); hamburgerMenuClick(); })
    $(".navlink-mobile.contact").addEventListener("click", () => { contactDesktopNavlinkClick(); hamburgerMenuClick(); })

    //UpdateState("home");
})

function UpdateState(_state) {
    console.log(_state)
    state = _state

    if (state === "home") {
        logo.attributes.pos.value = "center"
        logoContainer.attributes.pos.value = "center"
        navPlaceholder.attributes.pos.value = "center"
        backButton.attributes.visible.value = "false"
    } else {
        logoContainer.attributes.pos.value = "top"
        logo.attributes.pos.value = "top"
        navPlaceholder.attributes.pos.value = "top"
        backButton.attributes.visible.value = "true"
    }

    switch (state) {
        case "home": {          
            break
        }
        case "about": {
            break
        }
        case "work": {
            break
        }
        case "media": {
            break
        }
        case "contact": {
            break
        }
        default: {
            break
        }
    }
}

function hamburgerMenuClick() {
    if(navMobile.attributes.active.value === "false") 
        navMobile.attributes.active.value = "true"
    else
        navMobile.attributes.active.value = "false"
}

function backButtonClick() {
    UpdateState("home")
}

function aboutDesktopNavlinkClick() {
    if (state === "about") { /// Hide
        UpdateState("home");
    } else { /// Show
        UpdateState("about");
    }
}

function workDesktopNavlinkClick() {
    if (state === "work") {
        UpdateState("home");
    } else {
        UpdateState("work");
    }
}

function mediaDesktopNavlinkClick() {
    if (state === "media") {
        UpdateState("home");
    } else {
        UpdateState("media");
    }
}

function contactDesktopNavlinkClick() {
    if (state === "contact") {
        UpdateState("home");
    } else {
        UpdateState("contact");
    }
}