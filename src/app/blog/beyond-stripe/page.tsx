'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function BeyondStripeBlog() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header/Navigation */}
      <header className="sticky top-0 bg-white shadow-sm z-10 border-b border-gray-200">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="font-bold text-xl text-gray-900">Handy Hasan</Link>
          <div className="flex space-x-6">
            <Link href="/experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</Link>
            <Link href="/projects" className="text-gray-600 hover:text-gray-900 transition-colors">Projects</Link>
            <a href="/#blog" className="text-gray-600 hover:text-gray-900 transition-colors">Blog</a>
            <Link href="/break-into-tech" className="text-emerald-600 hover:text-emerald-700 font-medium transition-colors">Course</Link>
            <a href="/#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </nav>
      </header>

      {/* Blog Content */}
      <div className="container mx-auto px-6 py-12">
        <motion.div 
          className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-center mb-4 gap-2">
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Payments
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Fintech
              </span>
              <span className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm">
                Custom Solutions
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Beyond Stripe: Building Custom Payment Solutions</h1>
            <p className="text-gray-600 mb-6">March 10, 2024 • 12 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">When to Go Beyond Stripe</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">🏪</span>
                      <span><strong>Multi-party Marketplaces</strong> – Complex revenue splitting and escrow</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">🔍</span>
                      <span><strong>Custom Fraud Detection</strong> – Industry-specific risk algorithms</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">🏥</span>
                      <span><strong>Specialized Compliance</strong> – Healthcare, finance, regulated industries</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">💰</span>
                      <span><strong>High-volume, Low-margin</strong> – Need better processing rates</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Custom Payment Advantages</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">🎯</span>
                      <span><strong>Tailored User Experience</strong> – Custom flows for your business</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">📊</span>
                      <span><strong>Advanced Analytics</strong> – Custom reporting and insights</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">🔧</span>
                      <span><strong>Complete Control</strong> – Full ownership of payment data</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2">💸</span>
                      <span><strong>Cost Optimization</strong> – Potentially lower processing fees</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              While Stripe is excellent for most use cases, some businesses need custom payment flows, multi-party marketplaces, or specialized compliance requirements. At The Good Guys, we built custom payment orchestration to handle complex B2B transactions, installment plans, and integration with legacy financial systems. Learn when to build your own payment infrastructure and how to do it safely with PCI compliance, fraud detection, and global payment methods.
            </p>
            
            <div className="mb-6 bg-indigo-50 p-5 rounded-lg border border-indigo-200">
              <h4 className="font-semibold mb-3 text-indigo-900">Custom Payment Architecture</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-orange-300 rounded-md p-3 bg-orange-50">
                      <strong>Stripe/Standard Solutions</strong><br/>
                      <span className="text-xs">• Quick integration<br/>• Limited customization<br/>• Fixed fee structure<br/>• Standard fraud rules</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>Custom Payment System</strong><br/>
                      <span className="text-xs">• Tailored business logic<br/>• Flexible fee structures<br/>• Custom fraud detection<br/>• Direct processor relationships</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-indigo-800 text-sm">
                Custom payment systems give you complete control but require significant development and compliance investment.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Building PCI-Compliant Payment Infrastructure</h4>
              <p className="text-gray-700 mb-4">
                PCI compliance is non-negotiable when handling payment data. Here&apos;s how we architected a secure payment system:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// PCI-compliant payment architecture
