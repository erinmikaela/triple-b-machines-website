import { useState, useEffect, useRef } from "react";

const keyFeatures = [
  {
    title: "Safety",
    description: "Enclosed blade system reduces injury risk."
  },
  {
    title: "Efficiency",
    description: "Processes coconuts faster than manual scraping."
  },
  {
    title: "Durability",
    description: "Made with stainless steel for long-term use."
  },
  {
    title: "Affordable",
    description: "Lower cost compared to imported machines."
  }
];

const reasons = [
  {
    title: "Local Manufacturing",
    description: "Supports local jobs and ensures easy maintenance."
  },
  {
    title: "After-Sales Support",
    description: "Training, repair, and spare parts available."
  },
  {
    title: "Energy Efficient",
    description: "Low power consumption for daily use."
  }
];

const teamMembers = [
  {
    name: "Rodel Galicia",
    role: "Owner and Manager",
    focus: "Machine design, prototyping, and safety compliance",
    image: "/Rodel_Galicia.jpg"
  },
  {
    name: "Lawrence Tuliao",
    role: "Machine Technician and Fabricator",
    focus: "Fabrication workflow, quality checks, and deployment",
    image: "/Lawrence_Tuliao.jpg"
  },
  {
    name: "Samantha Mae Benitez",
    role: "Finance & Record Officer",
    focus: "Farmer onboarding, after-sales support, and partnerships",
    image: "/Samantha_Mae_Benitez.jpg"
  },
  {
    name: "Honey Grace Timbang",
    role: "Production Supervisor",
    focus: "Farmer onboarding, after-sales support, and partnerships",
    image: "/Honey_Grace_Timbang.jpg"
  },
  {
    name: "Eloyda Pascual",
    role: "Sales & Marketing Officer",
    focus: "Farmer onboarding, after-sales support, and partnerships",
    image: "/Eloyda_Pascual.jpg"
  }
];

