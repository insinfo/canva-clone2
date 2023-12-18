import { DesignFrame } from '@lidojs/design-editor';
import React from 'react';
import { data } from './data';

const EditorContent = () => {
  return <DesignFrame data={data} />;
};

export default EditorContent;
