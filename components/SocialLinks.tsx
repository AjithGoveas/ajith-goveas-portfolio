import {Github, Linkedin, Mail} from "lucide-react";

const SocialLinks: React.FC = () => {
    const socialLinks = [
        {icon: Github, href: 'https://github.com', label: 'GitHub'},
        {icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn'},
        {icon: Mail, href: 'mailto:contact@example.com', label: 'Email'},
    ];

    return (
        <div className="flex gap-4">
            {socialLinks.map(({icon: Icon, href, label}) => (
                <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                    <Icon className="w-5 h-5"/>
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;