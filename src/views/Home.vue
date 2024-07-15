<template>
  <Particlesa />
  <section>
    <h1>CARA</h1>
    <h2>Work Portfolio</h2>
    <p>Frontend Engineer</p>
    <a href="#about" @click.prevent="scrollToSection('about')">
			<div class="scrollDown">
				<div class="scrollDot"></div>
			</div>
    </a>
  </section>
  <section id="about" ref="about">
    <div class="section__content">
      <h2>ABOUT ME</h2>
      <span>Hi! I'm Cara.</span>
      <span>I am a cross-disciplinary front-end developer transitioning from another field, with a passion for learning and excellent communication skills.</span>
      <span>I value teamwork and am capable of clearly expressing ideas and actively listening to others, which fosters efficient collaboration and creative problem-solving.</span>
      <span>I possess strong adaptability, enabling me to quickly grasp and tackle new technological challenges while maintaining professionalism and enthusiasm in dynamic environments. </span>
      <a href="https://github.com/carali527/cara-resume/tree/master/src/assets/resume" target="_blank">check resume</a>
    </div>
  </section>
  <section id="skill" ref="skill">
    <div class="section__content">
      <h2>SKILL</h2>
      <div class="skills-grid">
        <div class="skills-category">
          <h3>Web Technologies</h3>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>SCSS/SASS (CSS preprocessor)</li>
            <li>RWD (Responsive Web Design)</li>
          </ul>
        </div>
        <div class="skills-category">
          <h3>JavaScript Libraries and Frameworks</h3>
          <ul>
            <li>jQuery</li>
            <li>Vue.js</li>
            <li>Nuxt.js</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section id="works" ref="works">
    <div class="section__content">
      <h2>WORKS</h2>
      <div class="timeline">
        <div class="timeline-item left">
          <div class="timeline-date">Dec 2023 - Jan 2024</div>
          <div class="timeline-content">
            <h3>天下雜誌 - 康健書籍網 書籍介紹頁面改版</h3>
            <p><strong>【獨立處理】</strong></p>
            <p>根據數據分析處理大量流量的康健書籍網書籍介紹頁面改版，處理UI重構、新增功能和gtm標記。</p>
            <p>使用技術：Vue, Nuxt.js, SASS/SCSS</p>
            <a href="https://www.commonhealth.com.tw/book/861">前往網址</a>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date">Oct 2023 - Nov 2023</div>
          <div class="timeline-content">
            <h3>天下雜誌 - 康健書籍網 特色頻道</h3>
            <p><strong>【團隊協作】</strong></p>
            <p>以html切版方式與設計師進行圖像搭作。</p>
            <p>使用技術：HTML, SASS/SCSS, JavaScript</p>
            <a href="https://www.commonhealth.com.tw/diet">前往網址</a>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date">Jan 2023 - Mar 2023</div>
          <div class="timeline-content">
            <h3>YOTTA 課程介紹頁面</h3>
            <p><strong>【團隊協作】</strong></p>
            <p>使用以 jquery 衍生出的 framework進行頁面改版，並添加新功能於該頁面，以更佳的 UI 吸引使用者購買該產品。</p>
            <p>使用技術：jquery 衍生出的 framework、SASS/SCSS</p>
            <a href="https://www.yottau.com.tw/course/intro/1364#intro">前往網址</a>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date">Jun 2022 - Nov 2022</div>
          <div class="timeline-content">
            <h3>YOTTA 課程播放頁面</h3>
            <p><strong>【團隊協作】</strong></p>
            <p>以原先的 jquery 衍生出的 framework來進行頁面改版，不只是更新 UI/UX 也新增功能給使用者更好的使用體驗。</p>
            <p>（建議購買免費課程來查看課程播放頁面）</p>
            <p>使用技術：jquery 衍生出的 framework、SASS/SCSS</p>
            <a href="https://www.yottau.com.tw/explore?type=all&subType=all&order=latest&courseType=free&groupID=0&page=1&exploreKey=620dac6b8731d0a4e6ca4d1dea4601e4">前往網址</a>
          </div>
        </div>
        <div class="timeline-item left">
          <div class="timeline-date">Sep 2022</div>
          <div class="timeline-content">
            <h3>YOTTA B2B 課程介紹頁面</h3>
            <p><strong>【獨立處理】</strong></p>
            <p>以原先的 jquery 衍生出的 framework來進行此頁面改版。</p>
            <p>(需有帳號才能查看)</p>
            <p>使用技術：jquery 衍生出的 framework、SASS/SCSS</p>
            <a href="https://business.yottau.com.tw/">前往網址</a>
          </div>
        </div>
        <div class="timeline-item right">
          <div class="timeline-date">Oct 2021 - Apr 2022</div>
          <div class="timeline-content">
            <h3>YOTTA 購物車頁面</h3>
            <p><strong>【團隊協作】</strong></p>
            <p>最初採用VUE 2進行團體開發，改版購物車頁面的整體視覺與UI/UX，更易懂且美觀的操作讓使用者可以擁有最佳的購買體驗。</p>
            <p>主要在開發完後新增金流選項時，自主去學習Vue3的Composition API以及TypeScript，在實作時去逐步更新Vue的版本以及技術。</p>
            <p>使用技術：VUE2、Vuex、Tailwind CSS、VUE3、TypeScript、vite</p>
            <a href="https://www.yottau.com.tw/cart-v3/step1">前往網址</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" ref="contact">
    <div class="section__content">
      <h2>CONTACT ME</h2>
      <ul class="section__content-info">
        <div class="section__content-img">
          <img :src="pic" alt="">
        </div>
        <li><i class="fas fa-envelope"></i> staywith0109@gmail.com</li>
        <li><i class="fas fa-globe"></i> <a href="https://github.com/carali527" target="_blank">https://github.com/carali527</a></li>
        <li><i class="fas fa-map-marker-alt"></i> Taipei, Taiwan</li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Particlesa from '../components/Particles.vue';
