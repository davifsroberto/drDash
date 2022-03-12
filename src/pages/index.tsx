import { Button, Flex, Stack } from '@chakra-ui/react';
import { SubmitHandler, useForm, useFormContext } from 'react-hook-form';

import { Input } from '../components/Form/Input';

type SingInFormData = {
  email: string;
  password: string;
};

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm();

  const handleSignIn: SubmitHandler<SingInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        bg="gray.800"
        p="8"
        flexDir="column"
        maxWidth="360"
        borderRadius="8"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input
            {...register('email')}
            name="email"
            label="E-mail"
            type="email"
          />

          <Input
            {...register('password')}
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
