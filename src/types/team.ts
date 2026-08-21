export type MemberCategory = 'advisor' | 'captain' | 'lead' | 'member' | 'alumni';

export interface TeamMember {
  name: string;
  role: string;
  category: MemberCategory;
  department: string;
  season: string; // e.g. "2026", "2025 2024", "founders"
  image?: string;
  linkedin?: string;
  bio?: string;
}

export interface CarSpec {
  id: string;
  name: string;
  year: string;
  subtitle: string;
  description: string;
  power: string;
  weight: string;
  accel: string;
  chassis: string;
  bodywork: string;
  sensors: string;
  image: string;
  badges: string[];
}
