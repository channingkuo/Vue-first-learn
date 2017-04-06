<template>
  <div>
    <transition name="slide-fade">

    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive> -->
    <router-view v-if="true"/>
    </transition>
  </div>
</template>

<script>

</script>

<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(100%);
  opacity: 0;
}
</style>
