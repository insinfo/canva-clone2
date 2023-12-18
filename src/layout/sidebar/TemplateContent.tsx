import XIcon from '@duyank/icons/regular/X';
import { SerializedPage } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';

interface Template {
  img: string;
  elements: SerializedPage;
}

const TemplateContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { actions, activePage } = useEditor((state) => ({
    activePage: state.activePage,
  }));
  useAsync(async () => {
    const response = await axios.get<Template[]>('/templates');
    setTemplates(response.data);
    setIsLoading(false);
  }, []);
  const addPage = async (data: SerializedPage) => {
    actions.setPage(activePage, data);
    if (isMobile) {
      onClose();
    }
  };
  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
        display: 'flex',
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          height: 48,
          borderBottom: '1px solid rgba(57,76,96,.15)',
          padding: '0 20px',
        }}
      >
        <p
          css={{
            lineHeight: '48px',
            fontWeight: 600,
            color: '#181C32',
            flexGrow: 1,
          }}
        >
          Templates
        </p>
        <div
          css={{
            fontSize: 20,
            flexShrink: 0,
            width: 32,
            height: 32,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={onClose}
        >
          <XIcon />
        </div>
      </div>
      <div
        css={{ flexDirection: 'column', overflowY: 'auto', display: 'flex' }}
      >
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
            gridGap: 8,
            padding: '16px',
          }}
        >
          {isLoading && <div>Loading...</div>}
          {templates.map((item, index) => (
            <div
              key={index}
              css={{ cursor: 'pointer' }}
              onClick={() => addPage(item.elements)}
            >
              <img loading="lazy" src={item.img} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateContent;
