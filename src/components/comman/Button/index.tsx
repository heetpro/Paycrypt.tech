import Image from 'next/image';
import { LinkTo } from './styles';

const Button = ({ padding, text }: { padding: string; text: string }) => {
  return (
    <LinkTo
      style={{
        padding: padding,
      }}
      className="gap-2 hover:gap-6 transition-all duration-300"
      href="/"
    >
      <span>{text}
      </span>
      <Image src={"/arrow.svg"} alt="arrow-right" width={20} height={20} className='rotate-45' />
    </LinkTo>
  );
};

export default Button;
