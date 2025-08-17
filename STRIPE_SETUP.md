# Stripe Statement Descriptor Configuration

This document outlines the business identity configuration for Stripe integration and statement descriptor compliance.

## Business Identity

### Primary Business Name: **AIWAITER**

- **Statement Descriptor**: `AIWAITER`
- **Display Name**: `AI Waiter`
- **Domain**: `aiwaiter.app`
- **Support Email**: `support@aiwaiter.app`

## Stripe Statement Descriptor Requirements

### What is a Statement Descriptor?

A statement descriptor is the text that appears on customer credit card statements to identify your business. Stripe uses a matching algorithm to verify this descriptor against your business information.

### Current Configuration

```typescript
// From src/lib/config.ts
stripe: {
  statementDescriptor: "AIWAITER",
  statementDescriptorSuffix: "",
  maxStatementDescriptorLength: 22,
}
```

### Stripe Matching Algorithm

Stripe's algorithm accepts:

- ✅ Exact matches with your DBA, URL, or Legal Entity Name
- ✅ Most acronyms
- ✅ Most matching words
- ✅ Most substrings

### Why "AIWAITER" Works

1. **Exact Match**: Matches your domain `aiwaiter.app`
2. **URL Compliance**: Directly corresponds to your website URL
3. **Length**: 8 characters (well under the 22-character limit)
4. **Characters**: Only letters (no special characters)
5. **Clarity**: Clear and recognizable for customers

## Implementation

### Configuration File

All business identity information is centralized in `src/lib/config.ts`:

```typescript
export const BUSINESS_CONFIG = {
  name: "AIWAITER",
  displayName: "AI Waiter",
  domain: "aiwaiter.app",
  supportEmail: "support@aiwaiter.app",
  // ... other configuration
};
```

### Helper Functions

- `getStripeStatementDescriptor()`: Returns the full statement descriptor
- `validateStripeStatementDescriptor()`: Validates descriptor compliance

### Usage in Components

```typescript
import { BUSINESS_CONFIG, getStripeStatementDescriptor } from "@/lib/config";

// Use in Stripe integration
const statementDescriptor = getStripeStatementDescriptor();
```

## Legal Pages Updated

All legal pages have been updated to use consistent business identity:

- ✅ Refund Policy
- ✅ Cancellation Policy
- ✅ Returns Policy
- ✅ Export Restrictions
- ✅ Promotions Terms
- ✅ Contact Information

## Translations Updated

All language files updated with consistent business name:

- ✅ English
- ✅ German
- ✅ Spanish
- ✅ French
- ✅ Dutch

## Next Steps for Stripe Integration

1. **Stripe Account Setup**: Ensure your Stripe account uses "AIWAITER" as the statement descriptor
2. **Business Verification**: Verify your business information matches in Stripe dashboard
3. **Testing**: Test charges to ensure statement descriptor appears correctly
4. **Monitoring**: Monitor for any descriptor-related issues

## Troubleshooting

### If Stripe Rejects the Descriptor

1. Verify your business registration matches "AIWAITER"
2. Ensure your domain `aiwaiter.app` is properly registered
3. Check that your Stripe account business information is consistent
4. Contact Stripe support if issues persist

### Alternative Descriptors (if needed)

- `AIWAITER.APP` (includes domain)
- `AI WAITER` (with space)
- `AIWAITER*` (with suffix)

## Compliance Notes

- ✅ Statement descriptor is under 22 characters
- ✅ Contains only valid characters (letters, numbers, spaces, periods)
- ✅ Matches business domain and identity
- ✅ Consistent across all legal documents
- ✅ Centralized configuration for easy updates
