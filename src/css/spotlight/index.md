<script setup>
import Spotlight from './spotlight.vue'
</script>

# Spotlight

## 最终效果
<Spotlight/>

## 代码

### HTML
```html
<span data-spotlight="Spotlight!">Spotlight</span>
```

### CSS
```scss
span {
    position: relative;
    white-space: nowrap;
}

span::after {
    content: attr(data-spotlight);
    position: absolute;
    left: 0;
    top: 0;
    color: transparent;
    background-image: url('https://images.unsplash.com/photo-1558470598-a5dda9640f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80');
    background-clip: text;
    -webkit-background-clip: text;
    background-position: center center;
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
```

## 参考
[clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)

