import { AppProps } from 'next/app'

import { GlobalStyles } from 'styles/globals'

function __NextApp(props: AppProps) {
  return (
    <>
      <GlobalStyles />

      <props.Component {...props.pageProps} />
    </>
  )
}

export default __NextApp
