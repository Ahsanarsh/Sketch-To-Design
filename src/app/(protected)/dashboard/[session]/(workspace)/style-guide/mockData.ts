import { StyleGuide, MoodBoardImage } from "@/redux/api/style-guide";

export const mockStyleGuide: StyleGuide = {
  theme: "Modern Elegance",
  description:
    "A sophisticated design system blending soft pastels with bold accents for a refined, contemporary aesthetic.",
  colorSections: [
    {
      title: "Primary Colours",
      swatches: [
        {
          name: "Lavender Dream",
          hexColor: "#6B63F2",
          description: "Soft purple for headers and primary elements",
        },
        {
          name: "Cloud White",
          hexColor: "#F1F1FE",
          description: "Pure white background with subtle warmth",
        },
        {
          name: "Mint Cream",
          hexColor: "#F0FFF4",
          description: "Gentle mint for light backgrounds and accents",
        },
      ],
    },
    {
      title: "Secondary & Accent Colors",
      swatches: [
        {
          name: "Peach Blush",
          hexColor: "#FE9177",
          description: "Warm peach for CTAs and highlights",
        },
        {
          name: "Sky Blue",
          hexColor: "#DBEAFE",
          description: "Calming blue for secondary actions",
        },
        {
          name: "Sunshine Yellow",
          hexColor: "#FEF3C7",
          description: "Cheerful yellow for attention-grabbing elements",
        },
      ],
    },
    {
      title: "UI Component Colors",
      swatches: [
        {
          name: "Rose Quartz",
          hexColor: "#FCE7F3",
          description: "Soft pink for component borders and dividers",
        },
        {
          name: "Slate Gray",
          hexColor: "#64748B",
          description: "Neutral gray for secondary text and icons",
        },
        {
          name: "Deep Indigo",
          hexColor: "#312E81",
          description: "Rich indigo for active states and focus rings",
        },
      ],
    },
    {
      title: "Utility & Form Colors",
      swatches: [
        {
          name: "Input Border",
          hexColor: "#CBD5E1",
          description: "Subtle border for form inputs and text fields",
        },
        {
          name: "Disabled Gray",
          hexColor: "#E2E8F0",
          description: "Muted gray for disabled states",
        },
        {
          name: "Focus Ring",
          hexColor: "#818CF8",
          description: "Vibrant indigo ring for focused form elements",
        },
      ],
    },
    {
      title: "Status & Feedback Colors",
      swatches: [
        {
          name: "Success Green",
          hexColor: "#22C55E",
          description: "Confirmation green for success messages",
        },
        {
          name: "Warning Amber",
          hexColor: "#F59E0B",
          description: "Alert amber for warning notifications",
        },
        {
          name: "Error Red",
          hexColor: "#EF4444",
          description: "Critical red for error states and destructive actions",
        },
      ],
    },
  ],
  typographySections: [
    {
      title: "Headings",
      styles: [
        {
          name: "Hero Title",
          fontFamily: "Inter",
          fontSize: "48px",
          fontWeight: "800",
          lineHeight: "1.1",
          letterSpacing: "-0.02em",
          description: "Main hero sections and landing page titles",
        },
        {
          name: "Section Heading",
          fontFamily: "Inter",
          fontSize: "32px",
          fontWeight: "700",
          lineHeight: "1.25",
          letterSpacing: "-0.01em",
          description: "Page section headings and card titles",
        },
        {
          name: "Subsection Heading",
          fontFamily: "Inter",
          fontSize: "24px",
          fontWeight: "600",
          lineHeight: "1.3",
          letterSpacing: "0",
          description: "Subsection titles and modal headings",
        },
      ],
    },
    {
      title: "Body Text",
      styles: [
        {
          name: "Body Large",
          fontFamily: "Inter",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "1.6",
          letterSpacing: "0",
          description: "Lead paragraphs and introductory text",
        },
        {
          name: "Body Regular",
          fontFamily: "Inter",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "1.5",
          letterSpacing: "0",
          description: "Default body text for content areas",
        },
        {
          name: "Body Small",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "1.5",
          letterSpacing: "0.01em",
          description: "Secondary text and descriptions",
        },
      ],
    },
    {
      title: "UI Labels",
      styles: [
        {
          name: "Button Label",
          fontFamily: "Inter",
          fontSize: "14px",
          fontWeight: "600",
          lineHeight: "1",
          letterSpacing: "0.02em",
          description: "Button text and interactive element labels",
        },
        {
          name: "Caption",
          fontFamily: "Inter",
          fontSize: "12px",
          fontWeight: "500",
          lineHeight: "1.4",
          letterSpacing: "0.03em",
          description: "Image captions, timestamps, and metadata",
        },
        {
          name: "Overline",
          fontFamily: "Inter",
          fontSize: "11px",
          fontWeight: "600",
          lineHeight: "1.2",
          letterSpacing: "0.08em",
          description: "Uppercase labels, tags, and category markers",
        },
      ],
    },
  ],
};

export const mockMoodBoardImages: MoodBoardImage[] = [
  {
    id: "mock-1",
    storageId: "mock-storage-1",
    url: null,
    uploaded: true,
    uploading: false,
    index: 0,
  },
  {
    id: "mock-2",
    storageId: "mock-storage-2",
    url: null,
    uploaded: true,
    uploading: false,
    index: 1,
  },
  {
    id: "mock-3",
    storageId: "mock-storage-3",
    url: null,
    uploaded: true,
    uploading: false,
    index: 2,
  },
];
