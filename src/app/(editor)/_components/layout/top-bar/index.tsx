import LoadColorsButton from "./_components/load-colors-button";
import { ExportDialog } from "./_components/export-dialog";
import { Button } from "@/components/ui/button";
import { ImageDown, Images } from "lucide-react";

export default function TopOptions() {
  return (
    <div className="flex flex-row-reverse gap-2">
      <ExportDialog />
      <div className="border-s" />
      <LoadColorsButton />
      <div className="border-s" />
      <Button variant="ghost" size="sm">
        <ImageDown /> Highway
      </Button>
      <div className="border-s" />
      <Button variant="ghost" size="sm">
        <Images /> Background
      </Button>
      <div className="border-s" />
    </div>
  );
}
