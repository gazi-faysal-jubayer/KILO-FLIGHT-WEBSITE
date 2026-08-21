import React from 'react';
import { Metadata } from 'next';
import TeamDirectory from '@/components/TeamDirectory';

export const metadata: Metadata = {
  title: 'Our Team & Alumni Directory | Team Kilo Flight - KUET',
  description: 'Explore current student engineers and historical teams from 2018 to present at Khulna University of Engineering & Technology.',
};

export default function TeamPage() {
  return (
    <div>
      <TeamDirectory />
    </div>
  );
}
