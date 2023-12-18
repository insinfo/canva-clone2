import XIcon from '@duyank/icons/regular/X';
import { Preview } from '@lidojs/design-editor';
import React, { FC } from 'react';

interface PreviewModalProps {
  onClose: () => void;
}

const PreviewModal: FC<PreviewModalProps> = ({ onClose }) => {
  return (
    <div
      css={{
        position: 'fixed',
        inset: 0,
        zIndex: 1040,
        background: 'rgba(13,18,22,.95)',
      }}
    >
      <Preview />
      <div
        css={{
          background: 'rgba(255,255,255,0.3)',
          width: 60,
          height: 60,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          right: 24,
          top: 24,
          borderRadius: '50%',
          fontSize: 36,
          color: '#fff',
          cursor: 'pointer',
        }}
        onClick={onClose}
      >
        <XIcon />
      </div>
    </div>
  );
};

export default PreviewModal;
