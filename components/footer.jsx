import React from 'react';
import Image from 'next/future/image';

export default function footer() {
  const css = {
    marginLeft: "20px"
  }
  return (
    <section className="footer">
      <div className="credits">
        <div className="credits__block">
          <Image 
            src="/img/telescope.png"
            width={80} 
            height={29} 
            alt="Telescope"
          />
          <Image 
            src="/img/torch.png"
            style={css}
            width={14} 
            height={26} 
            alt="Circa Victor"
          />
          <div className="credits__block-copy">
            <h3>Data provided by</h3>
            <h3><a href="https://circavictor.com" target="_blank" rel="noreferrer">Circa Victor</a></h3>
          </div>
          <Image 
            id="aws-apn"
            src="/img/aws-apn.jpg" 
            width={109} 
            height={35}
            alt="aws partner network"
          />
        </div>
      </div>
      <div className="cta">
        <a className="cta__button" href="https://twitter.com/intent/tweet?text=Telescope 2018 from Circa Victor&via=circavictor&url=https://telescope.circavictor.com" target="_blank" rel="noreferrer">Share This</a>
        <h3>This political economy ticker is an ongoing project. You can help by <a href="mailto:press@circavictor.com?subject=Let’s Connect!" target="_blank" rel="noreferrer">contributing ideas</a> and <a href="https://twitter.com/intent/tweet?text=Telescope 2018 from Circa Victor&via=circavictor&url=https://telescope.circavictor.com" target="_blank" rel="noreferrer">sharing</a> with your network.</h3>
      </div>
    </section>
  )
}