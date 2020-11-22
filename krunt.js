const krunt = (s) => (s ? (s.endsWith(".") ? s + "  " : ".  ") : "") + "I am a krunt!"

module.exports.krunt = krunt
