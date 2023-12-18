import React, { FC, ReactNode } from 'react';

interface SidebarTabProps {
  tabs: {
    name: string;
    icon: ReactNode;
  }[];
  active: string | null;
  onChange: (e: React.MouseEvent, tab: string) => void;
}

const SidebarTab: FC<SidebarTabProps> = ({ tabs, active, onChange }) => {
  const activeIdx = tabs.findIndex((tab) => tab.name === active);
  return (
    <div
      css={{
        color: '#5E6278',
        borderRight: '1px solid rgba(217, 219, 228, 0.6)',
        '@media (max-width: 900px)': {
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: '#fff',
          display: 'flex',
          justifyContent: 'center',
        },
      }}
    >
      <div
        css={{
          overflow: 'hidden',
          position: 'relative',
          '@media (max-width: 900px)': {
            display: 'flex',
          },
        }}
      >
        {activeIdx >= 0 && (
          <div
            css={{
              background: '#fff',
              width: 72,
              height: 72,
              position: 'absolute',
              left: 0,
              top: 0,
              transform: `translateY(${activeIdx * 100}%)`,
              '@media (max-width: 900px)': {
                display: 'none',
              },
            }}
          >
            <div
              css={{
                position: 'absolute',
                height: 8,
                width: 8,
                right: 0,
                top: -8,
                background:
                  'radial-gradient(circle closest-side,transparent 0,transparent 50%,#fff 0) 200% 200% /400% 400%',
              }}
            />
            <div
              css={{
                position: 'absolute',
                height: 8,
                width: 8,
                right: 0,
                bottom: -8,
                transform: 'scaleY(-1)',
                background:
                  'radial-gradient(circle closest-side,transparent 0,transparent 50%,#fff 0) 200% 200% /400% 400%',
              }}
            />
          </div>
        )}
        {tabs.map((tab, idx) => (
          <div
            key={idx}
            css={{
              color: idx === activeIdx ? '#009ef7' : undefined,
              borderBottomRightRadius: idx === activeIdx - 1 ? 8 : 0,
              borderTopRightRadius: idx === activeIdx + 1 ? 8 : 0,
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '0 2px',
              height: 72,
              width: 72,
              cursor: 'pointer',
              ':hover': {
                color: '#009ef7',
              },
            }}
            onClick={(e) => onChange(e, tab.name)}
          >
            <div css={{ fontSize: 24 }}>{tab.icon}</div>
            <span css={{ fontSize: 10, lineHeight: 1.6, fontWeight: 600 }}>
              {tab.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarTab;
