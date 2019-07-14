const express = require("express");
const next = require("next");

const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();



// We are going to fill these out in the sections to follow.
function renderFullPage(html, css) {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>My page</title>
        <style id="jss-server-side">${css}</style>
      </head>
      <body>
        <div id="root">${html}</div>
      </body>
    </html>
  `;
  }
  
  function handleRender(req, res) {
    const sheets = new ServerStyleSheets();

    // Render the component to a string.
    const html = ReactDOMServer.renderToString(
      sheets.collect(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>,
      ),
    );
  
    // Grab the CSS from our sheets.
    const css = sheets.toString();
  
    // Send the rendered page back to the client.
    res.send(renderFullPage(html, css));
  }

app
    .prepare()
    .then(() => {
        const server = express();
        const showRoutes = require("./routes/index.js");
        app.use('/build', express.static('build'));

        server.use(handleRender);

        server.use("/api", showRoutes);

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post';
            const queryParams = { title: req.params.id };
            app.render(req, res, actualPage, queryParams);
        });


        server.get("*", (req, res) => {
            return handle(req, res);
        });

        server.listen(PORT, err => {
            if (err) throw err;
            console.log(`> Ready on ${PORT}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });