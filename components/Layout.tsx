import { Karla } from '@next/font/google'
import { Navbar, Text } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const karla = Karla({
  weight: '400',
  subsets: ['latin'],
})

// @ts-ignore
export default function Layout({ children }) {
  return (
    <>
      <Navbar isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            STARDUST
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link isActive href="/">
            <Link href="/">Borrow</Link>
          </Navbar.Link>
          <Navbar.Link href="/lend">
            <Link href="/lend">Lend</Link>
          </Navbar.Link>
          <Navbar.Link href="/dashboard">
            <Link href="/dashboard">Dashboard</Link>
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <main className={karla.className}>{children}</main>
    </>
  )
}
