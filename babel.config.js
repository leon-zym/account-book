module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  // 配置babel，实现按需引入vant组件
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
}
