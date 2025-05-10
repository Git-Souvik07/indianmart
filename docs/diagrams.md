

# Fresh Cart - System Diagrams

## Data Flow Diagram

```mermaid
graph TD
    A[Customer] --> B[Authentication]
    B --> C[Profile Management]
    
    A --> D[Product Catalog]
    D --> E[Search & Filter]
    D --> F[Category Browse]
    
    A --> G[Shopping Cart]
    G --> H[Checkout]
    H --> I[Payment Processing]
    I --> J[Order Management]
    
    J --> K[Inventory Update]
    J --> L[Order Notification]
    
    subgraph Frontend
        D
        E
        F
        G
    end
    
    subgraph Backend Services
        B[Supabase Auth]
        C[Profile Service]
        H[Checkout Service]
        I[Payment Service]
        J[Order Service]
        K[Inventory Service]
        L[Notification Service]
    end
    
    subgraph Database
        M[(User Data)]
        N[(Product Data)]
        O[(Order Data)]
        P[(Cart Data)]
    end
    
    B --> M
    C --> M
    D --> N
    G --> P
    J --> O
    K --> N
```

## Entity Relationship Diagram

```mermaid
erDiagram
    USERS ||--o{ PROFILES : has
    USERS ||--o{ ORDERS : places
    USERS ||--o{ CART_ITEMS : has
    
    USERS {
        uuid id PK
        string email
        timestamp created_at
        boolean is_active
    }
    
    PROFILES {
        uuid id PK
        string name
        string address
        string phone
        timestamp created_at
        timestamp updated_at
    }
    
    PRODUCTS {
        int id PK
        string name
        string description
        decimal price
        string image_url
        int category_id FK
        int stock
        decimal rating
        boolean is_popular
        timestamp created_at
        timestamp updated_at
    }
    
    CATEGORIES {
        int id PK
        string name
        string image_url
        string description
        timestamp created_at
    }
    
    ORDERS {
        uuid id PK
        uuid user_id FK
        decimal subtotal
        decimal tax
        decimal shipping
        decimal total
        string status
        string shipping_address
        timestamp created_at
        timestamp updated_at
    }
    
    ORDER_ITEMS {
        uuid id PK
        uuid order_id FK
        int product_id FK
        int quantity
        decimal unit_price
        decimal total_price
        timestamp created_at
    }
    
    CART_ITEMS {
        uuid id PK
        uuid user_id FK
        int product_id FK
        int quantity
        timestamp created_at
        timestamp updated_at
    }
    
    PRODUCTS ||--o{ ORDER_ITEMS : contains
    ORDERS ||--o{ ORDER_ITEMS : includes
    PRODUCTS ||--o{ CART_ITEMS : contains
    CATEGORIES ||--o{ PRODUCTS : categorizes
```

### Database Schema Details

#### Users Table
- Primary authentication table
- Managed by Supabase Auth
- Contains core user data
- Links to extended profile information

#### Profiles Table
- Extended user information
- Shipping addresses
- Contact details
- Preferences

#### Products Table
- Product information
- Inventory tracking
- Pricing
- Ratings and reviews
- Category association

#### Categories Table
- Product categorization
- Navigation structure
- Category metadata

#### Orders Table
- Order tracking
- Payment information
- Shipping details
- Status management

#### Order Items Table
- Individual order items
- Quantity tracking
- Price snapshots
- Product references

#### Cart Items Table
- Shopping cart state
- Temporary storage
- User selections
- Product references

### Key Relationships

1. **User → Profile** (1:1)
   - Each user has one profile
   - Profile contains extended user information

2. **User → Orders** (1:N)
   - Users can have multiple orders
   - Orders are linked to a single user

3. **Order → Order Items** (1:N)
   - Each order contains multiple items
   - Items are linked to specific products

4. **Category → Products** (1:N)
   - Categories contain multiple products
   - Products belong to one category

5. **User → Cart Items** (1:N)
   - Users can have multiple cart items
   - Cart items are linked to products
