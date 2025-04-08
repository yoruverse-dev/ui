import { HTMLMotionProps, motion } from 'motion/react';
import { cn } from '../../src/lib/utils/cn';

type Props = {
    color: 'primary' | 'brand' | 'danger';
    variant: 'solid' | 'outline' | 'ghost';
    onlyIcon: boolean;
} & HTMLMotionProps<'button'>;

export function Button({ color, variant, onlyIcon, className, children, ...props }: Props) {

    return (
        <motion.button
            className={cn(
                'flex items-center justify-center rounded-xl h-9 px-5 font-medium cursor-pointer',
                'bg-indigo-600 text-white',
                className
            )}
            {...props}
            whileHover={{
                y: -3,
            }}
            whileTap={{
                y: 3,
            }}
            animate={{ y: 0 }}
        >
            {children}
        </motion.button>
    );
}