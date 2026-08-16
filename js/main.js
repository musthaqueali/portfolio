/**
 * MUSTHAQUE ALI PORTFOLIO — MAIN INTERACTION CONTROLLER
 * Miranda Broadsheet Theme
 */

// Global Toast Notification Helper
window.showPortfolioToast = function(message) {
  let toast = document.getElementById('portfolio-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'portfolio-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<span>■</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
};

document.addEventListener('DOMContentLoaded', () => {
  initLiveDateTime();
  initCopyEmailButtons();
  initProjectModals();
  initContactForm();
  initSmoothScroll();
});

/* 1. Live Date & Time Indicator in Masthead */
function initLiveDateTime() {
  const dateEl = document.getElementById('live-dispatch-date');
  const timeEl = document.getElementById('live-dispatch-time');

  function update() {
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString('en-US', options).toUpperCase();
    const timeStr = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }) + ' IST';

    if (dateEl) dateEl.innerText = dateStr;
    if (timeEl) timeEl.innerText = timeStr;
  }
  update();
  setInterval(update, 1000);
}

/* 2. One-click Email Copy Action */
function initCopyEmailButtons() {
  const emailButtons = document.querySelectorAll('[data-copy-email]');
  const targetEmail = "musthaqueali42@gmail.com";

  emailButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(targetEmail).then(() => {
        window.showPortfolioToast(`Copied ${targetEmail} to clipboard.`);
      }).catch(() => {
        window.showPortfolioToast(`Direct mail: ${targetEmail}`);
      });
    });
  });
}

/* 3. Interactive Project Modals */
function initProjectModals() {
  const modalOverlay = document.getElementById('project-detail-modal');
  const modalBody = document.getElementById('modal-dynamic-content');
  const modalCloseBtn = document.getElementById('modal-close-trigger');

  if (!modalOverlay || !modalBody) return;

  function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
  }

  modalCloseBtn && modalCloseBtn.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalOverlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Attach to project detail buttons
  document.querySelectorAll('[data-open-project]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projId = btn.getAttribute('data-open-project');
      const project = window.RESUME_DATA?.projects?.find(p => p.id === projId);

      if (project) {
        renderModalProject(project);
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function renderModalProject(proj) {
    modalBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <div style="font-family: var(--font-mono); font-size: 0.72rem; color: var(--accent-ember); font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 0.25rem;">${proj.kicker}</div>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.8rem, 4vw, 2.5rem); font-weight: 900; line-height: 0.95; text-transform: uppercase; margin-bottom: 0.4rem;">${proj.title}</h2>
        <p style="font-family: var(--font-serif-hero); font-size: 1.15rem; font-style: italic; color: var(--text-charcoal); margin-bottom: 1rem;">${proj.headline}</p>
        
        <div style="display: flex; flex-wrap: wrap; gap: 0.35rem; margin-bottom: 1.25rem;">
          ${proj.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
        </div>
      </div>

      <div style="background-color: var(--bg-bone); border: 1px solid var(--border-ink); padding: 1.15rem; margin-bottom: 1.25rem;">
        <h4 style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.4rem; color: var(--text-ink);">Executive Summary & Technical Scope</h4>
        <p style="font-family: var(--font-sans); font-size: 0.92rem; color: var(--text-charcoal); line-height: 1.55;">${proj.full_desc}</p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 0.6rem; margin-bottom: 1.25rem;">
        ${proj.kpis ? proj.kpis.map(k => `
          <div style="background-color: var(--bg-bone-light); border: 1px solid var(--border-light); padding: 0.65rem; text-align: center;">
            <div style="font-family: var(--font-mono); font-size: 0.65rem; text-transform: uppercase; color: var(--text-muted);">${k.label}</div>
            <div style="font-family: var(--font-display); font-size: 1.5rem; font-weight: 800; color: var(--text-ink); line-height: 1; margin-top: 0.2rem;">${k.val}</div>
          </div>
        `).join('') : ''}
      </div>

      <h4 style="font-family: var(--font-mono); font-size: 0.72rem; text-transform: uppercase; font-weight: 700; margin-bottom: 0.65rem; color: var(--text-ink); border-bottom: 1px solid var(--border-ink); padding-bottom: 0.35rem;">Key Engineering Milestones & Deliverables</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.5rem; margin-bottom: 1.5rem; padding: 0;">
        ${proj.highlights.map(h => `
          <li style="font-family: var(--font-sans); font-size: 0.9rem; color: var(--text-charcoal); position: relative; padding-left: 1.2rem; line-height: 1.5;">
            <span style="position: absolute; left: 0; color: var(--accent-ember);">✦</span> ${h}
          </li>
        `).join('')}
      </ul>

      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 0.75rem; border-top: 1px solid var(--border-ink); padding-top: 1rem;">
        <a href="https://github.com/musthaqueali" target="_blank" rel="noopener noreferrer" class="btn btn-sm btn-primary">
          <i data-lucide="github" style="width:13px; height:13px;"></i> GITHUB REPOSITORY
        </a>
        <button class="btn btn-sm" onclick="document.getElementById('project-detail-modal').classList.remove('active'); document.body.style.overflow='auto';">Close Dossier</button>
      </div>
    `;
    if (window.lucide) window.lucide.createIcons();
  }
}

/* 4. Contact Form Simulation */
function initContactForm() {
  const form = document.getElementById('editorial-dispatch-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const sender = document.getElementById('form-sender-name')?.value || 'Guest';
    const email = document.getElementById('form-sender-email')?.value || '';
    const message = document.getElementById('form-message-body')?.value || '';

    const subject = encodeURIComponent(`[Portfolio Inquiry] Message from ${sender}`);
    const body = encodeURIComponent(`Hi Musthaque,\n\n${message}\n\nFrom: ${sender} (${email})`);
    
    window.location.href = `mailto:musthaqueali42@gmail.com?subject=${subject}&body=${body}`;
    window.showPortfolioToast(`Dispatch composed! Opening email client.`);
    form.reset();
  });
}

/* 5. Smooth Scroll Navigation */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}
