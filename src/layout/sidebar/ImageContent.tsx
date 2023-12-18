import MagnifyingGlassIcon from '@duyank/icons/regular/MagnifyingGlass';
import XIcon from '@duyank/icons/regular/X';
import { useEventCallback } from '@lidojs/design-core';
import { useEditor } from '@lidojs/design-editor';
import axios from 'axios';
import React, { FC, FormEvent, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import Masonry from 'react-responsive-masonry';
import { useAsync } from 'react-use';
import Photo from './Photo';

const ImageContent: FC<{ onClose: () => void }> = ({ onClose }) => {
  const qRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dataRef = useRef(false);
  const [images, setImages] = useState<
    {
      id: string;
      image: string;
      thumb: string;
      width: number;
      height: number;
      username: string;
      name: string;
    }[]
  >([]);
  const [isLoading, setIsLoading] = useState(true);
  const [keyword, setKeyword] = useState('');
  const { actions } = useEditor();

  const loadImageList = useEventCallback(async (offset = 0) => {
    dataRef.current = true;
    setIsLoading(true);
    const params = {
      limit: '40',
      page: (images.length % 40) + 1 + '',
      q: keyword,
    };
    const response = await axios.get<
      {
        id: string;
        image: string;
        thumb: string;
        width: number;
        height: number;
        username: string;
        name: string;
      }[]
    >(`/images?${new URLSearchParams(params).toString()}`);
    if (offset) {
      setImages((prevState) => {
        prevState.push(...response.data);
        return prevState;
      });
    } else {
      setImages(response.data);
    }
    setIsLoading(false);
    if (response.data.length > 0) {
      dataRef.current = false;
    }
  });
  useAsync(async () => {
    await loadImageList(0);
  }, [loadImageList]);

  useEffect(() => {
    const handleLoadMore = async (e: Event) => {
      const node = e.target as HTMLDivElement;
      if (
        node.scrollHeight - node.scrollTop - 80 <= node.clientHeight &&
        !dataRef.current
      ) {
        await loadImageList(images.length);
      }
    };
    scrollRef.current?.addEventListener('scroll', handleLoadMore);
    return () => {
      scrollRef.current?.removeEventListener('scroll', handleLoadMore);
    };
  }, [loadImageList, images]);
  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
    setKeyword(qRef.current?.value || '');
    setTimeout(async () => {
      await loadImageList(0);
    });
  };
  const addImage = async (item: {
    id: string;
    image: string;
    thumb: string;
    width: number;
    height: number;
    username: string;
    name: string;
  }) => {
    actions.addImageLayer(
      { thumb: item.thumb, url: item.image },
      { width: item.width, height: item.height }
    );
    axios.put(`/images?id=${item.id}`);
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
        css={{
          flexDirection: 'column',
          overflowY: 'auto',
          display: 'flex',
          flexGrow: 1,
        }}
      >
        <div
          css={{
            borderRadius: 4,
            boxShadow: '0 0 0 1px rgba(43,59,74,.3)',
            margin: 16,
          }}
        >
          <div
            css={{
              height: 40,
              borderRadius: 4,
              padding: '0 12px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div css={{ fontSize: 24, marginRight: 8, flexShrink: 0 }}>
              <MagnifyingGlassIcon />
            </div>
            <form onSubmit={handleSearch}>
              <input
                ref={qRef}
                css={{ width: '100%', height: '100%' }}
                type={'text'}
              />
            </form>
          </div>
        </div>
        <div
          ref={scrollRef}
          css={{
            flexGrow: 1,
            overflowY: 'auto',
            padding: '16px',
            gridGap: 8,
          }}
        >
          <Masonry columnsCount={2} gutter="8px">
            {images.map((item, idx) => (
              <Photo
                key={idx}
                image={item.thumb}
                name={item.name}
                username={item.username}
                onClick={() => {
                  addImage(item);
                }}
              />
            ))}
          </Masonry>
          {isLoading && <div>Loading...</div>}
        </div>
      </div>

      <div css={{ flexShrink: 0, paddingLeft: 16, textAlign: 'center' }}>
        Photos by{' '}
        <a href="https://unsplash.com/" rel="noreferrer" target="_blank">
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default ImageContent;
