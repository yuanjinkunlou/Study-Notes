<template>
    <div class="container">
        <span data-spotlight="Spotlight!">Spotlight</span>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss" scoped>
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #222;
    border-radius: 5px;

    color: #333;
    font-size: 70px;
    font-weight: bolder;
    line-height: 1;
}

span {
    position: relative;
    white-space: nowrap;

    &::after {
        content: attr(data-spotlight);
        position: absolute;
        left: 0;
        top: 0;
        color: transparent;
        background-image: url('https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
        background-clip: text;
        background-position: center center;
        -webkit-background-clip: text;
        clip-path: ellipse(40px 40px at 50% 50%);
        animation: spotlight 4s infinite;
    }

    @keyframes spotlight {
        0% {
            clip-path: ellipse(40px 40px at 0% 50%);
        }

        50% {
            clip-path: ellipse(40px 40px at 100% 50%);
        }

        100% {
            clip-path: ellipse(40px 40px at 0% 50%);
        }
    }
}
</style>