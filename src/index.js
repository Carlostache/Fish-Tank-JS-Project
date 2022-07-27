

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    //Canvas Setup and Constants

    let canvas = document.getElementById('demoCanvas');

    window.canvas = canvas

    let ctx = canvas.getContext('2d');

    CANVAS_WIDTH = canvas.width;

    CANVAS_HEIGHT = canvas.height;

    //Mouse Movement & Logic

    document.addEventListener("mousemove", mouseMoveHandler, false);

    let paddleWidth = 4


    function mouseMoveHandler(e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if(relativeX > 0 && relativeX < canvas.width) {
            paddleX = relativeX - paddleWidth/2;
        }
    }

    function renderCanvasElements() {
    //Floor
    ctx.fillstyle = "white";
    ctx.fillRect(0,530, 1220, 20);

    //Radio Table
    ctx.fillRect(20, 360, 100, 1000);

    //Radio

    ctx.fillRect(35, 320, 70, 100)

    //Fishtank Table

    //Left Leg
    ctx.fillRect(280, 480, 70, 120)

    //Right Leg
    ctx.fillRect(940, 480, 70, 120)

    //Tabletop
    ctx.fillRect(220, 470, 850, 10)

    //Fishtank
    ctx.strokeRect(230, 100, 830, 370)

    }

    //test Fish rendering and animation
    
    let fishArray = [];

    let gameFrame = 0;

    // const initialFishNum = 1;

    class midFish {
        constructor() {
            const midFishImage = new Image();
            midFishImage.src = './assets/mid_fish_sprite_sheet_final.png'
            this.type = midFishImage;
            // this.speed = velocity;
            this.speed = Math.random() * 4 - 2;
            this.size = 3;
            this.radius = 30;
            this.x = Math.floor(Math.random() * (1060 - 230) + 230);
            this.y = Math.floor(Math.random() * (470 - 100) + 100);
            this.width = 45;
            this.height = 45;
            this.spriteWidth = 45;
            this.spriteHeight = 45;
            // this.spriteWidthLeft = spriteWidthLeft;
            // this.spriteHeightLeft = spriteHeightLeft;
            this.frame = 0;
            this.swimSpeed = Math.floor(Math.random() * 3 + 1);
            // this.frameLeft = 45
        }
        update() {
            // this.x++;
            // this.y++;
            this.x += this.speed;
            this.y += this.speed;
            // if (gameFrame % this.swimSpeed === 0) {
            //     this.frame > 1 ? this.frame = 0 : this.frame++;
            // }
            //Allows us to control update rate of animations and 
            //cycles through the three animations
    
        }
        draw(){
            // ctx.fillRect(this.x, this.y, this.radius, this.radius);
            ctx.drawImage(this.type, 0, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        }
    };

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        renderCanvasElements();
        fishArray.forEach(fish => {
            fish.update();
            fish.draw();
        });
        gameFrame++;
        requestAnimationFrame(animate);
    };

    testFish = new midFish();

    fishArray.push(testFish);

    console.log(fishArray); 

    animate();

});

