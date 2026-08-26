"use client"

import { useEffect } from "react"

const GTM_ID = "GTM-PSBKDSBH"
const GOOGLE_ADS_ID = "AW-18231966537"

export default function AnalyticsScripts() {
  useEffect(() => {
    if (document.getElementById("gtm-script")) return

    const gtmScript = document.createElement("script")
    gtmScript.id = "gtm-script"
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`
    document.head.appendChild(gtmScript)

    const gtagScript = document.createElement("script")
    gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`
    gtagScript.async = true
    document.head.appendChild(gtagScript)

    const configScript = document.createElement("script")
    configScript.innerHTML = `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ADS_ID}');`
    document.head.appendChild(configScript)

    const noscript = document.createElement("noscript")
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`
    document.body.appendChild(noscript)
  }, [])

  return null
}
