function FooterLinks({ links, ulClass }) {
  return (
    <ul className={`d-md-block ${ulClass}`}>
      {links.map((link, index) => (
        <li key={index}>
          <a href={link.linkUrl}>{link.linkText}</a>
        </li>
      ))}
    </ul>
  );
}

export default FooterLinks;
