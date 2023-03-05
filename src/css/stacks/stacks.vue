<template>
    <div class="container">
        <div class="stacks">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    position: relative;
    height: 300px;
    overflow: hidden;
}

.stacks {
    border-radius: 5px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    padding: 0;
    list-style: none;
    height: 300px;
    width: 650px;
    display: flex;

    &:hover li {
        transform: translateY(-300px);
    }

    & li {
        margin: 0;
        padding: 0;
        flex: 1;
        height: 100%;
        background-image: url('https://images.pexels.com/photos/2775196/pexels-photo-2775196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
        background-size: 650px 100%;
        transition: transform .5s ease-in-out;

        @for $i from 1 through 10 {
            &:nth-of-type(#{$i}) {
                background-position: calc(#{$i - 1} * -65px);
                transition-delay: calc(#{$i} * .06s);
            }
        }
    }
}
</style>