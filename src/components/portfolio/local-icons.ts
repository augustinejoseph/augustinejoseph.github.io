/**
 * Local fallback glyphs for tech items that have no (or no longer have a)
 * brand icon in simple-icons — AWS, S3, Twilio, Oracle were all pulled from
 * that set at the companies' request, and concepts like microservices / CI/CD
 * / AI have no brand at all. These are generic monochrome marks (24x24,
 * single path, currentColor) that match the simple-icons rendering path.
 */
export const LOCAL_ICONS: Record<string, string> = {
  // Cloud (AWS, Oracle Cloud)
  aws: "M6.5 19a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.66-1.3A4.75 4.75 0 0 1 17.5 19h-11Zm0-2h11a2.75 2.75 0 0 0 .2-5.49l-.77-.06-.18-.75a4 4 0 0 0-7.78.87l-.1.86-.86.05A2.5 2.5 0 0 0 6.5 17Z",
  oracle:
    "M6.5 19a4.5 4.5 0 0 1-.42-8.98 6 6 0 0 1 11.66-1.3A4.75 4.75 0 0 1 17.5 19h-11Zm0-2h11a2.75 2.75 0 0 0 .2-5.49l-.77-.06-.18-.75a4 4 0 0 0-7.78.87l-.1.86-.86.05A2.5 2.5 0 0 0 6.5 17Z",

  // Object storage bucket (S3)
  s3: "M4 5h16l-1.2 13.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9L4 5Zm2.2 2 .9 11h9.8l.9-11H6.2Zm2.3 2.5h7l-.2 2.5h-6.6l-.2-2.5Z",

  // Messaging / telephony (Twilio)
  twilio:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 2a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm-2.75 4.5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.5 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm-5.5 5a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Zm5.5 0a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z",

  // Connected service nodes (Microservice Architecture)
  microservices:
    "M12 2a2.5 2.5 0 0 1 1 4.79V9h3.5a2.5 2.5 0 0 1 2.5 2.5v.71a2.5 2.5 0 1 1-2 0v-.71a.5.5 0 0 0-.5-.5H13v2.21a2.5 2.5 0 1 1-2 0V11H7.5a.5.5 0 0 0-.5.5v.71a2.5 2.5 0 1 1-2 0v-.71A2.5 2.5 0 0 1 7.5 9H11V6.79A2.5 2.5 0 0 1 12 2Z",

  // Build pipeline loop (CI/CD)
  cicd: "M12 4a8 8 0 0 1 7.42 5h-2.2A6 6 0 0 0 6 12H4a8 8 0 0 1 8-8Zm0 16a8 8 0 0 1-7.42-5h2.2A6 6 0 0 0 18 12h2a8 8 0 0 1-8 8Zm5-12h3v3l-3-3Zm-10 8H4v-3l3 3Z",

  // Spark / intelligence (AI)
  ai: "M12 2l1.7 5.1a4 4 0 0 0 2.5 2.5L21.3 11l-5.1 1.7a4 4 0 0 0-2.5 2.5L12 20.3l-1.7-5.1a4 4 0 0 0-2.5-2.5L2.7 11l5.1-1.7a4 4 0 0 0 2.5-2.5L12 2Z",
};
