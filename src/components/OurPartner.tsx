import Image from "next/image";

const OurPartner = () => {
  return (
    <section className="w-full py-14 px-6">
      {/* Title */}
      <h2 className="text-center text-lg md:text-xl font-semibold mb-10 uppercase">
        Our Partners
      </h2>

      {/* Logos grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
        {/* Row 1 - 6 logos */}
        <Image
          src="/partners/mastercard.svg"
          alt="Mastercard"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/fidelity.svg"
          alt="Fidelity"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/nbte.svg"
          alt="NBTE"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/lagos.svg"
          alt="Lagos State"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/fcmb.svg"
          alt="FCMB"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/udo.svg"
          alt="Udo Udoma"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />

        {/* Row 2 - 5 */}
        <Image
          src="/partners/sterling.svg"
          alt="Sterling"
          width={200}
          height={100}
          className="col-span-2 mx-auto object-contain"
        />
        <Image
          src="/partners/nabte.svg"
          alt="Nigeria Export Promotion"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/nepc.svg"
          alt="Nigeria Export Promotion"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/ghana.svg"
          alt="Ghana High Commission"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
        <Image
          src="/partners/octoville.svg"
          alt="Octoville"
          width={150}
          height={80}
          className="mx-auto object-contain"
        />
      </div>
    </section>
  );
};

export default OurPartner;