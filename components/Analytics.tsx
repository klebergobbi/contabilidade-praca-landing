"use client";

import * as React from "react";
import Script from "next/script";
import { getConsent, onConsentChange } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const GADS_ID = process.env.NEXT_PUBLIC_GADS_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

/**
 * Scripts de medição não essenciais. Só montam após consentimento "granted"
 * (LGPD). Sem IDs configurados, nada é carregado.
 */
export function Analytics() {
  const [granted, setGranted] = React.useState(false);

  React.useEffect(() => {
    setGranted(getConsent() === "granted");
    return onConsentChange((v) => setGranted(v === "granted"));
  }, []);

  if (!granted) return null;

  const hasGoogle = Boolean(GA_ID || GADS_ID);

  return (
    <>
      {hasGoogle && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID || GADS_ID}`}
            strategy="afterInteractive"
          />
          <Script id="gtag-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              ${GA_ID ? `gtag('config', '${GA_ID}');` : ""}
              ${GADS_ID ? `gtag('config', '${GADS_ID}');` : ""}
            `}
          </Script>
        </>
      )}

      {META_PIXEL_ID && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window,document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
