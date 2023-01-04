import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='bg-[#181a1b] absolute inset-0 text-gray-300'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
