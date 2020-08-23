<template>
  <div class="home">
    <section class="cardResize">
        <mdb-row class="justify-content-between spaced topPadding">
          <mdb-col col="sm">
            <mdb-card v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" >
              <mdb-card-header color="indigo">About me</mdb-card-header>
              <mdb-card-body>
                <mdb-card-title v-animateOnScroll="{animation: 'fadeInRight', delay: 250, position: 12}">Who Am I? 🤔</mdb-card-title>
                <mdb-card-text v-animateOnScroll="{animation: 'fadeInRight', delay: 300, position: 12}">Hello, my name is Alex, I'm currently working as a software freelance developer and I'm looking for get new opportunities to get a job and stay learning more and more.</mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col col="sm">
            <mdb-card v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}">
              <mdb-card-header color="indigo">My history</mdb-card-header>
              <mdb-card-body>
                <mdb-card-title v-animateOnScroll="{animation: 'fadeInRight', delay: 250, position: 12}">When I started to code? 🤔</mdb-card-title>
                <mdb-card-text v-animateOnScroll="{animation: 'fadeInRight', delay: 300, position: 12}">I'm started to code when I was about 12 years old, at the beginning just was curiosity, curiosity about the next: "How can I do applications such as Google Chrome, games, etc?" then I started to search information in Google and YouTube, and I found C++ tutorials and I beginning to learn every day a little bit. From then, I've been learning a lot of concepts and programming languages.</mdb-card-text>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
        </mdb-row>
        <mdb-row class="justify-content-start spaced" style="padding-top: 5px;">
          <mdb-col col="12">
            <mdb-card >
              <mdb-card-header color="indigo"></mdb-card-header>
              <mdb-card-body>
                <mdb-card-title>My skills</mdb-card-title>
                <mdb-row>
                  <mdb-col col="sm" v-animateOnScroll="{animation: 'fadeInRight', delay: 150, position: 12}">
                    <a class="ic" style="margin-right: 8px;">Frontend:</a>
                    <a class="ic" role="button"><mdb-icon icon="js-square" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="vuejs" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="react" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="angular" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="html5" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 pl-3 pt-2 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="css3-alt" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="sass" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}" fab size="3x" class="pr-3 iconColor" /></a>
                  </mdb-col>
                </mdb-row>
                <mdb-row class="pt-1 mr-5">
                  <mdb-col col="sm" v-animateOnScroll="{animation: 'fadeInRight', delay: 200, position: 12}">
                    <a class="ic" style="margin-right: 8px;">Backend:</a>
                    <a class="ic" role="button"><mdb-icon icon="php" fab size="3x" class="pr-2 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="java" fab size="3x" class="pr-2 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="node" fab size="3x" class="mr-2 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="python" fab size="3x" class="pr-3 iconColor" /></a>
                  </mdb-col>
                </mdb-row>
                <mdb-row class="pt-3">
                  <mdb-col col="sm" v-animateOnScroll="{animation: 'fadeInRight', delay: 100, position: 10}">
                    <a class="ic" style="margin-right: 8px;">Mobile skills:</a>
                    <a class="ic" role="button"><mdb-icon icon="android" color="green" fab size="3x" class="mr-3 iconColor" />+</a>
                    <a class="ic" role="button"><mdb-icon icon="java" fab size="3x" class="pl-3 pr-3 iconColor" /></a>
                    <a class="ic" role="button"><mdb-icon icon="react" fab size="3x" class="pr-3 iconColor" /></a>
                    
                  </mdb-col>
                </mdb-row>
                <mdb-row class="pt-3">
                  <mdb-col col="sm" v-animateOnScroll="{animation: 'fadeInRight', delay: 100, position: 10}">
                    <a class="ic" style="margin-right: 8px;">Database skills:</a>
                    <a class="ic" role="button"><img src="../assets/mysql.svg" class="mr-4 iconSize"/></a>
                    <a class="ic" role="button"><img src="../assets/sql.svg" class="mr-4 iconSize"/></a>
                    <a class="ic" role="button"><img src="../assets/mongodb.svg" class="mr-3 iconSize"/></a>
                    <a class="ic" role="button"><img src="../assets/postgresql.svg" class="mt-2 iconSize"/></a>
                  </mdb-col>
                </mdb-row>
              </mdb-card-body>
              <mdb-card-footer color="indigo">
                <mdb-btn class="resizeEffect" style="background-color: #4F51B5 !important;" @click="navTo('Projects')"><mdb-icon icon="eye" class="mr-2"/>See my projects!</mdb-btn>
              </mdb-card-footer>
            </mdb-card>
          </mdb-col>
        </mdb-row>
    </section>
    
  </div>
</template>

<script>
import router from '../router'
import {
    mdbCard, 
    mdbCardBody,
    mdbCardHeader,
    mdbCardFooter,
    mdbCardTitle,
    mdbCardText,
    mdbIcon,
    mdbRow,
    mdbCol,
    animateOnScroll,
    mdbBtn
  } from "mdbvue";

export default {
  name: 'home',
  components: {
    mdbCard,
    mdbCardBody,
    mdbCardHeader,
    mdbCardFooter,
		mdbCardTitle,
		mdbCardText,
    mdbIcon,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  methods: {
    navTo(nav){
      router.push({name: nav}).catch(reason =>{
        router.push({name: 'NotFound'});
        console.log(reason)
        })
    }
  },
  directives: {
    animateOnScroll
  }
}
</script>

<style lang="scss" scoped>
$text-color: #FFFFFF;
$top-space: -95px;
$top-space-min: -92px;
$padding-text: 10px !important;
$indigo: #6610f2;
@mixin moveTo($x, $y){
  transform: translate($x, $y);
}
@mixin moveBelow(){
  @include moveTo(0, 80vh);
}
@mixin resizeEffect($x, $y){
  transform: scale($x, $y) !important;
}

  section.bgImg{
    position: relative;
    top: $top-space;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('../assets/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    
    div.info{
      h2{
        color: $text-color;
      }
    }
  }
  .spaced{
    padding-left: 5px;
  }

  .iconColor:hover{
    color: $indigo;
    @include resizeEffect(1.5, 1.5);
  }

  .resizeEffect:hover{
    @include resizeEffect(1.05, 1.05);
  }

  .iconSize{
    width: 48px;
    height: 48px;
  }

  .iconSize:hover{
    @include resizeEffect(1.5, 1.5);
  }

  /* RESPONSIVE */
  @media screen and (max-width: 1000px) {
    div.info{
      h2.title{
        padding-top: $padding-text;
      }
    }
    section.cardResize{
      position: relative;
      top: $top-space-min;
    }
  }
  @media screen and (min-width: 985px) {
    div.info{
      h2.title{
        padding-top: $padding-text;
      }
    }
    
    section.cardResize{
      position: relative;
      top: $top-space-min;
      left: 0px;
    }
  }

  @media screen and (max-width: 500px){
    section.cardResize{
      position: relative;
      top: $top-space-min;
      left: 0px !important;
    }
    div{
      &.card{
        padding-top: $padding-text;
      }
    }
  }

</style>
