// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function() {
    const filterItems = document.querySelectorAll('.filter-item');
    const labList = document.querySelector('.lab-list');
    const labModal = document.getElementById('labModal');
    const labClose = document.querySelector('.lab-close');

    // 初始化：默认显示全部实验室（添加错误捕获）
    try {
        renderLabs('all');
    } catch (error) {
        labList.innerHTML = `
            <div class="lab-card-placeholder">
                <i class="fas fa-exclamation-circle"></i>
                <p>数据加载失败，请刷新页面重试</p>
            </div>
        `;
        console.error('实验室数据渲染失败：', error);
    }

    // 分类筛选点击事件（防抖处理）
    let filterDebounceTimer;
    filterItems.forEach(item => {
        item.addEventListener('click', function() {
            clearTimeout(filterDebounceTimer);
            filterDebounceTimer = setTimeout(() => {
                filterItems.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                const category = this.getAttribute('data-category');
                renderLabs(category);
            }, 100);
        });
    });

    // 关闭弹窗事件
    if (labClose) {
        labClose.addEventListener('click', function() {
            if (labModal) labModal.style.display = 'none';
        });
    }

    // 点击弹窗外部关闭
    window.addEventListener('click', function(event) {
        if (labModal && event.target === labModal) {
            labModal.style.display = 'none';
        }
    });

    /**
     * 渲染实验室列表（适配优化后的卡片样式）
     */
    function renderLabs(category) {
        if (!labList) return;
        labList.innerHTML = '';

        // 校验数据
        if (typeof labData === 'undefined' || labData === null) {
            labList.innerHTML = `
                <div class="lab-card-placeholder">
                    <i class="fas fa-database"></i>
                    <p>实验室数据未找到</p>
                </div>
            `;
            return;
        }

        // 收集数据
        let labsToRender = [];
        if (category === 'all') {
            for (const key in labData) {
                if (Array.isArray(labData[key])) {
                    labsToRender = labsToRender.concat(labData[key]);
                }
            }
        } else {
            labsToRender = Array.isArray(labData[category]) ? labData[category] : [];
        }

        // 渲染卡片
        if (labsToRender.length === 0) {
            labList.innerHTML = `
                <div class="lab-card-placeholder">
                    <i class="fas fa-search"></i>
                    <p>暂无该分类实验室数据</p>
                </div>
            `;
            return;
        }

        labsToRender.forEach(lab => {
            if (!lab || !lab.name || !lab.category || !lab.location || !lab.contactPerson) return;

            const labCard = document.createElement('div');
            labCard.className = 'lab-card';
            labCard.setAttribute('data-lab-id', lab.id || '');
            labCard.setAttribute('data-lab-category', lab.category || '');

            // 优化后的卡片内容（添加字体图标）
            labCard.innerHTML = `
                <div class="lab-card-header">
                    <h3 class="lab-card-title">${escapeHtml(lab.name)}</h3>
                    <span class="lab-card-category">${escapeHtml(lab.category)}</span>
                </div>
                <div class="lab-card-body">
                    <p class="lab-card-info">${lab.intro ? escapeHtml(lab.intro) : '暂无研究方向介绍'}</p>
                </div>
                <div class="lab-card-footer">
                    <div class="lab-card-contact">
                        <i class="fas fa-user"></i>
                        <span>${escapeHtml(lab.contactPerson)}</span>
                    </div>
                    <div class="lab-card-location">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${escapeHtml(lab.location)}</span>
                    </div>
                </div>
            `;

            // 点击打开弹窗
            labCard.addEventListener('click', function() {
                openLabModal(lab);
            });

            labList.appendChild(labCard);
        });
    }

    /**
     * 打开实验室详情弹窗（适配优化后的弹窗样式）
     */
    function openLabModal(lab) {
        if (!labModal) return;

        // 填充内容
        document.getElementById('modalLabName').textContent = escapeHtml(lab.name || '未知实验室');
        document.getElementById('modalLabCategory').textContent = escapeHtml(lab.category || '未分类');
        document.getElementById('modalLabLocation').textContent = escapeHtml(lab.location || '未提供地址');
        document.getElementById('modalLabPerson').textContent = escapeHtml(lab.contactPerson || '未提供联系人');
        
        // 处理联系方式
        const contactElem = document.getElementById('modalLabContact');
        const contactInfo = lab.contactInfo || '未提供联系方式';
        contactElem.textContent = escapeHtml(contactInfo);
        
        if (contactInfo.includes('@')) {
            contactElem.href = `mailto:${contactInfo}`;
            contactElem.innerHTML = `<i class="fas fa-envelope"></i> ${escapeHtml(contactInfo)}`;
        } else if (contactInfo.match(/\d{11}/)) {
            contactElem.href = `tel:${contactInfo}`;
            contactElem.innerHTML = `<i class="fas fa-phone"></i> ${escapeHtml(contactInfo)}`;
        } else {
            contactElem.href = '';
            contactElem.style.pointerEvents = 'none';
            contactElem.innerHTML = escapeHtml(contactInfo);
        }

        // 填充研究方向和成果
        document.getElementById('modalLabIntro').textContent = escapeHtml(lab.intro || '暂无详细研究方向介绍');
        document.getElementById('modalLabAchievement').textContent = escapeHtml(lab.achievement || '暂无科研成果介绍');
        
        // 处理成果链接
        const linkElem = document.getElementById('modalLabLink');
        if (lab.achievementLink && lab.achievementLink !== '#' && lab.achievementLink.startsWith('http')) {
            linkElem.style.display = 'inline-flex';
            linkElem.href = lab.achievementLink;
        } else {
            linkElem.style.display = 'none';
        }

        // 显示弹窗
        labModal.style.display = 'flex';
    }

    /**
     * HTML转义（防XSS）
     */
    function escapeHtml(str) {
        if (typeof str !== 'string') return '';
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }
});