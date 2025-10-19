export interface Stroke {
  path: string;
  order: number;
  direction?: 'start' | 'end';
}

export interface AlphabetCharacter {
  character: string;
  romaji: string;
  audio?: string;
  strokes: Stroke[];
  examples?: string[];
}

export interface AlphabetSet {
  name: string;
  description: string;
  characters: AlphabetCharacter[];
}

// Hiragana characters organized by rows
export const hiraganaData: AlphabetSet = {
  name: "Hiragana",
  description: "The basic Japanese phonetic alphabet used for native Japanese words",
  characters: [
    // A-row (vowels) - Accurate stroke order based on Japanese standards
    { character: "あ", romaji: "a", strokes: [
      { path: "M 20 15 Q 30 5 40 15 Q 50 25 40 35 Q 30 45 20 35 Q 10 25 20 15", order: 1 },
      { path: "M 25 20 L 25 50", order: 2 },
      { path: "M 25 35 L 40 35", order: 3 }
    ], examples: ["あめ (ame) - rain", "あさ (asa) - morning"] },
    { character: "い", romaji: "i", strokes: [
      { path: "M 15 20 Q 10 30 15 40 Q 20 50 15 60", order: 1 },
      { path: "M 35 20 Q 30 30 35 40 Q 40 50 35 60", order: 2 }
    ], examples: ["いえ (ie) - house", "いぬ (inu) - dog"] },
    { character: "う", romaji: "u", strokes: [
      { path: "M 20 20 L 20 40", order: 1 },
      { path: "M 20 40 Q 30 50 40 40 Q 50 30 40 20", order: 2 }
    ], examples: ["うみ (umi) - sea", "うた (uta) - song"] },
    { character: "え", romaji: "e", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 Q 30 20 40 30 Q 50 40 40 50", order: 2 },
      { path: "M 20 50 L 40 50", order: 3 }
    ], examples: ["えき (eki) - station", "えんぴつ (enpitsu) - pencil"] },
    { character: "お", romaji: "o", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 Q 30 20 40 30 Q 50 40 40 50", order: 2 },
      { path: "M 20 50 L 40 50", order: 3 }
    ], examples: ["おかね (okane) - money", "おちゃ (ocha) - tea"] },
    
    // K-row
    { character: "か", romaji: "ka", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 }
    ], examples: ["かばん (kaban) - bag", "かみ (kami) - paper"] },
    { character: "き", romaji: "ki", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 }
    ], examples: ["き (ki) - tree", "きれい (kirei) - beautiful"] },
    { character: "く", romaji: "ku", strokes: [
      { path: "M 20 20 Q 30 30 40 20", order: 1 }
    ], examples: ["くつ (kutsu) - shoes", "くも (kumo) - cloud"] },
    { character: "け", romaji: "ke", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 }
    ], examples: ["けんきゅう (kenkyuu) - research", "けしごむ (keshigomu) - eraser"] },
    { character: "こ", romaji: "ko", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 40 L 40 40", order: 2 }
    ], examples: ["こども (kodomo) - child", "こんにちは (konnichiwa) - hello"] },
    
    // S-row
    { character: "さ", romaji: "sa", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 }
    ], examples: ["さくら (sakura) - cherry blossom", "さかな (sakana) - fish"] },
    { character: "し", romaji: "shi", strokes: [
      { path: "M 30 20 Q 20 30 30 40 Q 40 50 30 60", order: 1 }
    ], examples: ["しんぶん (shinbun) - newspaper", "しろ (shiro) - white"] },
    { character: "す", romaji: "su", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 50 40 40", order: 2 }
    ], examples: ["すし (sushi) - sushi", "すみません (sumimasen) - excuse me"] },
    { character: "せ", romaji: "se", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 }
    ], examples: ["せんせい (sensei) - teacher", "せかい (sekai) - world"] },
    { character: "そ", romaji: "so", strokes: [
      { path: "M 20 20 Q 30 10 40 20 Q 50 30 40 40 Q 30 50 20 40", order: 1 }
    ], examples: ["そら (sora) - sky", "そば (soba) - buckwheat noodles"] },
    
    // T-row
    { character: "た", romaji: "ta", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 }
    ], examples: ["たべもの (tabemono) - food", "たのしい (tanoshii) - fun"] },
    { character: "ち", romaji: "chi", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 }
    ], examples: ["ちち (chichi) - father", "ちいさい (chiisai) - small"] },
    { character: "つ", romaji: "tsu", strokes: [
      { path: "M 20 30 Q 30 20 40 30", order: 1 }
    ], examples: ["つくえ (tsukue) - desk", "つき (tsuki) - moon"] },
    { character: "て", romaji: "te", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 }
    ], examples: ["て (te) - hand", "てんき (tenki) - weather"] },
    { character: "と", romaji: "to", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 }
    ], examples: ["とけい (tokei) - clock", "とし (toshi) - year"] },
    
    // N-row
    { character: "な", romaji: "na", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 }
    ], examples: ["なまえ (namae) - name", "なつ (natsu) - summer"] },
    { character: "に", romaji: "ni", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 }
    ], examples: ["にほん (nihon) - Japan", "にちようび (nichiyoubi) - Sunday"] },
    { character: "ぬ", romaji: "nu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 }
    ], examples: ["ぬの (nuno) - cloth", "ぬいぐるみ (nuigurumi) - stuffed animal"] },
    { character: "ね", romaji: "ne", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 }
    ], examples: ["ねこ (neko) - cat", "ねる (neru) - sleep"] },
    { character: "の", romaji: "no", strokes: [
      { path: "M 20 20 Q 30 10 40 20 Q 50 30 40 40 Q 30 50 20 40 Q 10 30 20 20", order: 1 }
    ], examples: ["の (no) - possessive particle", "のり (nori) - seaweed"] },
    
    // H-row
    { character: "は", romaji: "ha", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 }
    ], examples: ["はな (hana) - flower", "はし (hashi) - chopsticks"] },
    { character: "ひ", romaji: "hi", strokes: [
      { path: "M 20 20 Q 30 10 40 20 Q 50 30 40 40 Q 30 50 20 40 Q 10 30 20 20", order: 1 }
    ], examples: ["ひ (hi) - sun", "ひこうき (hikouki) - airplane"] },
    { character: "ふ", romaji: "fu", strokes: [
      { path: "M 20 20 Q 30 10 40 20 Q 50 30 40 40 Q 30 50 20 40 Q 10 30 20 20", order: 1 },
      { path: "M 30 20 L 30 60", order: 2 }
    ], examples: ["ふね (fune) - ship", "ふく (fuku) - clothes"] },
    { character: "へ", romaji: "he", strokes: [
      { path: "M 20 30 Q 30 20 40 30", order: 1 }
    ], examples: ["へや (heya) - room", "へん (hen) - strange"] },
    { character: "ほ", romaji: "ho", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 }
    ], examples: ["ほん (hon) - book", "ほし (hoshi) - star"] },
    
    // M-row
    { character: "ま", romaji: "ma", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 }
    ], examples: ["まち (machi) - town", "まど (mado) - window"] },
    { character: "み", romaji: "mi", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 }
    ], examples: ["みず (mizu) - water", "みち (michi) - road"] },
    { character: "む", romaji: "mu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 }
    ], examples: ["むし (mushi) - insect", "むずかしい (muzukashii) - difficult"] },
    { character: "め", romaji: "me", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 }
    ], examples: ["め (me) - eye", "めがね (megane) - glasses"] },
    { character: "も", romaji: "mo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 }
    ], examples: ["もも (momo) - peach", "もん (mon) - gate"] },
    
    // Y-row
    { character: "や", romaji: "ya", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 },
      { path: "M 20 -70 L 40 -80", order: 18 }
    ], examples: ["やま (yama) - mountain", "やさい (yasai) - vegetable"] },
    { character: "ゆ", romaji: "yu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 },
      { path: "M 20 10 Q 30 0 40 10", order: 5 }
    ], examples: ["ゆき (yuki) - snow", "ゆめ (yume) - dream"] },
    { character: "よ", romaji: "yo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 },
      { path: "M 20 -70 L 40 -80", order: 18 },
      { path: "M 20 -80 L 40 -90", order: 19 }
    ], examples: ["よる (yoru) - night", "よし (yoshi) - good"] },
    
    // R-row
    { character: "ら", romaji: "ra", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 }
    ], examples: ["らく (raku) - easy", "らめん (ramen) - ramen"] },
    { character: "り", romaji: "ri", strokes: [
      { path: "M 15 20 L 15 60", order: 1 },
      { path: "M 35 20 L 35 60", order: 2 }
    ], examples: ["りんご (ringo) - apple", "りょこう (ryokou) - travel"] },
    { character: "る", romaji: "ru", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 },
      { path: "M 20 10 Q 30 0 40 10", order: 5 },
      { path: "M 20 0 Q 30 -10 40 0", order: 6 }
    ], examples: ["るす (rusu) - absence", "るい (rui) - kind"] },
    { character: "れ", romaji: "re", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 },
      { path: "M 20 -70 L 40 -80", order: 18 },
      { path: "M 20 -80 L 40 -90", order: 19 },
      { path: "M 20 -90 L 40 -100", order: 20 }
    ], examples: ["れんしゅう (renshuu) - practice", "れきし (rekishi) - history"] },
    { character: "ろ", romaji: "ro", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 },
      { path: "M 20 10 Q 30 0 40 10", order: 5 },
      { path: "M 20 0 Q 30 -10 40 0", order: 6 },
      { path: "M 20 -10 Q 30 -20 40 -10", order: 7 }
    ], examples: ["ろく (roku) - six", "ろうか (rouka) - corridor"] },
    
    // W-row
    { character: "わ", romaji: "wa", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 },
      { path: "M 20 10 Q 30 0 40 10", order: 5 },
      { path: "M 20 0 Q 30 -10 40 0", order: 6 },
      { path: "M 20 -10 Q 30 -20 40 -10", order: 7 },
      { path: "M 20 -20 Q 30 -30 40 -20", order: 8 }
    ], examples: ["わかい (wakai) - young", "わたし (watashi) - I"] },
    { character: "を", romaji: "wo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 Q 30 30 40 40 Q 50 50 40 60", order: 2 },
      { path: "M 20 30 Q 30 20 40 30", order: 3 },
      { path: "M 20 20 Q 30 10 40 20", order: 4 },
      { path: "M 20 10 Q 30 0 40 10", order: 5 },
      { path: "M 20 0 Q 30 -10 40 0", order: 6 },
      { path: "M 20 -10 Q 30 -20 40 -10", order: 7 },
      { path: "M 20 -20 Q 30 -30 40 -20", order: 8 },
      { path: "M 20 -30 Q 30 -40 40 -30", order: 9 }
    ], examples: ["を (wo) - object particle", "をかく (okaku) - to draw"] },
    { character: "ん", romaji: "n", strokes: [
      { path: "M 20 20 Q 30 10 40 20 Q 50 30 40 40 Q 30 50 20 40 Q 10 30 20 20", order: 1 }
    ], examples: ["ん (n) - nasal sound", "ほん (hon) - book"] },
  ]
};

