<template>
  <div>

    <div class="container">



      <div class="columns">

        <div class="column">

          <h1 class="title is-3">Bulma</h1>

          <button class="button is-info">Info</button>
          <button class="button is-success">Success</button>
          <button class="button is-warning">Warning</button>
          <button class="button is-danger">Danger</button>

          <hr/>

          <h1 class="title is-3">Oruga</h1>

          <o-button @click="clicked()">Click Me</o-button>

          <o-button variant="primary">Primary</o-button>
          <o-button variant="success">Success</o-button>
          <o-button variant="danger">Danger</o-button>
          <o-button variant="warning">Warning</o-button>
          <o-button variant="info">Info</o-button>


        </div>


      </div>

    </div>



  </div>
</template>
<script>


export default {
  layout: "default",
  data() {
    return {
    }
  },
  methods:{
    clicked: function ()
    {
      console.log('clicked--->');
    }
  }
};
</script>
