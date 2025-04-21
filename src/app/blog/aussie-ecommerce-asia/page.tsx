'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EcommerceBlogRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#blog-aussie-ecommerce');
  }, [router]);
  
  return null;
} 