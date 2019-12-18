<template>
    <div class="div_bg">
        <div class="div_body" >
            <div>
                <div class="div_body1"></div>
            </div>

        
        </div>
    </div>
</template>
<script>
export default {
     data(){return{
        
    }},
    props:{
        Airbnb_House:{default:""}
    }
}
</script>
<style scoped>
.div_bg{
    background: #f8f8f8;
}
.div_body{
    width:912px;
    margin: auto;
    font-size: 16px;
    padding-top:74px;
}
.div_body>div{
    width:60%;
    box-sizing: border-box;
    padding: 30px 30px 16px 30px;
    padding-bottom: 102px;
    background: #fff;
}
</style>