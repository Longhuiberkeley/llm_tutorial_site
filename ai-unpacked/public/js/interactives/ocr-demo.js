/**
 * OCR Demo Interactive
 * Chapter 09-03: Scan handwritten paper and extract text
 */
export function init(config) {
  const { scanningLabel, doneLabel, extractedText, noteContent } = config;
  var ran = false;

  window.runOCR = function() {
    if (ran) return;
    ran = true;
    var btn = document.getElementById('ocr-btn');
    var scanLine = document.getElementById('ocr-scan-line');
    var overlay = document.getElementById('ocr-scanning-overlay');
    var result = document.getElementById('ocr-result');
    var note = document.getElementById('ocr-note');

    btn.textContent = scanningLabel;
    btn.disabled = true;
    btn.style.opacity = '0.6';
    scanLine.classList.remove('hidden');
    overlay.classList.remove('hidden');

    setTimeout(function() {
      scanLine.classList.add('hidden');
      overlay.classList.add('hidden');
      result.innerHTML = extractedText;
      result.style.borderColor = '#86efac';
      result.style.backgroundColor = '#f0fdf4';
      btn.textContent = doneLabel;
      btn.style.backgroundColor = '#16a34a';
      note.classList.remove('hidden');
    }, 1600);
  };
}
