import { Footer } from '@/modules/core/components/footer'
import { Header } from '@/modules/core/components/header'
import { Container } from '@/modules/core/ui/container'
import { Outlet } from 'react-router-dom'

const Common = () => {
  return (
    <>
      <Header />
      <Container component="main" className="min-h-[80dvh] my-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </Container>
      <Footer />
    </>
  )
}


