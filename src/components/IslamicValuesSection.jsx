import React from 'react';
import { Heart, Droplets, Gift } from 'lucide-react';

export default function IslamicValuesSection() {
  return (
    <section id="values" className="section-padding bg-[#FDF8EF]">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <div className="font-arabic text-4xl md:text-5xl text-gold-500 mb-6 leading-relaxed">
            مَّثَلُ الَّذِينَ يُنفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنبَتَتْ سَبْعَ سَنَابِلَ
          </div>
          <p className="font-body text-green-950/80 text-lg md:text-xl italic mb-8">
            "The example of those who spend their wealth in the way of Allah is like a seed of grain which grows seven spikes..." (2:261)
          </p>
          <div className="h-[1px] w-[100px] bg-gold-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16 reveal-up">
          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
              <Gift size={32} />
            </div>
            <h3 className="font-heading text-2xl text-green-950 mb-3">Zakat</h3>
            <p className="font-body text-textMuted">
              Purify your wealth through mandatory giving. We ensure your Zakat reaches strictly verified, eligible families only.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
              <Heart size={32} />
            </div>
            <h3 className="font-heading text-2xl text-green-950 mb-3">Sadaqah</h3>
            <p className="font-body text-textMuted">
              Voluntary charity that extinguishes sins as water extinguishes fire. Given to those in immediate need of relief.
            </p>
          </div>

          <div className="text-center p-6">
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm text-gold-500">
              <Droplets size={32} />
            </div>
            <h3 className="font-heading text-2xl text-green-950 mb-3">Sadaqah Jariyah</h3>
            <p className="font-body text-textMuted">
              Ongoing charity like water wells that continue to provide reward even after you have passed away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
