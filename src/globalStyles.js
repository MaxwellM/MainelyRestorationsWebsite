export const commonStyle = {
    import_url: '("https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap")',
    body: {
        // margin: 0,
        // fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
        // "-webkit-font-smoothing": 'antialiased',
        // "-moz-osx-font-smoothing": 'grayscale',
        height: "100%",
        width: "100%",
        // padding: 0

        color: '#fff',
        fontFamily: '"Roboto Condensed", sans-serif',
        backgroundImage: '"url(../../images/ComingSoonBackground.jpeg)"',
        //backgroundImage: 'url(https://images.unsplash.com/photo-1508389377389-b8221c0bcc9e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)',
        backgroundPosition: 'top top',
        backgroundSize: 'cover',
        margin: '0',
    },
    "div#root": {
        minHeight: "100vh",
        position: "relative",
        //minWidth: "fit-content",
        //fallbacks: [{minWidth: "-moz-fit-content"}]
    },
    ".App": {
        height: "100vh",
        display: "flex",
        flexDirection: "column",

        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        textAlign: 'center',
        //background: 'rgb(49,49,177',
        //background: 'linear-gradient( 0deg, rgba(49,49,177, 1) 0%, rgba(49,49,177,1) 50%, rgba(49,49,177,0.6) 100%'
    },
    img: {
        verticalAlign: 'bottom'
    },
    ".focusRing___1airF.carousel__slide-focus-ring": {
        outline: "none !important"
    }
}
