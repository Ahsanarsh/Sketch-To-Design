"use client";

import { ThemeContent } from "@/components/style/theme";
import StyleGuideTypography from "@/components/style/typography";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoodBoardImage } from "@/redux/api/style-guide";
import { Hash, LayoutIcon, Palette, Type } from "lucide-react";
import React from "react";

const tabs = [
  {
    value: "colours",
    label: "Colours",
    icon: Hash,
  },
  {
    value: "typography",
    label: "Typography",
    icon: Type,
  },
  {
    value: "moodboard",
    label: "Moodboard",
    icon: LayoutIcon,
  },
] as const;

type Props = {
  colorGuide: any[];
  typographyGuide: any[];
  guideImages: MoodBoardImage[];
};

const StyleGuideTabs = ({ colorGuide, typographyGuide, guideImages }: Props) => {
  return (
    <Tabs defaultValue="colours" className="w-full">
      <div className="flex justify-center lg:justify-end mb-6">
        <TabsList className="grid w-full sm:w-fit h-auto grid-cols-3 rounded-full backdrop-blur-xl bg-white/8 border border-white/12 saturate-150 p-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex items-center gap-2 rounded-xl data-[state=active]:bg-white/15 data-active:bg-white/15 dark:data-active:bg-white/15 data-[state=active]:backdrop-blur-xl  data-[state=active]:border data-[state=active]:border-white/20 transition-all duration-200 text-xs sm:text-sm"
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{tab.label}</span>
                <span className="sm:hidden">{tab.value}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>
      </div>

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
        )}
      </TabsContent>

      <TabsContent value="typography">
        <StyleGuideTypography typographyGuide={typographyGuide} />
      </TabsContent>
    </Tabs>
  );
};

export default StyleGuideTabs;
