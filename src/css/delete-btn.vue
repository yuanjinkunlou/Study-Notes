<template>
    <div class="container">
        <button @mousedown="handleMousedown">{{ text }}</button>
    </div>
</template>

<script setup lang="ts">
import { onUnmounted, ref } from 'vue'

const text = ref('Delete');
const TIMEOUT = 1000;
let timer: number;
let isHoldingDeleteButton: boolean = false;

function handleMousedown() {
    isHoldingDeleteButton = true;
    text.value = 'Delete';
    timer = setTimeout(() => {
        // do something delete

        alert('deleted!')

        text.value = 'Deleted!';
    }, TIMEOUT);
}

function handleMouseup() {
    if (!isHoldingDeleteButton) return;

    if (timer) {
        clearTimeout(timer);
    }
}

window.addEventListener('mouseup', handleMouseup);

onUnmounted(() => {
    window.removeEventListener('mouseup', handleMouseup);
})

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: inline-block;
    font-size: 30px;
    background-color: #fecaca;
    color: #dc2626;
    border: 2px solid #fca5a5;
    border-radius: 5px;
    padding: 10px 20px;

    &:hover {
        border-color: #ef4444;
        cursor: pointer;
    }

    &:active {
        background-image: linear-gradient(to right, #fca5a5 0%, #fca5a5 50%, #fecaca 50%, #fecaca 100%);
        background-size: 200% 100%;
        /* 100% -> 0% */
        background-position: 100%;
        animation: 1s confirmation ease-out forwards;
    }

    @keyframes confirmation {
        from {
            background-position: 100%;
        }

        to {
            background-position: 0%;
        }
    }
}
</style>