function FooterLegalItemsLinks({ linkUrl, linkContent, spanClass, hasSpan }) {
  return (
    <li className="text-nowarap">
      {hasSpan ? (
        <a href={linkUrl}>
          <span className={spanClass}></span>
          {linkContent}
        </a>
      ) : (
        <a href={linkUrl}>{linkContent}</a>
      )}
    </li>
  );
}

export default FooterLegalItemsLinks;
