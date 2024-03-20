import Image from "next/image";
import s from "./value-cards.module.scss";

const DummyData = [
  {
    image: "/images/charms/dove.png",
    leadin: "Value 1",
    title: "INSPIRE GRATITUDE FOR ALL UNIQUE JOURNEYS",
    desc: "Every moment, solo adventure, and spontaneous decision has led you to where you are today. We are grateful for and inspired by the lowest lows and highest highs. Each and every experience molds you into the brave, honest, well-rounded person you are meant to be. There is power in adding depth to your outlook on life. ",
  },
  {
    image: "/images/charms/horseshoe.png",
    leadin: "Value 2",
    title: "MOTIVATE YOU TO KICK A** AND TAKE NAMES",
    desc: "Life is short. Life is dangerous. But most importantly, life is meant to be lived. Radiate positivity and take risks. We dare you to do something great with this precious time you have. Don't ask for permission OR forgiveness.",
  },
  {
    image: "/images/charms/faith.png",
    leadin: "Value 3",
    title: "EMPOWER AUTHENTICALLY RAW INDIVIDUALS",
    desc: "Today is your day. It's time to celebrate your unique personal journey and all of its flaws. Let's be real—we are all extremely complicated and have gone through too much sh*t to count on one hand. Overcoming it is something we should be extremely proud of.",
  },
  {
    image: "/images/charms/heart.png",
    leadin: "Value 4",
    title: "EXEMPLIFY EPIC COMPASSION",
    desc: "It's not hard to be kind to others. Let's be real, you probably want to show love in many more moments than you act upon. In a world of hate, let's spread optimism. It's up to us to build a positive community through uplifting others. Our stories have the power to bring us together if we are brave enough to share them.",
  },
];

function ValueCards() {
  return (
    <>
      <section className={s.valueCards}>
        <div className={s.container}>
          <div className={s.valueCardsContain}>
            {DummyData.map((card, index) => {
              return (
                <div className={s.valueCard} key={`value-card-${index}`}>
                  <div className={s.imgContain}>
                    <Image src={card.image} fill alt="" aria-hidden="true" />
                  </div>

                  <div className={s.contentContain}>
                    <p className={`${s.leadin} value-detail`}>{card.leadin}</p>
                    <h6 className={`${s.title} title value-card-type`}>{card.title}</h6>
                    <div className={`${s.desc}`}>
                      <p>{card.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default ValueCards;
