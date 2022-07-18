import React from 'react';

export default () => {
  return (
    <section className="footer">
      <div className="credits">
        <div className="credits__block">
          <img src="/static/img/telescope.png" alt="Telescope"/>
          <img src="/static/img/torch.png" alt="Circa Victor"/>
          <div className="credits__block-copy">
            <h3>Data provided by</h3>
            <h3><a href="https://circavictor.com" target="_blank">Circa Victor</a></h3>
          </div>
          <img id="aws-apn" src="/static/img/aws-apn.jpg" alt="aws partner network"/>
        </div>
      </div>
      <div className="cta">
        <a className="cta__button" href="https://twitter.com/intent/tweet?text=Telescope 2018 from Circa Victor&via=circavictor&url=https://telescope.circavictor.com" target="_blank">Share This</a>
        <h3>This political economy ticker is an ongoing project. You can help by <a href="mailto:press@circavictor.com?subject=Let’s Connect!" target="_blank">contributing ideas</a> and <a href="https://twitter.com/intent/tweet?text=Telescope 2018 from Circa Victor&via=circavictor&url=https://telescope.circavictor.com" target="_blank">sharing</a> with your network.</h3>
      </div>
    </section>
  )
}