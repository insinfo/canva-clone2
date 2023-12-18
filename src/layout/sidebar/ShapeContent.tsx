import XIcon from '@duyank/icons/regular/X';
import { useEditor } from '@lidojs/design-editor';
import React, { FC } from 'react';
import { isMobile } from 'react-device-detect';
import { Line, lines } from './data/line';
import { Shape, shapes } from './data/shape';

const ShapeContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { actions } = useEditor();
  const addLine = (props: Line['props']) => {
    actions.addLineLayer({ props });
  };
  const addShape = (shape: Shape) => {
    actions.addShapeLayer({
      type: {
        resolvedName: 'ShapeLayer',
      },
      props: {
        shape: shape.type,
        position: {
          x: 0,
          y: 400,
        },
        boxSize: {
          width: shape.width,
          height: shape.height,
        },
        rotate: 0,
        color: '#5E6278',
      },
    });
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
          Shapes
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
      <div css={{ padding: '16px' }}>
        <div css={{ padding: '8px 0', fontWeight: 700 }}>Arrow</div>
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
            gridGap: 8,
          }}
        >
          {lines.map((l, idx) => (
            <div
              key={idx}
              css={{
                width: '100%',
                paddingBottom: '100%',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => addLine(l.props)}
            >
              <div
                css={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {l.icon}
              </div>
            </div>
          ))}
        </div>
        <div css={{ padding: '8px 0', fontWeight: 700 }}>Shape</div>
        <div
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4,minmax(0,1fr))',
            gridGap: 8,
          }}
        >
          {shapes.map((shape) => (
            <div
              key={shape.type}
              css={{
                width: '100%',
                paddingBottom: '100%',
                position: 'relative',
                cursor: 'pointer',
              }}
              onClick={() => addShape(shape)}
            >
              {shape.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShapeContent;
