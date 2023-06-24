'use client'

import { MouseEventHandler } from 'react'

interface ButtonProps {
  isDisabled?: boolean
  btnType?: 'button' | 'submit'
  containerStyles?: string
  textStyles?: string
  title: string
  rightIcon?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
}

const Button = ({ title, containerStyles, handleClick, }: ButtonProps) => {
  return (
    <button
        disabled={false}
        type={'button'}
        className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containerStyles}`}
        onClick={handleClick}
    >
        <span className='flex-1'>
            {title}
        </span>
    </button>
  )
}

export default Button