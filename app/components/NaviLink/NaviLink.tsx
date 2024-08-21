import { PropsWithChildren } from 'react';
import Link from 'next/link';

type NaviLinkProps = PropsWithChildren & {
  href: string;
}

const NaviLink = ({ children, href }: NaviLinkProps) => {
  return (
    <Link href={href}>
      {children}
    </Link>
  )
}

export default NaviLink