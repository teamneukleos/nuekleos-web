const UnitedAction = () => {
  return (
    <article className="w-full bg-white">
      {/* Content Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        {/* Image with rounded corners - responsive */}
        <div className="w-full mb-8 mt-12 overflow-hidden rounded-lg">
          <img
            src="/stories/reflect-realign.png"
            alt="Runway Showcase"
            className="w-full h-auto rounded-lg object-cover aspect-[16/7]"
          />
        </div>

        {/* Title */}
        <h1 className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
          Reflect. Realign. Reimagine:
        </h1>

        <p className="text-xl md:text-2xl text-orange-600 mb-6">
          Co-Creating the Future of Work and Enterprise in Africa
        </p>

        {/* Story Content */}
        <div className="max-w-none">
          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            This week, we convened a reflective and forward-looking Learning Forum with our partners, 
            the Mastercard Foundation and key stakeholders such as our Implementation and Coordination Entity (ICE) 
            and Program Management Office (PMO), Octoville Development Company, as well as our MERL partner, 
            Sane Konsult — to collectively review Year One of the Fashion Future Program.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            The session provided a critical space for evidence-based reflection, open dialogue, and collaboration — 
            grounded in the shared ambition of driving inclusive and sustainable development through skills, enterprise, 
            and opportunity for African youth and MSMEs.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            We assessed what worked, where the gaps remain, and how we can build stronger systems and partnerships to 
            deepen impact in Year Two and beyond. From youth development and entrepreneurial support to local economic 
            empowerment, the conversations were driven by data, stories from the field, and a common desire to enable 
            African talent to thrive, lead, and shape the future of the continent.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            This journey is not just about individual growth. It is about building ecosystems that work for everyone — 
            especially young Africans, women, persons with disabilities (PWDs), and micro and small-scale enterprises 
            (MSMEs) that hold untapped potential to transform local economies.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed mb-6">
            As we continue with the next phase of the program, our commitment is clear: to continue co-creating solutions 
            that are community-informed, youth-led, and market-relevant.
          </p>

          <p className="text-sm md:text-sm text-gray-800 leading-relaxed">
            We are grateful to all our partners for joining us in this vital work. Together, we are not just implementing 
            a program but building the future of work and enterprise in Africa.
          </p>
        </div>
      </div>
    </article>
  );
};

export default UnitedAction;