<template>
  <div class="bar">
    <mdb-navbar position="top" color="indigo" dark scrolling>
      <mdb-navbar-brand href="#">Portafolio</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav>
          <mdb-nav-item href="#" waves-fixed @click="navTo('')">Home</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed>About me</mdb-nav-item>
          <mdb-nav-item href="#" waves-fixed @click="navTo('projects')">Projects</mdb-nav-item>
          <mdb-dropdown tag="li" class="nav-item">
            <mdb-dropdown-toggle tag="a" navLink color="indigo" slot="toggle" waves-fixed>Language</mdb-dropdown-toggle>
            <mdb-dropdown-menu>
              <mdb-dropdown-item>English</mdb-dropdown-item>
              <mdb-dropdown-item>Spanish</mdb-dropdown-item>
            </mdb-dropdown-menu>
          </mdb-dropdown>
        </mdb-navbar-nav>
      </mdb-navbar-toggler>
    </mdb-navbar>
    <section class="bgImg">
      <div class="info">
        <h2 class="title">Alex Gabriel Peiretti Vega</h2>
        <h2 class="toDown">Software Developer Portfolio</h2>
      </div>
    </section>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
  mdbNavbarBrand,
  mdbDropdown,
  mdbDropdownItem,
  mdbDropdownMenu,
  mdbDropdownToggle,
} from "mdbvue";
import router from '../router'

export default {
  name: "Bar",
  components: {
    mdbNavbar,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    mdbNavbarBrand,
    mdbDropdown,
    mdbDropdownItem,
    mdbDropdownMenu,
    mdbDropdownToggle,
  },
  methods: {
    navTo(nav){
      router.push({name: nav}).catch(reason =>{
        console.log(reason);
        })
    }
  }
};
</script>

<style lang="scss" scoped>
$text-color: #ffffff;
$top-space: -95px;
$top-space-min: -92px;
$padding-text: 10px !important;
@mixin moveTo($x, $y) {
  transform: translate($x, $y);
}
@mixin moveBelow() {
  @include moveTo(0, 80vh);
}

section.bgImg {
  position: relative;
  top: $top-space;
  left: 0;
  right: 0;
  bottom: 0px;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("../assets/banner.png");
  background-repeat: no-repeat;
  background-size: cover;

  div.info {
    h2 {
      color: $text-color;
    }
  }
}

h2 {
  &.toDown {
    @include moveBelow();
  }
}

/* RESPONSIVE */
@media screen and (max-width: 1000px) {
  div.info {
    h2.title {
      padding-top: $padding-text;
    }
  }
}
@media screen and (min-width: 985px) {
  div.info {
    h2.title {
      padding-top: $padding-text;
    }
  }
}

@media screen and (max-width: 500px) {
  section.cardResize {
    position: relative;
    top: $top-space-min;
    left: 0px !important;
  }
}
</style>