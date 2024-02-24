import { SayHelloProps } from "./types";

export function SayHello({firstName, lastName, age}: SayHelloProps) {
    console.log('Hello!')
    console.log(`Your first name is: ${firstName}`)
    if (lastName) {
        console.log(`Your last name is: ${lastName}`)
    }
    if (age) {
        console.log(`Your age is: ${age}`)
    }
}

export function SayHi({firstName, lastName, age}: SayHelloProps) {
    console.log('Hi!')
    console.log(`Your first name is: ${firstName}`)
    if (lastName) {
        console.log(`Your last name is: ${lastName}`)
    }
    if (age) {
        console.log(`Your age is: ${age}`)
    }
}
export function SayBye({firstName, lastName, age}: SayHelloProps) {
    console.log('Bye!')
    console.log(`Your first name is: ${firstName}`)
    if (lastName) {
        console.log(`Your last name is: ${lastName}`)
    }
    if (age) {
        console.log(`Your age is: ${age}`)
    }
}
