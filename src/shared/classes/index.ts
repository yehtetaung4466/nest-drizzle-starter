export class ResponseObj<T> {
    constructor(public message:string[],public data?:T){}
}