import React from 'react'

type Props = {
    id: string,
    content?: React.ComponentType<{
      className?: string;
    }>,
    children?: React.ReactNode;
}

const popup = ({id, content: Content, children}: Props) => {
  if(Content){
    return (
      <div id={id} className="overlay">
        <div className='popup'>
          <Content className='content'></Content>
        </div>
      </div>
    )
  } else {
    return (
      <div id={id} className="overlay">
        <div className='popup'>
          <div className='content'>
            {children}
          </div>
        </div>
      </div>
    )
  }

}

export default popup
