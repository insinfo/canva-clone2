import XIcon from '@duyank/icons/regular/X';
import { LayerId, SerializedLayers } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import React, { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';
import {
  addABodyText,
  addAHeading,
  addASubheading,
} from '../../constant/text-effects';
import { getThumbnail } from '../../utils/thumbnail';

interface Text {
  img: string;
  elements: {
    rootId: LayerId;
    layers: SerializedLayers;
  };
}

const TextContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { actions } = useEditor();
  const [texts, setTexts] = useState<Text[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useAsync(async () => {
    const response = await axios.get<Text[]>('/texts');
    setTexts(response.data);
    setIsLoading(false);
  }, []);

  const handleAddText = (data: {
    rootId: LayerId;
    layers: SerializedLayers;
  }) => {
    actions.addLayerTree(data);
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
          Text
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
            padding: 16,
            display: 'flex',
            gap: 8,
            flexDirection: 'column',
          }}
        >
          <div
            css={{
              fontSize: 28,
              lineHeight: 1,
              padding: '16px 16px',
              fontWeight: 700,
              background: '#EBECF0',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => handleAddText(addAHeading)}
          >
            Add a heading
          </div>
          <div
            css={{
              fontSize: 18,
              lineHeight: 1,
              padding: '16px',
              fontWeight: 700,
              background: '#EBECF0',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => handleAddText(addASubheading)}
          >
            Add a subheading
          </div>
          <div
            css={{
              fontSize: 12,
              lineHeight: 1,
              padding: '16px',
              fontWeight: 700,
              background: '#EBECF0',
              borderRadius: 4,
              cursor: 'pointer',
            }}
            onClick={() => handleAddText(addABodyText)}
          >
            Add a little bit of body text
          </div>
        </div>
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            gridGap: 8,
            padding: '16px',
          }}
        >
          {isLoading && <div>Loading...</div>}
          {texts.map(({ img, elements }, idx) => (
            <div
              key={idx}
              css={{
                cursor: 'pointer',
                position: 'relative',
                paddingBottom: '100%',
                width: '100%',
              }}
              onClick={() => handleAddText(elements)}
            >
              <img
                css={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '100%',
                  width: '100%',
                  objectFit: 'cover',
                }}
                src={getThumbnail(img)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TextContent;
