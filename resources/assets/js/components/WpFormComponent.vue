<template>
    <div>
        <div id="wpStep1">
            <p>Are you looking to build new website or do you have one and want to customise/fix it ?</p>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio1">New Project</label>
            </div>
            <div class="custom-control custom-radio">
                <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
                <label class="custom-control-label" for="customRadio2">Existing Website</label>
            </div>
        </div>
        <div id="wpStep2">
            <div id="newWpWebsite collapse">
                <p>Do you want to design and develop or only develop ?</p>
                <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio3" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label" for="customRadio3">Design and Develop</label>
                </div>
                <div class="custom-control custom-radio">
                    <input type="radio" id="customRadio4" name="customRadio" class="custom-control-input">
                    <label class="custom-control-label" for="customRadio4">I have website designed only want to develop it</label>
                </div>
            </div>
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
        <div class="divider"></div>
        <a class="btn-custom pull-xs-left" href="#">Prev</a>
        <a class="btn-custom pull-xs-right" href="#">Next</a>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        },
        data: function () {
            return {
                count: 0
            }
        },
        methods: {

        }
    }
</script>
