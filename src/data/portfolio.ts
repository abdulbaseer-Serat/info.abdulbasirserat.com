import type { ElementType } from 'react';
import {
  Cloud,
  Network,
  Server,
  ShieldCheck,
  Award,
  Briefcase,
  GraduationCap,
  Mail,
  Phone,
  Linkedin,
  Github,
  CloudRain,
  Lock,
  Cpu,
  Wifi,
  Database,
  Settings,
  Globe,
  type LucideIcon,
} from 'lucide-react';
import {
  FaAws,
  FaMicrosoft,
  FaWindows,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';
import { SiCisco } from 'react-icons/si';

export const personalInfo = {
  name: 'Abdul Baseer Serat',
  titles: [
    'Senior ICT Officer',
    'Cloud Administrator',
    'Network Engineer',
    'Cybersecurity Professional',
  ],
  subtitle:
    'AWS Certified Solutions Architect | Azure Administrator | CCNP Enterprise | CompTIA Security+',
  description:
    'Experienced ICT professional specializing in cloud infrastructure, enterprise networking, Microsoft 365 administration, and cybersecurity. Passionate about building secure, scalable, and reliable technology solutions.',
  email: 'info.abdulbasir@gmail.com',
  phone: '+93 728973718',
  linkedin: 'https://linkedin.com/in/abdulbaseerserat',
  github: 'https://github.com/AbdulBaseer-Serat',
  location: 'Kabul, Afghanistan',
  currentRole: 'Senior ICT Officer at ACTED',
  yearsExperience: '8+',
  footerTagline: 'Building Secure Cloud, Network, and Cybersecurity Solutions.',
};

export const aboutContent = `I am a Senior ICT Professional with more than 8 years of experience in IT infrastructure, cloud computing, cybersecurity, networking, and Microsoft 365 administration. Currently working as Senior ICT Officer at ACTED, delivering secure and scalable ICT services and supporting digital transformation initiatives.`;

export const stats = [
  { label: 'Years Experience', value: '8+' },
  { label: 'Certifications', value: '7+' },
  { label: 'Projects Completed', value: '20+' },
  { label: 'Organizations Served', value: '4' },
];

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: { name: string; icon: ElementType }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Cloud Technologies',
    icon: Cloud,
    skills: [
      { name: 'AWS', icon: FaAws },
      { name: 'Azure', icon: FaMicrosoft },
      { name: 'Microsoft 365', icon: FaMicrosoft },
    ],
  },
  {
    title: 'Networking',
    icon: Network,
    skills: [
      { name: 'CCNA', icon: SiCisco },
      { name: 'CCNP', icon: SiCisco },
      { name: 'Routing', icon: Wifi },
      { name: 'Switching', icon: Network },
      { name: 'OSPF', icon: Globe },
      { name: 'BGP', icon: Globe },
      { name: 'VLAN', icon: Network },
      { name: 'VPN', icon: Lock },
    ],
  },
  {
    title: 'System Administration',
    icon: Server,
    skills: [
      { name: 'Windows Server', icon: FaWindows },
      { name: 'Active Directory', icon: Server },
      { name: 'DNS', icon: Globe },
      { name: 'DHCP', icon: Settings },
      { name: 'File Server', icon: Database },
      { name: 'Group Policy', icon: Settings },
    ],
  },
  {
    title: 'Cybersecurity',
    icon: ShieldCheck,
    skills: [
      { name: 'CompTIA Security+', icon: ShieldCheck },
      { name: 'Network Security', icon: Lock },
      { name: 'Risk Management', icon: ShieldCheck },
      { name: 'Endpoint Security', icon: Cpu },
      { name: 'Access Control', icon: Lock },
    ],
  },
];

export interface EducationItem {
  degree: string;
  institution: string;
  icon: LucideIcon;
}

export const education: EducationItem[] = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Abasyn University',
    icon: GraduationCap,
  },
  {
    degree: 'Bachelor of Science in Telecommunication and Networks',
    institution: 'Abasyn University',
    icon: GraduationCap,
  },
  {
    degree: 'Diploma in Information Technology',
    institution: 'Apex Institute of Modern Studies',
    icon: Award,
  },
];

export interface Certification {
  name: string;
  icon: ElementType;
}

export const certifications: Certification[] = [
  { name: 'AWS Certified Solutions Architect Associate', icon: FaAws },
  { name: 'Microsoft Azure Administrator AZ-104', icon: FaMicrosoft },
  { name: 'Cisco Certified Network Associate CCNA', icon: SiCisco },
  { name: 'Cisco Certified Specialist CCNP ENCOR', icon: SiCisco },
  { name: 'Cisco Certified Specialist CCNP ENARSI', icon: SiCisco },
  { name: 'CompTIA Security+', icon: ShieldCheck },
  { name: 'OPSWAT ICIP', icon: Lock },
];

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  icon: LucideIcon;
}

export const experience: ExperienceItem[] = [
  {
    role: 'Senior ICT Officer',
    company: 'ACTED',
    period: '2024 - Present',
    icon: Briefcase,
  },
  {
    role: 'ICT Officer',
    company: 'Norwegian Refugee Council (NRC)',
    period: '2021 - 2023',
    icon: Briefcase,
  },
  {
    role: 'IT Manager',
    company: 'DSARUO',
    period: '2019 - 2021',
    icon: Briefcase,
  },
  {
    role: 'Network & System Engineer',
    company: 'ZICS',
    period: '2017 - 2019',
    icon: Briefcase,
  },
];

export interface Project {
  title: string;
  description: string;
  tags: string[];
  icon: LucideIcon;
  gradient: string;
}

export const projects: Project[] = [
  {
    title: 'Azure Infrastructure Lab',
    description: 'Azure Virtual Networks, NSGs, VPN Gateway, Monitoring, Azure VMs',
    tags: ['Azure', 'VPN', 'NSG', 'Monitoring'],
    icon: CloudRain,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'AWS Cloud Architecture',
    description: 'EC2, IAM, VPC, S3, CloudWatch',
    tags: ['AWS', 'EC2', 'VPC', 'S3'],
    icon: Cloud,
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
  {
    title: 'Enterprise Network Design',
    description: 'CCNP Enterprise Network Implementation using OSPF, BGP, Routing, VLANs',
    tags: ['CCNP', 'OSPF', 'BGP', 'VLAN'],
    icon: Network,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Microsoft 365 Administration',
    description: 'Exchange Online, Entra ID, Conditional Access, Security Policies',
    tags: ['M365', 'Entra ID', 'Exchange', 'Security'],
    icon: Server,
    gradient: 'from-indigo-500/20 to-blue-500/20',
  },
];

export const languages = ['Pashto', 'English', 'Dari', 'Urdu'];

export const contactLinks = [
  { label: 'Email', value: 'info.abdulbasir@gmail.com', href: 'mailto:info.abdulbasir@gmail.com', icon: Mail },
  { label: 'Phone', value: '+93 728973718', href: 'tel:+93728973718', icon: Phone },
  { label: 'LinkedIn', value: 'linkedin.com/in/abdulbaseerserat', href: 'https://linkedin.com/in/abdulbaseerserat', icon: Linkedin },
  { label: 'GitHub', value: 'github.com/AbdulBaseer-Serat', href: 'https://github.com/AbdulBaseer-Serat', icon: Github },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export { FaGithub, FaLinkedin };
