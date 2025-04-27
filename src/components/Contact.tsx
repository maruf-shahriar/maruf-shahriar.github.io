import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import Swal from 'sweetalert2';


const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "733bbf47-8898-4e79-868b-1dd7d6c58fae");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
        theme: "dark",
      });
    }
    };

    return (
        <section className="py-20 " id="contact">
            <div className="container px-4">
                <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
                    Get in Touch
                </h2>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                placeholder="Name"
                                type="text"
                                name="name"
                                className="bg-white/5 border-white/10"
                                required
                            />
                            <Input
                                placeholder="Email"
                                type="email"
                                name="email"
                                className="bg-white/5 border-white/10"
                                required
                            />
                        </div>
                        {/* <Input
                            placeholder="Subject"
                            type="text"
                            name="subject"
                            className="bg-white/5 border-white/10"
                            required
                        /> */}
                        <Textarea
                            placeholder="Message"
                            name="message"
                            className="bg-white/5 border-white/10"
                            rows={6}
                            required
                        />
                        <Button
                            type="submit"
                            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600"
                        >
                          Send Message
                        </Button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
