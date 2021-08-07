const InternalLink = ({ children, url }) => {
    return (
        <a href={url} target="_blank">{children}</a>
    )
}

export default InternalLink;