<template>
  <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
         <img src="https://vaah.dev/images/logo.svg" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger"
         aria-label="menu"
         aria-expanded="false"
         data-target="topNavBar">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="topNavBar" class="navbar-menu">


      <div class="navbar-end">



        <div class="navbar-item has-dropdown is-hoverable">

          <a class="navbar-link">
            Docs
          </a>

          <div class="navbar-dropdown">

            <nuxt-link to="/docs/about" class="navbar-item">
              About
            </nuxt-link>



          </div>
        </div>




<!--        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </div>-->



      </div>
    </div>
  </nav>
</template>
