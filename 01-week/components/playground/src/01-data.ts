class Data {
    method: string;
    url: string;
    version: string;
    message: string;
    response!: undefined;
    fulfilled!: boolean;

    constructor(method: string, url: string, version: string, message: string ) {
        this.method = method;
        this.url = url;
        this.version = version;
        this.message = message;
    }
}

let myNewData = new Data('Get', 'http://google.com', 'HTTP/1.1', 'test' );
console.log(myNewData);

export {};