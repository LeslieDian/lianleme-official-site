<template>
  <section id="download" class="download">
    <div class="container">
      <div class="download-content">
        <div class="download-left">
          <h2 class="section-title">
            随时随地<br/>
            <span class="gradient-text">开启 AI 健身</span>
          </h2>
          <p class="section-description">
            当前仅支持 Android APK 浏览器下载安装<br/>
            iOS 版本正在准备中
          </p>
          
          <div class="download-buttons">
            <button class="download-btn btn-appstore" @click="handleDownload('ios')">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
              </svg>
              <div class="btn-text">
                <span class="btn-label">IOS</span>
                <span class="btn-title">敬请期待</span>
              </div>
            </button>
            
            <button class="download-btn btn-android" @click="handleDownload('android')">
              <svg class="btn-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div class="btn-text">
                <span class="btn-label">ANDROID APK</span>
                <span class="btn-title">浏览器下载安装</span>
              </div>
            </button>
          </div>
          
          <div class="download-note">
            <p>当前提供 Android APK 下载，请使用手机浏览器下载安装</p>
          </div>
        </div>
        
        <div class="download-right">
          <div class="phone-preview">
            <div class="phone-frame">
              <div class="phone-screen">
                <div class="app-preview">
                  <div class="preview-header">
                    <div class="preview-time">9:41</div>
                  </div>
                  <div class="preview-content">
                    <div class="preview-icon">
                      <svg viewBox="0 0 80 80" fill="none">
                        <rect width="80" height="80" rx="18" fill="url(#app-gradient)"/>
                        <path d="M40 20L60 30V50L40 60L20 50V30L40 20Z" stroke="white" stroke-width="3" fill="none"/>
                        <circle cx="40" cy="40" r="8" fill="white"/>
                        <defs>
                          <linearGradient id="app-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style="stop-color:#8B5CF6"/>
                            <stop offset="100%" style="stop-color:#3B82F6"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <h3 class="preview-title">TrainYet</h3>
                    <p class="preview-subtitle">AI 健身陪跑平台</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const APK_VERSION = '1.0.1'
const APK_BASE_URL = 'http://122.51.155.109/apk/lianleme.apk'

const getApkDownloadUrl = () => {
  return `${APK_BASE_URL}?v=${APK_VERSION}&t=${Date.now()}`
}

const triggerApkDownload = () => {
  window.open(getApkDownloadUrl(), '_blank', 'noopener,noreferrer')
}

const handleDownload = (platform) => {
  if (platform === 'android') {
    triggerApkDownload()
    return
  }

  alert('iOS 版本正在准备中，敬请期待！')
}
</script>

<style lang="scss" scoped>
.download {
  padding: var(--spacing-4xl) 0;
  background: var(--bg-secondary);
  
  @media (max-width: 768px) {
    padding: var(--spacing-3xl) 0;
  }
}

.download-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);
  align-items: center;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-lg);
  }
}

.download-left {
  @media (max-width: 1024px) {
    text-align: center;
  }
}

.section-title {
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
}

.section-description {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
  
  @media (max-width: 768px) {
    font-size: 16px;
    br {
      display: none;
    }
  }
}

.download-buttons {
  display: flex;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  
  @media (max-width: 1024px) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}

.download-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 24px;
  background: var(--bg-elevated);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  transition: all var(--transition-bounce);
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  will-change: transform;
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.05);
    opacity: 0;
    transition: opacity 0.2s ease;
  }
  
  &:hover {
    background: var(--bg-tertiary);
    border-color: var(--border-color-hover);
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.4);
  }
  
  &:active {
    transform: translateY(-1px) scale(0.98);
    transition: transform 0.1s cubic-bezier(0.4, 0, 0.2, 1);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
  }
}

.btn-icon {
  width: 32px;
  height: 32px;
  color: var(--text-primary);
}

.btn-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
}

.btn-label {
  font-size: 11px;
  color: var(--text-tertiary);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}

.download-note {
  p {
    font-size: 14px;
    color: var(--text-tertiary);
  }
}

.download-right {
  display: flex;
  justify-content: center;
}

.phone-preview {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

.phone-frame {
  width: 300px;
  height: 600px;
  background: var(--bg-primary);
  border-radius: 40px;
  padding: 12px;
  box-shadow: 
    0 0 0 1px rgba(255, 255, 255, 0.1),
    0 20px 60px rgba(0, 0, 0, 0.6);
  
  @media (max-width: 768px) {
    width: 260px;
    height: 520px;
  }
}

.phone-screen {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%);
  border-radius: 32px;
  overflow: hidden;
}

.app-preview {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-lg);
}

.preview-header {
  position: absolute;
  top: 20px;
  left: 0;
  right: 0;
  text-align: center;
}

.preview-time {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}

.preview-content {
  text-align: center;
}

.preview-icon {
  width: 120px;
  height: 120px;
  margin: 0 auto var(--spacing-md);
  
  svg {
    width: 100%;
    height: 100%;
    filter: drop-shadow(0 8px 24px rgba(139, 92, 246, 0.4));
  }
}

.preview-title {
  font-size: 32px;
  font-weight: 800;
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: var(--spacing-xs);
}

.preview-subtitle {
  font-size: 16px;
  color: var(--text-secondary);
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
