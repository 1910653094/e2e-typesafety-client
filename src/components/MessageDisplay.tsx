import { TMessage } from '../types';
import Branch from './Branch';

// ---------------------------------------

type TMessageDisplayProps = {
  message: TMessage;
  index: number;
};

// ---------------------------------------

export default function MessageDisplay({
  message,
  index,
}: TMessageDisplayProps): JSX.Element {
  return (
    <div className="group mb-2 shrink-0 rounded-lg flex items-center drop-shadow-md bg-zinc-700 w-48 h-20 relative">
      <Branch trunk={index === 0} />
      <p className="text-sm text-gray-200 font-bold px-4">{message.body}</p>
    </div>
  );
}
