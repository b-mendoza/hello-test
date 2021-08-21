import { Global, css } from '@emotion/react'

export function GlobalStyles() {
  return (
    <Global
      styles={css`
        html {
          box-sizing: border-box;

          font-size: 62.5%;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

          font-size: 1.2rem;

          margin: 0;

          padding: 0;

          @media (min-width: 280px) {
            font-size: 1.4rem;
          }

          @media (min-width: 340px) {
            font-size: 1.6rem;
          }
        }
      `}
    />
  )
}
