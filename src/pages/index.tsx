import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../components/Form/Input';

type SingInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const { errors } = formState;

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        onSubmit={handleSubmit(handleSignIn)}
        as="form"
        width="100%"
        bg="gray.800"
        p="8"
        flexDir="column"
        maxWidth="360"
        borderRadius="8"
      >
        <Stack spacing="4">
          <Input
            {...register('email')}
            error={errors.email}
            name="email"
            label="Email"
            type="email"
          />

          <Input
            {...register('password')}
            error={errors.password}
            name="password"
            label="Password"
            type="password"
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Log In
        </Button>
      </Flex>
    </Flex>
  );
}
