module.exports = {
    rules: {
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-properties-order': [
            [
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'color',
                        'background'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'font',
                        'font-family',
                        'font-feature-settings',
                        'font-kerning',
                        'font-language-override',
                        'font-size',
                        'font-size-adjust',
                        'font-stretch',
                        'font-style',
                        'font-synthesis',
                        'font-variant',
                        'font-variant-alternates',
                        'font-variant-caps',
                        'font-variant-east-asian',
                        'font-variant-ligatures',
                        'font-variant-numeric',
                        'font-variant-position',
                        'font-weight'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'text-align',
                        'text-align-last',
                        'text-combine-upright',
                        'text-decoration',
                        'text-decoration-color',
                        'text-decoration-line',
                        'text-decoration-style',
                        'text-indent',
                        'text-justify',
                        'text-orientation',
                        'text-overflow',
                        'text-shadow',
                        'text-transform',
                        'text-underline-position'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'top',
                        'right',
                        'bottom',
                        'left',
                        'clear',
                        'display',
                        'float',
                        'position',
                        'visibility',
                        'z-index'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'margin',
                        'margin-top',
                        'margin-right',
                        'margin-bottom',
                        'margin-left'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'padding',
                        'padding-top',
                        'padding-right',
                        'padding-bottom',
                        'padding-left'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'width',
                        'max-width',
                        'min-width',
                        'height',
                        'max-height',
                        'min-height'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'align-content',
                        'align-items',
                        'align-self',
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'justify-content',
                        'order'
                    ]
                }
            ],
            {
                unspecified: 'bottomAlphabetical'
            }
        ],
        'declaration-block-semicolon-newline-after': 'always',
        'declaration-block-semicolon-newline-before': 'never-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always'
    }
};
