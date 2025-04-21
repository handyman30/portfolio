'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function BlogIndex() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main page blog section
    router.push('/#blog');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-slate-600 dark:text-slate-300">
        Redirecting to blog...
      </div>
    </div>
  );
} 