import { LinkTo } from './styles';

const Button = ({ padding, text }: { padding: string; text: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      className=""
      href="/"
    >
      {text}
    </LinkTo>
  );
};

export default Button;
