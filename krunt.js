const krunt = (s) => (s ? s + (s.endsWith(".") ? "  " : ".  ") : "") + "I am a krunt!"

module.exports.krunt = krunt
