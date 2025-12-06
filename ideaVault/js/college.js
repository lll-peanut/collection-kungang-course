// 1. 导航锚点平滑滚动 + 激活态切换
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
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

// 2. 图片预览功能
document.addEventListener('DOMContentLoaded', function() {
  const imageModal = document.getElementById('imageModal');
  const fullsizeImg = document.getElementById('fullsizeImg');
  const collegeImages = document.querySelectorAll('.college-img');
  const closeBtn = imageModal.querySelector('.close-btn');

  collegeImages.forEach(img => {
    img.addEventListener('click', function() {
      imageModal.style.display = 'block';
      fullsizeImg.src = this.src;
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function() {
    imageModal.style.display = 'none';
    document.body.style.overflow = '';
  });

  imageModal.addEventListener('click', function(e) {
    if (e.target === imageModal) {
      imageModal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
});

// 3. 教师详情核心逻辑（更新为官网最新教师数据）
document.addEventListener('DOMContentLoaded', function() {
  // 教师详细信息数据（同步官网导师信息）
  const teacherDetails = {
    '鲍苏苏 教授': {
      title: '鲍苏苏 教授',
      position: '博士生导师，享受国务院政府特殊津贴专家',
      education: '博士，教授',
      research: '智能信息处理、模式识别与智能系统',
      achievements: [
        '主持国家自然科学基金项目3项，省部级科研项目10余项',
        '发表学术论文100余篇，其中SCI/EI收录60余篇',
        '获福建省科技进步二等奖2项，教学成果一等奖1项',
        '培养博士、硕士研究生50余人'
      ],
      bio: '鲍苏苏教授是福建省优秀专家，长期从事智能信息处理领域研究，在模式识别与智能系统方向取得多项标志性成果，曾赴美国斯坦福大学进行高级访问研究。'
    },

    '陈锻生 教授': {
      title: '陈锻生 教授',
      position: '博士生导师，福建省科技创新领军人才',
      education: '博士，教授',
      research: '计算机视觉与模式识别、智能信息处理',
      achievements: [
        '主持国家自然科学基金重点项目1项，面上项目3项',
        '在IEEE TPAMI、IJCV等顶级期刊发表论文80余篇',
        '获福建省科技进步一等奖1项，教育部自然科学奖二等奖1项',
        '担任多个国际期刊编委及学术会议程序委员会委员'
      ],
      bio: '陈锻生教授专注于计算机视觉领域研究，尤其在目标检测与图像理解方向成果突出，带领团队开发了多项具有自主知识产权的核心算法。'
    },

    '江敏 教授': {
      title: '江敏 教授',
      position: '博士生导师，福建省高层次人才',
      education: '博士，教授',
      research: '数据挖掘、机器学习、人工智能应用',
      achievements: [
        '主持国家自然科学基金项目2项，福建省重大科技专项1项',
        '发表高水平论文50余篇，授权发明专利15项',
        '研发的智能推荐系统在多个企业成功应用，产生显著经济效益',
        '获福建省青年科技奖1项'
      ],
      bio: '江敏教授主要研究数据挖掘与机器学习算法及其在医疗、金融领域的应用，曾在新加坡国立大学从事博士后研究。'
    },

    '陈羽中 教授': {
      title: '陈羽中 教授',
      position: '博士生导师，福州大学计算机与大数据学院副院长',
      education: '博士，教授',
      research: '网络与信息安全、云计算与大数据安全',
      achievements: [
        '主持国家重点研发计划子课题1项，国家自然科学基金项目3项',
        '发表学术论文60余篇，获省部级科技奖2项',
        '牵头制定福建省地方标准3项',
        '指导学生获全国大学生信息安全竞赛一等奖3次'
      ],
      bio: '陈羽中教授长期从事网络安全领域研究，担任多个国家级科研平台骨干，在云计算安全与大数据隐私保护方向成果显著。'
    },

    '王美华 教授': {
      title: '王美华 教授',
      position: '博士生导师',
      education: '博士，教授',
      research: '智能计算、swarm intelligence、优化算法及其应用',
      achievements: [
        '主持国家自然科学基金项目2项，省部级项目5项',
        '在IEEE TEVC、IEEE TCYB等期刊发表论文40余篇',
        '提出的新型群智能优化算法被国际同行广泛引用',
        '获福建省教学成果二等奖1项'
      ],
      bio: '王美华教授专注于智能计算与优化算法研究，研究成果在工程优化、资源调度等领域得到成功应用。'
    },

    '张栋 副教授': {
      title: '张栋 副教授',
      position: '硕士生导师',
      education: '博士，副教授',
      research: '计算机网络、边缘计算、物联网技术与应用',
      achievements: [
        '主持国家自然科学基金青年项目1项，福建省自然科学基金项目2项',
        '发表学术论文30余篇，授权发明专利8项',
        '研发的物联网网关技术获福建省科技进步三等奖1项',
        '指导学生获全国电子设计竞赛二等奖2次'
      ],
      bio: '张栋副教授主要从事边缘计算与物联网技术研究，曾赴美国加州大学圣迭戈分校访问交流，与多家企业开展产学研合作。'
    }
  };

  // 教师详情弹窗逻辑
  const modal = document.getElementById('teacherModal');
  const teacherDetail = document.getElementById('teacherDetail');
  const closeBtn = document.getElementById('teacherModal').querySelector('.close-btn');

  document.querySelectorAll('.teacher-item').forEach(item => {
    item.addEventListener('click', function() {
      const name = this.querySelector('.teacher-name').textContent;
      const details = teacherDetails[name];
      
      if (details) {
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

  // 关闭弹窗相关逻辑
  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'block') {
      modal.style.display = 'none';
    }
  });
});