// Katakana characters organized by rows
export const katakanaData: AlphabetSet = {
  name: "Katakana",
  description: "The phonetic alphabet used for foreign words, names, and emphasis",
  characters: [
    // A-row (vowels)
    { character: "ア", romaji: "a", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 20 L 20 60", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["アメリカ (amerika) - America", "アパート (apaato) - apartment"] },
    { character: "イ", romaji: "i", strokes: [
      { path: "M 15 20 L 15 60", order: 1 },
      { path: "M 15 20 L 35 40", order: 2 }
    ], examples: ["イタリア (itaria) - Italy", "イギリス (igirisu) - England"] },
    { character: "ウ", romaji: "u", strokes: [
      { path: "M 20 20 L 20 40", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ウルグアイ (uruguai) - Uruguay", "ウエスト (uesuto) - waist"] },
    { character: "エ", romaji: "e", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 20 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 },
      { path: "M 20 60 L 40 60", order: 4 }
    ], examples: ["エレベーター (erebeetaa) - elevator", "エンジン (enjin) - engine"] },
    { character: "オ", romaji: "o", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 20 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 },
      { path: "M 20 60 L 40 60", order: 4 },
      { path: "M 30 20 L 30 60", order: 5 }
    ], examples: ["オーストラリア (oosutoraria) - Australia", "オフィス (ofisu) - office"] },
    
    // K-row
    { character: "カ", romaji: "ka", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 }
    ], examples: ["カナダ (kanada) - Canada", "カメラ (kamera) - camera"] },
    { character: "キ", romaji: "ki", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 }
    ], examples: ["キロ (kiro) - kilo", "キッチン (kicchin) - kitchen"] },
    { character: "ク", romaji: "ku", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 20 L 20 40", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["クッキー (kukkii) - cookie", "クラス (kurasu) - class"] },
    { character: "ケ", romaji: "ke", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 }
    ], examples: ["ケーキ (keeki) - cake", "ケータイ (keetai) - mobile phone"] },
    { character: "コ", romaji: "ko", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 40 L 40 40", order: 2 }
    ], examples: ["コーヒー (koohii) - coffee", "コート (kooto) - coat"] },
    
    // S-row
    { character: "サ", romaji: "sa", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 }
    ], examples: ["サッカー (sakkaa) - soccer", "サラダ (sarada) - salad"] },
    { character: "シ", romaji: "shi", strokes: [
      { path: "M 20 20 L 30 30", order: 1 },
      { path: "M 25 25 L 35 35", order: 2 },
      { path: "M 30 30 L 40 40", order: 3 }
    ], examples: ["シェークスピア (sheekusupia) - Shakespeare", "シェフ (shefu) - chef"] },
    { character: "ス", romaji: "su", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["スーパー (suupaa) - supermarket", "スカート (sukaato) - skirt"] },
    { character: "セ", romaji: "se", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 }
    ], examples: ["セーター (seetaa) - sweater", "セット (setto) - set"] },
    { character: "ソ", romaji: "so", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 20 L 20 40", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ソファー (sofaa) - sofa", "ソフト (sofuto) - soft"] },
    
    // T-row
    { character: "タ", romaji: "ta", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 }
    ], examples: ["タクシー (takushii) - taxi", "タワー (tawaa) - tower"] },
    { character: "チ", romaji: "chi", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["チーズ (chiizu) - cheese", "チケット (chiketto) - ticket"] },
    { character: "ツ", romaji: "tsu", strokes: [
      { path: "M 20 20 L 30 30", order: 1 },
      { path: "M 25 25 L 35 35", order: 2 },
      { path: "M 30 30 L 40 40", order: 3 },
      { path: "M 20 40 L 40 40", order: 4 }
    ], examples: ["ツアー (tsuaa) - tour", "ツリー (tsurii) - tree"] },
    { character: "テ", romaji: "te", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 }
    ], examples: ["テレビ (terebi) - television", "テーブル (teeburu) - table"] },
    { character: "ト", romaji: "to", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["トイレ (toire) - toilet", "トマト (tomato) - tomato"] },
    
    // N-row
    { character: "ナ", romaji: "na", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 }
    ], examples: ["ナイフ (naifu) - knife", "ナポリ (napori) - Naples"] },
    { character: "ニ", romaji: "ni", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 }
    ], examples: ["ニッケル (nikkeru) - nickel", "ニット (nitto) - knit"] },
    { character: "ヌ", romaji: "nu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ヌードル (nuudoru) - noodle", "ヌクレア (nukurea) - nuclear"] },
    { character: "ネ", romaji: "ne", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 }
    ], examples: ["ネクタイ (nekutai) - necktie", "ネガティブ (negatibu) - negative"] },
    { character: "ノ", romaji: "no", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 20 L 20 40", order: 2 }
    ], examples: ["ノート (nooto) - notebook", "ノルウェー (noruwee) - Norway"] },
    
    // H-row
    { character: "ハ", romaji: "ha", strokes: [
      { path: "M 20 20 L 40 40", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 }
    ], examples: ["ハンバーガー (hanbaagaa) - hamburger", "ハワイ (hawai) - Hawaii"] },
    { character: "ヒ", romaji: "hi", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 }
    ], examples: ["ヒーロー (hiiroo) - hero", "ヒップ (hippu) - hip"] },
    { character: "フ", romaji: "fu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["フランス (furansu) - France", "フルーツ (furuutsu) - fruit"] },
    { character: "ヘ", romaji: "he", strokes: [
      { path: "M 20 30 L 40 20", order: 1 },
      { path: "M 20 30 L 40 30", order: 2 }
    ], examples: ["ヘリコプター (herikoputaa) - helicopter", "ヘルメット (herumetto) - helmet"] },
    { character: "ホ", romaji: "ho", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 }
    ], examples: ["ホテル (hoteru) - hotel", "ホーム (hoomu) - home"] },
    
    // M-row
    { character: "マ", romaji: "ma", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 }
    ], examples: ["マンション (manshon) - mansion", "マスク (masuku) - mask"] },
    { character: "ミ", romaji: "mi", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 }
    ], examples: ["ミルク (miruku) - milk", "ミュージック (myuujikku) - music"] },
    { character: "ム", romaji: "mu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ムービー (muubii) - movie", "ムード (muudo) - mood"] },
    { character: "メ", romaji: "me", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 }
    ], examples: ["メニュー (menyuu) - menu", "メール (meeru) - email"] },
    { character: "モ", romaji: "mo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 }
    ], examples: ["モーター (mootaa) - motor", "モニター (monitaa) - monitor"] },
    
    // Y-row
    { character: "ヤ", romaji: "ya", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 },
      { path: "M 20 -70 L 40 -80", order: 18 }
    ], examples: ["ヤンキー (yankii) - Yankee", "ヤフー (yafuu) - Yahoo"] },
    { character: "ユ", romaji: "yu", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ユニオン (union) - union", "ユーロ (yuroo) - euro"] },
    { character: "ヨ", romaji: "yo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 20 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 },
      { path: "M 20 60 L 40 60", order: 4 }
    ], examples: ["ヨーロッパ (yooroppa) - Europe", "ヨガ (yoga) - yoga"] },
    
    // R-row
    { character: "ラ", romaji: "ra", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ラジオ (rajio) - radio", "ラーメン (raamen) - ramen"] },
    { character: "リ", romaji: "ri", strokes: [
      { path: "M 15 20 L 15 60", order: 1 },
      { path: "M 35 20 L 35 60", order: 2 }
    ], examples: ["リーダー (riidaa) - leader", "リズム (rizumu) - rhythm"] },
    { character: "ル", romaji: "ru", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ルール (ruuru) - rule", "ルーム (ruumu) - room"] },
    { character: "レ", romaji: "re", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 30 L 40 20", order: 2 },
      { path: "M 20 50 L 40 40", order: 3 },
      { path: "M 20 40 L 40 30", order: 4 },
      { path: "M 20 60 L 40 50", order: 5 },
      { path: "M 20 50 L 40 40", order: 6 },
      { path: "M 20 40 L 40 30", order: 7 },
      { path: "M 20 30 L 40 20", order: 8 },
      { path: "M 20 20 L 40 10", order: 9 },
      { path: "M 20 10 L 40 0", order: 10 },
      { path: "M 20 0 L 40 -10", order: 11 },
      { path: "M 20 -10 L 40 -20", order: 12 },
      { path: "M 20 -20 L 40 -30", order: 13 },
      { path: "M 20 -30 L 40 -40", order: 14 },
      { path: "M 20 -40 L 40 -50", order: 15 },
      { path: "M 20 -50 L 40 -60", order: 16 },
      { path: "M 20 -60 L 40 -70", order: 17 },
      { path: "M 20 -70 L 40 -80", order: 18 },
      { path: "M 20 -80 L 40 -90", order: 19 },
      { path: "M 20 -90 L 40 -100", order: 20 }
    ], examples: ["レストラン (resutoran) - restaurant", "レコード (rekoodo) - record"] },
    { character: "ロ", romaji: "ro", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 20 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 },
      { path: "M 20 60 L 40 60", order: 4 }
    ], examples: ["ロボット (robotto) - robot", "ロック (rokku) - rock"] },
    
    // W-row
    { character: "ワ", romaji: "wa", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ワイン (wain) - wine", "ワンピース (wanpiisu) - one-piece dress"] },
    { character: "ヲ", romaji: "wo", strokes: [
      { path: "M 20 20 L 20 60", order: 1 },
      { path: "M 20 40 L 40 20", order: 2 },
      { path: "M 20 40 L 40 40", order: 3 }
    ], examples: ["ヲ (wo) - object particle", "ヲルフ (worufu) - wolf"] },
    { character: "ン", romaji: "n", strokes: [
      { path: "M 20 20 L 40 20", order: 1 },
      { path: "M 20 20 L 20 40", order: 2 }
    ], examples: ["ン (n) - nasal sound", "パン (pan) - bread"] },
  ]
};

// Helper function to get alphabet data by type
export function getAlphabetData(type: 'hiragana' | 'katakana'): AlphabetSet {
  return type === 'hiragana' ? hiraganaData : katakanaData;
}

// Helper function to get all alphabet sets
export function getAllAlphabetSets(): AlphabetSet[] {
  return [hiraganaData, katakanaData];
}
