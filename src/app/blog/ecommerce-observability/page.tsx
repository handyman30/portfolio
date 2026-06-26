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
              <span className="px-3 py-1 bg-[#1f3a5f] text-white rounded-full text-sm">
                The Good Guys
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">The invisible layer of e-commerce: observability</h1>
            <p className="text-gray-600 mb-6">April 22, 2024 • 15 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg border border-[#e6e4dd]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">The stack we ran</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Mixpanel</strong> – user behaviour and funnels</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>New Relic</strong> – application performance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Sumo Logic</strong> – logs, aggregated and searchable</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>Google Analytics 4</strong> – e-commerce reporting</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What it bought us</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>$2.5M revenue protected</strong> – issues caught before customers noticed</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>30s to detect</strong> – from incident to alert</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>18% lift in conversion</strong> – mostly from making pages faster</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#1f3a5f] mr-2">•</span>
                      <span><strong>99.97% uptime</strong> – through the peak sale periods</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Nobody cares about observability until checkout is down on a Saturday. At The Good Guys we ran the online store on top of 100-odd physical stores, millions of transactions a day. A couple of seconds of extra latency on a product page, or a payment step quietly failing for one card type — that&apos;s real money, and you won&apos;t see it in a dashboard unless you went looking for it first. We ran Mixpanel, New Relic and Sumo Logic. They overlap less than the marketing suggests; each answers a question the others can&apos;t. Black Friday was where I found out whether the setup actually held — traffic was somewhere north of 50x a normal day.
            </p>
            
            <div className="mb-6 bg-gray-50 p-5 rounded-lg border border-[#e6e4dd]">
              <h4 className="font-semibold mb-3 text-[#1f3a5f]">Before and after</h4>
              <div className="bg-white p-4 rounded-md mb-4 border border-[#e6e4dd]">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-gray-50">
                      <strong>Before</strong><br/>
                      <span className="text-xs">• 15-minute incident detection<br/>• Manual alert triage<br/>• Reactive troubleshooting<br/>• 2.3% checkout failure rate</span>
                    </div>
                    <div className="border border-[#e6e4dd] rounded-md p-3 bg-gray-50">
                      <strong>After</strong><br/>
                      <span className="text-xs">• 30-second detection<br/>• Automated alert routing<br/>• Proactive issue prevention<br/>• 0.4% checkout failure rate</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-sm">
                Detection went from 15 minutes to 30 seconds, checkout failures from 2.3% to 0.4%. At our volume those two numbers are most of why this paid for itself.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Mixpanel: what customers actually do</h4>
              <p className="text-gray-700 mb-4">
                Mixpanel was where we went to understand behaviour. It&apos;s event-based rather than page-based, so instead of pageviews you record the things that matter — viewed a product, added to cart, completed a purchase — and build funnels out of them. That made it straightforward to see exactly where people dropped out of checkout. We tracked the events with their relevant properties:
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
              <h4 className="font-semibold mb-3 text-gray-900">New Relic: where the time goes</h4>
              <p className="text-gray-700 mb-4">
                Mixpanel tells you the customer dropped at payment. New Relic tells you it was a 4-second call to the payment gateway, on the third Tuesday, when their API was having a bad day. It traced the .NET app from request down through the database queries and outbound calls. We added custom instrumentation on the payment path specifically, because that&apos;s the bit where a slow span turns into a refund:
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
              <h4 className="font-semibold mb-3 text-gray-900">How the three fit together</h4>
              <p className="text-gray-700 mb-4">
                The point isn&apos;t that one is better. They sit in a chain. Sumo Logic was where all the logs landed, so once New Relic pointed at a slow service we could go read the actual lines for that request. The order I&apos;d hit them in:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Mixpanel</strong> — &quot;what is the customer doing&quot;. Funnels, drop-off, conversion.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>New Relic</strong> — &quot;is the system slow, and where&quot;. Traces and APM.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span><strong>Sumo Logic</strong> — &quot;what actually happened&quot;. The raw logs, once you know which request to grep for.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#1f3a5f] mr-2">•</span>
                  <span>Wire the alerts to money, not to CPU. An alert that doesn&apos;t tell you whether revenue is moving gets snoozed at 2am, and then it might as well not exist.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">Did it pay for itself</h4>
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
              The licences weren&apos;t cheap, and it&apos;s fair to ask whether three tools is one too many. For us it wasn&apos;t — each answered a different question, and the overlap was small. The honest version of the lesson is that observability only earns its keep if you wire the alerts to the things that cost money and then actually act on them. Collecting the data is the easy part.
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