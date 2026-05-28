<template>
  <section id="home" class="hero">
    <div class="hero-bg">
      <div class="glow glow-1"></div>
      <div class="glow glow-2"></div>
      <div class="particles">
        <div v-for="i in 20" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>
    
    <div class="container">
      <div class="hero-content">
        <div class="hero-left">
          <div class="hero-badge">
            <span class="badge-icon">✨</span>
            <span>AI 驱动的智能健身陪跑平台</span>
          </div>
          
          <h1 class="hero-title">
            AI 正在<br/>
            <span class="gradient-text">重新定义健身</span>
          </h1>
          
          <p class="hero-subtitle">
            让 AI 分析你的训练、饮食与身体变化，<br/>
            成为真正陪伴你成长的 AI 健身教练。
          </p>
          
          <div class="hero-actions">
            <button class="btn btn-primary btn-large" @click="handleExperience">
              <span>立即体验</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </button>
            <button class="btn btn-secondary btn-large" @click="scrollToMembership">
              查看会员体系
            </button>
          </div>
          
          <div class="hero-stats">
            <div class="stat-item">
              <div class="stat-value">100K+</div>
              <div class="stat-label">活跃用户</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">500万+</div>
              <div class="stat-label">训练记录</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-item">
              <div class="stat-value">4.9</div>
              <div class="stat-label">用户评分</div>
            </div>
          </div>
        </div>
        
        <div class="hero-right">
          <div class="phone-mockup">
            <div class="phone-frame">
              <div class="phone-notch"></div>
              <div class="phone-screen">
                <div class="screen-content">
                  <div class="ai-chat">
                    <div class="chat-message user">
                      <div class="message-bubble">我想在3个月内减脂10斤</div>
                    </div>
                    <div class="chat-message ai">
                      <div class="ai-avatar">
                        <div class="avatar-glow"></div>
                        <span>AI</span>
                      </div>
                      <div class="message-bubble">
                        <p>好的！我已经为你制定了科学的减脂计划：</p>
                        <div class="plan-card">
                          <div class="plan-item">
                            <span class="plan-icon">🎯</span>
                            <span>每周训练 4-5 次</span>
                          </div>
                          <div class="plan-item">
                            <span class="plan-icon">🔥</span>
                            <span>日均热量缺口 300-500</span>
                          </div>
                          <div class="plan-item">
                            <span class="plan-icon">💪</span>
                            <span>力量训练 + 有氧结合</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="floating-card card-1">
              <div class="card-icon">💪</div>
              <div class="card-content">
                <div class="card-label">今日训练</div>
                <div class="card-value">45 分钟</div>
              </div>
            </div>
            
            <div class="floating-card card-2">
              <div class="card-icon">🔥</div>
              <div class="card-content">
                <div class="card-label">消耗卡路里</div>
                <div class="card-value">320 kcal</div>
              </div>
            </div>
            
            <div class="floating-card card-3">
              <div class="card-icon">📈</div>
              <div class="card-content">
                <div class="card-label">连续打卡</div>
                <div class="card-value">28 天</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const animationDuration = Math.random() * 20 + 10
  const animationDelay = Math.random() * 5
  
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDuration: `${animationDuration}s`,
    animationDelay: `${animationDelay}s`
  }
}

const handleExperience = () => {
  document.querySelector('#download')?.scrollIntoView({ behavior: 'smooth' })
}

const scrollToMembership = () => {
  document.querySelector('#membership')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 120px 0 80px;
  overflow: hidden;
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 100px 0 60px;
  }
}

.hero-bg {
  position: absolute;
  inset: 0;
  z-index: 0;
  overflow: hidden;
}

.glow {
  position: absolute;
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.4;
  animation: glow 8s ease-in-out infinite;
}

.glow-1 {
  width: 600px;
  height: 600px;
  background: #8B5CF6;
  top: -200px;
  left: -100px;
}

