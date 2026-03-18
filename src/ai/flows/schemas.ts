
/**
 * @fileoverview This file centralizes all Zod schemas for AI flows.
 * This prevents schema duplication and ensures consistency across the application.
 */

import { z } from 'zod';

// Schema for src/ai/flows/check-card-condition.ts
export const cardConditionInputSchema = z.object({
  frontImageUri: z.string().describe("Image URL or Data URI of the front of the card."),
  backImageUri: z.string().describe("Image URL or Data URI of the back of the card."),
  idToken: z.string().describe('The Firebase ID token of the user.'),
});
export type CardConditionInput = z.infer<typeof cardConditionInputSchema>;

export const cardConditionOutputSchema = z.object({
  overallGrade: z.string().describe("The overall assessment of the card's grade as a string, including a number from 1-10 and a descriptive title (e.g., 'Mint 9', 'Near Mint 7', 'Poor 1')."),
  corners: z.string().describe("A brief, one-sentence description of the corners' condition (e.g., 'Sharp with minor whitening on the back-left corner.')."),
  edges: z.string().describe("A brief, one-sentence description of the edges' condition (e.g., 'Clean with one minor chip on the top edge.')."),
  surface: z.string().describe("A brief, one-sentence description of the card's surface, noting any scratches, print lines, or dimples."),
  centering: z.string().describe("An estimation of the centering as a ratio (e.g., '60/40 Front, 55/45 Back')."),
  isImageQualitySufficient: z.boolean().describe("A boolean indicating if the images were clear enough for a confident assessment."),
  qualityFeedback: z.string().optional().describe("If image quality is insufficient, provide a brief suggestion for improvement (e.g., 'Images are too blurry. Please provide higher resolution photos.'). Leave empty if quality is sufficient."),
});
export type CardConditionOutput = z.infer<typeof cardConditionOutputSchema>;


// Schema for src/ai/flows/suggest-listing-details.ts
export const suggestListingDetailsInputSchema = z.object({
  photoDataUris: z
    .array(z.string().describe("Image URL or Data URI"))
    .max(5, 'A maximum of 5 images are allowed.')
    .default([]),
  title: z.string().optional().describe("User-provided title to help generate details if images are missing."),
  category: z.string().optional().describe("User-selected category context."),
  idToken: z.string().describe('The Firebase ID token of the user.'),
});
export type SuggestListingDetailsInput = z.infer<typeof suggestListingDetailsInputSchema>;

