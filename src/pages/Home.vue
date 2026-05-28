<template>
  <div class="home">
    <Navbar />
    <HeroSection />
    <AICapabilities />
    <MembershipSection />
    <VisionSection />
    <DownloadSection />
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import HeroSection from '@/sections/HeroSection.vue'
import AICapabilities from '@/sections/AICapabilities.vue'
import MembershipSection from '@/sections/MembershipSection.vue'
import VisionSection from '@/sections/VisionSection.vue'
import DownloadSection from '@/sections/DownloadSection.vue'
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
}
</style>
