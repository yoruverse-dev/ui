import { Button } from '../registry/components/button';

export default function App() {

  const colors = ['primary', 'brand', 'danger'] as const;
  const variants = ['solid', 'outline', 'ghost'] as const;
  const onlyIcons = [true, false] as const;

  return (
    <main className='p-10 flex gap-10'>
      {colors.map((color) => (
        <section key={color} className='flex flex-col items-center gap-5 max-w-50 w-full'>
          {variants.map((variant) => (
            <>
              {onlyIcons.map((onlyIcon) => (
                <Button
                  key={`${color}-${variant}-${onlyIcon}`}
                  color={color}
                  variant={variant}
                  onlyIcon={onlyIcon}
                >
                  {onlyIcon ? '🔔' : `${color} ${variant}`}
                </Button>
              ))}
            </>
          ))}
        </section>
      ))}
    </main>
  )
}
