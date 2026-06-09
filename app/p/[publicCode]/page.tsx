import { PetPublicProfile } from '@/components/PetPublicProfile';
import { demoPet } from '@/lib/demo-data';

export default function PublicPetPage({ params }: { params: { publicCode: string } }) {
  return <PetPublicProfile pet={demoPet} publicCode={params.publicCode} />;
}
