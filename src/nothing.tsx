import * as React from 'react';

const something = () => <div></div>;

const Draggable = (component: React.FC) => {
  // make component draggable

  return component;
};

const Resizable = (component: React.FC) => {
  // make component resizable

  return component;
};

const ComponentRenderer = (component: React.FC) => {
  return Draggable(Resizable(component));

  // OR
  // component의 props로 핸들링
  // default는 false, 필요한 옵션만 props로 전달

  // let target = component
  // if resizable, target = Resizable(target)
  // if Draggable, target = Draggable(target)
  // return target

  // OR
  // onResize = {resizable?handleResize:null}
  // onDrag = {draggable?handleDrag:null}
};

ComponentRenderer(something);
