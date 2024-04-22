import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from 'pci-ui-library';

// Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character
const passwordValidation = new RegExp(
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
);

const SignUpSchema = z.object({
	name: z.string().min(3, 'Name should be at least 3 letters long'),
	email: z.string().email('Email should be a valid email'),
	password: z
		.string()
		.min(6, 'Password should be at least 6 letters long')
		.max(20, 'Password should be at most 20 letters long')
		.regex(passwordValidation, {
			message:
				'Your password should have a lower case, an uppercase, a number and a special character.',
		}),
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;

export const FormExample = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<SignUpSchemaType>({ resolver: zodResolver(SignUpSchema) });

	//we should here call like API or something...
	const onSubmit: SubmitHandler<SignUpSchemaType> = (data) => console.log(data);

	return (
		<div className='flex justify-center m-4 w-full'>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className='flex flex-col gap-6 mx-2 my-8 w-1/4'>
				<h2 className='text-primary text-center text-2xl'>
					React hook form & Zod
				</h2>

				<div>
					<Input
						placeholder='name'
						label='Name'
						zodErrors={errors}
						{...register('name')}
					/>
				</div>

				<div>
					<Input
						placeholder='email'
						label='Email'
						zodErrors={errors}
						{...register('email')}
					/>
				</div>

				<div>
					<Input
						placeholder='password'
						label='Password'
						zodErrors={errors}
						{...register('password')}
					/>
				</div>

				<div className='w-full flex justify-center mt-6'>
					<Button type='submit'>Submit</Button>
				</div>
			</form>
		</div>
	);
};
