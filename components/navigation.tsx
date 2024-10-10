import Image from "next/image";

export default function Navigation() {
  return (
    <div>
      <Image
        src="/logo500.png"
        width={35}
        height={35}
        alt="Logo"
        className="mx-auto"
      />
    </div>
  );
}
