import { Karla } from '@next/font/google'
import { Navbar, Text } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

const karla = Karla({
  weight: '400',
  subsets: ['latin'],
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar isBordered>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            STARDUST
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn="xs">
          <Navbar.Link as={Link} isActive href="/">
            Borrow
          </Navbar.Link>
          <Navbar.Link as={Link} href="/lend">
            Lend
          </Navbar.Link>
          <Navbar.Link as={Link} href="/dashboard">
            Dashboard
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
