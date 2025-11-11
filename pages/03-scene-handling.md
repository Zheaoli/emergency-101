---
transition: slide-up
layout: center
class: text-center
---

# 现场处置原则 🚨

<div class="text-xl mt-8">
现场急救的 SOP（标准操作流程）
</div>

---
layout: two-cols
layoutClass: gap-8
---

# 现场评估 5 步法

<v-clicks>

### 📋 第一步：观察环境

- 🔥 是否有火灾、爆炸风险？
- ⚡ 是否有漏电危险？
- 🚗 是否有交通隐患？
- 🏗️ 是否有坍塌风险？

<div class="mt-3 p-3 bg-yellow-50 rounded text-sm">
💡 安全第一！如果现场危险，<span v-mark.underline.red>先撤离</span>再报警
</div>

### 📞 第二步：呼叫援助

- 📱 拨打 **120**
- 🗣️ 清晰说明：位置、伤情、人数
- 👥 指定专人接应救护车

</v-clicks>

::right::

<div v-click="1">

```mermaid {scale: 0.8}
graph TD
    A[发现伤者] --> B{现场安全?}
    B -->|否| C[撤离现场]
    B -->|是| D[接近伤者]
    C --> E[报警求助]
    D --> F[评估伤情]
    F --> G[拨打 120]
    G --> H[实施急救]

    style A fill:#e1f5ff
    style B fill:#fff4e6
    style C fill:#ffebee
    style D fill:#e8f5e9
    style E fill:#f3e5f5
    style F fill:#e8f5e9
    style G fill:#fff9c4
    style H fill:#e1f5ff
```

<div class="mt-4 text-sm text-gray-600">
决策流程图：遇到紧急情况该怎么办？
</div>

</div>

---
layout: default
---

# 现场评估 5 步法（续）

<v-clicks>

<div class="mb-8">

### 🩺 第三步：快速评估伤情

使用 **ABC 原则** 评估：

<div class="grid grid-cols-3 gap-4 mt-4">

<div class="p-4 bg-blue-50 rounded-lg text-center">
  <div class="text-3xl mb-2">💨</div>
  <strong>A - Airway</strong>
  <p class="text-sm mt-2">气道是否通畅？</p>
</div>

<div class="p-4 bg-green-50 rounded-lg text-center">
  <div class="text-3xl mb-2">🫁</div>
  <strong>B - Breathing</strong>
  <p class="text-sm mt-2">是否有呼吸？</p>
</div>

<div class="p-4 bg-red-50 rounded-lg text-center">
  <div class="text-3xl mb-2">❤️</div>
  <strong>C - Circulation</strong>
  <p class="text-sm mt-2">是否有脉搏/大出血？</p>
</div>

</div>

</div>

<div class="mb-8">

### 🎯 第四步：优先处理致命伤

<div class="flex gap-4 mt-4">

<div class="flex-1 p-4 bg-red-100 border-l-4 border-red-500">
  <strong class="text-red-700">🚨 立即处理</strong>
  <ul class="text-sm mt-2 space-y-1">
    <li>• 大出血</li>
    <li>• 呼吸/心跳停止</li>
    <li>• 气道梗阻</li>
  </ul>
</div>

<div class="flex-1 p-4 bg-yellow-100 border-l-4 border-yellow-500">
  <strong class="text-yellow-700">⚠️ 尽快处理</strong>
  <ul class="text-sm mt-2 space-y-1">
    <li>• 骨折</li>
    <li>• 中等出血</li>
    <li>• 烧伤</li>
  </ul>
</div>

<div class="flex-1 p-4 bg-green-100 border-l-4 border-green-500">
  <strong class="text-green-700">✅ 可以等待</strong>
  <ul class="text-sm mt-2 space-y-1">
    <li>• 轻微擦伤</li>
    <li>• 小伤口</li>
    <li>• 轻度扭伤</li>
  </ul>
</div>

</div>

</div>

<div>

### 🛡️ 第五步：持续监测

- 👀 观察伤者意识状态
- 🫁 注意呼吸变化
- 🤒 保持伤者体温
- 💬 安抚伤者情绪

</div>

</v-clicks>

---
transition: fade
---

# 现场处置的黄金时间 ⏱️

<div class="mt-8">

<v-clicks>

<div class="p-6 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-lg mb-6">
  <div class="text-4xl mb-2">⏰ 4-6 分钟</div>
  <div class="text-xl">
    <span v-mark.circle.yellow>心跳骤停的黄金抢救时间</span>
  </div>
  <p class="text-sm mt-2 opacity-90">
    超过这个时间，大脑可能出现不可逆损伤
  </p>
</div>

<div class="grid grid-cols-2 gap-6">

<div class="p-5 bg-blue-50 rounded-lg">
  <div class="text-3xl mb-3">🩸 1-2 小时</div>
  <strong>严重出血的处理时限</strong>
  <p class="text-sm mt-2">大量失血可能导致休克</p>
</div>

<div class="p-5 bg-purple-50 rounded-lg">
  <div class="text-3xl mb-3">❄️ 6-8 小时</div>
  <strong>断肢的保存时限</strong>
  <p class="text-sm mt-2">妥善保存可延长再植成功率</p>
</div>

</div>

</v-clicks>

</div>

<div class="mt-10 text-center text-xl p-4 bg-yellow-50 rounded" v-click>
💡 记住：<span v-mark.highlight.orange>时间就是生命！</span> 别犹豫，该动手时就动手！
</div>

---
layout: center
class: text-center
---

# 现场处置要点总结 📝

<div class="mt-12 text-lg space-y-6">

<v-clicks>

<div
  v-motion
  :initial="{ x: -80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  class="p-4 bg-blue-50 rounded-lg"
>
  1️⃣ <strong>安全第一</strong> - 保护自己才能救别人
</div>

<div
  v-motion
  :initial="{ x: 80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  class="p-4 bg-green-50 rounded-lg"
>
  2️⃣ <strong>快速评估</strong> - ABC 原则不能忘
</div>

<div
  v-motion
  :initial="{ x: -80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  class="p-4 bg-yellow-50 rounded-lg"
>
  3️⃣ <strong>及时求助</strong> - 120 比你专业
</div>

<div
  v-motion
  :initial="{ x: 80, opacity: 0 }"
  :enter="{ x: 0, opacity: 1 }"
  class="p-4 bg-red-50 rounded-lg"
>
  4️⃣ <strong>优先处理</strong> - 先救命再救伤
</div>

</v-clicks>

</div>

<div class="mt-12 text-2xl" v-click>
🎯 <span v-mark.underline.red>稳住，我们能赢！</span>
</div>
