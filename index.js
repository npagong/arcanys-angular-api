export default class ArcanysApiClient {
    constructor() {
        this.$http = null;
        this.contentType = 'application/json';
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

    GET(url) {
        return this.getHttp().get(url);
    }
    
    POST(url,data) {
        return this.getHttp().post(
            url,
            JSON.stringify(data), 
            {
                headers: { 'Content-Type': this.getContentType()}
            }
        );
    }
    
    PUT(url, data) {
        return this.getHttp().put(
            url, 
            JSON.stringify(data), 
            {
                headers: { 'Content-Type': this.getContentType()}
            }
        );
    }
    
    DELETE(url, index) {
        return this.getHttp().delete(url + index);
    }
}