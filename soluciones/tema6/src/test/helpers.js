import React from 'react';
import sd from 'skin-deep';

export function shallowRender(Component, props = {}){
  let tree = sd.shallowRender(React.createElement(Component, props));
  return {
    //component instance for method testing
    instance: tree.getMountedInstance(),
    //component output tree
    tree
  }
}