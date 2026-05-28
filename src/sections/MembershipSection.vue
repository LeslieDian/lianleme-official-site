<template>
  <section id="membership" class="membership">
    <div class="container">
      <div class="section-header">
        <div class="section-badge">
          <span class="badge-icon">👑</span>
          <span>会员体系</span>
        </div>
        <h2 class="section-title">
          选择适合你的<span class="gradient-text">AI 陪跑方案</span>
        </h2>
        <p class="section-subtitle">
          从基础 AI 分析到黑金私教陪跑，满足不同阶段的健身需求
        </p>
      </div>
      
      <div class="membership-cards">
        <!-- Pro 会员 -->
        <div class="membership-card card-pro">
          <div class="card-glow-effect"></div>
          <div class="card-header">
            <div class="card-badge">
              <span>AI 训练会员</span>
            </div>
            <h3 class="card-title">Pro</h3>
            <p class="card-subtitle">适合健身进阶用户</p>
          </div>
          

          
          <div class="card-features">
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>AI 每日训练分析</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>AI 饮食分析</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>AI 周报生成</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>智能训练计划</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>高级训练模板</span>
            </div>
            <div class="feature-item">
              <div class="feature-icon">✓</div>
              <span>数据可视化</span>
            </div>
          </div>
          
          <button class="btn btn-primary btn-full" @click="handleSubscribe('pro')">
            <span>立即开通 Pro</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div class="card-note">
            适合想要系统训练的健身爱好者
          </div>
        </div>
        
        <!-- Pro+ 黑金会员 -->
        <div class="membership-card card-pro-plus">
          <div class="card-glow-effect-gold"></div>
          <div class="popular-badge">
            <span>🔥 最受欢迎</span>
          </div>
          <div class="card-header">
            <div class="card-badge card-badge-gold">
              <span>黑金 AI 私教会员</span>
            </div>
            <h3 class="card-title">Pro<span class="plus-sign">+</span></h3>
            <p class="card-subtitle">AI 私教长期陪跑</p>
          </div>
          

          
          <div class="card-features">
            <div class="feature-item feature-item-highlight">
              <div class="feature-icon">✓</div>
              <span>包含 Pro 全部功能</span>
            </div>
            <div class="feature-divider"></div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>AI 长期记忆</span>
            </div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>AI 周期规划</span>
            </div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>AI 私教陪跑</span>
            </div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>全部会员课程</span>
            </div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>优先客服支持</span>
            </div>
            <div class="feature-item feature-item-gold">
              <div class="feature-icon">★</div>
              <span>专属社区权限</span>
            </div>
          </div>
          
          <button class="btn btn-gold btn-full" @click="handleSubscribe('pro-plus')">
            <span>开启 AI 私教陪跑</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          
          <div class="card-note card-note-gold">
            真正的 AI 私教，长期陪伴你的成长
          </div>
        </div>
      </div>
      
      <!-- 会员对比说明 -->
      <div class="membership-note">
        <p>💡 所有会员均支持月付/年付，年付享 8 折优惠</p>
        <p>🔒 支持随时取消，未使用部分按比例退款</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const handleSubscribe = (plan) => {
  // TODO: 实际跳转到支付页面
  alert(`即将开通 ${plan === 'pro' ? 'Pro' : 'Pro+'} 会员，敬请期待！`)
}
</script>

<style lang="scss" scoped>
.membership {
  padding: var(--spacing-4xl) 0;
  background: var(--bg-secondary);
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

.section-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: var(--bg-card);
  backdrop-filter: var(--blur-md);
  border: 1px solid var(--border-color);
  border-radius: 100px;
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-md);
}

.badge-icon {
  font-size: 18px;
}

.section-title {
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-subtitle {
  font-size: 18px;
  color: var(--text-secondary);
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
}

.membership-cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-xl);
  max-width: 1100px;
  margin: 0 auto var(--spacing-xl);
  
  @media (max-width: 1024px) {
    gap: var(--spacing-lg);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
}

.membership-card {
  position: relative;
  background: var(--bg-card);
  backdrop-filter: var(--blur-lg);
  -webkit-backdrop-filter: var(--blur-lg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-2xl);
  padding: var(--spacing-xl);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
  }
  
  @media (max-width: 768px) {
    padding: var(--spacing-lg);
  }
}

.card-pro {
  &:hover {
    border-color: rgba(139, 92, 246, 0.5);
    
    .card-glow-effect {
      opacity: 0.3;
    }
  }
}

.card-pro-plus {
  border-color: rgba(255, 215, 0, 0.3);
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.05) 0%, rgba(255, 165, 0, 0.05) 100%);
  
  &:hover {
    border-color: rgba(255, 215, 0, 0.5);
    
    .card-glow-effect-gold {
      opacity: 0.4;
    }
  }
}

.card-glow-effect {
  position: absolute;
  inset: -2px;
  background: var(--ai-gradient);
  border-radius: var(--radius-2xl);
  opacity: 0;
  filter: blur(30px);
  transition: opacity 0.4s ease;
  z-index: -1;
}

.card-glow-effect-gold {
  position: absolute;
  inset: -2px;
  background: var(--gold-gradient);
  border-radius: var(--radius-2xl);
  opacity: 0;
  filter: blur(30px);
  transition: opacity 0.4s ease;
  z-index: -1;
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 20px;
  background: var(--gold-gradient);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  box-shadow: var(--shadow-glow-gold);
}

.card-header {
  margin-bottom: var(--spacing-lg);
}

.card-badge {
  display: inline-block;
  padding: 6px 16px;
  background: var(--ai-gradient);
  border-radius: 100px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.card-badge-gold {
  background: var(--gold-gradient);
  color: #000000;
}

.card-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: var(--spacing-xs);
  
  .card-pro & {
    background: var(--ai-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .card-pro-plus & {
    background: var(--gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.plus-sign {
  font-size: 32px;
  vertical-align: super;
}

.card-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
}

.card-price {
  display: flex;
  align-items: baseline;
  margin-bottom: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
  border-bottom: 1px solid var(--border-color);
}

.price-currency {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-secondary);
  margin-right: 4px;
}

.price-amount {
  font-size: 56px;
  font-weight: 800;
  
  .card-pro & {
    background: var(--ai-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  
  .card-pro-plus & {
    background: var(--gold-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.price-period {
  font-size: 18px;
  color: var(--text-tertiary);
  margin-left: 4px;
}

.card-features {
  margin-bottom: var(--spacing-lg);
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  font-size: 15px;
  color: var(--text-secondary);
}

.feature-item-highlight {
  color: var(--text-primary);
  font-weight: 600;
}

.feature-item-gold {
  color: var(--text-primary);
  
  .feature-icon {
    background: var(--gold-gradient);
    color: #000000;
  }
}

.feature-icon {
  width: 24px;
  height: 24px;
  background: var(--ai-gradient);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: var(--text-primary);
  flex-shrink: 0;
}

.feature-divider {
  height: 1px;
  background: var(--border-color);
  margin: var(--spacing-sm) 0;
}

.btn-full {
  width: 100%;
  padding: 16px 32px;
  font-size: 16px;
  margin-bottom: var(--spacing-sm);
}

.card-note {
  text-align: center;
  font-size: 13px;
  color: var(--text-tertiary);
}

.card-note-gold {
  color: var(--text-secondary);
}

.membership-note {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  
  p {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-bottom: 8px;
  }
}
</style>
