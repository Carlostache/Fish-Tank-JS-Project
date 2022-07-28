

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    //Canvas Setup and Constants

    let canvas = document.getElementById('demoCanvas');

    canvas.width = 1200

    canvas.height = 540

    window.canvas = canvas

    let ctx = canvas.getContext('2d');

    let CANVAS_WIDTH = canvas.width;

    let CANVAS_HEIGHT = canvas.height;


    // Canvas Elements and Collision Boundaries

    function renderCanvasElements() {

    // Rendering 2D still background

    var background = new Image();
    background.src = './assets/fish_tank_background.png';

    ctx.drawImage(background, 0, 0);

    //Floor
    ctx.fillStyle = "black";
    ctx.fillRect(0,530, 1220, 20);

    //Jukebox Table
    ctx.fillRect(20, 360, 100, 200);
    var jukebox = new Image();
    jukebox.src = './assets/jukebox_cropped.png';

    ctx.drawImage(jukebox, 20, 360, 100, 170);

    //Fishtank Table

    // //Left Leg
    // ctx.fillRect(280, 480, 70, 120)

    // //Right Leg
    // ctx.fillRect(940, 480, 70, 120)

    // //Tabletop
    // ctx.fillRect(220, 470, 850, 10)

    //Fishtank
    ctx.strokeRect(230, 100, 830, 430);
    // ctx.fillRect(230, 110, 830, 430);

    }
   

    //Fish rendering and animation

    let offsetX;
    let offsetY;

    let get_offset = function() {
        let canvas_offsets = canvas.getBoundingClientRect();
        offsetX = canvas_offsets.left;
        offsetY = canvas_offsets.top;
    };

    get_offset();
    window.onscroll = function() { get_offset(); };
    window.onresize = function() { get_offset(); };
    canvas.onresize = function() { get_offset(); };


    
    let fishArray = [];

    let current_fish_index = null;

    let is_dragging = false;

    let startX;
    let startY;

    let current_fish;

    let is_mouse_in_fish = function(x, y, fish) {
        let fish_left = fish.x;
        let fish_right = fish.x + fish.width;
        let fish_top = fish.y;
        let fish_bottom = fish.y + fish.height;

        if (x > fish_left && x < fish_right && y > fish_top && y < fish_bottom) {
            return true; // mouse in the boundary of the rendered fish object
        }

        return false;
    };

    let mouse_down = function(event) {
        event.preventDefault();
        startX = parseInt(event.clientX) - offsetX;
        startY = parseInt(event.clientY) - offsetY;
        

        let index = 0;
        for (let fish of fishArray) {
            if (is_mouse_in_fish(startX, startY, fish)) {
                current_fish_index = index;
                is_dragging = true;
                return;
            }
            index++;
        }
    };

    let mouse_up = function(event) {

        if (!is_dragging) {
            return;
        }

        event.preventDefault();
        is_dragging = false;

    };

    let mouse_out = function(event) {
 
        if (!is_dragging) {
            return;
        }

        event.preventDefault();
        is_dragging = false;

    };

    let mouse_move = function(event) {
        if (!is_dragging) {
            return;
        } else {
            event.preventDefault();
            let mouseX = parseInt(event.clientX) - offsetX;
            let mouseY = parseInt(event.clientY) - offsetY;

            let dx = mouseX - startX;
            let dy = mouseY - startY;

            let current_fish = fishArray[current_fish_index];
            current_fish.dragging = true;
            current_fish.x += dx;
            current_fish.y += dy;

            // current_fish.draw();

            startX = mouseX;
            startY = mouseY;

        }

    };

    canvas.onmousedown = mouse_down;
    canvas.onmouseup = mouse_up;
    canvas.onmouseout = mouse_out;
    canvas.onmousemove = mouse_move;


    let gameFrame = 0;

    var initialFishNum = 12;

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
            this.y = Math.floor(Math.random() * (400 - 100) + 100);
            this.frame = 0;
            this.angle = 0;
            this.angleSpeed = Math.random() * 0.2;
            this.curve = Math.random() * 3;
            this.dragging = false;
        }
        dragReset() {
            if (!is_dragging) this.dragging = false;
        }
        update() {
            if (this.x < 220 || this.x > 1060 || this.y < 100) {
                this.speed = 0;
                if (this.x < 120 && this.y < 360 || this.y < 490) {
                this.y += 3;
                } else this.y += 0;
            }else {
                this.x += this.speed;
                this.y += this.curve * Math.sin(this.angle);
                this.angle += this.angleSpeed;
            };
            if (this.x + this.width > 1063) this.speed = Math.random() * -3;
            if (this.x + this.width < 268) this.speed = Math.random() * 3;
            if (this.y + this.height > 435) this.curve = Math.random() * 2;
            if (this.y + this.height < 100) this.angleSpeed = Math.random() * 0.2;
            if (gameFrame % 7 === 0){
                this.frame > 1 ? this.frame = 0 : this.frame++;
            };
            //Allows us to control update rate of animations and 
            //cycles through the three animations
    
        };
        draw(){
            if (this.speed < 0) {
            ctx.drawImage(this.type, this.frame * this.spriteWidth, 0, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
            } else
            ctx.drawImage(this.type, this.frame * this.spriteWidth, 45, this.spriteWidth, this.spriteHeight, this.x, this.y, this.width, this.height);
        };
    };

    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        renderCanvasElements();
        fishArray.forEach(fish => {
            fish.dragReset();
            if (fish.dragging === true) {
                fish.draw();
            } else {
                fish.update();
                fish.draw();
            }
        });
        ctx.fillStyle = 'rgba(68, 99, 185, 0.3)';
        ctx.fillRect(230, 110, 830, 420);

        gameFrame++;
        requestAnimationFrame(animate);
    };

    for (let i = 0; i < initialFishNum; i++) {
        fishArray.push(new midFish());
    };
    // let testFish = new midFish();

    // fishArray.push(testFish);

    // console.log(fishArray); 

    animate();


});

