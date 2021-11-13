import NextDocument, { Html, Main, Head, NextScript } from "next/document"
import { GID } from "env/env"
import { Header } from "components/header"
import { Footer } from "components/footer"
import { Widget } from "components/widget"

const analiticsSrc = `https://www.googletagmanager.com/gtag/js?id=${GID}`

export default class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script async src={analiticsSrc}></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GID}');
            `,
            }}
          />

          {/* favicons */}
          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/favicons/apple-touch-icon.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='32x32'
            href='/favicons/favicon-32x32.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='16x16'
            href='/favicons/favicon-16x16.png'
          />
          <link rel='manifest' href='/favicons/site.webmanifest' />
          <link
            rel='mask-icon'
            href='/favicons/safari-pinned-tab.svg'
            color='#5bbad5'
          />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff'></meta>
        </Head>
        <body>
          <Header />
          <Widget bannerId='73_300_60' />
          <Main />
          <NextScript />
          <Widget bannerId='192_300_250' />
          <Widget bannerId='370_300_250' />
          <Footer />
        </body>
      </Html>
    )
  }
}
