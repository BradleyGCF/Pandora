import { ButtonPrimary } from '../modules/library/components/button/ButtonPrimary';
import { ButtonSecondary } from '../modules/library/components/button/ButtonSecondary';
import { ButtonDanger } from '../modules/library/components/button/ButtonDanger';

export default function Home() {
  return (
<div className="flex flex-col items-center justify-center min-h-screen space-y-4">
  <h2>Usuarios</h2>
  <div>
    <ButtonPrimary onClick={() => console.log('Primary clicked')}>Primary Button</ButtonPrimary>
  </div>
  <div>
    <ButtonSecondary onClick={() => console.log('Secondary clicked')}>Secondary Button</ButtonSecondary>
  </div>
  <div>
    <ButtonDanger onClick={() => console.log('Danger clicked')}>Danger Button</ButtonDanger>
  </div>
</div>
  )
}