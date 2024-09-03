import { create } from 'zustand'

type ImageData = {
  imageData: null | string;
  setImageData: (data: string) => void
}

export const useImageData = create<ImageData>((set) => ({
  imageData: null,
  setImageData: (data: string | null) => set({ imageData: data }),
}));

type HashDataURL = {
  hashDataURL: null | string;
  setHashDataURL: (data: string) => void
}

export const useHashDataURL = create<HashDataURL>((set) => ({
  hashDataURL: null,
  setHashDataURL: (data: string | null) => set({ hashDataURL: data }),
}));

type ThumbhashString = {
  hashString: null | string;
  setHashString: (data: string) => void
}

export const useThumbhashString = create<ThumbhashString>((set) => ({
  hashString: null,
  setHashString: (data: string | null) => set({ hashString: data }),
}));

type ImageSize = {
  size: { w: number; h: number };
  setSize: (data: { w: number; h: number }) => void
}

export const useOriginalImageSize = create<ImageSize>((set) => ({
  size: { w: 0, h: 0, },
  setSize: (data: { w: number; h: number }) => set({ size: { w: data.w, h: data.h } })
}));

export const useHashURLImageSize = create<ImageSize>((set) => ({
  size: { w: 0, h: 0, },
  setSize: (data: { w: number; h: number }) => set({ size: { w: data.w, h: data.h } })
}));

type DataHashUrlSize = {
  size: number;
  setSize: (data: number) => void;
}

export const useDataHashUrlSize = create<DataHashUrlSize>((set) => ({
  size: 0,
  setSize: (data: number) => set({ size: data })
}))

type MaximumGeneratedPixelLength = {
  length: number;
  setLength: (data: number) => void;
}

export const useMaximumGeneratedPixelLength = create<MaximumGeneratedPixelLength>((set) => ({
  length: 16,
  setLength: (data: number) => set({ length: data })
}))