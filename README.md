# gatsby-remark-translation

一个 [angular.cn](https://angular.cn/) 风格的 Gatsby.js 翻译插件

用法与 [gitbook-plugin-translator](https://github.com/asnowwolf/gitbook-plugin-translator) 基本一致，除了表格

由于底层实现机制不一样，表格要使用 [grid tables](https://github.com/zestedesavoir/zmarkdown/tree/master/packages/remark-grid-tables)，参见 [Pandoc User’s Guide](https://pandoc.org/MANUAL.html#extension-grid_tables)。最好也用上[更纱黑体](https://github.com/be5invis/Sarasa-Gothic)这类单个汉字宽度严格等于两个字母宽度的字体

如果要同时使用了 [gatsby-remark-autolink-headers](https://www.gatsbyjs.com/plugins/gatsby-remark-autolink-headers/)，要在 `gatsby-config.js` 中把它放在本插件前面
