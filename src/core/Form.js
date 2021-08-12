import Errors from './Error';
import ajax from '../core/Ajax';

class Form {

    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field];
        }

        this.errors = new Errors()
    }

    data() {
        let data = {};

        for (let property in this.originalData) {
            data[property] = this[property];
        }

        return data;
    }

    reset() {
        for (let field in this.originalData) {
            this[field] = '';
        }
    }

    submit(method, endpoint) {
        return new Promise((resolve, reject) => {
            ajax[method](endpoint, this.data())
                .then(response => {
                    this.onSuccess(response.data);
                    resolve(response.data);
                })
                .catch(error => {
                    this.onFail(error.response.data);
                    reject(error.response.data);
                })
        })
    }

    onSuccess(data) {
        this.errors.clear();
        this.reset();
    }

    onFail(error) {
        this.errors.record(error.meta);
        // this.errors.record(error);
    }
}

export default Form;
