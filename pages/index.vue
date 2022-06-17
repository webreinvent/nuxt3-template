<script >

import { toRefs, reactive, defineComponent } from "vue";

/*
const { data } = await useFetch('https://reqres.in/api/users?page=2');

console.log('--->', data);
*/


export default defineComponent({
  setup: () => {
    const state = reactive({
      counter: 0,
    });

    const increaseCount = () => {
      state.counter++;
    };


/*
    const root = useRoot()

*/





    return { ...toRefs(state), increaseCount };
  },
});


</script>
<template>
  <div class="container">



    <div class="columns is-multiline">

      <div class="column is-12">

        <h1 class="title is-3">Bulma</h1>

        <button class="button is-info">Info</button>
        <button class="button is-success">Success</button>
        <button class="button is-warning">Warning</button>
        <button class="button is-danger">Danger</button>

        <hr/>

        <h1 class="title is-3">Oruga</h1>

        <o-button @click="clickedMe()">Click Me</o-button>

        <o-button variant="primary">Primary</o-button>
        <o-button variant="success">Success</o-button>
        <o-button variant="danger">Danger</o-button>
        <o-button variant="warning">Warning</o-button>
        <o-button variant="info">Info</o-button>


      </div>


      <div class="column is-12">

        <o-button @click="increaseCount">Counter</o-button>

        {{counter}}

        <pre>{{root}}</pre>



      </div>


      <div class="column is-12">
        <pre>{{data}}</pre>
      </div>


    </div>

  </div>
</template>


