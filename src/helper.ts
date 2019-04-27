declare const Promise: any;

function sleep(miliseconds: number) {
    return new Promise(
        (resolve: any, reject: any) =>
            setTimeout(resolve, miliseconds));
}
