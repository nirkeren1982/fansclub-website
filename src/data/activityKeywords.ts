/**
 * Activity Keyword Mapping
 * Maps activity keywords and aliases to standardized category names
 * Used for extracting activities from creator bios
 */

export const activityKeywordMap: Record<string, {
  category: string;
  keywords: string[];
  aliases: string[];
}> = {
  "Anal": {
    category: "Anal",
    keywords: ["anal", "anal video", "anal content", "anal play", "butt stuff", "backdoor"],
    aliases: ["anal sex", "anal scenes"]
  },
  "Lesbian": {
    category: "Lesbian",
    keywords: ["girl girl", "g/g", "lesbian", "girl on girl", "gg content", "girls only", "women with women", "wlw"],
    aliases: ["girl x girl", "sapphic", "lesbian content"]
  },
  "1on1": {
    category: "1on1",
    keywords: ["boy girl", "b/g", "bg content", "boy x girl", "1 on 1", "one on one", "couples content", "straight content"],
    aliases: ["heterosexual", "m/f", "male female"]
  },
  "3sums": {
    category: "3sums",
    keywords: ["threesome", "3some", "3 sum", "threeway", "trio", "three way", "ffm", "mmf", "mff"],
    aliases: ["3 people", "triple", "3way"]
  },
  "4sums": {
    category: "4sums",
    keywords: ["foursome", "4some", "4 sum", "four way", "group of 4", "quad"],
    aliases: ["4 people", "4way"]
  },
  "Blowjob": {
    category: "Blowjob",
    keywords: ["blowjob", "bj", "oral", "head", "sucking", "oral sex", "giving head"],
    aliases: ["fellatio", "blow job"]
  },
  "BDSM": {
    category: "BDSM (Bondage)",
    keywords: ["bdsm", "bondage", "kinky", "kink", "dom", "sub", "domination", "submission", "tied up", "restraints"],
    aliases: ["kink friendly", "kinks", "bd/sm"]
  },
  "Fetish": {
    category: "Fetish & Foot Fetish",
    keywords: ["fetish", "foot fetish", "feet", "foot content", "toe", "soles", "kink"],
    aliases: ["footjob", "foot worship", "feet pics"]
  },
  "Femdom": {
    category: "Femdom & Mistress",
    keywords: ["femdom", "mistress", "dominatrix", "domme", "goddess", "female domination"],
    aliases: ["fin dom", "findom", "fem dom"]
  },
  "Sexting": {
    category: "Sexting",
    keywords: ["sexting", "sext", "messaging", "dm", "chat", "text", "custom messages"],
    aliases: ["direct messages", "dms", "private messages"]
  },
  "DickRating": {
    category: "Dick Rating (Cock Rating)",
    keywords: ["dick rating", "cock rating", "rate your cock", "rate your dick", "rating"],
    aliases: ["d rating", "c rating", "rate my dick"]
  },
  "JOI": {
    category: "Joi",
    keywords: ["joi", "jerk off instruction", "jerk off instructions", "jack off instruction"],
    aliases: ["jo instruction", "j.o.i"]
  },
  "Squirting": {
    category: "Squirting",
    keywords: ["squirting", "squirt", "gushing"],
    aliases: ["female ejaculation", "squirter"]
  },
  "Pregnant": {
    category: "Pregnant",
    keywords: ["pregnant", "pregnancy", "preggo", "expecting", "baby bump"],
    aliases: ["maternity", "pregnant belly"]
  },
  "Lactation": {
    category: "Lactation",
    keywords: ["lactation", "breastfeeding", "milk", "milking"],
    aliases: ["breast milk", "lactating"]
  },
  "Cosplay": {
    category: "Cosplay",
    keywords: ["cosplay", "costume", "character", "roleplay costumes", "dress up"],
    aliases: ["cos play", "cosplayer"]
  },
  "Roleplay": {
    category: "Roleplay",
    keywords: ["roleplay", "role play", "rp", "fantasy", "scenarios"],
    aliases: ["role-play", "roleplaying"]
  },
  "POV": {
    category: "POV",
    keywords: ["pov", "point of view", "first person"],
    aliases: ["p.o.v", "pov content"]
  },
  "Solo": {
    category: "Solo",
    keywords: ["solo", "solo content", "by myself", "alone", "self play", "masturbation"],
    aliases: ["solo play", "solo videos"]
  },
  "Toys": {
    category: "Toys",
    keywords: ["toys", "toy", "dildo", "vibrator", "sex toys", "using toys"],
    aliases: ["toy play", "toy content"]
  },
  "NoPPV": {
    category: "No ppv",
    keywords: ["no ppv", "no paywalls", "no pay per view", "all included", "everything included", "full access"],
    aliases: ["no extra charges", "no additional cost", "no ppv charges"]
  },
  "CustomContent": {
    category: "Custom Content",
    keywords: ["custom", "custom content", "personalized", "custom video", "custom photo", "made to order", "requests"],
    aliases: ["customized", "bespoke", "custom requests"]
  },
  "VideoCalls": {
    category: "Video Calls",
    keywords: ["video call", "video chat", "cam", "live video", "skype", "zoom"],
    aliases: ["video session", "cam show", "video calls"]
  },
  "Amateur": {
    category: "Amateur",
    keywords: ["amateur", "real", "authentic", "genuine", "homemade", "not professional", "natural"],
    aliases: ["non-professional", "real amateur"]
  },
  "Petite": {
    category: "Petite Skinny",
    keywords: ["petite", "small", "tiny", "slim", "skinny", "small frame"],
    aliases: ["spinner", "petite girl"]
  },
  "Thick": {
    category: "Thick",
    keywords: ["thick", "curvy", "curves", "voluptuous", "thicc"],
    aliases: ["curvaceous", "thick girl"]
  },
  "BBW": {
    category: "BBW (Chubby & Fat)",
    keywords: ["bbw", "plus size", "chubby", "curvy", "big beautiful", "fuller figure"],
    aliases: ["big and beautiful", "plus sized"]
  },
  "BigTits": {
    category: "Big Tits (Busty Boobs)",
    keywords: ["big tits", "big boobs", "busty", "large breasts", "big chest", "huge boobs"],
    aliases: ["big breasts", "large tits", "huge tits"]
  },
  "SmallTits": {
    category: "Small Tits",
    keywords: ["small tits", "small boobs", "tiny tits", "small chest", "petite breasts"],
    aliases: ["small breasts", "tiny boobs"]
  },
  "BigAss": {
    category: "Big Ass",
    keywords: ["big ass", "big butt", "bubble butt", "thick booty", "pawg"],
    aliases: ["large booty", "huge ass"]
  },
  "Tattoo": {
    category: "Tattooed Girl",
    keywords: ["tattoo", "tattooed", "inked", "ink", "body art", "tattoos"],
    aliases: ["tatted", "tattoo girl"]
  },
  "Piercing": {
    category: "Piercing (Pierced Nipples)",
    keywords: ["piercing", "pierced", "piercings", "body piercing", "nipple piercings"],
    aliases: ["pierced nipples", "body piercings"]
  },
  "Gamer": {
    category: "Gamer Girl",
    keywords: ["gamer", "gaming", "gamer girl", "plays games", "video games", "streamer"],
    aliases: ["game girl", "gamer babe"]
  },
  "Fitness": {
    category: "Fitness (Gym Girl)",
    keywords: ["fitness", "gym", "workout", "athlete", "fit", "athletic", "exercise"],
    aliases: ["gym girl", "fit girl", "fitness model"]
  },
  "Yoga": {
    category: "Yoga",
    keywords: ["yoga", "yogi", "yoga instructor", "flexible", "stretching"],
    aliases: ["yoga pants", "yoga girl"]
  },
  "Asian": {
    category: "Asian",
    keywords: ["asian", "oriental"],
    aliases: ["asian girl", "asian woman"]
  },
  "Latina": {
    category: "Latina",
    keywords: ["latina", "latin", "hispanic"],
    aliases: ["latinx", "latin girl"]
  },
  "Black": {
    category: "Black (Ebony)",
    keywords: ["black", "ebony", "african american"],
    aliases: ["black girl", "ebony girl"]
  },
  "Arab": {
    category: "Arab",
    keywords: ["arab", "arabic", "middle eastern"],
    aliases: ["arab girl", "arabic girl"]
  },
  "Blonde": {
    category: "Blonde",
    keywords: ["blonde", "blond", "golden hair", "light hair"],
    aliases: ["blonde girl", "blonde hair"]
  },
  "Brunette": {
    category: "Brunette",
    keywords: ["brunette", "brown hair", "dark hair"],
    aliases: ["brunette girl", "brown haired"]
  },
  "Redhead": {
    category: "Redhead (Gingers)",
    keywords: ["redhead", "red hair", "ginger", "auburn"],
    aliases: ["red headed", "ginger girl"]
  },
  "Teen": {
    category: "Teen (Young)",
    keywords: ["teen", "young", "18", "19", "college age", "barely legal"],
    aliases: ["teenager", "18+", "young girl"]
  },
  "MILF": {
    category: "MILF (Mom)",
    keywords: ["milf", "mom", "mother", "mature", "older woman"],
    aliases: ["mommy", "milf content"]
  },
  "Student": {
    category: "College Girl (Student)",
    keywords: ["student", "college", "university", "college girl", "schoolgirl"],
    aliases: ["uni", "college student"]
  },
  "Cheerleader": {
    category: "Cheerleader",
    keywords: ["cheerleader", "cheer", "pom pom"],
    aliases: ["cheerleading", "cheer girl"]
  },
  "Shemale": {
    category: "Shemale",
    keywords: ["shemale", "trans woman", "trans girl"],
    aliases: ["tgirl", "transgender"]
  },
  "Ahegao": {
    category: "Ahegao",
    keywords: ["ahegao", "ahego", "hentai face"],
    aliases: ["ahegao face"]
  },
  "Alt": {
    category: "Alt",
    keywords: ["alt", "alternative", "alt girl", "alternative style"],
    aliases: ["alt style", "alternative girl"]
  },
  "ASMR": {
    category: "ASMR",
    keywords: ["asmr", "whisper", "relaxation audio"],
    aliases: ["asmr content", "asmr videos"]
  },
  "Bikini": {
    category: "Bikini Barista",
    keywords: ["bikini", "bikini barista", "swimsuit"],
    aliases: ["bikini content", "bikini model"]
  },
  "Bimbo": {
    category: "Bimbo",
    keywords: ["bimbo", "bimbo style", "bimbofication"],
    aliases: ["bimbo girl"]
  },
  "Bisexual": {
    category: "Bisexual",
    keywords: ["bisexual", "bi", "both", "men and women"],
    aliases: ["bi content", "bi sexual"]
  },
  "Braces": {
    category: "Braces",
    keywords: ["braces", "metal braces", "orthodontics"],
    aliases: ["braces girl", "girl with braces"]
  },
  "Celebrity": {
    category: "Celebrity",
    keywords: ["celebrity", "famous", "influencer", "public figure"],
    aliases: ["celeb", "known"]
  },
  "Cheap": {
    category: "Cheap",
    keywords: ["cheap", "affordable", "budget", "low price", "inexpensive"],
    aliases: ["low cost", "budget friendly"]
  },
  "Couple": {
    category: "Couple",
    keywords: ["couple", "couples content", "boyfriend", "girlfriend", "partner"],
    aliases: ["couple videos", "duo"]
  },
  "Crossdresser": {
    category: "Crossdresser (Sissy)",
    keywords: ["crossdresser", "sissy", "crossdressing", "cd"],
    aliases: ["cross dresser", "sissy content"]
  },
  "Cuckold": {
    category: "Cuckold & Hotwife",
    keywords: ["cuckold", "hotwife", "cuck", "sharing"],
    aliases: ["cuckolding", "hot wife"]
  },
  "CurlyHair": {
    category: "Curly Hair",
    keywords: ["curly hair", "curls", "curly", "natural curls"],
    aliases: ["curly haired"]
  },
  "Egirl": {
    category: "E-girls",
    keywords: ["egirl", "e-girl", "e girl", "internet girl"],
    aliases: ["egirl aesthetic"]
  },
  "Exhibitionist": {
    category: "Exhibitionist",
    keywords: ["exhibitionist", "public", "outdoor", "flashing", "risky"],
    aliases: ["public content", "exhibitionism"]
  },
  "FBB": {
    category: "FBB",
    keywords: ["fbb", "female bodybuilder", "muscle woman", "muscular"],
    aliases: ["bodybuilder", "muscle girl"]
  },
  "Femboy": {
    category: "Femboy",
    keywords: ["femboy", "fem boy", "feminine boy"],
    aliases: ["feminine male"]
  },
  "FlightAttendant": {
    category: "Flight Attendant (Air Hostess)",
    keywords: ["flight attendant", "air hostess", "stewardess", "cabin crew"],
    aliases: ["flight crew", "airline"]
  },
  "Gay": {
    category: "Gay",
    keywords: ["gay", "gay content", "men with men", "mlm"],
    aliases: ["homosexual", "gay videos"]
  },
  "Goth": {
    category: "Goth",
    keywords: ["goth", "gothic", "dark aesthetic", "emo"],
    aliases: ["goth girl", "gothic style"]
  },
  "Granny": {
    category: "Granny",
    keywords: ["granny", "grandma", "elderly", "senior"],
    aliases: ["grandmother", "older woman"]
  },
  "Gymnast": {
    category: "Gymnast",
    keywords: ["gymnast", "gymnastics", "acrobat", "contortionist"],
    aliases: ["gymnast girl", "flexible"]
  },
  "Hairy": {
    category: "Hairy",
    keywords: ["hairy", "natural hair", "unshaved", "bush"],
    aliases: ["hairy pussy", "natural"]
  },
  "Hentai": {
    category: "Hentai",
    keywords: ["hentai", "anime", "manga", "2d"],
    aliases: ["hentai content", "anime style"]
  },
  "Hijab": {
    category: "Hijab",
    keywords: ["hijab", "headscarf", "muslim"],
    aliases: ["hijab girl", "veiled"]
  },
  "Hmong": {
    category: "Hmong",
    keywords: ["hmong"],
    aliases: ["hmong girl"]
  },
  "Incest": {
    category: "Incest",
    keywords: ["incest", "family", "step", "taboo"],
    aliases: ["family roleplay", "stepmom", "stepsis"]
  },
  "Korea": {
    category: "Korea",
    keywords: ["korean", "korea", "k-pop"],
    aliases: ["korean girl", "korean woman"]
  },
  "Ladyboy": {
    category: "Ladyboy",
    keywords: ["ladyboy", "kathoey", "trans"],
    aliases: ["lady boy"]
  },
  "Latex": {
    category: "Latex",
    keywords: ["latex", "rubber", "pvc", "shiny"],
    aliases: ["latex outfit", "latex clothing"]
  },
  "Lingerie": {
    category: "Lingerie",
    keywords: ["lingerie", "underwear", "bra", "panties", "lace"],
    aliases: ["lingerie content", "sexy underwear"]
  },
  "Massage": {
    category: "Massage",
    keywords: ["massage", "sensual massage", "body rub"],
    aliases: ["massage content", "massage videos"]
  },
  "Midget": {
    category: "Midget",
    keywords: ["midget", "little person", "dwarf", "short"],
    aliases: ["small stature"]
  },
  "Military": {
    category: "Military",
    keywords: ["military", "army", "soldier", "veteran", "uniform"],
    aliases: ["military girl", "service member"]
  },
  "MomDaughter": {
    category: "Mom Daughter",
    keywords: ["mom daughter", "mother daughter", "mom and daughter"],
    aliases: ["mommy daughter"]
  },
  "Muslim": {
    category: "Muslim",
    keywords: ["muslim", "islamic"],
    aliases: ["muslim girl", "muslim woman"]
  },
  "Pegging": {
    category: "Pegging",
    keywords: ["pegging", "strap on", "strapon", "peg"],
    aliases: ["strap-on", "pegging content"]
  },
  "Persian": {
    category: "Persian",
    keywords: ["persian", "iranian", "farsi"],
    aliases: ["persian girl", "iranian girl"]
  },
  "Pornstar": {
    category: "Pornstar",
    keywords: ["pornstar", "porn star", "adult star", "professional"],
    aliases: ["porn actress", "adult performer"]
  },
  "QOS": {
    category: "Qos",
    keywords: ["qos", "queen of spades", "interracial"],
    aliases: ["queen of spades content"]
  },
  "Swinger": {
    category: "Swinger",
    keywords: ["swinger", "swinging", "lifestyle", "swap"],
    aliases: ["swinger couple", "lifestyle content"]
  },
  "Teacher": {
    category: "Teacher",
    keywords: ["teacher", "professor", "instructor", "educator"],
    aliases: ["teacher content", "teacher roleplay"]
  },
  "Tiktoker": {
    category: "Tiktoker",
    keywords: ["tiktoker", "tiktok", "tik tok", "tik toker"],
    aliases: ["tiktok girl", "tiktok star"]
  },
  "Trans": {
    category: "Trans",
    keywords: ["trans", "transgender", "transitioning"],
    aliases: ["trans girl", "trans woman"]
  },
  "Twins": {
    category: "Twins",
    keywords: ["twins", "twin", "sisters"],
    aliases: ["twin girls", "twin content"]
  },
  "UFC": {
    category: "UFC",
    keywords: ["ufc", "fighter", "mma", "martial arts"],
    aliases: ["ufc fighter", "mixed martial arts"]
  },
  "Waifu": {
    category: "Waifu",
    keywords: ["waifu", "anime girl", "anime waifu"],
    aliases: ["waifu content"]
  },
  "Youtuber": {
    category: "Youtuber",
    keywords: ["youtuber", "youtube", "content creator", "vlogger"],
    aliases: ["youtube star", "youtuber girl"]
  },
  "Streamer": {
    category: "Streamer",
    keywords: ["streamer", "streaming", "twitch", "live stream"],
    aliases: ["twitch streamer", "live streamer"]
  }
};

// Export list of all activity categories
export const allActivityCategories = Object.values(activityKeywordMap).map(v => v.category);



