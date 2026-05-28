<template>
  <section class="vision">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">
          AI 不只是分析数据<br/>
          更是<span class="gradient-text">陪伴你成长</span>
        </h2>
      </div>
      
      <div class="vision-cards">
        <div class="vision-card" v-for="(item, index) in visionItems" :key="index">
          <div class="card-glow"></div>
          <div class="card-icon">{{ item.icon }}</div>
          <h3 class="card-title">{{ item.title }}</h3>
          <p class="card-description">{{ item.description }}</p>
        </div>
      </div>
      
      <div class="vision-cta">
        <p class="cta-text">开始你的 AI 健身之旅</p>
        <button class="btn btn-primary btn-large" @click="handleStart">
          <span>立即体验</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const visionItems = [
  {
    icon: '🎯',
    title: 'AI 已连续陪伴你训练 42 天',
    description: '每一次训练，AI 都在记录、分析、优化'
  },
  {
    icon: '💪',
    title: '你的腹肌预计将在 51 天后明显出现',
    description: '基于你的训练强度和饮食数据，AI 给出科学预测'
  },
  {
    icon: '📈',
    title: '你的训练容量已超过 89% 用户',
    description: '持续进步，AI 见证你的每一次突破'
  },
  {
    icon: '🔥',
    title: '本月已消耗 12,450 卡路里',
    description: 'AI 精准追踪，让每一滴汗水都有意义'
  }
]

const handleStart = () => {
  alert('即将开放，敬请期待！')
}
</script>

<style lang="scss" scoped>
.vision {
  padding: var(--spacing-4xl) 0;
  position: relative;
  
  @media (max-width: 768px) {
    padding: var(--spacing-3xl) 0;
  }
}

.section-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-2xl);
  }
}

.section-title {
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.vision-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-2xl);
  }
}

.vision-card {
  position: relative;
  background: var(--bg-card);
  backdrop-filter: var(--blur-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  transition: all 0.4s ease;
  
  &:hover {
    transform: translateY(-4px);
    border-color: var(--border-color-hover);
    
    .card-glow {
      opacity: 0.5;
    }
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
}

.card-glow {
  position: absolute;
  inset: -2px;
  background: var(--ai-gradient);
  border-radius: var(--radius-2xl);
  opacity: 0;
  filter: blur(20px);
  transition: opacity 0.4s ease;
  z-index: -1;
}

.card-icon {
  font-size: 48px;
  margin-bottom: var(--spacing-sm);
}

.card-title {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
}

.card-description {
  font-size: 15px;
  color: var(--text-secondary);
  line-height: 1.7;
}

.vision-cta {
  text-align: center;
}

.cta-text {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.btn-large {
  padding: 16px 40px;
  font-size: 17px;
}
</style>
