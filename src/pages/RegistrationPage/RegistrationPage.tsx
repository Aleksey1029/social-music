import { AppButton } from '../../components/AppButton/AppButton'
import { AppInput } from '../../components/UI/Header/AppInput/AppInput'
import { Link } from 'react-router-dom'
import './RegistrationPage.scss'
import { LoginWith } from '../../components/LoginWith/LoginWith'
import { Heading } from '../../components/Typography/AppHeading/AppHeading'

export const RegistrationPage = () => {
	return (
		<div className='RegistrationPage'>
			<Heading headingText='Регистрация' headingType='h1' />
			<form action='#'>
				<AppInput inputType='string' inputPlaceholder='Ваше имя' />
				<AppInput inputType='string' inputPlaceholder='Ваш город' />
				<AppInput inputType='number' inputPlaceholder='Ваш возраст' />
				<AppInput inputType='email' inputPlaceholder='Ваш Email' />
				<AppInput inputType='tel' inputPlaceholder='Ваш номер телефона' />
				<AppInput inputType='password' inputPlaceholder='Пароль' />
				<Link to='/profile'>
					<AppButton buttonText='Зарегистрироваться' />
				</Link>
			</form>
			<div className='registration'>
				<span>
					Уже есть аккаунта? <Link to='/'>Войти</Link>
				</span>
				<p>Зарегистрироваться с помощью:</p>
				<LoginWith />
			</div>
		</div>
	)   
}
