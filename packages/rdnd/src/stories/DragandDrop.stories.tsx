import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import './Draggable.css';
import { DragandDrop } from '../DragandDrop';

export default {
  title: 'Components/DragandDrop',
  component: DragandDrop,
} as ComponentMeta<typeof DragandDrop>;

export const Single: ComponentStory<typeof DragandDrop> = () => (
  <DragandDrop
    onDragStart={(rect: DOMRect) => {
      console.log('onDragStart => ', rect);
    }}
    onDragEnd={(rect: DOMRect) => {
      console.log('onDragEnd => ', rect);
    }}
  >
    <div>DragandDrop</div>
  </DragandDrop>
);

export const Multiple: ComponentStory<typeof DragandDrop> = () => (
  <main>
    <DragandDrop
      onDragStart={(rect: DOMRect) => {
        console.log('onDragStart => ', rect);
      }}
    >
      <div>DragandDrop 1</div>
    </DragandDrop>

    <DragandDrop style={{ left: '200px', top: '200px' }}>
      <div style={{ backgroundColor: '#2196f3' }}>DragandDrop 2</div>
    </DragandDrop>
  </main>
);
