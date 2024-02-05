import React from 'react'
import { X } from '@components/Icons/X';

type Props = {
    id: string,
    enableClose?: boolean;
    content: React.ComponentType<{
      className?: string;
    }>;
}

const popup = ({id, enableClose = true, content: Content}: Props) => {
  return (
    <div id={id} className="overlay">
      <div className='popup'>
        {enableClose ? <X className="close" href="#"></X> : null}
        <Content className='content'></Content>
      </div>
    </div>
  )
}

export default popup
