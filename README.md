# 急救 101 - Emergency 101 🚑

一个面向普通大众的急救知识科普演示稿件，使用 [Slidev](https://github.com/slidevjs/slidev) 制作。

## 📋 内容大纲

1. **介绍** - 讲者介绍与免责声明
2. **急救基本原则** - 保持冷静、确保安全、及时呼救等核心原则
3. **现场处置原则** - 现场评估与处理流程
4. **外伤处理** - 从轻微擦伤到严重外伤的处理方法
5. **止血技巧** - 四大止血法详解
6. **断肢处理** - 断肢保存与急救黄金法则
7. **海姆立克急救法** - 气道梗阻的救命绝招
8. **烧伤/烫伤处理** - "冲-脱-泡-盖-送"五字口诀

## 🎨 特色

- ✅ **诙谐风格** - 轻松幽默的表达方式，易于理解和记忆
- ✅ **图文并茂** - 支持 meme 图片、emoji 和示意图
- ✅ **动画丰富** - 使用 v-clicks、v-motion、v-mark 等动画效果
- ✅ **流程清晰** - Mermaid 流程图展示决策过程
- ✅ **分步展示** - 逐步揭示内容，保持观众注意力
- ✅ **响应式设计** - 自动适配不同分辨率屏幕

## 🚀 快速开始

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

访问 http://localhost:3030 查看演示

### 构建生产版本

```bash
pnpm build
```

构建后的文件在 `dist/` 目录

### 导出为 PDF

```bash
pnpm export
```

## 📁 项目结构

```
emergency-101/
├── slides.md                    # 主配置文件
├── pages/                       # 各章节页面
│   ├── 01-intro.md             # 介绍
│   ├── 02-basic-principles.md  # 基本原则
│   ├── 03-scene-handling.md    # 现场处置
│   ├── 04-trauma.md            # 外伤处理
│   ├── 05-bleeding.md          # 止血技巧
│   ├── 06-amputation.md        # 断肢处理
│   ├── 07-heimlich.md          # 海姆立克法
│   └── 08-burns.md             # 烧伤处理
├── styles/                      # 样式文件
│   └── global.css              # 全局响应式样式
├── public/                      # 公共资源
│   └── images/                 # 图片文件夹（放置 meme 和示意图）
├── components/                  # Vue 组件
├── uno.config.ts               # UnoCSS 配置
└── package.json                # 项目配置
```

## 🎯 使用建议

### 响应式适配说明

本项目使用 CSS 变量实现响应式设计，会根据不同屏幕尺寸自动调整：

- **极小屏幕** (< 1024px): 缩放至 75%，适合平板设备
- **小屏幕** (1024px - 1279px): 缩放至 85%，适合小笔记本
- **中等屏幕** (1280px - 1600px): 缩放至 95%，适合标准笔记本
- **大屏幕** (> 1600px): 100% 原始大小，适合高分辨率显示器

所有字体大小、间距、内边距都会自动调整，无需手动修改。

### 添加图片

将图片放入 [public/images/](public/images/) 目录，然后在 markdown 中引用：

```markdown
![描述](/images/your-image.jpg)
```

或使用 Slidev 的 `image` 布局：

```markdown
---
layout: image-right
image: /images/your-image.jpg
---
```

### 自定义讲者信息

编辑 [pages/01-intro.md](pages/01-intro.md) 文件，填入您的个人信息：

```markdown
- 📛 昵称：[您的昵称]
- 💼 职业：[您的职业]
- 🎓 背景：[相关背景]
```

### 添加 Meme 图片

在合适的位置插入有趣的 meme 图片增加趣味性，例如：

```markdown
<div class="text-center">
  <img src="/images/panic-meme.jpg" class="w-80 mx-auto rounded" />
  <p class="text-sm mt-2">遇到紧急情况的我</p>
</div>
```

## 🎨 动画效果说明

### v-clicks - 逐步展示

```markdown
<v-clicks>

- 第一项
- 第二项
- 第三项

</v-clicks>
```

### v-mark - 标记重点

```markdown
<span v-mark.circle.red>重要内容</span>
<span v-mark.underline.blue>下划线</span>
<span v-mark.highlight.yellow>高亮</span>
```

### v-motion - 入场动画

```markdown
<div
  v-motion
  :initial="{ x: -80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
>
  内容
</div>
```

## ⚠️ 免责声明

本演示内容仅供科普参考，不构成专业医疗建议。遇到紧急情况请第一时间拨打 120 急救电话，并建议参加正规急救培训机构的课程获取实操经验。

## 📚 参考资源

- [Slidev 官方文档](https://sli.dev/)
- [中国红十字会急救培训](https://www.redcross.org.cn/)
- [美国心脏协会 AHA](https://www.heart.org/)

## 📄 License

MIT License

---

**记住：急救知识人人都该懂，但第一时间请拨打 120！** 🚑
