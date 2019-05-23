import { ExtensionCodecType } from "./ExtensionCodec";
import { Encoder } from "./Encoder";

export type EncodeOptions = Partial<
  Readonly<{
    extensionCodec: ExtensionCodecType;
    maxDepth: number;
    initialBufferSize: number;
  }>
>;

const defaultEncodeOptions = {};

export function encode(value: unknown, options: EncodeOptions = defaultEncodeOptions): Uint8Array {
  const encoder = new Encoder(options.extensionCodec, options.maxDepth, options.initialBufferSize);
  encoder.encode(value, 1);
  return encoder.getUint8Array();
}
