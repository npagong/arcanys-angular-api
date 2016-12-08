import ArcanysApiClient from './index';

export default class User extends ArcanysApiClient {
    constructor() {
        super();
        this.loginUrl = null;
        this.confirmUrl = null;
        this.registerUrl = null;
        this.sendEmailUrl = null;
        this.recoverUrl = null;
        this.resetPassUrl = null;
    }

    /* LOGIN */
    setLoginUrl(url) {
        return this.loginUrl = url;
    }
    getLoginUrl() {
        return this.loginUrl;
    }
    login(data) {
        return this.POST(this.getLoginUrl(), data);
    }
    
    /* CONFIRM ACCOUNT */
    setConfirmUrl(url) {
        return this.confirmUrl = url;
    }
    getConfirmUrl() {
        return this.confirmUrl;
    }
    confirm(data) {
        return this.POST(this.getConfirmUrl(), data);
    }

    /* REGISTER */
    setRegisterUrl(url) {
        return this.registerUrl = url;
    }
    getRegisterUrl() {
        return this.registerUrl;
    }
    register(data) {
        return this.POST(this.getRegisterUrl(), data);
    }

    /* SEND EMAIL */
    setSendEmailUrl(url) {
        return this.sendEmailUrl = url;
    }
    getSendEmailUrl() {
        return this.sendEmailUrl;
    }
    sendEmail(data) {
        return this.POST(this.getSendEmailUrl(), data);
    }

    /* RECOVER PASSWORD */
    setRecoverUrl(url) {
        return this.recoverUrl = url;
    }
    getRecoverUrl() {
        return this.recoverUrl;
    }
    recoverPass(data) {
        return this.POST(this.getRecoverUrl(), data);
    }

    /* RESET PASSWORD */
    setResetPassUrl(url) {
        return this.resetPassUrl = url;
    }
    getResetPassUrl() {
        return this.resetPassUrl;
    }
    resetPass(data) {
        return this.POST(this.getResetPassUrl(), data);
    }
}

