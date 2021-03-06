import Link from "next/link";

export const Head = ({ meta, link, isBlogPost }) => (
  <>
    {isBlogPost ? (<h1 className={isBlogPost ? "great-title" : null}>{meta.title}</h1>) : (<Link href={link}>
      <h1 className={isBlogPost ? "great-title" : null}>{meta.title}</h1>
    </Link>)}
    <div className="details">
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        ☕ {meta.readTime + " mins read"}
      </span>
    </div>
    <style jsx>
      {`
        h1 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f39c12;
        }
        .great-title {
          font-size: 2rem;
        }
        .details span {
          color: #bdbdbd;
          margin-right: 1rem;
        }
        .details {
          margin-bottom: 1rem;
        }
      `}
    </style>
  </>
);
