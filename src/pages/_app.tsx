import React from 'react';
// import 'tailwindcss/tailwind.css'
import '~/styles/globals.css';
type Props = {
    Component: any;
    pageProps: any;
};
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: Props): JSX.Element {
    return <Component {...pageProps} />;
}
