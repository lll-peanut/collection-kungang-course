// 等待页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
  // 1. 获取所有时间轴节点
  const timelineItems = document.querySelectorAll('.timeline-item');
  // 2. 默认激活第一个节点
  if (timelineItems.length > 0) {
    timelineItems[0].classList.add('active');
  }

  // 3. 给每个节点绑定点击事件（高亮+交互）
  timelineItems.forEach(item => {
    item.addEventListener('click', function() {
      // 移除所有节点的激活态
      timelineItems.forEach(i => i.classList.remove('active'));
      // 给当前点击的节点添加激活态
      this.classList.add('active');
      
      // 可选：滚动到当前节点（优化体验）
      this.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    });
  });

  // 4. 图片懒加载（优化性能，成员2补充图片后生效）
  const lazyImages = document.querySelectorAll('.timeline-img');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src; // 从data-src读取真实图片地址
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => imageObserver.observe(img));
  }
});