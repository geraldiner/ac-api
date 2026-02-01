'use client';

import { ResourceType } from '../../../types/upload';
import RegisterSongForm from '@components/admin/RegisterSongForm';
import clsx from 'clsx';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';

const RESOURCE_TYPES_TABS = [
  { label: 'Art', value: 'art' },
  { label: 'Bug', value: 'bug' },
  { label: 'Fish', value: 'fish' },
  { label: 'Fossil', value: 'fossil' },
  { label: 'Hourly BGM', value: 'hourly_bgm' },
  { label: 'Sea Creature', value: 'sea_creature' },
  { label: 'Song', value: 'song' },
  { label: 'Villager', value: 'villager' },
];

const ResourcesTabMenu = ({
  selectedTab,
  onClick,
}: {
  selectedTab: ResourceType | null;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-body border-b border-default">
      {RESOURCE_TYPES_TABS.map((tab) => {
        return (
          <li key={tab.value}>
            <button
              data-value={tab.value}
              type="button"
              className={clsx(
                'inline-block p-4 border border-b-0 rounded-t-md cursor-pointer hover:bg-green-400',
                selectedTab === tab.value && 'bg-green-300',
              )}
              onClick={(e) => onClick(e)}
            >
              {tab.label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

interface FormProps {
  assetKey: string;
  blobUriPath: string;
  resourceType: ResourceType;
}

const RESOURCE_TYPE_TO_FORM: { [key in ResourceType]: React.FC<FormProps> } = {
  art: ({ assetKey, blobUriPath }) => <div>Art Metadata Form</div>,
  bug: ({ blobUriPath }) => <div>Bug Metadata Form</div>,
  fish: ({ blobUriPath }) => <div>Fish Metadata Form</div>,
  fossil: ({ blobUriPath }) => <div>Fossil Metadata Form</div>,
  hourly_bgm: ({ blobUriPath }) => <div>Hourly BGM Metadata Form</div>,
  sea_creature: ({ blobUriPath }) => <div>Sea Creature Metadata Form</div>,
  song: RegisterSongForm,
  villager: ({ blobUriPath }) => <div>Villager Metadata Form</div>,
};

export default function AdminRegisterMetadataPage() {
  const searchParams = useSearchParams();
  const keySearchParam = searchParams.get('key');
  const blobUriPathSearchParam = searchParams.get('blobUriPath');
  const resourceTypeSearchParam = searchParams.get('resourceType');
  const [resourceType, setResourceType] = useState<ResourceType>(
    (resourceTypeSearchParam as ResourceType) || 'art',
  );
  const FormComponent = RESOURCE_TYPE_TO_FORM[resourceType];

  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <h1>Register Metadata in MongoDB Form</h1>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <div className="hidden lg:block">
            <ResourcesTabMenu
              selectedTab={resourceType}
              onClick={(e) =>
                setResourceType(e.currentTarget.dataset.value as ResourceType)
              }
            />
          </div>
          <FormComponent
            assetKey={keySearchParam || ''}
            blobUriPath={blobUriPathSearchParam || ''}
            resourceType={resourceType}
          />
        </div>
      </section>
    </main>
  );
}
