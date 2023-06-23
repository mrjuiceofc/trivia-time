'use client'

import ResetPasswordForm from '@/components/auth/ResetPasswordForm'
import { Container, Flex, Text } from '@chakra-ui/react'
import Image from 'next/image'

const ResetPassword = () => {
	return (
		<Flex direction="row" w="full" minH="100vh">
			<Flex flexGrow={1} maxWidth="lg" alignItems="center" display={{ base: 'none', md: 'flex' }} p={8}>
				<Image
					width="0"
					height="0"
					priority
					src="/img/illustrations/reset_password.svg"
					alt="illustration"
					style={{ margin: 'auto', width: '100%', height: 'auto' }}
				/>
			</Flex>
			<Flex flexGrow={1} bgColor="white" overflow="auto" px={{ base: 4, md: 8 }} pt={20} pb={8}>
				<Container maxW="sm" sx={{ m: { base: '0 auto', md: 'auto' }, p: 0 }}>
					<Text as="h1" fontSize={24} fontWeight="bold" mb={6}>
						Reset your password
					</Text>

					<ResetPasswordForm />
				</Container>
			</Flex>
		</Flex>
	)
}

export default ResetPassword
