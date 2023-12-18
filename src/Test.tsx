import { FontData } from '@lidojs/design-core';
import { Editor, GetFontQuery, PageControl } from '@lidojs/design-editor';
import axios from 'axios';
import { isArray } from 'lodash';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import AppLayerSettings from './layout/AppLayerSettings';
import HeaderLayout from './layout/HeaderLayout';
import Sidebar from './layout/Sidebar';
import EditorContent from './pages/EditorContent';
import PreviewModal from './PreviewModal';

const Test = () => {
  const leftSidebarRef = useRef<HTMLDivElement>(null);
  const [openPreview, setOpenPreview] = useState(false);

  const getFonts = useCallback((query: GetFontQuery) => {
    const buildParams = (data: Record<string, string | string[]>) => {
      const params = new URLSearchParams();

      Object.entries(data).forEach(([key, value]) => {
        if (isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, value);
        }
      });

      return params;
    };
    return axios
      .get<FontData[]>(`/fonts?${buildParams(query)}`)
      .then((res) => res.data);
  }, []);
  const [viewPortHeight, setViewPortHeight] = useState<number>();
  useEffect(() => {
    const windowHeight = () => {
      setViewPortHeight(window.innerHeight);
    };
    window.addEventListener('resize', windowHeight);
    windowHeight();
    return () => {
      window.removeEventListener('resize', windowHeight);
    };
  }, []);
  return (
    <Editor
      config={{
        assetPath: './assets',
        frame: {
          defaultImage: {
            url: `./assets/images/frame-placeholder.png`,
            width: 1200,
            height: 800,
          },
        },
      }}
      getFonts={getFonts}
    >
      <div
        css={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          height: '100vh',
          maxHeight: viewPortHeight ? `${viewPortHeight}px` : 'auto',
        }}
      >
        <HeaderLayout openPreview={() => setOpenPreview(true)} />
        {openPreview && <PreviewModal onClose={() => setOpenPreview(false)} />}
        <div
          css={{
            display: 'flex',
            flexDirection: 'row',
            flex: 'auto',
            overflow: 'auto',
            background: '#EBECF0',
            '@media (max-width: 900px)': {
              flexDirection: 'column-reverse',
            },
          }}
        >
          <div
            ref={leftSidebarRef}
            css={{
              display: 'flex',
              background: 'white',
            }}
          >
            <Sidebar />
          </div>
          <div
            css={{
              flexGrow: 1,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'auto',
            }}
          >
            <AppLayerSettings />
            <div
              css={{
                flexGrow: 1,
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <EditorContent />
            </div>
            <div
              css={{
                height: 40,
                background: '#fff',
                borderTop: '1px solid rgba(57,76,96,.15)',
                display: 'grid',
                alignItems: 'center',
                flexShrink: 0,
                '@media (max-width: 900px)': {
                  display: 'none',
                },
              }}
            >
              <PageControl />
            </div>
          </div>
        </div>
      </div>
    </Editor>
  );
};

export default Test;
