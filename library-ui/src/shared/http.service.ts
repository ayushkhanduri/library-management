class HttpService {
    baseUrl: string = null;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    get = async (url: string) => {
        try {
            const response = await fetch(url);

        } catch (e) {
            return Promise.reject(e);
        }
        
    }
}

const BASE = process.env.END_POINT;

export const HttpServiceInstance = new HttpService(BASE);