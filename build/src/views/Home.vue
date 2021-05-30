<template>
  <div class="home">
    <heading/>
   <blue-slider/>
   <light-slider/>
  </div>
</template>

<script>
// @ is an alias to /src
import blueSlider from '@/components/blueSlider.vue'
import heading from '@/components/psd-css.vue'
import lightSlider from '@/components/lightSlider.vue'

export default {
  name: 'home',
  components: {
    blueSlider,
    heading,
    lightSlider
  }
}
</script>
