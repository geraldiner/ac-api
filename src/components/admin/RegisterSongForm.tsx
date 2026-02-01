import { getCoverImageUriFromAudioUri } from '../../lib/utils';
import { ResourceType } from '../../types/upload';
import NumberInput from '@components/form/NumberInput';
import TextInput from '@components/form/TextInput';
import { useState } from 'react';

export default function RegisterSongForm({
  assetKey,
  blobUriPath,
  resourceType,
}: {
  assetKey: string;
  blobUriPath: string;
  resourceType: ResourceType;
}) {
  const [key, setKey] = useState<string>(assetKey);
  const [songTitle, setSongTitle] = useState<string>('');
  const [audioBlobUri, setAudioBlobUri] = useState<string>(blobUriPath);
  const [coverImageBlobUri, setCoverImageBlobUri] = useState<string>(
    getCoverImageUriFromAudioUri(blobUriPath, resourceType) || '',
  );
  const [tags, setTags] = useState<Array<string>>([]);
  const [mood, setMood] = useState<Array<string>>([]);
  const [buyPrice, setBuyPrice] = useState<number>(0);
  const [sellPrice, setSellPrice] = useState<number>(0);
  const [isOrderable, setIsOrderable] = useState<boolean>(false);

  return (
    <form className="w-full">
      <div className="w-full mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
        {/* Key */}
        <TextInput
          disabled={true}
          id="key"
          label="Key"
          placeholder="eg. aloha_kk"
          value={key}
          onChange={(e) => setKey(e.target.value)}
        />

        {/* Title */}
        <TextInput
          id="title"
          label="Song Title"
          placeholder="eg. Aloha K.K."
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />

        {/* Blob URI Path */}
        <TextInput
          disabled={true}
          id="audioBlobUri"
          label="Audio Blob URI Path"
          value={audioBlobUri}
          onChange={(e) => setAudioBlobUri(e.target.value)}
        />

        {/* Cover Image Blob URI Path */}
        <TextInput
          disabled={true}
          id="coverImageBlobUri"
          label="CoverImage Blob URI Path"
          value={coverImageBlobUri}
          onChange={(e) => setCoverImageBlobUri(e.target.value)}
        />

        {/* Tags */}
        <TextInput
          id="tags"
          label="Song Tags (comma separated)"
          placeholder="eg. pop"
          value={tags.join(', ')}
          onChange={(e) =>
            setTags(e.target.value.split(',').map((tag) => tag.trim()))
          }
        />

        {/* Mood */}
        <TextInput
          id="Mood"
          label="Song Mood (comma separated)"
          placeholder="eg. uplifting"
          value={mood.join(', ')}
          onChange={(e) =>
            setMood(e.target.value.split(',').map((mood) => mood.trim()))
          }
        />

        {/* Buy Price */}
        <NumberInput
          id="buyPrice"
          label="Buy Price"
          placeholder="eg. 3200"
          value={buyPrice.toString()}
          onChange={(e) => setBuyPrice(parseInt(e.target.value, 10))}
        />

        {/* Sell Price */}
        <NumberInput
          id="sellPrice"
          label="Sell Price"
          placeholder="eg. 800"
          value={sellPrice.toString()}
          onChange={(e) => setSellPrice(parseInt(e.target.value, 10))}
        />
      </div>
    </form>
  );
}
