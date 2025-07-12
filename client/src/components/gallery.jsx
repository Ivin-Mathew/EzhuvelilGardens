import { useCallback, useEffect, useRef, useState } from 'react';
import LightGallery from 'lightgallery/react';
import lgZoom from 'lightgallery/plugins/zoom';
import '../assets/styles.scss';
import lgThumbnail from 'lightgallery/plugins/thumbnail';

const Gallery = ({ name }) => {
  const containerRef = useRef(null);
  const [galleryContainer, setGalleryContainer] = useState(null);

  const onInit = useCallback((detail) => {
    if (detail) {
      detail.instance.openGallery();
    }
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setGalleryContainer('aaa');
    }
  }, []);

  return (
    <div className="Gallery">
      <HeaderComponent />
      <div
        style={{
          height: '800px',
        }}
        ref={containerRef}
      ></div>
      <div>
        <LightGallery
          container={containerRef.current}
          onInit={onInit}
          plugins={[lgZoom, lgThumbnail]}
          closable={false}
          showMaximizeIcon={true}
          slideDelay={400}
          thumbWidth={130}
          thumbHeight={'100px'}
          thumbMargin={6}
          GalleryendSubHtmlTo={'.lg-item'}
          dynamic={true}
          dynamicEl={[
            {
              src: 'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                          <p>Published on November 13, 2018</p>
                      </div>`,
            },
            {
              src: 'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1473876988266-ca0860a443b8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                          <p>Published on September 14, 2016</p>
                      </div>`,
            },
            {
              src: 'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1588953936179-d2a4734c5490?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                          <p>Published on May 8, 2020</p>
                      </div>`,
            },
            {
              src: 'https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1591634616938-1dfa7ee2e617?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@brookecagle">Brooke Cagle</a></h4>
                          <p>Description of the slide 4</p>
                      </div>`,
            },
            {
              src: 'https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1543059509-6d53dbee1728?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@yehyeh246">Yeh Xintong</a></h4>
                          <p>Description of the slide 5</p>
                      </div>`,
            },
            {
              src: 'https://images.unsplash.com/photo-1504199365-0d35a12345b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1400&q=80',
              responsive:
                'https://images.unsplash.com/photo-1504199365-0d35a12345b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1504199365-0d35a12345b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80 800',
              thumb:
                'https://images.unsplash.com/photo-1504199365-0d35a12345b2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=240&q=80',
              subHtml: `<div class="lightGallery-captions">
                          <h4>Photo by <a href="https://unsplash.com/@alicekat">Alice Kat</a></h4>
                          <p>Description of the slide 6</p>
                      </div>`,
            },
          ]}
          hash={false}
          elementClassNames={'inline-gallery-container'}
        />
      </div>
    </div>
  );
};

const HeaderComponent = () => (
  <div className="header">
    <h1 className="header__title">lightGallery - Inline Gallery</h1>
    <p className="header__description">
      lightGallery is a feature-rich, modular JavaScript gallery plugin for
      building beautiful image and video galleries for the web and the mobile
    </p>
    <p className="header__description2">
      With lightGallery you can create both inline and lightBox galleries. You
      can create inline gallery by passing the container element via container
      option. All the lightBox features are available in inline gallery as well.
      inline gallery can be converted to the lightBox gallery by clicking on the
      maximize icon on the toolbar
    </p>
    <a
      className="header__button"
      href="https://github.com/sachinchoolur/lightgallery.js"
    >
      View on GitHub
    </a>
  </div>
);

export default Gallery;
