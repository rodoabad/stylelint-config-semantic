module.exports = {
    rules: {
        'custom-property-empty-line-before': [
          'never'
        ],
        'custom-property-no-outside-root': true,
        'custom-property-pattern': /^.([a-z](-[a-z])?)+(__([a-z](-[a-z])?)+)?(--([a-z](-[a-z])?)+)?$/
    }
};
