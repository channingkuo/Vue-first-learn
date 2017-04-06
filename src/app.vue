<template>
  <div>
    <transition name="slide-fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
    /*transition: translateX(100%) .3s ease-in-out;*/
    transition: all .3s ease-in-out;
}
.slide-fade-leave-active {
    /*transition: translateX(-100%) .3s ease-in-out;*/
    transition: all .3s ease-in-out;
}
.slide-fade-enter, .slide-fade-leave-active {
    transform: translateX(100%);
    position: absolute;
    opacity: 0;
}
</style>
