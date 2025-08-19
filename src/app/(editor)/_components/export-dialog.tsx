"use client";

import { useState, useMemo, useCallback } from "react";
import { useThemeStore } from "@/hooks/stores/use-theme-store";
import { writeINIString } from "@/lib/ini-utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle, Check, Copy, Download, FileUp } from "lucide-react";

export const ExportDialog = () => {
  const theme = useThemeStore((state) => state.theme);
  const [isCopied, setIsCopied] = useState(false);

  const themeIniString = useMemo(() => writeINIString(theme), [theme]);

  const handleDownload = useCallback(() => {
    const blob = new Blob([themeIniString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "colors.ini";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, [themeIniString]);

  const handleCopyToClipboard = useCallback(() => {
    void navigator.clipboard.writeText(themeIniString);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }, [themeIniString]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <FileUp className="mr-2 h-4 w-4" /> Copy / Download .ini data
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Export Theme Data</DialogTitle>
          <DialogDescription>
            Download your theme as a file or copy the raw text to your
            clipboard.
          </DialogDescription>
        </DialogHeader>
        <Textarea
          value={themeIniString}
          readOnly
          className="h-64 resize-none font-mono text-xs"
          aria-label="INI theme data"
        />
        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Browser Security Notice</AlertTitle>
          <AlertDescription>
            When downloading, your browser may show a security warning. This is
            a standard precaution. You can safely choose &quot;Keep&quot; to
            save your theme file.
          </AlertDescription>
        </Alert>
        <DialogFooter className="gap-2 sm:justify-start">
          <Button onClick={handleDownload}>
            <Download className="mr-2 h-4 w-4" />
            Download .ini file
          </Button>
          <Button onClick={handleCopyToClipboard} variant="secondary">
            {isCopied ? (
              <Check className="mr-2 h-4 w-4" />
            ) : (
              <Copy className="mr-2 h-4 w-4" />
            )}
            {isCopied ? "Copied!" : "Copy to Clipboard"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
