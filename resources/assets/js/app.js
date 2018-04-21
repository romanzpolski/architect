import axios from 'axios';
require('./bootstrap');

window.Vue = require('vue');

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('full-page-component', require('./components/fullpageComponent.vue'));
Vue.component('top-section-component', require('./components/TopSectionComponent.vue'));
Vue.component('bottom-section-component', require('./components/BottomSectionComponent.vue'));
Vue.component('logos-component', require('./components/LogosComponent.vue'));
Vue.component('wp-form-component', require('./components/WpStepperComponent.vue'));
Vue.component('stepper', require('./components/StepperComponent.vue'));
Vue.component('WpStepOne', require('./components/WpStepOne.vue'));
Vue.component('WpStepTwo', require('./components/WpStepTwo.vue'));

//Vue.component('fullpage', require('vue-fullpage.js'));

import FlatSurfaceShader from 'vue-flat-surface-shader'
import VueParticles from 'vue-particles'
//import FullPage from 'vue-fullpage.js'

Vue.use(FlatSurfaceShader)
Vue.use(VueParticles)
//Vue.use(FullPage)

var A = {"id":1}
var B = {"id":2,"title":"B object title"}

const app = new Vue({
    el: '#app',
    data: {
        message: 'sample message in app component'
    },
    created() {
        //FlatSurfaceShader ? alert('FlatSurfaceShader') : alert('niema FlatSurfaceShader');
        //jQuery ? alert('jQ v - '+jQuery.fn.jquery) : alert('no jq');
        //$ ? alert('$ v - '+$.fn.jquery) : alert('no $');
        //FullPage ? alert('FullPage ') : alert('no FullPage');
    },
    methods:{

    }
});

