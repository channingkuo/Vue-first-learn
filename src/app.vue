<template>
    <div>
        <transition :name="transitionName">
            <keep-alive v-if="$route.meta.keepAlive">
                <router-view></router-view>
            </keep-alive>
            <router-view v-else></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
            transitionName: 'slide-left'
        }
    },
    // dynamically set transition based on route change
    watch: {
        '$route' (to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

<style>
.slide-left-enter-active {
    transition: transform .3s ease-in-out;
    transform-origin: left;
    position: absolute;
}
.slide-left-leave-active {
    transition: transform .3s ease-in-out;
    transform-origin: right;
    position: absolute;
    opacity: 0;
}
.slide-left-enter {
    transform: translateX(-100%);
    position: absolute;
    opacity: 0;
}
.slide-left-leave {
    transform: translateX(100%);
    position: absolute;
    opacity: 0;
}

.slide-right-enter-active {
    transition: transform .3s ease-in-out;
    transform-origin: right;
    position: absolute;
}
.slide-right-leave-active {
    transition: transform .3s ease-in-out;
    transform-origin: left;
    position: absolute;
    opacity: 0;
}
.slide-right-enter {
    transform: translateX(100%);
    position: absolute;
    opacity: 0;
}
.slide-right-leave {
    transform: translateX(-`·100%);
    position: absolute;
    opacity: 0;
}
</style>
