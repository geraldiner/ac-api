export async function POST(request: Request) {
  const formData = await request.formData();
  return Response.json({ message: 'Metadata registered' }, { status: 200 });
}
