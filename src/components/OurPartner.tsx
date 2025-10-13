import Image from "next/image";

const OurPartner = () => {
  return (
    <section className="w-full py-14 px-6">
      {/* Title */}
      <h2 className="text-center text-lg md:text-xl font-semibold mb-10 uppercase">
        Our Partners
      </h2>

      {/* Desktop grid */}
      <div className="hidden md:grid max-w-6xl mx-auto grid-cols-6 gap-8 items-center justify-center">
        <Image src="/partners/mastercard.svg" alt="Mastercard" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/fidelity.svg" alt="Fidelity" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/nbte.svg" alt="NBTE" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/lagos.svg" alt="Lagos State" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/fcmb.svg" alt="FCMB" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/udo.svg" alt="Udo Udoma" width={150} height={80} className="mx-auto object-contain" />

        <Image src="/partners/sterling.svg" alt="Sterling" width={200} height={100} className="col-span-2 mx-auto object-contain" />
        <Image src="/partners/nabte.svg" alt="NABTE" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/nepc.svg" alt="NEPC" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/ghana.svg" alt="Ghana" width={150} height={80} className="mx-auto object-contain" />
        <Image src="/partners/octoville.svg" alt="Octoville" width={150} height={80} className="mx-auto object-contain" />
      </div>

      
      {/* Mobile grid */}
<div className="md:hidden max-w-xs mx-auto flex flex-col items-center space-y-8">
  {/* Row 1 (2 logos) */}
  <div className="flex justify-center gap-8">
    <Image src="/partners/mastercard.svg" alt="Mastercard" width={80} height={60} className="object-contain" />
    <Image src="/partners/fidelity.svg" alt="Fidelity" width={110} height={85} className="object-contain" />
  </div>

  {/* Row 2 (3 logos) */}
  <div className="flex justify-center gap-3">
    <Image src="/partners/nbte.svg" alt="NBTE" width={110} height={80} className="object-contain" />
    <Image src="/partners/fcmb.svg" alt="FCMB" width={120} height={90} className="object-contain" />
    <Image src="/partners/lagos.svg" alt="Lagos" width={110} height={80} className="object-contain" />
  </div>

  {/* Row 3 (3 logos) */}
  <div className="flex justify-center gap-6">
    <Image src="/partners/udo.svg" alt="Udo Udoma" width={110} height={80} className="object-contain" />
    <Image src="/partners/sterling.svg" alt="Sterling" width={100} height={60} className="object-contain" />
    <Image src="/partners/nabte.svg" alt="NABTE" width={100} height={80} className="object-contain" />
  </div>

  {/* Row 4 (3 logos) */}
  <div className="flex justify-center gap-6">
    <Image src="/partners/nepc.svg" alt="NEPC" width={80} height={50} className="object-contain" />
    <Image src="/partners/ghana.svg" alt="Ghana" width={80} height={50} className="object-contain" />
    <Image src="/partners/octoville.svg" alt="Octoville" width={80} height={50} className="object-contain" />
  </div>
</div>

    </section>
  );
};

export default OurPartner;