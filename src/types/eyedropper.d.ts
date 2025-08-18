interface EyeDropperResult {
  sRGBHex: string;
}

interface EyeDropperOpenOptions {
  signal?: AbortSignal;
}

declare class EyeDropper {
  constructor();
  open(options?: EyeDropperOpenOptions): Promise<EyeDropperResult>;
}

interface Window {
  EyeDropper?: typeof EyeDropper;
}
