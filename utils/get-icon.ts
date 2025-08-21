import {IconBrandGithub, IconBrandLinkedin, IconMail, IconPhone} from "@tabler/icons-react";

export function getIcon(label: string) {
    switch (label.toLowerCase()) {
        case "github":
            return IconBrandGithub;
        case "linkedin":
            return IconBrandLinkedin;
        case "gmail":
        case "email":
            return IconMail;
        case "phone":
            return IconPhone;
        default:
            return null;
    }
}