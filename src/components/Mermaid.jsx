import React, { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
  fontFamily: 'var(--font-mono, monospace)',
});

const Mermaid = ({ chart }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      mermaid.render(`mermaid-${Math.random().toString(36).substr(2, 9)}`, chart)
        .then((result) => {
          containerRef.current.innerHTML = result.svg;
        })
        .catch((error) => {
          console.error('Mermaid rendering error:', error);
        });
    }
  }, [chart]);

  return <div ref={containerRef} className="mermaid-diagram" style={{ margin: '2rem 0', display: 'flex', justifyContent: 'center' }} />;
};

export default Mermaid;
