import { Navbar, Text } from '@nextui-org/react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

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
            Borrow
          </Navbar.Link>
          <Navbar.Link href="/lend">Lend</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <ConnectButton />
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>
      <main>{children}</main>
    </>
  )
}
