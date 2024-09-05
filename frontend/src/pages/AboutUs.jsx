import backgroundImage from '../assets/slide1.png';

const AboutUs = () => {
  return (
    <div className="about-us-section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Hero Section */}
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '10px', textShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)' }}>
          Who We Are
        </h1>
        <p style={{ fontSize: '20px', textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)' }}>
          A legacy of culinary excellence since 1996.
        </p>
      </div>

      {/* Our Story Section */}
      <div className="container-fluid p-5 bg-white" style={{ marginTop: '-50px', borderRadius: '20px', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)' }}>
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#333' }}>Our Journey</h2>
            <p style={{ color: '#555', marginTop: '20px', lineHeight: '1.8' }}>
              From a humble beginning in a small kitchen to becoming a culinary icon, ABC Restaurants journey is a testament to our passion for food and dedication to quality.
            </p>
          </div>
        </div>

        {/* Highlight Sections */}
        <div className="row g-5">
          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#444' }}>Our Roots</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                Our story began in a small kitchen, where our founders love for cooking sparked a movement. Today, we honor our origins by staying true to our core values.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#444' }}>Our Passion</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                We believe that food is an art. Each dish is crafted with the finest ingredients, reflecting our passion for creating unforgettable culinary experiences.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card border-0 h-100" style={{ backgroundColor: '#f7f7f7', padding: '30px', borderRadius: '15px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', color: '#444' }}>Our Future</h3>
              <p style={{ color: '#666', lineHeight: '1.7' }}>
                We are committed to sustainability, innovation, and excellence. As we move forward, we continue to push the boundaries of culinary art.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Vision Section */}
      <div className="container-fluid p-5" style={{ marginTop: '60px', backgroundColor: '#f0f0f0', borderRadius: '20px' }}>
        <div className="row justify-content-center">
          <div className="col-md-10 text-center">
            <h2 style={{ fontSize: '32px', fontWeight: '600', color: '#333' }}>Our Vision</h2>
            <p style={{ color: '#555', marginTop: '20px', lineHeight: '1.8' }}>
              At ABC Restaurant, our vision is to create a space where food brings people together, transcending boundaries and creating unforgettable memories.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
