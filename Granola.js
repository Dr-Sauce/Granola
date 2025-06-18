function cleanup() {
  // Existing removals
  document.querySelectorAll('div.overlay, .f2wnt2z.visibleContent, div[data-role="box"].base_f15zcxmp.padding_f174j59k')
    .forEach(e => e.remove());

  // Remove the Grammarly "writing shines" block
  document.querySelectorAll('div[data-role="block-layout"].base_f1hmg4t3.spacing_f1tge83l')
    .forEach(e => e.remove());

  // Remove blur filters
  document.querySelectorAll('*').forEach(e => {
    const style = getComputedStyle(e);
    if (style.filter && style.filter.includes('blur')) {
      e.style.setProperty('filter', 'none', 'important');
    }
  });

  // Remove premium upsell rows
  document.querySelectorAll('div[data-role="row-layout"]').forEach(r => {
    if (
      r.querySelector('button[data-name="goPremium"]') &&
      !r.querySelector('button[data-name="button:accept"]')
    ) {
      r.remove();
    }
  });
}

function ready(fn) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fn);
  } else {
    fn();
  }
}

ready(() => {
  cleanup();
  new MutationObserver(cleanup).observe(document.body, { childList: true, subtree: true });
});
