import { Cursor, useTypewriter } from "react-simple-typewriter";
import faqPic from "../../assets/images/faq.png";

const Faqs = () => {
    const [text] = useTypewriter({
        words: ["FAQ'S"],
        loop: 0
    });

    return (
        <div className="text-[#1A2634] mb-12">

            <div className="gap-x-4 justify-between items-center">

                <div className="w-1/6 mx-auto" data-aos="fade-down" data-aos-duration="2000">
                    <img src={faqPic} className="w-full" alt="" />
                </div>

                <div className="w-full" data-aos="fade-up" data-aos-duration="2000">
                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-bold"> 1. What is Web Horizon?</div>
                        <div className="collapse-content">
                            <p>Tech Horizon is a platform where users can discover, share, and review websites. It allows users to like products, submit new ones, and engage with a tech-focused community.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold">2. How do I submit a product on Web Horizon? </div>
                        <div className="collapse-content">
                            <p>To submit a product, create an account, navigate to the "Add Product" page, and provide details such as the name, description, category, and a valid link. Your submission will go through a moderation process before being published.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold">3. How can I report a product or review?
                        </div>
                        <div className="collapse-content">
                            <p>If you find a product or review that violates our guidelines, you can report it using the "Report" button. Our moderation team will review the issue and take necessary action.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold"> 4. How does the product moderation process work?
                        </div>
                        <div className="collapse-content">
                            <p>All submitted products go through a review process by our moderation team. We ensure that each product meets our quality and authenticity standards before being published. If a submission is rejected, users will receive feedback on necessary changes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold">  5. How does the like system work?
                        </div>
                        <div className="collapse-content">
                            <p>Users can like products they find useful or innovative. The more likes a product receives, the higher its visibility on the platform, helping the best tech products gain traction.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#5a45ce] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-bold"> 6. Is Web Horizon free to use?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, Web Horizon is free to use for discovering and reviewing websites. However, certain premium features, such as product promotions and advanced insights, require a subscription.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;