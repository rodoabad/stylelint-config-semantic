module.exports = {
  'rules': {
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'always-where-possible',
    'color-no-hex': null,
    'color-no-invalid-hex': true,
    'font-family-name-quotes': 'single-unless-keyword',
    'font-weight-notation': 'named-where-possible',
    'function-blacklist': null,
    'function-calc-no-unspaced-operator': true,
    'function-comma-newline-after': 'always-multi-line',
    'function-comma-newline-before': 'never-multi-line',
    'function-comma-space-after': 'always-single-line',
    'function-comma-space-before': 'never-single-line',
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-parentheses-newline-inside': 'always-multi-line',
    'function-parentheses-space-inside': 'never-single-line',
    'function-url-quotes': 'single',
    'function-whitelist': null,
    'function-whitespace-after': 'always',
    'number-leading-zero': 'always',
    'number-max-precision': 2,
    'number-no-trailing-zeros': true,
    'number-zero-length-no-unit': true,
    'string-no-newline': true,
    'string-quotes': 'single',
    'time-no-imperceptible': true,
    'unit-blacklist': null,
    'unit-whitelist': null,
    'value-no-vendor-prefix': true,
    'value-list-comma-newline-after': 'always-multi-line',
    'value-list-comma-newline-before': 'never-multi-line',
    'value-list-comma-space-after': 'always-single-line',
    'value-list-comma-space-before': 'never-single-line',
    'custom-property-no-outside-root': true,
    'custom-property-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,
    'property-blacklist': null,
    'property-no-vendor-prefix': true,
    'property-unit-blacklist': null,
    'property-unit-whitelist': null,
    'property-value-blacklist': null,
    'property-value-whitelist': null,
    'property-whitelist': null,
    'declaration-bang-space-after': 'never',
    'declaration-bang-space-before': 'always',
    'declaration-colon-newline-after': null,
    'declaration-colon-space-after': 'always-single-line',
    'declaration-colon-space-before': 'never',
    'declaration-no-important': true,
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
    'declaration-block-trailing-semicolon': 'always',
    'block-closing-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-closing-brace-space-after': 'always-single-line',
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': true,
    'block-no-single-line': true,
    'block-opening-brace-newline-after': 'always',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': 'always',
    'selector-class-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/,
    'selector-combinator-space-after': 'always',
    'selector-combinator-space-before': 'always',
    'selector-id-pattern': null,
    'selector-max-specificity': '0,2,0',
    'selector-no-attribute': true,
    'selector-no-combinator': true,
    'selector-no-id': true,
    'selector-no-type': true,
    'selector-no-universal': true,
    'selector-no-vendor-prefix': true,
    'selector-pseudo-element-colon-notation': 'single',
    'selector-root-no-composition': true,
    'selector-type-case': 'lower',
    'selector-list-comma-newline-after': 'always',
    'selector-list-comma-newline-before': 'never-multi-line',
    'selector-list-comma-space-after': 'always-single-line',
    'selector-list-comma-space-before': 'never',
    'root-no-standard-properties': true,
    'rule-nested-empty-line-before': 'always',
    'rule-non-nested-empty-line-before': 'always',
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-vendor-prefix': true,
    'media-feature-no-missing-punctuation': true,
    'media-feature-range-operator-space-after': 'always',
    'media-feature-range-operator-space-before': 'always',
    'custom-media-pattern': /^([a-z]+-+?)*([a-z]+)$/,
    'media-query-parentheses-space-inside': 'never',
    'media-query-list-comma-newline-after': 'always-multi-line',
    'media-query-list-comma-newline-before': 'never-multi-line',
    'media-query-list-comma-space-after': 'always-single-line',
    'media-query-list-comma-space-before': 'never',
    'at-rule-empty-line-before': [
      'always',
      {
        except: [
          'blockless-group'
        ]
      }
    ],
    'at-rule-no-vendor-prefix': true,
    'at-rule-semicolon-newline-after': 'always',
    'comment-empty-line-before': 'always',
    'comment-whitespace-inside': 'always',
    'indentation': 4,
    'max-empty-lines': 1,
    'max-line-length': 120,
    'max-nesting-depth': 5,
    'no-browser-hacks': [
      true,
      {
        browsers: [
          '> 1%',
          'last 2 versions',
          'Firefox ESR'
        ]
      }
    ],
    'no-descending-specificity': true,
    'no-duplicate-selectors': true,
    'no-eol-whitespace': true,
    'no-indistinguishable-colors': true,
    'no-invalid-double-slash-comments': true,
    'no-missing-eof-newline': true,
    'no-unknown-animations': true,
    'no-unsupported-browser-features': null,
    'stylelint-disable-reason': 'always-after'
  }
};
