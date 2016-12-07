export default class Api {
    constructor($http, $httpParamSerializerJQLike) {
        'ngInject';
        this.$http = $http;
    }

    TEST(url) {
        return url;
    }

    /* On your controller, call:
        this.Api.GET(url).then(
            (response) => {},
            (error) => {}
        );
    */
    GET(url) {
        return this.$http.get(url);
    }

    /* On your controller, call:
        this.Api.POST(url, data).then(
            (response) => {},
            (error) => {}
        );
    */
    POST(url,data) {
        return this.$http.post(url,
            
            // Content-Type application/json
            JSON.stringify(data));
            
            // Content-Type application/x-www-form-urlencoded; charset=UTF-8
            //this.$httpParamSerializerJQLike(data));
    }

    /* On your controller, call:
        this.Api.PUT(url, data).then(
            (response) => {},
            (error) => {}
        );
    */
    PUT(url, data) {
        return this.$http.post(url,
            
            // Content-Type application/json
            JSON.stringify(data));
            
            // Content-Type application/x-www-form-urlencoded; charset=UTF-8
            //this.$httpParamSerializerJQLike(data));
    }

    /* On your controller, call:
        this.Api.DELETE(url, index).then(
            (response) => {},
            (error) => {}
        );
    */
    DELETE(url, index) {
        return this.$http.delete(url + index);
    }
}