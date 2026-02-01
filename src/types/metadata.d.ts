import type { GameInstallment } from './upload';

interface Audio {
  key: string;
  title: string;
  audioBlobUriPath: string;
  coverImageBlobUriPath: string;
  tags?: string[];
  mood?: string[];
}

interface Song extends Audio {
  artist: string;
  buyPrice: number;
  sellPrice: number;
  isOrderable: boolean;
}

interface HourlyBGM extends Audio {
  gameInstallment: GameInstallment;
  hour: number;
  weather: 'rainy' | 'snowy' | 'sunny';
}

export type { Audio, HourlyBGM, Song };
