<template>
    <div class="container">
        Pay<input class='checkbox' type="checkbox" name='Pay' />

        <svg width="400" height="400">
            <circle class="circle" fill="none" stroke="#68E534" stroke-width="20" cx="200" cy="200" r="190"
                stroke-linecap="round" transform="rotate(-90 200 200)"></circle>
            <polyline class="tick" fill="none" stroke="#68E534" stroke-width="24" points="88,214 173,284 304,138"
                stroke-linecap="round" stroke-linejoin="round"></polyline>
        </svg>

        <div class='title'>Payment Success</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.title {
    font-size: 36px;
    font-weight: bolder;
    color: #333;
    opacity: 0;
    margin-top: 20px;
}

.circle {
    stroke-dasharray: 1194;
    stroke-dashoffset: 1194; // 1194 ~ 2388 逆时针 
}

.tick {
    stroke-dasharray: 350;
    stroke-dashoffset: 350; // 350 ~ 0 
}

.checkbox:checked {
    &+svg .circle {
        animation: circle 1s ease-in-out forwards;
    }

    &+svg .tick {
        animation: tick .8s ease-in-out forwards;
        animation-delay: .95s;
    }

    &~.title {
        animation: title .6s ease-in-out forwards;
        animation-delay: 1.2s;
    }
}

@keyframes circle {
    from {
        stroke-dashoffset: 1194;
    }

    to {
        stroke-dashoffset: 2388;
    }
}

@keyframes tick {
    from {
        stroke-dashoffset: 350;
    }

    to {
        stroke-dashoffset: 0;
    }
}

@keyframes title {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>