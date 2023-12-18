import XIcon from '@duyank/icons/regular/X';
import { useEditor } from '@lidojs/design-editor';
import React, { FC, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useAsync } from 'react-use';

const VideoContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const [videos, setVideos] = useState<
    { img: string; url: string; width: number; height: number }[]
  >([
    {
      img: 'https://template.canva.com/EAFaarkqz_0/2/0/400w-IVVQCZOr1K4.jpg',
      url: 'https://template.canva.com/EAFaarkqz_0/2/0/400w-xadNArxL6gA.mp4',
      width: 400,
      height: 334,
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const { actions } = useEditor();
  useAsync(async () => {
    //const response = await axios.get<{ img: string; url: string; width: number; height: number }[]>('/videos');
    //setVideos(response.data);
    //setIsLoading(false);
  }, []);

  const addVideo = ({
    url,
    width,
    height,
  }: {
    url: string;
    width: number;
    height: number;
  }) => {
    actions.addVideoLayer({ url }, { width, height });
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
          Images
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
            gridTemplateColumns: 'repeat(3,minmax(0,1fr))',
            padding: '16px',
            gridGap: 8,
          }}
        >
          {isLoading && <div>Loading...</div>}
          {videos.map((item, idx) => (
            <div
              key={idx}
              css={{
                cursor: 'pointer',
                position: 'relative',
                paddingBottom: '100%',
                width: '100%',
              }}
              onClick={() => addVideo(item)}
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
                loading="lazy"
                src={item.img}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoContent;
