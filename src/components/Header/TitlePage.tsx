import { Heading } from '@chakra-ui/react';

export interface TitlePageProps {
  title: string;
}

export function TitlePage({ title }: TitlePageProps) {
  return (
    <Heading size="lg" fontWeight="normal">
      {title}
    </Heading>
  );
}
