module.exports = {
    rules: {
        'rule-nested-empty-line-before': 'never',
        'rule-non-nested-empty-line-before': [
            'always',
            {
                'ignore': [
                    'after-comment'
                ],
                'except': [
                    'after-single-line-comment'
                ]
            }
        ]
    }
};
