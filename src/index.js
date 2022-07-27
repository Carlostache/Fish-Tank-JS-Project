

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
            this.speed = Math.random() * 4 - 2;
            this.size = 3;
            this.radius = 30;
            this.spriteWidth = 45;
            this.spriteHeight = 45;
            this.width = this.spriteWidth
            this.height = this.spriteHeight
            this.x = Math.floor(Math.random() * (1060 - 230) + 230);
            this.y = Math.floor(Math.random() * (420 - 100) + 100);
            // this.spriteWidthLeft = spriteWidthLeft;
            // this.spriteHeightLeft = spriteHeightLeft;
            this.frame = 0;
            this.angle = 0;
            this.angleSpeed = Math.random() * 0.2;
            this.curve = Math.random() * 5;
            // this.swimSpeed = Math.floor(Math.random() * 3 + 1);
            // this.frameLeft = 45
        }
        update() {
            this.x += this.speed;
            this.y += this.curve * Math.sin(this.angle);
            this.angle += this.angleSpeed;
            if (this.x + this.width > 1063) this.speed = Math.random() * -3;
            if (this.x + this.width < 267) this.speed = Math.random() * 3;
            if (this.y + this.height > 435) this.curve = Math.random() * 5;
            if (this.y + this.height < 100) this.angleSpeed = Math.random() * 0.2;
            if (gameFrame % 7 === 0){
                this.frame > 1 ? this.frame = 0 : this.frame++;
            };
            //Allows us to control update rate of animations and 
            //cycles through the three animations
    
        }
        draw(){
            // ctx.fillRect(this.x, this.y, this.radius, this.radius);
            if (this.speed < 0) {
            ctx.drawImage(this.type, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
            } else
            ctx.drawImage(this.type, this.frame * this.spriteWidth, 45, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
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

