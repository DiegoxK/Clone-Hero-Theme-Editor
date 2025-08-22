"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { GUITAR_LAYOUT, OTHER_LAYOUT } from "./sidebar-layout";
import { ColorRow } from "./_components/color-row";
import { ThemeSelector } from "./_components/theme-selector";

export default function Sidebar() {
  return (
    <aside className="flex w-94 shrink-0 flex-col border-r">
      <div className="border-b p-3">
        <ThemeSelector />
      </div>

      <Tabs defaultValue="guitar" className="overflow-hidden p-3">
        <TabsList className="w-full">
          <TabsTrigger value="guitar">Guitar</TabsTrigger>
          <TabsTrigger value="drums">Drums</TabsTrigger>
          <TabsTrigger value="others">Effects</TabsTrigger>
        </TabsList>
        <Separator className="bg-border my-1" />
        <TabsContent
          value="guitar"
          className="overflow-x-hidden overflow-y-scroll pr-2"
        >
          <Accordion type="multiple">
            {GUITAR_LAYOUT.map((group) => (
              <AccordionItem key={group.groupName} value={group.groupName}>
                <AccordionTrigger>{group.groupName}</AccordionTrigger>
                <AccordionContent>
                  {group.colors.map((color) => (
                    <ColorRow
                      key={color.key}
                      section="guitar"
                      colorKey={color.key}
                      label={color.label}
                      description={color.description}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>

        <TabsContent value="drums" className="p-4">
          Coming soon...
        </TabsContent>
        <TabsContent
          value="others"
          className="overflow-x-hidden overflow-y-scroll pr-2"
        >
          <Accordion type="multiple">
            {OTHER_LAYOUT.map((group) => (
              <AccordionItem key={group.groupName} value={group.groupName}>
                <AccordionTrigger>{group.groupName}</AccordionTrigger>
                <AccordionContent>
                  {group.colors.map((color) => (
                    <ColorRow
                      key={color.key}
                      section="other"
                      colorKey={color.key}
                      label={color.label}
                      description={color.description}
                    />
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </TabsContent>
      </Tabs>
    </aside>
  );
}
