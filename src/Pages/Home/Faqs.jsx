import { Cursor, useTypewriter } from "react-simple-typewriter";
import faqPic from "../../assets/images/FAQ4.jpg";

const Faqs = () => {
    const [text] = useTypewriter({
        words: ["FAQ'S"],
        loop: 0
    });

    return (
        <div className="text-[#1A2634] mb-12">
            <h2 className="text-[#1A2634] text-3xl font-bold mb-6"> {text} <Cursor></Cursor> </h2>

            <div className="flex gap-x-4 justify-between items-center">

                <div className="w-2/5">
                    <img src={faqPic} className="w-full" alt="" />
                </div>

                <div className="w-3/5">
                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-3xl font-bold"> 1. What is Tech Horizon?</div>
                        <div className="collapse-content">
                            <p>Tech Horizon is a platform where users can discover, share, and review tech products such as web apps, AI tools, software, games, and mobile apps. It allows users to upvote/downvote products, submit new ones, and engage with a tech-focused community.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">2. How do I submit a product on Tech Horizon? </div>
                        <div className="collapse-content">
                            <p>To submit a product, create an account, navigate to the "Submit Product" page, and provide details such as the name, description, category, and a valid link. Your submission will go through a moderation process before being published.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">3. How can I report a product or review?
                        </div>
                        <div className="collapse-content">
                            <p>If you find a product or review that violates our guidelines, you can report it using the "Report" button. Our moderation team will review the issue and take necessary action.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold"> 4. How does the product moderation process work?
                        </div>
                        <div className="collapse-content">
                            <p>All submitted products go through a review process by our moderation team. We ensure that each product meets our quality and authenticity standards before being published. If a submission is rejected, users will receive feedback on necessary changes.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold">  5. How does the upvote system work?
                        </div>
                        <div className="collapse-content">
                            <p>Users can upvote products they find useful or innovative. The more upvotes a product receives, the higher its visibility on the platform, helping the best tech products gain traction.</p>
                        </div>
                    </div>

                    <div className="collapse collapse-arrow bg-[#87CEEB] mb-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-3xl font-bold"> 6. Is Tech Horizon free to use?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, Tech Horizon is free to use for discovering and reviewing products. However, certain premium features, such as product promotions and advanced insights, require a subscription.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faqs;