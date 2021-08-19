"use strict"

window.onload = function () {


    const parallax = document.querySelector('.forge');
    const content = document.querySelector('.forge__body');
    const planet = document.querySelector('.images-parallax__planet');
    const station = document.querySelector('.images-parallax__station');
    const ship = document.querySelector('.images-parallax__ship');

    const forPlanet = 300;
    const forStation = 60;
    const forShip = 25;

    const speed = 0.05;

    let positionX = 0, positionY = 0;
    let coordXprocent = 0, coordYprocent = 0;

    function setMouseParallaxStyle() {
        const distX = coordXprocent - positionX;
        const distY = coordYprocent - positionY;

        positionX = positionX + (distX * speed);
        positionY = positionY + (distY * speed);

        planet.style.cssText = `transform: translate(${positionX / forPlanet}%, ${positionY / forPlanet}%);`;
        station.style.cssText = `transform: translate(${positionX / forStation}%, ${positionY / forStation}%);`;
        ship.style.cssText = `transform: translate(${positionX / forShip}%, ${positionY / forShip}%);`;

        requestAnimationFrame(setMouseParallaxStyle);
    }
    setMouseParallaxStyle();

    parallax.addEventListener("mousemove", function (e) {
        const parallaxWidth = parallax.offsetWidth;
        const parallaxHeight = parallax.offsetHeight;

        const coordX = e.pageX - parallaxWidth / 2;
        const coordY = e.pageY - parallaxHeight / 2

        coordXprocent = coordX / parallaxWidth * 100;
        coordYprocent = coordY / parallaxHeight * 100;
    });

    if ('ontouchstart' in window) {
        parallax.addEventListener("touchmove", function (e) {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.targetTouches[0].clientX - parallaxWidth / 2;
            const coordY = e.targetTouches[0].clientY - parallaxHeight / 2
            e.preventDefault();

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        });
    }

}