<template>

  <div>
    <DefaultHeader />

    <div class="container">

      <hr/>
      <h1 class="title">Docs Layout v2</h1>
      <hr/>

      <slot />

    </div>

    <DefaultFooter />
  </div>


</template>
<script>
import DefaultHeader from "../components/DefaultHeader";
import DefaultFooter from "../components/DefaultFooter";
export default {
  components: {DefaultFooter, DefaultHeader}
}
</script>
