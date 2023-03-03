<script setup>
import Carousel from './carousel.vue' 
</script>

# Carousel

## 最终效果
<Carousel/>

## 代码
### HTML
```html
<ul class="carousel">
    <input type="radio" id="control-1" name="control" checked>
    <input type="radio" id="control-2" name="control">
    <input type="radio" id="control-3" name="control">

    <li class="item">1</li>
    <li class="item">2</li>
    <li class="item">3</li>

    <!-- Left/Right Button-->
    <div class='navigator'>
        <label class='left' for="control-3"></label>
        <label class='right' for="control-2"></label>
    </div>

    <div class='navigator'>
        <label class='left' for="control-1"></label>
        <label class='right' for="control-3"></label>
    </div>

    <div class='navigator'>
        <label class='left' for="control-2"></label>
        <label class='right' for="control-1"></label>
    </div>

    <div class="control">
        <label for="control-1"></label>
        <label for="control-2"></label>
        <label for="control-3"></label>
    </div>
</ul>
```

### CSS
```scss
.carousel {
    position: relative;
    width: 600px;
    height: 280px;
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;

    .item {
        position: absolute;
        width: inherit;
        height: inherit;
        margin: 0;
        padding: 0;
        font-size: 80px;
        color: #fff;
        top: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform .5s ease-in-out;

        &:nth-of-type(1) {
            background: #f2e205;
            left: 0;
        }

        &:nth-of-type(2) {
            background: #f25c05;
            left: 100%;
        }

        &:nth-of-type(3) {
            background: #495f8c;
            left: 200%;
        }
    }

    input[type=radio] {
        display: none;

        &:nth-of-type(1):checked {
            &~.control label:nth-of-type(1) {
                background: #333;
            }

            &~.item {
                transform: translateX(0%);
            }

            &~.navigator:nth-of-type(1) {
                display: flex;
            }
        }

        &:nth-of-type(2):checked {
            &~.control label:nth-of-type(2) {
                background: #333;
            }

            &~.item {
                transform: translateX(-100%);
            }

            &~.navigator:nth-of-type(2) {
                display: flex;
            }
        }

        &:nth-of-type(3):checked {
            &~.control label:nth-of-type(3) {
                background: #333;
            }

            &~.item {
                transform: translateX(-200%);
            }

            &~.navigator:nth-of-type(3) {
                display: flex;
            }
        }
    }

    .control {
        position: absolute;
        width: 100%;
        bottom: 12px;
        text-align: center;

        label {
            cursor: pointer;
            display: inline-block;
            width: 10px;
            height: 10px;
            background-color: #fff;
            border-radius: 50%;
            margin: 0 3px;
            border: 2px solid #fff;
        }
    }

    .navigator {
        position: absolute;
        z-index: 999;
        top: 0;
        bottom: 0;
        height: 80px;
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        display: none;
    }

    .left,
    .right {
        cursor: pointer;
    }

    .left {
        width: 0;
        height: 0;
        border-right: 20px solid #fff;
        border-top: 20px solid transparent;
        border-left: 20px solid transparent;
        border-bottom: 20px solid transparent;
    }

    .right {
        width: 0;
        height: 0;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
        border-left: 20px solid #fff;
        border-bottom: 20px solid transparent;
    }
}
```