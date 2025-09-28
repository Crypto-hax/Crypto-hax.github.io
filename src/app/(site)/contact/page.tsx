
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Crypgo",
  description: "Get in touch with our cryptocurrency experts",
};

const ContactPage = () => {
  return (
    <>
      <HeroSub title="Contact Us" />
      <section className="bg-white py-20 dark:bg-dark">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
                Get In Touch
              </h2>
              <p className="text-body-color dark:text-dark-6">
                Have questions about cryptocurrency or our services? We'd love to hear from you.
              </p>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-6 text-xl font-semibold text-dark dark:text-white">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="mr-3 text-primary">📧</span>
                    <span className="text-body-color dark:text-dark-6">contact@crypgo.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-primary">📱</span>
                    <span className="text-body-color dark:text-dark-6">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-3 text-primary">📍</span>
                    <span className="text-body-color dark:text-dark-6">
                      123 Crypto Street, Blockchain City, BC 12345
                    </span>
                  </div>
                </div>
              </div>
              
              <div>
                <form className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-md border border-stroke px-4 py-3 text-dark focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark dark:text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full rounded-md border border-stroke px-4 py-3 text-dark focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark dark:text-white"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-dark dark:text-white">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full rounded-md border border-stroke px-4 py-3 text-dark focus:border-primary focus:outline-none dark:border-dark-3 dark:bg-dark dark:text-white"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-md bg-primary px-6 py-3 text-white transition hover:bg-blue-700"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
