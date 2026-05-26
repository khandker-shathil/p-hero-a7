export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-[#244D2F]">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-2">This page could not be found</p>

      <a href="/" className="mt-6 px-6 py-2 bg-[#244D2F] text-white rounded-lg">
        Go Home
      </a>
    </div>
  );
}