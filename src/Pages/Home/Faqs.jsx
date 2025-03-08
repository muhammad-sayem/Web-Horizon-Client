import { Cursor, useTypewriter } from "react-simple-typewriter";
import faqPic from "../../assets/images/FAQ4.jpg";

const Faqs = () => {
    const [text] = useTypewriter({
        words: ["FAQ'S"],
        loop: 0
    });

    return (
        <div className="text-[#87CEEB]">
            <h2 className="text-[#1A2634] text-3xl font-bold mb-6"> {text} <Cursor></Cursor> </h2>

            <div className="flex gap-x-4 justify-between items-center">

                <div className="w-2/5">
                    <img src={faqPic} className="w-full" alt="" />
                </div>

                <div className="w-3/5">
                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-3xl font-bold"> What is the purpose of this website?</div>
                        <div className="collapse-content">
                            <p>This website is dedicated to showcasing historical artifacts from various cultures and time periods. Our goal is to educate visitors about the significance of these artifacts, their origins, and the stories they tell about human history.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">Can I contribute information or artifacts to the collection?</div>
                        <div className="collapse-content">
                            <p>Yes, we welcome contributions! If you have historical artifacts or detailed information to share, please contact us. Our team will review your submission to ensure its authenticity and relevance to the collection.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">Are the artifacts on display authentic?
                        </div>
                        <div className="collapse-content">
                            <p>We prioritize authenticity and collaborate with historians, archaeologists, and experts to verify the origin and authenticity of the artifacts in our collection. For items on loan, we ensure proper documentation and provenance.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold"> How can I visit the physical location of these artifacts
                        </div>
                        <div className="collapse-content">
                            <p>If the artifacts are part of a physical museum or exhibition, details about visiting hours, location, and ticketing can be found on our "Visit Us" page. Some items may also be part of traveling exhibitions, and updates are regularly posted.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">  Are there educational resources available for students or researchers?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, we provide detailed articles, videos, and downloadable resources tailored for students, researchers, and educators. Visit the "Education" section to explore study guides, research papers, and lesson plans.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#1A2634] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold"> How do I know if an artifact has been ethically sourced?
                        </div>
                        <div className="collapse-content">
                            <p>We adhere to strict ethical guidelines for sourcing artifacts. Each item in our collection is thoroughly vetted to ensure it was acquired legally and ethically, with respect to cultural heritage and international laws.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;