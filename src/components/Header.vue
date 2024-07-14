<template>
  <header class="header">
    <nav class="header__top">
      <div class="header__navbar-left">
        <span>Cara's Resume</span>
      </div>
      <button class="hamburger-menu" @click="toggleMenu" v-if="isMobile">
        &#9776;
      </button>
      <ul class="header__navbar-right" :class="{ 'is-open': menuOpen }" v-if="!isMobile || menuOpen">
        <li><a href="#about" @click.prevent="scrollTo('about')">ABOUT</a></li>
        <li><a href="#skill" @click.prevent="scrollTo('skill')">SKILL</a></li>
        <li><a href="#works" @click.prevent="scrollTo('works')">WORKS</a></li>
        <li><a href="#contact" @click.prevent="scrollTo('contact')">CONTACT</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isMobile = ref(false);
const menuOpen = ref(false);

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
  if (!isMobile.value) {
    menuOpen.value = false;
  }
};

const scrollTo = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    if (isMobile.value) {
      menuOpen.value = false;
    }
  }
};

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
});
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  z-index: 1000;
  box-sizing: border-box;
  border-bottom: 1px solid #ddd;
}

.header__top {
  box-sizing: border-box;
  max-width: 1280px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

.header__navbar-left {
  span {
    font-weight: 700;
  }
}

.header__navbar-right {
  display: flex;
  list-style: none;
  gap: 10px;
  transition: transform 0.3s ease-in-out;
  li {
    a {
      font-weight: 600;
      cursor: pointer;
    }
  }
}

.hamburger-menu {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  display: none;
}

@media (max-width: 768px) {
  .header__top {
    justify-content: space-between;
  }
  
  .hamburger-menu {
    display: block;
    padding: 10px 15px;
    color: #213547;
  }
  
  .header__navbar-right {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: #ffffff;
    border-top: 1px solid #ddd;
    padding: 10px 0;
    &.is-open {
      display: flex;
      margin-top: 0px;
    }
    li {
      margin: 0;
      padding: 10px;
      text-align: center;
      width: 100%;
      a {
        display: block;
        width: 100%;
      }
    }
  }
}
</style>
