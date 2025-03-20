
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Shield, Lock, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Privacy = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow py-16 bg-gray-50">
        <div className="section-container">
          <div className="mb-10 flex items-center space-x-2">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center mb-6 gap-3">
              <Shield className="h-8 w-8 text-mocktagon-600" />
              <h1 className="text-3xl font-bold text-mocktagon-900">Privacy Policy</h1>
            </div>
            
            <div className="text-gray-700 space-y-6">
              <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">1. Introduction</h2>
                <p>
                  Welcome to Mocktagon ("we," "our," or "us"). We are committed to protecting your privacy and handling your data with transparency. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>
                <p>
                  By accessing or using Mocktagon, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of our services immediately.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">2. Information We Collect</h2>
                <h3 className="text-lg font-medium text-mocktagon-700">2.1 Personal Information</h3>
                <p>We may collect personal information that you voluntarily provide when using our services, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact information (name, email address, phone number)</li>
                  <li>Account information (username, password)</li>
                  <li>Professional information (resume details, career goals, industry preferences)</li>
                  <li>Payment information (processed through secure third-party payment processors)</li>
                  <li>Communication preferences</li>
                </ul>
                
                <h3 className="text-lg font-medium text-mocktagon-700">2.2 Usage Information</h3>
                <p>We automatically collect certain information when you interact with our platform:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Device information (browser type, IP address, device type)</li>
                  <li>Log data (access times, pages viewed, time spent on pages)</li>
                  <li>Interaction data (interview responses, feedback provided)</li>
                  <li>Performance data (how you interact with mock interviews)</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">3. How We Use Your Information</h2>
                <p>We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Personalize your experience and deliver tailored content</li>
                  <li>Process payments and manage your account</li>
                  <li>Analyze usage patterns to enhance our platform</li>
                  <li>Communicate with you about updates, features, and opportunities</li>
                  <li>Develop new features based on user interactions</li>
                  <li>Protect against unauthorized access and misuse of our services</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">4. How We Share Your Information</h2>
                <p>We may share your information with:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Service Providers:</strong> Third-party vendors who assist us in providing our services (e.g., cloud storage, payment processing)</li>
                  <li><strong>Business Partners:</strong> Trusted partners who help us improve our offerings, subject to confidentiality obligations</li>
                  <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental regulation</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                </ul>
                <p>We do not sell your personal information to third parties.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">5. Your Privacy Rights</h2>
                <p>Depending on your location, you may have rights regarding your personal information, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access to your personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion of your personal information</li>
                  <li>Restriction or objection to processing</li>
                  <li>Data portability</li>
                  <li>Withdrawal of consent</li>
                </ul>
                <p>To exercise these rights, please contact us at privacy@mocktagon.com.</p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">6. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">7. Data Retention</h2>
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">8. Children's Privacy</h2>
                <p>
                  Our services are not intended for individuals under the age of 16. We do not knowingly collect personal information from children. If we discover that we have collected personal information from a child, we will delete that information immediately.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">9. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the updated Privacy Policy on this page with a new effective date.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">10. Contact Us</h2>
                <p>
                  If you have questions or concerns about this Privacy Policy or our data practices, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> privacy@mocktagon.com</p>
                  <p><strong>Address:</strong> Mocktagon Headquarters, 123 Interview Lane, San Francisco, CA 94103</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
