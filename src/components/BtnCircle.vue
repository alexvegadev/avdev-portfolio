<template>
  <div class="roundedBtn" @click="def">
    <div v-if="!clickable" :class="animated ?  'btnCircle btnAnim':'btnCircle'" :style="color ? 'background-color:'+color+' !important;':''">
        <i :class="icon"></i>
    </div>
    <div v-else>
        <a>
            <div :class="animated ?  'btnCircle btnAnim':'btnCircle'" :style="color ? 'background-color:'+color+' !important;':''">
                <i :class="icon"></i>
            </div>
        </a>
    </div>
  </div>
</template>

<script>
export default {
    name: 'BtnCircle',
    props: {
        'icon': String,
        'color': String,
        'clickable': Boolean,
        'animated': Boolean,
        'onClick': Function
    },
    methods:{
      def(){
        if(this.onClick){
          this.onClick();
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    .btnAnim:hover{
        transform: scale(1.2, 1.2) !important;
    }
    .btnCircle{
    & i{
      margin-right: -2px;
      margin-top: 11px;
    }
    width: 48px;
    height: 48px;
    background-color: #0082CA;
    font-size: 24px;
    border-radius: 50%;
  }
</style>