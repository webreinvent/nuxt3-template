<template>
  <div>

    <div class="container">



      <div class="columns">

        <div class="column is-4">

          Testing ===

          {{state}}


        </div>


      </div>

    </div>



  </div>
</template>
<script>

const state = useStore();

export default {
  layout: "default",
  data() {
    return {
      state: state
    }
  },
};
</script>
