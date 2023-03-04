<template>
    <div class="container">
        <div :class="['role', movClass]" :style="`transform: translateX(${x}px)`"></div>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue';

const enum MovClass {
    Stand = 'role--stand',
    Right = 'role--right',
    Left = 'role--left'
}

const enum KeyCode {
    Right = 'ArrowRight',
    Left = 'ArrowLeft'
}

let flag: boolean = false;
const STEP = 1.2;
let timer: number;
const x = ref(0);
const movClass = ref<MovClass>(MovClass.Stand);

function move(dir: 'left' | 'right') {
    timer = requestAnimationFrame(() => {
        if (dir === 'right') x.value += STEP;
        if (dir === 'left') x.value -= STEP;
        move(dir);
    })
}

function handleKeydown(e: KeyboardEvent) {
    const strategy = {
        [KeyCode.Right]: () => {
            movClass.value = MovClass.Right;
            move('right');
        },
        [KeyCode.Left]: () => {
            movClass.value = MovClass.Left;
            move('left');
        },
    }

    if (strategy[e.code] && !flag) {
        flag = true;
        strategy[e.code]();
    }
}

function handleKeyup(e: KeyboardEvent) {
    if (flag) {
        flag = false;
        cancelAnimationFrame(timer);
        movClass.value = MovClass.Stand;
    }
}

window.addEventListener('keydown', handleKeydown);
window.addEventListener('keyup', handleKeyup);

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    window.removeEventListener('keyup', handleKeyup);
})
</script>

<style scoped lang="scss">
.container {
    position: relative;
    height: 400px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-image: url('./bg.png');
    background-size: 100% 100%;
    overflow: hidden;
}

.role {
    position: absolute;
    bottom: 10px;
    height: 255px;
    background-image: url('./fight.png');

    &--stand {
        width: 129px;
        animation: stand 1s steps(11) infinite;
    }

    &--right {
        width: 150px;
        animation: right 1s steps(11) infinite;
    }

    &--left {
        width: 138px;
        background-position: 0 -514px;
        animation: left 1s steps(10) infinite;
    }
}

@keyframes stand {
    from {
        background-position: 0 22px;
    }

    to {
        background-position: -1408px 22px;
    }
}

@keyframes right {
    from {
        background-position: 0 -243px;
    }

    to {
        background-position: -1610px -243px;
    }
}

@keyframes left {
    from {
        background-position: 0 -508px;
    }

    to {
        background-position: -1370px -508px;
    }
}
</style>