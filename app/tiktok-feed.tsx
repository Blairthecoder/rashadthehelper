'use client';

import { useEffect } from 'react';
import { tiktokHandle, tiktokUrl } from './social-data';

const scriptSrc = 'https://www.tiktok.com/embed.js';

/**
 * TikTok's official creator embed. It reads the handle off the blockquote and
 * renders the account's most recent videos, so this feed stays current on its
 * own. If the script is blocked, the blockquote degrades to a profile link.
 */
export function TikTokFeed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement('script');
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="tiktok-shell">
      <blockquote
        className="tiktok-embed"
        cite={tiktokUrl}
        data-unique-id={tiktokHandle}
        data-embed-type="creator"
      >
        <section>
          <a href={`${tiktokUrl}?refer=creator_embed`} target="_blank" rel="noreferrer">@{tiktokHandle} on TikTok</a>
        </section>
      </blockquote>
    </div>
  );
}
