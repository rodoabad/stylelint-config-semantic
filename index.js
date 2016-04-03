const atRuleRules = require('./lib/at-rule');
const blockRules = require('./lib/block');
const colorRules = require('./lib/color');
const commentRules = require('./lib/comment');
const customMediaRules = require('./lib/custom-media');
const customPropertyRules = require('./lib/custom-property');
const declarationRules = require('./lib/declaration');
const declarationBlockRules = require('./lib/declaration-block');
const fontFamilyRules = require('./lib/font-family');
const fontWeightRules = require('./lib/font-weight');
const functionRules = require('./lib/function');
const generalRules = require('./lib/general');
const mediaFeatureRules = require('./lib/media-feature');
const mediaQueryRules = require('./lib/media-query');
const mediaQueryListRules = require('./lib/media-query-list');
const numberRules = require('./lib/number');
const propertyRules = require('./lib/property');
const rootRuleRules = require('./lib/root-rule');
const ruleRules = require('./lib/rule');
const selectorRules = require('./lib/selector');
const selectorListRules = require('./lib/selector-list');
const stringRules = require('./lib/string');
const timeRules = require('./lib/time');
const unitRules = require('./lib/unit');
const valueRules = require('./lib/value');
const valueListRules = require('./lib/value-list');

const rules = {
    rules: Object.assign(
        {},
        atRuleRules,
        blockRules,
        colorRules,
        commentRules,
        customMediaRules,
        customPropertyRules,
        declarationRules,
        declarationBlockRules,
        fontFamilyRules,
        fontWeightRules,
        functionRules,
        generalRules,
        mediaFeatureRules,
        mediaQueryRules,
        mediaQueryListRules,
        numberRules,
        propertyRules,
        rootRuleRules,
        ruleRules,
        selectorRules,
        selectorListRules,
        stringRules,
        timeRules,
        unitRules,
        valueRules,
        valueListRules
    )
};

module.exports = rules;
