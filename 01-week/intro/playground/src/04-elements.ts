class Melon {
    weight: number;
    melonSort: string;

    constructor(weight: number, melonSort: string) {
        this.weight = weight;
        this.melonSort = melonSort;
    }
}

class Watermelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string[] {
        let arr: string[] = [];
        arr.push('Element: Water');
        arr.push(`Sort: ${this.melonSort}`);
        arr.push(`Element Index: ${this.elementIndex}`);
        arr.forEach(el => {
            console.log(el);
        });
        return arr;
    }
}

class Firemelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string[] {
        let arr: string[] = [];
        arr.push('Element: Fire');
        arr.push(`Sort: ${this.melonSort}`);
        arr.push(`Element Index: ${this.elementIndex}`);
        arr.forEach(el => {
            console.log(el);
        });
        return arr;
    }
}

class Earthmelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string[] {
        let arr: string[] = [];
        arr.push('Element: Earth');
        arr.push(`Sort: ${this.melonSort}`);
        arr.push(`Element Index: ${this.elementIndex}`);
        arr.forEach(el => {
            console.log(el);
        });
        return arr;
    }
}

class Airmelon extends Melon {
    elementIndex: number;

    constructor(weight: number, melonSort: string) {
        super(weight, melonSort);
        this.elementIndex = this.weight * this.melonSort.length;
    }

    toString(): string[] {
        let arr: string[] = [];
        arr.push('Element: Air');
        arr.push(`Sort: ${this.melonSort}`);
        arr.push(`Element Index: ${this.elementIndex}`);
        arr.forEach(el => {
            console.log(el);
        });
        return arr;
    }
}

class Melolemonmelon extends Airmelon {
    
}

// let watermelon : Watermelon = new Watermelon(12.5, 'Kingsize');
// console.log(watermelon.toString());

