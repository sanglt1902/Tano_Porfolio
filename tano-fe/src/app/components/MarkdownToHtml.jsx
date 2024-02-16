"use client"
import React from 'react';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

const MarkdownToHtml = ({ markdownContent }) => {
  const convertMarkdownToHtml = async (markdownContent) => {
    const processedContent = await remark().use(remarkHtml).process(markdownContent);
    return processedContent.toString();
  };

  const [htmlContent, setHtmlContent] = React.useState('');

  React.useEffect(() => {
    const fetchHtmlContent = async () => {
      const convertedHtmlContent = await convertMarkdownToHtml(markdownContent);
      setHtmlContent(convertedHtmlContent);
    };
    fetchHtmlContent();
  }, [markdownContent]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default MarkdownToHtml;
