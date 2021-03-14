class HttpService {
    private baseUrl: string = null;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private getFullUrl = (url: string): string => {
        return this.baseUrl + url
    }

    get = async (url: string) => {
        try {
            const fullUrl = this.getFullUrl(url);
            const response = await fetch(fullUrl);
            const jsonResponse = await response.json();
            return Promise.resolve(jsonResponse);
        } catch (e) {
            return Promise.reject(e);
        }
        
    }
}

const BASE_URL = process.env.REACT_APP_END_POINT;
console.log(process.env);

export const HttpServiceInstance = new HttpService(BASE_URL);