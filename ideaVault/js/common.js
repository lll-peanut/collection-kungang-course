/**
 * 通用工具函数库
 * 包含项目中多个页面复用的功能模块
 */
const Common = (function() {
  // 私有工具方法
  const privateMethods = {
    // 检查元素是否在视口中
    isInViewport: function(el) {
      const rect = el.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
      );
    }
  };

  return {
    /**
     * 初始化页面通用功能
     * 包括：懒加载、导航高亮、返回顶部等
     */
    init: function() {
      this.initLazyLoad();
      this.initNavHighlight();
      this.initBackToTop();
      this.initSmoothScroll();
    },

    /**
     * 图片懒加载功能
     * 适配所有带有data-src属性的图片
     */
    initLazyLoad: function() {
      if (!('IntersectionObserver' in window)) {
        // 降级处理：直接加载所有图片
        document.querySelectorAll('[data-src]').forEach(img => {
          img.src = img.dataset.src;
        });
        return;
      }

      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            // 处理图片加载
            if (img.dataset.src) {
              img.src = img.dataset.src;
              // 移除观察
              observer.unobserve(img);
              // 添加加载完成动画
              img.style.opacity = '0';
              img.style.transition = 'opacity 0.3s ease';
              img.onload = () => {
                img.style.opacity = '1';
              };
            }
          }
        });
      });

      // 观察所有带data-src的图片
      document.querySelectorAll('[data-src]').forEach(img => {
        imageObserver.observe(img);
      });
    },

    /**
     * 导航栏高亮当前页面
     * 根据当前URL匹配导航链接
     */
    initNavHighlight: function() {
      const currentPath = window.location.pathname.split('/').pop();
      const navLinks = document.querySelectorAll('.nav-link');
      
      navLinks.forEach(link => {
        const linkPath = link.getAttribute('href').split('/').pop() || 'homepage.html';
        if (linkPath === currentPath) {
          link.classList.add('active');
        }
      });
    },

    /**
     * 返回顶部按钮功能
     */
    initBackToTop: function() {
      // 检查是否已有返回顶部按钮，避免重复创建
      if (document.querySelector('.back-to-top')) return;

      const btn = document.createElement('button');
      btn.className = 'btn btn-red back-to-top';
      btn.textContent = '返回顶部';
      btn.style.position = 'fixed';
      btn.style.bottom = '30px';
      btn.style.right = '30px';
      btn.style.zIndex = '999';
      btn.style.display = 'none';
      
      document.body.appendChild(btn);

      // 点击返回顶部
      btn.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });

      // 滚动显示/隐藏按钮
      window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
          btn.style.display = 'block';
        } else {
          btn.style.display = 'none';
        }
      });
    },

    /**
     * 平滑滚动处理
     * 处理所有锚点链接的点击事件
     */
    initSmoothScroll: function() {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;

          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth'
            });
          }
        });
      });
    },

    /**
     * 显示提示消息
     * @param {string} message - 消息内容
     * @param {string} type - 消息类型：success/error/info
     * @param {number} duration - 显示时长(ms)，默认3000
     */
    showToast: function(message, type = 'info', duration = 3000) {
      // 移除已存在的toast
      const existingToast = document.querySelector('.toast');
      if (existingToast) {
        existingToast.remove();
      }

      const toast = document.createElement('div');
      toast.className = `toast toast-${type}`;
      toast.textContent = message;
      
      // 样式设置
      toast.style.position = 'fixed';
      toast.style.top = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '4px';
      toast.style.color = '#fff';
      toast.style.zIndex = '9999';
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';

      // 类型样式
      switch(type) {
        case 'success':
          toast.style.backgroundColor = '#4CAF50';
          break;
        case 'error':
          toast.style.backgroundColor = '#f44336';
          break;
        default:
          toast.style.backgroundColor = 'var(--fd-blue)';
      }

      document.body.appendChild(toast);
      
      // 显示动画
      setTimeout(() => {
        toast.style.opacity = '1';
      }, 10);

      // 自动关闭
      setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => {
          toast.remove();
        }, 300);
      }, duration);
    }
  };
})();

// 页面加载完成后初始化通用功能
document.addEventListener('DOMContentLoaded', () => {
  Common.init();
});
