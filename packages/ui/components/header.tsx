import { cn } from '../lib/utils';
import { Div, Tag } from './tag';
import { headerVariantConfig } from './tag/src/variants/tags/header';

type Props = {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  children?: React.ReactNode;
  position?: keyof typeof headerVariantConfig.position;
  layout?: keyof typeof headerVariantConfig.layout;
  className?: string;
};

export const Header = ({
  leftContent,
  centerContent,
  rightContent,
  children,
  layout = 'default',
  position = 'static',
  className,
}: Props) => {
  return (
    <Tag
      as='header'
      layout={layout}
      position={position}
      className={cn('px-2 md:px-6', className)}
    >
      <Div layout={'row'} size={'default'} className='w-full'>
        {leftContent && leftContent}
        {centerContent && centerContent}
        {rightContent && rightContent}
      </Div>

      {children && (
        <Div size={'default'} layout={'row'}>
          {children}
        </Div>
      )}
    </Tag>
  );
};
