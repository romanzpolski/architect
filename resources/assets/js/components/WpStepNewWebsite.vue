<template>
    <div id="newWpWebsite">
        <p>Do you want to design and develop or only develop ?</p>
        <div class="radio">
            <label> <input type="radio" name="optradio" v-on:click="stepRadioResolve('design')">Design</label>
        </div>
        <div class="radio">
            <label> <input type="radio" name="optradio" v-on:click="stepRadioResolve('develop')">Develop</label>
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
                }
            }
        },
        validations: {
            form: {
                'website': {
                    required
                }
            }
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
