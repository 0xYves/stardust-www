import { Navbar, Spacer, Text } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar>
        <Navbar.Brand>
          <Text b color="inherit" hideIn="xs">
            STARDUST
          </Text>
        </Navbar.Brand>
        <Navbar.Content enableCursorHighlight hideIn="xs">
          <Navbar.Link as={Link} href="/dashboard">
            Dashboard
          </Navbar.Link>
          <Navbar.Link as={Link} href="/explore">
            Explore
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton chainStatus="none" showBalance={false} />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      {children}
      <Spacer y={3} />
    </>
  )
}
