export class Exception {
    errorMessage: string;
    layer: string;

    constructor(msg: string, layer: string) {
        this.errorMessage = msg;
        this.layer = layer;
    }
}