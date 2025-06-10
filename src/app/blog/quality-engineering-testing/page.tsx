'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function QualityEngineeringTestingBlog() {
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
                Testing
              </span>
              <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">
                Quality Engineering
              </span>
              <span className="px-3 py-1 bg-emerald-500 text-white rounded-full text-sm">
                Latest
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">Quality Engineering at Scale: Unit Tests, Cypress, Git Hooks & SonarCloud Integration</h1>
            <p className="text-gray-600 mb-4">
              December 20, 2024 • 15 min read
            </p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Testing Strategy Foundation</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🧪</span>
                      <span><strong>Unit Testing Excellence</strong> – Jest examples with real payment logic</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📊</span>
                      <span><strong>Testing Pyramid</strong> – 70% unit, 20% integration, 10% E2E</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🔄</span>
                      <span><strong>Cypress Integration</strong> – Complete user journey testing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🔗</span>
                      <span><strong>API Integration Tests</strong> – Backend/frontend communication</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Automation & Quality Gates</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">⚡</span>
                      <span><strong>Git Hooks Setup</strong> – Pre-commit and pre-push automation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🔍</span>
                      <span><strong>SonarCloud Integration</strong> – Continuous code quality inspection</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">🚀</span>
                      <span><strong>GitHub Actions</strong> – Automated quality gate workflows</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-emerald-500 mr-2">📈</span>
                      <span><strong>Quality Metrics</strong> – Coverage, maintainability, reliability</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Quality isn't just about writing tests—it's about building a culture and infrastructure that prevents bugs from reaching production. After implementing comprehensive quality engineering practices across multiple production systems, I've learned that the best testing strategies combine automated testing, static analysis, and continuous integration into a seamless development workflow.
            </p>
            
            <div className="mb-6 bg-emerald-50 p-5 rounded-lg border border-emerald-200">
              <h4 className="font-semibold mb-3 text-emerald-900">The Testing Pyramid in Practice</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-2">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-blue-300 rounded-md p-3 bg-blue-50">
                      <strong>Unit Tests (70%)</strong><br/>
                      <span className="text-xs">• Fast execution<br/>• Individual functions<br/>• High coverage<br/>• Immediate feedback</span>
                    </div>
                    <div className="border border-yellow-300 rounded-md p-3 bg-yellow-50">
                      <strong>Integration Tests (20%)</strong><br/>
                      <span className="text-xs">• API endpoints<br/>• Database interactions<br/>• Service communication<br/>• Real data flows</span>
                    </div>
                    <div className="border border-green-300 rounded-md p-3 bg-green-50">
                      <strong>E2E Tests (10%)</strong><br/>
                      <span className="text-xs">• User journeys<br/>• Browser automation<br/>• Critical paths<br/>• Production-like</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-emerald-800 text-sm">
                The testing pyramid ensures maximum coverage with optimal execution speed and maintainability.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Unit Testing Excellence with Jest</h4>
              <p className="text-gray-700 mb-4">
                Effective unit tests should be fast, isolated, and provide clear feedback. Here's how we structure unit tests for complex business logic:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// PaymentProcessor.test.js - Comprehensive unit testing example
import PaymentProcessor from '../PaymentProcessor';
import { mockPaymentGateway, mockAuditLogger } from '../__mocks__';

