type FileType = 'audio' | 'icons' | 'images';
type ResourceType =
  | 'art'
  | 'bug'
  | 'fish'
  | 'fossil'
  | 'hourly_bgm'
  | 'sea_creature'
  | 'song'
  | 'villager';
type GameInstallment = 'acnh' | 'acnl' | 'accf' | 'acww' | 'acgc';

interface UploadFormData {
  file: File;
  fileType: FileType;
  game?: string;
  resourceType: ResourceType;
}

export type { FileType, GameInstallment, ResourceType, UploadFormData };
