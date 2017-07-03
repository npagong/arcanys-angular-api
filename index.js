export default class ArcanysApiClient {
    constructor() {
        this.$http = null;
        this.contentType = 'application/json';
        this.headers = {
            'Content-Type': this.getContentType()
        }
    }

    TEST(url) {
        return url;
    }

    setHttp($http) {
        return this.$http = $http; 
    }

    getHttp() {
        return this.$http;
    }

    setContentType(contentType) {
        return this.contentType = contentType; 
    }

    getContentType() {
        return this.contentType;
    }

    setHeaders(headers) {
        return this.headers = headers;
    }

    getHeaders() {
        return this.headers;
    }

    GET(url) {
        return this.getHttp().get(
            url,
            {
                headers: this.getHeaders()
            }
        );
    }
    
    POST(url,data) {
        return this.getHttp().post(
            url,
            JSON.stringify(data), 
            {
                headers: this.getHeaders()
            }
        );
    }
    
    PUT(url, data) {
        return this.getHttp().put(
            url, 
            JSON.stringify(data), 
            {
                headers: this.getHeaders()
            }
        );
    }

    PATCH(url, data) {
        return this.getHttp().patch(
            url, 
            JSON.stringify(data), 
            {
                headers: this.getHeaders()
            }
        );
    }
    
    DELETE(url, index) {
        return this.getHttp().delete(url + index);
    }
}