describe('PaymentProcessor', () => {
  let paymentProcessor;
  let mockGateway;
  let mockLogger;

  beforeEach(() => {
    mockGateway = mockPaymentGateway();
    mockLogger = mockAuditLogger();
    paymentProcessor = new PaymentProcessor(mockGateway, mockLogger);
  });

  describe('processPayment', () => {
    it('should successfully process a valid payment', async () => {
      // Arrange
      const paymentRequest = {
        amount: 99.99,
        currency: 'AUD',
        cardToken: 'tok_1234567890',
        customerId: 'cus_test123'
      };
      
      mockGateway.charge.mockResolvedValue({
        id: 'charge_test123',
        status: 'succeeded',
        amount: 9999
      });

      // Act
      const result = await paymentProcessor.processPayment(paymentRequest);

      // Assert
      expect(result.success).toBe(true);
      expect(result.chargeId).toBe('charge_test123');
      expect(mockLogger.logPaymentSuccess).toHaveBeenCalled();
    });

    it('should handle payment failures gracefully', async () => {
      mockGateway.charge.mockRejectedValue({
        type: 'card_error',
        code: 'card_declined'
      });

      const result = await paymentProcessor.processPayment({
        amount: 50.00,
        currency: 'AUD'
      });

      expect(result.success).toBe(false);
      expect(result.error.type).toBe('card_error');
    });
  });
});`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Cypress E2E Testing Implementation</h4>
              <p className="text-gray-700 mb-4">
                End-to-end tests validate complete user journeys. Here's how we implement robust E2E testing:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// cypress/e2e/checkout-flow.cy.js
describe('E-commerce Checkout Flow', () => {
  beforeEach(() => {
    cy.task('db:seed');
    cy.intercept('POST', '/api/payments/process', {
      fixture: 'payment-success.json'
    }).as('processPayment');
  });

  it('completes full purchase journey', () => {
    cy.visit('/products/wireless-headphones');
    cy.get('[data-testid="add-to-cart-btn"]').click();
    cy.get('[data-testid="checkout-btn"]').click();

    // Fill shipping information
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="address"]').type('123 Test Street');
    
    // Fill payment information
    cy.get('input[name="cardNumber"]').type('4242424242424242');
    cy.get('input[name="expiryDate"]').type('12/25');
    
    cy.get('[data-testid="complete-purchase-btn"]').click();
    cy.wait('@processPayment');
    
    cy.url().should('include', '/order-confirmation');
    cy.get('[data-testid="order-confirmation"]')
      .should('contain', 'Order Confirmed');
  });
});`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Git Hooks for Quality Gates</h4>
              <p className="text-gray-700 mb-4">
                Automated quality checks prevent poor code from entering the repository:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# .husky/pre-commit
#!/usr/bin/env sh
echo "🔍 Running pre-commit checks..."

# Lint staged files
npx lint-staged

# Type checking
npx tsc --noEmit

# Security audit
npm audit --audit-level moderate

echo "✅ Pre-commit checks completed!"

# package.json scripts
{
  "scripts": {
    "test:unit": "jest --testPathPattern=__tests__/unit",
    "test:integration": "jest --testPathPattern=__tests__/integration",
    "test:e2e": "cypress run",
    "lint": "eslint . --ext .js,.jsx,.ts,.tsx --fix",
    "prepare": "husky install"
  }
}

# lint-staged.config.js
module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'jest --findRelatedTests --passWithNoTests'
  ]
};`}
                </pre>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">SonarCloud Integration & Quality Metrics</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# sonar-project.properties
sonar.projectKey=quality-engineering-example
sonar.organization=handy-hasan
sonar.sources=src
sonar.tests=src
sonar.test.inclusions=**/*.test.js,**/*.spec.js
sonar.javascript.lcov.reportPaths=coverage/lcov.info

# GitHub Actions Quality Pipeline
name: Quality Analysis
on: [push, pull_request]
jobs:
  quality:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Run tests with coverage
        run: npm run test:coverage
      - name: SonarCloud Scan
        uses: SonarSource/sonarcloud-github-action@master
        env:
          GITHUB_TOKEN: \${{ secrets.GITHUB_TOKEN }}
          SONAR_TOKEN: \${{ secrets.SONAR_TOKEN }}`}
                </pre>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 italic">
              Quality engineering transformed how we ship software at The Good Guys. Our comprehensive testing strategy reduced production bugs by 85% and increased developer confidence. The upfront investment in quality infrastructure pays dividends in faster delivery and fewer production issues.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/quality-engineering-testing"
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
            
            {/* Back to Blog Link */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                href="/blog"
                className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                ← Back to All Posts
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Handy Hasan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
} 