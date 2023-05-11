import { Stack, Typography, Link } from "@mui/material"

export default function list(props) {
    let {
        name,
        description,
        links,
        email,
        documents
    } = props

    var emailLink = ""
    const emailSubject = "?subject=PII Base Installation Access"
    if (!name) name = ""
    if (!description) description = ""
    if (!links) links = []
    if (!email) email = ""
    else emailLink = 'mailto:' + email + emailSubject
    if (!documents) documents = []

    const header = 'h5'

    return (
        <div className="item">
            <Stack>
                { name.length !== 0 && <Typography fontWeight='bold' variant={header}>{name}</Typography> }
                { description.length !== 0 && <Typography>{description}</Typography> }
                { email.length !== 0 && <Link href={emailLink} >{email}</Link> }
                <Stack>
                    <ul>
                        { documents.map(document => (
                            <li key={document.name}>
                                <Link
                                    target = "_blank"
                                    href={isInsideDirectory(document.path)}
                                >
                                    { document.name }
                                </Link>
                            </li>
                        ))}
                        { links.map(link => (
                            <li key={link.name}>
                                <Link
                                    target = "_blank"
                                    href={isInsideDirectory(link.path)}
                                >
                                    { link.name }
                                </Link>
                            </li>
                        ))}
                     </ul>
                </Stack>
            </Stack>
        </div>
    )

    function isInsideDirectory(path) {
        if (path.includes('https://')) return path
        return '/documents/'+path
    }
}