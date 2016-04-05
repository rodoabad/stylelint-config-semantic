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
                        'display',
                        'position',
                        'top',
                        'right',
                        'bottom',
                        'left'
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
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'width',
                        'min-width',
                        'max-width'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'height',
                        'min-height',
                        'max-height'
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
                        'float',
                        'clear'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'columns',
                        'column-gap',
                        'column-fill',
                        'column-rule',
                        'column-span',
                        'column-count',
                        'column-width'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'transform',
                        'transform-box',
                        'transform-origin',
                        'transform-style'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'transition',
                        'transition-delay',
                        'transition-duration',
                        'transition-property',
                        'transition-timing-function'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'border',
                        'border-top',
                        'border-right',
                        'border-bottom',
                        'border-left',
                        'border-width',
                        'border-top-width',
                        'border-right-width',
                        'border-bottom-width',
                        'border-left-width',
                        'border-style',
                        'border-top-style',
                        'border-right-style',
                        'border-bottom-style',
                        'border-left-style',
                        'border-radius',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius',
                        'border-color',
                        'border-top-color',
                        'border-right-color',
                        'border-bottom-color',
                        'border-left-color',
                        'border-image',
                        'border-image-outset',
                        'border-image-repeat',
                        'border-image-slice',
                        'border-image-source',
                        'border-image-width',
                        'outline',
                        'outline-color',
                        'outline-offset',
                        'outline-style',
                        'outline-width'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'background',
                        'background-attachment',
                        'background-clip',
                        'background-color',
                        'background-image',
                        'background-origin',
                        'background-position',
                        'background-poistion-x',
                        'background-poistion-y',
                        'background-repeat',
                        'background-size'
                    ]
                },
                {
                    order: 'strict',
                    emptyLineBefore: 'always',
                    properties: [
                        'color'
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
                        'hanging-punctuation',
                        'hyphens',
                        'letter-spacing',
                        'line-break',
                        'line-height'
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
                        'white-space',
                        'word-spacing'
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
