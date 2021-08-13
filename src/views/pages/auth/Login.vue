<template>
    <div class="authentication">
        <div class="uthentication-box">
            <div class="header">
                <img class="logo" src="/images/login/logoGray.svg" alt="">
                <span class="title">Login page</span>
            </div>
            <div class="authentication-body">
                <form @submit.prevent="onSubmitForm" @keydown.enter.prevent.self>
                    <div class="row">
                        <div class="col-xs-12 form-group">
                            <label for="mobile" class="label">Email:</label>
                            <input type="text" name="mobile" id="mobile" class="form-control" placeholder="Enter the email" autocomplete="off" v-model="form.email" />
                        </div>
                        <div class="col-xs-12 form-group">
                            <label for="password" class="label">Password:</label>
                            <input type="password" name="password" id="password" class="form-control" placeholder="Enter the Password" autocomplete="off" v-model="form.password" />
                        </div>
                    </div>
                    <div class="btn">
                        <Button :isLoading=isLoading title="Login" ui="btn btn-primary medium full-width" type="submit"></Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import AuthRepository from '../../../repositories/AuthRepository'
export default {
    data() {
        return{
            isLoading:false,
            form: new Form({
                email: '',
                password:''
            })
        }
    },
    methods:{
        onSubmitForm(){
            this.isLoading= true;
            this.form.submit('post', '/api/login').then(response => {
                AuthRepository.setupApiToken(response.token)
                window.events.$emit('boot');
                this.isLoading= false;
            })
            
        }
    }
}
</script>

<style lang="scss" scoped>
.authentication{
    display: flex;
    justify-content: center;
    width: 100%;
    .uthentication-box{
        scrollbar-width: none;
        margin: 40px 0;
        background-color:white;
        border: 2px solid #efefef;
        border-radius: 10px;
        padding: 32px 3% 0 3%;
        .header{
            display: flex;
            flex-direction: column;
            align-items: center;
            .logo{
                width: 40px;
            }
            .title{
                padding: 10px 0;
                color: #969696;
                border-top: 2px solid #efefef;
                margin-top: 16px;
                min-width: 150px;
                text-align: center;
            }
        }
        .authentication-body{
            margin-top: 20px;
            .btn{
                justify-content: center;
                margin-top: 15px;
                margin-bottom: 40px;
                width: 100%;
            }
        }
    }
}
</style>