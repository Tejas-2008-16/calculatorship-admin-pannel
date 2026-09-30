
    /* ==========================================================================
       APP STATE & CORE UTILITIES
       ========================================================================== */
    const AppState = {
      isEditingExisting: false,
      editingSlug: '',
      blocks: [],
      draggedIndex: null,
      articles: []
    };

    // Preloaded list of all 56 articles in the repo
    const PRELOADED_ARTICLES = [
  {
    "slug": "50-30-20-rule-india",
    "title": "50/30/20 Budgeting Rule for India",
    "category": "Personal Finance & Budgeting",
    "datePublished": "25 Jun 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "80c-deductions-guide",
    "title": "Section 80C Deductions: Eligible Options, Limits &amp; Rules",
    "category": "Tax & Financial Planning",
    "datePublished": "07 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "best-sip-amount-calculator-guide",
    "title": "How Much SIP Should I Start? The Complete SIP Amount Calculator Guide 2026",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "02 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "capital-gains-tax-india",
    "title": "Capital Gains Tax on Mutual Funds &amp; Stocks in India (2026): STCG &amp; LTCG Rates",
    "category": "Tax & Financial Planning",
    "datePublished": "February 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "child-education-planning",
    "title": "Child Education Planning in India",
    "category": "Goal Planning & Wealth",
    "datePublished": "10 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "cibil-credit-score-improvement-guide",
    "title": "How to Improve CIBIL Score Fast in India (750+ Blueprint)",
    "category": "Loans & Real Estate",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "credit-score-guide-india",
    "title": "Credit Score in India (2026): How to Build &amp; Maintain 750+ CIBIL",
    "category": "Loans & Real Estate",
    "datePublished": "06 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "crypto-vda-tax-india",
    "title": "Crypto & VDA Tax in India: 30% Flat Rate, 1% TDS & ITR Schedule VDA Explained",
    "category": "Tax &amp; Financial Planning",
    "datePublished": "12 Sep 2026",
    "isRepo": true,
    "hasNew": true
  },
  {
    "slug": "debt-free-strategy-india",
    "title": "Debt-Free Strategy for India",
    "category": "Personal Finance & Budgeting",
    "datePublished": "02 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "direct-vs-regular-mutual-funds",
    "title": "Direct vs Regular Mutual Funds: Save Lakhs",
    "category": "Tax & Financial Planning",
    "datePublished": "03 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "elss-tax-saving",
    "title": "ELSS Mutual Funds: 80C Tax Saving Guide",
    "category": "Tax & Financial Planning",
    "datePublished": "07 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "emergency-fund-guide",
    "title": "How to Build an Emergency Fund Using Liquid Mutual Funds",
    "category": "Tax & Financial Planning",
    "datePublished": "2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "epf-vs-ppf-vs-vpf",
    "title": "EPF vs PPF vs VPF: Tax Rules India",
    "category": "Retirement & Pension",
    "datePublished": "24 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "fd-laddering-strategy",
    "title": "FD Laddering Strategy: Maximize Returns",
    "category": "Fixed Income & FDs",
    "datePublished": "15 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "fd-vs-debt-mutual-funds",
    "title": "FD vs Debt Mutual Funds Guide",
    "category": "Fixed Income & FDs",
    "datePublished": "15 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "fire-movement-india",
    "title": "FIRE Movement India: Retire Early Guide",
    "category": "Retirement & Pension",
    "datePublished": "02 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "freelancer-tax-guide-india",
    "title": "Freelancer &amp; Gig Worker Tax Guide India: Advance Tax, Section 44ADA &amp; GST",
    "category": "Tax &amp; Financial Planning",
    "datePublished": "12 Sep 2026",
    "isRepo": true,
    "hasNew": true
  },
  {
    "slug": "gold-vs-mutual-funds",
    "title": "Gold vs Mutual Funds India: SGB & ETF Guide",
    "category": "Goal Planning & Wealth",
    "datePublished": "14 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "health-insurance-80d-tax-deduction-guide",
    "title": "Section 80D Health Insurance Tax Deduction Guide FY 2026-27",
    "category": "Tax & Financial Planning",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "home-loan-prepayment-vs-sip-strategy",
    "title": "Home Loan Prepayment vs SIP Hybrid Strategy",
    "category": "Loans & Real Estate",
    "datePublished": "06 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "how-to-file-itr-1-online-salaried-guide",
    "title": "How to File ITR-1 Online in India: Salaried Investor Guide FY 2026-27",
    "category": "Tax & Financial Planning",
    "datePublished": "08 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "how-to-read-mutual-fund-factsheet",
    "title": "How to Read a Mutual Fund Factsheet: 5 Key Fields That Matter",
    "category": "SIP & Mutual Funds",
    "datePublished": "27 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "how-to-start-sip",
    "title": "How to Start a SIP in India: Complete Beginner Step-by-Step Guide (2026)",
    "category": "SIP & Mutual Funds",
    "datePublished": "January 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "income-tax-slabs-india-2026",
    "title": "Income Tax Slabs in India (FY 2026-27): New vs Old Regime Rates &amp; Rebates",
    "category": "Tax & Financial Planning",
    "datePublished": "March 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "index-funds-vs-active-funds",
    "title": "Index Funds vs Active Mutual Funds in India (2026): SPIVA Data &amp; TER Analysis",
    "category": "SIP & Mutual Funds",
    "datePublished": "February 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "inflation-impact-on-savings-india",
    "title": "How Inflation Destroys Savings in India",
    "category": "Goal Planning & Wealth",
    "datePublished": "14 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "mutual-fund-categories-guide",
    "title": "SEBI's 36 Mutual Fund Categories Explained: Which Type Fits Your Goal?",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "27 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "mutual-fund-categories-india",
    "title": "Mutual Fund Portfolio Construction: Core-Satellite Allocation for Indian Investors",
    "category": "SIP & Mutual Funds",
    "datePublished": "22 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "mutual-fund-exit-strategy-india",
    "title": "When to Exit a Mutual Fund in India",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "30 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "mutual-fund-nav-explained-india",
    "title": "What is NAV in Mutual Funds? Myth Busted",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "30 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "mutual-fund-taxation-india-complete-guide",
    "title": "Mutual Fund Taxation in India 2026: LTCG, STCG, Debt Fund Tax Rules",
    "category": "Tax &amp; Financial Planning",
    "datePublished": "02 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "nifty-50-index-fund-guide-india",
    "title": "Nifty 50 Index Fund: The Beginner's Complete Investment Guide India 2026",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "02 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "nps-guide",
    "title": "NPS Guide: Rules, Tax & Tier I vs II",
    "category": "Retirement & Pension",
    "datePublished": "24 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "nri-investment-rules-india",
    "title": "NRI Investment in India 2026: Rules, Taxes & Repatriation",
    "category": "Tax & Financial Planning",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "old-vs-new-tax-regime",
    "title": "Old vs New Tax Regime in India (FY 2026-27): Complete Comparison Guide",
    "category": "Tax & Financial Planning",
    "datePublished": "February 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "portfolio-rebalancing-guide-india",
    "title": "Portfolio Rebalancing Guide India",
    "category": "Goal Planning & Wealth",
    "datePublished": "18 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "ppf-rules-benefits-wealth-guide",
    "title": "PPF (Public Provident Fund) Rules, Benefits &amp; Compounding Guide (2026)",
    "category": "Fixed Income & FDs",
    "datePublished": "February 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "reits-and-invits-in-india-guide",
    "title": "REITs and InvITs in India: Complete Investor Guide 2026",
    "category": "Goal Planning & Wealth",
    "datePublished": "08 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "retirement-planning-india",
    "title": "Retirement Planning in India (2026): 30x Corpus Rule, Inflation Math &amp; FIRE Guide",
    "category": "Retirement & Pension",
    "datePublished": "February 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "rupee-cost-averaging",
    "title": "Rupee Cost Averaging: How SIPs Beat Timing",
    "category": "SIP & Mutual Funds",
    "datePublished": "22 Jun 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "salary-hike-investment-strategy-india",
    "title": "How to Invest Salary Hike in India",
    "category": "Personal Finance &amp; Budgeting",
    "datePublished": "30 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "scss-vs-fixed-deposit",
    "title": "SCSS vs Senior Citizen Fixed Deposit India 2026 Guide",
    "category": "Fixed Income & FDs",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "senior-citizen-fd-rates",
    "title": "Senior Citizen FD Rates & Tax Rules India",
    "category": "Fixed Income & FDs",
    "datePublished": "20 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "sip-mistakes-to-avoid",
    "title": "7 SIP Mistakes Indian Investors Must Avoid",
    "category": "SIP & Mutual Funds",
    "datePublished": "18 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "sip-pause-vs-stop-vs-continue",
    "title": "SIP Pause vs Stop vs Continue",
    "category": "SIP &amp; Mutual Funds",
    "datePublished": "27 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "sip-vs-lumpsum",
    "title": "SIP vs Lumpsum: Which is Better for Indian Mutual Fund Investors? (2026)",
    "category": "SIP & Mutual Funds",
    "datePublished": "January 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "sovereign-gold-bond-guide-india",
    "title": "Sovereign Gold Bond (SGB) Guide India 2026: Tax Exemption &amp; Returns",
    "category": "Goal Planning & Wealth",
    "datePublished": "06 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "step-up-sip-guide",
    "title": "Step-Up SIP Guide: Grow Wealth Faster",
    "category": "SIP & Mutual Funds",
    "datePublished": "29 Jun 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "sukanya-samriddhi-yojana-ssy-guide",
    "title": "Sukanya Samriddhi Yojana (SSY) Guide 2026: Rules & 8.2% Math",
    "category": "Goal Planning & Wealth",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "swp-for-retirement-income-guide",
    "title": "SWP for Retirement Income India: Guide 2026",
    "category": "Retirement & Pension",
    "datePublished": "28 Jul 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "systematic-transfer-plan-stp-guide",
    "title": "Systematic Transfer Plan (STP) Guide India: Safe Lumpsum Deployment",
    "category": "SIP & Mutual Funds",
    "datePublished": "08 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "term-insurance-guide-india",
    "title": "Term Insurance in India (2026): Complete Buyer's Guide",
    "category": "Insurance & Protection",
    "datePublished": "06 Sep 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "term-insurance-vs-endowment-plans",
    "title": "Term Insurance vs Endowment Policy India",
    "category": "Goal Planning & Wealth",
    "datePublished": "31 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "the-power-of-compounding",
    "title": "The Power of Compounding: How Small Monthly SIPs Build Multi-Crore Wealth (2026)",
    "category": "SIP & Mutual Funds",
    "datePublished": "January 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "wedding-budget-planning",
    "title": "Wedding Budget Planning India",
    "category": "Goal Planning & Wealth",
    "datePublished": "10 Aug 2026",
    "isRepo": true,
    "hasNew": false
  },
  {
    "slug": "zero-based-budgeting",
    "title": "Zero-Based Budgeting for India",
    "category": "Personal Finance & Budgeting",
    "datePublished": "29 Jun 2026",
    "isRepo": true,
    "hasNew": false
  }
];

    function utf8ToBase64(str) {
      return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, (m, p) => String.fromCharCode('0x' + p)));
    }

    function base64ToUtf8(b64) {
      return decodeURIComponent(Array.prototype.map.call(atob(b64.replace(/\s+/g, '')), c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
    }

    function getSettings() {
      const stored = localStorage.getItem('calcAdminSettings');
      let cfg = {};
      if (stored) { try { cfg = JSON.parse(stored); } catch(e) {} }
      return {
        token: cfg.token || GITHUB_CONFIG.token,
        owner: cfg.owner || GITHUB_CONFIG.owner,
        repo: cfg.repo || GITHUB_CONFIG.repo,
        branch: cfg.branch || GITHUB_CONFIG.branch || 'main',
        ga4: cfg.ga4 || 'G-0C93Q0VBQP',
        localServer: cfg.localServer !== false  // default true
      };
    }

    /* ── Local Sync Server Helpers ─────────────────────────────────────────── */
    const LOCAL_SERVER = 'http://localhost:5050';

    async function localReadFile(path) {
      const res = await fetch(`${LOCAL_SERVER}/read-file`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path })
      });
      if (!res.ok) throw new Error(`local read-file failed for ${path}: HTTP ${res.status}`);
      const d = await res.json();
      return d.content;
    }

    async function localWriteFile(path, content) {
      const res = await fetch(`${LOCAL_SERVER}/write-file`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, content })
      });
      if (!res.ok) throw new Error(`local write-file failed for ${path}: HTTP ${res.status}`);
      return await res.json();
    }

    async function localDeleteFile(path) {
      const res = await fetch(`${LOCAL_SERVER}/delete-file`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path })
      });
      if (!res.ok) throw new Error(`local delete-file failed for ${path}: HTTP ${res.status}`);
      return await res.json();
    }

    async function isLocalServerUp() {
      try {
        const res = await fetch(`${LOCAL_SERVER}/ping`, { signal: AbortSignal.timeout(2000) });
        return res.ok;
      } catch(e) { return false; }
    }

    function saveSettings(cfg) {
      localStorage.setItem('calcAdminSettings', JSON.stringify(cfg));
    }

    function loadAllArticles() {
      const stored = localStorage.getItem('calcAllArticles');
      if (stored) {
        try {
          const list = JSON.parse(stored);
          if (Array.isArray(list) && list.length > 0) {
            // Merge any preloaded articles that might be missing in stored list
            const existingSlugs = new Set(list.map(a => a.slug));
            let merged = [...list];
            let changed = false;
            for (const item of PRELOADED_ARTICLES) {
              if (!existingSlugs.has(item.slug)) {
                merged.push(item);
                changed = true;
              }
            }
            if (changed) {
              localStorage.setItem('calcAllArticles', JSON.stringify(merged));
            }
            return merged;
          }
        } catch(e) {}
      }
      localStorage.setItem('calcAllArticles', JSON.stringify(PRELOADED_ARTICLES));
      return PRELOADED_ARTICLES;
    }

    function saveAllArticles(list) {
      AppState.articles = list;
      localStorage.setItem('calcAllArticles', JSON.stringify(list));
      document.getElementById('sidebarTotalCount').textContent = list.length;
      renderManageTable();
    }

    /* ==========================================================================
       INITIALIZATION
       ========================================================================== */
    document.addEventListener('DOMContentLoaded', () => {
      AppState.articles = loadAllArticles();
      document.getElementById('sidebarTotalCount').textContent = AppState.articles.length;

      initTopbar();
      initSidebarNav();
      initEditorCanvasListeners();
      initBlockPicker();
      initInlineToolbar();
      initSettingsView();
      renderManageTable();

      // Start with blank layout prefilled with standard starter blocks
      resetCanvasToBlank();
    });

    function initTopbar() {
      document.getElementById('topbarDate').textContent = new Date().toLocaleDateString('en-IN', {
        weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
      });
      document.getElementById('sidebarLogoutBtn').addEventListener('click', doLogout);
      document.getElementById('topbarLogoutBtn').addEventListener('click', doLogout);
    }

    function doLogout() {
      localStorage.removeItem('calcAdminSession');
      window.location.replace('index.html');
    }

    function initSidebarNav() {
      const items = document.querySelectorAll('.sidebar-nav .nav-item');
      items.forEach(btn => {
        btn.addEventListener('click', () => {
          items.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const target = btn.getAttribute('data-target');
          document.querySelectorAll('.view-container').forEach(v => v.classList.remove('active'));
          const targetEl = document.getElementById(target);
          if (targetEl) targetEl.classList.add('active');
          if (target === 'view-manage') renderManageTable();
          if (window.innerWidth <= 900) document.getElementById('sidebar').classList.remove('open');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });

      const hamburger = document.getElementById('hamburgerBtn');
      hamburger.addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('open');
      });
    }

    /* ==========================================================================
       CANVAS & VISUAL EDITOR
       ========================================================================== */
    function initEditorCanvasListeners() {
      // Toggle meta config drawer
      document.getElementById('btnToggleMetadata').addEventListener('click', () => {
        const d = document.getElementById('metaConfigDrawer');
        d.style.display = d.style.display === 'none' ? 'grid' : 'none';
      });

      // Sync Slug
      const slugIn = document.getElementById('metaSlug');
      slugIn.addEventListener('input', () => {
        const clean = slugIn.value.toLowerCase().replace(/[^a-z0-9-]/g, '');
        slugIn.value = clean;
        document.getElementById('currentSlugDisplay').textContent = clean || 'new-article';
      });

      // Sync Title to Breadcrumbs & Card
      const h1 = document.getElementById('articleHeadingH1');
      h1.addEventListener('input', () => {
        const val = h1.innerText.trim();
        document.getElementById('breadcrumbTitle').textContent = val || 'Article Title';
        if (!AppState.isEditingExisting && !slugIn.dataset.manual) {
          const autoSlug = val.toLowerCase().replace(/[^a-z0-9\s-]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
          slugIn.value = autoSlug;
          document.getElementById('currentSlugDisplay').textContent = autoSlug || 'new-article';
        }
      });
      slugIn.addEventListener('keydown', () => slugIn.dataset.manual = 'true');

      // Sync Category
      const catSelect = document.getElementById('metaCategory');
      catSelect.addEventListener('change', () => {
        const cat = catSelect.value;
        document.getElementById('breadcrumbCategory').textContent = cat;
        document.getElementById('headerCategoryTag').textContent = cat;
      });

      // Sync Published Date
      const dateIn = document.getElementById('metaPublishedDate');
      dateIn.addEventListener('input', () => {
        const val = dateIn.value.trim() || '15 Sep 2026';
        document.getElementById('headerDateTag').textContent = `Published: ${val}`;
        document.getElementById('bylinePublishedTag').textContent = `Published: ${val}`;
      });

      // Meta description length
      const descIn = document.getElementById('metaDesc');
      descIn.addEventListener('input', () => {
        document.getElementById('metaDescLength').textContent = `${descIn.value.length} chars (aim for 150-160)`;
      });

      // Reset
      document.getElementById('btnResetCanvas').addEventListener('click', () => {
        if (confirm('Clear the canvas layout?')) resetCanvasToBlank();
      });

      // Publish
      document.getElementById('btnPublishArticle').addEventListener('click', handlePublishFlow);

      // Start New from Manage
      document.getElementById('btnStartNewArticle').addEventListener('click', () => {
        resetCanvasToBlank();
        document.querySelector('[data-target="view-editor"]').click();
      });
    }

    function resetCanvasToBlank() {
      AppState.isEditingExisting = false;
      AppState.editingSlug = '';

      document.getElementById('editorModeBadge').textContent = 'Creating New Article';
      document.getElementById('editorModeBadge').className = 'editor-mode-badge';
      document.getElementById('currentSlugDisplay').textContent = 'new-article';

      document.getElementById('articleHeadingH1').innerText = '';
      document.getElementById('articleSubtitleP').innerText = '';
      document.getElementById('breadcrumbTitle').textContent = 'Article Title';
      document.getElementById('metaSlug').value = '';
      delete document.getElementById('metaSlug').dataset.manual;

      const todayStr = new Date().toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
      document.getElementById('metaPublishedDate').value = todayStr;
      document.getElementById('headerDateTag').textContent = `Published: ${todayStr}`;
      document.getElementById('bylinePublishedTag').textContent = `Published: ${todayStr}`;

      document.getElementById('metaCardDesc').value = '';
      document.getElementById('metaDesc').value = '';
      document.getElementById('metaDescLength').textContent = '0 chars';

      // Provide starter blocks so canvas is immediately ready for editing
      AppState.blocks = [
        { id: 'blk_start_1', type: 'takeaways', data: { items: ['Key takeaway 1 for this guide', 'Key takeaway 2', 'Key takeaway 3'] } },
        { id: 'blk_start_2', type: 'h2', data: { text: 'Overview & Fundamentals' } },
        { id: 'blk_start_3', type: 'p', data: { html: 'Write your comprehensive article introduction here...' } }
      ];

      renderCanvasBlocks();
    }

    /* ==========================================================================
       BLOCK MANAGEMENT & DRAG AND DROP
       ========================================================================== */
    function initBlockPicker() {
      const openBtn = document.getElementById('openBlockPickerBtn');
      const closeBtn = document.getElementById('closeBlockPickerBtn');
      const overlay = document.getElementById('blockPickerOverlay');

      if (!openBtn || !closeBtn || !overlay) {
        console.error('Block picker elements missing from DOM:', { openBtn, closeBtn, overlay });
        return;
      }

      openBtn.addEventListener('click', () => overlay.classList.add('open'));
      closeBtn.addEventListener('click', () => overlay.classList.remove('open'));
      overlay.addEventListener('click', e => { if (e.target === overlay) overlay.classList.remove('open'); });

      document.querySelectorAll('.picker-item').forEach(item => {
        item.addEventListener('click', () => {
          const type = item.getAttribute('data-type');
          addBlock(type);
          overlay.classList.remove('open');
        });
      });
    }

    function addBlock(type) {
      const id = 'blk_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5);
      let data = {};

      switch(type) {
        case 'h2': data = { text: 'Section Heading' }; break;
        case 'h3': data = { text: 'Sub-Section Heading' }; break;
        case 'p': data = { html: 'Write your comprehensive explanation here...' }; break;
        case 'takeaways': data = { items: ['Key takeaway point 1', 'Key takeaway point 2', 'Key takeaway point 3'] }; break;
        case 'bullets': data = { items: ['Bullet point 1', 'Bullet point 2', 'Bullet point 3'] }; break;
        case 'numbered': data = { items: ['Step 1: First point', 'Step 2: Second point', 'Step 3: Third point'] }; break;
        case 'table':
          data = {
            hasHeader: true,
            rows: [
              ['Parameter', 'Option A', 'Option B'],
              ['Lock-in Period', 'None (Liquid)', '3 Years'],
              ['Tax Exemption', 'Slab Rate', '100% Tax-Free']
            ]
          };
          break;
        case 'faq': data = { q: 'Frequently asked question?', a: 'Clear, factual answer for Indian investors.' }; break;
        case 'image': data = { url: '', alt: '', caption: '' }; break;
        case 'button': data = { label: 'Explore SIP Calculator &rarr;', url: 'index.html', newTab: false }; break;
        case 'divider': data = {}; break;
        case 'callout': data = { text: 'Important: Verify against official CBDT circulars before making tax decisions.' }; break;
        case 'code': data = { text: 'A = P * (1 + r/n)^(n*t)' }; break;
      }

      AppState.blocks.push({ id, type, data });
      renderCanvasBlocks();
    }

    function deleteBlock(id) {
      AppState.blocks = AppState.blocks.filter(b => b.id !== id);
      renderCanvasBlocks();
    }

    function renderCanvasBlocks() {
      const container = document.getElementById('blocksCanvas');
      container.innerHTML = '';

      AppState.blocks.forEach((block, index) => {
        const wrap = document.createElement('div');
        wrap.className = 'canvas-block-wrapper';
        wrap.draggable = true;
        wrap.dataset.index = index;

        // Header with drag handle and delete button
        const handleRow = document.createElement('div');
        handleRow.className = 'block-handle-row';
        handleRow.innerHTML = `
          <span class="block-drag-title">⠿ ${getBlockTypeName(block.type)} (#${index + 1})</span>
          <button type="button" class="block-del-button" title="Delete block" onclick="deleteBlock('${block.id}')">&times;</button>
        `;

        // Content Area
        const contentArea = document.createElement('div');
        renderBlockInsideCanvas(contentArea, block);

        wrap.appendChild(handleRow);
        wrap.appendChild(contentArea);

        // Native Drag-and-Drop
        wrap.addEventListener('dragstart', (e) => {
          AppState.draggedIndex = index;
          wrap.classList.add('dragging');
          e.dataTransfer.effectAllowed = 'move';
        });

        wrap.addEventListener('dragend', () => {
          wrap.classList.remove('dragging');
          document.querySelectorAll('.canvas-block-wrapper').forEach(b => b.classList.remove('drag-over'));
        });

        wrap.addEventListener('dragover', (e) => {
          e.preventDefault();
          wrap.classList.add('drag-over');
        });

        wrap.addEventListener('dragleave', () => wrap.classList.remove('drag-over'));

        wrap.addEventListener('drop', (e) => {
          e.preventDefault();
          wrap.classList.remove('drag-over');
          const from = AppState.draggedIndex;
          const to = index;
          if (from !== null && from !== to) {
            const moved = AppState.blocks.splice(from, 1)[0];
            AppState.blocks.splice(to, 0, moved);
            renderCanvasBlocks();
          }
        });

        container.appendChild(wrap);
      });
    }

    function getBlockTypeName(t) {
      const names = {
        h2: 'Heading H2', h3: 'Heading H3', p: 'Paragraph',
        takeaways: 'Key Takeaways', bullets: 'Bullet List', numbered: 'Numbered List',
        table: 'Comparison Table', faq: 'FAQ Q&A Pair', image: 'Image',
        button: 'CTA Button', divider: 'Divider', callout: 'Quote / Callout', code: 'Formula / Code'
      };
      return names[t] || 'Block';
    }

    function renderBlockInsideCanvas(container, block) {
      const d = block.data;
      switch(block.type) {
        case 'h2':
          container.innerHTML = `<h2 class="block-h2-text" contenteditable="true" placeholder="H2 Section Heading...">${escapeHtml(d.text)}</h2>`;
          container.querySelector('h2').addEventListener('input', e => d.text = e.target.innerText);
          break;
        case 'h3':
          container.innerHTML = `<h3 class="block-h3-text" contenteditable="true" placeholder="H3 Sub-Heading...">${escapeHtml(d.text)}</h3>`;
          container.querySelector('h3').addEventListener('input', e => d.text = e.target.innerText);
          break;
        case 'p':
          container.innerHTML = `<div class="block-p-text content-editable-target" contenteditable="true" placeholder="Write paragraph body text...">${d.html || ''}</div>`;
          container.querySelector('div').addEventListener('input', e => d.html = e.target.innerHTML);
          break;
        case 'takeaways':
          container.innerHTML = `
            <div class="key-takeaways-box">
              <h4 style="color:var(--emerald-dark); font-weight:800; font-size:1.05rem; margin-bottom:8px;">Key Takeaways</h4>
              <div class="content-editable-target" contenteditable="true">${(d.items || []).map(i => `<div>• ${escapeHtml(i)}</div>`).join('')}</div>
            </div>`;
          container.querySelector('.content-editable-target').addEventListener('input', e => {
            d.items = e.target.innerText.split('\n').map(l => l.replace(/^[•\-\*\s]+/, '').trim()).filter(Boolean);
          });
          break;
        case 'bullets':
          container.innerHTML = `<ul class="content-editable-target" contenteditable="true" style="padding-left:22px; line-height:1.8;">${(d.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ul>`;
          container.querySelector('ul').addEventListener('input', e => {
            d.items = Array.from(e.target.querySelectorAll('li')).map(li => li.innerText.trim()).filter(Boolean);
          });
          break;
        case 'numbered':
          container.innerHTML = `<ol class="content-editable-target" contenteditable="true" style="padding-left:22px; line-height:1.8;">${(d.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('')}</ol>`;
          container.querySelector('ol').addEventListener('input', e => {
            d.items = Array.from(e.target.querySelectorAll('li')).map(li => li.innerText.trim()).filter(Boolean);
          });
          break;
        case 'table':
          renderTableBlockEditor(container, block);
          break;
        case 'faq':
          container.innerHTML = `
            <details class="faq-item canvas-faq-interactive" open style="background:var(--bg-elevated); border:1px solid var(--border-soft); border-radius:8px; padding:14px 18px; margin-bottom:12px; transition:all 0.2s ease;">
              <summary style="font-weight:700; cursor:pointer; color:var(--text-primary); font-size:1.02rem; display:flex; align-items:center; justify-content:space-between; user-select:none;">
                <span class="faq-q-text" contenteditable="true" placeholder="Click to type FAQ Question here..." style="outline:none; cursor:text; flex:1; padding-right:10px;">${escapeHtml(d.q || '')}</span>
                <span style="font-size:0.8rem; color:var(--text-muted); pointer-events:none;">▼</span>
              </summary>
              <div style="margin-top:12px; padding-top:10px; border-top:1px dashed var(--border-soft);">
                <div class="faq-a-text content-editable-target" contenteditable="true" placeholder="Click to type FAQ Answer here..." style="outline:none; font-size:0.95rem; line-height:1.7; color:var(--text-secondary); min-height:40px;">${escapeHtml(d.a || '')}</div>
              </div>
            </details>`;
          const qEl = container.querySelector('.faq-q-text');
          const aEl = container.querySelector('.faq-a-text');
          qEl.addEventListener('input', e => d.q = e.target.innerText);
          aEl.addEventListener('input', e => d.a = e.target.innerText);
          // Allow clicking text to edit without accidentally toggling summary
          qEl.addEventListener('click', e => e.stopPropagation());
          aEl.addEventListener('click', e => e.stopPropagation());
          break;
        case 'image':
          container.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:8px;">
              <input type="url" placeholder="Image URL (ImgBB, Cloudinary, etc.)" value="${escapeHtml(d.url)}" style="padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px;">
              <input type="text" placeholder="Alt text (Required for SEO)" value="${escapeHtml(d.alt)}" style="padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px;">
              <input type="text" placeholder="Optional Caption" value="${escapeHtml(d.caption)}" style="padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px;">
            </div>`;
          const [uIn, aIn, cIn] = container.querySelectorAll('input');
          uIn.addEventListener('input', () => d.url = uIn.value);
          aIn.addEventListener('input', () => d.alt = aIn.value);
          cIn.addEventListener('input', () => d.caption = cIn.value);
          break;
        case 'button':
          container.innerHTML = `
            <div style="display:flex; gap:10px; align-items:center;">
              <input type="text" placeholder="Button Label" value="${escapeHtml(d.label)}" style="padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px; flex:1;">
              <input type="text" placeholder="Target URL" value="${escapeHtml(d.url)}" style="padding:6px 10px; border:1px solid #cbd5e1; border-radius:4px; flex:1;">
            </div>`;
          const [lIn, urlIn] = container.querySelectorAll('input');
          lIn.addEventListener('input', () => d.label = lIn.value);
          urlIn.addEventListener('input', () => d.url = urlIn.value);
          break;
        case 'divider':
          container.innerHTML = `<hr style="border:none; border-top:2px dashed #cbd5e1; margin:8px 0;">`;
          break;
        case 'callout':
          container.innerHTML = `<div class="callout-quote-box content-editable-target" contenteditable="true">${escapeHtml(d.text)}</div>`;
          container.querySelector('div').addEventListener('input', e => d.text = e.target.innerText);
          break;
        case 'code':
          container.innerHTML = `<pre class="code-syntax-box content-editable-target" contenteditable="true">${escapeHtml(d.text)}</pre>`;
          container.querySelector('pre').addEventListener('input', e => d.text = e.target.innerText);
          break;
      }
    }

    function renderTableBlockEditor(container, block) {
      const d = block.data;
      const wrap = document.createElement('div');
      wrap.className = 'table-editor-wrap';

      wrap.innerHTML = `
        <div style="display:flex; gap:8px; margin-bottom:8px;">
          <button type="button" class="btn btn-secondary" style="padding:3px 8px; font-size:0.75rem;" id="btnAddRow">+ Add Row</button>
          <button type="button" class="btn btn-secondary" style="padding:3px 8px; font-size:0.75rem;" id="btnAddCol">+ Add Col</button>
        </div>
      `;

      const table = document.createElement('table');
      d.rows.forEach((row, rIdx) => {
        const tr = document.createElement('tr');
        row.forEach((cell, cIdx) => {
          const isHeader = d.hasHeader && rIdx === 0;
          const el = document.createElement(isHeader ? 'th' : 'td');
          el.contentEditable = 'true';
          el.innerText = cell;
          el.addEventListener('input', () => { d.rows[rIdx][cIdx] = el.innerText; });
          tr.appendChild(el);
        });
        table.appendChild(tr);
      });

      wrap.querySelector('#btnAddRow').addEventListener('click', () => {
        d.rows.push(new Array(d.rows[0].length).fill(''));
        renderCanvasBlocks();
      });

      wrap.querySelector('#btnAddCol').addEventListener('click', () => {
        d.rows.forEach(r => r.push(''));
        renderCanvasBlocks();
      });

      wrap.appendChild(table);
      container.appendChild(wrap);
    }

    /* ==========================================================================
       INLINE FORMATTING TOOLBAR
       ========================================================================== */
    function initInlineToolbar() {
      const toolbar = document.getElementById('inlineToolbar');
      document.addEventListener('selectionchange', () => {
        const sel = window.getSelection();
        if (!sel || sel.isCollapsed || !sel.rangeCount) {
          if (!toolbar.querySelector('.color-presets-dropdown.open')) {
            toolbar.classList.remove('visible');
          }
          return;
        }
        const range = sel.getRangeAt(0);
        const node = range.commonAncestorContainer;
        const target = (node.nodeType === 1 ? node : node.parentElement).closest('[contenteditable="true"]');
        if (target) {
          const rect = range.getBoundingClientRect();
          toolbar.style.top = `${rect.top + window.scrollY - 38}px`;
          toolbar.style.left = `${rect.left + window.scrollX}px`;
          toolbar.classList.add('visible');
        } else {
          if (!toolbar.querySelector('.color-presets-dropdown.open')) {
            toolbar.classList.remove('visible');
          }
        }
      });

      toolbar.querySelectorAll('[data-cmd]').forEach(b => {
        b.addEventListener('mousedown', e => {
          e.preventDefault();
          document.execCommand(b.getAttribute('data-cmd'), false, null);
        });
      });

      document.getElementById('toolbarLinkBtn').addEventListener('mousedown', e => {
        e.preventDefault();
        const url = prompt('Enter Hyperlink URL:', 'https://');
        if (url) document.execCommand('createLink', false, url);
      });

      // Color Wheel & Color Selection Handling
      const colorPickerWrapper = toolbar.querySelector('.color-picker-wrapper');
      const colorPresetsDropdown = document.getElementById('colorPresetsDropdown');
      const colorPickerLabel = document.getElementById('colorPickerLabel');
      const textColorPicker = document.getElementById('textColorPicker');
      const colorPreviewBar = document.getElementById('colorPreviewBar');
      const customWheelTrigger = document.getElementById('customWheelTrigger');

      let savedRange = null;

      function saveSelection() {
        const sel = window.getSelection();
        if (sel && sel.rangeCount > 0) {
          savedRange = sel.getRangeAt(0).cloneRange();
        }
      }

      function restoreSelection() {
        if (savedRange) {
          const sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(savedRange);
        }
      }

      function applyTextColor(color) {
        restoreSelection();
        document.execCommand('foreColor', false, color);
        if (colorPreviewBar) colorPreviewBar.style.background = color;
        if (textColorPicker) textColorPicker.value = color.startsWith('#') && color.length === 7 ? color : textColorPicker.value;
        if (colorPresetsDropdown) colorPresetsDropdown.classList.remove('open');
      }

      // Open/Toggle color presets dropdown
      colorPickerLabel.addEventListener('mousedown', e => {
        e.preventDefault();
        e.stopPropagation();
        saveSelection();
        colorPresetsDropdown.classList.toggle('open');
      });

      // Preset swatch clicked
      toolbar.querySelectorAll('.preset-swatch[data-color]').forEach(swatch => {
        swatch.addEventListener('mousedown', e => {
          e.preventDefault();
          e.stopPropagation();
          const color = swatch.getAttribute('data-color');
          applyTextColor(color);
        });
      });

      // Open custom OS/browser color wheel dialog
      if (customWheelTrigger) {
        customWheelTrigger.addEventListener('mousedown', e => {
          e.preventDefault();
          e.stopPropagation();
          saveSelection();
          colorPresetsDropdown.classList.remove('open');
          textColorPicker.click();
        });
      }

      // Realtime update when picking from custom color wheel
      textColorPicker.addEventListener('input', e => {
        applyTextColor(e.target.value);
      });

      textColorPicker.addEventListener('change', e => {
        applyTextColor(e.target.value);
      });

      // Close preset dropdown when clicking outside
      document.addEventListener('mousedown', e => {
        if (!colorPickerWrapper.contains(e.target)) {
          colorPresetsDropdown.classList.remove('open');
        }
      });
    }

    /* ==========================================================================
       LOAD EXISTING ARTICLE FOR EDITING
       Admin can edit ANY of the 56 existing articles in repo
       ========================================================================== */
    async function loadArticleForEditing(slug) {
      showBanner('info', `Loading <b>${slug}.html</b>...`);
      const cfg = getSettings();

      let htmlContent = '';

      // 1. Try reading directly from local codebase if local server is running
      if (cfg.localServer) {
        try {
          const up = await isLocalServerUp();
          if (up) {
            htmlContent = await localReadFile(`${slug}.html`);
          }
        } catch(e) {
          console.log('Local server read failed, falling back to GitHub/fetch:', e);
        }
      }

      // 2. Fallback: Try fetching via GitHub API
      if (!htmlContent) {
        try {
          if (cfg.token && !cfg.token.includes('PASTE_YOUR')) {
            const res = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${slug}.html?ref=${cfg.branch}`, {
              headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
            });
            if (res.ok) {
              const data = await res.json();
              htmlContent = base64ToUtf8(data.content);
            }
          }
        } catch(e) {}
      }

      // 3. Fallback: fetch directly from local webserver relative path if hosted
      if (!htmlContent) {
        try {
          const localRes = await fetch(`../${slug}.html`);
          if (localRes.ok) htmlContent = await localRes.text();
        } catch(e) {}
      }

      if (!htmlContent) {
        showBanner('error', `Could not fetch content for ${slug}.html. Make sure the local server is running or GitHub Token is configured.`);
        return;
      }

      // Parse HTML elements into the canvas
      AppState.isEditingExisting = true;
      AppState.editingSlug = slug;

      document.getElementById('editorModeBadge').textContent = `Editing: ${slug}.html`;
      document.getElementById('editorModeBadge').className = 'editor-mode-badge editing';
      document.getElementById('currentSlugDisplay').textContent = slug;
      document.getElementById('metaSlug').value = slug;

      // Extract Title
      const titleM = htmlContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
      const title = titleM ? titleM[1].trim() : slug;
      document.getElementById('articleHeadingH1').innerText = title;
      document.getElementById('breadcrumbTitle').textContent = title;

      // Extract Category
      const catM = htmlContent.match(/<span class=["']meta-cat["']>([\s\S]*?)<\/span>/i);
      if (catM) {
        const cat = catM[1].trim();
        document.getElementById('metaCategory').value = cat;
        document.getElementById('breadcrumbCategory').textContent = cat;
        document.getElementById('headerCategoryTag').textContent = cat;
      }

      // Extract Published Date
      const dateM = htmlContent.match(/Published:\s*([A-Za-z0-9\s,-]+?)(?:<|\|)/i);
      if (dateM) {
        const d = dateM[1].trim();
        document.getElementById('metaPublishedDate').value = d;
        document.getElementById('headerDateTag').textContent = `Published: ${d}`;
        document.getElementById('bylinePublishedTag').textContent = `Published: ${d}`;
      }

      // Extract Subtitle paragraph
      const subM = htmlContent.match(/<\/h1>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
      document.getElementById('articleSubtitleP').innerText = subM ? subM[1].trim() : '';

      // Extract Meta Description
      const descM = htmlContent.match(/<meta content=["'](.*?)["']\s+name=["']description["']/i) || htmlContent.match(/<meta name=["']description["']\s+content=["'](.*?)["']/i);
      if (descM) {
        document.getElementById('metaDesc').value = descM[1].trim();
        document.getElementById('metaDescLength').textContent = `${descM[1].trim().length} chars`;
      }

      // Extract Card description from blog or default to subtitle
      const cardObj = AppState.articles.find(a => a.slug === slug);
      document.getElementById('metaCardDesc').value = (cardObj && cardObj.cardDesc) ? cardObj.cardDesc : (subM ? subM[1].trim() : '');

      // Parse article body into blocks
      AppState.blocks = [];
      const bodyM = htmlContent.match(/<article class=["']article-main["'][^>]*>([\s\S]*?)(?:<div class=["']author-bio-card["']|<div class=["']article-footer-disclaimer["']|<\/article>)/i);
      if (bodyM) {
        const rawBody = bodyM[1];
        parseHtmlBodyToBlocks(rawBody);
      }

      renderCanvasBlocks();
      document.querySelector('[data-target="view-editor"]').click();
      showBanner('success', `Loaded <b>${slug}.html</b> into visual editor!`);
    }

    function parseHtmlBodyToBlocks(html) {
      // Use DOMParser — NOTE: innerText does NOT work on detached DOMParser nodes.
      // We must use textContent everywhere instead.
      const parser = new DOMParser();
      const doc = parser.parseFromString(`<div>${html}</div>`, 'text/html');
      const root = doc.body.firstChild;

      // Remove standard fixed components that aren't editable blocks
      root.querySelectorAll('.toc-box, .disclaimer-box, .source-citation, .article-pagination, .cta-box, .author-bio-card, .article-footer-disclaimer').forEach(el => el.remove());

      function processElement(el) {
        const tag = el.tagName.toLowerCase();
        const id = 'blk_' + Math.random().toString(36).substr(2, 6);

        if (tag === 'h2') {
          AppState.blocks.push({ id, type: 'h2', data: { text: el.textContent.trim() } });
        } else if (tag === 'h3') {
          AppState.blocks.push({ id, type: 'h3', data: { text: el.textContent.trim() } });
        } else if (tag === 'p') {
          // Only add non-empty paragraphs
          const txt = el.textContent.trim();
          if (txt) AppState.blocks.push({ id, type: 'p', data: { html: el.innerHTML.trim() } });
        } else if (el.classList.contains('key-takeaways') || el.querySelector('.key-takeaways')) {
          const kEl = el.classList.contains('key-takeaways') ? el : el.querySelector('.key-takeaways');
          const items = Array.from(kEl.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
          if (items.length) AppState.blocks.push({ id, type: 'takeaways', data: { items } });
        } else if (tag === 'ul') {
          const items = Array.from(el.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
          if (items.length) AppState.blocks.push({ id, type: 'bullets', data: { items } });
        } else if (tag === 'ol') {
          const items = Array.from(el.querySelectorAll('li')).map(li => li.textContent.trim()).filter(Boolean);
          if (items.length) AppState.blocks.push({ id, type: 'numbered', data: { items } });
        } else if (tag === 'table') {
          const rows = Array.from(el.querySelectorAll('tr')).map(tr =>
            Array.from(tr.querySelectorAll('th, td')).map(cell => cell.textContent.trim())
          );
          if (rows.length) AppState.blocks.push({ id, type: 'table', data: { hasHeader: true, rows } });
        } else if (tag === 'details' || el.classList.contains('faq-item')) {
          // details.faq-item — our new accordion FAQ format
          const sumEl = el.querySelector('summary');
          // Answer is the <p> inside details (not inside summary)
          const ansEl = el.querySelector('p');
          const q = sumEl ? sumEl.textContent.replace(/[▼▲]/g, '').trim() : '';
          const a = ansEl ? ansEl.textContent.trim() : el.textContent.replace(q, '').trim();
          if (q) AppState.blocks.push({ id, type: 'faq', data: { q, a } });
        } else if (tag === 'pre') {
          AppState.blocks.push({ id, type: 'code', data: { text: el.textContent.trim() } });
        } else if (tag === 'hr') {
          AppState.blocks.push({ id, type: 'divider', data: {} });
        } else if (tag === 'figure') {
          const img = el.querySelector('img');
          const caption = el.querySelector('figcaption');
          if (img) AppState.blocks.push({ id, type: 'image', data: {
            url: img.getAttribute('src') || '',
            alt: img.getAttribute('alt') || '',
            caption: caption ? caption.textContent.trim() : ''
          }});
        } else if (tag === 'div') {
          // For wrapper divs: check what they contain and recurse children
          // Skip empty divs
          if (!el.textContent.trim()) return;
          // Check if it directly contains table
          const innerTable = el.querySelector('table');
          if (innerTable && !el.querySelector('details')) {
            const rows = Array.from(innerTable.querySelectorAll('tr')).map(tr =>
              Array.from(tr.querySelectorAll('th, td')).map(cell => cell.textContent.trim())
            );
            if (rows.length) AppState.blocks.push({ id, type: 'table', data: { hasHeader: true, rows } });
            return;
          }
          // Check for callout/card patterns
          if (el.classList.contains('card') || el.style.borderLeft || el.style.cssText.includes('border-left')) {
            const text = el.textContent.trim();
            if (text) AppState.blocks.push({ id, type: 'callout', data: { text } });
            return;
          }
          // Otherwise recurse into children to pick up p, h2, h3, details etc.
          Array.from(el.children).forEach(child => processElement(child));
        } else if (tag === 'section') {
          Array.from(el.children).forEach(child => processElement(child));
        }
      }

      Array.from(root.children).forEach(el => processElement(el));
    }

    /* ==========================================================================
       BUILD EXACT ARTICLE HTML (MATCHES EXISTING ARTICLES 1:1)
       NO reading time, NO YouTube link, exact byline and schema
       ========================================================================== */
    function generateCleanArticleHTML(meta, blocks) {
      const cfg = getSettings();
      const slug = meta.slug;
      const title = meta.title;
      const desc = meta.desc || meta.subtitle;
      const cat = meta.category;
      const pubDate = meta.pubDate || '15 Sep 2026';
      const ga4 = cfg.ga4 || 'G-0C93Q0VBQP';

      // Collect FAQ items for FAQPage JSON-LD schema
      const faqList = blocks.filter(b => b.type === 'faq' && b.data && b.data.q && b.data.a);
      let faqSchemaJson = '';
      if (faqList.length > 0) {
        const faqEntities = faqList.map(f => {
          return `    {
      "@type": "Question",
      "name": ${JSON.stringify(f.data.q)},
      "acceptedAnswer": {
        "@type": "Answer",
        "text": ${JSON.stringify(f.data.a)}
      }
    }`;
        }).join(',\n');
        faqSchemaJson = `,
  {
    "@type": "FAQPage",
    "mainEntity": [
${faqEntities}
    ]
  }`;
      }

      // Render blocks — FAQ blocks are collected separately and grouped into a section
      let renderedContent = '';
      let faqSectionHtml = '';
      blocks.forEach(b => {
        const d = b.data;
        switch(b.type) {
          case 'h2': renderedContent += `\n        <h2>${escapeHtml(d.text)}</h2>\n`; break;
          case 'h3': renderedContent += `\n        <h3>${escapeHtml(d.text)}</h3>\n`; break;
          case 'p': renderedContent += `\n        <p>${d.html || ''}</p>\n`; break;
          case 'takeaways':
            renderedContent += `
        <div class="key-takeaways" style="background: var(--bg-elevated); border: 1px solid var(--border-soft); border-left: 4px solid var(--emerald-dark); border-radius: 8px; padding: 20px 24px; margin: 0 0 32px;">
          <h2 style="font-size: 1.15rem; font-weight: 800; color: var(--emerald-dark); margin-top: 0; margin-bottom: 12px;">Key Takeaways</h2>
          <ul style="margin: 0; padding-left: 20px; line-height: 1.8; color: var(--text-secondary); font-size: 0.95rem;">
            ${(d.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('\n            ')}
          </ul>
        </div>\n`;
            break;
          case 'bullets':
            renderedContent += `\n        <ul>\n          ${(d.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('\n          ')}\n        </ul>\n`;
            break;
          case 'numbered':
            renderedContent += `\n        <ol>\n          ${(d.items || []).map(i => `<li>${escapeHtml(i)}</li>`).join('\n          ')}\n        </ol>\n`;
            break;
          case 'table':
            renderedContent += `
        <div class="table-wrapper"><table class="comparison-table">
          ${d.hasHeader && d.rows.length > 0 ? `<thead><tr>${d.rows[0].map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead>` : ''}
          <tbody>
            ${d.rows.slice(d.hasHeader ? 1 : 0).map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('\n            ')}
          </tbody>
        </table></div>\n`;
            break;
          case 'faq':
            // Collected separately — rendered as a grouped section below
            faqSectionHtml += `
            <details class="faq-item" style="background:var(--bg-elevated); border:1px solid var(--border-soft); border-radius:var(--radius-md); padding:16px 20px; margin-bottom:12px;">
              <summary style="font-weight:700; cursor:pointer; font-size:1.02rem; color:var(--text-primary);">${escapeHtml(d.q)}</summary>
              <p style="margin-top:12px; color:var(--text-secondary); line-height:1.65; margin-bottom:0;">${escapeHtml(d.a)}</p>
            </details>`;
            break;
          case 'image':
            renderedContent += `
        <figure style="margin:2rem 0; text-align:center;">
          <img src="${escapeHtml(d.url)}" alt="${escapeHtml(d.alt)}" loading="lazy" style="max-width:100%; height:auto; border-radius:8px;">
          ${d.caption ? `<figcaption style="font-size:0.84rem; color:var(--text-muted); margin-top:6px;">${escapeHtml(d.caption)}</figcaption>` : ''}
        </figure>\n`;
            break;
          case 'button':
            renderedContent += `
        <div style="margin:1.5rem 0;">
          <a href="${escapeHtml(d.url)}" class="btn btn-primary" style="display:inline-block; text-decoration:none; padding:10px 22px; border-radius:6px;">${escapeHtml(d.label)}</a>
        </div>\n`;
            break;
          case 'divider': renderedContent += `\n        <hr style="border:none; border-top:1px solid var(--border-soft); margin:2.5rem 0;">\n`; break;
          case 'callout':
            renderedContent += `
        <div class="card" style="background:var(--card-bg); border-left:4px solid var(--primary); padding:16px 20px; margin:24px 0;">
          <p style="margin:0; font-size:0.95rem; line-height:1.7;">${escapeHtml(d.text)}</p>
        </div>\n`;
            break;
          case 'code':
            renderedContent += `\n        <pre style="background:#0f172a; color:#f8fafc; padding:16px; border-radius:6px; overflow-x:auto; font-family:'JetBrains Mono',monospace;"><code>${escapeHtml(d.text)}</code></pre>\n`;
            break;
        }
      });

      // Build the FAQ section (grouped, with heading — like existing articles)
      const faqSectionBlock = faqSectionHtml ? `
        <!-- FAQ Section -->
        <section id="faq" style="margin-top:40px;">
          <h2>Frequently Asked Questions</h2>
          ${faqSectionHtml}
        </section>` : '';

      // Build Prev/Next article pagination nav
      const prevSlug = meta.prevSlug ? meta.prevSlug.trim() : '';
      const nextSlug = meta.nextSlug ? meta.nextSlug.trim() : '';
      const prevTitle = meta.prevTitle ? meta.prevTitle.trim() : 'Previous Article';
      const nextTitle = meta.nextTitle ? meta.nextTitle.trim() : 'Next Article';
      let paginationHtml = '';
      if (prevSlug || nextSlug) {
        paginationHtml = `
        <!-- Article Pagination -->
        <nav class="article-pagination" aria-label="Article navigation" style="margin-top:36px;">
          ${prevSlug ? `<a href="${escapeHtml(prevSlug)}.html" class="article-nav-card prev"><span class="article-nav-label">&larr; Previous Guide</span><span class="article-nav-title">${escapeHtml(prevTitle)}</span></a>` : '<span></span>'}
          ${nextSlug ? `<a href="${escapeHtml(nextSlug)}.html" class="article-nav-card next"><span class="article-nav-label">Next Guide &rarr;</span><span class="article-nav-title">${escapeHtml(nextTitle)}</span></a>` : ''}
        </nav>`;
      }

      return `<!DOCTYPE html>
<html lang="en-IN">
<head>
<meta charset="utf-8"/>
<meta content="wI-yq01MPBD-S1JZtupXa2CAdSvWceD5Kv0FvPJFDM8" name="google-site-verification"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>${escapeHtml(title)} | Calculatorship</title>
<meta content="${escapeHtml(desc)}" name="description"/>
<link href="https://www.calculatorship.in/${slug}.html" rel="canonical"/>
<meta content="${escapeHtml(title.toLowerCase())}, ${escapeHtml(cat.toLowerCase())}, personal finance india" name="keywords"/>
<meta content="Tejas, Calculatorship" name="author"/>
<meta content="en_IN" property="og:locale"/>
<meta content="IN" name="geo.region"/>
<meta content="India" name="geo.placename"/>
<meta content="en-IN" name="language"/>
<meta content="${escapeHtml(title)}" property="og:title"/>
<meta content="${escapeHtml(desc)}" property="og:description"/>
<meta content="https://www.calculatorship.in/${slug}.html" property="og:url"/>
<meta content="article" property="og:type"/>
<meta content="Calculatorship" property="og:site_name"/>
<meta content="https://www.calculatorship.in/og-image.webp" property="og:image"/>
<meta content="${escapeHtml(title)} — Calculatorship" property="og:image:alt"/>
<meta content="summary_large_image" name="twitter:card"/>
<meta content="https://www.calculatorship.in/og-image.webp" name="twitter:image"/>
<meta content="index, follow" name="robots"/>
<meta content="index, follow" name="googlebot"/>
<meta content="#F3F7F5" name="theme-color"/>
<meta content="ca-pub-7598871729388798" name="google-adsense-account"/>
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7598871729388798" crossorigin="anonymous"><\/script>
<link href="favicon.svg" rel="icon" type="image/svg+xml"/>
<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@700;800&amp;display=swap" media="print" onload="this.media='all'" rel="stylesheet"/>
<noscript><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&amp;family=JetBrains+Mono:wght@700;800&amp;display=swap" rel="stylesheet"/></noscript>
<link href="style.css?v=2.2" rel="stylesheet"/>
<!-- Google Analytics 4 (GA4) -->
<script async="" src="https://www.googletagmanager.com/gtag/js?id=${ga4}"><\/script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '${ga4}');
<\/script>

<!-- Structured Data: Article, Breadcrumbs & FAQPage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "headline": ${JSON.stringify(title)},
      "description": ${JSON.stringify(desc)},
      "image": "https://www.calculatorship.in/og-image.webp",
      "datePublished": "${pubDate.includes('T') ? pubDate : '2026-09-15T08:00:00+05:30'}",
      "dateModified": "${new Date().toISOString()}",
      "author": {
        "@type": "Person",
        "name": "Tejas",
        "url": "https://www.calculatorship.in/about.html"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Calculatorship",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.calculatorship.in/logo-light.svg"
        }
      },
      "mainEntityOfPage": "https://www.calculatorship.in/${slug}.html"
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.calculatorship.in/"},
        {"@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.calculatorship.in/blog.html"},
        {"@type": "ListItem", "position": 3, "name": ${JSON.stringify(title)}, "item": "https://www.calculatorship.in/${slug}.html"}
      ]
    }${faqSchemaJson}
  ]
}
<\/script>
</head>
<body>

  <div class="reading-progress-bar" id="reading-progress"></div>
  <a class="skip-link" href="#main-content">Skip to article content</a>

  <header class="site-header">
    <div class="header-inner">
      <a href="index.html" class="brand" aria-label="Calculatorship Homepage">
        <img src="logo-light.svg" alt="Calculatorship — Free Financial Calculators for Indian Investors" width="220" height="38" loading="lazy">
      </a>
      <nav class="main-nav" aria-label="Primary Navigation">
        <div class="nav-dropdown">
          <a href="index.html" class="nav-dropdown-toggle">Calculators</a>
          <ul class="nav-dropdown-menu" role="menu">
            <li><a href="index.html">SIP Calculator</a></li>
            <li><a href="lumpsum.html">Lumpsum Calculator</a></li>
            <li><a href="step-up.html">Step-Up SIP</a></li>
            <li><a href="goal.html">Goal Planner</a></li>
            <li><a href="ppf-calculator.html">PPF Calculator</a></li>
            <li><a href="swp-calculator.html">SWP Calculator</a></li>
            <li><a href="emi-calculator.html">Loan EMI &amp; Prepay</a></li>
            <li class="nav-dropdown-divider" role="separator"></li>
            <li><a href="fd-calculator.html">FD Calculator</a></li>
            <li><a href="budget-planner.html">Budget Planner</a></li>
            <li><a href="income-tax-calculator.html">Tax Calculator</a></li>
          </ul>
        </div>
        <a href="blog.html" class="active">Blog &amp; Guides</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="header-actions">
        <button class="nav-toggle" id="nav-toggle" type="button" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </header>

  <div class="breadcrumb-bar">
    <nav class="breadcrumb" aria-label="Breadcrumbs">
      <ol>
        <li><a href="index.html">Home</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="blog.html">${escapeHtml(cat)}</a></li>
        <li aria-current="page">${escapeHtml(title)}</li>
      </ol>
    </nav>
  </div>

  <main id="main-content">

    <header class="article-header">
      <div class="article-meta">
        <span class="meta-cat">${escapeHtml(cat)}</span>
        <span class="article-date-tag">Published: ${escapeHtml(pubDate)}</span>
        <span>Updated for FY 2026-27</span>
      </div>
      <h1>${escapeHtml(title)}</h1>
      ${meta.subtitle ? `<p style="font-size:1.15rem; color:var(--text-secondary); line-height:1.7; max-width:980px; margin-top:12px;">${escapeHtml(meta.subtitle)}</p>` : ''}
      <div class="article-byline">
        <span class="byline-author">Tejas</span> | Published: ${escapeHtml(pubDate)} | Verified Educational Resource
      </div>
    </header>

    <!-- Top In-Article AdSense -->
    <div class="ad-slot ad-slot-banner" style="max-width:1540px; margin:16px auto 28px; padding:0 36px;">
      <span class="ad-label" style="display:block; font-size:0.75rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:4px;">Advertisement</span>
      <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7598871729388798" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    </div>

    <div class="article-page">
      <article class="article-main" id="main-article">

        <div class="disclaimer-box" style="background:#fffbeb; border:2px solid #f59e0b; border-radius:12px; padding:20px 24px; margin:0 0 32px; display:flex; gap:16px; align-items:flex-start;">
          <span style="font-size:1.5rem; flex-shrink:0;">⚠️</span>
          <div>
            <strong style="color:#92400e; font-size:1rem; display:block; margin-bottom:6px;">Educational Content Only</strong>
            <p style="margin:0; font-size:0.93rem; color:#78350f; line-height:1.65;">This article is authored by Tejas for educational purposes only. Tejas is an independent personal finance researcher and is not a SEBI-registered investment advisor or CA. Content is based on publicly available statutory sources.</p>
          </div>
        </div>

        ${renderedContent}

        ${faqSectionBlock}

        ${paginationHtml}

        <div class="source-citation" style="font-size:0.85rem; color:var(--text-muted); margin:32px 0 24px; padding:14px 18px; background:var(--bg-elevated); border-left:3px solid var(--emerald-dark); border-radius:4px; line-height:1.6;">
          <strong>Primary Sources &amp; Verification:</strong> ${escapeHtml(meta.sources || 'Official Regulatory Gazettes, RBI Directions, SEBI Circulars, and CBDT Statutory Notifications.')}
        </div>

        <div class="cta-box">
          <h3>Simulate Your Exact Financial Numbers</h3>
          <p>Use our free, fast, and independent calculators to model your wealth growth, tax liabilities, or retirement corpus.</p>
          <div style="display:flex; justify-content:center; gap:16px; flex-wrap:wrap;">
            <a href="index.html" class="btn btn-primary btn-lg">SIP Calculator &rarr;</a>
            <a href="ppf-calculator.html" class="btn btn-ghost btn-lg">PPF Calculator &rarr;</a>
            <a href="goal.html" class="btn btn-ghost btn-lg">Goal Planner &rarr;</a>
          </div>
        </div>

        <div class="author-bio-card">
          <div class="author-bio-header">
            <div class="author-avatar">T</div>
            <div>
              <h3 class="author-name">Tejas</h3>
              <p class="author-title">Founder &amp; Financial Researcher, Calculatorship</p>
            </div>
          </div>
          <p class="author-desc">Tejas has been tracking Indian personal finance regulations, SEBI circulars, and AMFI data since 2020. All articles on Calculatorship are independently researched using primary regulatory sources: SEBI.gov.in, RBI.org.in, AMFIIndia.com, and CBDT notifications. Each article cites its primary sources and is reviewed when tax codes or guidelines change.</p>
          <p class="author-disclaimer" style="font-size:0.82rem; color:var(--text-muted); margin-top:8px; line-height:1.5;"><em>Educational disclaimer: Not a SEBI-registered investment advisor or Chartered Accountant. All content is for educational awareness only. Consult a qualified financial advisor before executing investment or tax decisions.</em></p>
        </div>

        <div class="article-footer-disclaimer">
          <strong>Educational Disclaimer:</strong> All content, financial formulas, and scenario simulations published on Calculatorship are strictly for educational and informational purposes. They do not constitute personalized investment, tax, or legal advice. Mutual fund investments are subject to market risks. Please consult a SEBI-registered Investment Advisor (RIA) or Chartered Accountant before executing financial transactions.
        </div>
      </article>

      <!-- Sidebar -->
      <aside class="article-sidebar" aria-label="Related Guides">
        <div class="sidebar-card">
          <h3>Explore Related Guides</h3>
          <ul class="sidebar-links">
            <li><a href="sovereign-gold-bond-guide-india.html">Sovereign Gold Bond (SGB) Guide</a></li>
            <li><a href="old-vs-new-tax-regime.html">Old vs New Tax Regime Guide</a></li>
            <li><a href="cibil-credit-score-improvement-guide.html">CIBIL Score Improvement Blueprint</a></li>
            <li><a href="income-tax-slabs-india-2026.html">Income Tax Slabs FY 2026-27</a></li>
            <li><a href="the-power-of-compounding.html">The Power of Compounding</a></li>
          </ul>
        </div>

        <!-- Sidebar AdSense Slot -->
        <div class="sidebar-card" style="padding:16px; text-align:center;">
          <span style="display:block; font-size:0.72rem; color:var(--text-muted); text-transform:uppercase; margin-bottom:8px;">Advertisement</span>
          <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-7598871729388798" data-ad-slot="auto" data-ad-format="auto" data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
        </div>

        <div class="sidebar-card" style="background:var(--emerald-soft); border-color:var(--emerald-border);">
          <h3 style="color:var(--emerald-dark); border-color:var(--emerald-border);">Financial Calculators</h3>
          <p style="font-size:0.92rem; color:var(--text-secondary); margin-bottom:14px;">Instant math for smart wealth decisions in India.</p>
          <a href="index.html" class="btn btn-primary" style="width:100%; text-align:center; box-sizing:border-box;">Open All Calculators</a>
        </div>
      </aside>
    </div>

  </main>

  <footer class="site-footer">
    <div class="footer-inner">
      <div class="footer-top">
        <div class="footer-brand">
          <a href="index.html"><img src="logo-footer.svg" alt="Calculatorship Logo" width="200" height="36" style="display:block;" loading="lazy"></a>
          <p class="footer-tagline">Independent financial calculators and educational guides for Indian investors, salaried professionals, and wealth builders.</p>
        </div>
        <div class="footer-links">
          <div class="footer-col">
            <h3>Calculators</h3>
            <ul>
              <li><a href="index.html">SIP Calculator</a></li>
              <li><a href="lumpsum.html">Lumpsum Calculator</a></li>
              <li><a href="step-up.html">Step-Up SIP</a></li>
              <li><a href="goal.html">Goal Planner</a></li>
              <li><a href="ppf-calculator.html">PPF Calculator</a></li>
              <li><a href="swp-calculator.html">SWP Calculator</a></li>
              <li><a href="emi-calculator.html">Loan EMI &amp; Prepay</a></li>
              <li><a href="fd-calculator.html">FD Calculator</a></li>
              <li><a href="budget-planner.html">Budget Planner</a></li>
              <li><a href="income-tax-calculator.html">Tax Calculator</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Legal &amp; Policy</h3>
            <ul>
              <li><a href="disclaimer.html">Disclaimer</a></li>
              <li><a href="terms.html">Terms of Use</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="cookies.html">Cookie Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h3>Platform</h3>
            <ul>
              <li><a href="about.html">About Us</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="blog.html">Blog &amp; Guides</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-disclaimer">
          <strong>Important Regulatory Notice:</strong> Calculatorship is an independent financial education platform not affiliated with or registered under SEBI, AMFI, or IRDAI. All content and calculation tools are strictly for informational and educational purposes.
        </div>
        <div class="footer-copy">
          &copy; 2026 Calculatorship. All rights reserved. | <a href="disclaimer.html">Disclaimer</a> | <a href="terms.html">Terms</a> | <a href="privacy.html">Privacy</a>
        </div>
      </div>
    </div>
  </footer>

  <button class="back-to-top" id="back-to-top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" stroke-width="2.5" fill="none" stroke="currentColor"><polyline points="18 15 12 9 6 15"/></svg>
  </button>

  <script src="theme.js?v=2.2"><\/script>

  <!-- DPDP & GDPR Compliant Cookie Consent Manager -->
  <div id="cookie-banner" style="display:none; position:fixed; bottom:0; left:0; right:0; background:#1a1a2e; color:#fff; padding:1rem 2rem; z-index:9999; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:1rem; box-shadow: 0 -2px 10px rgba(0,0,0,0.3);">
    <p style="margin:0; font-size:0.9rem; max-width:700px; line-height:1.5;">
      We use cookies to improve your browsing experience and serve relevant advertisements. By accepting, you agree to our <a href="cookies.html" style="color:#64ffda; text-decoration:underline;">Cookie Policy</a> and allow Google AdSense to serve personalized ads.
    </p>
    <div style="display:flex; gap:1rem; flex-shrink:0;">
      <button id="decline-cookies" style="background:transparent; border:1px solid #64ffda; color:#64ffda; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-size:0.9rem;">Decline</button>
      <button id="accept-cookies" style="background:#64ffda; border:none; color:#1a1a2e; padding:0.5rem 1.2rem; border-radius:4px; cursor:pointer; font-size:0.9rem; font-weight:600;">Accept All</button>
    </div>
  </div>
  <script>
    (function() {
      const CONSENT_KEY = 'calculatorship_cookie_consent';
      const consent = localStorage.getItem(CONSENT_KEY);

      function loadAdsense() {
        if (document.getElementById('adsense-script')) return;
        const script = document.createElement('script');
        script.id = 'adsense-script';
        script.async = true;
        script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7598871729388798';
        script.crossOrigin = 'anonymous';
        document.head.appendChild(script);
      }

      if (consent === 'accepted') {
        loadAdsense();
      } else if (!consent) {
        document.addEventListener('DOMContentLoaded', function() {
          const banner = document.getElementById('cookie-banner');
          if (banner) banner.style.display = 'flex';
          
          const acceptBtn = document.getElementById('accept-cookies');
          if (acceptBtn) {
            acceptBtn.addEventListener('click', function() {
              localStorage.setItem(CONSENT_KEY, 'accepted');
              if (banner) banner.style.display = 'none';
              loadAdsense();
            });
          }
          
          const declineBtn = document.getElementById('decline-cookies');
          if (declineBtn) {
            declineBtn.addEventListener('click', function() {
              localStorage.setItem(CONSENT_KEY, 'declined');
              if (banner) banner.style.display = 'none';
            });
          }
        });
      }
    })();
  <\/script>
</body>
</html>`;
    }

    /* ==========================================================================
       PUBLISH FLOW (CREATE / UPDATE)
       Calls 1: [slug].html
       Call 2: blog.    async function handlePublishFlow() {
      const slug = document.getElementById('metaSlug').value.trim().toLowerCase();
      const prevSlug = (document.getElementById('metaPrevSlug') || {}).value || '';
      const prevTitle = (document.getElementById('metaPrevTitle') || {}).value || '';
      const nextSlug = (document.getElementById('metaNextSlug') || {}).value || '';
      const nextTitle = (document.getElementById('metaNextTitle') || {}).value || '';
      const title = document.getElementById('articleHeadingH1').innerText.trim();
      const subtitle = document.getElementById('articleSubtitleP').innerText.trim();
      const cat = document.getElementById('metaCategory').value;
      const pubDate = document.getElementById('metaPublishedDate').value.trim() || '15 Sep 2026';
      const desc = document.getElementById('metaDesc').value.trim() || subtitle;
      const cardDesc = document.getElementById('metaCardDesc').value.trim() || subtitle;
      const sources = document.getElementById('sourcesText').innerText.trim();

      if (!title) { showBanner('error', 'Please enter an Article Title (H1).'); return; }
      if (!slug || !/^[a-z0-9-]+$/.test(slug)) { showBanner('error', 'URL Slug must contain only lowercase letters, numbers, and hyphens.'); return; }
      if (AppState.blocks.length === 0) { showBanner('error', 'Please add content blocks to the article canvas before publishing.'); return; }

      const cfg = getSettings();
      const hasGithub = cfg.token && !cfg.token.includes('PASTE_YOUR');

      openProgressModal('Publishing Article');
      const step0 = document.getElementById('step0');
      const step1 = document.getElementById('step1');
      const step2 = document.getElementById('step2');
      const step3 = document.getElementById('step3');

      // Generate the final article HTML (with AdSense, GA4, Search Console)
      const articleHtml = generateCleanArticleHTML({ slug, title, subtitle, category: cat, pubDate, desc, sources, prevSlug, prevTitle, nextSlug, nextTitle }, AppState.blocks);

      // ── STEP 0: Save to local codebase ────────────────────────────────────
      if (cfg.localServer) {
        setStep(step0, 'active', '0. Checking local sync server...');
        const serverUp = await isLocalServerUp();
        if (!serverUp) {
          setStep(step0, 'failed', '0. Local server not running (skipped). Start start_local_server.bat to enable.');
        } else {
          try {
            setStep(step0, 'active', `0. Saving ${slug}.html locally...`);

            // Write article file
            await localWriteFile(`${slug}.html`, articleHtml);

            // Read and update local blog.html
            setStep(step0, 'active', '0. Updating local blog.html...');
            let localBlogHtml = await localReadFile('blog.html');

            const ARTICLE_END_LOC = '</article>';
            const cardOpenRxLoc = /(<article[^>]*class=["']calc-link-card article-card-item["'])/gi;
            let locCardStart = -1, locCardEnd = -1, locSearchFrom = 0;
            while (true) {
              cardOpenRxLoc.lastIndex = locSearchFrom;
              const sm = cardOpenRxLoc.exec(localBlogHtml);
              if (!sm) break;
              const cs = sm.index;
              const ce = localBlogHtml.indexOf(ARTICLE_END_LOC, cs);
              if (ce === -1) break;
              const blk = localBlogHtml.substring(cs, ce + ARTICLE_END_LOC.length);
              if (blk.indexOf(`href="${slug}.html"`) !== -1 || blk.indexOf(`href='${slug}.html'`) !== -1 ||
                  blk.indexOf(`href="/${slug}.html"`) !== -1 || blk.indexOf(`href='/${slug}.html'`) !== -1) {
                locCardStart = cs; locCardEnd = ce + ARTICLE_END_LOC.length; break;
              }
              locSearchFrom = cs + 1;
            }

            const newCardHtmlLocal = `
        <article class="calc-link-card article-card-item" data-category="${escapeHtml(cat)}" data-desc="${escapeHtml(cardDesc)}" data-title="${escapeHtml(title.toLowerCase())}" style="padding:32px;">
<div>
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; gap:8px; flex-wrap:wrap;">
<div style="display:flex; align-items:center; gap:8px;">
<span class="meta-cat">${escapeHtml(cat)}</span>
<span style="background:var(--emerald); color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">NEW</span></div>
<span class="article-date-tag">Published: ${escapeHtml(pubDate)}</span>
</div>
<h3 style="font-size:1.28rem; font-weight:800; line-height:1.4;"><a href="${slug}.html" style="color:var(--text-primary);">${escapeHtml(title)}</a></h3>
<p style="margin:14px 0 22px; font-size:0.98rem; color:var(--text-secondary); line-height:1.65;">${escapeHtml(cardDesc)}</p>
</div>
<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
<a class="card-action" href="${slug}.html" style="font-size:0.96rem; font-weight:700;">Read Full Guide &#x2192;</a>
</div>
</article>`;

            if (locCardStart !== -1) {
              localBlogHtml = localBlogHtml.substring(0, locCardStart) + newCardHtmlLocal + localBlogHtml.substring(locCardEnd);
            } else {
              const curCount = (localBlogHtml.match(/<article[^>]*class=["']calc-link-card article-card-item["']/g) || []).length;
              const newCount = curCount + 1;
              localBlogHtml = localBlogHtml.replace(/(\<strong\s+id=["']total-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${newCount}$2`);
              localBlogHtml = localBlogHtml.replace(/(\<strong\s+id=["']visible-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${newCount}$2`);
              localBlogHtml = localBlogHtml.replace(/(\<span\s+id=["']total-count-badge["'][^>]*>)\d+(<\/span>)/i, `$1${newCount}$2`);
              localBlogHtml = localBlogHtml.replace(/(\<div\s+id=["']articlesGrid["'][^>]*>)/i, `$1\n${newCardHtmlLocal}`);
            }
            await localWriteFile('blog.html', localBlogHtml);

            // Read and update local sitemap.xml
            setStep(step0, 'active', '0. Updating local sitemap.xml...');
            let localSitemapXml = await localReadFile('sitemap.xml');
            const todayIsoLocal = new Date().toISOString().slice(0, 10);
            if (!localSitemapXml.includes(`${slug}.html`)) {
              const smEntry = `  <url>\n    <loc>https://www.calculatorship.in/${slug}.html</loc>\n    <lastmod>${todayIsoLocal}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`;
              localSitemapXml = localSitemapXml.replace('</urlset>', smEntry);
              await localWriteFile('sitemap.xml', localSitemapXml);
            } else {
              // Update lastmod for existing entry
              const urlBlockRx = /(<url>[\s\S]*?<loc>https:\/\/www\.calculatorship\.in\/${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\.html<\/loc>[\s\S]*?<lastmod>)[\d-]+(<\/lastmod>)/;
              localSitemapXml = localSitemapXml.replace(urlBlockRx, `$1${todayIsoLocal}$2`);
              await localWriteFile('sitemap.xml', localSitemapXml);
            }

            setStep(step0, 'done', `0. ✅ Saved ${slug}.html, blog.html & sitemap.xml locally`);
          } catch(localErr) {
            setStep(step0, 'failed', `0. Local save error: ${localErr.message}`);
          }
        }
      } else {
        setStep(step0, 'done', '0. Local sync disabled (skipped)');
      }

      // ── GitHub Steps ──────────────────────────────────────────────────────
      if (!hasGithub) {
        setStep(step1, 'done', '1. GitHub skipped (no token configured)');
        setStep(step2, 'done', '2. GitHub skipped (no token configured)');
        setStep(step3, 'done', '3. GitHub skipped (no token configured)');
        const existingIdx = AppState.articles.findIndex(a => a.slug === slug);
        const artRecord = { slug, title, category: cat, datePublished: pubDate, hasNew: true, cardDesc };
        if (existingIdx >= 0) AppState.articles[existingIdx] = artRecord;
        else AppState.articles.unshift(artRecord);
        saveAllArticles(AppState.articles);
        showProgressDone('🎉 Saved locally! Configure GitHub token in Settings to also deploy to GitHub.');
        return;
      }

      try {
        // STEP 1: Publish [slug].html to GitHub
        setStep(step1, 'active', `1. Writing ${slug}.html to GitHub repo...`);
        let existingSha = null;
        const checkRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${slug}.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (checkRes.ok) {
          const fileD = await checkRes.json();
          existingSha = fileD.sha;
        }

        const putArtRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${slug}.html`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin: ${existingSha ? 'Update' : 'Publish'} article - ${title}`,
            content: utf8ToBase64(articleHtml),
            sha: existingSha,
            branch: cfg.branch
          })
        });
        if (!putArtRes.ok) throw new Error(`Step 1 failed: ${(await putArtRes.json()).message || 'HTTP ' + putArtRes.status}`);
        setStep(step1, 'done', `1. ${slug}.html published to GitHub`);

        // STEP 2: Update blog.html on GitHub
        setStep(step2, 'active', '2. Updating blog.html on GitHub...');
        const blogRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!blogRes.ok) throw new Error(`Step 2 failed: ${(await blogRes.json()).message}`);
        const blogData = await blogRes.json();
        let blogHtml = base64ToUtf8(blogData.content);

        const ARTICLE_END_PUB = '</article>';
        const cardOpenRxPub = /(<article[^>]*class=["']calc-link-card article-card-item["'])/gi;
        let existingCardStart = -1, existingCardEnd = -1, pubSearchFrom = 0;
        while (true) {
          cardOpenRxPub.lastIndex = pubSearchFrom;
          const sm = cardOpenRxPub.exec(blogHtml);
          if (!sm) break;
          const cs = sm.index;
          const ce = blogHtml.indexOf(ARTICLE_END_PUB, cs);
          if (ce === -1) break;
          const blk = blogHtml.substring(cs, ce + ARTICLE_END_PUB.length);
          if (blk.indexOf(`href="${slug}.html"`) !== -1 || blk.indexOf(`href='${slug}.html'`) !== -1 ||
              blk.indexOf(`href="/${slug}.html"`) !== -1 || blk.indexOf(`href='/${slug}.html'`) !== -1) {
            existingCardStart = cs; existingCardEnd = ce + ARTICLE_END_PUB.length; break;
          }
          pubSearchFrom = cs + 1;
        }

        const newCardHtml = `
        <article class="calc-link-card article-card-item" data-category="${escapeHtml(cat)}" data-desc="${escapeHtml(cardDesc)}" data-title="${escapeHtml(title.toLowerCase())}" style="padding:32px;">
<div>
<div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:14px; gap:8px; flex-wrap:wrap;">
<div style="display:flex; align-items:center; gap:8px;">
<span class="meta-cat">${escapeHtml(cat)}</span>
<span style="background:var(--emerald); color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">NEW</span></div>
<span class="article-date-tag">Published: ${escapeHtml(pubDate)}</span>
</div>
<h3 style="font-size:1.28rem; font-weight:800; line-height:1.4;"><a href="${slug}.html" style="color:var(--text-primary);">${escapeHtml(title)}</a></h3>
<p style="margin:14px 0 22px; font-size:0.98rem; color:var(--text-secondary); line-height:1.65;">${escapeHtml(cardDesc)}</p>
</div>
<div style="display:flex; justify-content:space-between; align-items:center; margin-top:auto;">
<a class="card-action" href="${slug}.html" style="font-size:0.96rem; font-weight:700;">Read Full Guide &#x2192;</a>
</div>
</article>`;

        if (existingCardStart !== -1) {
          blogHtml = blogHtml.substring(0, existingCardStart) + newCardHtml + blogHtml.substring(existingCardEnd);
        } else {
          const curCount = (blogHtml.match(/<article[^>]*class=["']calc-link-card article-card-item["']/g) || []).length;
          const newCount = curCount + 1;
          blogHtml = blogHtml.replace(/(\<strong\s+id=["']total-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${newCount}$2`);
          blogHtml = blogHtml.replace(/(\<strong\s+id=["']visible-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${newCount}$2`);
          blogHtml = blogHtml.replace(/(\<span\s+id=["']total-count-badge["'][^>]*>)\d+(<\/span>)/i, `$1${newCount}$2`);
          blogHtml = blogHtml.replace(/(\<div\s+id=["']articlesGrid["'][^>]*>)/i, `$1\n${newCardHtml}`);
        }

        const putBlogRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin: Update blog.html for ${title}`,
            content: utf8ToBase64(blogHtml),
            sha: blogData.sha,
            branch: cfg.branch
          })
        });
        if (!putBlogRes.ok) throw new Error(`Step 2 (PUT blog.html) failed: ${(await putBlogRes.json()).message}`);
        setStep(step2, 'done', '2. blog.html updated on GitHub');

        // STEP 3: Update sitemap.xml on GitHub
        setStep(step3, 'active', '3. Updating sitemap.xml on GitHub...');
        const smRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/sitemap.xml?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!smRes.ok) throw new Error(`Step 3 failed: ${(await smRes.json()).message}`);
        const smData = await smRes.json();
        let smXml = base64ToUtf8(smData.content);
        const todayIsoGh = new Date().toISOString().slice(0, 10);

        if (!smXml.includes(`${slug}.html`)) {
          const entry = `  <url>\n    <loc>https://www.calculatorship.in/${slug}.html</loc>\n    <lastmod>${todayIsoGh}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.9</priority>\n  </url>\n</urlset>`;
          smXml = smXml.replace('</urlset>', entry);
        } else {
          const urlBlockRx2 = /(<url>[\s\S]*?<loc>https:\/\/www\.calculatorship\.in\/${slug.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\.html<\/loc>[\s\S]*?<lastmod>)[\d-]+(<\/lastmod>)/;
          smXml = smXml.replace(urlBlockRx2, `$1${todayIsoGh}$2`);
        }

        const putSmRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/sitemap.xml`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin: Update sitemap.xml for ${title}`,
            content: utf8ToBase64(smXml),
            sha: smData.sha,
            branch: cfg.branch
          })
        });
        if (!putSmRes.ok) throw new Error(`Step 3 (PUT sitemap) failed: ${(await putSmRes.json()).message}`);
        setStep(step3, 'done', '3. sitemap.xml updated on GitHub');

        // Update local article list in browser storage
        const existingIdx = AppState.articles.findIndex(a => a.slug === slug);
        const artRecord = { slug, title, category: cat, datePublished: pubDate, hasNew: true, cardDesc };
        if (existingIdx >= 0) AppState.articles[existingIdx] = artRecord;
        else AppState.articles.unshift(artRecord);
        saveAllArticles(AppState.articles);

        showProgressDone(`🎉 Published! Live at <a href="https://www.calculatorship.in/${slug}.html" target="_blank" style="color:var(--emerald); font-weight:700;">calculatorship.in/${slug}.html</a>`);

      } catch(err) {
        showProgressFailed(err.message);
      }
    }

    /* ==========================================================================
       COMPLETE DELETE FLOW
       1. Deletes [slug].html locally (if local server active) and from GitHub
       2. Strips card from blog.html and decrements count (locally and GitHub)
       3. Removes <url> entry from sitemap.xml (locally and GitHub)
       ========================================================================== */
    async function deleteArticleComplete(slug) {
      const art = AppState.articles.find(a => a.slug === slug);
      const title = art ? art.title : slug;

      if (!confirm(`Are you sure you want to permanently delete "${title}"?\n\nThis will:\n1. Delete ${slug}.html (locally & GitHub)\n2. Remove its card from blog.html\n3. Remove its URL from sitemap.xml`)) return;

      const cfg = getSettings();
      const hasGithub = cfg.token && !cfg.token.includes('PASTE_YOUR');

      if (!hasGithub && !cfg.localServer) {
        alert('Neither GitHub token nor Local Server is configured. Nothing to delete.');
        return;
      }

      openProgressModal(`Deleting "${slug}"`);
      const step0 = document.getElementById('step0');
      const step1 = document.getElementById('step1');
      const step2 = document.getElementById('step2');
      const step3 = document.getElementById('step3');

      try {
        // --- STEP 0: Local Deletion ---
        if (cfg.localServer) {
          const serverUp = await isLocalServerUp();
          if (serverUp) {
            setStep(step0, 'active', `Deleting ${slug}.html, updating blog.html & sitemap.xml locally...`);
            
            // Delete [slug].html locally
            await localDeleteFile(`${slug}.html`);

            // Clean blog.html locally
            try {
              const localBlogRes = await localReadFile('blog.html');
              if (localBlogRes.ok && localBlogRes.content) {
                let localBHtml = localBlogRes.content;
                const ARTICLE_END = '</article>';
                const cardOpenPattern = /(<article[^>]*class=["']calc-link-card article-card-item["'])/gi;
                let searchFrom = 0;
                while (true) {
                  cardOpenPattern.lastIndex = searchFrom;
                  const startMatch = cardOpenPattern.exec(localBHtml);
                  if (!startMatch) break;
                  const cs = startMatch.index;
                  const ce = localBHtml.indexOf(ARTICLE_END, cs);
                  if (ce === -1) break;
                  const block = localBHtml.substring(cs, ce + ARTICLE_END.length);
                  if (block.includes(`href="${slug}.html"`) || block.includes(`href='${slug}.html'`) ||
                      block.includes(`href="/${slug}.html"`) || block.includes(`href='/${slug}.html'`)) {
                    const before = localBHtml.substring(0, cs).trimEnd();
                    const after = localBHtml.substring(ce + ARTICLE_END.length).trimStart();
                    localBHtml = before + '\n' + after;
                    break;
                  }
                  searchFrom = cs + 1;
                }
                const remCount = (localBHtml.match(/<article[^>]*class=["']calc-link-card article-card-item["']/g) || []).length;
                localBHtml = localBHtml.replace(/(<strong\s+id=["']total-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${remCount}$2`);
                localBHtml = localBHtml.replace(/(<strong\s+id=["']visible-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${remCount}$2`);
                localBHtml = localBHtml.replace(/(<span\s+id=["']total-count-badge["'][^>]*>)\d+(<\/span>)/i, `$1${remCount}$2`);
                await localWriteFile('blog.html', localBHtml);
              }
            } catch(e) { console.warn('Local blog.html delete cleanup error:', e); }

            // Clean sitemap.xml locally
            try {
              const localSmRes = await localReadFile('sitemap.xml');
              if (localSmRes.ok && localSmRes.content) {
                let localSXml = localSmRes.content;
                const URL_END = '</url>';
                const urlOpenRx = /<url>/gi;
                let sSearchFrom = 0;
                while (true) {
                  urlOpenRx.lastIndex = sSearchFrom;
                  const um = urlOpenRx.exec(localSXml);
                  if (!um) break;
                  const us = um.index;
                  const ue = localSXml.indexOf(URL_END, us);
                  if (ue === -1) break;
                  const urlBlock = localSXml.substring(us, ue + URL_END.length);
                  if (urlBlock.includes(`${slug}.html`)) {
                    const sBefore = localSXml.substring(0, us).trimEnd();
                    const sAfter = localSXml.substring(ue + URL_END.length).trimStart();
                    localSXml = sBefore + '\n' + sAfter;
                    break;
                  }
                  sSearchFrom = us + 1;
                }
                await localWriteFile('sitemap.xml', localSXml);
              }
            } catch(e) { console.warn('Local sitemap.xml delete cleanup error:', e); }

            setStep(step0, 'done', '0. Local files removed/updated successfully');
          } else {
            setStep(step0, 'skipped', '0. Local server offline (skipped local delete)');
          }
        } else {
          setStep(step0, 'skipped', '0. Local file sync disabled');
        }

        if (!hasGithub) {
          saveAllArticles(AppState.articles.filter(a => a.slug !== slug));
          renderManageTable();
          showProgressDone(`✅ "${title}" deleted locally. Configure GitHub token in Settings to also delete from GitHub.`);
          return;
        }

        // 1. Delete [slug].html on GitHub
        setStep(step1, 'active', `1. Deleting ${slug}.html from GitHub...`);
        const fileRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${slug}.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (fileRes.ok) {
          const fileData = await fileRes.json();
          const delRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/${slug}.html`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: `Admin: Delete ${slug}.html`, sha: fileData.sha, branch: cfg.branch })
          });
          if (!delRes.ok) throw new Error(`Could not delete file: ${(await delRes.json()).message}`);
        } else if (fileRes.status !== 404) {
          throw new Error(`Could not fetch ${slug}.html: HTTP ${fileRes.status}`);
        }
        setStep(step1, 'done', `1. ${slug}.html removed from GitHub`);

        // 2. Remove from blog.html & fix count on GitHub
        setStep(step2, 'active', '2. Removing card from blog.html on GitHub...');
        const blogRes2 = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!blogRes2.ok) throw new Error(`Could not fetch blog.html: HTTP ${blogRes2.status}`);
        const bData2 = await blogRes2.json();
        let bHtml2 = base64ToUtf8(bData2.content);

        const ARTICLE_END = '</article>';
        const cardOpenPattern = /(<article[^>]*class=["']calc-link-card article-card-item["'])/gi;
        let cardFound = false;
        let newBHtml = bHtml2;
        let searchFrom = 0;

        while (true) {
          cardOpenPattern.lastIndex = searchFrom;
          const startMatch = cardOpenPattern.exec(bHtml2);
          if (!startMatch) break;
          const cs = startMatch.index;
          const ce = bHtml2.indexOf(ARTICLE_END, cs);
          if (ce === -1) break;
          const block = bHtml2.substring(cs, ce + ARTICLE_END.length);
          if (block.includes(`href="${slug}.html"`) || block.includes(`href='${slug}.html'`) ||
              block.includes(`href="/${slug}.html"`) || block.includes(`href='/${slug}.html'`)) {
            const before = bHtml2.substring(0, cs).trimEnd();
            const after = bHtml2.substring(ce + ARTICLE_END.length).trimStart();
            newBHtml = before + '\n' + after;
            cardFound = true;
            break;
          }
          searchFrom = cs + 1;
        }

        const remainingCount = (newBHtml.match(/<article[^>]*class=["']calc-link-card article-card-item["']/g) || []).length;
        newBHtml = newBHtml.replace(/(<strong\s+id=["']total-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${remainingCount}$2`);
        newBHtml = newBHtml.replace(/(<strong\s+id=["']visible-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${remainingCount}$2`);
        newBHtml = newBHtml.replace(/(<span\s+id=["']total-count-badge["'][^>]*>)\d+(<\/span>)/i, `$1${remainingCount}$2`);

        const putBlogRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin: Remove ${slug} from blog.html (${remainingCount} articles remaining)`,
            content: utf8ToBase64(newBHtml),
            sha: bData2.sha,
            branch: cfg.branch
          })
        });
        if (!putBlogRes.ok) throw new Error(`blog.html update failed: ${(await putBlogRes.json()).message}`);

        if (cardFound) {
          setStep(step2, 'done', `2. Card removed. blog.html now shows ${remainingCount} articles.`);
        } else {
          setStep(step2, 'done', `2. Card for "${slug}" not found (may already be removed). Count fixed to ${remainingCount}.`);
        }

        // 3. Remove from sitemap.xml on GitHub
        setStep(step3, 'active', '3. Removing URL from sitemap.xml on GitHub...');
        const smRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/sitemap.xml?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (smRes.ok) {
          const sData = await smRes.json();
          let sXml = base64ToUtf8(sData.content);
          const URL_END = '</url>';
          const urlOpenRx = /<url>/gi;
          let newSXml = sXml;
          let sSearchFrom = 0;
          while (true) {
            urlOpenRx.lastIndex = sSearchFrom;
            const um = urlOpenRx.exec(sXml);
            if (!um) break;
            const us = um.index;
            const ue = sXml.indexOf(URL_END, us);
            if (ue === -1) break;
            const urlBlock = sXml.substring(us, ue + URL_END.length);
            if (urlBlock.includes(`${slug}.html`)) {
              const sBefore = sXml.substring(0, us).trimEnd();
              const sAfter = sXml.substring(ue + URL_END.length).trimStart();
              newSXml = sBefore + '\n' + sAfter;
              break;
            }
            sSearchFrom = us + 1;
          }
          if (newSXml !== sXml) {
            const putSmRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/sitemap.xml`, {
              method: 'PUT',
              headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
              body: JSON.stringify({ message: `Admin: Remove ${slug} from sitemap.xml`, content: utf8ToBase64(newSXml), sha: sData.sha, branch: cfg.branch })
            });
            if (!putSmRes.ok) throw new Error(`sitemap.xml update failed: ${(await putSmRes.json()).message}`);
          }
        }
        setStep(step3, 'done', '3. sitemap.xml updated on GitHub');

        // Update local list & re-render table
        saveAllArticles(AppState.articles.filter(a => a.slug !== slug));
        renderManageTable();
        showProgressDone(`✅ "${title}" deleted from codebase, blog.html, and sitemap.xml.`);

      } catch(err) {
        showProgressFailed(err.message);
      }
    }

    /* ==========================================================================
       FIX BLOG.HTML ARTICLE COUNTS
       Recounts actual <article> cards and updates all 3 count elements.
       ========================================================================== */
    async function fixBlogCounts() {
      const cfg = getSettings();
      if (!cfg.token || cfg.token.includes('PASTE_YOUR')) {
        alert('GitHub Token missing. Configure in Settings.');
        return;
      }
      showBanner('info', 'Reading blog.html from GitHub to fix article count...');
      try {
        const blogRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!blogRes.ok) throw new Error(`Could not fetch blog.html: HTTP ${blogRes.status}`);
        const bData = await blogRes.json();
        let bHtml = base64ToUtf8(bData.content);

        const count = (bHtml.match(/<article[^>]*class=["']calc-link-card article-card-item["']/g) || []).length;
        bHtml = bHtml.replace(/(<strong\s+id=["']total-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${count}$2`);
        bHtml = bHtml.replace(/(<strong\s+id=["']visible-articles-count["'][^>]*>)\d+(<\/strong>)/i, `$1${count}$2`);
        bHtml = bHtml.replace(/(<span\s+id=["']total-count-badge["'][^>]*>)\d+(<\/span>)/i, `$1${count}$2`);

        const putRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: `Admin: Fix article count to ${count}`, content: utf8ToBase64(bHtml), sha: bData.sha, branch: cfg.branch })
        });
        if (!putRes.ok) throw new Error(`blog.html update failed: ${(await putRes.json()).message}`);
        showBanner('success', `\u2705 Article count fixed to ${count} in blog.html!`);
      } catch(err) {
        showBanner('error', `Fix counts failed: ${err.message}`);
      }
    }

    /* ==========================================================================
       TOGGLE "NEW" TAG ON BLOG.HTML VIA GITHUB API
       Always reads LIVE GitHub state to detect current badge presence.
       ========================================================================== */
    async function toggleNewBadge(slug) {
      const art = AppState.articles.find(a => a.slug === slug);
      if (!art) return;

      const cfg = getSettings();
      if (!cfg.token || cfg.token.includes('PASTE_YOUR')) {
        alert('GitHub Token missing. Configure in Settings.');
        return;
      }

      showBanner('info', `Checking live badge state for "${slug}" on GitHub...`);

      try {
        const blogRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html?ref=${cfg.branch}`, {
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
        });
        if (!blogRes.ok) throw new Error(`Could not fetch blog.html: ${(await blogRes.json()).message}`);
        const bData = await blogRes.json();
        let bHtml = base64ToUtf8(bData.content);

        // Find the article card block for this slug using split approach
        const ARTICLE_END = '</article>';
        const cardOpenRx = /(<article[^>]*class=["']calc-link-card article-card-item["'])/gi;
        let cardFound = false;
        let cardBlock = '', cardStart = -1, cardEnd = -1;
        let searchFrom = 0;

        while (true) {
          cardOpenRx.lastIndex = searchFrom;
          const startMatch = cardOpenRx.exec(bHtml);
          if (!startMatch) break;
          const cs = startMatch.index;
          const ce = bHtml.indexOf(ARTICLE_END, cs);
          if (ce === -1) break;
          const block = bHtml.substring(cs, ce + ARTICLE_END.length);
          if (block.indexOf(`href="${slug}.html"`) !== -1 ||
              block.indexOf(`href='${slug}.html'`) !== -1 ||
              block.indexOf(`href="/${slug}.html"`) !== -1 ||
              block.indexOf(`href='/${slug}.html'`) !== -1) {
            cardFound = true;
            cardBlock = block;
            cardStart = cs;
            cardEnd = ce + ARTICLE_END.length;
            break;
          }
          searchFrom = cs + 1;
        }

        if (!cardFound) throw new Error(`Card for "${slug}" not found in live blog.html.`);

        // Detect actual live NEW badge state
        const hasBadge = /background[^>]*var\(--emerald\)[^>]*>[\s\S]{0,10}NEW[\s\S]{0,5}<\/span>/i.test(cardBlock);

        const action = hasBadge ? 'Remove NEW badge from' : 'Add NEW badge to';
        if (!confirm(`${action} "${art.title}" in blog.html?`)) return;

        const newBadgeHtml = `<span style="background:var(--emerald); color:#fff; font-size:0.72rem; font-weight:800; padding:2px 8px; border-radius:4px; text-transform:uppercase; letter-spacing:0.5px;">NEW</span>`;
        let updatedCard = cardBlock;

        if (hasBadge) {
          // Strip all NEW badge spans
          updatedCard = updatedCard.replace(/<span[^>]*background[^>]*var\(--emerald\)[^>]*>[\s\S]{0,10}NEW[\s\S]{0,5}<\/span>\s*/gi, '');
        } else {
          // Insert right after <span class="meta-cat">...</span>
          updatedCard = updatedCard.replace(/(<span[^>]*class=["']meta-cat["'][^>]*>[\s\S]*?<\/span>)/, `$1\n${newBadgeHtml}`);
        }

        const newBHtml = bHtml.substring(0, cardStart) + updatedCard + bHtml.substring(cardEnd);

        const putRes = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}/contents/blog.html`, {
          method: 'PUT',
          headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json', 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: `Admin: ${hasBadge ? 'Remove' : 'Add'} NEW badge for ${art.title}`,
            content: utf8ToBase64(newBHtml),
            sha: bData.sha,
            branch: cfg.branch
          })
        });
        if (!putRes.ok) throw new Error(`Update failed: ${(await putRes.json()).message}`);

        // Sync local state & refresh table
        art.hasNew = !hasBadge;
        saveAllArticles([...AppState.articles]);
        renderManageTable();
        showBanner('success', `\u2705 NEW badge ${!hasBadge ? 'added to' : 'removed from'} <b>${art.title}</b>!`);

      } catch(err) {
        showBanner('error', `Badge update failed: ${err.message}`);
      }
    }

        /* ==========================================================================
       SECTION 2: MANAGE ALL ARTICLES TABLE
       ========================================================================== */
    function renderManageTable() {
      const tbody = document.getElementById('manageArticlesBody');
      const list = AppState.articles;

      if (!list || list.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding:28px; color:var(--text-muted);">No articles found.</td></tr>`;
        return;
      }

      // Update article count display
      const countEl = document.getElementById('manageArticleCount');
      if (countEl) countEl.textContent = list.length;

      tbody.innerHTML = list.map((a, idx) => `
        <tr>
          <td><strong>${escapeHtml(a.title)}</strong></td>
          <td><code style="font-family:'JetBrains Mono',monospace; font-size:0.78rem; color:var(--primary);">${escapeHtml(a.slug)}.html</code></td>
          <td><span class="cat-badge">${escapeHtml(a.category || 'General')}</span></td>
          <td style="font-size:0.80rem; color:var(--text-secondary);">${escapeHtml(a.datePublished || '2026')}</td>
          <td>
            ${a.hasNew ? '<span class="new-badge-tag">NEW</span>' : '<span style="color:var(--text-muted); font-size:0.75rem;">None</span>'}
          </td>
          <td>
            <div class="tbl-action-group">
              <a href="../${a.slug}.html" target="_blank" class="tbl-btn" title="View live page">View ↗</a>
              <button type="button" class="tbl-btn" onclick="loadArticleForEditing('${a.slug}')">Edit</button>
              <button type="button" class="tbl-btn toggle-new ${a.hasNew ? 'has-new' : ''}" onclick="toggleNewBadge('${a.slug}')">
                ${a.hasNew ? '🏷 Remove NEW' : '🏷 Set NEW'}
              </button>
              <button type="button" class="tbl-btn del" onclick="deleteArticleComplete('${a.slug}')">🗑 Delete</button>
            </div>
          </td>
        </tr>
      `).join('');
    }

    /* ==========================================================================
       SECTION 3: SETTINGS & CONNECTION TEST
       ========================================================================== */
    function initSettingsView() {
      const cfg = getSettings();
      document.getElementById('settingsOwner').value = cfg.owner;
      document.getElementById('settingsRepo').value = cfg.repo;
      document.getElementById('settingsBranch').value = cfg.branch;
      document.getElementById('settingsGa4').value = cfg.ga4;
      document.getElementById('settingsLocalServer').checked = cfg.localServer !== false;
      if (cfg.token && !cfg.token.includes('PASTE_YOUR')) {
        document.getElementById('settingsPat').value = '••••••••••••••••••••••••';
      }

      document.getElementById('btnSaveSettings').addEventListener('click', () => {
        const tokenInput = document.getElementById('settingsPat').value.trim();
        const currentCfg = getSettings();
        const updated = {
          owner: document.getElementById('settingsOwner').value.trim(),
          repo: document.getElementById('settingsRepo').value.trim(),
          branch: document.getElementById('settingsBranch').value.trim(),
          ga4: document.getElementById('settingsGa4').value.trim(),
          localServer: document.getElementById('settingsLocalServer').checked,
          token: (tokenInput && !tokenInput.includes('•••')) ? tokenInput : currentCfg.token
        };
        saveSettings(updated);
        showBanner('success', 'Settings saved successfully in browser storage.');
      });

      // Test local server button
      document.getElementById('btnTestLocalServer').addEventListener('click', async () => {
        const btn = document.getElementById('btnTestLocalServer');
        btn.disabled = true; btn.textContent = 'Testing...';
        try {
          const up = await isLocalServerUp();
          if (up) showBanner('success', '✅ Local sync server is running on port 5050!');
          else showBanner('error', '❌ Local server not reachable. Double-click start_local_server.bat to start it.');
        } catch(e) {
          showBanner('error', `❌ Error: ${e.message}`);
        } finally {
          btn.disabled = false; btn.textContent = 'Test Local Server';
        }
      });

      document.getElementById('btnTestConnection').addEventListener('click', async () => {
        const cfg = getSettings();
        if (!cfg.token || cfg.token.includes('PASTE_YOUR')) {
          showBanner('error', 'Please configure your GitHub Personal Access Token first.');
          return;
        }
        const btn = document.getElementById('btnTestConnection');
        btn.disabled = true;
        btn.textContent = 'Testing...';
        try {
          const res = await fetch(`https://api.github.com/repos/${cfg.owner}/${cfg.repo}`, {
            headers: { 'Authorization': `Bearer ${cfg.token}`, 'Accept': 'application/vnd.github.v3+json' }
          });
          if (res.ok) {
            const data = await res.json();
            showBanner('success', `✅ Connected to repository <b>${data.full_name}</b> (Branch: ${data.default_branch})`);
          } else {
            showBanner('error', `❌ GitHub Error (${res.status}): ${(await res.json()).message}`);
          }
        } catch(err) {
          showBanner('error', `Connection error: ${err.message}`);
        } finally {
          btn.disabled = false;
          btn.textContent = 'Test Connection';
        }
      });
    }

    /* ==========================================================================
       PROGRESS MODAL & BANNER HELPERS
       ========================================================================== */
    function openProgressModal(title) {
      document.getElementById('progModalTitle').textContent = title;
      ['step0', 'step1', 'step2', 'step3'].forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;
        el.className = 'prog-step';
        if (id === 'step0') el.style.cssText = 'border-left:3px solid #7dd3fc; background:#f0f9ff; border-radius:0 6px 6px 0; padding-left:10px; margin-bottom:6px;';
        el.querySelector('.step-icon').textContent = '⏳';
      });
      document.getElementById('progFinalMsg').style.display = 'none';
      document.getElementById('progActions').style.display = 'none';
      document.getElementById('progressModal').classList.add('open');

      document.getElementById('btnCloseProgModal').onclick = () => {
        document.getElementById('progressModal').classList.remove('open');
      };
    }

    function setStep(el, status, txt) {
      el.className = `prog-step ${status}`;
      el.querySelector('.step-txt').textContent = txt;
      if (status === 'done') el.querySelector('.step-icon').textContent = '✅';
      if (status === 'failed') el.querySelector('.step-icon').textContent = '❌';
    }

    function showProgressDone(msg) {
      const el = document.getElementById('progFinalMsg');
      el.style.display = 'block';
      el.innerHTML = `<div style="background:#dcfce7; border:1px solid #86efac; border-radius:6px; padding:12px; color:#166534; font-size:0.90rem;">${msg}</div>`;
      document.getElementById('progActions').style.display = 'flex';
    }

    function showProgressFailed(err) {
      const el = document.getElementById('progFinalMsg');
      el.style.display = 'block';
      el.innerHTML = `<div style="background:#fee2e2; border:1px solid #fca5a5; border-radius:6px; padding:12px; color:#991b1b; font-size:0.90rem;"><strong>Operation failed:</strong> ${escapeHtml(err)}</div>`;
      document.getElementById('progActions').style.display = 'flex';
    }

    function showBanner(type, message) {
      const banner = document.getElementById('bannerAlert');
      const msgEl = document.getElementById('bannerMsg');
      banner.className = `banner-notification show banner-${type}`;
      msgEl.innerHTML = message;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setTimeout(() => banner.classList.remove('show'), 5000);
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
    }
  