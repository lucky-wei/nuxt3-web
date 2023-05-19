// 滚动到顶端
export default {
    scrBehavior(to, from, savedPosition) {
        // 在按下后退或者是前进 按钮时，就会向浏览器的原生表现那样
        if (savedPosition) {
            return savedPosition
        }
        return {
            top: 0
        }

    }
}