import FrameCornersIcon from '@duyank/icons/regular/FrameCorners';
import ImageIcon from '@duyank/icons/regular/Image';
import LayoutIcon from '@duyank/icons/regular/Layout';
import PiggyBankIcon from '@duyank/icons/regular/PiggyBank';
import SquareIcon from '@duyank/icons/regular/Square';
import TextTIcon from '@duyank/icons/regular/TextT';
import UploadIcon from '@duyank/icons/regular/Upload';
import VideoIcon from '@duyank/icons/regular/Video';
import { useEditor } from '@lidojs/design-editor';
import React, { useState } from 'react';
import SidebarTab from '../tabs/TabList';
import FrameContent from './sidebar/FrameContent';
import GraphicContent from './sidebar/GraphicContent';
import ImageContent from './sidebar/ImageContent';
import ShapeContent from './sidebar/ShapeContent';
import TemplateContent from './sidebar/TemplateContent';
import TextContent from './sidebar/TextContent';
import UploadContent from './sidebar/UploadContent';
import VideoContent from './sidebar/VideoContent';

const tabs = [
  {
    name: 'Template',
    icon: <LayoutIcon />,
  },
  {
    name: 'Text',
    icon: <TextTIcon />,
  },
  {
    name: 'Shape',
    icon: <SquareIcon />,
  },
  {
    name: 'Frame',
    icon: <FrameCornersIcon />,
  },
  {
    name: 'Image',
    icon: <ImageIcon />,
  },
  {
    name: 'Graphic',
    icon: <PiggyBankIcon />,
  },
  {
    name: 'Video',
    icon: <VideoIcon />,
  },
  {
    name: 'Upload',
    icon: <UploadIcon />,
  },
];
const Sidebar = () => {
  const { actions } = useEditor();
  const [tab, setTab] = useState<string | null>(null);
  return (
    <div
      css={{
        display: 'flex',
        zIndex: 2,
        position: 'relative',
        backgroundColor: '#ffffff',
        borderRight: '1px solid rgba(217, 219, 228, 0.6)',
      }}
    >
      <div
        css={{
          display: 'flex',
        }}
      >
        <SidebarTab
          active={tab}
          tabs={tabs}
          onChange={(_, tab) => {
            actions.setSidebar();
            setTab(tab);
          }}
        />
        {tab && (
          <div
            css={{
              width: 360,
              '@media (max-width: 900px)': {
                width: '100%',
                position: 'fixed',
                bottom: 0,
                left: 0,
                top: 0,
                background: '#fff',
              },
            }}
          >
            {tab === 'Template' && (
              <TemplateContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Text' && (
              <TextContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Frame' && (
              <FrameContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Image' && (
              <ImageContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Graphic' && (
              <GraphicContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Video' && (
              <VideoContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            {tab === 'Shape' && (
              <ShapeContent
                onClose={() => {
                  setTab(null);
                  actions.setSidebar();
                }}
              />
            )}
            <UploadContent
              visibility={tab === 'Upload'}
              onClose={() => {
                setTab(null);
                actions.setSidebar();
              }}
            />
          </div>
        )}
      </div>
      <div
        css={{
          width: 360,
          position: 'absolute',
          overflow: 'hidden',
          top: 0,
          left: 73,
          height: '100%',
          pointerEvents: 'none',
        }}
        id={'settings'}
      />
    </div>
  );
};

export default Sidebar;
