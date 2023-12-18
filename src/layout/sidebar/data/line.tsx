import { DeepPartial, LineLayerProps } from '@lidojs/design-editor';
import React, { ReactElement } from 'react';

export type Line = {
  props: DeepPartial<LineLayerProps>;
  icon: ReactElement;
};

export const lines: Line[] = [
  {
    props: {
      style: 'solid',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="0.5"
          x2="32.5"
        />
      </svg>
    ),
  },
  {
    props: {
      style: 'shortDashes',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray="3,1"
          stroke-linecap="butt"
          x1="0.5"
          x2="32.5"
        />
      </svg>
    ),
  },
  {
    props: {
      style: 'dots',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray="1,1"
          stroke-linecap="butt"
          x1="0.5"
          x2="32.5"
        />
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'bar',
      arrowEnd: 'bar',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="1"
          x2="32"
        />
        <rect height="4" rx="0.5" stroke="none" width="1" x="0" y="-2" />
        <g transform="translate(33)">
          <rect height="4" rx="0.5" stroke="none" width="1" x="-1" y="-2" />
        </g>
      </svg>
    ),
  },

  {
    props: {
      style: 'dots',
      arrowStart: 'none',
      arrowEnd: 'arrow',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray="1,1"
          stroke-linecap="butt"
          x1="0.5"
          x2="32.25"
        />
        <g transform="translate(33)">
          <path
            d="M -2.5,-1.5,-0.5,0,-2.5,1.5 "
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'arrow',
      arrowEnd: 'arrow',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="0.75"
          x2="32.25"
        ></line>
        <path
          d="M 2.5,-1.5,0.5,0,2.5,1.5 "
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <g transform="translate(33)">
          <path
            d="M -2.5,-1.5,-0.5,0,-2.5,1.5 "
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },

  {
    props: {
      style: 'solid',
      arrowStart: 'outlineDiamond',
      arrowEnd: 'outlineDiamond',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="3.5"
          x2="29.5"
        ></line>
        <path
          d="M 0.5,0 l 1.5,-1.5 1.5,1.5 -1.5,1.5 Z"
          fill="none"
          stroke-linejoin="round"
        ></path>
        <g transform="translate(33)">
          <path
            d="M -0.5,0 l -1.5,-1.5 -1.5,1.5 1.5,1.5 Z"
            fill="none"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'diamond',
      arrowEnd: 'diamond',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="3.5"
          x2="29.5"
        ></line>
        <path
          d="M 0.5,0 l 1.5,-1.5 1.5,1.5 -1.5,1.5 Z"
          fill="inherit"
          stroke-linejoin="round"
        ></path>
        <g transform="translate(33)">
          <path
            d="M -0.5,0 l -1.5,-1.5 -1.5,1.5 1.5,1.5 Z"
            fill="inherit"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'none',
      arrowEnd: 'arrow',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="0.5"
          x2="32.25"
        ></line>
        <g transform="translate(33)">
          <path
            d="M -2.5,-1.5,-0.5,0,-2.5,1.5 "
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'none',
      arrowEnd: 'triangle',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="0.5"
          x2="30"
        ></line>
        <g transform="translate(33)">
          <path
            d="M -2.5,-1.5,-0.5,0,-2.5,1.5 Z"
            fill="inherit"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'circle',
      arrowEnd: 'circle',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="4"
          x2="29"
        ></line>
        <circle cx="2" fill="inherit" r="1.5"></circle>
        <g transform="translate(33)">
          <circle cx="-2" fill="inherit" r="1.5"></circle>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'square',
      arrowEnd: 'square',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="4"
          x2="29"
        ></line>
        <rect
          fill="inherit"
          height="3"
          stroke-linejoin="round"
          width="3"
          x="0.5"
          y="-1.5"
        ></rect>
        <g transform="translate(33)">
          <rect
            fill="inherit"
            height="3"
            stroke-linejoin="round"
            width="3"
            x="-3.5"
            y="-1.5"
          ></rect>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'outlineSquare',
      arrowEnd: 'outlineSquare',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="4"
          x2="29"
        ></line>
        <rect
          fill="none"
          height="3"
          stroke-linejoin="round"
          width="3"
          x="0.5"
          y="-1.5"
        ></rect>
        <g transform="translate(33)">
          <rect
            fill="none"
            height="3"
            stroke-linejoin="round"
            width="3"
            x="-3.5"
            y="-1.5"
          ></rect>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'dots',
      arrowStart: 'triangle',
      arrowEnd: 'triangle',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray="1,1"
          stroke-linecap="butt"
          x1="3"
          x2="30"
        ></line>
        <path
          d="M 2.5,-1.5,0.5,0,2.5,1.5 Z"
          fill="inherit"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
        <g transform="translate(33)">
          <path
            d="M -2.5,-1.5,-0.5,0,-2.5,1.5 Z"
            fill="inherit"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </g>
      </svg>
    ),
  },
  {
    props: {
      style: 'solid',
      arrowStart: 'outlineCircle',
      arrowEnd: 'outlineCircle',
      boxSize: {
        height: 4,
      },
      color: 'rgb(94, 98, 120)',
    },
    icon: (
      <svg
        fill="currentColor"
        stroke="currentColor"
        style={{ overflow: 'visible' }}
        viewBox="0 -0.5 33 1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          fill="none"
          stroke-dasharray=""
          stroke-linecap="butt"
          x1="4"
          x2="29"
        ></line>
        <circle cx="2" fill="none" r="1.5"></circle>
        <g transform="translate(33)">
          <circle cx="-2" fill="none" r="1.5"></circle>
        </g>
      </svg>
    ),
  },
];
