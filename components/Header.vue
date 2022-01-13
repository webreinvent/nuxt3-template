<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="/">
        <!-- <img src="/images/logo.svg" width="112" height="28"> -->
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
            Products
          </a>

          <div class="navbar-dropdown">

            <a class="navbar-item">
              VaahCMS
            </a>

            <a class="navbar-item">
              VaahCLI
            </a>

          </div>
        </div>

        <a href="https://webreinvent.com/contact-us?utm_source=vaah.dev&utm_medium=website&utm_campaign=contact-us"
           target="_blank"
           class="navbar-item">
          Contact Us
        </a>


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
