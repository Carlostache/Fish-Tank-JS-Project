const ctx = require('./../index')

const numberOfFish = 7;

const fishArray = [];

let gameFrame = 0;

class Fish {
    constructor() {
        this.type = sprite;
        this.speed = Math.random() * 4 - 2;
        this.size = size;
        this.radius = radius;
        this.x = xPos
        this.y = yPos
        this.spriteWidthRight = spriteWidthRight;
        this.spriteHeightRight = spriteHeightRight;
        // this.spriteWidthLeft = spriteWidthLeft;
        // this.spriteHeightLeft = spriteHeightLeft;
        this.frame = 0;
        this.swimSpeed = Math.floor(Math.random() * 3 + 1);
    }
    // update() {
    //     this.x = this.speed;
    //     this.y = this.speed;
    //     if (gameFrame % this.swimSpeed === 0) {
    //         this.frame > 1 ? this.frame = 0 : this.frame++;
    //     }
    //     // Allows us to control update rate of animations and 
    //     // cycles through the three animations

    // }
    // draw(){
    //     // ctx.fillRect(this.x, this.y, this.radius, this,radius);
    //     ctx.drawImage(this.type, this.x, this.y, this.radius, this.radius);
    // }
}

    
function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        fishArray.forEach(fish => {
            fish.update();
            fish.draw();
        });
        gameFrame++;
        requestAnimationFrame(animate);
}


class smallestFish extends Fish {
    constructor() {
        this.type = smallestSprite;
        this.speed = velocity;
        this.size = 1;
        this.radius = 3;
    }
}

class smallerFish extends Fish {
    constructor() {
        this.type = smallerSprite;
        this.speed = velocity;
        this.size = 2;
        this.radius = 5;
    }
}

class midFish {
    constructor() {
        const midFishImage = new Image();
        midFishImage.src = './assets/mid_fish_sprite_sheet_final.png'
        this.type = midFishImage;
        // this.speed = velocity;
        this.speed = Math.random() * 4 - 2;
        this.size = 3;
        this.radius = 15;
        this.x = 200;
        this.y = 50;
        this.spriteWidthRight = 45;
        this.spriteHeightRight = 45;
        // this.spriteWidthLeft = spriteWidthLeft;
        // this.spriteHeightLeft = spriteHeightLeft;
        this.frame = 0;
        this.swimSpeed = Math.floor(Math.random() * 3 + 1);
        // this.frameLeft = 45
    }
    // update() {
    //     this.x = this.speed;
    //     this.y = this.speed;
    //     if (gameFrame % this.swimSpeed === 0) {
    //         this.frame > 1 ? this.frame = 0 : this.frame++;
    //     }
        // Allows us to control update rate of animations and 
        // cycles through the three animations

    // }
    draw(){
        // ctx.fillRect(this.x, this.y, this.radius, this,radius);
        ctx.drawImage(this.type, this.x, this.y, this.radius, this.radius);
    }
}

class bigFish extends Fish {
    constructor() {
        this.type = bigSprite;
        this.speed = velocity;
        this.size = 4;
        this.radius = 13;
        this.spriteWidth = 456;
        this.spriteHeight = 576;
    }
}

module.exports = Fish;
module.exports = midFish;