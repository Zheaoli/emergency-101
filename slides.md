---
# 主题配置
theme: seriph
themeConfig:
  primary: '#FF4444'
# 背景图片 - 可以替换为急救相关的图片
background: https://source.unsplash.com/collection/1319040/1920x1080
# 页面布局
class: 'text-center'
colorSchema: 'light'
# 代码高亮
highlighter: shiki
# 显示行号
lineNumbers: false
# 幻灯片信息
info: |
  ## 急救 101
  面向普通大众的急救知识科普演示

  学会这些，关键时刻能救命！
# 持久化绘图
drawings:
  persist: false
# 页面过渡效果
transition: slide-left
# 使用 UnoCSS
css: unocss
# 演示时长
duration: 25min
---

# 急救 101 🚑

## 那些关键时刻能救命的知识

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer hover:bg-white hover:bg-opacity-10">
    开始学习 <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <span class="text-sm opacity-50">按空格键继续</span>
</div>

<style>
h1 {
  background-color: #FF4444;
  background-image: linear-gradient(45deg, #FF4444 10%, #DC143C 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}

/* 响应式设计 - 确保内容在不同分辨率下自适应 */
@media (max-width: 640px) {
  .slidev-page {
    font-size: 0.875rem;
  }
  
  h1 {
    font-size: 1.75rem !important;
  }
  
  h2 {
    font-size: 1.5rem !important;
  }
  
  h3 {
    font-size: 1.25rem !important;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .slidev-page {
    font-size: 1rem;
  }
  
  h1 {
    font-size: 2.25rem !important;
  }
  
  h2 {
    font-size: 1.875rem !important;
  }
  
  h3 {
    font-size: 1.5rem !important;
  }
}

/* 确保 grid 布局在小屏幕上响应式 */
.grid {
  display: grid;
}

@media (max-width: 768px) {
  .grid.grid-cols-3 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
  
  .grid.grid-cols-2 {
    grid-template-columns: repeat(1, minmax(0, 1fr)) !important;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .grid.grid-cols-3 {
    grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
  }
}
</style>

---
src: ./pages/01-intro.md
---

---
src: ./pages/02-basic-principles.md
---

---
src: ./pages/03-scene-handling.md
---

---
src: ./pages/04-trauma.md
---

---
src: ./pages/05-bleeding.md
---

---
src: ./pages/06-amputation.md
---

---
src: ./pages/07-heimlich.md
---

---
src: ./pages/08-burns.md
---

---
transition: fade-out
layout: center
class: text-center
---

# 谢谢观看！ 🎉

<div class="text-2xl mt-8 mb-4">
  <v-clicks>

  - 💡 记住：急救知识人人都该懂
  - 🚑 但请记得：第一时间拨打 120
  - 📚 建议参加正规急救培训获取实操经验

  </v-clicks>
</div>

<div class="mt-12">
  <h2>Q & A</h2>
  <p class="text-sm opacity-75">有任何问题欢迎提问</p>
</div>

<style>
h1 {
  background-color: #4EC5D4;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>
