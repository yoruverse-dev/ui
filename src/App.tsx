import { Button } from '../registry/components/button';

export default function App() {

  const colors = ['primary', 'brand', 'danger'] as const;

  return (
    <main className='p-10 flex gap-10'>
      {colors.map((color) => (
        <section key={color} className='flex flex-col items-center gap-5 max-w-50 w-full'>
          <Button color={color} variant='solid'>
            <span>Click me</span>
          </Button>
          <Button color={color} variant='outline'>
            <span>Click me</span>
          </Button>
          <Button color={color} variant='ghost'>
            <span>Click me</span>
          </Button>
          <Button color={color} variant='solid' onlyIcon>
            <span>A</span>
          </Button>
          <Button color={color} variant='outline' onlyIcon>
            <span>A</span>
          </Button>
          <Button color={color} variant='ghost' onlyIcon>
            <span>A</span>
          </Button>
        </section>
      ))}
    </main>
  )
}
