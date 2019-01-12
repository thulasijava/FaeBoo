"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var core_1 = require("@angular/core");
var FindLanguageFromKeyPipe = /** @class */ (function () {
    function FindLanguageFromKeyPipe() {
        this.languages = {
            en: { name: 'English' }
            // jhipster-needle-i18n-language-key-pipe - JHipster will add/remove languages in this object
        };
    }
    FindLanguageFromKeyPipe.prototype.transform = function (lang) {
        return this.languages[lang].name;
    };
    FindLanguageFromKeyPipe = tslib_1.__decorate([
        core_1.Pipe({ name: 'findLanguageFromKey' })
    ], FindLanguageFromKeyPipe);
    return FindLanguageFromKeyPipe;
}());
exports.FindLanguageFromKeyPipe = FindLanguageFromKeyPipe;
//# sourceMappingURL=find-language-from-key.pipe.js.map