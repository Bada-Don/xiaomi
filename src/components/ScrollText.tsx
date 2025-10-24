import { useScrollText } from '@/hooks/useScrollText';

interface ScrollTextProps {
  ranges: Array<{
    start: number;
    end: number;
    text: string;
  }>;
  className?: string;
}

export default function ScrollText({ ranges, className = '' }: ScrollTextProps) {
  const { activeText, opacity } = useScrollText(ranges);

  // Determine positioning and styling based on active text
  const getTextStyle = () => {
    if (activeText === 'Presenting to you') {
      return {
        position: 'top-[25%]', // shifted upwards
        align: 'justify-center',
        glow: 'drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] drop-shadow-[0_0_80px_rgba(168,85,247,0.5)]', // purple glow
        color: 'text-white',
      };
    } else if (activeText === 'The All new') {
      return {
        position: 'top-[15%]', // shifted upwards
        align: 'justify-center',
        glow: 'drop-shadow-[0_0_40px_rgba(234,179,8,0.9)] drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]', // golden glow
        color: 'text-yellow-400',
      };
    } else if (activeText === 'Xiaomi') {
      return {
        position: 'top-1/2 -translate-y-1/2',
        align: 'justify-start pl-12 md:pl-20',
        glow: 'drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] drop-shadow-[0_0_80px_rgba(168,85,247,0.5)]', // purple
        color: 'text-yellow-400',
      };
    } else if (activeText === 'S12 Ultra') {
      return {
        position: 'top-1/2 -translate-y-1/2',
        align: 'justify-end pr-12 md:pr-20',
        glow: 'drop-shadow-[0_0_40px_rgba(234,179,8,0.9)] drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]', // golden
        color: 'text-yellow-400',
      };
    }
    return {
      position: 'top-1/2 -translate-y-1/2',
      align: 'justify-center',
      glow: '',
      color: 'text-white',
    };
  };

  const style = getTextStyle();

    return (
    <div
      className={`fixed inset-0 pointer-events-none z-10 ${className}`}
      style={{ opacity }}
    >
      {activeText === 'Xiaomi & S12 Ultra' ? (
        <div className="flex w-full justify-center gap-8 md:gap-12 lg:gap-16 items-center h-full">
          <h1
            className={`michroma-regular text-4xl md:text-5xl lg:text-8xl font-bold text-yellow-400 transition-all duration-300 drop-shadow-[0_0_40px_rgba(168,85,247,0.9)] drop-shadow-[0_0_80px_rgba(168,85,247,0.5)]`}
          >
            Xiaomi
          </h1>
          <h1
            className={`michroma-regular text-4xl md:text-5xl lg:text-8xl font-bold text-yellow-400 transition-all duration-300 drop-shadow-[0_0_40px_rgba(234,179,8,0.9)] drop-shadow-[0_0_80px_rgba(234,179,8,0.5)]`}
          >
            S12 Ultra
          </h1>
        </div>
      ) : (
        <h1
          className={`michroma-regular text-4xl md:text-5xl lg:text-8xl font-bold ${style.color} px-8 transition-all duration-300 ${style.glow} absolute left-0 right-0 flex ${style.align} ${style.position}`}
        >
          {activeText}
        </h1>
      )}
    </div>
  );

}
