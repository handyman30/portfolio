'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function AussieEcommerceAsiaBlog() {
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
                International
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-white rounded-full text-sm">
                The Good Guys
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Scaling an Aussie e-commerce brand into Asia</h1>
            <p className="text-gray-600 mb-6">January 15, 2024 • 11 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What made it hard</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Currency</strong> – live rates, hedging, and tax that differs per market</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Localization</strong> – which is mostly not translation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Logistics</strong> – shipping, duties, and where you put fulfillment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Payments</strong> – every market has a method people actually expect</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">How it went</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Singapore</strong> – 15% conversion rate within six months</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Malaysia</strong> – 200% YoY growth in local sales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Mobile</strong> – about 85% of traffic across the Asian markets</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-yellow-500 mr-2">•</span>
                      <span><strong>Satisfaction</strong> – 4.6/5 averaged across those markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Taking an Australian store into Asia turns up problems you don't see coming until you're in the middle of them — currency, localization, logistics, and a pile of cultural stuff you only really learn by getting it wrong first. I worked on The Good Guys' expansion and the e-commerce systems behind it, and the short version is that translating the site is the easy 10%. The rest is understanding how people in each market actually shop, and reshaping the infrastructure to match.
            </p>
            
            <div className="mb-6 bg-yellow-50 p-5 rounded-lg border border-yellow-200">
              <h4 className="font-semibold mb-3 text-yellow-900">Multi-currency, properly</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <p className="text-gray-700 text-sm mb-2">
                  Showing a different currency symbol is the part everyone thinks of. The work is underneath it — live exchange rates, tax that varies by country, and reporting that still reconciles when money moves through several currencies.
                </p>
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-red-300 rounded-md p-3 bg-red-50">
                      <strong>Single Currency Challenges</strong><br/>
                      <span className="text-xs">• AUD-only pricing<br/>• Limited payment options<br/>• Complex currency conversion<br/>• Poor user experience</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>Multi-Currency Solution</strong><br/>
                      <span className="text-xs">• Native currency pricing<br/>• Local payment methods<br/>• Real-time rate updates<br/>• Checkout that feels local</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-yellow-800 text-sm">
                Getting this right lifted conversion by about 40% in the first Asian market we launched. People trust a price in their own currency far more than a converted one.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">The pricing service</h4>
              <p className="text-gray-700 mb-4">
                The core of it is a service that turns a base price into a local one. It has to deal with exchange rates, the pricing conventions of each market, and tax — without the numbers drifting out of sync. Here's the gist:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Multi-currency pricing system
public class CurrencyService
{
    private readonly ICurrencyExchangeProvider _exchangeProvider;
    private readonly IPricingRepository _pricingRepo;
    
    public async Task<ProductPrice> GetLocalizedPrice(
        string productId, 
        string currencyCode, 
        string countryCode)
    {
        // 1. Check for manually set local prices first
        var localPrice = await _pricingRepo.GetLocalPrice(
            productId, 
            currencyCode, 
            countryCode
        );
        
        if (localPrice != null)
        {
            return new ProductPrice
            {
                Amount = localPrice.Amount,
                Currency = currencyCode,
                PricingStrategy = "Local",
                IncludesTax = localPrice.IncludesTax,
                TaxAmount = CalculateLocalTax(localPrice.Amount, countryCode)
            };
        }
        
        // 2. Convert from base currency (AUD) with current rates
        var basePrice = await _pricingRepo.GetBasePriceAUD(productId);
        var exchangeRate = await _exchangeProvider.GetExchangeRate("AUD", currencyCode);
        
        var convertedAmount = basePrice.Amount * exchangeRate.Rate;
        
        // 3. Apply local market pricing strategy
        var finalAmount = ApplyLocalMarketStrategy(
            convertedAmount, 
            currencyCode, 
            countryCode
        );
        
        return new ProductPrice
        {
            Amount = Math.Round(finalAmount, 2),
            Currency = currencyCode,
            PricingStrategy = "Converted",
            ExchangeRate = exchangeRate.Rate,
            BaseAmount = basePrice.Amount,
            BaseCurrency = "AUD",
            IncludesTax = CalculateLocalTax(finalAmount, countryCode) > 0,
            TaxAmount = CalculateLocalTax(finalAmount, countryCode)
        };
    }
    
