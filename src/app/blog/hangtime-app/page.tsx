'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HangtimeAppBlog() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to main page with anchor
    router.push('/#blog-hangtime-app');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-pulse text-slate-600 dark:text-slate-300">
        Redirecting to article...
      </div>
    </div>
  );
} 