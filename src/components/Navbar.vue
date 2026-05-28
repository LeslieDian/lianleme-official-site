<template>
  <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
    <div class="container">
      <div class="navbar-content">
        <!-- Logo -->
        <router-link to="/" class="navbar-logo">
          <div class="logo-icon">
            <svg viewBox="0 0 40 40" fill="none">
              <path d="M20 4L36 12V28L20 36L4 28V12L20 4Z" stroke="url(#logo-gradient)" stroke-width="2.5" fill="none"/>
              <circle cx="20" cy="20" r="6" fill="url(#logo-gradient)"/>
              <defs>
                <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
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
        
        <!-- Desktop Navigation -->
        <div class="navbar-links hidden-mobile">
          <a href="#home" class="nav-link">首页</a>
          <a href="#ai-capabilities" class="nav-link">AI能力</a>
          <a href="#membership" class="nav-link">会员体系</a>
          <a href="#download" class="nav-link">下载 App</a>
          <a href="#contact" class="nav-link">联系我们</a>
        </div>
        
        <!-- CTA Button -->
        <button class="btn btn-primary navbar-cta hidden-mobile" @click="handleCTA">
          立即体验
        </button>
        
        <!-- Mobile Menu Toggle -->
        <button class="menu-toggle hidden-desktop" @click="toggleMenu" :class="{ active: menuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <transition name="menu">
      <div v-if="menuOpen" class="mobile-menu hidden-desktop">
        <div class="mobile-menu-content">
          <a href="#home" class="mobile-nav-link" @click="closeMenu">首页</a>
          <a href="#ai-capabilities" class="mobile-nav-link" @click="closeMenu">AI能力</a>
          <a href="#membership" class="mobile-nav-link" @click="closeMenu">会员体系</a>
          <a href="#download" class="mobile-nav-link" @click="closeMenu">下载 App</a>
          <a href="#contact" class="mobile-nav-link" @click="closeMenu">联系我们</a>
          <button class="btn btn-primary" @click="handleCTA">立即体验</button>
        </div>
      </div>
    </transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = ''
}

const handleCTA = () => {
  // TODO: 实际跳转到下载或注册页面
  alert('即将开放，敬请期待！')
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = ''
})
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  
  &.navbar-scrolled {
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-bottom-color: var(--border-color);
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
  }
}

.navbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
  
  @media (max-width: 768px) {
    height: 64px;
  }
}

.navbar-logo {
  display: flex;
  align-items: center;
  gap: 12px;
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
  
  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
}

.logo-text {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
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

.navbar-links {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.nav-link {
  position: relative;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--ai-gradient);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    color: var(--text-primary);
    
    &::after {
      transform: scaleX(1);
    }
  }
}

.navbar-cta {
  padding: 12px 24px;
  font-size: 15px;
}

.menu-toggle {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 32px;
  height: 32px;
  background: none;
  padding: 4px;
  
  span {
    width: 100%;
    height: 2px;
    background: var(--text-primary);
    transition: all 0.3s ease;
    border-radius: 2px;
  }
  
  &.active {
    span:nth-child(1) {
      transform: translateY(8px) rotate(45deg);
    }
    
    span:nth-child(2) {
      opacity: 0;
    }
    
    span:nth-child(3) {
      transform: translateY(-8px) rotate(-45deg);
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.98);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  overflow-y: auto;
}

.mobile-menu-content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg) var(--spacing-md);
}

.mobile-nav-link {
  padding: var(--spacing-sm);
  font-size: 18px;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
    background: var(--bg-elevated);
  }
}

.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
