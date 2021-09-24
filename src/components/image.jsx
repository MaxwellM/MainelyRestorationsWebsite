import { SRLWrapper } from "simple-react-lightbox";

const options = {
    settings: {
        autoplaySpeed: 0,
        boxShadow: 'none',
        disableKeyboardControls: true,
        //disablePanzoom: false,
        disableWheelControls: true,
        //hideControlsAfter: 3000,
        lightboxTransitionSpeed: 0.3,
        lightboxTransitionTimingFunction: 'linear',
        overlayColor: 'rgba(30, 30, 30, 0.9)',
        slideAnimationType: 'fade',
        slideSpringValues: [300, 50],
        slideTransitionSpeed: 0.6,
        slideTransitionTimingFunction: 'linear',
        usingPreact: false,
        showThumbnailsButton: false,
    },
    buttons: {
        backgroundColor: 'rgba(30,30,36,0.8)',
        iconColor: 'rgba(255, 255, 255, 0.8)',
        iconPadding: '10px',
        showAutoplayButton: false,
        showCloseButton: true,
        showDownloadButton: true,
        showFullscreenButton: true,
        showNextButton: false,
        showPrevButton: false,
        showThumbnailsButton: false,
        size: '40px'
    },
    thumbnails: {
        showThumbnails: false,
    }
}

export const Image = ({ title, image }) => {
  return (
      <SRLWrapper options={options}>
        <div className='portfolio-item'>
          {/*<div className='hover-bg'>*/}
            {' '}
            <div className='gallery-text'>
                <h4>{title}</h4>
            </div>
            <a href={image} title={title} >
              <img src={image} className='img-responsive' alt={title}
              />{' '}
            </a>{' '}
          {/*</div>*/}
        </div>
      </SRLWrapper>
  )
}