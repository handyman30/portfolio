'use client';

import { motion } from "framer-motion";
import Link from 'next/link';

export default function MonolithToMicroservicesBlog() {
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
                Architecture
              </span>
              <span className="px-3 py-1 bg-teal-500 text-white rounded-full text-sm">
                The Good Guys
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-3 text-gray-900">From monolith to microservices, without the dogma</h1>
            <p className="text-gray-600 mb-6">April 25, 2024 • 16 min read</p>
            
            <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">What we were dealing with</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>A .NET monolith</strong> – 500K+ lines, a decade of organic growth</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>100+ physical stores</strong> – inventory that had to stay in sync</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>$2B+ in annual revenue</strong> – very little tolerance for downtime</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>50+ developers</strong> – all stepping on each other in one codebase</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-gray-900">Where it ended up</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>3x faster delivery</strong> – idea to production</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>60% faster APIs</strong> – on response times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>15% lift in conversion</strong> – mostly from faster pages</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">•</span>
                      <span><strong>$2M+ revenue impact</strong> – attributable to shipping faster</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              I want to get one thing out of the way first: the monolith wasn&apos;t a mistake. Most platforms start as one for good reasons, and The Good Guys was no exception — a single .NET app got the business a long way before I joined in 2019. The case for splitting it up only became clear once 50-odd developers were queuing to deploy and a small change anywhere meant redeploying everything. This is the story of when we decided that pain was worth fixing, and what it took. It ran about 18 months.
            </p>
            
            <div className="mb-6 bg-teal-50 p-5 rounded-lg border border-teal-200">
              <h4 className="font-semibold mb-3 text-teal-900">Before and after</h4>
              <div className="bg-white p-4 rounded-md mb-4">
                <div className="text-center text-sm font-mono text-gray-700 space-y-4">
                  <div className="border border-red-300 rounded-md p-4 bg-red-50">
                    <strong>Before: Monolithic Architecture</strong><br/>
                    <div className="mt-2 text-xs">
                      <div className="bg-red-200 p-2 mb-2 rounded">Single .NET Application (500K+ lines)</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-red-300 p-1 rounded text-center">Product Catalog</div>
                        <div className="bg-red-300 p-1 rounded text-center">Inventory</div>
                        <div className="bg-red-300 p-1 rounded text-center">Orders</div>
                        <div className="bg-red-300 p-1 rounded text-center">Payments</div>
                        <div className="bg-red-300 p-1 rounded text-center">User Management</div>
                        <div className="bg-red-300 p-1 rounded text-center">Reporting</div>
                      </div>
                      <div className="bg-red-200 p-2 mt-2 rounded">Single SQL Server Database</div>
                    </div>
                  </div>
                  
                  <div className="text-2xl">↓</div>
                  
                  <div className="border border-green-300 rounded-md p-4 bg-green-50">
                    <strong>After: Microservices Architecture</strong><br/>
                    <div className="mt-2 text-xs">
                      <div className="grid grid-cols-3 gap-2 mb-2">
                        <div className="bg-green-200 p-1 rounded text-center">Product Service</div>
                        <div className="bg-green-200 p-1 rounded text-center">Inventory Service</div>
                        <div className="bg-green-200 p-1 rounded text-center">Order Service</div>
                        <div className="bg-green-200 p-1 rounded text-center">Payment Service</div>
                        <div className="bg-green-200 p-1 rounded text-center">User Service</div>
                        <div className="bg-green-200 p-1 rounded text-center">Analytics Service</div>
                      </div>
                      <div className="bg-blue-200 p-2 mb-2 rounded">API Gateway (Kong)</div>
                      <div className="bg-yellow-200 p-2 mb-2 rounded">Event Bus (RabbitMQ)</div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-200 p-1 rounded text-center">PostgreSQL</div>
                        <div className="bg-gray-200 p-1 rounded text-center">Redis Cache</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-teal-800 text-sm">
                Splitting the 500K-line monolith into services along domain lines roughly tripled how fast we could ship, and made the system easier to keep up.
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Strangling the monolith one route at a time</h4>
              <p className="text-gray-700 mb-4">
                A big-bang rewrite was never on the table — not on a system taking real orders. We used the strangler fig pattern: stand up a new service, route a slice of traffic to it behind a feature toggle, and keep the old path as a fallback until the new one earned trust. Product catalog went first because it was the most self-contained:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Phase 1: Extract Product Catalog Service
// Legacy Monolith ProductController
[Route("api/products")]
public class ProductController : Controller
{
    private readonly LegacyProductService _legacyService;
    private readonly NewProductService _newService;
    private readonly IFeatureToggle _featureToggle;

    [HttpGet("{id}")]
    public async Task<IActionResult> GetProduct(int id)
    {
        // Strangler Fig: Route to new service gradually
        if (await _featureToggle.IsEnabled("new-product-service", id))
        {
            var newProduct = await _newService.GetProductAsync(id);
            return Ok(newProduct);
        }
        
        // Fallback to legacy system
        var legacyProduct = await _legacyService.GetProduct(id);
        return Ok(MapToNewFormat(legacyProduct));
    }
}

// New Microservice: Product Service
[ApiController]
[Route("api/v1/products")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;
    private readonly IEventPublisher _eventPublisher;

    [HttpGet("{id}")]
    public async Task<ActionResult<ProductDto>> GetProduct(
        [FromRoute] int id)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null)
            return NotFound();

        await _eventPublisher.PublishAsync(new ProductViewedEvent
        {
            ProductId = id,
            ViewedAt = DateTime.UtcNow,
            UserId = GetCurrentUserId()
        });

        return Ok(ProductDto.FromDomain(product));
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateProduct(
        [FromRoute] int id, 
        [FromBody] UpdateProductRequest request)
    {
        var product = await _repository.GetByIdAsync(id);
        if (product == null)
            return NotFound();

        product.UpdateDetails(request.Name, request.Description, request.Price);
        await _repository.UpdateAsync(product);

        await _eventPublisher.PublishAsync(new ProductUpdatedEvent
        {
            ProductId = id,
            UpdatedFields = request.GetChangedFields(),
            UpdatedAt = DateTime.UtcNow
        });

        return NoContent();
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Pulling the data apart</h4>
              <p className="text-gray-700 mb-4">
                The hardest part wasn&apos;t the code, it was the database. Everything shared one SQL Server, and giving each service its own store while keeping data consistent in the meantime was the part that kept me up at night. We migrated a table at a time, transformed into the new model, and emitted events so the other services could keep their own copies in step:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Database Migration Strategy
public class ProductDataMigrationService
{
    private readonly ILegacyDatabase _legacyDb;
    private readonly IProductDatabase _productDb;
    private readonly IEventStore _eventStore;

    public async Task MigrateProductData()
    {
        // 1. Create read-only replica for migration
        var products = await _legacyDb.GetAllProductsAsync();
        
        foreach (var legacyProduct in products)
        {
            // 2. Transform to new domain model
            var newProduct = new Product
            {
                Id = legacyProduct.Id,
                Name = legacyProduct.ProductName,
                Description = legacyProduct.ProductDescription,
                Price = legacyProduct.CurrentPrice,
                CategoryId = legacyProduct.CategoryId,
                SKU = legacyProduct.ProductCode,
                CreatedAt = legacyProduct.DateCreated,
                UpdatedAt = legacyProduct.LastModified
            };

            // 3. Migrate to new database
            await _productDb.CreateProductAsync(newProduct);

            // 4. Create event for other services
            await _eventStore.AppendAsync(new ProductMigratedEvent
            {
                ProductId = newProduct.Id,
                MigratedAt = DateTime.UtcNow,
                SourceSystem = "Legacy"
            });
        }
    }
}

// Event-Driven Communication Between Services
public class InventoryService
{
    private readonly IInventoryRepository _repository;

    [EventHandler]
    public async Task Handle(ProductCreatedEvent @event)
    {
        // Automatically create inventory record for new products
        var inventory = new InventoryItem
        {
            ProductId = @event.ProductId,
            Quantity = 0,
            ReorderLevel = 10,
            CreatedAt = DateTime.UtcNow
        };

        await _repository.CreateInventoryItemAsync(inventory);
    }

    [EventHandler]
    public async Task Handle(ProductDeletedEvent @event)
    {
        // Clean up inventory when product is deleted
        await _repository.DeleteByProductIdAsync(@event.ProductId);
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">The gateway and how services talk</h4>
              <p className="text-gray-700 mb-4">
                Once you have more than a couple of services you need something in front of them. Kong handled routing, auth and rate limiting so each service didn&apos;t have to reinvent that. Service-to-service calls went through discovery, with a fallback when a dependency was down so one sick service didn&apos;t take the rest with it:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# Kong API Gateway Configuration
# Product Service Route
kong:
  services:
    - name: product-service
      url: http://product-service:8080
      routes:
        - name: product-api
          paths: ["/api/v1/products"]
          methods: ["GET", "POST", "PUT", "DELETE"]
      plugins:
        - name: rate-limiting
          config:
            minute: 1000
            hour: 10000
        - name: jwt
          config:
            secret_is_base64: false

    - name: inventory-service
      url: http://inventory-service:8080
      routes:
        - name: inventory-api
          paths: ["/api/v1/inventory"]
      plugins:
        - name: correlation-id
        - name: request-response-logging

# Service Discovery with Consul
public class ProductService
{
    private readonly IServiceDiscovery _serviceDiscovery;
    private readonly HttpClient _httpClient;

    public async Task<InventoryStatus> GetInventoryStatus(int productId)
    {
        // Discover inventory service endpoint
        var inventoryEndpoint = await _serviceDiscovery
            .DiscoverServiceAsync("inventory-service");
        
        var response = await _httpClient.GetAsync(
            $"{inventoryEndpoint}/api/v1/inventory/product/{productId}");
        
        if (response.IsSuccessStatusCode)
        {
            var content = await response.Content.ReadAsStringAsync();
            return JsonSerializer.Deserialize<InventoryStatus>(content);
        }
        
        // Circuit breaker: return default if service unavailable
        return new InventoryStatus { Available = false, Quantity = 0 };
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold mb-3 text-gray-900">Drawing the boundaries around domains</h4>
              <p className="text-gray-700 mb-4">
                The mistake I&apos;ve seen elsewhere is slicing services by technical layer — a controllers service, a data service — which just gives you a distributed monolith. We drew the lines around business domains instead. Orders is a good example: the rules about what you can and can&apos;t do to an order live in the order aggregate, not scattered across the app:
              </p>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`// Domain Model: Order Aggregate
public class Order
{
    private readonly List<OrderItem> _items = new();
    private readonly List<DomainEvent> _events = new();

    public OrderId Id { get; private set; }
    public CustomerId CustomerId { get; private set; }
    public OrderStatus Status { get; private set; }
    public Money TotalAmount { get; private set; }
    public DateTime CreatedAt { get; private set; }

    public void AddItem(ProductId productId, int quantity, Money unitPrice)
    {
        if (Status != OrderStatus.Draft)
            throw new InvalidOperationException("Cannot modify confirmed order");

        var existingItem = _items.FirstOrDefault(i => i.ProductId == productId);
        if (existingItem != null)
        {
            existingItem.UpdateQuantity(existingItem.Quantity + quantity);
        }
        else
        {
            _items.Add(new OrderItem(productId, quantity, unitPrice));
        }

        RecalculateTotal();
        _events.Add(new OrderItemAddedEvent(Id, productId, quantity));
    }

    public void Confirm()
    {
        if (Status != OrderStatus.Draft)
            throw new InvalidOperationException("Order already confirmed");
        
        if (!_items.Any())
            throw new InvalidOperationException("Cannot confirm empty order");

        Status = OrderStatus.Confirmed;
        _events.Add(new OrderConfirmedEvent(Id, CustomerId, TotalAmount));
    }

    private void RecalculateTotal()
    {
        TotalAmount = Money.FromDecimal(
            _items.Sum(i => i.UnitPrice.Amount * i.Quantity),
            "AUD");
    }
}

// Application Service
public class OrderService
{
    private readonly IOrderRepository _orderRepository;
    private readonly IInventoryService _inventoryService;
    private readonly IPaymentService _paymentService;
    private readonly IEventPublisher _eventPublisher;

    public async Task<OrderId> CreateOrderAsync(CreateOrderCommand command)
    {
        // Validate inventory availability
        foreach (var item in command.Items)
        {
            var available = await _inventoryService
                .CheckAvailabilityAsync(item.ProductId, item.Quantity);
            
            if (!available)
                throw new InsufficientInventoryException(item.ProductId);
        }

        // Create order aggregate
        var order = new Order(command.CustomerId);
        foreach (var item in command.Items)
        {
            order.AddItem(item.ProductId, item.Quantity, item.UnitPrice);
        }

        // Persist order
        await _orderRepository.SaveAsync(order);

        // Publish domain events
        foreach (var @event in order.GetDomainEvents())
        {
            await _eventPublisher.PublishAsync(@event);
        }

        return order.Id;
    }
}`}
                </pre>
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="font-semibold mb-3 text-gray-900">Results, and what I&apos;d tell my past self</h4>
              <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm text-gray-800">
{`# The Good Guys Microservices Migration Results (2019-2021)

Timeline & Team Impact:
• Phase 1 (Months 1-6): Product & Inventory services
• Phase 2 (Months 7-12): Order & Payment services  
• Phase 3 (Months 13-18): User & Analytics services
• Team structure: 8 domain teams, 3-5 developers each

Technical Metrics:
┌─────────────────────────┬─────────────┬────────────────┬─────────────────┐
│ Metric                  │ Monolith    │ Microservices  │ Improvement     │
├─────────────────────────┼─────────────┼────────────────┼─────────────────┤
│ Deployment Frequency    │ Monthly     │ Daily          │ 30x increase    │
│ Lead Time (Idea→Prod)   │ 8 weeks     │ 2.5 weeks      │ 3x faster       │
│ Mean Recovery Time      │ 4 hours     │ 15 minutes     │ 16x faster      │
│ Service Availability    │ 99.2%       │ 99.7%          │ 0.5% improvement│
│ API Response Time       │ 850ms       │ 340ms          │ 60% faster      │
└─────────────────────────┴─────────────┴────────────────┴─────────────────┘

Business Impact:
✅ $2M+ annual revenue increase from faster feature delivery
✅ 15% improvement in conversion rates (faster page loads)
✅ 75% reduction in cross-team dependencies
✅ 50% faster onboarding for new developers

Key Lessons Learned:
🎯 Start with the most independent bounded contexts
📊 Invest heavily in observability and monitoring
🔄 Event-driven architecture enables loose coupling
👥 Conway's Law: Team structure drives architecture
⚡ Database migration is the hardest part - plan carefully
🛡️ Distributed systems bring new failure modes
📈 Microservices excel when you have autonomous teams`}
                </pre>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Share:</span>
                <a 
                  href="https://www.linkedin.com/sharing/share-offsite/?url=https://handyhasan.com/blog/monolith-to-microservices"
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