export interface Duck {
    name: string,
    numLegs: number,
    makeSound: (sound: string) => void;
}

const duck1: Duck = {
    name: "huey",
    numLegs: 4,
    makeSound: (sound: any) => console.log("Hav hav")
}

const duck2: Duck = {
    name: "burki",
    numLegs: 3,
    makeSound: (soud: any) => console.log("miyavv")
}

export const ducks = [duck1, duck2]