export default class ArcanysApiClient {
    constructor() {
        let initInjector = angular.injector(['ng']);
        this.$http = initInjector.get('$http');
        this.contentType = 'application/json';
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