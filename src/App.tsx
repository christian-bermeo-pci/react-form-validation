import { Accordion, Alert, Button, Card, Switch } from 'pci-ui-library';
import { useState } from 'react';
import { useTheme } from './providers/theme-provider';
import { FormExample } from './pages/react-hook-form';

function App() {
	const [loading, setLoading] = useState(false);
	const [loading1, setLoading1] = useState(false);
	const [loading2, setLoading2] = useState(false);
	const { setTheme, theme } = useTheme();

	return (
		<div className='p-6 flex flex-col gap-4'>
			{/* Example react hook form */}
			<FormExample />

			<div className='flex flex-row flex-wrap gap-2 w-full'>
				<Button loading={loading} onClick={() => setLoading(!loading)}>
					click here
				</Button>
				<Button
					loading={loading1}
					onClick={() => setLoading1(!loading1)}
					variant='destructive'>
					click here
				</Button>
				<Button
					loading={loading2}
					onClick={() => setLoading2(!loading2)}
					variant='outline'>
					click here
				</Button>
				<div>
					<Switch
						label={theme === 'light' ? 'Light' : 'Dark'}
						onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
						checked={theme !== 'light'}
						border
					/>
				</div>
			</div>
			{/* Other UI */}
			<Accordion header='Header'>Hello world!</Accordion>
			<Card title='Alerts'>
				<div className='flex flex-col gap-4'>
					<Alert>It went great!</Alert>

					<Alert title='Info!' variant='info'>
						Variant info!
					</Alert>
					<Alert title='Warning!' variant='warning'>
						Variant warning!
					</Alert>
					<Alert title='Danger!' variant='danger'>
						Variant danger!
					</Alert>
				</div>
			</Card>
		</div>
	);
}

export default App;
