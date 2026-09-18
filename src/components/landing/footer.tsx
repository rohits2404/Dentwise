import Image from "next/image";

export function Footer() {
    return (
        <footer className="px-6 py-12 border-t bg-muted/30">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Image
                                src="/assets/logo.png"
                                alt="DentWise Logo"
                                width={32}
                                height={32}
                                className="w-8 h-8"
                            />
                            <span className="font-semibold text-lg">
                                DentWise
                            </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            AI-Powered Dental Assistance That Actually Helps.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">Product</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a
                                    href="#how-it-works"
                                    className="hover:text-foreground"
                                >
                                    How It Works
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#pricing"
                                    className="hover:text-foreground"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#about"
                                    className="hover:text-foreground"
                                >
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">Support</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Status
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-medium mb-3">Legal</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-foreground">
                                    Security
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
                    <p>
                        © 2024 DentWise. Built For Real People With Real Dental
                        Questions.
                    </p>
                </div>
            </div>
        </footer>
    );
}
