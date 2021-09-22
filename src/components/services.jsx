export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Our Services</h2>
          <p>
            Mainely Restorations is the woodworking shop of Maxwell and Kourtney Morin, furniture and antique repair craftspeople.  We specialize in furniture repair, restoration and refinishing in the northern Utah area, including West Haven, Ogden, Clinton, and more.
            We use the original types of historic glues, finishes and craftsmanship when applicable.
          </p>
        </div>
        <div className='service-row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <img src={d.img} alt=''  className='service-img'/>{' '}
                  {/*<i className={d.img}></i>*/}
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
