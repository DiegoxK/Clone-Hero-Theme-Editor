"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";

type ButtonProps = React.ComponentProps<typeof Button>;

interface ImageUploaderButtonProps extends ButtonProps {
  onImageUpload: (url: string) => void;
}

export const ImageUploaderButton = ({
  onImageUpload,
  children,
  ...props
}: ImageUploaderButtonProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const objectUrl = URL.createObjectURL(file);

    onImageUpload(objectUrl);
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  return (
    <>
      <Button onClick={handleClick} {...props}>
        {children}
      </Button>
      <input
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
        accept="image/png, image/jpeg, image/jpg"
        className="hidden"
      />
    </>
  );
};
