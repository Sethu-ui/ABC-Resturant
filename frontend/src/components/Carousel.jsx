import small1 from '../assets/slide1.png';

const HeroSection = () => {
  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-white">
      <div className="container h-100 d-flex flex-column justify-content-center align-items-center text-center">
        <div className="row w-100 h-100">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-2 font-weight-bold mb-3 text-primary">
              Elevate Your Experience
            </h1>
            <p className="h5 text-muted mb-4">
              Discover the future of modern solutions, crafted just for you.
            </p>
            <a href="#features" className="btn btn-dark btn-lg px-5 py-3 rounded-pill">
              Get Started
            </a>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div 
              className="image-container" 
              style={{ 
                position: 'relative', 
                width: '80%', 
                height: '80%', 
                borderRadius: '50%', 
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' 
              }}
            >
              <img 
                src={small1} 
                alt="Featured image" 
                className="img-fluid" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  transition: 'transform 0.4s ease-in-out',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
