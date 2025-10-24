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
    } else if (activeText === 'Leica Partnership') {
      return {
        position: 'top-1/2 -translate-y-1/2',
        align: 'justify-end pr-12 md:pr-20',
        glow: 'drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]',
        color: 'text-white',
      };
    } else if (activeText === 'Discover a new reality on the other side of the lens') {
      return {
        position: 'top-1/2 -translate-y-1/2',
        align: 'lg:!text-5xl justify-center',
        glow: 'drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]',
        color: 'text-white',
      };
    } else if (activeText === 'Professional Optical System') {
      return {
        position: 'top-1/2 -translate-y-1/2',
        align: 'justify-end pr-12 md:pr-20',
        glow: 'drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]',
        color: 'text-white',
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
      ) : activeText === 'Professional Optical System' ? (
        <div className={`flex flex-col items-end h-full ${style.position} ${style.align} absolute left-0 right-0 max-w-[45%] ml-auto`}>
          <h2 className="michroma-regular text-lg md:text-xl lg:text-2xl font-bold text-white text-right mb-4 drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]">
            Professional optical system improving the lens's optical quality at the source
          </h2>
          <p className="text-gray-300 text-xs md:text-sm text-right mb-6">
            Leica lenses' professional capabilities come from their advanced optical technology, so you can tell your own story with light and shadow, drawing the viewer in.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {[
              {
                icon: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/0f16e3beb16a635ad8ce3a1ea8287a1d.png?f=webp',
                title: 'Aspherical High Transmittance Lens'
              },
              {
                icon: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/0f16e3beb16a635ad8ce3a1ea8287a1d.png?f=webp',
                title: 'Professional anti-glare lens coating: ALD ultra-low reflectance technology'
              },
              {
                icon: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/3733102d5592a192196b9fef5550bedf.png?f=webp',
                title: 'Lens edge ink coating'
              },
              {
                icon: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/f0c4efaeb29161da9adce8d54cdb98ab.png?f=webp',
                title: 'Cyclic olefin copolymer (COC) material'
              },
              {
                icon: 'https://i02.appmifile.com/mi-com-product/fly-birds/xiaomi-12s-ultra/f32641803e7d5305f4161b6e3c28cd98.png?f=webp',
                title: 'Infrared light filter with spin coating technology'
              }
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center bg-black/40 backdrop-blur-sm p-4 rounded-lg border border-gray-700/50">
                <img src={feature.icon} alt={feature.title} className="h-12 w-12 mb-3 object-contain" />
                <p className="text-white text-xs text-center">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      ) : activeText === 'Leica Partnership' ? (
        <div className={`flex flex-col items-end h-full ${style.position} ${style.align} absolute left-0 right-0`}>
          <p className={`michroma-regular text-2xl md:text-3xl lg:text-5xl font-bold ${style.color} ${style.glow} mb-6 transition-all duration-300`}>
            Co-Engineered with Leica
          </p>
          <p className={`michroma-regular text-xl md:text-2xl lg:text-4xl font-bold ${style.color} ${style.glow} mb-6 transition-all duration-300`}>
            Professional Lens
          </p>
          <img
            src="/Leica_Camera_logo.png"
            alt="Leica Camera Logo"
            className="h-10 mb-15 md:h-12 lg:h-16 w-auto opacity-90"
          />
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
