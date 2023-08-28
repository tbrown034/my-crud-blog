// app/page.js or wherever your homepage component lives

export default function Home() {
  return (
    <div className="bg-[url('/Keyboard.jpg')] bg-cover bg-center h-screen relative">
      {/* Static Text */}
      <div className="absolute left-[30%] top-[30%] text-sm ">
        <p>Click the Keys</p>
        <p></p>
      </div>
    </div>
  );
}
