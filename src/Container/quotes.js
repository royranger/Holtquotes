const quotes = {
  0: "He was a great partner. Smart, loyal. Homophobic but not racist. In those days that was pretty good.",
  1: "No need. I brought these. Nutrition bricks. I have original no flavor, and whole wheat no flavor.",
  2: "Nothing's okay. Wuntch is circling me like a shark frenzied by chum. The task force turning into a career-threatening quagmire. An Internal Affairs investigation casting doubt upon my integrity. And you ask, is everything okay? I am buffeted by the winds of my foe's enmity and cast about by the towering waves of cruel fate. Yet I, a Captain, am no longer able to command my vessel, my precinct, from my customary helm, my office. And you ask, is everything okay? I've worked the better part of my years on earth overcoming every prejudice and fighting for the position I hold, and now I feel it being ripped from my grasp, and with it the very essence of what defines me as a man. And you ask, is everything okay?",
  3: "Madeline. I wondered why all the birds had suddenly stopped singing. What brings you here?",
  4: "Oh, no, I've already consumed the required calories for this day period.",
  5: "Fun? I was never fun. You take that back.",
  6: "But you would have me hang a Baroque oil painting of myself like I'm a North Korean dictator. What, no ornate gold frame? Why am I not astride my noble steed, clad in armor?",
  7: "Captain Wuntch. Good to see you. But if you're here, who's guarding Hades?",
  8: "Well, who cares what he thinks? You're a police sergeant! You're a grown man! Now take your nap. And if I see the lights on in here, I'm going to be very disappointed in you.",
  9: "We're not going to fight her. She's the devil. And you don't dance with the devil because you get burned. Also, because in Madeline's case she has no rhythm, and her hands are like little rat claws.",
  10: "Please don't joke around in there. I know you're used to riffing with me, but Internal Affairs detectives rarely have my sense of humor.",
  11: "That's true. When I was seven, I used to sneak into my father's office to see his collection of antique globes.",
  12: "Oh, I've caused a problem. I think I am getting a text message. Bloop. Ah, there it is.",
  13: "There was a small fire in my home. I lost many photo albums of treasured memories. I'm devastated.",
  14: "Not much. When gay marriage was legalized, we're not sure if or when it was going to be struck down, so speed was of the essence.",
  15: "Look at that. You've helped me find my smile.",
  16: "I went to Barbados with my husband. We wove hats out of palm fronds and swam with the stingrays. I've never been happier.",
  17: "Yes, I suppose that's accurate. They do call me Tenacious Ray down at the country club. Because for the past ten years I've been suing them for discrimination.",
  18: "I know one of you took Cheddar, and you did it for the sake of the heist, but if anything happens to him, I will end you. I couldn't bring myself to neuter Cheddar, but I will neuter you all.",
  19: "Cheddar? Cheddar? Shake. Ah, good grip, pristine coat. That's my doggie! You betrayed me. You'll explain yourself later. Return to my office.",
  20: "Why? She gets it was a misunderstanding. She's a Teri, and you're a Terrance who, even though he's not a child, still goes by a nickname ending in a Y.",
  21: "Huh. Meat from the street. Sounds like a fun treat. Hah. I'm a poet and ... I didn't even know I was rhyming those words. But it happened anyway.",
  22: "White rice, brown rice. Those are just some of the rices I love.",
  23: "I have no thoughts about hummus.",
  24: "I'm doing a cost/benefit analysis in my head. The benefits outweigh the costs. We have reached an accord.",
  25: "I do not have a problem. If I want to play Kwazy Cupcakes, I will play Kwazy Cupcakes. Kwazy is a difficult word to say in anger, but I think I've made my feelings clear.",
  26: "My husband's dog, Cheddar, had relations with my neighbor's dog, Karate, and produced these two smaller dogs. He insisted I find them a good home with someone we trust.",
  27: "Drinks are on me. There's a two drink maximum per person. It is non-transferable. Your guests will pay their own tabs. Valet parking is not included. Tomorrow's briefing will be fifteen minutes earlier than usual. And, I'm very proud of you, Peralta. We missed you.",
  28: "I have zero interest in food. If it were feasible, my diet would consist entirely of flavorless beige smoothies containing all the nutrients required by the human animal.",
  29: "Please. When it comes to clothes, Cheddar wears little booties in the snow, or Cheddar wears nothing.",
  30: "Oh, no need. Now, for my first tweet, I think I should give an update on the water main break that's actually informative. 'NYC H20-Main SITREP: at 2040 ED current PSI 456 MAX CAP 204000 LPM.' Suck on that tasty lemon drop, Olivia Crawford.",
  31: "Why? I am a human. I am a human male.",
  32: "A code? Exciting. I'll go get my pencil case.",
  33: "All right, Peralta, I'm sick of you wasting time. So, yes, I spilled some minestrone on my pants and I'm sitting in my underwear. Happy?",
  34: "No. Over the course of my career, I've learned that it's best not to have hopes.",
  35: "Apparently my husband Kevin has invited you all to my party. There's very little street parking. No gifts. No singing of Happy Birthday. It should be fun.",
  36: "First of all, I think you're kind of overdoing it with the manscaping. But more importantly, detective, why do you refuse to take my orders seriously?",
  37: "Here are two pictures. One is your locker. The other is a garbage dump in the Philippines. Can you tell which is which.",
  38: "And I win again. Which is not surprising, given how you are both terrible. You don't even know the terminology.",
  39: "More importantly, Wuntch got served. Oh my god, Wuntch sounds like lunch. Oh, this opens up so many new avenues.",
  40: "That moustache was era-appropriate.",
  41: "Wait, why is the whole squad here? And why is everyone wearing my clothes? My God. You lost Cheddar.",
  42: " I make her uncomfortable? Well, that's ridiculous. I should go confront her about this at length.",
  43: "Do you want to hear the funniest thing ever? I also split an infinitive and she didn't notice.",
  44: "I know they say it's not good to have a TV in the bedroom. Which is why I don't.",
  45: "Maybe the old Holt did. But the new Holt chugs Beaujolais from a Burgundy glass without a care. Oh, it's a Sauternes glass. Look, the alcohol has rendered me a simpleton.",
  46: "Wow, betraying the FBI is one thing, but sarcasm, Bob? Wow.",
  47: "I've been asked to deliver a toast here after the funeral, a message of hope. This is what I have so far. 'Pain!' That's it.",
  48: "Why would you ever intentionally spill beans? They're one of nature's most densely packed protein sources, and they remain unsullied by flavor.",
  49: "If you screw this up, I will impeach you. I wrote the bylaws, so I know how to do it. But I'm very happy for you. But I will impeach you if necessary.",
  50: "It's been a pleasure talking with you about the duration of your flight. Good day.",
  51: "Interesting. I will attempt to co-operate with you under these new circumstances.",
  52: "All right, everyone, enough morning chitchat. Television happened, commutes were difficult, Boyle had a dream.",
  53: "Let me begin with a hilarious joke. I'm surprised I was on the short list for commissioner. After all, I am six feet tall.",
  54: "Also, I'd like to reiterate my gift policy: none allowed. Enjoy this Merry Season.",
  55: "This is an omelet. I only eat omelets on vacation.",
  56: "Well, Rosa, I read an article in a medical journal that said one destabilizing aspect of incarceration is the constant dehumanization, Rosa. You need to be reminded that you're more than just a number, Rosa. You are Rosa, Rosa.",
  57: "Oh, you and I both know what Mother Jeffords would say. Take the high road. But I asked you, Detective Diaz, because you understand vengeance.",
  58: "So what? I was voted least friendly in high school, and here I am, a police captain. Do you know what Mr. Popularity, Vincent Mondale, is doing these days? He's a sociologist, for God's sake. Sociologist, Terry.",
  59: "I'd like to play. I'd say she's in line at the bank. This is fun.",
  60: "Dancing over. Situation defused.",
  61: "Now you've done it. You've made me turn my chair. I will not get involved, and I will not have this office transformed into a house of snipes and jabs. Dismissed.",
  62: "There's nothing scarier than the realities of the municipal court system. Now, come on; Let's get back in there and tell him about how bad the website is.",
  63: "Hello, Kevin. It's me, Raymond Holt. We need to get you to safety. Your life is in danger.",
  64: "You're kidding. He's a world-renowned oboist, first chair with the New York Symphony Orchestra. Kevin and I are huge fans of Weichselbraun's work. We are what the Internet sometimes refers to as Weichselbraun fans.",
  65: "Yes, you're a massive tool. You're useful and valuable.",
  66: "Bad mood? I'm sorry, have I not being bursting into song enough for you lately? Would you like me to click my heels together or skip like a school child?",
  67: "And if you coat yourself in chum and swim with sharks, you probably won't be eaten. Said the half-eaten chum-covered swimmer.",
  68: "My doctor said I should be more active, but my squash club recently transitioned to racquetball. Since I'm not a dope-smoking hooligan, I decided to quit.",
  69: "We will exercise in silence. No headphones either. Music is a crutch.",
  70: " If Rosa were to jump off a cliff, she would've done her due diligence regarding the height of the cliff, the depth of the water, and the angle of entry, so yes. If you see Rosa jump off a cliff, by all means, jump off a cliff."

}

export default quotes;
