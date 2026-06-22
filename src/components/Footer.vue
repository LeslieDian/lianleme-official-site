<template>
  <footer id="contact" class="footer">
    <div class="container">
      <div class="footer-content">
        <!-- Logo 和简介 -->
        <div class="footer-section footer-brand">
          <router-link to="/" class="footer-logo">
            <div class="logo-icon">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#footer-gradient)" stroke-width="2.5" fill="none"/>
                <circle cx="20" cy="20" r="6" fill="url(#footer-gradient)"/>
                <defs>
                  <linearGradient id="footer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#8B5CF6"/>
                    <stop offset="100%" style="stop-color:#3B82F6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div class="logo-text">
              <span class="logo-name">TrainYet</span>
              <span class="logo-divider">/</span>
              <span class="logo-name-cn">练了么</span>
            </div>
          </router-link>
          <p class="footer-description">
            AI 驱动的智能健身陪跑平台<br/>
            让每一次训练都有意义
          </p>
          <div class="social-links">
            <a href="#" class="social-link" aria-label="微信">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M8.5 9.5C8.5 10.33 7.83 11 7 11C6.17 11 5.5 10.33 5.5 9.5C5.5 8.67 6.17 8 7 8C7.83 8 8.5 8.67 8.5 9.5ZM13 8C12.17 8 11.5 8.67 11.5 9.5C11.5 10.33 12.17 11 13 11C13.83 11 14.5 10.33 14.5 9.5C14.5 8.67 13.83 8 13 8ZM10 2C4.48 2 0 5.86 0 10.67C0 13.1 1.19 15.29 3.14 16.82L2.5 19.5L5.5 17.83C6.6 18.13 7.78 18.33 9 18.33C9.17 18.33 9.33 18.32 9.5 18.32C9.18 17.55 9 16.7 9 15.83C9 12.11 12.13 9.08 16 9.08C16.7 9.08 17.38 9.18 18 9.35C17.37 5.19 14.09 2 10 2ZM18 11C16.62 11 15.5 12.12 15.5 13.5C15.5 14.88 16.62 16 18 16C19.38 16 20.5 14.88 20.5 13.5C20.5 12.12 19.38 11 18 11ZM22 11C20.62 11 19.5 12.12 19.5 13.5C19.5 14.88 20.62 16 22 16C23.38 16 24.5 14.88 24.5 13.5C24.5 12.12 23.38 11 22 11Z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="微博">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.194 14.197c-.118.598-.463 1.107-.955 1.407-.492.3-1.093.39-1.662.25-.57-.14-1.074-.49-1.395-.97-.32-.48-.447-1.06-.35-1.61.097-.55.42-1.04.893-1.36.473-.32 1.053-.46 1.603-.39.55.07 1.05.35 1.39.78.34.43.49.96.42 1.49l.056.403zm-2.194-3.197c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm-6 0c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3z"/>
              </svg>
            </a>
            <a href="#" class="social-link" aria-label="小红书">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2ZM12 4.5L19.5 8.25V15.75L12 19.5L4.5 15.75V8.25L12 4.5Z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- 产品 -->
        <div class="footer-section">
          <h4 class="footer-title">产品</h4>
          <ul class="footer-links">
            <li><a href="#ai-capabilities">AI 能力</a></li>
            <li><a href="#membership">会员体系</a></li>
            <li><a href="#download">下载 App</a></li>
          </ul>
        </div>
        
        <!-- 支持 -->
        <div class="footer-section">
          <h4 class="footer-title">支持</h4>
          <ul class="footer-links">
            <li><a href="mailto:support@lianleme.top">联系我们</a></li>
            <li><a href="#">帮助中心</a></li>
            <li><a href="#">常见问题</a></li>
          </ul>
        </div>
        
        <!-- 法律 -->
        <div class="footer-section">
          <h4 class="footer-title">法律</h4>
          <ul class="footer-links">
            <li><router-link to="/privacy">隐私政策</router-link></li>
            <li><router-link to="/agreement">用户协议</router-link></li>
          </ul>
        </div>
      </div>
      
      <!-- 底部信息 -->
      <div class="footer-bottom">
        <div class="footer-copyright">
          <p>© 2026 TrainYet / 练了么. All rights reserved.</p>
          <p class="footer-domain">lianleme.top</p>
          <div class="footer-records" aria-label="网站备案信息">
            <p class="footer-record-item">
              <span class="footer-record-label">ICP备案：</span>
              <a
                class="footer-record-link"
                href="https://beian.miit.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                陕ICP备2026014815号-1
              </a>
            </p>
            <p class="footer-record-item">
              <span class="footer-record-label">公安备案：</span>
              <a
                class="footer-record-link"
                href="https://beian.mps.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
              >
                陕公网安备61011602000837号
              </a>
            </p>
          </div>
        </div>
        <div class="footer-badge">
          <span>Made with</span>
          <span class="heart">❤️</span>
          <span>by TrainYet Team</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
  
  @media (max-width: 768px) {
    padding: var(--spacing-2xl) 0 var(--spacing-md);
  }
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: var(--spacing-xl);
  margin-bottom: var(--spacing-xl);
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-lg);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

.footer-brand {
  @media (max-width: 1024px) {
    grid-column: span 2;
  }
  
  @media (max-width: 768px) {
    grid-column: span 1;
  }
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: var(--spacing-sm);
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 0.8;
  }
}

.logo-icon {
  width: 40px;
  height: 40px;
  
  svg {
    width: 100%;
    height: 100%;
  }
}

.logo-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
}

.logo-name {
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.logo-divider {
  color: var(--text-quaternary);
}

.logo-name-cn {
  color: var(--text-secondary);
}

.footer-description {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-md);
}

.social-links {
  display: flex;
  gap: var(--spacing-xs);
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: all 0.3s ease;
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  &:hover {
    background: var(--ai-gradient);
    color: var(--text-primary);
    border-color: transparent;
    transform: translateY(-2px);
  }
}

.footer-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: var(--spacing-sm);
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
  
  a {
    font-size: 14px;
    color: var(--text-secondary);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--text-primary);
    }
  }
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-lg);
  padding-top: var(--spacing-lg);
  border-top: 1px solid var(--border-color);
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    text-align: center;
  }
}

.footer-copyright {
  p {
    font-size: 14px;
    color: var(--text-tertiary);
    margin-bottom: 4px;
  }
}

.footer-domain {
  font-size: 12px;
  color: var(--text-quaternary);
}

.footer-records {
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 8px;
}

.footer-record-item {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px;
  font-size: 12px;
  color: var(--text-quaternary);
  line-height: 1.6;
}

.footer-record-label {
  color: var(--text-quaternary);
}

.footer-record-link {
  color: var(--text-tertiary);
  transition: color 0.3s ease;
  word-break: break-all;

  &:hover {
    color: var(--text-primary);
  }
}

.footer-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: var(--text-tertiary);
}

.heart {
  color: #EF4444;
  animation: pulse 2s ease-in-out infinite;
}
</style>
