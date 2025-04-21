'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function SubscriptionsBlogRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.push('/#blog-subscriptions-memberships');
  }, [router]);
  
  return null;
} 