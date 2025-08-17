// Business Identity Configuration
// This file centralizes business information for consistent use across the application
// and ensures Stripe statement descriptor compliance

export const BUSINESS_CONFIG = {
  // Primary business name for Stripe statement descriptor
  // This should match your DBA, Legal Entity Name, or URL
  name: "AIWAITER",

  // Display name used throughout the application
  displayName: "AI Waiter",

  // Domain name
  domain: "aiwaiter.app",

  // Support email (should match your domain)
  supportEmail: "support@aiwaiter.app",

  // Copyright year
  copyrightYear: new Date().getFullYear(),

  // Stripe configuration
  stripe: {
    // Statement descriptor (max 22 characters, no special characters except spaces and periods)
    statementDescriptor: "AIWAITER",

    // Statement descriptor suffix (optional, for additional context)
    statementDescriptorSuffix: "",

    // Maximum length for statement descriptor
    maxStatementDescriptorLength: 22,
  },

  // Legal entity information
  legal: {
    // Company name for legal documents
    companyName: "AI Waiter",

    // Business address (if needed for legal compliance)
    address: "",

    // Tax information
    taxId: "",
  },
} as const;

// Helper function to get full statement descriptor
export function getStripeStatementDescriptor(): string {
  const { statementDescriptor, statementDescriptorSuffix } =
    BUSINESS_CONFIG.stripe;
  const fullDescriptor =
    statementDescriptor +
    (statementDescriptorSuffix ? ` ${statementDescriptorSuffix}` : "");

  // Ensure it doesn't exceed Stripe's limit
  if (
    fullDescriptor.length > BUSINESS_CONFIG.stripe.maxStatementDescriptorLength
  ) {
    return statementDescriptor;
  }

  return fullDescriptor;
}

// Helper function to validate statement descriptor
export function validateStripeStatementDescriptor(descriptor: string): {
  valid: boolean;
  error?: string;
} {
  if (!descriptor || descriptor.trim().length === 0) {
    return { valid: false, error: "Statement descriptor cannot be empty" };
  }

  if (descriptor.length > BUSINESS_CONFIG.stripe.maxStatementDescriptorLength) {
    return {
      valid: false,
      error: `Statement descriptor cannot exceed ${BUSINESS_CONFIG.stripe.maxStatementDescriptorLength} characters`,
    };
  }

  // Check for invalid characters (only letters, numbers, spaces, and periods allowed)
  const validPattern = /^[a-zA-Z0-9\s.]+$/;
  if (!validPattern.test(descriptor)) {
    return {
      valid: false,
      error:
        "Statement descriptor can only contain letters, numbers, spaces, and periods",
    };
  }

  return { valid: true };
}
