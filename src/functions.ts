import { SayHelloProps } from "./types";

export function SayHello({firstName, lastName, age}: SayHelloProps) {
    console.log('Hello!')
    console.log(`Your first name is: ${firstName}`)
    if (lastName) {
        console.log(`Your last name is: ${firstName}`)
    }
    if (age) {
        console.log(`Your age is: ${firstName}`)
    }
}