function FeatureGrid({ items }) {
  return (
    <div className="feature-grid">
      {items.map((item) => (
        <article key={item.title} className="feature-card">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export default function App() {
  return (
    <>
      <header className="site-header" id="home">
        <div className="header-inner">
          <div className="brand-mark">
            <img
              src="/LOGO.jpg"
              alt="Triple B Machines logo"
              className="brand-logo"
              onError={(event) => {
                event.currentTarget.style.display = "none";
                event.currentTarget.nextElementSibling.style.display = "grid";
              }}
            />
          </div>
            <div className="title-block">
              <h1>Triple B Machines</h1>
              <p className="tagline">Big Machines. Bigger Yields. Better Results.</p>
            </div>
        </div>
      </header>

      <nav className="site-nav">
        <a href="#home">Home</a>
        <a href="#product">Product</a>
        <a href="#market">Market</a>
        <a href="#members">Members</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <main>
        <section className="section hero">
          <h2>Modernizing Coconut Processing in the Philippines</h2>
          <p>
            Triple B Machines provides innovative, affordable, and safe agricultural
            solutions designed for farmers, vendors, and cooperatives.
          </p>
        </section>

        <section id="product" className="section">
          <h2>Our Flagship Product</h2>
          <article className="product-card">
            <div className="product-layout">
              <div className="product-media">
                <ProductGallery />
              </div>
              <div className="product-details">
                <h3>Coconut Meat Scraper Machine</h3>
                <p>
                  A motor-driven, food-grade machine designed for faster, safer, and
                  more efficient coconut meat extraction.
                </p>
                <ul className="specs-list">
                  <li>
                    <strong>Capacity:</strong> 60-90 coconuts/hour
                  </li>
                  <li>
                    <strong>Power:</strong> 1.5 HP
                  </li>
                  <li>
                    <strong>Speed:</strong> 1200-1500 RPM
                  </li>
                  <li>
                    <strong>Price:</strong> PHP 20,000 - PHP 25,000
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section className="section">
          <h2>Key Features</h2>
          <FeatureGrid items={keyFeatures} />
        </section>

        <div className="market-about-wrapper">
          <section id="market" className="section alt">
            <h2>Our Target Market</h2>
            <p>
              We serve coconut farmers, small food vendors, cooperatives, household
              users, and Local Government Units (LGUs) across the Philippines.
            </p>
            <p>
              With millions of coconut farmers nationwide, Triple B aims to provide
              accessible mechanization solutions that improve productivity and income.
            </p>
          </section>

          <section id="about" className="section">
            <h2>About the Company</h2>
            <p>
              Triple B Company was established in 2026 as an engineering-driven
              initiative to support agricultural modernization in the Philippines.
            </p>
            <p>
              Our mission is to design and manufacture low-cost, high-quality
              agricultural machines that improve efficiency, safety, and productivity
              for small-scale users.
            </p>
          </section>
        </div>

        <section id="members" className="section members">
          <h2>Our Members</h2>
          <p>
            Meet the people building practical machine solutions for coconut
            processing communities.
          </p>
          <div className="members-grid">
            {teamMembers.map((member) => {
              const initials = member.name
                .split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("");

              return (
                <article key={member.name} className="member-card">
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="member-photo"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling.style.display = "flex";
                      }}
                    />
                  ) : null}
                  <h3>{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p>{member.focus}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section">
          <h2>Why Choose Us?</h2>
          <FeatureGrid items={reasons} />
        </section>

        <section id="contact" className="section contact">
          <h2>Contact Us</h2>
          <p>Email: tripleb.abe1@gmail.com</p>
          <p>Phone: 09310090886</p>
          <p>Location: Dipaculao, Aurora, Philippines</p>
        </section>
      </main>

      <footer>
        <p>Copyright 2026 Triple B Machines. All Rights Reserved.</p>
      </footer>
    </>
  );
}

function ProductGallery() {
  const productImages = ["/4.png", "/5.png", "/6.png", "/7.png", "/8.png"];
  const startIndex = productImages.indexOf("/5.png") >= 0 ? productImages.indexOf("/5.png") : 0;
  const [index, setIndex] = useState(startIndex);
  const isPaused = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!isPaused.current) {
        setIndex((i) => (i + 1) % productImages.length);
      }
    }, 3000);
    return () => clearInterval(id);
  }, []);

  function prev() {
    setIndex((i) => (i - 1 + productImages.length) % productImages.length);
  }
  function next() {
    setIndex((i) => (i + 1) % productImages.length);
  }

  return (
    <div
      className="carousel carousel-panel"
      onMouseEnter={() => (isPaused.current = true)}
      onMouseLeave={() => (isPaused.current = false)}
    >
      <div className="carousel-frame">
        <button className="carousel-btn prev" onClick={prev} aria-label="Previous">
          ‹
        </button>
        <img
          key={productImages[index]}
          src={productImages[index]}
          alt="Coconut meat scraper machine"
          className="product-image carousel-main"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
        <button className="carousel-btn next" onClick={next} aria-label="Next">
          ›
        </button>
      </div>

      <div className="product-thumbs">
        {productImages.map((img, i) => (
          <img
            key={img}
            src={img}
            alt={`thumbnail-${i}`}
            className={`product-thumb ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ))}
      </div>
    </div>
  );
}

function GettyBackground() {
  // inject Getty embed widget and make it behave as a full-bleed background
  const ref = React.createRef();

  useEffect(() => {
    // create the anchor the widget expects
    const anchor = document.createElement('a');
    anchor.id = 'qO9JrISNSUlWpSWa62Fe8A';
    anchor.className = 'gie-single';
    anchor.href = 'https://www.gettyimages.com/detail/1016307290';
    anchor.style.display = 'inline-block';
    anchor.style.border = 'none';
    anchor.style.color = 'transparent';
    anchor.setAttribute('data-gie-container', 'true');
    ref.current && ref.current.appendChild(anchor);

    // load widget script if not loaded
    if (!window.gie) {
      const s = document.createElement('script');
      s.src = '//embed-cdn.gettyimages.com/widgets.js';
      s.async = true;
      s.onload = () => {
        if (window.gie) {
          window.gie(function () {
            window.gie.widgets.load({
              id: 'qO9JrISNSUlWpSWa62Fe8A',
              sig: 'vp21yfGwjYoXRDvhg-gEt5B4bB59Hx18Ca66fKsZZ8s=',
              w: window.innerWidth + 'px',
              h: Math.max(window.innerHeight * 2, 800) + 'px',
              items: '1016307290',
              caption: false,
              tld: 'com',
              is360: false,
            });
          });
        }
      };
      document.body.appendChild(s);
    } else {
      window.gie(function () {
        window.gie.widgets.load({
          id: 'qO9JrISNSUlWpSWa62Fe8A',
          sig: 'vp21yfGwjYoXRDvhg-gEt5B4bB59Hx18Ca66fKsZZ8s=',
          w: window.innerWidth + 'px',
          h: Math.max(window.innerHeight * 2, 800) + 'px',
          items: '1016307290',
          caption: false,
          tld: 'com',
          is360: false,
        });
      });
    }

    // once the widget loads it will insert markup inside the anchor; style it as background
    const observer = new MutationObserver(() => {
      const img = ref.current && ref.current.querySelector('img');
      const iframe = ref.current && ref.current.querySelector('iframe');
      const el = img || iframe;
      if (el) {
        el.style.position = 'absolute';
        el.style.inset = '0';
        el.style.width = '100%';
        el.style.height = '100%';
        el.style.objectFit = 'cover';
        el.style.opacity = '0.32';
        el.style.zIndex = '0';
        // stop observing once we have the element
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return <div ref={ref} className="getty-bg" aria-hidden="true" />;
}

// GettyBackground removed; React import not needed here