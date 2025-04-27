import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
    return (
        <section
            className="min-h-screen flex items-center justify-center py-20"
            id="home"
        >
            <div className="container px-20 pt-16">
                <div className="flex flex-col lg:flex-row-reverse items-center gap-4">
                    {/* Profile Image */}
                    <div className="w-48 h-48 lg:w-72 lg:h-72 relative group">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 blur-xl opacity-30 group-hover:opacity-60 transition duration-500"></div>

                        {/* <div className="absolute inset-0 rounded-full border-4 border-purple-500/40 group-hover:border-purple-500 transition duration-500"></div> */}

                        <img
                            src="/img 400x400.png"
                            alt="Maruf Shahriar"
                            className="rounded-full w-full h-full object-cover relative z-10 shadow-2xl transform scale-90 "
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left flex-1 max-w-xl mx-auto  ">
                        <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text whitespace-nowrap overflow-hidden border-r-4 border-purple-400 animate-typing">
                            Hey, I'm Maruf
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-300 mb-4">
                            Software Developer
                        </p>

                        {/* New Description */}
                        <p className="text-gray-400 text-base lg:text-lg leading-relaxed mb-8">
                            I am a Computer Science graduate specializing in web
                            development, with a strong focus on React.js. I
                            build dynamic, user-friendly applications while
                            ensuring performance and responsiveness. As a
                            researcher and continuous learner, I explore
                            innovative solutions to complex problems, staying
                            updated with the latest technologies.
                        </p>

                        {/* Social Buttons */}
                        <div className="flex gap-4 justify-center lg:justify-start mb-8">
                            <a
                                href="https://github.com/maruf-shahriar"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition transform hover:scale-110 hover:-translate-y-1 duration-300"
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Github className="h-5 w-5" />
                                </Button>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/maruf-shahriar-0054101b2/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition transform hover:scale-110 hover:-translate-y-1 duration-300"
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </Button>
                            </a>
                            <a
                                href="mailto:mrfshahriar@gmail.com"
                                className="transition transform hover:scale-110 hover:-translate-y-1 duration-300"
                            >
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full"
                                >
                                    <Mail className="h-5 w-5" />
                                </Button>
                            </a>
                        </div>

                        {/* Download Resume Button */}
                        <a
                            href="https://drive.google.com/file/d/17hA9BXj_G7Aiu12T2kT6uzpzTCIqqJ0C/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600">
                                <Download className="mr-2 h-4 w-4" /> Download
                                Resume
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
