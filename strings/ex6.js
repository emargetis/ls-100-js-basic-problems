let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

console.log(byteSequence.search(/x/) >= 0 ? true : false);

console.log(byteSequence.includes('x'));