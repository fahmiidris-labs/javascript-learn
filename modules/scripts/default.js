// export default function (name) {
//     console.info(`Hi ${name} from default funtion`)
// }

// export default name = "Fahmi Idris"

export default class {
    constructor(name) {
        this.name = name
    }

    sayHi() {
        console.info(`Hi my name is ${this.name}`)
    }
}