'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function EcommerceObservabilityBlog() {
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
                E-commerce
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                DevOps
              </span>
              <span className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm">
                The Good Guys
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">The Invisible Layer of E-Commerce: Enterprise Observability with Mixpanel, New Relic & Sumo Logic</h1>
            <p className="text-gray-600 mb-6">April 22, 2024 • 15 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Enterprise Monitoring Stack</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">📊</span>
                      <span><strong>Mixpanel Analytics</strong> – User behavior and funnel analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⚡</span>
                      <span><strong>New Relic APM</strong> – Application performance monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">📝</span>
                      <span><strong>Sumo Logic</strong> – Log aggregation and analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🎯</span>
                      <span><strong>Google Analytics 4</strong> – Enhanced e-commerce tracking</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Business Impact at Scale</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">💰</span>
                      <span><strong>$2.5M Revenue Protected</strong> – Issues caught before customer impact</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">⏱️</span>
                      <span><strong>30s Mean Detection</strong> – From incident to alert</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">📈</span>
                      <span><strong>18% Conversion Increase</strong> – Through performance optimization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">🛡️</span>
                      <span><strong>99.97% Uptime</strong> – During peak shopping periods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              E-commerce platforms live and die by the experience they deliver in real time. At The Good Guys, we processed millions of transactions daily across 100+ stores, and a few seconds of latency or a failed payment flow could cost thousands in revenue. When Black Friday brought 50x normal traffic, our observability stack was the difference between success and disaster.
            </p>
            
            <div className="mb-6 bg-orange-50 p-5 rounded-lg border border-orange-200">
              <h4 className="font-semibold mb-3 text-orange-900">The Cost of Poor Observability</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-300 rounded-md p-3 bg-red-50">
                      <strong>Before Enterprise Monitoring</strong><br/>
                      <span className="text-xs">• 15-minute incident detection<br/>• Manual alert triage<br/>• Reactive troubleshooting<br/>• 2.3% checkout failure rate</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>After Observability Stack</strong><br/>
                      <span className="text-xs">• 30-second detection<br/>• Automated alert routing<br/>• Proactive issue prevention<br/>• 0.4% checkout failure rate</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-orange-800 text-sm">
                A 30x improvement in detection time and 83% reduction in checkout failures directly translated to millions in protected revenue.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Mixpanel Implementation for E-commerce Analytics</h4>
              <p className="text-gray-700 mb-4">
                Mixpanel became our single source of truth for user behavior. Unlike Google Analytics, Mixpanel&apos;s event-based tracking gave us granular insights into customer journeys, allowing us to optimize conversion funnels in real-time.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Mixpanel e-commerce tracking implementation
import mixpanel from 'mixpanel-browser';

class EcommerceAnalytics {
  // Track critical e-commerce events
  trackProductView(product) {
    mixpanel.track('Product Viewed', {
      product_id: product.id,
      product_name: product.name,
      category: product.category,
      price: product.price,
      in_stock: product.stock > 0,
      page_load_time: performance.now(),
      viewport_size: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    });
  }

  trackPurchase(order) {
    mixpanel.track('Purchase Completed', {
      order_id: order.id,
      revenue: order.total,
      items: order.items.map(item => ({
        product_id: item.product_id,
        quantity: item.quantity,
        price: item.price
      })),
      payment_method: order.payment_method,
      first_time_customer: this.isFirstTimeCustomer()
    });
    
    // Track revenue
    mixpanel.people.track_charge(order.total);
  }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">New Relic APM Performance Monitoring</h4>
              <p className="text-gray-700 mb-4">
                New Relic provided deep visibility into our .NET e-commerce application, tracking everything from database queries to external API calls with custom instrumentation.
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// New Relic .NET custom instrumentation
using NewRelic.Api.Agent;

[Transaction]
public class CheckoutService
{
    [Trace]
    public async Task<PaymentResult> ProcessPayment(PaymentRequest request)
    {
        NewRelic.SetTransactionName("Ecommerce", "ProcessPayment");
        NewRelic.AddCustomAttribute("payment_method", request.PaymentMethod);
        NewRelic.AddCustomAttribute("order_value", request.Amount);
        
        try 
        {
            var result = await paymentGateway.ProcessAsync(request);
            NewRelic.RecordMetric("Custom/Payment/Success", 1);
            return result;
        }
        catch (PaymentException ex)
        {
            NewRelic.RecordMetric("Custom/Payment/Failure", 1);
            NewRelic.AddCustomAttribute("payment_failure_reason", ex.Reason);
            throw;
        }
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Key E-commerce Observability Principles</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">🎯</span>
                  <span><strong>Business Metrics First</strong> – Monitor conversion rates, revenue, and customer experience metrics before technical metrics.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">⚡</span>
                  <span><strong>Real-Time Detection</strong> – E-commerce moves fast; 15-minute detection windows are too slow for revenue-critical issues.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">📊</span>
                  <span><strong>Context-Rich Alerting</strong> – Include business impact, affected customer segments, and remediation steps in every alert.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">💰</span>
                  <span><strong>ROI-Driven Implementation</strong> – Measure observability success in revenue protected and customer experience improved.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">Business Impact & ROI Analysis</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# The Good Guys E-commerce Observability ROI (2019-2021)
Investment: $240,000 annually
- Mixpanel Pro: $48,000/year
- New Relic Enterprise: $120,000/year  
- Sumo Logic Professional: $60,000/year
- PagerDuty + integrations: $12,000/year

Measurable Business Returns:
┌─────────────────────────┬─────────────┬────────────────┬─────────────────┐
│ Metric                  │ Before      │ After          │ Annual Impact   │
├─────────────────────────┼─────────────┼────────────────┼─────────────────┤
│ Checkout Failure Rate   │ 2.3%        │ 0.4%           │ +$2.1M revenue  │
│ Mean Incident Detection │ 15 minutes  │ 30 seconds     │ +$950K revenue  │
│ Page Load Time (P95)    │ 4.2s        │ 1.8s           │ +18% conversion │
│ Uptime During Peak      │ 99.2%       │ 99.97%         │ +$1.2M revenue  │
└─────────────────────────┴─────────────┴────────────────┴─────────────────┘

Total Annual ROI: $4.25M revenue protection + performance gains
ROI Multiple: 17.7x return on observability investment`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Enterprise observability isn&apos;t just about collecting data—it&apos;s about turning that data into business advantage. At The Good Guys, our investment in Mixpanel, New Relic, and Sumo Logic didn&apos;t just prevent incidents; it enabled us to optimize for revenue and customer experience in ways we never could before.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/ecommerce-observability"
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