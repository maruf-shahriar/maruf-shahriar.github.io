
const Research = () => {
  return (
    <section className="py-20" id="research">
      <div className="container px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Research
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Text Summarization and Neural Machine Translation</h3>
            {/* <p className="text-gray-400 mb-4">Journal/Conference Name • Year</p> */}
            <p className="text-gray-300 mb-4">
            Deep Learning-Based Bilingual Text Summarization and Neural Machine Translation for Finance and Economics News.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              Read Publication
            </a>
          </div>
          <div className="p-6 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold mb-2">Deep Learning-based Classification of Liver Cells</h3>
            {/* <p className="text-gray-400 mb-4">Journal/Conference Name • Year</p> */}
            <p className="text-gray-300 mb-4">
            Deep Learning-based Classification of Liver Cells using Mask R-CNN on Whole Slide Images.
            </p>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              Read Publication
            </a>
          </div>
          {/* Add more research items as needed */}
        </div>
      </div>
    </section>
  );
};

export default Research;
