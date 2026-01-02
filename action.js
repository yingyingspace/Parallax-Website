// Select the class bubble
time = document.getElementsByClassName('bubbles')[0];

// padding values for desktop
var fish2move = 100;
var fish3move = 900;
var fish4move = 1200;
var fishWaveSettings = {
    fish1: { baseTop: 0, amplitude: 18, wavelength: 220, phase: 0 },
    fish2: { baseTop: 32, amplitude: 24, wavelength: 260, phase: 60 },
    fish3: { baseTop: 60, amplitude: 20, wavelength: 240, phase: 120 },
    fish4: { baseTop: 87, amplitude: 16, wavelength: 200, phase: 180 }
};

if (screen.width < 400) {

    //Change transformation duration and translatey for mobile view
    time.style.setProperty('--transform-duration', '15s')
    time.style.setProperty('--transform-y', '-700vh')

    // padding values for mobile
    fish2move = 1680;
    fish3move = 3000;
    fish4move = 4300;

    fishWaveSettings = {
        fish1: { baseTop: 0, amplitude: 28, wavelength: 200, phase: 0 },
        fish2: { baseTop: 32, amplitude: 36, wavelength: 220, phase: 60 },
        fish3: { baseTop: 60, amplitude: 30, wavelength: 210, phase: 120 },
        fish4: { baseTop: 87, amplitude: 24, wavelength: 190, phase: 180 }
    };
}



window.addEventListener('scroll', function () {

    let value = window.scrollY;   //Get Scroll Value (Mobile - High)

    text.style.top = 50 + value * -0.2 + '%';
    cloud.style.left = value * 2 + 'px';

    bird1.style.top = value * 0.1 + 'px';
    bird1.style.left = value * 1 + 'px';

    bird2.style.top = value * -0.1 + 'px';
    bird2.style.left = value * -2 + 'px';

    explore.style.marginTop = value * 1.5 + 'px';

    rocks.style.top = value * -0.14 + 'px';

    forest.style.top = value * 0.4 + 'px';
    sky.style.top = value * 0.25 + 'px';
    mountains.style.top = value * 0.25 + 'px';

    header.style.top = value * 0.7 + 'px';
    sun.style.top = value * 1 + 'px';

    //To prevent splash to move above sea water
    if (value < 380) {
        splash.style.top = 20 + value * -0.3 + 'px';
    }

    //Move fishes in an S-shaped path (horizontal + vertical wave)
    fish1.style.right = (value - 100) * 1 + 'px';
    fish1.style.top = `calc(${fishWaveSettings.fish1.baseTop}% + ${Math.sin((value + fishWaveSettings.fish1.phase) / fishWaveSettings.fish1.wavelength) * fishWaveSettings.fish1.amplitude}px)`;

    fish2.style.left = (value - fish2move) * 1 + 'px';
    fish2.style.top = `calc(${fishWaveSettings.fish2.baseTop}% + ${Math.sin((value + fishWaveSettings.fish2.phase) / fishWaveSettings.fish2.wavelength) * fishWaveSettings.fish2.amplitude}px)`;

    fish3.style.right = (value - fish3move) * 1 + 'px';
    fish3.style.top = `calc(${fishWaveSettings.fish3.baseTop}% + ${Math.sin((value + fishWaveSettings.fish3.phase) / fishWaveSettings.fish3.wavelength) * fishWaveSettings.fish3.amplitude}px)`;

    fish4.style.left = (value - fish4move) * 1 + 'px';
    fish4.style.top = `calc(${fishWaveSettings.fish4.baseTop}% + ${Math.sin((value + fishWaveSettings.fish4.phase) / fishWaveSettings.fish4.wavelength) * fishWaveSettings.fish4.amplitude}px)`;
})


// Contains the link for all social media handles
var links = document.getElementsByClassName("social-media");

links[0].addEventListener("click", () => { openlink(1) });
links[1].addEventListener("click", () => { openlink(2) });
links[2].addEventListener("click", () => { openlink(3) });
links[3].addEventListener("click", () => { openlink(4) });

function openlink(x) {
    if (x == 1) {
        window.open("https://www.instagram.com/_.vini._02_/", "_blank");
    }
    if (x == 2) {
        window.open("https://www.linkedin.com/in/vineet-kumar-gupta-2833ab196/", "_blank");
    }
    if (x == 3) {
        window.open("https://github.com/VineetKumar02", "_blank");
    }
    if (x == 4) {
        window.open("https://vineet-portfolio-site.netlify.app/", "_blank");
    }
}
