import React from 'react'

type Props = {
    id: string,
    content: React.ComponentType<{
      className?: string;
    }>;
}

const popup = ({id, content: Content}: Props) => {
  return (
    <div id={id} className="overlay">
      <div className='popup'>
        <Content className='content'></Content>
      </div>
    </div>
  )
}

export default popup
