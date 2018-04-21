<template>
    <div>
        <div id="oldWpWebsite">
            <p>Do you have problems with it or you want to add new feature ?</p>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio5" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio5">Yes I have problem</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio6" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio6">I need new feature</label>
            </div>
        </div>
    </div>
</template>

<script>
    import {validationMixin} from 'vuelidate'
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        props: ['clickedNext', 'currentStep'],
        mixins: [validationMixin],
        data() {
            return {
                form: {
                    huj: ''
                }
            }
        },
        validations: {
            form: {
                huj: {
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
        mounted() {
            if(!this.$v.$invalid) {
                this.$emit('can-continue', {value: true});
            } else {
                this.$emit('can-continue', {value: false});
            }
        }
    }
</script>
