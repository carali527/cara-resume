<template>
    <footer>
        <span>Copyright © Cara All rights reserved.</span>
    </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
footer {
    max-width: 1280px;
    height: 50px;
    text-align: right;
    text-wrap: nowrap;
    span {
        margin-right: 60px;
    }
}
@media (max-width: 567px) {
    footer {
        span {
            margin-right: 10px;
        }
    }
}
</style>