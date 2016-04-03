module.exports = {
    rules: {
        'at-rule-empty-line-before': [
            'always',
            {
                except: [
                    'blockless-group'
                ]
            }
        ],
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always'
    }
};
