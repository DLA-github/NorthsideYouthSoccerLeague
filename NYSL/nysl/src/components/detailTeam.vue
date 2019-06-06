<template>
  <div>DetailTeam for {{this.id}}</div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      data: {}
    };
  }
};
</script>

<style>
</style>
