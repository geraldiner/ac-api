interface Audio {
  key: string;
  title: string;
  audioBlobUriPath: string;
  coverImageBlobUriPath: string;
  tags?: string[];
  mood?: string[];
}

interface KKSliderSong extends Audio {
  buyPrice: number;
  sellPrice: number;
  isOrderable: boolean;
}

interface HourlyBGM extends Audio {
  hour: number;
  weather: 'rainy' | 'snowy' | 'sunny';
}

export type { Audio, HourlyBGM, KKSliderSong };
