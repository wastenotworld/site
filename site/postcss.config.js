module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-preset-env')({
      stage: 0,
      features: {
        'nesting-rules': true,
      },
    }),
    // require('cssnano')({
    //   preset: [
    //     'advanced',
    //     {
    //       discardComments: {
    //         removeAll: true,
    //       },
    //       reduceIdents: false,
    //     },
    //   ],
    // }),
    require('postcss-nested'),
    require('postcss-custom-media'),
    require('postcss-calc'),
    require('postcss-discard-comments'),
    require('postcss-reporter')({
      clearReportedMessages: true,
    }),
  ],
}