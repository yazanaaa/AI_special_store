export function enableSmoothScrolling() {
  document.documentElement.style.scrollBehavior = 'smooth';
  return () => {
    document.documentElement.style.scrollBehavior = '';
  };
}

export function smoothScrollToId(event, targetId, headerHeightPx = 64) {
  if (event) event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (!targetElement) return;
  const targetPosition = targetElement.offsetTop - headerHeightPx;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
}

export function runSmokeTests({ STORE_URL, WHATSAPP_LINK, TELEGRAM_LINK, PHONE }) {
  try {
    const results = [];
    const assert = (cond, msg) => results.push({ test: msg, pass: !!cond });

    assert(STORE_URL === "https://special3-store.com/", "STORE_URL matches expected");
    assert(WHATSAPP_LINK.startsWith("https://wa.me/"), "WhatsApp deep link format");
    assert(/https:\/\/t\.me\/.+/.test(TELEGRAM_LINK), "Telegram link format");
    assert(/\d{6,}/.test(PHONE), "Phone has at least 6 digits");

    assert(typeof document !== "undefined", "document is available");
    if (typeof document !== "undefined") {
      assert(document.documentElement.dir === "rtl", "Document is RTL");
      assert(document.title.includes("سبيشل ستور"), "Document title set");
      assert(!!document.querySelector(`a[href="${STORE_URL}"]`), "Store link exists in DOM");
      assert(!!document.querySelector(`a[href="${TELEGRAM_LINK}"]`), "Telegram link exists in DOM");
      assert(!!document.querySelector(`a[href="${WHATSAPP_LINK}"]`), "WhatsApp link exists in DOM");
    }

    if (console.table) console.table(results.map(r => ({ test: r.test, pass: r.pass })));
    const failed = results.filter(r => !r.pass);
    if (failed.length) {
      console.error(`Smoke tests failed (${failed.length})`, failed);
    } else {
      console.log("All smoke tests passed ✔");
    }
  } catch (e) {
    console.error("Smoke tests crashed:", e);
  }
}