    private decimal ApplyLocalMarketStrategy(
        decimal convertedAmount, 
        string currency, 
        string country)
    {
        // Round to local pricing conventions
        switch (currency)
        {
            case "SGD":
                // Singapore prefers .95 endings
                return Math.Round(convertedAmount - 0.05m, 2);
            
            case "MYR":
                // Malaysia rounds to nearest .50
                return Math.Round(convertedAmount * 2, MidpointRounding.AwayFromZero) / 2;
            
            case "JPY":
                // Japan uses whole numbers only
                return Math.Round(convertedAmount, 0);
            
            default:
                return Math.Round(convertedAmount, 2);
        }
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Localization that isn't translation</h4>
              <p className="text-gray-700 mb-4">
                Each market shops differently — different payment habits, different colour associations, different expectations about delivery and reviews. Those differences move conversion more than the wording does. We ended up driving a lot of it from per-market config:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Market-specific localization configurations
const marketConfigurations = {
  singapore: {
    paymentMethods: ['credit_card', 'paypal', 'grab_pay', 'bank_transfer'],
    preferredColors: ['red', 'gold'], // Auspicious colors
    shippingOptions: ['same_day', 'next_day', 'standard'],
    taxDisplay: 'inclusive', // GST included in price
    mobileFirst: true,
    reviewsImportance: 'high',
    socialProof: ['testimonials', 'ratings', 'social_shares'],
    checkoutPreferences: {
      guestCheckout: true,
      savedPaymentMethods: true,
      expressCheckout: ['grab_pay', 'paypal']
    }
  },
  
  malaysia: {
    paymentMethods: ['credit_card', 'maybank', 'cimb', 'public_bank', 'grab_pay'],
    preferredColors: ['blue', 'green', 'red'],
    shippingOptions: ['standard', 'express', 'pickup_points'],
    taxDisplay: 'exclusive', // SST shown separately
    mobileFirst: true,
    reviewsImportance: 'critical',
    socialProof: ['local_testimonials', 'influencer_endorsements'],
    languageSupport: ['english', 'bahasa_malaysia', 'chinese'],
    checkoutPreferences: {
      installmentPayments: true, // Very popular in Malaysia
      bankTransferOptions: true,
      cashOnDelivery: true
    }
  },
  
  japan: {
    paymentMethods: ['credit_card', 'konbini', 'bank_transfer', 'cod'],
    preferredColors: ['white', 'blue', 'minimal_palette'],
    shippingOptions: ['same_day_tokyo', 'next_day', 'convenience_store_pickup'],
    taxDisplay: 'inclusive',
    mobileFirst: true,
    reviewsImportance: 'very_high',
    detailLevel: 'extensive', // Japanese consumers want detailed product info
    qualityCertifications: true,
    checkoutPreferences: {
      detailedReceipts: true,
      preciseDeliveryTimes: true,
      multiplePaymentOptions: true
    }
  }
};

// Dynamic UI adaptation based on market
export const getLocalizedProductCard = (product, market) => {
  const config = marketConfigurations[market];
  
  return {
    priceDisplay: config.taxDisplay === 'inclusive' 
      ? \`\${product.price} (incl. tax)\` 
      : \`\${product.price} + tax\`,
    
    paymentBadges: config.paymentMethods
      .slice(0, 3)
      .map(method => getPaymentMethodIcon(method)),
    
    shippingMessage: getLocalizedShippingMessage(config.shippingOptions[0], market),
    
    socialProof: config.socialProof.includes('ratings') 
      ? product.averageRating 
      : null,
    
    colorScheme: config.preferredColors[0],
    
    callToAction: getLocalizedCTA(market)
  };
};`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Shipping, duties and fulfillment</h4>
              <p className="text-gray-700 mb-4">
                Cross-border shipping is where the customer experience can quietly fall apart — a duty bill at the door, or a two-week delivery, undoes a good checkout. The calculator has to weigh duties, local tax thresholds, and whether there's a fulfillment centre in-country that avoids the border entirely:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// International shipping calculation system
public class InternationalShippingCalculator
{
    public async Task<ShippingQuote> CalculateShipping(
        ShippingRequest request)
    {
        var originCountry = "AU"; // Australia
        var destinationCountry = request.DeliveryAddress.CountryCode;
        
        // 1. Calculate base shipping cost
        var baseShipping = await CalculateBaseShippingCost(
            request.Items, 
            originCountry, 
            destinationCountry
        );
        
        // 2. Calculate duties and taxes
        var dutiesAndTaxes = await CalculateImportDuties(
            request.Items, 
            destinationCountry
        );
        
        // 3. Check for local fulfillment options
        var localFulfillment = await CheckLocalFulfillmentCenters(
            request.Items, 
            destinationCountry
        );
        
        if (localFulfillment.Available)
        {
            return new ShippingQuote
            {
                ShippingCost = localFulfillment.Cost,
                EstimatedDelivery = localFulfillment.DeliveryTime,
                DutiesAndTaxes = 0, // No cross-border charges
                FulfillmentMethod = "Local",
                TrackingAvailable = true,
                InsuranceIncluded = true
            };
        }
        
        // 4. International shipping with duties
        return new ShippingQuote
        {
            ShippingCost = baseShipping.Cost,
            EstimatedDelivery = baseShipping.DeliveryTime,
            DutiesAndTaxes = dutiesAndTaxes.TotalAmount,
            FulfillmentMethod = "International",
            CarrierOptions = new[] { "DHL", "FedEx", "Australia Post" },
            CustomsHandling = true,
            TrackingAvailable = true,
            InsuranceIncluded = baseShipping.Cost > 100
        };
    }
    
    private async Task<DutiesCalculation> CalculateImportDuties(
        List<CartItem> items, 
        string destinationCountry)
    {
        var totalValue = items.Sum(i => i.Price * i.Quantity);
        var dutyRate = await GetDutyRate(items.First().Category, destinationCountry);
        var taxRate = await GetLocalTaxRate(destinationCountry);
        
        // Most countries have duty-free thresholds
        var dutyFreeThreshold = GetDutyFreeThreshold(destinationCountry);
        
        if (totalValue <= dutyFreeThreshold)
        {
            return new DutiesCalculation
            {
                DutyAmount = 0,
                TaxAmount = 0,
                TotalAmount = 0,
                Reason = "Below duty-free threshold"
            };
        }
        
        var dutyAmount = (totalValue - dutyFreeThreshold) * dutyRate;
        var taxAmount = (totalValue + dutyAmount) * taxRate;
        
        return new DutiesCalculation
        {
            DutyAmount = Math.Round(dutyAmount, 2),
            TaxAmount = Math.Round(taxAmount, 2),
            TotalAmount = Math.Round(dutyAmount + taxAmount, 2),
            DutyRate = dutyRate,
            TaxRate = taxRate,
            DutyFreeThreshold = dutyFreeThreshold
        };
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">What I'd do differently with hindsight</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Learn the market before you build for it</strong> – how people pay, what they expect, what the local norms are. Cheaper to find out first.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Have a currency strategy, not just support</strong> – local pricing is one thing; hedging against rate swings is another, and finance will care about it.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Treat mobile as the default</strong> – most of the traffic in these markets is on a phone, so that's the experience to get right first.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Sort out logistics partners early</strong> – local fulfillment and carriers are what make delivery times competitive.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span><strong>Map the compliance early too</strong> – tax, import/export and data privacy rules differ per market and aren't something to discover at launch.</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">The numbers, and what they cost</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# The Good Guys Asian Expansion Results (2020-2022)

Investment Breakdown:
- Platform localization: $450K
- Local fulfillment centers: $1.2M  
- Marketing & partnerships: $800K
- Legal & compliance: $200K
- Total investment: $2.65M

Market Performance:
┌─────────────────────┬─────────────┬──────────────┬─────────────┐
│ Market              │ Launch Date │ Break-even   │ 2022 Revenue│
├─────────────────────┼─────────────┼──────────────┼─────────────┤
│ Singapore           │ March 2020  │ 8 months     │ $4.2M       │
│ Malaysia            │ August 2020 │ 12 months    │ $2.8M       │
│ Hong Kong           │ Feb 2021    │ 10 months    │ $1.9M       │
│ Thailand (pilot)    │ Nov 2021    │ Ongoing      │ $0.8M       │
└─────────────────────┴─────────────┴──────────────┴─────────────┘

Total ROI: 3.6x return on investment by end of 2022

Key Success Factors:
✅ Local payment method integration (40% conversion lift)
✅ Mobile-optimized checkout flows (60% mobile conversion)
✅ In-country fulfillment centers (70% faster delivery)
✅ Cultural localization beyond translation (25% engagement increase)
✅ Local customer service teams (4.6/5 satisfaction rating)

Biggest Challenges Overcome:
• Currency hedging strategy to manage exchange rate risk
• Complex tax compliance across multiple jurisdictions
• Integration with local logistics providers and customs
• Cultural adaptation of product descriptions and marketing
• Building trust with customers in new markets`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              The lasting lesson for me was that the technology was rarely the bottleneck. The hard part was trust — getting customers in a new market to believe an Australian brand would deliver, charge them fairly, and handle their data properly. You earn that by adapting to how they already shop, not by asking them to adapt to you. It's expensive and slow, and it was worth it.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/aussie-ecommerce-asia"
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