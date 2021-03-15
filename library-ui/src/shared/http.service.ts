class HttpService {
    private baseUrl: string = null;

    constructor(baseUrl: string) {
        this.baseUrl = baseUrl;
    }

    private getFullUrl = (url: string): string => {
        return this.baseUrl + url
    }

    put = async( url: string, data: any) => {
        try {
            const fullUrl = this.getFullUrl(url);
            const response = await fetch(fullUrl, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'PUT',
                body: JSON.stringify(data)
            });
            const jsonResponse = await response.json();
            return Promise.resolve(jsonResponse);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    post = async( url: string, data: any) => {
        try {
            const fullUrl = this.getFullUrl(url);
            const response = await fetch(fullUrl, {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            });
            const jsonResponse = await response.json();
            return Promise.resolve(jsonResponse);
        } catch (e) {
            return Promise.reject(e);
        }
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