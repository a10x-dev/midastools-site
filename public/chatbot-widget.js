/* MidasTools Chatbot Widget — embeddable, dependency-free.
 * Usage: <script src="https://www.midastools.co/chatbot-widget.js" data-bot="cb_xxxx" async></script>
 * Renders a floating chat bubble that answers from the bot's knowledge and captures leads.
 */
(function () {
  var ORIGIN = 'https://www.midastools.co';
  var script = document.currentScript || (function () {
    var s = document.getElementsByTagName('script');
    for (var i = s.length - 1; i >= 0; i--) { if (/chatbot-widget\.js/.test(s[i].src)) return s[i]; }
    return null;
  })();
  if (!script) return;
  var BOT = script.getAttribute('data-bot');
  if (!BOT || !/^cb_[a-f0-9]{12}$/.test(BOT)) return;
  if (window.__midasBot__) return; // single instance
  window.__midasBot__ = BOT;

  var ACCENT = '#2563EB';
  var NAME = 'Chat';
  var GREETING = 'Hi! 👋 How can I help you?';
  var PLAN = 'free';
  var messages = []; // {role, content}
  var open = false, sending = false, booted = false;

  function el(tag, css, txt) { var e = document.createElement(tag); if (css) e.style.cssText = css; if (txt != null) e.textContent = txt; return e; }

  // --- build DOM ---
  var root = el('div', 'position:fixed;bottom:20px;right:20px;z-index:2147483600;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;');
  var bubble = el('button', 'width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;box-shadow:0 6px 20px rgba(0,0,0,.25);background:' + ACCENT + ';color:#fff;font-size:26px;display:flex;align-items:center;justify-content:center;transition:transform .15s;');
  bubble.innerHTML = '💬';
  bubble.onmouseenter = function () { bubble.style.transform = 'scale(1.06)'; };
  bubble.onmouseleave = function () { bubble.style.transform = 'scale(1)'; };

  var panel = el('div', 'display:none;flex-direction:column;width:360px;max-width:calc(100vw - 40px);height:520px;max-height:calc(100vh - 120px);background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 12px 40px rgba(0,0,0,.28);border:1px solid #E5E7EB;');

  var header = el('div', 'background:' + ACCENT + ';color:#fff;padding:14px 16px;font-weight:700;font-size:15px;display:flex;align-items:center;justify-content:space-between;');
  var hTitle = el('span', '', NAME);
  var hClose = el('button', 'background:transparent;border:none;color:#fff;font-size:20px;cursor:pointer;line-height:1;', '×');
  header.appendChild(hTitle); header.appendChild(hClose);

  var body = el('div', 'flex:1;overflow-y:auto;padding:16px;background:#F9FAFB;font-size:14px;line-height:1.5;');

  var footer = el('div', 'border-top:1px solid #E5E7EB;padding:10px;display:flex;gap:8px;align-items:flex-end;background:#fff;');
  var input = el('textarea', 'flex:1;resize:none;border:1px solid #D1D5DB;border-radius:10px;padding:10px 12px;font-size:14px;font-family:inherit;outline:none;max-height:90px;height:40px;');
  input.placeholder = 'Type your message…';
  var send = el('button', 'background:' + ACCENT + ';color:#fff;border:none;border-radius:10px;padding:0 16px;height:40px;font-weight:700;cursor:pointer;font-size:14px;', 'Send');
  footer.appendChild(input); footer.appendChild(send);

  var badge = el('div', 'text-align:center;font-size:11px;color:#9CA3AF;padding:6px;background:#fff;');
  badge.innerHTML = 'Powered by <a href="' + ORIGIN + '/chatbot-builder?utm_source=widget" target="_blank" rel="noopener" style="color:#6B7280;text-decoration:none;font-weight:600;">MidasTools</a>';

  panel.appendChild(header); panel.appendChild(body); panel.appendChild(footer); panel.appendChild(badge);
  root.appendChild(panel); root.appendChild(bubble);
  function mount() { document.body.appendChild(root); }
  if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);

  function applyAccent(c) {
    bubble.style.background = c; header.style.background = c; send.style.background = c;
  }
  function setBadge(plan) { badge.style.display = plan === 'pro' ? 'none' : 'block'; }

  function row(role, text) {
    var wrap = el('div', 'display:flex;margin-bottom:10px;' + (role === 'user' ? 'justify-content:flex-end;' : 'justify-content:flex-start;'));
    var b = el('div', 'max-width:80%;padding:9px 13px;border-radius:14px;white-space:pre-wrap;word-wrap:break-word;' +
      (role === 'user'
        ? 'background:' + ACCENT + ';color:#fff;border-bottom-right-radius:4px;'
        : 'background:#fff;color:#1F2937;border:1px solid #E5E7EB;border-bottom-left-radius:4px;'), text);
    wrap.appendChild(b); body.appendChild(wrap); body.scrollTop = body.scrollHeight;
    return b;
  }

  function boot() {
    if (booted) return; booted = true;
    fetch(ORIGIN + '/api/chatbot/config?id=' + encodeURIComponent(BOT))
      .then(function (r) { return r.json(); })
      .then(function (c) {
        if (c && !c.error) {
          NAME = c.name || NAME; GREETING = c.greeting || GREETING; PLAN = c.plan || 'free';
          ACCENT = c.accent || ACCENT;
          hTitle.textContent = NAME; applyAccent(ACCENT); setBadge(PLAN);
        }
        row('assistant', GREETING);
      })
      .catch(function () { row('assistant', GREETING); });
  }

  function toggle() {
    open = !open;
    panel.style.display = open ? 'flex' : 'none';
    bubble.style.display = open ? 'none' : 'flex';
    if (open) { boot(); setTimeout(function () { input.focus(); }, 50); }
  }
  bubble.onclick = toggle; hClose.onclick = toggle;

  function doSend() {
    var text = (input.value || '').trim();
    if (!text || sending) return;
    input.value = ''; input.style.height = '40px';
    row('user', text);
    messages.push({ role: 'user', content: text });
    sending = true; send.disabled = true; send.textContent = '…';
    var typing = row('assistant', '…');
    fetch(ORIGIN + '/api/chatbot/respond', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: BOT, messages: messages.slice(-12) }),
    })
      .then(function (r) { return r.json(); })
      .then(function (d) {
        var reply = (d && d.reply) || 'Thanks! Our team will follow up shortly.';
        typing.textContent = reply;
        messages.push({ role: 'assistant', content: reply });
      })
      .catch(function () { typing.textContent = "Sorry — please try again or leave your email and we'll follow up."; })
      .finally(function () { sending = false; send.disabled = false; send.textContent = 'Send'; body.scrollTop = body.scrollHeight; });
  }
  send.onclick = doSend;
  input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); doSend(); } });
  input.addEventListener('input', function () { input.style.height = '40px'; input.style.height = Math.min(90, input.scrollHeight) + 'px'; });
})();
