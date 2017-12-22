'use strict';

// Modified from
// https://github.com/daveross/flesch-kincaid/tree/536987d507d18045d49818ad9240baad8bced32e

window.Readability = {};

window.Readability.syllables = function syllables(x) {
    /*
     * basic algortithm: each vowel-group indicates a syllable, except for: final
     * (silent) e 'ia' ind two syl @AddSyl and @SubSyl list regexps to massage the
     * basic count. Each match from @AddSyl adds 1 to the basic count, each
     * @SubSyl match -1 Keep in mind that when the regexps are checked, any final
     * 'e' will have been removed, and all '\'' will have been removed.
     */
    var subSyl = [/cial/, /tia/, /cius/, /cious/, /giu/, // belgium!
    /ion/, /iou/, /sia$/, /.ely$/, // absolutely! (but not ely!)
    /sed$/];

    var addSyl = [/ia/, /riet/, /dien/, /iu/, /io/, /ii/, /[aeiouym]bl$/, // -Vble, plus -mble
    /[aeiou]{3}/, // agreeable
    /^mc/, /ism$/, // -isms
    /([^aeiouy])\1l$/, // middle twiddle battle bottle, etc.
    /[^l]lien/, // // alien, salient [1]
    /^coa[dglx]./, // [2]
    /[^gq]ua[^auieo]/, // i think this fixes more than it breaks
    /dnt$/];

    // (comments refer to titan's /usr/dict/words)
    // [1] alien, salient, but not lien or ebbullient...
    // (those are the only 2 exceptions i found, there may be others)
    // [2] exception for 7 words:
    // coadjutor coagulable coagulate coalesce coalescent coalition coaxial

    var xx = x.toLowerCase().replace(/'/g, '').replace(/e\b/g, '');
    var scrugg = xx.split(/[^aeiouy]+/).filter(Boolean); // '-' should be perhaps added?

    return undefined === x || null === x || '' === x ? 0 : 1 === xx.length ? 1 : subSyl.map(function (r) {
        return (xx.match(r) || []).length;
    }).reduce(function (a, b) {
        return a - b;
    }) + addSyl.map(function (r) {
        return (xx.match(r) || []).length;
    }).reduce(function (a, b) {
        return a + b;
    }) + scrugg.length - (scrugg.length > 0 && '' === scrugg[0] ? 1 : 0) +
    // got no vowels? ("the", "crwth")
    xx.split(/\b/).map(function (x) {
        return x.trim();
    }).filter(Boolean).filter(function (x) {
        return !x.match(/[.,'!?]/g);
    }).map(function (x) {
        return x.match(/[aeiouy]/) ? 0 : 1;
    }).reduce(function (a, b) {
        return a + b;
    });
};

window.Readability.words = function words(x) {
    return (x.split(/\s+/) || ['']).length;
};
window.Readability.sentences = function sentences(x) {
    return (x.split('. ') || ['']).length;
};
window.Readability.syllablesPerWord = function syllablesPerWord(x) {
    return window.Readability.syllables(x) / window.Readability.words(x);
};
window.Readability.wordsPerSentence = function wordsPerSentence(x) {
    return window.Readability.words(x) / window.Readability.sentences(x);
};

window.Readability.rate = function rate(x) {
    return 206.835 - 1.015 * window.Readability.wordsPerSentence(x) - 84.6 * window.Readability.syllablesPerWord(x);
};
window.Readability.grade = function grade(x) {
    return 0.39 * window.Readability.wordsPerSentence(x) + 11.8 * window.Readability.syllablesPerWord(x) - 15.59;
};
