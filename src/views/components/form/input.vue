<template>
    <div class="input-code">
        <div class="label font-medium" :for="id">{{label}}</div>
        <div :class="['input-box',{'error-border': !isValid}]">
            <input maxlength='6'
                   :tabindex="tabindex"
                   :autofocus="autofocus"
                   :name="name"
                   :value="value"
                   @input="onOutput"/>
        </div>
        <div class="error-label" v-if="!isValid">
            <i class="icon-smile-sad"></i>
            {{errorMsg}}
        </div>
    </div>
</template>

<script>
    export default {
        name: 'InputCode',
        props: {
            label: { type: String, default: "label", required:true },
            id: { type: String },
            name: { type: String},
            tabindex: { type:Number, default:0, required:false },
            value:{ type: String, default:'', required:false },
            autofocus: { type: Boolean, default: false },
            isValid: { type: Boolean, default: true },
            errorMsg: String,
        },
        methods: {
            onOutput(event) {
                let value = event.target.value;
                this.$emit("input", value);
            }
        }
    }
</script>
