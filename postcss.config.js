module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 750,
      viewportHeight: 1334,
      unitPrecision: 5, // 单位转换后保留5位小数
      viewportUnit: 'vw', // px2vw
      selectorBlackList: ['.ignore'],
      minPixelValue: 1,
      mediaQuery: false // 允许在媒体查询中转换'px'
    }
  }
}
