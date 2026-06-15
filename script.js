const el = id => document.getElementById(id);

function getOptions(){
  return {
    length: Number(el('length').value),
    lower: el('lower').checked,
    upper: el('upper').checked,
    numbers: el('numbers').checked,
    symbols: el('symbols').checked
  };
}

function updateUI(){
  const opts = getOptions();
  el('lengthValue').textContent = opts.length;
}

function render(){
  const opts = getOptions();
  const pw = PasswordUtils.generatePassword(opts);
  el('password').value = pw;
  const s = PasswordUtils.estimateStrength(pw, opts);
  const strength = el('strength');
  strength.textContent = s.label + (s.entropy ? ` (${s.entropy} bits)` : '');
  strength.className = 'strength ' + s.cls;
}

function copyPassword(){
  const pw = el('password').value;
  if(!pw) return;
  navigator.clipboard.writeText(pw);
}

// wire up
el('length').addEventListener('input', ()=>{ updateUI(); render(); });
['lower','upper','numbers','symbols'].forEach(id=>{
  el(id).addEventListener('change', ()=> render());
});
el('generate').addEventListener('click', e=>{ e.preventDefault(); render(); });
el('copy').addEventListener('click', e=>{ e.preventDefault(); copyPassword(); });

// initial
updateUI(); render();
