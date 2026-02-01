'use client';
import Button from '@components/Button';
import Select from '@components/form/SelectInput';
import TextInput from '@components/form/TextInput';
import type {
  FileType,
  GameInstallment,
  ResourceType,
} from '@customTypes/upload';
import { buildBlobUriPath } from '@lib/utils';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const FILE_TYPES_OPTIONS = [
  { label: 'Audio', value: 'audio' },
  { label: 'Icons', value: 'icons' },
  { label: 'Images', value: 'images' },
];

const RESOURCE_TYPES_OPTIONS = [
  { label: 'Art', value: 'art' },
  { label: 'Bug', value: 'bug' },
  { label: 'Fish', value: 'fish' },
  { label: 'Fossil', value: 'fossil' },
  { label: 'Hourly BGM', value: 'hourly_bgm' },
  { label: 'Sea Creature', value: 'sea_creature' },
  { label: 'Song', value: 'song' },
  { label: 'Villager', value: 'villager' },
];

const UploadAssetForm = () => {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [fileType, setFileType] = useState<FileType | null>(null);
  const [game, setGame] = useState<GameInstallment | null>(null);
  const [resourceType, setResourceType] = useState<ResourceType | null>(null);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    if (!e.target.checkValidity() || !file || !fileType || !resourceType) {
      alert('Please complete the form before submitting.');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('fileType', fileType);
      formData.append('game', game || '');
      formData.append('resourceType', resourceType);

      const response = await axios.post('/api/admin/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status === 200) {
        const blobUriPath = buildBlobUriPath(
          fileType,
          resourceType,
          file.name,
          game || undefined,
        );
        router.push(
          `/admin/register?key=${file.name.split('.')[0]}&resourceType=${resourceType}&blobUriPath=${blobUriPath}`,
        );
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="w-full mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
        {/* File input */}
        <div className="w-full">
          <label htmlFor="file">File</label>
          <input
            id="file"
            type="file"
            className={`
              text-sm rounded-sm w-full md:w-1/2 border border-green-500 p-2
              file:mr-5 file:px-2 file:py-1 file:text-sm file:rounded-full file:bg-green-300 
              hover:cursor-pointer hover:file:bg-green-500`}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setFile(e.target.files[0]);
              }
            }}
          />
        </div>

        {/* File role input */}
        <Select
          id="fileType"
          label="File Type"
          options={[
            { value: '', label: 'Select file type', disabled: true },
            ...FILE_TYPES_OPTIONS,
          ]}
          value={fileType || ''}
          onChange={(e) => setFileType(e.target.value as FileType)}
        />

        {/* Game name input */}
        <TextInput
          id="game"
          label="Game (optional)"
          placeholder="eg. acnh"
          required={false}
          value={game || ''}
          onChange={(e) => setGame(e.target.value as GameInstallment)}
        />

        {/* Resource type input */}
        <Select
          id="resourceType"
          label="Resource Type"
          options={[
            { label: 'Select resource type', value: '', disabled: true },
            ...RESOURCE_TYPES_OPTIONS,
          ]}
          value={resourceType || ''}
          onChange={(e) => setResourceType(e.target.value as ResourceType)}
        />
      </div>
      <Button label="Upload" type="submit" />
    </form>
  );
};

export default UploadAssetForm;
