import type SkillIcon from "@/type/Skill";

interface SocialIcon extends SkillIcon {
  href: string;
}

export const SOCIALS: SocialIcon[] = [
  {
    id: "github",
    label: "GitHub",
    icon: "/svg/github-svgrepo-com.svg",
    href: "https://github.com/rathc",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: "/svg/linkedin-svgrepo-com.svg",
    href: "https://linkedin.com/in/rathc",
  },
  {
    id: "telegram",
    label: "Telegram",
    icon: "/svg/telegram-svgrepo-com.svg",
    href: "https://t.me/rathc",
  },
  {
    id: "email",
    label: "Email",
    icon: "/svg/email-1-svgrepo-com.svg",
    href: "mailto:[EMAIL_ADDRESS]",
  },
];