.glow-2 {
  width: 500px;
  height: 500px;
  background: #3B82F6;
  bottom: -150px;
  right: -100px;
  animation-delay: 2s;
}

.particles {
  position: absolute;
  inset: 0;
}

.particle {
  position: absolute;
  background: rgba(139, 92, 246, 0.6);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100px) scale(1);
    opacity: 0;
  }
}

.hero-content {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

.hero-left {
  animation: fadeIn 1s ease-out;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  background: var(--bg-card);
  backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.badge-icon {
  font-size: 16px;
  animation: float 3s ease-in-out infinite;
}

.hero-title {
  margin-bottom: var(--spacing-md);
  line-height: 1.1;
}

.hero-subtitle {
  font-size: 20px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
}

.hero-actions {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.btn-large {
  padding: 16px 32px;
  font-size: 17px;
  
  @media (max-width: 768px) {
    width: 100%;
  }
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  
  @media (max-width: 768px) {
    justify-content: space-around;
  }
}

.stat-item {
  text-align: center;
}

.stat-value {
  font-size: 32px;
  font-weight: 800;
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 4px;
  
  @media (max-width: 768px) {
    font-size: 24px;
  }
}

.stat-label {
  font-size: 14px;
  color: var(--text-tertiary);
  
  @media (max-width: 768px) {
    font-size: 12px;
  }
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: var(--border-color);
}

.hero-right {
  position: relative;
  display: flex;
  justify-content: center;
  animation: fadeIn 1s ease-out 0.3s both;
}

.phone-mockup {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.phone-frame {
  width: 320px;
  height: 650px;
  background: var(--bg-secondary);
  border-radius: 40px;
  padding: 12px;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.6);
  position: relative;
  
  @media (max-width: 768px) {
    width: 280px;
    height: 570px;
  }
}

.phone-notch {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 28px;
  background: var(--bg-primary);
  border-radius: 0 0 20px 20px;
  z-index: 10;
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: var(--bg-primary);
  border-radius: 32px;
  overflow: hidden;
}

.screen-content {
  padding: 60px 20px 20px;
  height: 100%;
}

.ai-chat {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chat-message {
  display: flex;
  gap: 12px;
  
  &.user {
    justify-content: flex-end;
  }
}

.message-bubble {
  max-width: 85%;
  padding: 12px 16px;
  border-radius: 18px;
  font-size: 13px;
  line-height: 1.5;
  
  .user & {
    background: var(--ai-gradient);
    color: var(--text-primary);
  }
  
  .ai & {
    background: var(--bg-elevated);
    color: var(--text-primary);
  }
  
  p {
    margin-bottom: 12px;
  }
}

.ai-avatar {
  position: relative;
  width: 32px;
  height: 32px;
  background: var(--ai-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

.avatar-glow {
  position: absolute;
  inset: -4px;
  background: var(--ai-gradient);
  border-radius: 50%;
  filter: blur(8px);
  opacity: 0.5;
  animation: pulse 2s ease-in-out infinite;
}

.plan-card {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
}

.plan-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  background: var(--bg-secondary);
  border-radius: 12px;
  font-size: 12px;
}

.plan-icon {
  font-size: 16px;
}

.floating-card {
  position: absolute;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: var(--bg-card);
  backdrop-filter: var(--blur-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  animation: float 4s ease-in-out infinite;
  
  @media (max-width: 768px) {
    display: none;
  }
}

.card-1 {
  top: 10%;
  right: -15%;
  animation-delay: 0s;
}

.card-2 {
  bottom: 30%;
  right: -20%;
  animation-delay: 1.5s;
}

.card-3 {
  top: 45%;
  left: -15%;
  animation-delay: 3s;
}

.card-icon {
  font-size: 28px;
}

.card-label {
  font-size: 12px;
  color: var(--text-tertiary);
  margin-bottom: 2px;
}

.card-value {
  font-size: 18px;
  font-weight: 700;
  color: var(--text-primary);
}
</style>
