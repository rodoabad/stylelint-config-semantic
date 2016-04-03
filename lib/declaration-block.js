module.exports = {
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
                    'padding-top',
                    'padding-right',
                    'padding-bottom',
                    'padding-left'
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
};
