import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
    return (
        <html {...props.htmlAttributes}>
            <head>
                <meta charSet="utf-8" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <script>
                    (function(f, a, t, h, o, m){
                    a[h]=a[h]||function(){
                        (a[h].q=a[h].q||[]).push(arguments)
                    };
                    o=f.createElement('script'),
                    m=f.getElementsByTagName('script')[0];
                    o.async=1; o.src=t; o.id='fathom-script';
                    m.parentNode.insertBefore(o,m)
                })(document, window, '//fathom.njanjo.com/tracker.js', 'fathom');
                    fathom('set', 'siteId', 'HJMBL');
                    fathom('trackPageview');
                </script>
                <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
                         WebFontConfig = {
                        google: {families: [ 'Source+Sans+Pro:300,400,400i,600,700&display=swap' ]}
                    };
                        (function () {
                        var wf = document.createElement('script');
                        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
                        '://ajax.googleapis.com/ajax/libs/webfont/1.5.18/webfont.js';
                        wf.type = 'text/javascript';
                        wf.async = 'true';
                        var s = document.getElementsByTagName('script')[0];
                        s.parentNode.insertBefore(wf, s);
                    })();
                    `,
                    }}
                />
                {props.headComponents}
            </head>
            <body {...props.bodyAttributes}>
                {props.preBodyComponents}
                <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
                </noscript>
                <div
                    key="body"
                    id="___gatsby"
                    dangerouslySetInnerHTML={{ __html: props.body }}
                />
                {props.postBodyComponents}
            </body>
        </html>
    );
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
};
