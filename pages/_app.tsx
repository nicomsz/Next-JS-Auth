import { SessionProvider } from "next-auth/react"

type Props = {
  Component: any
  pageProps: any
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: Props) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}