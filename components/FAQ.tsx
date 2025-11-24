import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-base md:text-lg font-bold text-slate-900 group-hover:text-brand-blue transition-colors pr-8 leading-snug">{question}</span>
        {isOpen ? <ChevronUp className="text-brand-blue shrink-0" /> : <ChevronDown className="text-slate-400 shrink-0" />}
      </button>
      {isOpen && (
        <div className="pb-6 text-slate-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
          {answer}
        </div>
      )}
    </div>
  );
};

export const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What if I don't transform or get results?",
      answer: `This is by far the most common concern. Here is the reality:

1. It's truly impossible to do the work and not get the results.
One of our key mindsets we teach is "If I do the right things, the right things will happen every time." We give you EVERYTHING you need. It's impossible to NOT transform if you take advantage of everything we give you.

2. Full Refund!
If you do not transform by executing your plan at a minimum of 85%, we will give you everything you paid back. We don't even require you to be perfect.

3. Too Many Failed Attempts.
I get it, you have probably tried so many programs in the past. We guarantee your success. Do your part of executing at 85%, and we will do our part to give you our best coaching efforts.`
    },
    {
      question: "What Makes iFM Coaching Different from Other Programs?",
      answer: `We focus on making sure the changes you make last a long time. Instead of just helping you get quick results that don’t stick, we teach you how to keep up your success in the long run.

One of the coolest things is that it doesn’t just look at exercise; it also helps you build healthy habits. These habits are super important because they make sure you can keep your results for years.

But that’s not all. The program also works on your mindset. This means it helps you get stronger not just physically, but in your mind too. You learn how to push through tough times, stay motivated, and think positively.

The coaches in this program really care about you. They talk to you one-on-one (NOT a bot).

Plus, our iFM Coaching app makes everything easier. You get your workout plans, track your progress, and can even chat with your coaches right from the app.`
    },
    {
      question: "How much can I lose in 16 weeks?",
      answer: "Average fat loss for committed Challengers ranges from 10 to 30 pounds depending on starting point, how much someone has to lose, adherence, and metabolism. Some lose more, some choose to focus on recomposition and the scale doesn’t drop as much. We track body fat %, muscle mass, circumference measurements, and photos so you see progress from multiple angles, not just the scale."
    },
    {
      question: "How long does it take for a client to see results?",
      answer: "Most feel a difference in one week and see visible change by Week 4. Follow the plan, and the 16‑week finish line will showcase a major transformation you can document in side‑by‑side photos."
    },
    {
      question: "How many days per week do I have to exercise?",
      answer: "There’s no mandatory number. Healthy exercisers often see results by improving workout quality rather than adding days. Inconsistent or non‑exercisers start small, sometimes just 2-3 sessions a week, and build up. The pace depends on goals and lifestyle, not one‑size‑fits‑all rules. We will teach you how to do more with less, and we also teach you how to manage your time weekly so you can get more sessions in."
    },
    {
      question: "What kind of exercise do I have to do?",
      answer: "Ideally, a blend of resistance training and cardiovascular work. Resistance can be body weight, dumbbells, bands, or machines; cardio can be as simple as walking or as advanced as HIIT. We meet you where you’re at and scale appropriately."
    },
    {
      question: "Is This a Generic Plan?",
      answer: `No, the iFM Coaching Program is not a generic plan. It's a highly personalized program tailored to individual needs.
The program considers various factors such as your gender, age, height, weight, body fat, lifestyle, and specific fitness goals. Each aspect, from the meal plans to the workout routines, is customized based on your unique profile and personal preferences.`
    },
    {
      question: "How do you hold a client accountable if this is online coaching?",
      answer: `There are several layers of accountability.

Level 1 – Your coach – We monitor your daily habits, workout logs, and feedback in real time. If you go MIA, we come find you.
Level 2 – The Transformation Challenge Community – You’ll be side‑by‑side (virtually) with others on the same 16‑week journey.
Level 3 – The iFM Coaching App – Every day the app tells you exactly what to focus on and pings us when you complete (or skip) a task.
Level 4 – Coaching Sessions – You submit photos, measurements, and data every two weeks.

Needless to say, distance isn’t a barrier. We built the tech and systems to stay closer to you than most in‑person trainers ever could.`
    },
    {
      question: "Why would a client NOT get results?",
      answer: "The #1 reason is non‑execution. That’s why we emphasize coachability. Show up, communicate, and follow guidance and results follow. Hide, ghost, skip calls and progress stalls. Simple."
    },
    {
      question: "I’ve spent a lot of money on programs before. Why is this different?",
      answer: "We get it: you’ve seen slick sales pages that under‑deliver. That’s why the Transformation Challenge comes with a Money‑Back Guarantee. Do the work, submit your check‑ins, and if you’re not changing but you are executing at 85% in the first month, we refund you, no hard feelings and no questions asked."
    },
    {
      question: "How do you customize a meal plan?",
      answer: "Before writing your plan we run a thorough assessment with over 90 data points including age, gender, goals, lifestyle, food preferences, meal frequency, muscle mass, and more. The result is an ultra‑custom plan that flexes with you over the 16 weeks instead of locking you into the same meals every day."
    },
    {
      question: "Do I have to count macros?",
      answer: "No. If you love tracking, we’ll set you up. But 90% of clients prefer a simpler method. Our hand‑portion and habit‑based system keeps you on target without logging every gram, perfect for busy professionals."
    },
    {
      question: "Is this a low‑carb or keto type of diet?",
      answer: "No. After assessment we choose the approach that fits you. Low‑carb and keto work, but only if they suit your lifestyle or medical needs. Balanced plans with carbs, protein, and fats are usually more sustainable long term."
    },
    {
      question: "How do you customize a workout plan?",
      answer: "We use the same deep‑dive assessment. We consider your starting point, available equipment, injuries, schedule, and goals, then craft a cardio + resistance plan that evolves every 8 weeks throughout the Challenge."
    },
    {
      question: "I’m not a model but I want to transform so is this program not right for me?",
      answer: "Perfect! This program is for you. The professional photoshoot at the end celebrates your progress; it isn’t reserved for models. We guide real people like attorneys, doctors, entrepreneurs through poses and lighting so they walk away with images that capture their achievement."
    },
    {
      question: "Why do I need habit coaching?",
      answer: `Conventional thinking says you just need a plan to get results, but how many times have you purchased a plan only to abandon it?
A plan tells you what you need to do. A habit plan tells you how you need to do it. Inside the 16‑Week Transformation Challenge we break your journey into clear habit phases so you master one or two habits at 30mph, then we dial you up to 40mph, 50mph, and beyond. You get results without ever feeling you must slam the accelerator to 100mph.`
    },
    {
      question: "Why do I need mindset coaching?",
      answer: `Your mindset is made up of perspective, knowledge, attitude, and core traits like growth mindset, self‑discipline, and resilience. These areas shape how you approach every goal.
Most people approach a program believing they must be 100% perfect to succeed. When a day isn’t perfect, they assume the plan failed. That thinking is the real downfall. Mindset coaching upgrades your perspective so it keeps serving you. Mindset is the secret sauce.`
    },
    {
      question: "What is the challenge all about?",
      answer: `The challenge is about making a body transformation, plain and simple, BUT it's about creating a system that will almost guarantee your success.

We give you everything:
-- A start date and end date for increased focus
-- A celebration event/party at the end of the challenge
-- Professional photos so you can forever capture your transformation
-- Mindset coaching sessions so we can create your transformation from the inside out
-- A super specific meal plan for you
-- 16 weeks of workout routines
-- Most of all, coaching and guidance through our personal coaching`
    },
    {
      question: "Why Do I Need to Do a Photoshoot?",
      answer: `The Transformation challenge is based on our 4 pillars to get clients to execute their plans.

Our 4 Pillars to execution are:
1. Have a hard deadline (This cannot be moved)
2. Have a community of others going through it with you
3. Have the presences of healthy fear and pressure - this motivates people to MOVE mountains
4. Have an Grand EVENT to celebrate and have fun

The photoshoot serves as pillar #3 and #4. Take the photoshoot away, and now you have something you’re no longer scared of, which naturally lowers a person’s execution because the consequences of NOT executing are low.
By making the photoshoot NON negotiable, this will light a fire in you to EXECUTE like you never have before.`
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 md:mb-12 text-center">Frequently Asked Questions</h2>
        <div className="bg-slate-50 p-4 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};