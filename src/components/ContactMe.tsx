import { X, GH, LINKEDIN, DISCORD, EMAIL, RESUME } from '@/utils/user';
import { FaDiscord, FaEnvelope, FaFileAlt, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

export default function ContactMe({
    x,
    github,
    linkedin,
    email,
    discord,
    resume,
}: {
    x?: boolean | false;
    github?: boolean | false;
    linkedin?: boolean | false;
    email?: boolean | false;
    discord?: boolean | false;
    resume?: boolean | false;
}) {
    return (
        <>
            <div className="pl-2 flex flex-row gap-4 pt-2">
                {resume ? (
                    <a href={RESUME} target='_blank'>
                        <FaFileAlt />
                    </a>
                ) : null}
                {x ? (
                    <a href={X} target='_blank'>
                        <FaXTwitter />
                    </a>
                ) : null}
                {github ? (
                <a href={GH} target='_blank'>
                        <FaGithub />
                    </a>
                ) : null}
                {linkedin ? (
                    <a href={LINKEDIN} target='_blank'>
                        <FaLinkedin />
                    </a>
                ) : null}
                {email ? (
                    <a href={EMAIL} target='_blank'>
                        <FaEnvelope />
                    </a>
                ) : null}
                {discord ? (
                    <a href={DISCORD} target='_blank'>
                        <FaDiscord />
                    </a>
                ) : null}
            </div>
        </>
    )
}