// ;(function () {
//     console.log('Is Fish Tank Render????')
// })()

// let canvas, ctx

// function init () {
//     canvas = document.getElementById('demoCanvas')
//     ctx = canvas.getContext('2d')

//     //Floor
//     ctx.fillRect(0,530, 1200, 10)
// }

// class Canvas {
//     constructor(parent = document.body, width = 1200, height = 540) {
//         this.canvas = document.createElement('canvas');
//         this.canvas.width = width;
//         this.canvas.height = height;
//         parent.appendChild(this.canvas);
//         this.ctx = this.canvas.getContext('2d');
//     }
// }

// const canvas = new Canvas();


document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    let canvas = document.getElementById('demoCanvas');

    window.canvas = canvas

    let ctx = canvas.getContext('2d');

    //Floor
    ctx.fillstyle = "brown";
    ctx.fillRect(0,530, 1220, 20);

    //Radio Table
    ctx.fillstyle = "red";
    ctx.fillRect(20, 360, 100, 1000);

    //radio

    ctx.fillRect(35, 320, 70, 100)

    //Fishtank Table

    //Left Leg
    ctx.fillRect(280, 420, 70, 120)

    //Right Leg
    ctx.fillRect(940, 420, 70, 120)

    //Tabletop
    ctx.fillRect(220, 410, 850, 10)

    //Fishtank
    

});

// let canvas = document.getElementById('demoCanvas');


// let ctx = canvas.getContext('2d');


// //Floor
// ctx.fillstyle = "brown";
// ctx.fillRect(0,530, 1200, 10);

//Radio Table
// ctx.fillRect(20, 540, 30, 200);

//Radio

// document.addEventListener('DOMContentLoaded') 











