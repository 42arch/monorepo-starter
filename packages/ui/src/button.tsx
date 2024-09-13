export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export function Button({ children, ...other }: ButtonProps): JSX.Element {
  const a = 11

  return (
    <button
      type='button'
      {...other}
      style={{
        outline: 'none',
        backgroundColor: '#ffeeee',
        border: '1px sold #444444',
        borderRadius: '4px',
        padding: '4px 8px',
        cursor: 'pointer'
      }}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
