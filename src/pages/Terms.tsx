
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { FileText, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Terms = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 bg-gray-50">
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
              <FileText className="h-8 w-8 text-mocktagon-600" />
              <h1 className="text-3xl font-bold text-mocktagon-900">Terms of Service</h1>
            </div>
            
            <div className="text-gray-700 space-y-6">
              <p className="text-gray-500">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">1. Agreement to Terms</h2>
                <p>
                  Welcome to Mocktagon. These Terms of Service ("Terms") constitute a legally binding agreement between you ("User," "you," or "your") and Mocktagon ("Company," "we," "us," or "our") governing your access to and use of our website, products, and services.
                </p>
                <p>
                  By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you must not access or use our services.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">2. Services Description</h2>
                <p>
                  Mocktagon provides AI-powered interview preparation services, including but not limited to mock interviews, feedback, coaching, and related educational content ("Services"). Our Services are designed to help you prepare for professional interviews across various industries and roles.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our Services at any time without prior notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of our Services.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">3. User Accounts</h2>
                <h3 className="text-lg font-medium text-mocktagon-700">3.1 Account Creation</h3>
                <p>
                  To access certain features of our Services, you may need to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
                </p>
                
                <h3 className="text-lg font-medium text-mocktagon-700">3.2 Account Security</h3>
                <p>
                  You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account or any other breach of security.
                </p>
                
                <h3 className="text-lg font-medium text-mocktagon-700">3.3 Account Termination</h3>
                <p>
                  We reserve the right to suspend or terminate your account and access to our Services at our sole discretion, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">4. Subscription and Payment</h2>
                <h3 className="text-lg font-medium text-mocktagon-700">4.1 Subscription Plans</h3>
                <p>
                  We offer various subscription plans for our Services. The features and limitations of each plan are described on our website. We reserve the right to modify our subscription plans at any time.
                </p>
                
                <h3 className="text-lg font-medium text-mocktagon-700">4.2 Payment Terms</h3>
                <p>
                  By subscribing to our Services, you agree to pay all fees in accordance with the pricing and payment terms presented to you. All payments are non-refundable except as expressly set forth in these Terms or as required by applicable law.
                </p>
                
                <h3 className="text-lg font-medium text-mocktagon-700">4.3 Free Trials</h3>
                <p>
                  We may offer free trials of our Services. Upon expiration of the trial period, your account will automatically be charged for the subscription unless you cancel before the trial ends.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">5. User Conduct</h2>
                <p>When using our Services, you agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Violate any applicable law, regulation, or these Terms</li>
                  <li>Infringe on the intellectual property rights of others</li>
                  <li>Upload or transmit viruses, malware, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Use our Services for any illegal or unauthorized purpose</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Harvest or collect user information without permission</li>
                  <li>Create multiple accounts for abusive purposes</li>
                </ul>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">6. Intellectual Property</h2>
                <h3 className="text-lg font-medium text-mocktagon-700">6.1 Our Intellectual Property</h3>
                <p>
                  Our Services, including but not limited to text, graphics, logos, icons, images, audio, video, software, and other content, are owned by or licensed to us and are protected by copyright, trademark, and other intellectual property laws. You may not modify, reproduce, distribute, create derivative works from, publicly display, or exploit our Services in whole or in part without our written consent.
                </p>
                
                <h3 className="text-lg font-medium text-mocktagon-700">6.2 User Content</h3>
                <p>
                  By submitting, posting, or displaying content on or through our Services ("User Content"), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, and display such User Content for the purpose of providing and improving our Services.
                </p>
                <p>
                  You represent and warrant that you own or have the necessary rights to grant us this license and that your User Content does not violate the rights of any third party.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">7. Disclaimer of Warranties</h2>
                <p>
                  OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
                </p>
                <p>
                  WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">8. Limitation of Liability</h2>
                <p>
                  IN NO EVENT SHALL WE BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE OUR SERVICES.
                </p>
                <p>
                  OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING UNDER THESE TERMS SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US FOR THE SERVICES IN THE PAST SIX MONTHS.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Mocktagon and its officers, directors, employees, agents, and affiliates from and against any and all claims, damages, obligations, losses, liabilities, costs, or debt, and expenses (including but not limited to attorney's fees) arising from your use of our Services, your violation of these Terms, or your violation of any rights of a third party.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">10. Governing Law and Dispute Resolution</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising out of or relating to these Terms or our Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in San Francisco, California.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">11. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. If we make material changes, we will notify you by email or by posting a notice on our website. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
                </p>
              </section>
              
              <section className="space-y-4">
                <h2 className="text-xl font-semibold text-mocktagon-800">12. Contact Information</h2>
                <p>
                  If you have any questions or concerns about these Terms, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><strong>Email:</strong> legal@mocktagon.com</p>
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

export default Terms;

