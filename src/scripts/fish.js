
class Fish {
    constructor() {
        this.type = sprite;
        this.speed = velocity;
        this.size = size;
        this.radius = radius;
    }
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

class midFish extends Fish {
    constructor() {
        this.type = midSprite;
        this.speed = velocity;
        this.size = 3;
        this.radius = 9;
    }
}

class bigFish extends Fish {
    constructor() {
        this.type = bigSprite;
        this.speed = velocity;
        this.size = 4;
        this.radius = 13;
    }
}

