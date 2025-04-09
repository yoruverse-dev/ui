import { HTMLMotionProps, motion } from 'motion/react';
import { cn } from '../../src/lib/utils/cn';

type Props = {
    color?: 'primary' | 'brand' | 'danger';
    variant?: 'solid' | 'outline' | 'ghost';
    onlyIcon?: boolean;
} & HTMLMotionProps<'button'>;

export function Button({ color = 'brand', variant = 'solid', onlyIcon, className, children, ...props }: Props) {
    return (
        <motion.button
            className={cn(
                'flex items-center justify-center',
                'h-9 px-5',
                'rounded-xl cursor-pointer transition-colors',
                'font-medium text-sm',
                color === 'brand' && (
                    variant === 'outline' ? 'bg-white outline outline-indigo-600 hover:outline-indigo-700 text-indigo-600 hover:text-indigo-700' :
                        variant === 'ghost' ? 'bg-white text-indigo-600 hover:text-indigo-700' :
                            variant === 'solid' && 'bg-indigo-600 hover:bg-indigo-700 text-white'),
                color === 'danger' && (
                    variant === 'outline' ? 'bg-white outline outline-rose-600 hover:outline-rose-700 text-rose-600 hover:text-rose-700' :
                        variant === 'ghost' ? 'bg-white text-rose-600 hover:text-rose-700' :
                            variant === 'solid' && 'bg-rose-600 hover:bg-rose-700 text-white'),
                color === 'primary' && (
                    variant === 'outline' ? 'bg-white outline outline-zinc-900 hover:outline-zinc-800 text-zinc-900 hover:text-zinc-800' :
                        variant === 'ghost' ? 'bg-white text-zinc-900 hover:text-zinc-800' :
                            variant === 'solid' && 'bg-zinc-900 hover:bg-zinc-800 text-white'),
                onlyIcon && 'px-0 w-9',
                className
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}