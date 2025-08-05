import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function BgImage() {
  return (
    <AspectRatio ratio={16 / 9}>
      <img
        src="/defaults/background.jpg"
        alt="background"
        className="w-full object-fill"
      />
    </AspectRatio>
  );
}
