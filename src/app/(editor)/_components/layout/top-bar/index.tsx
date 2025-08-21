"use client";

import LoadColorsButton from "./_components/load-colors-button";
import { ExportDialog } from "./_components/export-dialog";
import { ImageDown, Images } from "lucide-react";
import { ImageUploaderButton } from "./_components/image-uploader-button";
import { useAssetStore } from "@/hooks/stores/use-asset-store";
import { ResetButton } from "./_components/reset-button";
import { HistoryControls } from "../../history-controls";

export default function TopOptions() {
  const setBackgroundUrl = useAssetStore((state) => state.setBackgroundUrl);
  const setHighwayUrl = useAssetStore((state) => state.setHighwayUrl);

  return (
    <div className="flex flex-row-reverse justify-between">
      <div className="flex flex-row-reverse gap-2">
        <ImageUploaderButton
          variant="ghost"
          size="sm"
          onImageUpload={setBackgroundUrl}
        >
          <Images className="mr-2 h-4 w-4" /> Background
        </ImageUploaderButton>
        <div className="border-s" />
        <ImageUploaderButton
          variant="ghost"
          size="sm"
          onImageUpload={setHighwayUrl}
        >
          <ImageDown className="mr-2 h-4 w-4" /> Highway
        </ImageUploaderButton>
        <div className="border-s" />
      </div>
      <div className="flex gap-2">
        <ResetButton />
        <div className="border-s" />
        <LoadColorsButton />
        <div className="border-s" />
        <ExportDialog />
        <div className="border-s" />
        <HistoryControls />
        <div className="border-s" />
      </div>
    </div>
  );
}
