<script setup>
import Drop from './drop.vue'
</script>

# Drop

## 最终效果
<Drop />

## 代码
### HTML
```html
<div class="container">
    <div class="drop-box">
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="drop"></div>
        <div class="collection"></div>
    </div>
    <span class="text">80%</span>
</div>
```

### CSS
```scss
.container {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.drop-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 100%;
    background: #222;
    border-radius: 5px;
    filter: contrast(30); // [!code hl]
}

.drop {
    width: 100px;
    height: 100px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    filter: blur(20px); // [!code hl]
    opacity: 0;
    animation: drop 2.5s linear infinite;

    &:nth-of-type(2) {
        animation-delay: .5s;
    }

    &:nth-of-type(3) {
        animation-delay: .7s;
    }
}

.collection {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    filter: blur(20px);
    animation: 3s collection linear infinite;
}

.text {
    position: absolute;
    color: #000;
    font-size: 30px;
    font-weight: bolder;
}

@keyframes drop {
    0% {
        transform: scale(.7) translateY(-600%);
        opacity: 0;
    }

    50% {
        transform: scale(.4) translateY(-80%);
        opacity: 1;
    }

    100% {
        transform: scale(.3) translateY(0%);
    }
}

@keyframes collection {
    0% {
        transform: scale(1) rotate(0deg);
    }

    50% {
        transform: scale(1.3) rotate(180deg);
        width: 90px;
        border-top-right-radius: 40%;
        border-bottom-left-radius: 45%;
    }

    100% {
        transform: scale(1) rotate(360deg);
    }
}
```