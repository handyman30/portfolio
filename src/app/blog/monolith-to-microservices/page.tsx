'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function MicroservicesBlogRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#blog-microservices');
  }, [router]);
  
  return null;
} 