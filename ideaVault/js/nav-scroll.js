// 导航锚点平滑滚动 + 激活态切换
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      // 处理首页锚点（#）
      if (targetId === '#') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
      // 更新导航激活态
      document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
      this.classList.add('active');
    });
  });
});