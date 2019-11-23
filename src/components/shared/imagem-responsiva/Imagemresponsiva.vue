<template>
    <img class="imagem-responsiva" :src="src" :alt="alt">
</template>
<script>
export default {

    props:['src', 'alt']

}
</script>
<style scoped>
.imagem-responsiva{
    width: 100%
}
</style>
