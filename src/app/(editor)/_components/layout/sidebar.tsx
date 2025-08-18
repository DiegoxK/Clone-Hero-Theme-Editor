"use client";

import { Brush, ChevronDown, CircleQuestionMark, Pipette } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { HexColorInput } from "@/components/ui/hex-color-input";
import { ColorPickerPopover } from "@/components/ui/color-picker-popover";
import { EyeDropperButton } from "@/components/ui/eye-dropper-button";

export default function Sidebar() {
  const guitarColors = useThemeStore((state) => state.theme.guitar);
  const updateColor = useThemeStore((state) => state.updateColor);

  return (
    <aside className="flex w-94 flex-col border-r">
      <div className="border-b p-4">
        <div className="flex gap-4">
          <h2>
            Default theme <ChevronDown size={16} className="inline" />
          </h2>
        </div>
      </div>

      <Tabs defaultValue="guitar" className="overflow-hidden p-3">
        <TabsList className="w-full">
          <TabsTrigger value="guitar">Guitar</TabsTrigger>
          <TabsTrigger value="drums">Drums</TabsTrigger>
          <TabsTrigger value="others">Others</TabsTrigger>
        </TabsList>

        <Separator className="bg-border my-1" />

        <TabsContent
          value="guitar"
          className="overflow-x-hidden overflow-y-scroll pr-2"
        >
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>Note Gems</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-1 text-sm">
                  <span> Green Note</span>
                  <Popover>
                    <PopoverTrigger>
                      <CircleQuestionMark className="size-4 cursor-pointer opacity-50" />
                    </PopoverTrigger>
                    <PopoverContent
                      className="bg-popover/50 flex w-auto flex-col gap-4 rounded-lg backdrop-blur-sm"
                      side="right"
                      align="start"
                    >
                      Main color of the green gem.
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex items-center gap-2">
                  <ColorPickerPopover section="guitar" colorKey="note_green" />
                  <HexColorInput
                    className="h-8.5 rounded-lg"
                    value={guitarColors.note_green}
                    onChange={(newColor) => {
                      updateColor("guitar", "note_green", newColor);
                    }}
                  />
                  <EyeDropperButton section="guitar" colorKey="note_green" />
                </div>
                <div className="flex items-center gap-1 text-sm">
                  <span> Red Note</span>
                  <Popover>
                    <PopoverTrigger>
                      <CircleQuestionMark className="size-4 cursor-pointer opacity-50" />
                    </PopoverTrigger>
                    <PopoverContent
                      className="bg-popover/10 flex w-auto flex-col gap-4 rounded-lg backdrop-blur-sm"
                      side="right"
                      align="start"
                    >
                      Main color of the red gem.
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="flex items-center gap-2">
                  <div className="size-8 flex-shrink-0 rounded-lg bg-red-200" />
                  <Input className="h-8" />
                  <Button className="size-8 rounded-lg" size="icon">
                    <Brush />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Notes</AccordionTrigger>
              <AccordionContent>
                <div className="flex items-center gap-3">
                  <div className="size-9 flex-shrink-0 rounded-md bg-green-200" />
                  <Input />
                  <Button size="icon">
                    <ChevronDown />
                  </Button>
                </div>
                <div className="flex items-center gap-3">
                  <div className="size-9 flex-shrink-0 rounded-md bg-red-200" />
                  <Input />
                  <Button size="icon">
                    <ChevronDown />
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>

        <TabsContent value="drums" className="p-4">
          Change your password here.
        </TabsContent>
        <TabsContent value="others" className="p-4">
          Other settings go here.
        </TabsContent>
      </Tabs>
    </aside>
  );
}
