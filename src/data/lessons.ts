export interface VocabItem {
  word: string;
  reading?: string;
  meaning: string;
  audio?: string;
}

export interface GrammarPoint {
  title: string;
  explanation: string;
  examples: { japanese: string; romaji: string; english: string }[];
}

export interface ConversationLine {
  speaker: string;
  text: string;
  romaji: string;
  translation?: string;
}

export interface QuizQuestion {
  id: number;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export interface Lesson {
  id: number;
  title: string;
  description: string;
  vocabulary: VocabItem[];
  grammar: GrammarPoint[];
  conversations: ConversationLine[][];
  culturalNotes?: string[];
  quiz: QuizQuestion[];
}

export const lessons: Lesson[] = [
  {
    id: 1,
    title: "Greetings & Introductions",
    description: "Learn basic Japanese greetings and how to introduce yourself politely.",
    vocabulary: [
      { word: "こんにちは", reading: "konnichiwa", meaning: "Hello, Good afternoon" },
      { word: "おはようございます", reading: "ohayō gozaimasu", meaning: "Good morning" },
      { word: "こんばんは", reading: "konbanwa", meaning: "Good evening" },
      { word: "さようなら", reading: "sayōnara", meaning: "Goodbye" },
      { word: "ありがとうございます", reading: "arigatō gozaimasu", meaning: "Thank you" },
      { word: "すみません", reading: "sumimasen", meaning: "Excuse me, I'm sorry" },
      { word: "はじめまして", reading: "hajimemashite", meaning: "Nice to meet you (first time)" },
      { word: "どうぞよろしく", reading: "dōzo yoroshiku", meaning: "Please treat me well" },
      { word: "お元気ですか", reading: "ogenki desu ka", meaning: "How are you?" },
      { word: "元気です", reading: "genki desu", meaning: "I'm fine" },
    ],
    grammar: [
      {
        title: "Time-based Greetings",
        explanation: "In Japanese, greetings change based on the time of day. おはようございます (ohayō gozaimasu) is used in the morning, こんにちは (konnichiwa) during the day, and こんばんは (konbanwa) in the evening.",
        examples: [
          { japanese: "おはようございます。", romaji: "Ohayō gozaimasu.", english: "Good morning." },
          { japanese: "こんにちは。元気ですか。", romaji: "Konnichiwa. Genki desu ka.", english: "Hello. How are you?" },
          { japanese: "こんばんは。", romaji: "Konbanwa.", english: "Good evening." },
        ],
      },
      {
        title: "Introduction Pattern: はじめまして",
        explanation: "When meeting someone for the first time, use はじめまして (hajimemashite) followed by your name with です (desu), then finish with どうぞよろしくお願いします (dōzo yoroshiku onegaishimasu).",
        examples: [
          { japanese: "はじめまして。田中です。どうぞよろしく。", romaji: "Hajimemashite. Tanaka desu. Dōzo yoroshiku.", english: "Nice to meet you. I'm Tanaka. Please treat me well." },
          { japanese: "はじめまして。ソフィアです。よろしくお願いします。", romaji: "Hajimemashite. Sofia desu. Yoroshiku onegaishimasu.", english: "Nice to meet you. I'm Sofia. Pleased to meet you." },
        ],
      },
      {
        title: "です (desu) - 'to be'",
        explanation: "です (desu) is a copula that means 'is/am/are'. It's used to state facts politely. In casual speech, it can be dropped.",
        examples: [
          { japanese: "私は学生です。", romaji: "Watashi wa gakusei desu.", english: "I am a student." },
          { japanese: "これは本です。", romaji: "Kore wa hon desu.", english: "This is a book." },
        ],
      },
    ],
    conversations: [
      [
        { speaker: "Naraya Ramos", text: "こんにちは。", romaji: "Konnichiwa.", translation: "Hello." },
        { speaker: "Ichiro Tanabi", text: "こんにちは。どうぞお入りください。", romaji: "Konnichiwa. Dōzo ohairi kudasai.", translation: "Hello. Please come in." },
        { speaker: "Naraya Ramos", text: "ありがとうございます。", romaji: "Arigatō gozaimasu.", translation: "Thank you." },
      ],
      [
        { speaker: "Rai Tanabi", text: "お茶はいかがですか。", romaji: "Ocha wa ikaga desu ka.", translation: "How about a cup of green tea?" },
        { speaker: "Dante Ibarra", text: "はい、ありがとうございます。", romaji: "Hai, arigatō gozaimasu.", translation: "Yes, thank you." },
      ],
      [
        { speaker: "Rai Tanabi", text: "どうぞ。", romaji: "Dōzo.", translation: "Here it is." },
        { speaker: "Dante Ibarra", text: "ありがとうございます。このスプーンは素敵ですね。", romaji: "Arigatō gozaimasu. Kono supūn wa suteki desu ne.", translation: "Thank you. This spoon is nice, isn't it?" },
        { speaker: "Rai Tanabi", text: "はい、そうです。会社の人がヨーロッパ旅行のお土産にくれました。", romaji: "Hai, sō desu. Kaisha no hito ga Yōroppa ryokō no omiyage ni kuremashita.", translation: "Yes, it is. Someone in my company gave it to me as a souvenir of her trip to Europe." },
      ],
    ],
    culturalNotes: [
      "In Japan, bowing is an important part of greetings. The deeper the bow, the more respect shown.",
      "When meeting someone for the first time in a business setting, exchange business cards (名刺 - meishi) with both hands.",
      "When moving to a new neighborhood, it's customary to introduce yourself to neighbors with a small gift like towels, soap, or sweets (ほんの気持ちです - honno kimochi desu).",
    ],
    quiz: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "What does 'こんにちは' mean in English?",
        options: ["Good morning", "Hello/Good afternoon", "Goodbye", "Please"],
        correctAnswer: "Hello/Good afternoon",
        explanation: "こんにちは (konnichiwa) is used as a general greeting during the daytime.",
      },
      {
        id: 2,
        type: 'true-false',
        question: "True or False: 'さようなら' means 'See you later'.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "さようなら (sayōnara) is used when parting, especially when you won't see the person for a while.",
      },
      {
        id: 3,
        type: 'fill-blank',
        question: "Fill in the blank: 'はじめまして。田中____。' means 'Nice to meet you. I'm Tanaka.'",
        options: ["です", "は", "を", "に"],
        correctAnswer: "です",
        explanation: "です (desu) is used after a name to mean 'I am [name]'.",
      },
      {
        id: 4,
        type: 'multiple-choice',
        question: "Which greeting would you use in the morning?",
        options: ["こんにちは", "こんばんは", "おはようございます", "さようなら"],
        correctAnswer: "おはようございます",
        explanation: "おはようございます (ohayō gozaimasu) is the polite morning greeting.",
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "What is the polite way to say 'thank you'?",
        options: ["すみません", "ありがとうございます", "ごめんなさい", "いただきます"],
        correctAnswer: "ありがとうございます",
        explanation: "ありがとうございます (arigatō gozaimasu) is the polite form of 'thank you'.",
      },
    ],
  },
  {
    id: 2,
    title: "Demonstratives & Objects",
    description: "Learn how to identify and talk about objects using demonstratives (this, that, that over there).",
    vocabulary: [
      { word: "これ", reading: "kore", meaning: "this (thing here)" },
      { word: "それ", reading: "sore", meaning: "that (thing near you)" },
      { word: "あれ", reading: "are", meaning: "that (thing over there)" },
      { word: "この", reading: "kono", meaning: "this ~ (modifier)" },
      { word: "その", reading: "sono", meaning: "that ~ (modifier)" },
      { word: "あの", reading: "ano", meaning: "that ~ over there (modifier)" },
      { word: "本", reading: "hon", meaning: "book" },
      { word: "辞書", reading: "jisho", meaning: "dictionary" },
      { word: "雑誌", reading: "zasshi", meaning: "magazine" },
      { word: "新聞", reading: "shinbun", meaning: "newspaper" },
      { word: "手帳", reading: "techō", meaning: "pocket notebook" },
      { word: "名刺", reading: "meishi", meaning: "business card" },
      { word: "鉛筆", reading: "enpitsu", meaning: "pencil" },
      { word: "鍵", reading: "kagi", meaning: "key" },
      { word: "時計", reading: "tokei", meaning: "watch, clock" },
      { word: "傘", reading: "kasa", meaning: "umbrella" },
      { word: "鞄", reading: "kaban", meaning: "bag, briefcase" },
      { word: "自動車", reading: "jidōsha", meaning: "automobile, car" },
      { word: "車", reading: "kuruma", meaning: "car" },
      { word: "机", reading: "tsukue", meaning: "desk" },
      { word: "椅子", reading: "isu", meaning: "chair" },
      { word: "ノート", reading: "nōto", meaning: "notebook" },
      { word: "テレホンカード", reading: "terehon kādo", meaning: "telephone card" },
      { word: "カセットテープ", reading: "kasetto tēpu", meaning: "cassette tape" },
      { word: "ボールペン", reading: "bōrupen", meaning: "ballpoint pen" },
      { word: "シャープペンシル", reading: "shāpu penshiru", meaning: "mechanical pencil" },
      { word: "テープレコーダー", reading: "tēpu rekōdā", meaning: "tape recorder" },
      { word: "テレビ", reading: "terebi", meaning: "television" },
      { word: "ラジオ", reading: "rajio", meaning: "radio" },
      { word: "カメラ", reading: "kamera", meaning: "camera" },
      { word: "コンピュータ", reading: "konpyūta", meaning: "computer" },
      { word: "チョコレート", reading: "chokorēto", meaning: "chocolate" },
      { word: "コーヒー", reading: "kōhī", meaning: "coffee" },
    ],
    grammar: [
      {
        title: "Kore / Sore / Are (Demonstrative Pronouns)",
        explanation: "これ (kore), それ (sore), and あれ (are) are demonstratives that work as nouns. これ refers to things near the speaker, それ refers to things near the listener, and あれ refers to things far from both.",
        examples: [
          { japanese: "これは雑誌ですか。", romaji: "Kore wa zasshi desu ka.", english: "Is that a magazine?" },
          { japanese: "それは鍵です。", romaji: "Sore wa kagi desu.", english: "That is a key." },
          { japanese: "あれは何ですか。", romaji: "Are wa nan desu ka.", english: "What is that (over there)?" },
        ],
      },
      {
        title: "Kono / Sono / Ano (Demonstrative Modifiers)",
        explanation: "この (kono), その (sono), and あの (ano) modify nouns. They must be followed by a noun and cannot stand alone.",
        examples: [
          { japanese: "このノートは私のです。", romaji: "Kono nōto wa watashi no desu.", english: "This notebook is mine." },
          { japanese: "その鞄は誰のですか。", romaji: "Sono kaban wa dare no desu ka.", english: "Whose bag is that?" },
          { japanese: "あの人は誰ですか。", romaji: "Ano hito wa dare desu ka.", english: "Who is that person?" },
        ],
      },
      {
        title: "N1 no N2 (Possessive Particle)",
        explanation: "の (no) connects two nouns. It can indicate possession (N1 modifies N2) or explain what N2 is about. When N2 means a person, の cannot be omitted.",
        examples: [
          { japanese: "これは車の雑誌です。", romaji: "Kore wa kuruma no zasshi desu.", english: "This is a magazine of cars." },
          { japanese: "これは私の雑誌です。", romaji: "Kore wa watashi no zasshi desu.", english: "This is my magazine." },
          { japanese: "田中さんの本です。", romaji: "Tanaka-san no hon desu.", english: "It's Mr. Tanaka's book." },
        ],
      },
      {
        title: "S1 ka, S2 ka (Either/Or Questions)",
        explanation: "This question asks the listener to choose between alternatives S1 and S2. The answer uses either はい (hai - yes) or いいえ (iie - no).",
        examples: [
          { japanese: "これは雑誌ですか、新聞ですか。 - 雑誌です。", romaji: "Kore wa zasshi desu ka, shinbun desu ka. - Zasshi desu.", english: "Is this a magazine or a newspaper? - It's a magazine." },
        ],
      },
      {
        title: "そうですか (I see / Is that so?)",
        explanation: "This expression is used when the speaker receives new information and shows understanding. It expresses acknowledgment.",
        examples: [
          { japanese: "A: これは田中さんのです。B: そうですか。", romaji: "A: Kore wa Tanaka-san no desu. B: Sō desu ka.", english: "A: This is Mr. Tanabi's. B: I see." },
        ],
      },
    ],
    conversations: [
      [
        { speaker: "Ramos", text: "はい。どなたですか。", romaji: "Hai. Donata desu ka.", translation: "Yes. Who is it?" },
        { speaker: "Ibarra", text: "583号のイバラです。", romaji: "583-gō no Ibarra desu.", translation: "I am Dante Ibarra from apartment 583." },
      ],
      [
        { speaker: "Ibarra", text: "こんにちは。イバラです。はじめまして。どうぞよろしく。", romaji: "Konnichiwa. Ibarra desu. Hajimemashite. Dōzo yoroshiku.", translation: "Hello. I am Dante Ibarra. How do you do? It is nice to meet you." },
        { speaker: "Ramos", text: "こちらこそ。うーん、これは何ですか。", romaji: "Kochira koso. Ūn, kore wa nan desu ka.", translation: "The pleasure's mine. Hmm, this is a little something..." },
        { speaker: "Ibarra", text: "チョコレートです。どうぞ。", romaji: "Chokorēto desu. Dōzo.", translation: "Oh, thank you. What is it? It's chocolate. Please." },
        { speaker: "Ramos", text: "どうもありがとうございます。", romaji: "Dōmo arigatō gozaimasu.", translation: "Thank you very much." },
      ],
    ],
    culturalNotes: [
      "When people meet for the first time on business, business cards are exchanged using 'はじめまして' (hajimemashite).",
      "When you move house, it is polite to introduce yourself to your neighbors and give them a small gift, such as towel, soap, or sweets, saying 'ほんの気持ちです' (honno kimochi desu - it's nothing/it's a token of my gratitude).",
    ],
    quiz: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Which word means 'this (thing here)'?",
        options: ["これ", "それ", "あれ", "どれ"],
        correctAnswer: "これ",
        explanation: "これ (kore) refers to something close to the speaker.",
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "What is the correct particle to show possession in '田中____本' (Tanaka's book)?",
        options: ["の", "は", "を", "に"],
        correctAnswer: "の",
        explanation: "の (no) is the possessive particle connecting two nouns.",
      },
      {
        id: 3,
        type: 'true-false',
        question: "True or False: 'この' can be used alone without a noun.",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "この (kono) is a modifier and must be followed by a noun. Use これ (kore) to stand alone.",
      },
      {
        id: 4,
        type: 'fill-blank',
        question: "Fill in the blank: 'これは手帳____か、新聞ですか。' (Is this a pocket notebook or a newspaper?)",
        options: ["です", "か", "の", "は"],
        correctAnswer: "です",
        explanation: "です is used before か in either/or questions.",
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "What does 'そうですか' mean?",
        options: ["I see / Is that so?", "This is a key", "What is that?", "It's mine"],
        correctAnswer: "I see / Is that so?",
        explanation: "そうですか is used to acknowledge new information.",
      },
    ],
  },
  {
    id: 3,
    title: "Grammar Particles (de & ni)",
    description: "Learn essential Japanese particles 'de' (method/means) and understand giving/receiving verbs with 'ni'.",
    vocabulary: [
      { word: "手", reading: "te", meaning: "hand, arm" },
      { word: "箸", reading: "hashi", meaning: "chopsticks" },
      { word: "はさみ", reading: "hasami", meaning: "scissors" },
      { word: "紙", reading: "kami", meaning: "paper" },
      { word: "花", reading: "hana", meaning: "flower" },
      { word: "荷物", reading: "nimotsu", meaning: "baggage, parcel" },
      { word: "お金", reading: "okane", meaning: "money" },
      { word: "切符", reading: "kippu", meaning: "ticket" },
      { word: "父", reading: "chichi", meaning: "(my) father" },
      { word: "母", reading: "haha", meaning: "(my) mother" },
      { word: "お父さん", reading: "otōsan", meaning: "(someone else's) father" },
      { word: "お母さん", reading: "okāsan", meaning: "(someone else's) mother" },
      { word: "もう", reading: "mō", meaning: "already, also, too" },
      { word: "まだ", reading: "mada", meaning: "not yet" },
      { word: "これから", reading: "korekara", meaning: "from now on, soon" },
    ],
    grammar: [
      {
        title: "N (tool/means) de V - Using a tool or method",
        explanation: "The particle で (de) indicates a method or a mean used for an action. It shows what tool or method you use to perform the verb.",
        examples: [
          { japanese: "箸で食べます。", romaji: "Hashi de tabemasu.", english: "I eat with chopsticks." },
          { japanese: "日本語でレポートを書きます。", romaji: "Nihongo de repōto wo kakimasu.", english: "I write reports in Japanese." },
        ],
      },
      {
        title: "'Word / sentence' wa ~ de nan desu ka",
        explanation: "This question is used to ask how to say a word or a sentence in other languages.",
        examples: [
          { japanese: "'Arigatō' は英語で何ですか。 - 'Thank You'です。", romaji: "'Arigatō' wa eigo de nan desu ka. - 'Thank You' desu.", english: "What is 'arigatō' in English? - It's 'Thank You'." },
        ],
      },
      {
        title: "N (person) ni agemasu / kashimasu / oshiemasu, etc.",
        explanation: "Verbs like あげます (give), 貸します (lend), 教えます (teach) need persons to whom you give, lend, teach, etc. The persons are marked with 'に' (ni).",
        examples: [
          { japanese: "田中さんは ラモスさんに 花をあげました。", romaji: "Tanaka-san wa Ramosu-san ni hana wo agemashita.", english: "Mr. Tanabi gave flowers to Miss Ramos." },
          { japanese: "サントスさんに 本を貸しました。", romaji: "Santosu-san ni hon wo kashimashita.", english: "I lent my book to Mr. Santos." },
          { japanese: "ナルトくんに 英語を教えます。", romaji: "Naruto-kun ni eigo wo oshiemasu.", english: "I teach Naruto English." },
        ],
      },
      {
        title: "N (person) ni moraimasu / karimasu / naraimasu, etc.",
        explanation: "Verbs like もらいます (receive), 借ります (borrow), 習います (learn) express actions from the receiving side. The persons from whom you receive those actions are marked with 'に' (ni).",
        examples: [
          { japanese: "ラモスさんは 田中さんに 花をもらいました。", romaji: "Ramosu-san wa Tanaka-san ni hana wo moraimashita.", english: "Miss Ramos received flowers from Mr. Tanabi." },
          { japanese: "イバラさんに CDを借りました。", romaji: "Ibara-san ni CD wo karimashita.", english: "I borrowed CD from Mr. Ibarra." },
          { japanese: "ワンさんに 中国語を習います。", romaji: "Wan-san ni chūgokugo wo naraimasu.", english: "I learn Chinese from Mr. Wang." },
        ],
      },
      {
        title: "もう V-mashita (already finished action)",
        explanation: "もう (mō) means 'already' and is used with V-ました (mashita) to indicate that the action has been finished. The answer to questions with もう can be はい、もう V-ました (positive) or いいえ、まだです (negative - no, not yet).",
        examples: [
          { japanese: "もう 切符を送りましたか。- はい、もう送りました。", romaji: "Mō kippu wo okurimashita ka. - Hai, mō okurimashita.", english: "Have you sent the ticket yet? - Yes, I have already sent it." },
          { japanese: "もう 切符を送りましたか。- いいえ、まだです。", romaji: "Mō kippu wo okurimashita ka. - Iie, mada desu.", english: "Have you sent the ticket yet? - No, not yet." },
        ],
      },
    ],
    conversations: [
      [
        { speaker: "Alex", text: "こんにちは、元気ですか。", romaji: "Konnichiwa, genki desu ka.", translation: "Hello, how are you?" },
        { speaker: "Sophia", text: "元気です、ありがとう。あなたは？", romaji: "Genki desu, arigatō. Anata wa?", translation: "I'm well, thank you. And you?" },
        { speaker: "Alex", text: "元気です。じゃあ、またね！", romaji: "Genki desu. Jā, mata ne!", translation: "I'm well too. See you later!" },
      ],
    ],
    culturalNotes: [
      "In Japanese, different words are used for your own family members vs. someone else's. For example, 父 (chichi) is 'my father' while お父さん (otōsan) is 'your/his father'.",
      "When answering negative questions with もう, you should NOT use V-ませんでした as this simply means 'you did not do the specified task', rather than you have not done it yet. Use まだです instead.",
    ],
    quiz: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "Which particle indicates the tool or method used for an action?",
        options: ["は", "を", "で", "に"],
        correctAnswer: "で",
        explanation: "で (de) is used to show the tool, means, or method.",
      },
      {
        id: 2,
        type: 'fill-blank',
        question: "Fill in the blank: '箸____食べます。' (I eat with chopsticks)",
        options: ["で", "に", "を", "は"],
        correctAnswer: "で",
        explanation: "で indicates the tool used for the action.",
      },
      {
        id: 3,
        type: 'multiple-choice',
        question: "What is the correct response to 'もう切符を送りましたか' if you haven't sent it yet?",
        options: ["はい、送りました", "いいえ、まだです", "はい、まだです", "いいえ、送りました"],
        correctAnswer: "いいえ、まだです",
        explanation: "まだです means 'not yet' and is the correct negative response.",
      },
      {
        id: 4,
        type: 'true-false',
        question: "True or False: '田中さんに花をあげました' means 'I gave flowers to Mr. Tanaka'.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "に marks the person to whom you give something.",
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "How do you say '(my) father' in Japanese?",
        options: ["お父さん", "父", "お母さん", "母"],
        correctAnswer: "父",
        explanation: "父 (chichi) is used for your own father. お父さん (otōsan) is for someone else's father.",
      },
    ],
  },
  {
    id: 4,
    title: "Family & Relationships",
    description: "Learn Japanese family terms and how to talk about family members and relationships.",
    vocabulary: [
      { word: "祖母", reading: "sobo", meaning: "grandmother (my)" },
      { word: "祖父", reading: "sofu", meaning: "grandfather (my)" },
      { word: "おばあさん", reading: "obāsan", meaning: "grandmother (someone else's)" },
      { word: "おじいさん", reading: "ojīsan", meaning: "grandfather (someone else's)" },
      { word: "母", reading: "haha", meaning: "mother (my)" },
      { word: "父", reading: "chichi", meaning: "father (my)" },
      { word: "お母さん", reading: "okāsan", meaning: "mother (someone else's)" },
      { word: "お父さん", reading: "otōsan", meaning: "father (someone else's)" },
      { word: "両親", reading: "ryōshin", meaning: "parents" },
      { word: "ご両親", reading: "goryōshin", meaning: "parents (honorific)" },
      { word: "妹", reading: "imōto", meaning: "younger sister (my)" },
      { word: "弟", reading: "otōto", meaning: "younger brother (my)" },
      { word: "姉", reading: "ane", meaning: "elder sister (my)" },
      { word: "兄", reading: "ani", meaning: "elder brother (my)" },
      { word: "お姉さん", reading: "onēsan", meaning: "elder sister (someone else's)" },
      { word: "お兄さん", reading: "onīsan", meaning: "elder brother (someone else's)" },
      { word: "兄弟", reading: "kyōdai", meaning: "brothers & sisters" },
      { word: "ご兄弟", reading: "gokyōdai", meaning: "brothers & sisters (honorific)" },
      { word: "夫", reading: "otto", meaning: "husband (my)" },
      { word: "妻", reading: "tsuma", meaning: "wife (my)" },
      { word: "ご主人", reading: "goshujin", meaning: "husband (someone else's)" },
      { word: "奥さん", reading: "okusan", meaning: "wife (someone else's)" },
      { word: "夫婦", reading: "fūfu", meaning: "husband & wife" },
      { word: "ご夫婦", reading: "gofūfu", meaning: "husband & wife (honorific)" },
      { word: "娘", reading: "musume", meaning: "daughter" },
      { word: "息子", reading: "musuko", meaning: "son" },
      { word: "お子さん", reading: "okosan", meaning: "children (honorific)" },
    ],
    grammar: [
      {
        title: "Family Terms: Plain vs. Honorific",
        explanation: "Japanese has two sets of family terms: plain forms for your own family and honorific forms (with お/ご prefix) for other people's families. This distinction shows respect.",
        examples: [
          { japanese: "私の父は医者です。", romaji: "Watashi no chichi wa isha desu.", english: "My father is a doctor." },
          { japanese: "田中さんのお父さんは何をしていますか。", romaji: "Tanaka-san no otōsan wa nani wo shite imasu ka.", english: "What does your father do, Mr. Tanaka?" },
        ],
      },
      {
        title: "Counting Family Members",
        explanation: "When talking about family, Japanese uses specific terms and counters. The word 家族 (kazoku) means family.",
        examples: [
          { japanese: "家族は何人ですか。", romaji: "Kazoku wa nan-nin desu ka.", english: "How many people are in your family?" },
          { japanese: "五人家族です。", romaji: "Go-nin kazoku desu.", english: "We are a family of five." },
        ],
      },
    ],
    conversations: [
      [
        { speaker: "Yamada", text: "ご家族は何人ですか。", romaji: "Gokazoku wa nan-nin desu ka.", translation: "How many people are in your family?" },
        { speaker: "田中", text: "四人家族です。両親と兄と私です。", romaji: "Yo-nin kazoku desu. Ryōshin to ani to watashi desu.", translation: "We are a family of four. My parents, my older brother, and me." },
        { speaker: "Yamada", text: "お兄さんは何をしていますか。", romaji: "Onīsan wa nani wo shite imasu ka.", translation: "What does your older brother do?" },
        { speaker: "田中", text: "会社員です。", romaji: "Kaishain desu.", translation: "He's a company employee." },
      ],
    ],
    culturalNotes: [
      "Family relationships are very important in Japanese culture. The language reflects this with detailed terminology for each family member based on age and relationship.",
      "When referring to your own family to outsiders, use the plain forms (父、母、兄、etc.). When referring to someone else's family or addressing your own family members directly, use honorific forms (お父さん、お母さん、etc.).",
    ],
    quiz: [
      {
        id: 1,
        type: 'multiple-choice',
        question: "How do you say 'my father' when talking to someone outside your family?",
        options: ["お父さん", "父", "おじいさん", "兄"],
        correctAnswer: "父",
        explanation: "父 (chichi) is the plain form used when referring to your own father to others.",
      },
      {
        id: 2,
        type: 'multiple-choice',
        question: "Which word means 'older sister (someone else's)'?",
        options: ["姉", "妹", "お姉さん", "お兄さん"],
        correctAnswer: "お姉さん",
        explanation: "お姉さん (onēsan) is the honorific form for someone else's older sister.",
      },
      {
        id: 3,
        type: 'true-false',
        question: "True or False: '兄弟' (kyōdai) means 'brothers and sisters'.",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "兄弟 (kyōdai) refers to siblings in general.",
      },
      {
        id: 4,
        type: 'fill-blank',
        question: "Fill in the blank: '田中さんの____は医者です。' when asking about Tanaka's father",
        options: ["お父さん", "父", "おじいさん", "兄"],
        correctAnswer: "お父さん",
        explanation: "Use the honorific お父さん when referring to someone else's father.",
      },
      {
        id: 5,
        type: 'multiple-choice',
        question: "What does 'ご両親' mean?",
        options: ["My parents", "Parents (honorific)", "Grandparents", "Children"],
        correctAnswer: "Parents (honorific)",
        explanation: "ご両親 (goryōshin) is the respectful way to refer to someone else's parents.",
      },
    ],
  },
];

export function getLessonById(id: number): Lesson | undefined {
  return lessons.find(lesson => lesson.id === id);
}

export function getAllLessons(): Lesson[] {
  return lessons;
}