export const suggestListingDetailsOutputSchema = z.object({
  title: z
    .string()
    .optional()
    .describe('A concise, descriptive, and SEO-friendly title for the listing (e.g., "Air Jordan 1 High OG Chicago Lost and Found").'),
  description: z
    .string()
    .optional()
    .describe(
      'A concise, one-to-two-line description of the item, highlighting its key features and condition.'
    ),
  price: z
    .number()
    .optional()
    .describe(
      'An estimated market price for the item in AUD, based on the provided images and analysis of similar items.'
    ),
  category: z.string().optional().describe("The single best category from this list: 'Sneakers', 'Streetwear', 'Accessories', 'Collector Cards', 'Coins', 'Collectibles', 'Memorabilia'."),
  subCategory: z.string().optional().describe("The single best sub-category based on the category context."),
  condition: z.string().optional().describe("The single best condition description. For sneakers: 'New with Box', 'Used'. For cards: 'Mint 9', 'Near Mint 7', 'Raw'. For coins: 'UNC', 'Circulated', 'Proof'."),
  brand: z.string().optional().describe("The brand or manufacturer (e.g., 'Nike', 'Adidas', 'Panini', 'Royal Australian Mint')."),
  model: z.string().optional().describe("The model name, set name, or specific item name."),
  styleCode: z.string().optional().describe("For sneakers: The unique style code (e.g., 'DZ5485-612')."),
  colorway: z.string().optional().describe("For sneakers: The colorway name."),
  size: z.string().optional().describe("For sneakers/streetwear: The size (e.g., '10.5', 'L', 'OS')."),
  year: z.number().optional().describe("The year the item was manufactured or released."),
  gradingCompany: z.string().optional().describe("For cards/coins: The grading company (e.g., PSA, PCGS, NGC)."),
  grade: z.string().optional().describe("For cards/coins: The numerical or descriptive grade."),
  cardNumber: z.string().optional().describe("For cards: The card number (e.g., #123)."),
  manufacturer: z.string().optional().describe("The manufacturer name."),
  // Coin Specifics
  denomination: z.string().optional().describe("For coins: e.g., '$1', '50c', 'Sovereign'."),
  mintMark: z.string().optional().describe("For coins: The mint mark (e.g., 'S', 'P', 'C')."),
  country: z.string().optional().describe("For coins: The country of origin."),
  metal: z.string().optional().describe("For coins: The metal composition (e.g., 'Gold', 'Silver')."),
  purity: z.string().optional().describe("For coins: The metal purity (e.g., '99.9%', '24K')."),
  weight: z.string().optional().describe("For coins/collectibles: The weight (e.g., '1oz', '31.1g')."),
  // General Collectibles / Memorabilia Specifics
  dimensions: z.string().optional().describe("For collectibles: e.g., '10x12 inches'."),
  material: z.string().optional().describe("For collectibles: e.g., 'Canvas', 'Bronze', 'Plastic'."),
  authentication: z.string().optional().describe("For memorabilia: e.g., 'PSA/DNA', 'Beckett Authentication'."),
  signer: z.string().optional().describe("For autographed items: The person who signed it."),
});
export type SuggestListingDetailsOutput = z.infer<typeof suggestListingDetailsOutputSchema>;


// Schema for src/ai/flows/bulk-suggest-cards.ts
export const bulkSuggestCardsInputSchema = z.object({
  photoDataUris: z
    .array(z.string().describe("Image URL or Data URI"))
    .max(20, 'A maximum of 20 images are allowed.')
    .default([]),
  idToken: z.string().describe('The Firebase ID token of the user.'),
});
export type BulkSuggestCardsInput = z.infer<typeof bulkSuggestCardsInputSchema>;

export const bulkSuggestCardsOutputSchema = z.object({
  cards: z.array(z.object({
    id: z.string().describe("Original index of the image provided."),
    title: z.string().optional().describe('Card Name/Player/Set/Year (e.g., "2019 Panini Prizm Zion Williamson #248").'),
    description: z.string().optional().describe("Brief description of the card."),
    price: z.number().optional().describe('Estimated market price in AUD.'),
    category: z.string().default('Collector Cards'),
    subCategory: z.string().optional().describe("Sport or type (e.g., 'Basketball Cards')."),
    condition: z.string().optional().describe("Estimated condition or grade (e.g., 'Raw', 'Near Mint')."),
    brand: z.string().optional().describe("Manufacturer (e.g., 'Panini', 'Topps')."),
    model: z.string().optional().describe("Set name (e.g., 'Prizm', 'Chrome')."),
    year: z.number().optional().describe("Release year."),
    cardNumber: z.string().optional().describe("Card number (e.g., #248)."),
    gradingCompany: z.string().optional().describe("PSA, BGS, etc."),
    grade: z.string().optional().describe("10, 9, etc."),
  })).describe("The list of detected cards corresponding to the provided images.")
});
export type BulkSuggestCardsOutput = z.infer<typeof bulkSuggestCardsOutputSchema>;


// Schema for src/ai/flows/process-donation.ts
export const processDonationInputSchema = z.object({
  donationId: z.string().describe('The ID of the donation document in Firestore.'),
  fullName: z.string(),
  email: z.string(),
  donationType: z.string(),
  description: z.string(),
  quantity: z.string(),
  idToken: z.string().describe('The Firebase ID token of the user.'),
});
export type ProcessDonationInput = z.infer<typeof processDonationInputSchema>;

export const processDonationOutputSchema = z.object({
  status: z.string(),
  message: z.string(),
});
export type ProcessDonationOutput = z.infer<typeof processDonationOutputSchema>;
