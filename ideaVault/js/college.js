// 1. 导航锚点平滑滚动 + 激活态切换（原nav-scroll.js）
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

// 2. 图片预览功能（原html内嵌JS）
document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const imageModal = document.getElementById('imageModal');
  const fullsizeImg = document.getElementById('fullsizeImg');
  const collegeImages = document.querySelectorAll('.college-img');
  const closeBtn = imageModal.querySelector('.close-btn');

  // 点击图片打开预览
  collegeImages.forEach(img => {
    img.addEventListener('click', function() {
      imageModal.style.display = 'block';
      fullsizeImg.src = this.src; // 显示原图
      document.body.style.overflow = 'hidden'; // 防止背景滚动
    });
  });

  // 关闭预览
  closeBtn.addEventListener('click', function() {
    imageModal.style.display = 'none';
    document.body.style.overflow = ''; // 恢复滚动
  });

  // 点击模态框背景关闭
  imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

// 3. 教师详情核心逻辑（原teacher-detail.js）
document.addEventListener('DOMContentLoaded', function() {
  // 教师详细信息数据
  const teacherDetails = {
    '陈光永 教授': {
      title: '陈光永 教授',
      position: '研究员/博士生导师',
      education: '教授',
      research: '机器学习、计算机视觉、系统辨识',
      achievements: [
        '主持科研项目3项，包括国家自然科学基金面上项目1项、福建省自然科学基金面上项目1项',
        '获第五届中国 “互联网 +” 大学生创新创业大赛优秀创新创业导师',
        '主持国家自然科学基金面上项目、福建省自然科学基金面上项目等 3 项课题',
        '曾赴德国凯泽斯劳滕大学开展合作研究，突破多项算法研究瓶颈',
        '以第一/通讯作者在国际知名刊物IEEE TAC、TPAMI、TIP、TNNLS、TIM等上发表论文四十余篇'
      ],
      bio: '陈光永，1989年生，男，博士，研究员/博士生导师，福建省优青、福建省高层次人才、福州大学旗山学者。主要研究方向为：计算机视觉、智能医学图像分析、机器学习优化方法、系统辨识等'
    },

    '姚仰光 博士': {
      title: '姚仰光 博士',
      position: '计算机科学教学中心副主任。',
      education: '中国科学技术大学博士',
      research: '分布式系统',
      achievements: [
        '参加国家九五大科学项目LAMOST天文望远镜的观测控制子系统的开发,该系统已投入实际运行',
        '和汪璟玢副教授共同承担的科技拥军项目，还荣获了全军科技进步三等奖',
        '在《核电子学与探测技术》《中国科学技术大学学报》《天文学报》等核心期刊发表多篇论文，代表作包括《基于分布式环境的 LAMOST 控制系统通信机制的研究》《均值漂移算法在 LAMOST 动态选星中的应用》等'
        
      ],
      bio: '姚仰光，男，1980年生，学历:博士,学位:博士，职称:讲师,职务: 计算机科学教学中心副主任。2003年7月毕业于南京理工大学，获学士学位。2008年7月毕业于中国科学技术大学，获博士学位'
    },

    '詹青青 硕士': {
      title: '詹青青 硕士',
      position: '计算机科学学院研究生导师',
      education: '福州大学计算机软件与理论专业硕士',
      research: '智能算法、VLSI设计',
      achievements: [
        '参与国家 973 计划课题 “大规模集成电路设计中的图论与代数方法” 的研究',
        '在《浙江大学学报（工学版）》发表《基于贪心随机自适应搜索的电路划分改进算法》等学术成果，聚焦电路设计相关的算法优化研究'
      ],
      bio: '詹青青，女，1984年生，研究生学历，硕士学位，助教。2005年7月毕业于福州大学计算机科学与技术系，获学士学位；2008年3月毕业于福州大学计算机软件与理论专业，获硕士学位'
    },

    '陈飞 教授': {
      title: '陈飞 教授',
      position: '福州大学计算机与大数据学院实验教学中心主任，网络信息安全与计算机技术国家级实验教学示范中心副主任',
      education: '浙江大学信息与电子工程学系博士',
      research: '计算机视觉、机器学习和图信号处理',
      achievements: [
        '在IEEE TSP, TIP, CVPR, ICCV等期刊和会议上发表学术论文70多篇，授权专利10余项',
        '主持3项国家自然科学基金和2项福建省自然科学基金',
        '获福建省教学成果特等奖1项，福建省科技进步二等奖1项。',
        '现为美国Mathematical Reviews的评论员(2013-)，EI期刊Journal of Algorithms & Computational Technology的编委(2022-)'
      ],
      bio: '陈飞，男，博士，教授，博士生导师，担任福州大学计算机与大数据学院实验教学中心主任，网络信息安全与计算机技术国家级实验教学示范中心副主任。博士毕业于浙江大学信息与电子工程学系，先后在香港理工大学电子计算系、英国格林威治大学计算与数学学院、加拿大约克大学电子工程与计算机科学系担任助理研究或访问学者'
    }
  };

  // 获取DOM元素
  const modal = document.getElementById('teacherModal');
  const teacherDetail = document.getElementById('teacherDetail');
  const closeBtn = document.getElementById('teacherModal').querySelector('.close-btn');
  // 绑定教师卡片点击事件
  document.querySelectorAll('.teacher-item').forEach(item => {
    item.addEventListener('click', function() {
      const name = this.querySelector('.teacher-name').textContent;
      const details = teacherDetails[name];
      
      if (details) {
        // 构建详情HTML
        teacherDetail.innerHTML = `
          <div class="teacher-detail">
            <h3>${details.title}</h3>
            <div class="teacher-info">
              <p><strong>职位：</strong>${details.position}</p>
              <p><strong>学历：</strong>${details.education}</p>
              <p><strong>研究方向：</strong>${details.research}</p>
            </div>
            <div class="teacher-achievements">
              <h4>主要成就</h4>
              <ul>
                ${details.achievements.map(ach => `<li>${ach}</li>`).join('')}
              </ul>
            </div>
            <div class="teacher-bio">
              <h4>个人简介</h4>
              <p>${details.bio}</p>
            </div>
          </div>
        `;
        modal.style.display = 'block';
      }
    });
  });

  // 关闭弹窗（按钮）
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // 点击弹窗外部关闭
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  // 键盘ESC关闭弹窗（增强体验）
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});