import UploadAssetForm from '@components/admin/UploadAssetForm';

export default function AdminHome() {
  return (
    <main>
      <section className="w-full bg-gray-100">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <h1>Asset Upload Form</h1>
        </div>
      </section>
      <section className="w-full">
        <div className="w-full md:max-w-4xl mx-auto p-5 md:py-10">
          <UploadAssetForm />
        </div>
      </section>
    </main>
  );
}
