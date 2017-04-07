<template>
    <div>
        <transition :name="transitionName">
            <keep-alive>
                <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
        </transition>
        <transition :name="transitionName">
            <router-view v-if="!$route.meta.keepAlive" />
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
</style>
