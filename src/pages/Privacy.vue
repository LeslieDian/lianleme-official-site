<template>
  <div class="legal-page">
    <Navbar />
    
    <div class="legal-content">
      <div class="container">
        <div class="legal-header">
          <router-link to="/" class="back-link">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <span>返回首页</span>
          </router-link>
          <h1 class="page-title">隐私政策</h1>
          <p class="update-time">最后更新：2026年5月8日</p>
        </div>
        
        <div class="legal-body">
          <section class="legal-section">
            <h2>1. 引言</h2>
            <p>
              欢迎使用 TrainYet（练了么）！我们非常重视您的隐私保护和个人信息安全。
              本隐私政策将帮助您了解我们如何收集、使用、存储和保护您的个人信息。
            </p>
            <p>
              使用我们的服务即表示您同意本隐私政策的内容。如果您不同意本政策的任何内容，
              请不要使用我们的服务。
            </p>
          </section>
          
          <section class="legal-section">
            <h2>2. 我们收集的信息</h2>
            <h3>2.1 您主动提供的信息</h3>
            <ul>
              <li><strong>账户信息：</strong>注册时提供的手机号、邮箱、昵称等</li>
              <li><strong>身体数据：</strong>身高、体重、年龄、性别等基础信息</li>
              <li><strong>训练数据：</strong>训练记录、运动类型、训练时长、训练强度等</li>
              <li><strong>饮食数据：</strong>饮食记录、热量摄入、营养成分等</li>
              <li><strong>目标信息：</strong>健身目标、期望达成时间等</li>
            </ul>
            
            <h3>2.2 自动收集的信息</h3>
            <ul>
              <li><strong>设备信息：</strong>设备型号、操作系统版本、设备标识符</li>
              <li><strong>使用数据：</strong>应用使用时长、功能使用频率、页面访问记录</li>
              <li><strong>位置信息：</strong>在您授权的情况下收集位置信息（用于运动轨迹记录）</li>
            </ul>
          </section>
          
          <section class="legal-section">
            <h2>3. 信息使用方式</h2>
            <p>我们收集的信息将用于以下目的：</p>
            <ul>
              <li><strong>AI 分析服务：</strong>为您提供个性化的训练分析、饮食建议和健身规划</li>
              <li><strong>服务改进：</strong>优化产品功能、提升用户体验</li>
              <li><strong>账户管理：</strong>创建和管理您的账户、验证身份</li>
              <li><strong>客户支持：</strong>响应您的咨询和反馈</li>
              <li><strong>安全保障：</strong>检测和防止欺诈、滥用等违规行为</li>
              <li><strong>法律合规：</strong>遵守适用的法律法规要求</li>
            </ul>
          </section>
          
          <section class="legal-section">
            <h2>4. AI 数据处理说明</h2>
            <p>
              TrainYet 使用先进的 AI 技术分析您的训练和饮食数据。
              关于 AI 数据处理，您需要了解：
            </p>
            <ul>
              <li><strong>数据加密：</strong>所有数据在传输和存储过程中均采用加密技术</li>
              <li><strong>匿名化处理：</strong>用于 AI 模型训练的数据会进行匿名化处理</li>
              <li><strong>本地处理：</strong>部分 AI 分析在您的设备本地完成，无需上传服务器</li>
              <li><strong>数据隔离：</strong>您的个人数据与其他用户数据严格隔离</li>
              <li><strong>模型优化：</strong>我们可能使用匿名化的数据改进 AI 模型性能</li>
            </ul>
          </section>
          
          <section class="legal-section">
            <h2>5. 数据存储与安全</h2>
            <h3>5.1 数据存储</h3>
            <ul>
              <li>数据存储在中国境内的安全服务器</li>
              <li>采用行业标准的安全措施保护数据</li>
              <li>定期备份数据以防止数据丢失</li>
            </ul>
            
            <h3>5.2 数据保留</h3>
            <ul>
              <li>账户激活期间，我们会保留您的数据</li>
              <li>账户注销后，我们会在 30 天内删除您的个人数据</li>
              <li>法律要求保留的数据除外</li>
            </ul>
            
            <h3>5.3 安全措施</h3>
            <ul>
              <li>数据传输采用 HTTPS/TLS 加密</li>
              <li>数据存储采用 AES-256 加密</li>
              <li>严格的访问控制和权限管理</li>
              <li>定期安全审计和漏洞扫描</li>
            </ul>
          </section>
          
          <section class="legal-section">
            <h2>6. 信息共享</h2>
            <p>我们不会出售您的个人信息。仅在以下情况下共享信息：</p>
            <ul>
              <li><strong>经您同意：</strong>获得您的明确同意后</li>
              <li><strong>服务提供商：</strong>与帮助我们提供服务的第三方（如云服务商）共享必要信息</li>
              <li><strong>法律要求：</strong>根据法律法规、法律程序或政府要求</li>
              <li><strong>业务转让：</strong>在合并、收购或资产出售时，会提前通知您</li>
            </ul>
          </section>
          
          <section class="legal-section">
            <h2>7. 您的权利</h2>
            <p>您对自己的个人信息享有以下权利：</p>
            <ul>
              <li><strong>访问权：</strong>查看我们持有的您的个人信息</li>
              <li><strong>更正权：</strong>更正不准确或不完整的信息</li>
              <li><strong>删除权：</strong>要求删除您的个人信息</li>
              <li><strong>导出权：</strong>以结构化格式导出您的数据</li>
              <li><strong>撤回同意：</strong>随时撤回您的授权同意</li>
              <li><strong>投诉权：</strong>向监管机构投诉我们的数据处理行为</li>
            </ul>
            <p>
              如需行使上述权利，请通过 <a href="mailto:privacy@lianleme.top">privacy@lianleme.top</a> 联系我们。
            </p>
          </section>
          
          <section class="legal-section">
            <h2>8. 未成年人保护</h2>
            <p>
              我们的服务面向 18 岁以上的成年人。如果您未满 18 岁，请在监护人的指导下使用我们的服务。
              我们不会故意收集未成年人的个人信息。
            </p>
          </section>
          
          <section class="legal-section">
            <h2>9. Cookie 和类似技术</h2>
            <p>
              我们使用 Cookie 和类似技术来改善用户体验、分析使用情况。
              您可以通过浏览器设置管理 Cookie 偏好。
            </p>
          </section>
          
          <section class="legal-section">
            <h2>10. 隐私政策更新</h2>
            <p>
              我们可能会不时更新本隐私政策。重大变更时，我们会通过应用内通知、
              邮件等方式告知您。继续使用服务即表示您接受更新后的政策。
            </p>
          </section>
          
          <section class="legal-section">
            <h2>11. 联系我们</h2>
            <p>如果您对本隐私政策有任何疑问、意见或建议，请通过以下方式联系我们：</p>
            <ul>
              <li><strong>邮箱：</strong><a href="mailto:privacy@lianleme.top">privacy@lianleme.top</a></li>
              <li><strong>客服：</strong><a href="mailto:support@lianleme.top">support@lianleme.top</a></li>
              <li><strong>网站：</strong><a href="https://lianleme.top">lianleme.top</a></li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<style lang="scss" scoped>
