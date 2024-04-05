import { Link, NavLink, useLocation } from 'react-router-dom'

import { sidebarLinks } from '@/constants'
import { INavLink } from '@/types'


const LeftSidebar = () => {

  const { pathname } = useLocation()
 
  return (
    <nav className='leftsidebar'>
        <div className='flex flex-col gap-11'>
            <Link to='/' className='flex items-center gap-3'>
                <img src="/assets/images/logo.svg"
                     alt="logo"
                     width={170}
                     height={36}
                     className="logo-leftsidebar"
                      />
            </Link>

            <ul className="flex flex-col gap-6">
                {sidebarLinks.map((link:INavLink) => {
                  const isActive = pathname === link.route

                  return (
                        <li key={link.label} className={`leftsidebar-link group ${isActive && 'bg-blue-900'} `}>
                            <NavLink
                                to={link.route}
                                className='flex items-center gap-4 p-4'>
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`group-hover:invert-white ${
                                            isActive && 'invert-white'
                                        }`}
                                    />
                                    {link.label}
                            </NavLink>
                        </li>

                  )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default LeftSidebar
