import '../styles/globals.css'
export const metadata = {
  title: 'AbleSay',
  description: 'Able say talk english',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-sky-50'>{children}</body>
    </html>
  )
}
