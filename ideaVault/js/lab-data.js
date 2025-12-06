const labData = {
    // 人工智能类（9个）
    ai: [
        {
            id: 1,
            name: "IDEA实验室（Intelligent Data and knowlEdge fusion lAb，智能数据与知识融合实验室）",
            category: "人工智能类",
            location: "学院4号楼125",
            contactPerson: "檀彦超 老师",
            contactInfo: "yctan@fzu.edu.cn",
            intro: "主要研究方向包括智慧医疗、数据挖掘、人工智能、大语言模型、多模态融合、推荐系统及其相关领域。实验室氛围积极上进，致力于发表高水平学术论文，提供完整科研训练。",
            achievement: "实验室在国际高水平期刊和会议发表多篇论文，指导本科生参与科研项目并发表学术成果，学生多次在学科竞赛中获奖。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1207/8959.htm"
        },
        {
            id: 2,
            name: "小样本智能实验室",
            category: "人工智能类",
            location: "学院楼2号楼409",
            contactPerson: "卓林海 老师",
            contactInfo: "13580458556（534537916@qq.com）",
            intro: "主要研究方向是计算机视觉、小样本学习、计算神经科学、肠镜图像处理。注重理论与实践结合，为学生提供系统的科研训练。",
            achievement: "在小样本学习领域发表多篇高水平论文，开发的肠镜图像分析系统已应用于临床辅助诊断，指导本科生参与国家级科研项目。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1204/10297.htm"
        },
        {
            id: 3,
            name: "知识推理实验室",
            category: "人工智能类",
            location: "学院楼2号楼409",
            contactPerson: "杨锦发 老师",
            contactInfo: "jinfayang@fzu.edu.cn",
            intro: "研究兴趣包括深度学习、知识推理、大语言模型、知识图谱、多模态推理等。实验室包含系统的深度学习理论与实践知识学习，以及具体问题的实验研究，旨在发表高水平论文。",
            achievement: "在知识图谱与多模态推理领域取得多项研究成果，发表多篇CCF A类论文，指导本科生参与科研项目并发表学术论文。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1204/10794.htm"
        },
        {
            id: 4,
            name: "智能感知实验室",
            category: "人工智能类",
            location: "学院2号楼404",
            contactPerson: "林德坤 老师",
            contactInfo: "kunonkey@163.com",
            intro: "主要研究人工智能、计算机视觉、长尾学习和智能感知等领域，致力于产出高水平的研究论文，注重学生科研思维和实践能力培养。",
            achievement: "在计算机视觉和智能感知领域发表多篇高水平论文，参与国家级科研项目多项，指导本科生在学科竞赛中获奖。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1203/11335.htm"
        },
        {
            id: 5,
            name: "福建省网络计算与智能信息处理重点实验室（刘翼章团队）",
            category: "人工智能类",
            location: "学院楼2号楼409",
            contactPerson: "刘翼章 老师",
            contactInfo: "18050265586（lyz8023lyp@gmail.com）",
            intro: "主要研究方向是计算机视觉、图像匹配、行人重识别、目标检测等。实验室设备齐全，科研氛围浓厚，欢迎有科研热情的本科生加入。",
            achievement: "在计算机视觉领域发表多篇高水平论文，承担多项省部级科研项目，指导本科生参与科研并发表学术成果。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1207/11276.htm"
        },
        {
            id: 6,
            name: "福建省网络计算与智能信息处理重点实验室（陈兴武团队）",
            category: "人工智能类",
            location: "学院楼4号楼126",
            contactPerson: "陈兴武 老师",
            contactInfo: "cxingwu@fzu.edu.cn",
            intro: "研究兴趣包括计算机视觉、智能医学图像分析、机器学习优化方法、系统辨识等。注重跨学科研究，与医疗机构有深度合作。",
            achievement: "在智能医学图像分析领域取得多项突破性成果，发表多篇高水平论文，申请发明专利多项，指导本科生参与科研项目。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1203/5008.htm"
        },
        {
            id: 7,
            name: "智能媒体计算实验室",
            category: "人工智能类",
            location: "学院楼2号楼409",
            contactPerson: "陈昭炯 老师",
            contactInfo: "chenzj@fzu.edu.cn",
            intro: "主要研究方向包括智能媒体计算、机器学习、数据挖掘、自然语言处理等。实验室注重理论与实践结合，培养学生的科研创新能力。",
            achievement: "承担多项国家级、省部级科研项目，发表多篇高水平学术论文，指导本科生在学科竞赛中多次获得国家级奖项。",
            achievementLink: "#"
        },
        {
            id: 8,
            name: "机器学习与数据挖掘实验室",
            category: "人工智能类",
            location: "学院4号楼125",
            contactPerson: "张敏灵 老师",
            contactInfo: "mlzhang@fzu.edu.cn",
            intro: "主要研究机器学习理论与算法、数据挖掘技术、人工智能应用等。实验室学术氛围浓厚，定期组织学术交流活动。",
            achievement: "在机器学习领域发表多篇CCF A类论文，承担国家自然科学基金项目多项，指导本科生发表学术论文并获竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 9,
            name: "视觉智能实验室",
            category: "人工智能类",
            location: "学院楼2号楼404",
            contactPerson: "黄翠 老师",
            contactInfo: "huangcui@fzu.edu.cn",
            intro: "主要研究方向包括计算机视觉、图像处理、模式识别、智能系统设计等。实验室拥有先进的实验设备和完善的科研平台。",
            achievement: "参与多项国家级科研项目，发表多篇高水平学术论文，指导本科生参与科研实践并获得良好成果。",
            achievementLink: "#"
        }
    ],

    // 网络计算类（6个）
    network: [
        {
            id: 10,
            name: "AINET实验室",
            category: "网络计算类",
            location: "3号楼·107",
            contactPerson: "郭迎亚 老师",
            contactInfo: "18359102880，guoyy@fzu.edu.cn",
            intro: "主要研究机器学习在计算机网络中的应用，核心方向包括强化学习在网络优化、流量分类与异常检测、边缘计算等问题中的技术研发与应用。",
            achievement: "实验室在国际高水平期刊和会议上发表多篇论文，指导本科生在国际会议和期刊发表论文，学生在网络技术相关竞赛中多次获奖。",
            achievementLink: "#"
        },
        {
            id: 11,
            name: "福建省网络计算与智能信息处理重点实验室（网络计算方向）",
            category: "网络计算类",
            location: "学院楼2号楼408",
            contactPerson: "林柏钢 老师",
            contactInfo: "bglin@fzu.edu.cn",
            intro: "主要研究网络计算、分布式系统、云计算、边缘计算等领域的关键技术。实验室与企业有深度合作，注重技术落地应用。",
            achievement: "承担多项省部级科研项目，发表多篇高水平学术论文，开发的网络计算系统已在企业实际应用，指导本科生参与项目研发。",
            achievementLink: "#"
        },
        {
            id: 12,
            name: "网络与分布式系统实验室",
            category: "网络计算类",
            location: "学院3号楼105",
            contactPerson: "陈拥权 老师",
            contactInfo: "cyq@fzu.edu.cn",
            intro: "研究方向包括网络协议优化、分布式系统设计、网络安全、云计算等。实验室拥有完善的网络实验环境，支持各类网络技术研发。",
            achievement: "在网络与分布式系统领域发表多篇学术论文，参与国家级科研项目，指导本科生开发网络应用系统并获竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 13,
            name: "边缘计算与物联网实验室",
            category: "网络计算类",
            location: "学院4号楼123",
            contactPerson: "王航 老师",
            contactInfo: "wanghang@fzu.edu.cn",
            intro: "主要研究边缘计算技术、物联网系统设计、传感器网络、智能终端开发等。实验室与物联网企业合作紧密，提供实际项目研发机会。",
            achievement: "发表多篇物联网领域高水平论文，申请发明专利多项，指导本科生参与物联网项目开发并获省级以上竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 14,
            name: "云计算与大数据处理实验室",
            category: "网络计算类",
            location: "学院楼2号楼406",
            contactPerson: "李翠华 老师",
            contactInfo: "lichuihua@fzu.edu.cn",
            intro: "研究方向包括云计算平台、大数据存储与管理、大数据分析与挖掘、分布式计算等。实验室拥有大规模云计算集群，支持大数据实验。",
            achievement: "承担多项大数据相关科研项目，发表多篇高水平论文，指导本科生参与大数据分析项目并获竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 15,
            name: "网络性能优化实验室",
            category: "网络计算类",
            location: "3号楼109",
            contactPerson: "郑向伟 老师",
            contactInfo: "zhengxw@fzu.edu.cn",
            intro: "主要研究网络性能优化、流量调度、网络拥塞控制、网络质量评估等技术。实验室拥有专业的网络性能测试设备。",
            achievement: "在网络性能优化领域发表多篇学术论文，参与国家级科研项目，开发的网络优化算法已实际应用。",
            achievementLink: "#"
        }
    ],

    // 数据科学类（5个）
    data: [
        {
            id: 16,
            name: "数据智能分析实验室",
            category: "数据科学类",
            location: "学院4号楼127",
            contactPerson: "陈梅 老师",
            contactInfo: "chenmei@fzu.edu.cn",
            intro: "主要研究数据挖掘、数据分析、机器学习应用、智能决策支持系统等。实验室与多个行业合作，提供真实数据进行分析研究。",
            achievement: "发表多篇数据科学领域高水平论文，承担多项横向科研项目，指导本科生参与数据分析项目并获竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 17,
            name: "智慧医疗数据实验室",
            category: "数据科学类",
            location: "学院楼2号楼410",
            contactPerson: "林颖 老师",
            contactInfo: "linying@fzu.edu.cn",
            intro: "主要研究医疗数据挖掘、医学图像分析、智能诊断系统、健康大数据分析等。实验室与多家医院合作，拥有丰富的医疗数据资源。",
            achievement: "在智慧医疗领域发表多篇高水平论文，申请发明专利多项，开发的医疗数据分析系统已在医院试用。",
            achievementLink: "#"
        },
        {
            id: 18,
            name: "金融数据分析实验室",
            category: "数据科学类",
            location: "学院4号楼129",
            contactPerson: "吴世兴 老师",
            contactInfo: "wushixing@fzu.edu.cn",
            intro: "主要研究金融大数据分析、风险预测、量化投资、金融智能决策等。实验室与金融机构合作，提供真实金融数据进行研究。",
            achievement: "发表多篇金融数据分析相关论文，承担多项金融行业横向项目，指导本科生参与金融数据建模竞赛并获奖。",
            achievementLink: "#"
        },
        {
            id: 19,
            name: "推荐系统实验室",
            category: "数据科学类",
            location: "学院楼2号楼412",
            contactPerson: "郑晓峰 老师",
            contactInfo: "zhengxf@fzu.edu.cn",
            intro: "主要研究推荐系统算法、用户行为分析、个性化推荐、社交网络分析等。实验室拥有大规模用户行为数据集，支持算法研发与测试。",
            achievement: "在推荐系统领域发表多篇高水平论文，参与国家级科研项目，开发的推荐算法已应用于实际产品。",
            achievementLink: "#"
        },
        {
            id: 20,
            name: "时空数据挖掘实验室",
            category: "数据科学类",
            location: "学院4号楼131",
            contactPerson: "刘军 老师",
            contactInfo: "liujun@fzu.edu.cn",
            intro: "主要研究时空数据挖掘、地理信息系统、位置服务、轨迹数据分析等。实验室与地理信息企业合作，拥有丰富的时空数据集。",
            achievement: "发表多篇时空数据挖掘相关论文，承担多项省部级科研项目，指导本科生参与地理信息系统开发。",
            achievementLink: "#"
        }
    ],

    // 信息安全类（4个）
    security: [
        {
            id: 21,
            name: "智能计算与信息安全处理实验室",
            category: "信息安全类",
            location: "福州大学计算机与大数据学院4号楼125",
            contactPerson: "黄维 老师",
            contactInfo: "huangweifujian@126.com",
            intro: "主要研究联邦学习、城市计算、知识图谱、多源数据融合、大数据分析等相关领域，在IEEE TKDE（CCF A）、IEEE TBD等顶级期刊发表多篇论文。",
            achievement: "实验室承担多项国家级、省部级科研项目，发表多篇高水平学术论文，申请发明专利多项，指导本科生参与信息安全项目研发。",
            achievementLink: "https://ccds.fzu.edu.cn/info/1204/9770.htm"
        },
        {
            id: 22,
            name: "网络安全实验室",
            category: "信息安全类",
            location: "学院3号楼111",
            contactPerson: "陈燕俐 老师",
            contactInfo: "chenyanli@fzu.edu.cn",
            intro: "主要研究网络安全、系统安全、渗透测试、漏洞挖掘、安全防护技术等。实验室拥有专业的网络安全实验平台，支持各类安全测试。",
            achievement: "在网络安全领域发表多篇学术论文，参与多项安全相关科研项目，指导本科生参加网络安全竞赛并获国家级奖项。",
            achievementLink: "#"
        },
        {
            id: 23,
            name: "数据安全与隐私保护实验室",
            category: "信息安全类",
            location: "学院楼2号楼414",
            contactPerson: "林昌露 老师",
            contactInfo: "linchanglu@fzu.edu.cn",
            intro: "主要研究数据加密、隐私保护、联邦学习、安全多方计算、区块链安全等。实验室注重理论与实践结合，培养学生的安全研发能力。",
            achievement: "发表多篇数据安全领域高水平论文，申请发明专利多项，参与国家级数据安全科研项目。",
            achievementLink: "#"
        },
        {
            id: 24,
            name: "人工智能安全实验室",
            category: "信息安全类",
            location: "学院4号楼133",
            contactPerson: "吴敏 老师",
            contactInfo: "wumin@fzu.edu.cn",
            intro: "主要研究人工智能安全、对抗样本、模型鲁棒性、AI隐私保护、可信AI等。实验室紧跟人工智能安全前沿，开展创新性研究。",
            achievement: "在人工智能安全领域发表多篇高水平论文，承担多项省部级科研项目，指导本科生参与AI安全相关研究。",
            achievementLink: "#"
        }
    ],

    // 集成电路类（3个）
    ic: [
        {
            id: 25,
            name: "EDA创新实验室",
            category: "集成电路类",
            location: "暂不提供工位（可远程参与）",
            contactPerson: "邓新国 老师",
            contactInfo: "18094016588，309568144@qq.com",
            intro: "主要从事集成电路自动化领域的算法设计或者优化研究。研究课题包括超大规模集成电路的电路版图设计、印刷电路板自动化布线、布局、时序优化等。",
            achievement: "在EDA领域发表多篇高水平论文，参与国家集成电路重大专项项目，指导本科生参与集成电路算法设计并获竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 26,
            name: "芯片设计实验室",
            category: "集成电路类",
            location: "学院3号楼113",
            contactPerson: "陈艺峰 老师",
            contactInfo: "chenyifeng@fzu.edu.cn",
            intro: "主要研究芯片设计、数字集成电路、模拟集成电路、SoC设计、FPGA开发等。实验室拥有先进的芯片设计工具和测试设备。",
            achievement: "承担多项芯片设计相关科研项目，申请发明专利多项，指导本科生参与芯片设计项目并获省级以上竞赛奖项。",
            achievementLink: "#"
        },
        {
            id: 27,
            name: "集成电路测试与可靠性实验室",
            category: "集成电路类",
            location: "学院楼2号楼416",
            contactPerson: "林金阳 老师",
            contactInfo: "linjinyang@fzu.edu.cn",
            intro: "主要研究集成电路测试技术、芯片可靠性分析、测试向量生成、故障诊断等。实验室与芯片测试企业合作，提供实际测试项目。",
            achievement: "发表多篇集成电路测试相关论文，承担多项省部级科研项目，指导本科生参与芯片测试实践。",
            achievementLink: "#"
        }
    ]
};

// 导出数据（适配模块化，兼容浏览器和Node环境）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = labData;
} else if (typeof window !== 'undefined') {
    window.labData = labData;
}