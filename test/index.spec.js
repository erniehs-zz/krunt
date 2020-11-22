const assert = require("assert")
const krunt = require("../krunt").krunt

describe("krunt", () => {

    describe("undefined", () => {
        it("should return 'I am a krunt!'", () => {
            assert.strictEqual(krunt(), "I am a krunt!")
        })
    })

    describe("empty", () => {
        it("should return 'I am a krunt!'", () => {
            assert.strictEqual(krunt(""), "I am a krunt!")
        })
    })

    describe("null", () => {
        it("should return 'I am a krunt!'", () => {
            assert.strictEqual(krunt(null), "I am a krunt!")
        })
    })

    describe("Hi, my name is Donald.", () => {
        it("should return 'Hi, my name is Donald.  I am a krunt!'", () => {
            assert.strictEqual(krunt("Hi, my name is Donald."), "Hi, my name is Donald.  I am a krunt!")
        })
    })

    describe("Hi, my name is Donald", () => {
        it("should return 'Hi, my name is Donald.  I am a krunt!'", () => {
            assert.strictEqual(krunt("Hi, my name is Donald"), "Hi, my name is Donald.  I am a krunt!")
        })
    })
})