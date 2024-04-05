import { bottombarLinks } from '@/constants'
import { Link, useLocation } from 'react-router-dom'

const Bottombar = () => {
  const { pathname } = useLocation()

  return (
    <section className='bottom-bar'>
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route

        return (
                        <Link to={link.route}
                              key={link.label}
                              className={`${isActive && 'rounded-[10px] bg-blue-900'} flex-center flex-col gap-1 p-2 transition`}>
                                    <img
                                        src={link.imgURL}
                                        alt={link.label}
                                        className={`${
                                            isActive && 'invert-white'
                                        }`}
                                    />
                                    <p className='tiny-medium text-light-2'>{link.label}</p>
                        </Link>
        )
      })}
</section>
  )
}

export default Bottombar
