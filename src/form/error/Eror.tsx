import { Error } from './styled';

interface ErrorMessageProps {
  message: string;
}

const ErrorMessage = ({ message }: ErrorMessageProps) => <Error>{message}</Error>;

export default ErrorMessage;
