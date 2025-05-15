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
        <div className="font-bold pb-6">{'contact me'}</div>
            <div className="pl-2 flex flex-row gap-4">
                {x ? (
                    <a href={process.env.X}>
                        <FaXTwitter />
                    </a>
                ) : null}
                {github ? (
                <a href={process.env.GH}>
                        <FaGithub />
                    </a>
                ) : null}
                {linkedin ? (
                    <a href={process.env.LINKEDIN}>
                        <FaLinkedin />
                    </a>
                ) : null}
                {email ? (
                    <a href={process.env.EMAIL}>
                        <FaEnvelope />
                    </a>
                ) : null}
                {discord ? (
                    <a href={process.env.DISCORD}>
                        <FaDiscord />
                    </a>
                ) : null}
            </div>
        </>
    )
}