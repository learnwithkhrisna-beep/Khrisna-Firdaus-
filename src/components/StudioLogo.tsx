import React, { useState } from 'react';

interface StudioLogoProps {
  className?: string;
}

export const StudioLogo: React.FC<StudioLogoProps> = ({ className = 'h-7 w-auto' }) => {
  const [imageFailed, setImageFailed] = useState(false);

  // If the remote Google usercontent image fails or is unavailable in offline/container environment,
  // gracefully fall back to the exact geometric precision vector mark of "Teduh dalam cerita"
  if (imageFailed) {
    return (
      <svg
        viewBox="0 0 36 24"
        className={className}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect x="0" y="4" width="22" height="3" fill="#0066b1" />
        <rect x="6" y="10" width="28" height="3.5" fill="#1c69d4" />
        <rect x="2" y="17" width="18" height="3" fill="#1a2129" />
      </svg>
    );
  }

  return (
    <div className="flex items-center">
      <img
        alt="Teduh dalam cerita Logo"
        className={className}
        onError={() => setImageFailed(true)}
        src="https://lh3.googleusercontent.com/aida/AEtjO1VotXK3FhtwH4d0-wPtC3tQOMUKZvCcM82VxzCmoq_A6r00v4SRHfthES8RH7pFqGwmjhg_bU-TdVHLDEcATDgTrV4ZHYSuXNFfUhoduszyTNlc6khQcgraJKfLCcZumoK8zkph67AqRywXWMVANHDWOwDarAUxns2faj-ElsN-LlonOU6oTROz-ZMX-0HlNnGRU7pQJqr1cMkaaOWcZSLnqTJB6qwOxcBVem1pBZzeTYsVudtztLc"
      />
    </div>
  );
};
