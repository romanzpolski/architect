<template>
    <div>
        <p>Are you looking to build new website or do you have one and want to customise/fix it ?</p>
        <div class="radio">
            <label> <input type="radio" name="optradio" v-on:click="stepRadioResolve('new website')"> I need a website</label>
        </div>
        <div class="radio">
            <label> <input type="radio" name="optradio" v-on:click="stepRadioResolve('old website')"> I have old website</label>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep', 'object'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    "invalid": false,
                    'optradio': ''
                },
                history:[],

            }
        },
        validations: {
        },
        watch: {
            $v: {
                handler: function (val) {
                    if(!val.$invalid) {
                        this.$emit('can-continue', {value: true});
                    } else {
                        this.$emit('can-continue', {value: false});
                    }
                },
                deep: true
            },
            clickedNext(val) {
                if(val === true) {
                    this.$v.form.$touch();
                }
            }
        },
        methods: {
            stepRadioResolve(choice) {
                this.$emit('can-continue', {value: true});
            },
        },
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>
