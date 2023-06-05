type Props = {
  children: React.ReactNode
}

const Base = ({ children }: Props) => {
  return (
    <section className="flex items-center justify-center min-h-screen">
      {children}
    </section>
  )
}

export default Base