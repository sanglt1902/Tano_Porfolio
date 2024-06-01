import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tano Studio",
  description: "Tano Studio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </>
      <body className={inter.className}>{children}</body>
      <Script src="/assets/js/jquery.js" />
      <Script src="/assets/js/popper.min.js" />
      <Script src="/assets/js/bootstrap.min.js" />
      <Script src="/assets/js/owl.js" />
      <Script src="/assets/js/wow.js" />
      <Script src="/assets/js/validation.js" />
      <Script src="/assets/js/jquery.fancybox.js" />
      <Script src="/assets/js/appear.js" />
      <Script src="/assets/js/scrollbar.js" />
      <Script src="/assets/js/nav-tool.js" />
      <Script src="/assets/js/plugins.js" />
      <Script src="/assets/js/parallax-scroll.js" strategy="lazyOnload" />
      <Script src="/assets/js/jquery.lettering.min.js" />
      <Script src="/assets/js/jquery.circleType.js" />
      <Script src="/assets/js/isotope.js" />
      <Script src="/assets/js/countdown.js" />
      <Script src="/assets/js/script.js" />
    </html>
  );
}
