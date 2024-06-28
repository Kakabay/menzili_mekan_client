import clsx from 'clsx';
import { ReactNode } from 'react';

const Container = ({
  children,
  project = false,
  id,
}: {
  children: ReactNode;
  project?: boolean;
  id?: string;
}) => {
  return (
    <div
      id={id ? id : ''}
      className={clsx('max-w-[1192px] w-full mx-auto px-4 md:px-3', {
        'h-full': project,
      })}>
      {children}
    </div>
  );
};

export default Container;
