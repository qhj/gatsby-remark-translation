const visit = require("unist-util-visit")
const toString = require("mdast-util-to-string")
const gridTablesParser = require('remark-grid-tables')

const pattern = /[\u2E80-\u2EFF\u2F00-\u2FDF\u3000-\u303F\u31C0-\u31EF\u3200-\u32FF\u3300-\u33FF\u3400-\u4DBF\u4DC0-\u4DFF\u4E00-\u9FBF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF]/

const isTranslation = text => text && pattern.test(text)

module.exports = async ({ markdownAST }) => {

  visit(markdownAST, (node, index, parent) => {
    
    const type = node.type
    if (type !== 'heading' && type !== 'paragraph') {
      return
    }

    !node.data && (node.data = {})

    if (!isTranslation(toString(node))) {
      return
    }

    const last = parent.children[index - 1]

    if (!isTranslation(toString(last))) {
      
      if (type === 'heading' && last.data.hProperties || type === 'paragraph' && !last.data.hProperties) {
        
        node.data.hProperties = {
          ...node.data.hProperties,
          "translation-result": "on"
        }
        
        last.data.hProperties = {
          ...last.data.hProperties,
          "translation-origin": "off"
        }
        
        type === 'heading' && (last.data.hProperties = {
          ...last.data.hProperties,
          "id": toString(node)
        })

        if (type === 'heading') {
          const isLink = element => element.type === 'link'
          const index1 = node.children.findIndex(isLink)
          const index2 = last.children.findIndex(isLink)
          if (index1 !== -1 && index2 !== -1) {
            last.children[index2].url = node.children[index1].url
          }
        }
        
        parent.children.splice(index - 1, 1, parent.children[index])
        parent.children.splice(index, 1, last)
        
      }
    }
  })

  return markdownAST
}

module.exports.setParserPlugins = () => [gridTablesParser]
