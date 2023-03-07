<template>
    <div class="container">
        <label class="heart">
            <input type="checkbox">
            <svg viewBox="0 0 532 532">
                <path transform="translate(10, 10)"
                    d="M256,96.5l-19.7-20.3C186.1,24.3,104.5,15.9,49.7,62.6c-62.8,53.6-66.1,149.8-9.9,207.9l193.5,199.8 c12.5,12.9,32.8,12.9,45.3,0l193.5-199.8c56.3-58.1,53-154.3-9.8-207.9l0,0C407.5,15.9,326,24.3,275.7,76.2L256,96.5z" />
            </svg>
            <span></span>
        </label>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background: #222;
    border-radius: 5px;
}

.heart {
    transform: scale(0.5);
    position: relative;
    cursor: pointer;

    svg {
        width: 200px;
    }

    path {
        fill: #eee;
        stroke-width: 20px;
        stroke: red;
        stroke-dasharray: 1600;
        stroke-dashoffset: 1600;
        stroke-linecap: round;
    }

    span,
    span::after {
        position: absolute;
        width: 24px;
        height: 24px;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        background: transparent;
        border-radius: 50%;
        box-shadow: 0 -160px red, 160px 0 red, 0 160px red, -160px 0 red;
        transform: scale(0);
    }

    span::after {
        content: '';
        transform: rotate(45deg), scale(0);
    }

    input[type=checkbox] {
        display: none;

        &:checked+svg {
            animation: pop 1s linear forwards;
        }

        &:checked+svg path {
            animation: draw-heart 1s linear forwards;
        }

        &:checked~span {
            animation: blink .5s ease-in-out forwards;
            animation-delay: .85s;
        }

        &:checked ~ span::after {
            animation: blink-after .5s ease-in-out forwards;
            animation-delay: .85s;
        }
    }

    @keyframes draw-heart {
        0% {
            stroke-dashoffset: 1600;
        }

        80% {
            stroke-dashoffset: 0;
            fill: #eee
        }

        100% {
            stroke-dashoffset: 0;
            fill: red;
        }
    }

    @keyframes blink {
        0% {
            transform: scale(0.5);
            opacity: .8;
        }

        50% {
            transform: scale(1);
            opacity: .8;
        }

        100% {
            transform: scale(1.1);
            opacity: 0;
        }
    }

    @keyframes blink-after {
        0% {
            transform: rotate(45deg) scale(0.5);
            opacity: .8;
        }

        50% {
            transform: rotate(45deg) scale(1);
            opacity: .8;
        }

        100% {
            transform: rotate(45deg) scale(1.1);
            opacity: 0;
        }
    }

    @keyframes pop {
        0% {
            transform: scale(1)
        }

        70% {
            transform: scale(1)
        }

        80% {
            transform: scale(1.2)
        }

        100% {
            transform: scale(1)
        }
    }
}
</style>