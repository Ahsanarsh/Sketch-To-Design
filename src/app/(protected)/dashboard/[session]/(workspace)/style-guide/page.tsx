import {
  MoodBoardImagesQuery,
  StyleGuideQuery,
} from "@/app/convex/query.config";
import { ThemeContent } from "@/components/style/theme";
import { TabsContent } from "@/components/ui/tabs";
import { StyleGuide, MoodBoardImage } from "@/redux/api/style-guide";
import { Palette } from "lucide-react";
import React from "react";

type props = {
  searchParams: Promise<{ projectId: string }>;
};

const Page = async (props: props) => {
  const projectId = await (await props.searchParams).projectId;
  const existingStyleGuide = await StyleGuideQuery(projectId);

  const guide = existingStyleGuide.styleGuide
    ?._valueJSON as unknown as StyleGuide;
  const colorGuide = guide?.colorSections || [];
  const typographyGuide = guide?.typographySections || [];
  const existingMoodBoardImages = await MoodBoardImagesQuery(projectId);
  const guideImages = existingMoodBoardImages.images
    ._valueJSON as unknown as MoodBoardImage[];

  return (
    <div>
      <TabsContent value="colours" className="space-y-8">
        {!guideImages.length ? (
          <div className="space-y-8">
            <div className="text-center py-20">
              <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center">
                <Palette className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No colors generated yet
              </h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                Upload images to your mood board and generate an AI-powered
                style guide with colors and typography.
              </p>
            </div>
          </div>
        ) : (
          <ThemeContent colorGuide={colorGuide} />

          // <h1>theme content</h1>
        )}
      </TabsContent>
    </div>
  );
};

export default Page;
