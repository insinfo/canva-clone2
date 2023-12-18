import XIcon from '@duyank/icons/regular/X';
import { useEditor } from '@lidojs/design-editor';
import { fetchSvgContent } from '@lidojs/design-utils';
import React, { ChangeEvent, FC, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';

interface UploadContentProps {
  visibility: boolean;
  onClose: () => void;
}

const UploadContent: FC<UploadContentProps> = ({ visibility, onClose }) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const { actions } = useEditor();

  const [images, setImages] = useState<
    { url: string; type: 'svg' | 'image' }[]
  >([]);
  const addImage = async (url: string) => {
    const img = new Image();
    img.onerror = (err) => window.alert(err);
    img.src = url;
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      actions.addImageLayer(
        { url, thumb: url },
        { width: img.naturalWidth, height: img.naturalHeight }
      );
      if (isMobile) {
        onClose();
      }
    };
  };
  const addSvg = async (url: string) => {
    const ele = await fetchSvgContent(url);
    const viewBox = ele.getAttribute('viewBox')?.split(' ') || [];
    const width =
      viewBox.length === 4 ? +viewBox[2] : +(ele.getAttribute('width') || 100);
    const height =
      viewBox.length === 4 ? +viewBox[3] : +(ele.getAttribute('height') || 100);
    actions.addSvgLayer(url, { width, height }, ele);
    if (isMobile) {
      onClose();
    }
  };

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prevState) => {
          return prevState.concat([
            {
              url: reader.result as string,
              type: file.type === 'image/svg+xml' ? 'svg' : 'image',
            },
          ]);
        });
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        overflowY: 'auto',
        display: visibility ? 'flex' : 'none',
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
          Upload Images
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
        css={{
          margin: 16,
          background: '#3a3a4c',
          borderRadius: 8,
          color: '#fff',
          padding: '8px 16px',
          cursor: 'pointer',
          textAlign: 'center',
        }}
        onClick={() => inputFileRef.current?.click()}
      >
        Upload
      </div>
      <input
        ref={inputFileRef}
        accept="image/*"
        css={{ display: 'none' }}
        type={'file'}
        onChange={handleUpload}
      />
      <div css={{ padding: '16px' }}>
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
            gridGap: 8,
          }}
        >
          {images.map((item, idx) => (
            <div
              key={idx}
              css={{ cursor: 'pointer', position: 'relative' }}
              onClick={() =>
                item.type === 'image' ? addImage(item.url) : addSvg(item.url)
              }
            >
              <div css={{ paddingBottom: '100%', height: 0 }} />
              <div
                css={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  css={{ maxHeight: '100%' }}
                  loading="lazy"
                  src={item.url}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadContent;
