// Password utility library (usable from UI and tests)
const PasswordUtils = (function(){
  const sets = {
    lower: 'abcdefghijklmnopqrstuvwxyz',
    upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: "!@#$%^&*()_+[]{}|;:,.<>?/~`-="
  };

  function buildCharset(opts){
    let cs = '';
    if(opts.lower) cs += sets.lower;
    if(opts.upper) cs += sets.upper;
    if(opts.numbers) cs += sets.numbers;
    if(opts.symbols) cs += sets.symbols;
    return cs;
  }

  function secureRandomInt(max){
    const array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0] % max;
  }

  function generatePassword(opts){
    const charset = buildCharset(opts);
    if(!charset) return '';
    let pw = '';
    for(let i=0;i<opts.length;i++){
      pw += charset[secureRandomInt(charset.length)];
    }
    return pw;
  }

  // entropy in bits = length * log2(character set size)
  function estimateEntropy(pw, opts){
    const charset = buildCharset(opts);
    const charsetSize = Math.max(1, charset.length);
    const entropy = pw.length * Math.log2(charsetSize);
    return entropy;
  }

  function estimateStrength(pw, opts){
    if(!pw) return {label:'—', cls:''};
    const entropy = estimateEntropy(pw, opts);
    // adjust score by variety presence
    const variety = [opts.lower, opts.upper, opts.numbers, opts.symbols].filter(Boolean).length;
    const adjusted = entropy + (variety-1) * 2; // small bonus per extra class

    if(adjusted < 28) return {label: 'Sehr schwach', cls: 'very-weak', entropy: Math.round(adjusted)};
    if(adjusted < 36) return {label: 'Schwach', cls: 'weak', entropy: Math.round(adjusted)};
    if(adjusted < 60) return {label: 'Mittel', cls: 'medium', entropy: Math.round(adjusted)};
    if(adjusted < 128) return {label: 'Stark', cls: 'strong', entropy: Math.round(adjusted)};
    return {label: 'Sehr stark', cls: 'very-strong', entropy: Math.round(adjusted)};
  }

  return { generatePassword, estimateStrength, estimateEntropy };
})();
