import { getPageSize } from '@lidojs/design-core';
import { Frame } from '@lidojs/design-screen';
import React from 'react';
import { data } from './data';

const Publish = () => {
  const size = getPageSize(data);
  return (
    <div
      css={{
        minWidth: '100vw',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Frame data={data} height={size.height} width={size.width} />
    </div>
  );
};

export default Publish;
