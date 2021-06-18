function cipher(salt) {
  let textToChars = text => text.split('').map(c => c.charCodeAt(0))
  let byteHex = n => ('0' + Number(n).toString(16)).substr(-2)
  let applySaltToChar = code => textToChars(salt).reduce((a, b) => a ^ b, code)

  return text => encodeURIComponent(text).split('')
    .map(textToChars)
    .map(applySaltToChar)
    .map(byteHex)
    .join('')
}

function decipher(salt) {
  let textToChars = text => text.split('').map(c => c.charCodeAt(0))
  let saltChars = textToChars(salt)
  let applySaltToChar = code => saltChars.reduce((a, b) => a ^ b, code)
  return encoded => decodeURIComponent(encoded.match(/.{1,2}/g)
    .map(hex => parseInt(hex, 16))
    .map(applySaltToChar)
    .map(charCode => String.fromCharCode(charCode))
    .join(''))
}

export {
  cipher,
  decipher
}