<template>
    <div class="stepper-box">
        <div class="row">


        <div class="col-sm-1" @click="backStep()">
            <!--<div v-if="currentStep.index > 0" class="stepper-button previous">-->
                <!--<i class="fa fa-chevron-left" aria-hidden="true"></i>-->
            <!--</div> -->
            <div :class="['stepper-button previous', currentStep.index === 0 ? 'deactivated' : '']">
                <i class="fa fa-chevron-left" aria-hidden="true"></i>
            </div>
        </div>
        <div class="content col-sm-10 col-sm-offset-2">
            <transition
                    :enter-active-class="enterAnimation"
                    :leave-active-class="leaveAnimation"
                    mode="out-in"
            >
                <!--If keep alive-->
                <keep-alive v-if="keepAlive">
                    <component :is="steps[currentStep.index].component" :clickedNext="nextButton[currentStep.name]"
                               @can-continue="proceed" @change-next="changeNextBtnValue" :current-step="currentStep"></component>
                </keep-alive>
                <!--If not show component and destroy it in each step change-->
                <component v-else :is="steps[currentStep.index].component" :clickedNext="nextButton[currentStep.name]"
                           @can-continue="proceed"  @change-next="changeNextBtnValue" :current-step="currentStep"></component>
            </transition>
        </div>
        <div class="col-sm-1" @click="nextStep()">
            <div :class="['animated pulse stepper-button next', !canContinue ? 'deactivated' : 'infinite']">
                <i class="fa fa-chevron-right" aria-hidden="true"></i>
            </div>
        </div>
        </div>
        <!--<div class="divider"></div>-->
        <!--<div :class="['bottom row', (currentStep.index > 0) ? '' : 'only-next']">-->
            <!--<div v-if="currentStep.index > 0" class="float-left stepper-button previous float-left" @click="backStep()">-->
                <!--<i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;-->
                <!--<span>{{ 'back' | translate(locale) }}</span>-->
            <!--</div>-->
            <!--<div :class="['stepper-button next float-right', !canContinue ? 'deactivated' : '']" @click="nextStep()">-->
                <!--<span>{{ (finalStep) ? 'finish' : 'next' | translate(locale) }}</span>-->
                <!--&nbsp; <i class="fa fa-chevron-right" aria-hidden="true"></i>-->
            <!--</div>-->
        <!--</div>-->
    </div>
</template>

<script>
    import translations from './Translations.js'
    import questions from './../questionSteps.json'

    export default {
        filters: {
            // translate: function (value, locale) {
            //     return translations[locale][value];
            // }
        },
        props: {
            locale: {
                type: String,
                default: 'en'
            },
            topButtons: {
                type: Boolean,
                default: false
            },
            steps: {
                type: Array,
                default: function () {
                    return [
                        {
                            icon: 'mail',
                            name: 'first',
                            title: 'Sample title 1',
                            subtitle: 'Subtitle sample'

                        },
                        {
                            icon: 'report_problem',
                            name: 'second',
                            title: 'Sample title 2',
                            subtitle: 'Subtitle sample'
                        }
                    ]
                }
            },
            keepAlive: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                currentStep: {},
                previousStep: {},
                nextButton: {},
                canContinue: false,
                finalStep: false,
                history: []
            }
        },

        computed: {
            enterAnimation() {
                if (this.currentStep.index < this.previousStep.index) {
                    return 'animated quick fadeInLeft'
                } else {
                    return 'animated quick fadeInRight'
                }
            },
            leaveAnimation() {
                if (this.currentStep.index > this.previousStep.index) {
                    return 'animated quick fadeOutLeft'
                } else {
                    return 'animated quick fadeOutRight'
                }
            }
        },

        methods: {
            isStepActive(index, step) {
                if (this.currentStep.index === index) {
                    return 'activated'
                } else {
                    return 'deactivated'
                }
            },

            activateStep(index, back = false) {
                if (this.steps[index]) {
                    this.previousStep = this.currentStep;
                    this.currentStep = {
                        name: this.steps[index].name,
                        index: index
                    };

                    if (index + 1 === this.steps.length) {
                        this.finalStep = true;
                    } else {
                        this.finalStep = false;
                    }

                    if (!back) {
                        this.$emit('completed-step', this.previousStep);
                    }
                }
                this.$emit('active-step', this.currentStep);
            },

            nextStep() {
                this.nextButton[this.currentStep.name] = true;
                if (this.canContinue) {
                    if (this.finalStep) {
                        this.$emit('stepper-finished', this.currentStep);
                    }
                    let currentIndex = this.currentStep.index + 1;

                    this.activateStep(currentIndex);
                }
                this.canContinue = false;
                this.$forceUpdate();
            },

            backStep() {
                this.$emit('clicking-back');
                let currentIndex = this.currentStep.index - 1;
                if (currentIndex >= 0) {
                    this.activateStep(currentIndex, true);
                }
            },

            proceed(payload) {
                this.canContinue = payload.value;
            },

            changeNextBtnValue(payload) {
                this.nextButton[this.currentStep.name] = payload.nextBtnValue;
                this.$forceUpdate();
            }
        },

        created() {
            // Initiate stepper
            this.activateStep(0);
            this.steps.forEach((step) => {
                this.nextButton[step.name] = false;
            });
        }
    }
</script>
<style lang="scss">
    .stepper-box {
        margin: 0px -15px;
        .col-sm-1 {
            position: relative;
            padding: 0px;
            text-align: center;
        }
        .content {
            padding: 0px 15px;
            overflow: hidden;
            min-height: 150px;
            text-shadow: 1px 1px 1px rgba(0,0,0,0.3);
        }
        .stepper-button {
            position: relative;
            top: 35%;
            text-align: center;
            margin: 0px;
            color: white;
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            &.previous {
                color: rgba(255,8,0,0.5);
                opacity: 0.7;
                text-shadow: 0px 0px 5px rgba(255,8,0,1);
                &.deactivated {
                    opacity: 0;
                    cursor: default;
                    text-shadow: none;
                }
            }
            &.next {
                color: rgba(4,255,0,1);
                text-shadow: 0px 0px 5px rgba(4,255,0,1);
                &.deactivated {
                    opacity: 0.3;
                    cursor: default;
                    text-shadow: 0px 0px 5px rgba(4,255,0,0.6);
                    font-size: 1.1em;
                }
            }
        }

    }
</style>