import type {Metadata} from 'next';
import type {ReactNode} from "react";

export const metadata: Metadata = {
    title: {
        default: '省医放疗技术排班站',
        template: "%s | 省医放疗技术排班站"
    },
    icons: {
        icon: [
            {url: '/icons/icon-72x72-v2.png', sizes: '72x72', type: 'image/png'},
            {url: '/icons/icon-96x96-v2.png', sizes: '96x96', type: 'image/png'},
            {url: '/icons/icon-128x128-v2.png', sizes: '128x128', type: 'image/png'},
            {url: '/icons/icon-144x144-v2.png', sizes: '144x144', type: 'image/png'},
            {url: '/icons/icon-152x152-v2.png', sizes: '152x152', type: 'image/png'},
            {url: '/icons/icon-192x192-v2.png', sizes: '192x192', type: 'image/png'},
            {url: '/icons/icon-384x384-v2.png', sizes: '384x384', type: 'image/png'},
            {url: '/icons/icon-512x512-v2.png', sizes: '512x512', type: 'image/png'},
        ],
        apple: [
            {url: '/icons/icon-152x152-v2.png'},
            {url: '/icons/icon-152x152-v2.png', sizes: '152x152', type: 'image/png'},
            {url: '/icons/icon-192x192-v2.png', sizes: '180x180', type: 'image/png'},
        ],
        other: [
            {url: '/icons/icon-192x192-v2.png', sizes: '192x192', type: 'image/png'}
        ]
    },
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html>
        <body>{children}</body>
        </html>
    )
}
