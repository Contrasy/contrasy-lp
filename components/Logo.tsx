import { Sparkle } from '@phosphor-icons/react'

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizes = {
  sm: { icon: 'h-5 w-5', text: 'text-lg' },
  md: { icon: 'h-6 w-6', text: 'text-2xl' },
  lg: { icon: 'h-8 w-8', text: 'text-3xl' },
  xl: { icon: 'h-10 w-10', text: 'text-4xl' },
}

export function Logo({ size = 'md', className = '' }: LogoProps) {
  const s = sizes[size]

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Sparkle className={`${s.icon} text-[#2EE59D]`} weight="fill" />
      <span className={`${s.text} font-bold tracking-tight`}>
        Contrasy<span className="text-[#2EE59D]">.ai</span>
      </span>
    </div>
  )
}
