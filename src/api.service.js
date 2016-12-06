export default class Api {
    constructor($http, $httpParamSerializerJQLike, SERVER, ERROR, Upload) {
        'ngInject';
        this.$http = $http;
        //this.$httpParamSerializerJQLike = $httpParamSerializerJQLike;

        // Constants
        this.SERVER = SERVER;

        // Services
        this.Upload = Upload;
    }

    /* On your controller, call:
        this.Api.GET(url).then(
            (response) => {},
            (error) => {}
        );
    */
    GET(url) {
        return this.$http.get(this.SERVER.host + url);
    }

    /* On your controller, call:
        this.Api.POST(url, data).then(
            (response) => {},
            (error) => {}
        );
    */
    POST(url,data) {
        return this.$http.post(
            this.SERVER.host + url,
            
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
        return this.$http.post(
            this.SERVER.host + url,
            
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
        return this.$http.delete(this.SERVER.host + url + index);
    }

    /* On your controller, call:
        this.Api.UPLOAD(url, token, data).then(
            (response) => {},
            (error) => {},
            (event) => {} //Progress
        );
    */
    /* This uses https://github.com/danialfarid/ng-file-upload */
    UPLOAD(url, token, data) {
        // Data needs to be passed as a form data
        var form = new FormData();
        for ( var key in data ) {
            form.append('files[]', data[key]);
        }

        return this.Upload.upload({
            url: this.SERVER.host+url,
            headers: {
                'Access-Token': token,
                'Content-Type': undefined
            },
            data: {
                'files[]': form.getAll('files[]')
            }
        });
    } 
}


