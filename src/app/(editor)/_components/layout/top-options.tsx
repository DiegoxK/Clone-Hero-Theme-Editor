import LoadColorsButton from "../load-colors-button";
import { ExportDialog } from "../export-dialog";

export default function TopOptions() {
  return (
    <div className="flex justify-end gap-2">
      <ExportDialog />
      <div className="border-s" />
      <LoadColorsButton />
    </div>
  );
}
