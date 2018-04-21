<template>
    <section id="wpStepper">
        <stepper :steps="demoSteps" @completed-step="completeStep"
                            @active-step="isStepActive" @stepper-finished="alert"
        >
        </stepper>
    </section>
</template>

<script>
    //import HorizontalStepper from 'vue-stepper';
    import Stepper from './StepperComponent.vue';
    // This components will have the content for each stepper step.
    import StepOne from './WpStepOne.vue';
    import StepTwo from './WpStepTwo.vue';

    export default {
        components: {
            Stepper
        },
        data(){
            return {
                demoSteps: [
                    {
                        icon: 'mail',
                        component: StepOne,
                        completed: false

                    },
                    {
                        icon: 'report_problem',
                        component: StepTwo,
                        completed: false
                    }
                ]
            }
        },
        methods: {
            // Executed when @completed-step event is triggered
            completeStep(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        step.completed = true;
                    }
                })
            },
            // Executed when @active-step event is triggered
            isStepActive(payload) {
                this.demoSteps.forEach((step) => {
                    if (step.name === payload.name) {
                        if(step.completed === true) {
                            step.completed = false;
                        }
                    }
                })
            },
            // Executed when @stepper-finished event is triggered
            alert(payload) {
                alert('end')
            }
        }
    }
</script>
<style lang="scss">

</style>