Payment Gateway Integration:
┌─────────────────────────────────────────────────────────────────┐
│ Frontend (PCI DSS Scope: Minimal)                              │
│ • Token-based payments only                                    │
│ • No cardholder data storage                                   │
│ • HTTPS everywhere                                             │
│ • CSP headers and security policies                           │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Payment Orchestration Layer (PCI DSS Level 1)                 │
│ • Vault tokenization service                                  │
│ • Multi-processor routing                                     │
│ • Fraud detection engine                                      │
│ • Secure key management (HSM)                                 │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│ Payment Processors                                             │
│ • Primary: Direct bank relationships                          │
│ • Secondary: Stripe/Adyen for fallback                       │
│ • Regional: Local processors for specific markets            │
└─────────────────────────────────────────────────────────────────┘`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Implementation Example: Multi-party Marketplace Payments</h4>
              <p className="text-gray-700 mb-4">
                One of the most complex payment scenarios is handling marketplace transactions with multiple sellers, buyers, and service fees:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Custom marketplace payment flow
public class MarketplacePaymentService
{
    public async Task<PaymentResult> ProcessMarketplacePayment(
        MarketplacePaymentRequest request)
    {
        // Step 1: Validate all parties and amounts
        var validation = await ValidateMarketplaceTransaction(request);
        if (!validation.IsValid)
            return PaymentResult.Failed(validation.Errors);

        // Step 2: Create escrow hold
        var escrowResult = await CreateEscrowHold(request.TotalAmount);
        if (!escrowResult.Success)
            return PaymentResult.Failed("Escrow creation failed");

        // Step 3: Process payment to escrow
        var paymentResult = await ProcessPaymentToEscrow(
            request.BuyerPaymentMethod, 
            request.TotalAmount,
            escrowResult.EscrowId
        );

        if (!paymentResult.Success)
        {
            await ReleaseEscrowHold(escrowResult.EscrowId);
            return PaymentResult.Failed("Payment processing failed");
        }

        // Step 4: Calculate and distribute funds
        var distributions = CalculateDistributions(request);
        var distributionResults = new List<DistributionResult>();

        foreach (var distribution in distributions)
        {
            var result = await TransferFromEscrow(
                escrowResult.EscrowId,
                distribution.RecipientId,
                distribution.Amount,
                distribution.Description
            );
            distributionResults.Add(result);
        }

        // Step 5: Handle any failed distributions
        var failedDistributions = distributionResults
            .Where(r => !r.Success).ToList();

        if (failedDistributions.Any())
        {
            await HandleFailedDistributions(
                escrowResult.EscrowId, 
                failedDistributions
            );
        }

        return PaymentResult.Success(paymentResult.TransactionId);
    }

    private List<Distribution> CalculateDistributions(
        MarketplacePaymentRequest request)
    {
        var distributions = new List<Distribution>();
        var remainingAmount = request.TotalAmount;

        // Platform fee (our commission)
        var platformFee = request.TotalAmount * 0.03m; // 3%
        distributions.Add(new Distribution
        {
            RecipientId = "platform_account",
            Amount = platformFee,
            Description = "Platform commission"
        });
        remainingAmount -= platformFee;

        // Payment processing fee
        var processingFee = request.TotalAmount * 0.029m + 0.30m; // 2.9% + 30¢
        distributions.Add(new Distribution
        {
            RecipientId = "payment_processor_account",
            Amount = processingFee,
            Description = "Payment processing fee"
        });
        remainingAmount -= processingFee;

        // Distribute to sellers proportionally
        foreach (var seller in request.Sellers)
        {
            var sellerAmount = (seller.ItemValue / request.ItemsTotal) * remainingAmount;
            distributions.Add(new Distribution
            {
                RecipientId = seller.SellerId,
                Amount = sellerAmount,
                Description = $"Payment for items sold"
            });
        }

        return distributions;
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Key Custom Payment Principles</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">🔒</span>
                  <span><strong>Security First</strong> – PCI compliance, tokenization, and encryption are non-negotiable from day one.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">🔄</span>
                  <span><strong>Fail-Safe Design</strong> – Build comprehensive error handling, rollback mechanisms, and audit trails.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">📊</span>
                  <span><strong>Reconciliation Ready</strong> – Design for easy financial reconciliation and regulatory reporting.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">🌍</span>
                  <span><strong>Global Considerations</strong> – Plan for multiple currencies, local payment methods, and regulatory differences.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-indigo-500 mr-2">⚡</span>
                  <span><strong>Performance & Scale</strong> – Optimize for high transaction volumes and low latency requirements.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">ROI Analysis: When Custom Makes Sense</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# Custom Payment System ROI Analysis

Development Investment:
- Initial development: 6-12 months, $200K-500K
- PCI compliance: $50K-100K annually
- Ongoing maintenance: 2-3 FTE developers
- Security audits: $25K-50K annually

Break-even Analysis (Monthly):
┌─────────────────────┬─────────────┬─────────────┬─────────────┐
│ Transaction Volume  │ Stripe Cost │ Custom Cost │ Savings     │
├─────────────────────┼─────────────┼─────────────┼─────────────┤
│ $100K              │ $2,900      │ $25K        │ -$22,100    │
│ $500K              │ $14,500     │ $30K        │ -$15,500    │
│ $1M                 │ $29,000     │ $35K        │ -$6,000     │
│ $5M                 │ $145,000    │ $50K        │ +$95,000    │
│ $10M                │ $290,000    │ $65K        │ +$225,000   │
└─────────────────────┴─────────────┴─────────────┴─────────────┘

Sweet Spot: $3M+ monthly transaction volume
Additional Benefits:
• Complete control over user experience
• Custom fraud detection and risk management
• Direct processor relationships (better rates)
• Advanced analytics and reporting capabilities`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Building custom payment solutions isn&apos;t about replacing Stripe for everyone—it&apos;s about recognizing when your business needs justify the investment. The key is understanding your specific requirements, calculating the true cost of ownership, and ensuring you have the security and compliance expertise to do it safely.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/beyond-stripe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="h-5 w-5 text-[#0077b5]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/#blog" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 