.legal-page {
  min-height: 100vh;
  background: var(--bg-primary);
}

.legal-content {
  padding: 120px 0 var(--spacing-3xl);
  
  @media (max-width: 768px) {
    padding: 100px 0 var(--spacing-2xl);
  }
}

.legal-header {
  margin-bottom: var(--spacing-3xl);
  
  @media (max-width: 768px) {
    margin-bottom: var(--spacing-2xl);
  }
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--text-secondary);
  font-size: 15px;
  margin-bottom: var(--spacing-md);
  transition: color 0.3s ease;
  
  &:hover {
    color: var(--text-primary);
  }
  
  svg {
    stroke: currentColor;
  }
}

.page-title {
  font-size: 48px;
  font-weight: 800;
  margin-bottom: var(--spacing-xs);
  background: var(--ai-gradient);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
}

.update-time {
  font-size: 14px;
  color: var(--text-tertiary);
}

.legal-body {
  max-width: 800px;
}

.legal-section {
  margin-bottom: var(--spacing-2xl);
  
  h2 {
    font-size: 28px;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
  
  h3 {
    font-size: 20px;
    font-weight: 600;
    color: var(--text-primary);
    margin: var(--spacing-md) 0 var(--spacing-sm);
    
    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
  
  p {
    font-size: 16px;
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--spacing-sm);
  }
  
  ul {
    list-style: none;
    padding-left: 0;
    
    li {
      font-size: 16px;
      color: var(--text-secondary);
      line-height: 1.8;
      margin-bottom: var(--spacing-xs);
      padding-left: var(--spacing-md);
      position: relative;
      
      &::before {
        content: '•';
        position: absolute;
        left: 0;
        color: var(--ai-purple);
        font-weight: 700;
      }
      
      strong {
        color: var(--text-primary);
        font-weight: 600;
      }
    }
  }
  
  a {
    color: var(--ai-purple);
    text-decoration: underline;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--ai-blue);
    }
  }
}
</style>
