import {
  MoodBoardImagesQuery,
  StyleGuideQuery,
} from "@/app/convex/query.config";
import { StyleGuide, MoodBoardImage } from "@/redux/api/style-guide";
import { Palette } from "lucide-react";
import React from "react";
import { mockStyleGuide } from "./mockData";
import StyleGuideTabs from "./StyleGuideTabs";

type props = {
  searchParams: Promise<{ project: string }>;
};

const Page = async (props: props) => {
  const projectId = (await props.searchParams).project;

  if (!projectId || projectId === "null") {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
          <Palette className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-2">
          No project selected
        </h3>
        <p className="text-sm text-muted-foreground max-w-md mx-auto text-center">
          Select a project to view its style guide.
        </p>
      </div>
    );
  }

  const existingStyleGuide = await StyleGuideQuery(projectId);

  const guide = existingStyleGuide.styleGuide
    ?._valueJSON as unknown as StyleGuide;
  const colorGuide = guide?.colorSections || [];
  const typographyGuide = guide?.typographySections || [];
  const existingMoodBoardImages = await MoodBoardImagesQuery(projectId);
  const guideImages = existingMoodBoardImages.images
    ._valueJSON as unknown as MoodBoardImage[];

  return (
    <StyleGuideTabs
      colorGuide={colorGuide}
      typographyGuide={typographyGuide.length ? typographyGuide : mockStyleGuide?.typographySections}
      guideImages={guideImages}
    />
  );
};

export default Page;
