'use client';

import { cn } from '../lib';
import { Button } from './button';

export const Burger = ({
  setIsOpen,
  isOpen,
  className,
  ...props
}: {
  setIsOpen?: (isOpen: boolean) => void;
  isOpen: boolean;
  className?: string;
  [key: string]: any;
}) => {
  const handleClick = () => {
    if (setIsOpen) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <Button
      onClick={handleClick}
      size={'sm'}
      variant={'ghost'}
      className={cn(
        'relative cursor-pointer flex flex-col justify-center items-center ',
        className
      )}
      {...props}
    >
      <span
        className={cn(
          'block  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
          isOpen ? 'rotate-45 translate-y-2' : 'rotate-0 '
        )}
      />
      <span
        className={cn(
          'block  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
          isOpen ? 'opacity-0' : 'opacity-100'
        )}
      />
      <span
        className={cn(
          'block  h-0.5 w-5 bg-current transform transition duration-500 ease-in-out',
          isOpen ? '-rotate-45 -translate-y-2 ' : 'rotate-0 '
        )}
      />
    </Button>
  );
};
