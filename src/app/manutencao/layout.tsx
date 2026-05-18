import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manutenção em Andamento | RA Manutenção de Sacadas',
  description: 'Estamos trabalhando em melhorias. Voltaremos em breve.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function MaintenanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
