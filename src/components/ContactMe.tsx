import { X, GH, LINKEDIN, DISCORD, EMAIL } from '@/utils/user';
import { FaDiscord, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6';

export default function ContactMe({
    x,
    github,
    linkedin,
    email,
    discord,
}: {
    x?: boolean | false;
    github?: boolean | false;
    linkedin?: boolean | false;
    email?: boolean | false;
    discord?: boolean | false;
}) {
    return (
        <>
            <div className="pl-2 flex flex-row gap-4 pt-2">
                {x ? (
                    <a href={X}>
                        <FaXTwitter />
                    </a>
                ) : null}
                {github ? (
                <a href={GH}>
                        <FaGithub />
                    </a>
                ) : null}
                {linkedin ? (
                    <a href={LINKEDIN}>
                        <FaLinkedin />
                    </a>
                ) : null}
                {email ? (
                    <a href={EMAIL}>
                        <FaEnvelope />
                    </a>
                ) : null}
                {discord ? (
                    <a href={DISCORD}>
                        <FaDiscord />
                    </a>
                ) : null}
            </div>
        </>
    )
}