import pic from '../assets/headshot.JPG';

const about = ref(null);
const skill = ref(null);
const works = ref(null);
const contact = ref(null);

const sections = { about, skill, works, contact };

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active');
    }
  });
};

const scrollToSection = (sectionId) => {
  if (sectionId === 'about' && about.value) {
    about.value.scrollIntoView({ behavior: 'smooth' });
  }
};

let observer;

onMounted(() => {
  observer = new IntersectionObserver(observerCallback, {
    threshold: 0.1,
  });

  Object.values(sections).forEach(section => {
    if (section.value) {
      observer.observe(section.value);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});
</script>

<style lang="scss" scoped>
section {
  max-width: 1280px;
  min-height: 100vh;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;

  h2 {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.6;
    text-align: justify;
    max-width: 800px;
  }

  &:first-of-type {

    a {
      position: relative;
    }
  }
}

#about .section__content {
  max-width: 800px;
  background: #f5f5f5;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  a {
    background-color: #ffffff;
    width: 100px;
    margin-top: 20px;
    border-radius: 8px;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    text-wrap: nowrap;
  }
}

#skill .section__content {
  max-width: 800px;
  box-shadow: none;
}

.section__content {
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  opacity: 0;
  transform: translate3d(0, 100px, 0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;

  h2 {
    margin-bottom: 20px;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
  }
  .skills-category {
    background: #ffffff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h3 {
      font-size: 1.2rem;
      margin-bottom: 10px;
      color: #555;
    }

    ul {
      list-style-type: disc;
      padding-left: 20px;
      text-align: left;

      li {
        font-size: 1rem;
        margin-bottom: 5px;
        color: #777;
      }
    }
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 0;

    &::after {
      content: '';
      position: absolute;
      width: 2px;
      background-color: #ddd;
      top: 0;
      bottom: 0;
      left: 50%;
      margin-left: -3px;
    }
  }

  .timeline-item {
    padding: 0 40px;
    position: relative;
    background-color: inherit;
    width: 50%;

    &::after {
      content: '';
      position: absolute;
      width: 12px;
      height: 12px;
      right: -8px;
      background-color: #ffffff;
      border: 4px solid #ddd;
      top: 15px;
      border-radius: 50%;
      z-index: 1;
    }

    &.left {
      left: -80px;
    }

    &.right {
      left: 50%;

      .timeline-date {
        text-align: left;
      }

      &::after {
        left: -12px;
      }
    }
  }

  .timeline-date {
    padding: 10px 0;
    text-align: right;
    font-size: 1rem;
    color: #777;
  }
  
  .timeline-content {
    padding: 20px;
    background: #ffffff;
    position: relative;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    h3 {
      margin-top: 0;
      font-size: 1.2rem;
    }

    p {
      margin: 5px 0;
      font-size: 1rem;
    }

    a {
      color: rgba(0, 0, 0, 0.5);
      text-decoration: underline;

      &:hover {
        color: rgba(0, 0, 0, 0.8);
      }
    }
  }

  span {
    margin-bottom: 10px;
  }

  .section__content-info {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;
      font-size: 1.2rem;
      margin-bottom: 10px;
      i {
        margin-right: 10px;
      }
      a {
        text-decoration: underline;
      }
    }

    .section__content-img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
      overflow: hidden;
      margin: auto;
      img {
        width: 100%;
      }
    }
  }
}

section.active .section__content {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

section img {
  opacity: 0;
  transform: translate3d(0, 100px, 0);
  transition: opacity 1s ease-in-out, transform 1s ease-in-out;
}

section.active img {
  opacity: 1;
  transform: translate3d(0, 0, 0);
}

.scrollDown {
  position: absolute;
  top: 10px;
  left: 0;
  transform: translateX(-50%);
  width: 22px;
  height: 36px;
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;
  
  &::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 50%;
    width: 8px;
    height: 8px;
    background-color: black;
    border-radius: 50%;
    transform: translateX(-50%);
    animation: scrollAnimation 2s infinite;
  }
}

@keyframes scrollAnimation {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
}

@media (max-width: 768px) {
  .section__content {
    .timeline-content {
      background: transparent;
      box-shadow: none;
    }

    .skills-grid {
      grid-template-columns: 1fr;
      padding: 0 20px;
    }

    .timeline::after {
      left: 12px;
    }

    .timeline-date {
      text-align: left;
    }

    .timeline-item {
      width: 100%;
      padding-left: 30px;

      &.left,
      &.right {
        left: 0%;
        
        &::after {
          left: 0;
        }
      }
    }
  }
}

@media (max-width: 567px) {
  .section__content {
    .timeline-content {
      padding-left: 0px;
    }
  }
}
</style>