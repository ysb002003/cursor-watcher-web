(() => {
  const dict = {
    zh: {
      skip: "跳到主要内容",
      brandTag: "Agent Manager",
      navFeatures: "功能",
      navGallery: "界面",
      navHow: "用法",
      navFaq: "常见问题",
      navDownload: "下载",
      heroEyebrow: "Windows · Cursor IDE · Multi-Agent",
      heroLead: "同时跑多个 Cursor Agent？在一个窗口里看状态、发指令、收通知。",
      ctaDownload: "下载最新版",
      ctaExplore: "了解功能",
      heroMeta: ["Windows 10 / 11", "中英界面", "GitHub Releases 更新"],
      featuresTitle: "为并行 Agent 工作流设计",
      featuresSub: "发现实例、看清状态、直接发命令——少切窗口，多做决策。",
      f1Title: "多实例监控",
      f1Body: "自动发现正在运行的 Cursor，按项目展示 Agent 状态：工作中、等待确认、已完成。",
      f2Title: "一键发指令",
      f2Body: "选中 Agent 后，在命令面板直接发送下一条任务，无需来回切换 Cursor 窗口。",
      f3Title: "完成即通知",
      f3Body: "任务结束弹出 Windows 通知，后台跑 Agent 时也能及时回看结果。",
      f4Title: "进行中浮窗",
      f4Body: "浮层汇总进行中的对话，便于跨项目盯进度。",
      f5Title: "用量一览",
      f5Body: "仪表盘展示 Cursor 用量概览，并行工作时心里有数。",
      f6Title: "工具快捷入口",
      f6Body: "常用在线工具与业务系统集中打开，减少书签跳跃。",
      galleryTitle: "真实界面",
      gallerySub: "仪表盘、命令面板与工具页——工作流一屏可见。",
      capCommand: "命令面板：选中 Agent 后直接下发任务",
      capTools: "工具页：常用工具与业务系统一键打开",
      howTitle: "三步开始",
      howSub: "安装后即可监控本机已打开的 Cursor。",
      s1Title: "下载安装",
      s1Body: "从 GitHub Releases 获取最新 Windows 安装包或可执行文件。",
      s2Title: "打开 Cursor",
      s2Body: "照常启动一个或多个 Cursor 项目；Watcher 会自动发现实例。",
      s3Title: "统一指挥",
      s3Body: "在仪表盘筛选状态、选择 Agent、发送命令，并用通知跟踪完成情况。",
      dlTitle: "获取 Cursor Watcher",
      dlSub: "公开发布与更新检查均通过本仓库 Releases 提供。",
      ctaRepo: "查看仓库",
      faqTitle: "常见问题",
      faqSub: "给搜索引擎与 AI 助手的清晰事实说明。",
      q1: "Cursor Watcher 是什么？",
      a1: "Windows 桌面工具，用于统一查看与控制多个 Cursor IDE / Agent 实例：状态监控、发送指令、完成通知与用量概览。",
      q2: "适合谁用？",
      a2: "需要同时跑多个 Cursor Agent、不想在多个窗口间来回切换的开发者。",
      q3: "支持哪些系统？",
      a3: "Windows 10 / Windows 11。应用基于 .NET / WPF。",
      q4: "如何下载与更新？",
      a4: "请访问 GitHub Releases 最新版页面。应用也可通过该公开仓库检查更新。",
      q5: "源代码仓库是公开的吗？",
      a5: "本站与发布包托管在公开仓库 cursor-watcher-web。产品源代码仓库可保持私有。",
      footerTag: "Multi-Agent Manager for Cursor IDE",
      footerNote: "Cursor 是 Anysphere 的产品；Cursor Watcher 为独立第三方桌面工具。",
      altDashboard: "Cursor Watcher 仪表盘：多个 Agent 卡片与状态筛选",
      altCommand: "命令面板：向选中的 Cursor Agent 发送指令",
      altTools: "工具页：常用在线工具与业务系统入口",
      documentTitle: "Cursor Watcher — 多 Cursor Agent 统一管理 | Multi-Agent Manager for Cursor",
    },
    en: {
      skip: "Skip to content",
      brandTag: "Agent Manager",
      navFeatures: "Features",
      navGallery: "Screens",
      navHow: "How to",
      navFaq: "FAQ",
      navDownload: "Download",
      heroEyebrow: "Windows · Cursor IDE · Multi-Agent",
      heroLead: "Running multiple Cursor Agents? See status, send commands, and get notified—from one window.",
      ctaDownload: "Download latest",
      ctaExplore: "Explore features",
      heroMeta: ["Windows 10 / 11", "Chinese & English UI", "Updates via GitHub Releases"],
      featuresTitle: "Built for parallel Agent workflows",
      featuresSub: "Discover instances, read status, send the next command—fewer window switches, clearer decisions.",
      f1Title: "Multi-instance monitoring",
      f1Body: "Automatically discovers running Cursor windows and shows Agent status by project: working, awaiting confirmation, completed.",
      f2Title: "Send commands in place",
      f2Body: "Select an Agent and send the next task from the command panel—no hopping between Cursor windows.",
      f3Title: "Done notifications",
      f3Body: "Windows toast alerts when a task finishes, so background Agents stay visible.",
      f4Title: "In-progress overlay",
      f4Body: "A floating overlay summarizes active chats across projects.",
      f5Title: "Usage overview",
      f5Body: "Dashboard usage bars help you keep parallel work under control.",
      f6Title: "Tools shortcuts",
      f6Body: "Open common online tools and business systems from one place.",
      galleryTitle: "Real product UI",
      gallerySub: "Dashboard, command panel, and tools—your workflow in one glance.",
      capCommand: "Command panel: dispatch tasks to the selected Agent",
      capTools: "Tools page: open utilities and systems in one click",
      howTitle: "Start in three steps",
      howSub: "After install, Watcher monitors Cursor windows already open on your PC.",
      s1Title: "Download & install",
      s1Body: "Get the latest Windows package from GitHub Releases.",
      s2Title: "Open Cursor",
      s2Body: "Launch one or more Cursor projects as usual—Watcher discovers them automatically.",
      s3Title: "Command from one place",
      s3Body: "Filter status, pick an Agent, send commands, and track completion with notifications.",
      dlTitle: "Get Cursor Watcher",
      dlSub: "Public releases and in-app update checks use this repository’s Releases.",
      ctaRepo: "View repository",
      faqTitle: "FAQ",
      faqSub: "Clear facts for search engines and AI assistants.",
      q1: "What is Cursor Watcher?",
      a1: "A Windows desktop app to monitor and control multiple Cursor IDE / Agent instances: status, commands, completion notifications, and usage overview.",
      q2: "Who is it for?",
      a2: "Developers who run several Cursor Agents in parallel and want one control surface instead of constant window switching.",
      q3: "Which platforms are supported?",
      a3: "Windows 10 and Windows 11. The app is built with .NET / WPF.",
      q4: "How do I download and update?",
      a4: "Use the GitHub Releases latest page. The app can also check updates against this public repository.",
      q5: "Is the source repository public?",
      a5: "This site and release packages live in the public cursor-watcher-web repo. The product source repo can stay private.",
      footerTag: "Multi-Agent Manager for Cursor IDE",
      footerNote: "Cursor is a product of Anysphere. Cursor Watcher is an independent third-party desktop tool.",
      altDashboard: "Cursor Watcher dashboard with Agent cards and status filters",
      altCommand: "Command panel sending instructions to a selected Cursor Agent",
      altTools: "Tools page with shortcuts to online utilities and business systems",
      documentTitle: "Cursor Watcher — Multi-Agent Manager for Cursor IDE",
    },
  };

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const params = new URLSearchParams(window.location.search);
  const saved = localStorage.getItem("cw-lang");
  const initial = params.get("lang") === "en" || saved === "en" ? "en" : "zh";

  applyLang(initial);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.getAttribute("data-lang") === "en" ? "en" : "zh";
      applyLang(lang);
      localStorage.setItem("cw-lang", lang);
      const url = new URL(window.location.href);
      if (lang === "en") url.searchParams.set("lang", "en");
      else url.searchParams.delete("lang");
      history.replaceState({}, "", url);
    });
  });

  function applyLang(lang) {
    const pack = dict[lang] || dict.zh;
    document.documentElement.lang = lang === "en" ? "en" : "zh-CN";
    document.title = pack.documentTitle;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && pack[key] != null) el.textContent = pack[key];
    });

    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (key && pack[key] != null) el.setAttribute("alt", pack[key]);
    });

    document.querySelectorAll("[data-i18n-list]").forEach((el) => {
      const key = el.getAttribute("data-i18n-list");
      const items = pack[key];
      if (!Array.isArray(items)) return;
      el.innerHTML = "";
      items.forEach((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        el.appendChild(li);
      });
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("is-active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }
})();
