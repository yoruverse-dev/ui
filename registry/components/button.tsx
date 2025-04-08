import { motion } from 'motion/react';
import { cn } from '../../src/lib/utils/cn';

export function Button() {
    return (
        <motion.button
            className={cn(

            )}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => alert('Button clicked!')}
        >
            Click me
        </motion.button>
    );
}