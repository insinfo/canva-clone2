import PlayCircleIcon from '@duyank/icons/regular/PlayCircle';
import { useEditor } from '@lidojs/design-editor';
import React, {
  ChangeEvent,
  forwardRef,
  ForwardRefRenderFunction,
  useRef,
} from 'react';
import { downloadObjectAsJson } from '../utils/download';

interface HeaderLayoutProps {
  openPreview: () => void;
}

const HeaderLayout: ForwardRefRenderFunction<
  HTMLDivElement,
  HeaderLayoutProps
> = ({ openPreview }, ref) => {
  const uploadRef = useRef<HTMLInputElement>(null);
  const { actions, query } = useEditor();
  const handleExport = () => {
    downloadObjectAsJson('file', query.serialize());
  };

  const handleImport = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const fileContent = JSON.parse(reader.result as string);
        actions.setData(fileContent);
      };
      reader.readAsText(file);
      e.target.value = '';
    }
  };
  return (
    <div
      ref={ref}
      css={{
        background: '#1E1E2D',
        padding: '12px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 900px)': {
          padding: 12,
        },
      }}
    >
      <div
        css={{
          color: '#3d8eff',
          fontSize: 35,
        }}
      >
        <div
          css={{ color: 'white', height: 42, paddingTop: 6, paddingBottom: 6 }}
        >
          <img css={{ maxHeight: '100%' }} src={'./assets/logo.png'} />
        </div>
      </div>
      <div css={{ display: 'flex', alignItems: 'center' }}>
        <div
          css={{
            margin: '0 10px',
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 700,
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => uploadRef.current?.click()}
        >
          <input
            ref={uploadRef}
            accept="application/json"
            css={{ display: 'none' }}
            type="file"
            onChange={handleImport}
          />
          Import
        </div>
        <div
          css={{
            margin: '0 10px',
            cursor: 'pointer',
            color: '#fff',
            fontWeight: 700,
            ':hover': {
              textDecoration: 'underline',
            },
          }}
          onClick={() => handleExport()}
        >
          Export
        </div>
        <div
          css={{
            display: 'flex',
            alignItems: 'center',
            color: '#fff',
            lineHeight: 1,
            background: '#3a3a4c',
            padding: '8px 10px',
            borderRadius: 8,
            cursor: 'pointer',
            ':hover': {
              background: 'rgba(58,58,76,0.5)',
            },
          }}
          onClick={openPreview}
        >
          <div css={{ marginRight: 1, fontSize: 10 }}>
            <PlayCircleIcon />
          </div>{' '}
          Preview
        </div>
      </div>
    </div>
  );
};

export default forwardRef(HeaderLayout);
