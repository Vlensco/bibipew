import React, { useEffect } from 'react';

const NAVIGATE_EVENT = 'bibipew:navigate';

export function Link({ href, onClick, children, ...props }) {
  const handleClick = (event) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      props.target === '_blank' ||
      !href?.startsWith('/')
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new Event(NAVIGATE_EVENT));
  };

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}

export function Head({ title }) {
  useEffect(() => {
    document.title = title ? `${title} - BibiPew` : 'BibiPew';
  }, [title]);

  return null;
}

export function usePage() {
  return { url: window.location.pathname };
}

export { NAVIGATE_EVENT };
