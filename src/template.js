// html skeleton provider
function template(title, state = {}, content = ''){
  let scripts = '';
  if (content){
    scripts = ` <script>
                   window.__STATE__ = ${JSON.stringify(state)}
                </script>
                <script src="assets/client.js"></script>
                `
  } else {
    scripts = ` <script src="assets/bundle.js"> </script> `
  }
  let page = `
              <html lang="en">
              <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
                <base href="/" />
                <link rel="icon" href="assets/favicon.ico?" type="image/x-icon">
                <title> ${title} </title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB" crossorigin="anonymous">
                <link href="assets/style.css" rel="stylesheet">
              </head>
              <body>
                <div class="clearfix">
                   <div id="app">
                      ${content}
                   </div>
                </div>
                  ${scripts}
              </body>
              </html>
              `;

  return page;
}

module.exports = template;
