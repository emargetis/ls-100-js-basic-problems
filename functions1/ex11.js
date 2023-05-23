function localGreet(locale) {
  let lang = extractLanguage(locale);
  let reg = extractRegion(locale);
  let langReg;
  
  if (lang === 'en') {
    langReg = lang + reg;
  } else {
    langReg = lang; 
  }
  
  return helloLanguage(langReg);
  
}


function extractLanguage(locale) {
  return locale.substring(0,2);
}

function extractRegion(locale) {
  return locale.slice(3,5);
}

function helloLanguage (iso) {
  switch (iso) {
    case 'enUS':
      return 'Hey!';
    case 'enGB':
      return 'Hello!';
    case 'enAU':
      return 'Howdy!';
    case 'fr':
      return 'Salut!';
    case 'pt':
      return 'Olá!';
    case 'de':
      return 'Hallo!';
    case 'sv':
      return 'Hej!';
    case 'af':
      return 'Haai!';
    default:
      return 'Please choose a supported language';
  }
    
}


console.log(localGreet('en_US.UTF-8')); // 'Hey!'
console.log(localGreet('en_GB.UTF-8')); // 'Hello!'
console.log(localGreet('en_AU.UTF-8')); // 'Howdy!'
console.log(localGreet('fr_FR.UTF-8')); // 'Salut!'
console.log(localGreet('fr_CA.UTF-8')); // 'Salut!'
console.log(localGreet('fr_MA.UTF-8')); // 'Salut!'