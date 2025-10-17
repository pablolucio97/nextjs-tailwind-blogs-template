"use client";
import dompurify from "dompurify";

interface HTMLRenderProps {
  /**HTML a ser renderizado*/
  html: string;
  /**Classes extras do container externo*/
  containerClassName?: string;
}

function sanitizeHtml(html: string) {
  if (typeof window === "undefined") {
    return html;
  }

  const domPurifyCandidate = dompurify as unknown;

  if (
    typeof domPurifyCandidate === "object" &&
    domPurifyCandidate !== null &&
    typeof (domPurifyCandidate as { sanitize?: (value: string) => string }).sanitize === "function"
  ) {
    return (domPurifyCandidate as { sanitize: (value: string) => string }).sanitize(html);
  }

  if (typeof domPurifyCandidate === "function") {
    return (domPurifyCandidate as (value: string) => string)(html);
  }

  return html;
}

export default function HTMLRender({
  html,
  containerClassName,
}: HTMLRenderProps) {
  const sanitizedHtml = sanitizeHtml(html);
  return (
    <div
      className={containerClassName}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}
