import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, ExternalLink } from 'lucide-react';
import { toast } from '@/components/ui/sonner';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mapError, setMapError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      console.log('Sending email via EmailJS:', formData);
      
      // EmailJS configuration with your actual credentials
      const serviceId = 'service_xr9a02s';
      const templateId = 'template_1cjyuul';
      const publicKey = 'vjmV0ZKNxnLhadFXs';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'rupapatil781@gmail.com'
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log('Email sent successfully via EmailJS');
      toast.success('Thank you for your message! We\'ll get back to you soon.');
      
      // Reset form
      setFormData({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('Error sending email via EmailJS:', error);
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Our Location',
      details: [
      'C-521, Steel Chambers, Plot # 514',
      'KWC Road, Kalamboli',
      'Navi Mumbai - 410 218'
    ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['9321809438 ', ' 9324140313']
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: ['spt@economic-logistics.in', 'pramod.kadam@economic-logistics.in']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday: 10:00 AM - 6:00 PM', 'Sunday: Closed']
    }
  ];

  const MapComponent = () => {
    if (mapError) {
      return (
        <div className="w-full h-[450px] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center shadow-lg">
          <div className="text-center p-8">
            <MapPin className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Map Unavailable</h3>
            <p className="text-gray-600 mb-4">Unable to load the interactive map</p>
            <Button
              onClick={() => window.open('https://maps.google.com/?q=Steel+Chamber+K+B+And+O+P+Co-Op', '_blank')}
              className="bg-red-600 hover:bg-red-700"
            >
              View on Google Maps
              <ExternalLink className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      );
    }

    return (
      <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d965367.2131954873!2d72.61576065381905!3d19.06524665844417!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e9d0072fd3db%3A0x83596087895e2849!2sSteel%20Chamber%20K%20B%20And%20O%20P%20Co-Op!5e0!3m2!1sen!2sin!4v1749924923236!5m2!1sen!2sin"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setMapError(true)}
        ></iframe>
      </div>
    );
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
              Ready to transform your business? Get in touch with our experts today
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form + Map */}
            <div className="space-y-12">
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your full name"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="your.email@example.com"
                          required
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="Your company name"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your project or inquiry..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-red-600 hover:bg-red-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 w-5 h-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map Section */}
              <div>
                <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Visit Our Office
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Located in the heart of the business district for easy access
                  </p>
                </div>

                <MapComponent />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We're here to help you succeed. Whether you need logistics solutions, 
                  enterprise consulting, or environmental services, our team is ready to assist.
                </p>
              </div>

              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start">
                          <div className="flex-shrink-0">
                            <Icon className="w-8 h-8 text-red-600" />
                          </div>
                          <div className="ml-4">
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              {info.title}
                            </h3>
                            <div className="space-y-1">
                              {info.details.map((detail, idx) => (
                                <p key={idx} className="text-muted-foreground">
                                  {detail}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
