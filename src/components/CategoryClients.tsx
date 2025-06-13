// components/ClientSection.tsx
import { motion } from 'framer-motion';
import CompanySlider from './CompanySlider';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
interface Client {
  name: string;
  logo: string;
  industry: string;
}

interface CategoryClientsProps {
  clients: Client[];
}

const CategoryClients = ({ clients }: CategoryClientsProps) => {
  return (
    <div>
    <section className="sm:py-16 pt-20 lg:pb-5 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            We're proud to partner with leading companies across various industries
          </p>
        </motion.div>

        <CompanySlider clients={clients} />
      </div>
    </section>
    {/* CTA Section */}
      <section className="lg:pt-10 lg:pb-20 sm:py-10 bg-accent/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss how we can help you achieve your goals 
              with our comprehensive solutions and expert guidance.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
              <Link to="/contact">
                <Button size="lg" className="text-lg px-8 py-3">
                  Contact Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3">
                Schedule Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CategoryClients;
