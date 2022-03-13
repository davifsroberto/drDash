import Link from 'next/link';

import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';

import { Header } from '../../components/Header';
import { Sidebar } from '../../components/Sidebar';
import { Input } from '../../components/Form/Input';
import { TitlePage } from '../../components/Header/TitlePage';

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmed: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required().min(6),
  password_confirmed: yup
    .string()
    .oneOf([null, yup.ref('password')], 'passwords do not match'),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const { errors } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" mx="auto" my="6" px="6" maxWidth={1480}>
        <Sidebar />

        <Box
          onSubmit={handleSubmit(handleCreateUser)}
          as="form"
          flex="1"
          bg="gray.800"
          p={['6', '8']}
          borderRadius={8}
        >
          <TitlePage title="Users" />

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                {...register('name')}
                error={errors.name}
                name="name"
                label="Fullname"
              />

              <Input
                {...register('email')}
                error={errors.email}
                name="email"
                label="E-mail"
                type="email"
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
              <Input
                {...register('password')}
                error={errors.password}
                name="password"
                label="Password"
                type="password"
              />

              <Input
                {...register('password_confirmed')}
                error={errors.password_confirmed}
                name="password_confirmed"
                label="Confirm Password"
                type="password"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button colorScheme="whiteAlpha">Cancel</Button>
              </Link>

              <Button
                isLoading={formState.isSubmitting}
                type="submit"
                colorScheme="pink"
              >
                Create
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
