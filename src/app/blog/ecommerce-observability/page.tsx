'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ObservabilityBlogRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#blog-observability');
  }, [router]);
  
  return null;
} 