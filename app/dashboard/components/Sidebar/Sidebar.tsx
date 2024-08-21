import React from 'react'

import { routes } from '@/dashboard/routes';
import NaviLink from '@/components/NaviLink/NaviLink';

const Sidebar = () => {
  return (
    <div className='bg-gray-900 w-60 h-screen'>
      {routes.map(route => {
        return <div key={route.path}>
          <NaviLink href={route.path}>
            {route.label}
          </NaviLink>
        </div>
      })}
    </div>
  )
}

export default Sidebar