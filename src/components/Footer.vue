<template>
  <div class="footer">
      <mdb-footer color="indigo" class="font-small pt-1 mt-2">
        <mdb-container style="margin-bottom: -55px;" class="text-center">
          <mdb-row>
            <mdb-col sm="12">
              <h5 class="title">Nice to meet you 👋🏻</h5>
              <p>I will let you all my contact information below 😄</p>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <hr class="my-5" />
        <mdb-container class="text-center mtReduce">
          <mdb-row>
            <mdb-col sm="12">
              <h5 class="title">Social Networks for contact:</h5>
              <div style="display: flex; flex-direction: row; justify-content:center;" class="pb-2">
                  <BtnCircle class="mr-2" icon="fab fa-twitter" color="#00BCD4" :clickable="true" :animated="true" :onClick="() => clicked('tw')"/>
                  <BtnCircle class="mr-2" icon="fab fa-facebook" color="#1976D2" :clickable="true" :animated="true" :onClick="() => clicked('fb')"/>
                  <BtnCircle class="mr-2" icon="fab fa-linkedin-in" color="#0082CA" :clickable="true" :animated="true" :onClick="() => clicked('in')" />
                  <BtnCircle icon="fab fa-github" color="#2c3e50" :clickable="true" :animated="true" :onClick="() => clicked('git')" />
              </div>
            </mdb-col>
          </mdb-row>
        </mdb-container>
        <div class="footer-copyright text-center py-3">
          <mdb-container fluid>
            &copy; {{ new Date().getFullYear() }} Copyright: <a class="resizeEffect">Alex Gabriel Peiretti Vega.</a>
          </mdb-container>
        </div>
      </mdb-footer>
  </div>
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
import BtnCircle from './BtnCircle'

export default {
    name: 'Footer',
    components:{
        mdbFooter, 
        mdbContainer, 
        mdbRow, 
        mdbCol,
        BtnCircle
    },
    methods: {
      clicked(name){
        let url = '';
        switch(name){
          case 'git':
            url = 'https://github.com/alexvegadev';
            break;
          case 'fb':
            url = 'https://www.facebook.com/alex.veegaa';
            break;
          case 'in':
            url = 'https://www.linkedin.com/in/alex-gabriel-peiretti-vega-73312a191/';
            break;
          case 'tw':
            url = 'https://twitter.com/alexvegadev';
            break;
        }
        window.open(url, '_blank');
      }
    }

}
</script>

<style lang="scss" scoped>
  .resizeEffect:hover {
    font-size: 2vh !important;
  }
  .my-5 {
    background: #24292E;
    margin-bottom: 3rem !important;
  }
  .btn-av {
    text-align: center !important;
    width: 56px;
    height: 46px;
    border-radius: 50% !important;
  }
  .btn-av:hover {
    transform: scale(1.3, 1.3);
  }
  .lg-blue{
    background-color: #0082CA !important;
  }
  .git-color{
    background-color: #24292E !important;
  }
  .mtReduce{
    margin-top: -35px;
  }
</style>