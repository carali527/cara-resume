<template>
  <Header />
  <main>
    <router-view />
  </main>
  <Footer />
  <button v-if="showBackToTop" class="back-to-top" @click="scrollToTop">
    <i class="fas fa-chevron-up"></i>
  </button>
  <div 
    v-for="i in 10" 
    :key="i" 
    class="custom-cursor" 
    :style="getCursorStyle(i)"
  ></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

const isMobile = ref(false);
const isNavItemHidden = ref(false);
const showBackToTop = ref(false);
const cursorPosition = ref({ x: -100, y: -100 });
let lastScrollY = 0;

const updateIsMobile = () => {
  isMobile.value = window.innerWidth <= 768;
};

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  showBackToTop.value = currentScrollY > 200;
  if (!isMobile.value && currentScrollY > lastScrollY && currentScrollY > 100) {
    isNavItemHidden.value = true;
  } else {
    isNavItemHidden.value = false;
  }
  lastScrollY = currentScrollY;
};

const handleMouseMove = (e) => {
  cursorPosition.value = { x: e.clientX, y: e.clientY };
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const getCursorStyle = (index) => {
  const { x, y } = cursorPosition.value;
  const scale = 1 - index * 0.1;
  const opacity = 1 - index * 0.1;
  return {
    left: `${x - 5}px`,
    top: `${y - 5}px`,
    transform: `translate(-50%, -50%) scale(${scale})`,
    opacity: opacity,
    transitionDelay: `${index}ms`
  };
};

onMounted(() => {
  updateIsMobile();
  window.addEventListener('resize', updateIsMobile);
  window.addEventListener('scroll', handleScroll);
  document.addEventListener('mousemove', handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener('resize', updateIsMobile);
  window.removeEventListener('scroll', handleScroll);
  document.removeEventListener('mousemove', handleMouseMove);
});
</script>

<style lang="scss" scoped>
main {
  padding-top: 120px;
}

.login-popup {
  overflow: hidden;
}

.back-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #1d1d1d;
  color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 0.875rem;
  transition: opacity 0.3s;
  opacity: 0.5;
  padding: 12px;
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
}

.custom-cursor {
  position: fixed;
  width: 20px;
  height: 20px;
  background-color: rgba(128, 128, 128, 0.5); // 改為灰色半透明
  border-radius: 50%;
  pointer-events: none;
  z-index: 10000;
  transition: all 0.1s ease;
  will-change: transform;
}

@media (max-width: 768px) {
  main {
    padding-top: 70px;
  }
  
  .custom-cursor {
    display: none;
  }
}
</style>