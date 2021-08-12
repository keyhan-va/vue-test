import ajax from '../core/Ajax';

class Form {

    constructor(data) {
        this.originalData = data

        for (let field in data) {
            this[field] = data[field];
        }
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
        this.reset();
    }

    onFail(error) {
    }
}

export default Form;
