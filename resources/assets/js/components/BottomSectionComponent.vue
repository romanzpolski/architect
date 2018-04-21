<template>
    <div class="innerSection">
        <div class="container">
            <div class="row justify-content-center">
                <h2>Are You Ready To Join Forces ?</h2>
                <div class="col-md-8">
                    <div class="containerDiv">
                        <ul class="nav nav-pills nav-justified">
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#menu1">WordPress</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#menu2">Magento</a></li>
                            <li class="nav-item"><a class="nav-link" data-toggle="tab" href="#menu3">Custom Job</a></li>
                        </ul>
                        <div class="divider"></div>

                        <div class="tab-content">
                            <div id="menu0" class="tab-pane active container">
                                Please choose platform
                            </div>
                            <div id="menu1" class="tab-pane container">
                                <wp-form-component></wp-form-component>
                            </div>
                            <div id="menu2" class="tab-pane container">
                                <p>Magento form</p>
                            </div>
                            <div id="menu3" class="tab-pane container">
                                <p>Custom job form</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
        }
    }
</script>

<style>
    .nav-pills a.nav-link {
        color: white;
        font-size: 1.2em;
        transition: all 0.3s ease-in-out;
    }
    .nav-pills a.nav-link.active{
        background: rgba(0,0,0,0.1);
        color: white;
    }
    .divider {
        margin: 15px 0px;
        border-top: 1px solid rgba(0,0,0,0.2);
    }
    .btn-custom {
        color: white;
    }
</style>
