"use client"

import { Star, MessageCircle, Globe, Award, Truck, Shield, Eye, Download, Zap } from "lucide-react"
import { useState, useEffect } from "react"

export default function App() {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    setIsVisible(true)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const marbleProducts = [
    {
      name: "Carrara White Marble",
      origin: "Tuscany, Italy",
      price: "From $45/sqft",
      image: "images/city1.jpg",
      description: "The epitome of luxury, featuring subtle gray veining on pristine white background",
      specifications: {
        density: "2.7 g/cm³",
        absorption: "0.2%",
        compressive: "131 MPa",
        flexural: "15.3 MPa",
      },
      applications: ["Countertops", "Flooring", "Wall Cladding", "Sculptures"],
      finish: ["Polished", "Honed", "Brushed", "Sandblasted"],
      sizes: ["12x12", "18x18", "24x24", "Custom Slabs"],
      featured: true,
    },
    {
      name: "Emperador Dark Marble",
      origin: "Valencia, Spain",
      price: "From $38/sqft",
      image: "images/city2.jpg",
      description: "Rich chocolate brown with golden veining, perfect for dramatic interiors",
      specifications: {
        density: "2.72 g/cm³",
        absorption: "0.15%",
        compressive: "140 MPa",
        flexural: "16.2 MPa",
      },
      applications: ["Bathroom Vanities", "Feature Walls", "Fireplace Surrounds"],
      finish: ["Polished", "Honed", "Leather"],
      sizes: ["12x24", "24x24", "36x36", "Custom Slabs"],
    },
    {
      name: "Calacatta Gold Marble",
      origin: "Carrara, Italy",
      price: "From $65/sqft",
      image: "images/city3.jpg",
      description: "Dramatic gold and gray veining on white base, the ultimate luxury statement",
      specifications: {
        density: "2.71 g/cm³",
        absorption: "0.18%",
        compressive: "135 MPa",
        flexural: "14.8 MPa",
      },
      applications: ["Kitchen Islands", "Luxury Bathrooms", "Reception Areas"],
      finish: ["Polished", "Honed"],
      sizes: ["24x48", "36x72", "Custom Slabs"],
      featured: true,
    },
    {
      name: "Travertine Classic",
      origin: "Denizli, Turkey",
      price: "From $28/sqft",
      image: "images/city1.jpg",
      description: "Timeless beige tones with natural pitting, ideal for Mediterranean aesthetics",
      specifications: {
        density: "2.51 g/cm³",
        absorption: "2.1%",
        compressive: "83 MPa",
        flexural: "8.9 MPa",
      },
      applications: ["Pool Decks", "Outdoor Patios", "Interior Flooring"],
      finish: ["Tumbled", "Honed", "Filled & Honed"],
      sizes: ["12x12", "16x16", "18x18", "French Pattern"],
    },
    {
      name: "Nero Marquina Marble",
      origin: "Bilbao, Spain",
      price: "From $42/sqft",
      image: "images/city2.jpg",
      description: "Intense black background with striking white veining for bold designs",
      specifications: {
        density: "2.73 g/cm³",
        absorption: "0.12%",
        compressive: "145 MPa",
        flexural: "17.1 MPa",
      },
      applications: ["Accent Walls", "Bathroom Features", "Modern Kitchens"],
      finish: ["Polished", "Honed", "Brushed"],
      sizes: ["12x24", "24x24", "Custom Slabs"],
    },
    {
      name: "Onyx Translucent",
      origin: "Balochistan, Pakistan",
      price: "From $55/sqft",
      image: "images/city3.jpg",
      description: "Stunning translucent properties with honey and amber tones, perfect for backlighting",
      specifications: {
        density: "2.65 g/cm³",
        absorption: "0.8%",
        compressive: "95 MPa",
        flexural: "12.4 MPa",
      },
      applications: ["Backlit Features", "Bar Tops", "Decorative Panels"],
      finish: ["Polished", "Honed"],
      sizes: ["Custom Slabs Only"],
      featured: true,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header with scroll animation */}
      <header
        className={`border-b border-b-transparent border-border bg-background/95 backdrop-blur  supports-[backdrop-filter]:bg-white/60 bg-white/80 sticky top-0 z-50 transition-all duration-300 ${scrollY > 50 ? "py-2 shadow-lg" : "py-4"}`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div
            className={`flex items-center space-x-2 transition-all duration-300 ${scrollY > 50 ? "scale-90" : "scale-100"}`}
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground bg-[#008994] text-white rounded-md p-3 py-1 font-bold text-lg">L</span>
            </div>
            <span className="text-xl font-bold text-foreground">Luxe Stone Exports</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#products"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Products
            </a>
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              About
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors hover:scale-105 transform duration-200"
            >
              Contact
            </a>
          </nav>
          <button className="bg-primary bg-[#008994] text-white rounded-md p-3 py-1  hover:bg-primary/90 hover:scale-105 transform transition-all duration-200">
            Get Quote
          </button>
        </div>
      </header>

      {/* Hero Section with parallax effect */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('/images/banner-image.jpg')`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div
          className={`relative z-10 text-center text-white max-w-4xl mx-auto px-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Marble & Tiles
            <span className="block text-primary animate-pulse">Worldwide Export</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Discover our exquisite collection of natural stones, crafted for luxury projects across the globe
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              size="lg"
              className="bg-primary bg-[#008994] flex flex-row rounded-md hover:bg-primary/90 text-lg px-4 py-1 justify-center items-center hover:scale-105 transform transition-all "
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Us Now
            </button>
            <button
              size="lg"
              variant="outline"
              className="text-lg px-4 py-2 rounded-md border-white text-white hover:bg-white hover:scale-50 hover:text-black bg-transparent  transform transition-all duration-200"
            >
              View Catalog
            </button>
          </div>
        </div>
      </section>

      {/* Features Section with stagger animation */}
      <section className="py-20 bg-gray-50 bg-div">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: "Global Export",
                desc: "Shipping premium stones to over 50 countries worldwide",
                delay: "0ms",
              },
              {
                icon: Award,
                title: "Premium Quality",
                desc: "Hand-selected natural stones with international certifications",
                delay: "200ms",
              },
              {
                icon: Truck,
                title: "Fast Delivery",
                desc: "Efficient logistics and secure packaging for timely delivery",
                delay: "400ms",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center  group hover:scale-105 transform transition-all duration-300"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-16 h-16 bg-primary/10 bg-[#00899410] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 group-hover:rotate-12 transform">
                  <feature.icon className="h-8 w-8 text-[#008994] group-hover:scale-110 transform transition-all duration-300" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Section with detailed specifications */}
      <section id="products" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Premium Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our carefully curated selection of the world's finest marble and tiles with detailed
              specifications
            </p>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-center">Featured Premium Stones</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {marbleProducts
                .filter((product) => product.featured)
                .map((product, index) => (
                  <div
                    key={index}
                    className="group rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-[#008994] border-primary/20 hover:border-primary/40"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={`/${product.image}`}
                        alt={product.name}
                        className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute top-4 px-2 text-[14px] rounded-md left-4 bg-primary animate-pulse">{product.origin}</div>
                      <div className="absolute top-4 right-4 rounded-md px-2 text-[12px] text-white bg-yellow-600">Featured</div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4 text-white">
                          <p className="text-sm font-medium">{product.description}</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 bg-[#e8e8e840]">
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>
                      <div className="space-y-2 text-gray-500 mb-4">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Density:</span>
                          <span className="font-medium">{product.specifications.density}</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Absorption:</span>
                          <span className="font-medium">{product.specifications.absorption}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 mb-4">
                        <button size="sm" className="flex-1 flex bg-primary text-[12px] py-1 rounded-md justify-center items-center  hover:scale-105 transform transition-all duration-200">
                          <Eye className="mr-1 h-4 w-4" />
                          View Details
                        </button>
                        <button
                          size="sm"
                          variant="outline"
                          className="hover:scale-105 border-1 border-gray-300 p-2 rounded-md transform transition-all duration-200 bg-transparent"
                        >
                          <Download className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marbleProducts.map((product, index) => (
              <div
                key={index}
                className="group shadow-xl border-1 border-gray-300 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={`/${product.image}`}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-2 text-[14px] rounded-md bg-primary">{product.origin}</div>
                  {product.featured && <div className="absolute top-4 right-4 rounded-md px-2 text-[12px] text-white bg-yellow-600">Featured</div>}

                  <div className="absolute  inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-4 text-white text-sm">
                    <h4 className="font-semibold mb-2">Technical Specifications</h4>
                    <div className="space-y-1 mb-3">
                      <div className="flex justify-between">
                        <span>Density:</span>
                        <span>{product.specifications.density}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Water Absorption:</span>
                        <span>{product.specifications.absorption}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Compressive Strength:</span>
                        <span>{product.specifications.compressive}</span>
                      </div>
                    </div>
                    <h4 className="font-semibold mb-1">Applications</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.applications.slice(0, 3).map((app, i) => (
                        <div key={i} variant="secondary" className=" px-2 bg-white text-black p-1 text-[12px] rounded-sm">
                          {app}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-[#e8e8e840]">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                  <p className="text-2xl font-bold text-primary mb-4">{product.price}</p>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Available Finishes:</p>
                    <div className="flex flex-wrap gap-1">
                      {product.finish.map((finish, i) => (
                        <div key={i} variant="outline" className="text-xs border-1 border-gray-300 p-1 rounded-sm">
                          {finish}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="flex-1 p-1 bg-primary rounded-md hover:scale-105 transform transition-all duration-200">
                      Request Sample
                    </button>
                    {/* <button
                      variant="outline"
                      size="sm"
                      className="hover:scale-105 transform transition-all border-1 border-gray-300 p-2 rounded-md duration-200 bg-transparent"
                    >
                      <Zap className="h-4 w-4" />
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-div">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 text-gray-700 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold mb-6">25+ Years of Excellence</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Since 1998, Luxe Stone Exports has been the trusted partner for architects, contractors, and designers
                worldwide. We source the finest natural stones from quarries across Italy, Spain, Turkey, and beyond.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { number: "500+", label: "Projects Completed", delay: "0ms" },
                  { number: "50+", label: "Countries Served", delay: "100ms" },
                  { number: "100+", label: "Stone Varieties", delay: "200ms" },
                  { number: "24/7", label: "Customer Support", delay: "300ms" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center group hover:scale-110 transform transition-all duration-300"
                    style={{ animationDelay: stat.delay }}
                  >
                    <div className="text-3xl font-bold text-primary mb-2 group-hover:text-primary/80 transition-colors">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <button
                size="lg"
                className="bg-primary hover:bg-primary/90 p-2 rounded-md py-1 text-xs hover:scale-105 transform transition-all duration-200"
              >
                Learn More About Us
              </button>
            </div>
            <div className="relative group">
              <img
                src="/images/banner-image.jpg"
                alt="Our quarry operations"
                className="rounded-lg shadow-2xl group-hover:scale-105 transform transition-all duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-lg group-hover:scale-110 transform transition-all duration-300">
                <Shield className="h-8 w-8 mb-2" /> 
                <div className="font-semibold">ISO Certified</div>
                <div className="text-sm opacity-90">Quality Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading architects and contractors worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Lead Architect, Johnson & Associates",
                content:
                  "Luxe Stone Exports delivered exceptional Carrara marble for our luxury hotel project. The quality and service exceeded our expectations.",
                rating: 5,
                project: "Dubai Luxury Hotel",
              },
              {
                name: "Marco Rodriguez",
                role: "Project Manager, Rodriguez Construction",
                content:
                  "Outstanding quality and timely delivery. Their Emperador marble transformed our residential project into a masterpiece.",
                rating: 5,
                project: "Miami Penthouse",
              },
              {
                name: "Emma Chen",
                role: "Interior Designer, Chen Studios",
                content:
                  "The variety and quality of stones available is impressive. Their team helped us find the perfect match for our vision.",
                rating: 5,
                project: "Singapore Office Complex",
              },
            ].map((testimonial, index) => (
              <div key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="p-0">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400 group-hover:scale-110 transform transition-all duration-200"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div
                      variant="outline"
                      className="mt-2 group-hover:scale-105 transform transition-all duration-200"
                    >
                      {testimonial.project}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-div">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground">Get in touch with our experts for personalized consultation</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 group hover:scale-105 transform transition-all duration-200">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-muted-foreground">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3 group hover:scale-105 transform transition-all duration-200">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Globe className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-muted-foreground">info@luxestoneexports.com</div>
                  </div>
                </div>
              </div>
              <button
                size="lg"
                className="w-full bg-green-600 hover:bg-green-700 text-white hover:scale-105 transform transition-all duration-200 animate-pulse"
                onClick={() =>
                  window.open(
                    "https://wa.me/15551234567?text=Hi, I'm interested in your marble and tiles collection. Can you help me with a quote?",
                    "_blank",
                  )
                }
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Start WhatsApp Chat
              </button>
            </div>
            <div className="p-6 hover:shadow-xl transition-all duration-300">
              <div className="p-0">
                <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 focus:scale-105 transform"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 focus:scale-105 transform"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 focus:scale-105 transform"
                  />
                  <textarea
                    placeholder="Project Details & Requirements"
                    rows={4}
                    className="w-full p-3 border border-border rounded-lg bg-input focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-200 focus:scale-105 transform"
                  ></textarea>
                  <button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 hover:scale-105 transform transition-all duration-200"
                  >
                    Send Quote Request
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">L</span>
                </div>
                <span className="text-xl font-bold">Luxe Stone Exports</span>
              </div>
              <p className="text-accent-foreground/80 mb-4">
                Premium marble and tiles exporter serving luxury projects worldwide since 1998.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Marble Slabs</li>
                <li>Granite Tiles</li>
                <li>Travertine</li>
                <li>Onyx</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>Custom Cutting</li>
                <li>Global Shipping</li>
                <li>Quality Inspection</li>
                <li>Project Consultation</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-accent-foreground/80">
                <li>WhatsApp: +1 (555) 123-4567</li>
                <li>Email: info@luxestoneexports.com</li>
                <li>24/7 Customer Support</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent-foreground/20 mt-8 pt-8 text-center text-accent-foreground/60">
            <p>&copy; 2024 Luxe Stone Exports. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Enhanced WhatsApp Floating button with pulse animation */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          size="lg"
          className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700 shadow-lg hover:scale-110 transform transition-all duration-300 animate-bounce"
          onClick={() =>
            window.open(
              "https://wa.me/15551234567?text=Hi, I'm interested in your marble and tiles collection. Can you help me with a quote?",
              "_blank",
            )
          }
        >
          <MessageCircle className="h-8 w-8" />
        </button>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  )
}
