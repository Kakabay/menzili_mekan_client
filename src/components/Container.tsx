import clsx from 'clsx';
import { ReactNode } from 'react';

const Container = ({ children, service }: { children: ReactNode; service?: boolean }) => {
  return (
    <div
      className={clsx('max-w-[1192px] w-full mx-auto px-4 md:px-3', {
        'h-full': service,
      })}>
      {children}
    </div>
  );
};

export default Container;
