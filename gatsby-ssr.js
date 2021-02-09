const React = require('react')

exports.onRenderBody = ({ setHeadComponents }) => {
  const styles = `
    [translation-origin=off] {
      display: none;
    }

    [translation-origin=on] {
      border-top: 1px dashed rgb(2, 115, 212) 
    }
    
    tr {
      vertical-align: top;
    }
  `
  const style = (
    <style key={`gatsby-remark-translation-style`} type="text/css">
      {styles}
    </style>
  )

  setHeadComponents([
    style
  ])
}
