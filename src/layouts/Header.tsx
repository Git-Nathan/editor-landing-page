import { Button } from '@/components/Button'
import { MenuIcon } from '@/icons/MenuIcon'

export function Header() {
  return (
    <div className='pointer-events-none fixed top-0 z-[100] w-full'>
      <header className='pointer-events-none sticky top-0 z-40 mx-auto w-full max-w-[1440px] px-2 py-2'>
        <div className='inset-0 flex justify-between overflow-hidden rounded-full border border-white/60 bg-gradient-to-br px-5 py-4 backdrop-blur-lg'>
          <p>Logo</p>
          <Button icon={<MenuIcon />} />
        </div>
      </header>
    </div>
  )
}
