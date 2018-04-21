<template>
    <div>
        <full-page :options="options">
            <!--<div class="section">-->
                <!--<flat-surface-shader class="shader"-->
                                     <!--type="canvas"-->
                                     <!--:light="{-->
                                      <!--ambient: '#00020A',-->
                                      <!--diffuse: '#030023',-->
                                      <!--draw: false,-->
                                      <!--speed:0.01,-->
                                      <!--autopilot: false,-->
                                      <!--maxLimit: 1,-->
                                      <!--gravity: 1200,-->
                                      <!--dampening: 0.20,-->
                                      <!--count: 2,-->
                                      <!--xyScalar:10-->
                                      <!--}"-->
                                     <!--:mesh="{-->
                                     <!--segments: 30,-->
                                     <!--slices: 9,-->
                                     <!--width: 2,-->
                                     <!--height: 2,-->
                                     <!--speed:0.001-->
                                     <!--}">-->
                <!--</flat-surface-shader>-->
                <!--<top-section-component></top-section-component>-->
            <!--</div>-->
            <div class="section" id="form">
                <vue-particles
                        color="#fff"
                        :particleOpacity="0.3"
                        :particlesNumber="50"
                        shapeType="circle"
                        :particleSize="5"
                        linesColor="#fff"
                        :linesWidth="1"
                        :lineLinked="true"
                        :lineOpacity="0.3"
                        :linesDistance="250"
                        :moveSpeed="0.8"
                        :hoverEffect="false"
                        hoverMode="bubble"
                        :clickEffect="false"
                        clickMode="bubble"
                >
                </vue-particles>
                <bottom-section-component></bottom-section-component>
            </div>
        </full-page>
    </div>
</template>

<script>
    import FullPage from 'vue-fullpage.js'
    export default {
        components: {
            FullPage
        },
        data() {
            return {
                options: {
                    paddingTop: '0px',
                    paddingBottom: '0px',
                    fadingEffect: true,
                    navigation: true,
                    controlArrows: true,
                    scrollBar: false
                },
            }
        }
    }
</script>
<style>
    .section {
        position:relative;
    }
    #form {
        background: url("/img/bg1.jpg") no-repeat center center;
        background-size: cover;
    }
    h1 {
        text-transform: uppercase;
        font-family: 'Anton', sans-serif;
        font-size: 60px;
        color: white;
        text-shadow: 5px 5px 0px #000;
        text-align: center;
        margin: 40px 0px;
        /*font-family: 'Rubik Mono One', sans-serif;*/
    }
    h2 {
        text-transform: uppercase;
        font-family: 'Anton', sans-serif;
        font-size: 48px;
        color: white;
        text-shadow: 5px 5px 0px #000;
        text-align: center;
        margin: 60px 0px;
        /*font-family: 'Rubik Mono One', sans-serif;*/
    }
    .innerSection {
        position: absolute;
        z-index: 50;
        top: 0;
        left: 0;
        width:100%;
        height: 100%;
    }
    .containerDiv {
        background: rgba(0,0,0,0.4);
        border-radius: 10px;
        border: 1px solid rgba(255,255,255,0.2);
        padding: 30px;
        color: white;
        box-shadow: rgba(0,0,0,0.2) 0px 0px 30px inset;
    }
</style>