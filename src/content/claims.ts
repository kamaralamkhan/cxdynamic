export interface ClaimItem {
  id: string;
  label: string;
  value: string;
  confirmed: boolean;
  unconfirmedFallback: string;
}

export interface ClaimsConfig {
  freeTrial: ClaimItem;
  goLive: ClaimItem;
  supportHours: ClaimItem;
  uptimeSla: ClaimItem;
  crmIntegrations: ClaimItem;
  costReduction: ClaimItem;
  carrierGradeVoice: ClaimItem;
  solutionsCount: ClaimItem;
  responseGuarantee: ClaimItem;
  pricingTransparency: ClaimItem;
  awardWinning: ClaimItem;
  contractTerm: ClaimItem;
  pricingModel: ClaimItem;
  dataSecurity: ClaimItem;
  callRecordingCompliance: ClaimItem;
  trainingAndOnboarding: ClaimItem;
  cancellationPolicy: ClaimItem;
}

/**
 * CXDYNAMIQ Claims Registry
 * All unverified marketing claims are set to confirmed: false by default.
 * When unconfirmed, neutral wording or fallbacks are rendered.
 */
export const claims: ClaimsConfig = {
  freeTrial: {
    id: "free-trial",
    label: "Evaluation Period",
    value: "21-Day Free Trial",
    confirmed: true, // Specifically present on legacy scraped pages
    unconfirmedFallback: "Contact sales for trial options",
  },
  goLive: {
    id: "go-live",
    label: "Implementation Speed",
    value: "Deploy in 1 Business Day",
    confirmed: true, // "Go live within a day" is prominent on legacy site
    unconfirmedFallback: "Rapid deployment available",
  },
  supportHours: {
    id: "support-hours",
    label: "VIP Support",
    value: "24/7 Dedicated Support",
    confirmed: true, // "VIP 24/7 Support" is featured across legacy headers
    unconfirmedFallback: "Standard business hours & emergency support",
  },
  uptimeSla: {
    id: "uptime-sla",
    label: "Availability SLA",
    value: "99.9% Uptime Guarantee",
    confirmed: false, // Unconfirmed claim -> hidden/neutral
    unconfirmedFallback: "High-Availability Cloud Telephony",
  },
  crmIntegrations: {
    id: "crm-integrations",
    label: "CRM Integrations",
    value: "100% Seamless CRM native CTI integrations",
    confirmed: false, // Unconfirmed claim -> replaced with neutral wording
    unconfirmedFallback: "Native CRM & CTI integrations",
  },
  costReduction: {
    id: "cost-reduction",
    label: "Cost Efficiency",
    value: "40%+ Cut operational contact costs",
    confirmed: false, // Unconfirmed claim -> replaced with neutral wording
    unconfirmedFallback: "Optimized operational efficiency",
  },
  carrierGradeVoice: {
    id: "carrier-grade-voice",
    label: "Voice Infrastructure",
    value: "Guaranteed 99.9% uptime, carrier-grade voice infrastructure",
    confirmed: false, // Unconfirmed claim -> replaced with neutral wording
    unconfirmedFallback: "High-availability voice infrastructure & automated failover routing",
  },
  solutionsCount: {
    id: "solutions-count",
    label: "Products Count",
    value: "15+ Products & Solutions",
    confirmed: true, // Reconciled to single canonical phrase "15+ Products & Solutions"
    unconfirmedFallback: "15+ Products & Solutions",
  },
  responseGuarantee: {
    id: "response-guarantee",
    label: "Response Guarantee",
    value: "Sub-30 Minute Response Guarantee",
    confirmed: false, // Unconfirmed commercial promise -> replaced with neutral wording
    unconfirmedFallback: "Talk to a specialist",
  },
  pricingTransparency: {
    id: "pricing-transparency",
    label: "Pricing Subtitle",
    value: "transparent pricing, ultrafast rollout, and VIP engineering support",
    confirmed: false, // No public pricing exists -> replaced with neutral wording
    unconfirmedFallback: "ultrafast rollout and VIP support",
  },
  awardWinning: {
    id: "award-winning",
    label: "Industry Recognition",
    value: "award-winning, cloud-based contact center solution",
    confirmed: false, // Unconfirmed award name/year -> replaced with neutral wording
    unconfirmedFallback: "enterprise-ready, cloud-based contact center solution",
  },
  contractTerm: {
    id: "contract-term",
    label: "Commitment Term",
    value: "Flexible Month-to-Month or Annual Plans",
    confirmed: false,
    unconfirmedFallback: "Contact us for custom contract terms",
  },
  pricingModel: {
    id: "pricing-model",
    label: "Pricing Structure",
    value: "Transparent Per-Agent Seat Pricing",
    confirmed: false,
    unconfirmedFallback: "Contact us for custom pricing details",
  },
  dataSecurity: {
    id: "data-security",
    label: "Compliance & Security",
    value: "End-to-End TLS Encryption & Local Data Residency",
    confirmed: false,
    unconfirmedFallback: "Enterprise security architecture",
  },
  callRecordingCompliance: {
    id: "call-recording-compliance",
    label: "Call Recording Consent",
    value: "Automated Dual-Party Notification & PII Masking",
    confirmed: false,
    unconfirmedFallback: "Compliant recording options available",
  },
  trainingAndOnboarding: {
    id: "training-onboarding",
    label: "Onboarding & Training",
    value: "Dedicated VIP Engineer Live Training Session Included",
    confirmed: false,
    unconfirmedFallback: "Guided onboarding available",
  },
  cancellationPolicy: {
    id: "cancellation-policy",
    label: "Cancellation Policy",
    value: "Cancel anytime with 30-day notice",
    confirmed: false,
    unconfirmedFallback: "Flexible cancellation terms",
  },
};

export function getDisplayClaim(claim: ClaimItem): string {
  return claim.confirmed ? claim.value : claim.unconfirmedFallback;
}
