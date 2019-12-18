<template>
    <!-- 房源图片上传 -->
    <div class="div_bg">
        <div class="div_bgfff"></div>
        <div class="div_bgfff2" style="width:20%"></div>
        <div class="div_body" style="padding-top:74px;">
            <div>
                <div class="font-title3" style="margin-bottom:10px;">
                    <p>请不要上传带水印的照片。</p>
                </div>
                <div class="div_title font_title1">
                    <p>为房源添加照片</p>
                </div>
                <div class="font-title3">
                    <p>照片帮助房客想像入住您的房源是什么样的体验。 您可以先从一个房源开始，然后在发布后添加更多。</p>
                </div>
                <div class="div_body1"></div>
                <div class="div_body2"></div>
                <div class="div_body3">
                    <el-upload class="upload-demo" drag action="http://127.0.0.1:3000/add/" multiple>
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text p_font1">上传图片或者把它们拖进框内</div>
                        <div class="el-upload__tip" slot="tip"></div>
                    </el-upload>
                </div>
                <!-- 底部固定悬浮 -->
                <div class="div_footer1">
                    <div>
                        <div class="div_margin" style="width:100%;">
                            <div></div>
                            <div>
                                <div class="div_return_submit">
                                    <div class="div_div_svg_return1">
                                        <svg viewBox="0 0 18 18" role="presentation" aria-hidden="true"
                                            focusable="false"
                                            style="height: 2.8em; width: 1em; display: block; fill: currentcolor;">
                                            <path
                                                d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z"
                                                fill-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                    <div class="return_btn" @click="return1">返回</div>
                                    <div class="next_btn" @click="submit">下一个</div>
                                </div>
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
        data() {
            return {

            }
        },

        methods: {
            submit() {
                this.$emit('change', 7);
                this.$router.push("/add_become_a_host_room/description")
            },
            return1() {
                // this.$router.push("/add_become_a_host_room/location2")
                this.$router.go(-1);
            },
        }
    }
</script>
<style scoped>
    .div_body {
        width:60%;
        margin: auto;
        font-size: 16px;
    }

    .div_body>div {
        width: 100%;
        box-sizing: border-box;
        padding: 30px 30px 16px 30px;
        padding-bottom: 102px;
        background: #fff;
    }

    .font-title3 {
        font-weight: 400;
        line-height: 1.375em;
        color: rgb(72, 72, 72);
        margin-bottom: 32px;
    }

    .div_title {
        padding: 32px 0 24px;
    }

    .font_title1 {
        font-size: 24px;
        font-weight: 800;
        line-height: 1.25em;
        color: #484848;
        padding: 32px 0 10px;
    }
</style>
<style>
    .upload-demo>.el-upload {
        width: 100%;
        height: 350px;
    }

    .upload-demo>.el-upload>.el-upload-dragger {
        width: 100%;
        height: 350px;
        border-radius: 6px;
        border: 2px dashed #008489;

    }

    .el-upload-dragger .el-icon-upload {
        margin: 110px 0 16px !important;
    }

    .p_font1 {
        font-size: 19px !important;
        font-weight: bold;
        text-align: left;
        line-height: 1.43;
        color: #484848 !important;
    }
</style>