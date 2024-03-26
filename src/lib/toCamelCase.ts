import {capitalize} from "./capitalize";

export function toCamelCase(str: string) {
    const regExp = /(\-|\_){1,35}/g
    const split = str.split(regExp)
    let arr: string[] = []
    split.forEach(str => {
        if (!str.match(regExp)) {
            arr.push(str)
        }
    })
    let res = arr.map((str, idx) => {
        if (idx !== 0) return capitalize(str)
        return str
    })
    return res.join('')
}