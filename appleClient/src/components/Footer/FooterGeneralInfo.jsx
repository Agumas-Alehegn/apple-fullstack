function FooterGeneralInfo(props) {
  const { hasLink, linkUrl, linkText, beforeLinkText, afterLinkText } = props;
  return (
    <>
      <p>
        {hasLink ? (
          <>
            {beforeLinkText}, <a href={linkUrl}>{linkText}</a>, {afterLinkText}
          </>
        ) : (
          beforeLinkText
        )}
      </p>
    </>
  );
}

export default FooterGeneralInfo;
