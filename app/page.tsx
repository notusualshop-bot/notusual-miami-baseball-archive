"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const miamiArchives = [
  {
    id: 1,
    year: "1962–1963",
    era: "1962–1963 ERA",
    headline: "The Day Coral Gables Baseball Changed Forever",
    body: "Before 1963, South Florida collegiate baseball was a forgotten program playing in the shadows of bigger names. They had limited resources, no national reputation, and little recognition outside the region. Playing on a dusty local field, the team was completely off the radar. Nobody believed this program could survive, let alone thrive. Then, the university took a desperate gamble on a relentless young coach. He didn't just save the program from extinction; he ignited a cultural revolution with an unmatched intensity.",
  },
  {
    id: 2,
    year: "1963",
    era: "1963 SEASON",
    headline: "The Man Who Built The Storm",
    body: "Stepping onto the campus with zero funding and zero respect, the legendary skipper didn't just want to coach a team—he wanted to build a spectacle. Using relentless determination and creativity, he put South Florida baseball on the map. Through sheer force of will, he constructed the foundation of a diamond dynasty, establishing a ruthless, winning culture that would soon terrify traditional powerhouses.",
  },
  {
    id: 3,
    year: "1970s",
    era: "1970S ERA",
    headline: "The Wizard of Coral Gables",
    body: "Long before the rest of the country figured out how to market college sports, this program was putting on a nightly circus in South Florida. Earning a legendary reputation, the leadership transformed games into must-see entertainment with wild promotional events and unforgettable fan culture. By blending elite, high-speed play with pure showmanship, they made their home field one of the most intimidating places to play in the country.",
  },
  {
    id: 4,
    year: "1974",
    era: "1974 SEASON",
    headline: "The Night South Florida Arrived In Omaha",
    body: "By the early 1970s, the squad was no longer just a local attraction trying to survive. They were a rising force ready to shock the establishment. In 1974, they did the unthinkable: a southern school battered its way to the national showcase. This wasn't a team built on quiet tradition. They were loud, fast, and fiercely competitive, carrying the unmistakable swagger of their city, officially announcing the birth of a new national power.",
  },
  {
    id: 5,
    year: "1970s–1980s",
    era: "PIPELINE ERA",
    headline: "The Backyard That Built A Dynasty",
    body: "The ultimate secret weapon behind the diamond empire wasn't just tactics—it was the untamed, raw talent in their own backyard. Recognizing that South Florida was a goldmine for elite prospects, the program built one of the strongest local pipelines in the sport. Instead of losing highly touted local prodigies to established northern schools, the best athletes stayed home to build a legacy for their own city, injecting unmatched speed and attitude into the roster.",
  },
  {
    id: 6,
    year: "Mid-1970s",
    era: "SWAGGER ERA",
    headline: "The Birth of the South Florida Swagger",
    body: "The infamous regional swagger didn't just appear overnight. Dressed in vibrant orange and green, the team played with a loud, aggressive style that defied traditional etiquette. They stole bases relentlessly, celebrated massive plays with unfiltered emotion, and turned every game into a fiercely competitive battle. This unapologetic attitude made them the ultimate villains to outsiders, but absolute heroes to the locals.",
  },
  {
    id: 7,
    year: "1973",
    era: "1973 STADIUM",
    headline: "The House That Orange and Green Built",
    body: "A championship team needs a fortress. In 1973, through relentless fundraising and community support, a basic local field was transformed into an iconic historic stadium. The design brought the seats incredibly close to the action, the dugouts were tight, and the atmosphere was deafening. It became a terrifying snake pit for visiting opponents and the ultimate weekend party for local fans.",
  },
  {
    id: 8,
    year: "Late 1970s",
    era: "REBEL ERA",
    headline: "Embracing the Villain Role",
    body: "As the team's dominance grew, so did the target on their backs. The sports establishment—built on quiet tradition and unspoken rules—didn't know how to handle them. Players wore their emotions on their sleeves and played with an aggressive style that infuriated purists. Instead of apologizing, they embraced the villain role, using the hostility of road crowds as pure motivation to completely dismantle their opponents.",
  },
  {
    id: 9,
    year: "1970s–1980s",
    era: "CULTURE ERA",
    headline: "The Secret Behind the Winning Culture",
    body: "What made the program truly unstoppable wasn't just raw talent; it was brutal internal accountability. The standard was different: players weren't just preparing to win games; they were preparing to carry the weight of their city. Practices were notoriously harder than actual games, creating an iron-sharpens-iron mentality where losing was completely unacceptable.",
  },
  {
    id: 10,
    year: "1978",
    era: "1978 SEASON",
    headline: "The Storm Demands Respect",
    body: "By the late 1970s, the program was consistently knocking on the door of a national championship. The national narrative rapidly shifted from a flashy underdog to a legitimate monster. They began routinely defeating established titans, proving their high-octane style could win on the biggest stages and forcing the sports establishment to respect the growing storm.",
  },
  {
    id: 11,
    year: "1982",
    era: "1982 CHAMPIONSHIP",
    headline: "The Miracle That Started Everything",
    body: "Arriving at the national tournament not as heavy favorites, but as a team of destiny, the squad refused to be denied. Playing with signature South Florida swagger, disciplined defense, and fearless play, they battled through a grueling bracket to capture the program's first National Title. It was undeniable proof that the loud, aggressive kids from Coral Gables could conquer the collegiate baseball world.",
  },
  {
    id: 12,
    year: "1985",
    era: "1985 CWS",
    headline: "Proving It Was No Accident",
    body: "Winning one national title could be called a miracle, but winning two creates a dynasty. Returning to the national stage with a massive target on their backs, they showcased absolute resilience against the nation's best teams. Securing their second national crown, this run cemented their status as a relentless powerhouse that could perform when the lights were brightest.",
  },
  {
    id: 13,
    year: "1999",
    era: "1999 TITLE",
    headline: "The Return of the Champions",
    body: "By the late 1990s, some critics wondered if the golden era had quietly passed. A new generation of players silenced those doubters. Playing with the classic, aggressive style that defined the program's roots, they stormed through the postseason and brought the championship trophy back home in a deeply emotional victory for the fanbase.",
  },
  {
    id: 14,
    year: "2001",
    era: "2001 DYNASTY",
    headline: "The Greatest Squad Ever Built",
    body: "The 2001 team didn't just win a national championship; they completely overwhelmed the competition. Armed with a roster packed with future major leaguers, this team was practically untouchable. They dismantled opponents with an explosive offense and suffocating pitching, widely considered one of the most dominant teams in the history of the sport.",
  },
  {
    id: 15,
    year: "Tradition",
    era: "STADIUM RITUAL",
    headline: "The Shake That Became A Tradition",
    body: "You can’t talk about this historic ballpark without talking about the famous ballpark shake. What started as a simple concession evolved into a sacred game-day ritual. For generations of fans, waiting in line for this legendary treat is as important as the first pitch, becoming the ultimate symbol of a South Florida weekend.",
  },
  {
    id: 16,
    year: "Rivalry",
    era: "STATE WAR",
    headline: "Bad Blood: The In-State Turf War",
    body: "In the state of Florida, orange and green violently clashes with rival colors. This in-state rivalry isn’t just a game; it’s a turf war. For decades, these programs have battled for supremacy on the diamond in heavyweight fights where pride means everything and the tension never stops.",
  },
  {
    id: 17,
    year: "Mascot",
    era: "BALLPARK LORE",
    headline: "The Legend Behind The Madness",
    body: "The historic ballpark belonged to a wildly entertaining, chaos-loving local mascot. Introduced to inject pure fun into the game, the character became a local legend with wild antics, crowd-surfing, and comedy routines, proving that nobody throws a baseball party quite like Coral Gables.",
  },
  {
    id: 18,
    year: "Pipeline",
    era: "PRO PIPELINE",
    headline: "The Ultimate Baseball Factory",
    body: "For decades, the historic home field has served as a direct pipeline to the major leagues. Fans have had the rare privilege of watching future stars take their very first professional-caliber swings here. The program’s ability to develop raw talent into professional standouts is unmatched across the entire sport.",
  },
  {
    id: 19,
    year: "Atmosphere",
    era: "FRIDAY NIGHTS",
    headline: "The Magic of Friday Nights",
    body: "There is nothing in college sports quite like a Friday night under the South Florida lights. As the sun sets, the smell of barbecue fills the air, and a sea of orange and green fills the stands. It’s more than a game; it’s a weekly family reunion where the home-field advantage becomes absolute and the squad feels invincible.",
  },
  {
    id: 20,
    year: "Legacy",
    era: "TIMELESS PRIDE",
    headline: "The Eternal Spirit of South Florida Baseball",
    body: "Championships are won and lost, and rosters change every year, but the spirit of the program remains unbroken. It lives in the bright colors, the deafening roar of the hometown crowd, and the unwavering confidence of every player who steps onto the diamond to play for the pride of their city.",
  },
  {
    id: 21,
    year: "1994",
    era: "1994 ERA",
    headline: "Taking the Torch",
    body: "Following a legendary coach is supposed to be the hardest job in sports. When a new leader took over in 1994, he inherited the crushing weight of massive expectations, demanding annual trips to the national showcase. Instead of shrinking under pressure, he embraced it, maintaining the aggressive swagger while instilling relentless discipline to secure further national titles.",
  },
  {
    id: 22,
    year: "1989–1991",
    era: "PRO ROOTS",
    headline: "Before the Pinstripes",
    body: "Long before becoming a legendary World Series champion and the heart of a New York dynasty, a young catcher wore the orange and green with intense, fiery passion. Playing with a competitive spirit that matched the South Florida heat, he forged the relentless work ethic and mental toughness that made him an iconic Major League star.",
  },
  {
    id: 23,
    year: "1996–1998",
    era: "POWER HITTER",
    headline: "The Unstoppable Power Bat",
    body: "There are great hitters, and then there were generational sluggers who terrified opposing pitchers. Armed with massive raw power, they could change the outcome of a game with a single swing, winning prestigious national awards and becoming the ultimate symbol of an explosive, high-scoring offense.",
  },
  {
    id: 24,
    year: "Streak",
    era: "44-YEAR RUN",
    headline: "The Legendary 44-Year Streak",
    body: "Consistency is the hardest thing to achieve in collegiate sports. For an astonishing 44 consecutive years, the program reached the national postseason tournament. Through multiple coaches, roster changes, and shifting eras, they never missed a beat, making tournament appearances an absolute birthright.",
  },
  {
    id: 25,
    year: "Rivalry",
    era: "STATE SUPREMACY",
    headline: "The Battle for the Sunshine State",
    body: "In-state rivalries are brutal fights for regional supremacy, clashing city swagger against traditional university pride. When these teams meet on the diamond, every pitch carries extra pressure and bragging rights mean everything to the local fanbases.",
  },
  {
    id: 26,
    year: "2003–2005",
    era: "SUPERSTAR ERA",
    headline: "The Blueprint of a Superstar",
    body: "Rare prospects combine elite speed with incredible power, playing the game with a smooth, effortless confidence. Dominating collegiate pitching staffs and earning major accolades, their local excellence serves as a direct preview to future Major League Most Valuable Player honors.",
  },
  {
    id: 27,
    year: "2009",
    era: "STADIUM TRIBUTE",
    headline: "A Superstar's Tribute to the Ballpark",
    body: "Though skipping college to become an immediate professional icon, a legendary South Florida baseball superstar later made massive contributions to renovate and honor the historic home stadium. It was the ultimate sign of respect, proving that the heartbeat of regional baseball belongs to Coral Gables.",
  },
  {
    id: 28,
    year: "Pipeline",
    era: "MLB DRAFT",
    headline: "The Ultimate Baseball Factory",
    body: "Every summer, the professional draft becomes an unofficial showcase for the program, consistently producing elite prospects and future big-league stars ready for the intense pressure of the professional stage.",
  },
  {
    id: 29,
    year: "Identity",
    era: "SYMBOL OF PRIDE",
    headline: 'Throwing Up "The U"',
    body: 'A simple two-hand gesture carries the weight of an entire community, connecting athletes, alumni, and supporters. It is a universal symbol of South Florida pride, a warning to opponents, and a declaration of absolute confidence.',
  },
  {
    id: 30,
    year: "Pursuit",
    era: "MENTAL TOUGHNESS",
    headline: "The Heartbreaks That Built Champions",
    body: "Dynasties are built by tasting bitter defeat and turning failure into fuel. Brutal postseason losses forge mental toughness, passing hunger onto future rosters and ensuring the internal fire never burns out.",
  },
  {
    id: 31,
    year: "1982",
    era: "TRICK PLAY",
    headline: "The Grand Illusion",
    body: 'On the national championship stage, the squad pulled off one of the greatest trick plays in baseball history. Known as "The Grand Illusion," an infielder faked a throw while the runner panicked, completing a famous hidden-ball trick that captured the fearless, creative swagger of the program.',
  },
  {
    id: 32,
    year: "Catcher U",
    era: "CATCHER LINEAGE",
    headline: 'The Ultimate "Catcher U"',
    body: "The program earned a unique national reputation as the ultimate factory for elite catchers who control the game from behind the plate, demanding high baseball IQ and leadership under championship pressure.",
  },
  {
    id: 33,
    year: "1990–1992",
    era: "GOLD GLOVE",
    headline: "The Defensive Masterpiece",
    body: "Legendary defensive catchers established an impossible standard behind the plate, possessing terrifying throwing arms that shut down opposing running games and fundamentally changing how opponents had to scheme.",
  },
  {
    id: 34,
    year: "Infield",
    era: "FIELD GENERAL",
    headline: "The General of the Infield",
    body: "Brilliant infielders with sky-high baseball IQs acted as the heartbeat of the team, making impossible defensive plays look routine and leading squads deep into postseason championship contention before later managing at the highest professional levels.",
  },
  {
    id: 35,
    year: "Omaha",
    era: "POSTSEASON TRADITION",
    headline: "Permanent Tickets to the National Stage",
    body: "Reaching the elite national tournament is a rare achievement for most, but for this program, it became a routine business trip, walking into the pressure cooker year after year and thriving.",
  },
  {
    id: 36,
    year: "1992",
    era: "OLYMPIC GLORY",
    headline: "Taking The Storm to the Global Stage",
    body: "When baseball returned to the global Olympic stage, national team leaders turned to Coral Gables' master coach, bringing unapologetic South Florida swagger to international competition.",
  },
  {
    id: 37,
    year: "Local Star",
    era: "HOMETOWN SPARK",
    headline: "The Hometown Spark",
    body: "Local kids grew up understanding the deep community pride of playing for their home city, bringing relentless hustle and fierce competitiveness to launch long, successful professional careers.",
  },
  {
    id: 38,
    year: "Visuals",
    era: "ARMOR",
    headline: "The Orange and Green Armor",
    body: "Vibrant uniforms act as psychological warfare against opponents, looking loud, bold, and heavily armored to carry the fearless energy of South Florida right onto the diamond.",
  },
  {
    id: 39,
    year: "Late Inning",
    era: "BALLPARK MAGIC",
    headline: "The Late-Inning Magic",
    body: "Visiting dugouts feel a terrifying sense of dread during late innings because the home team has a long history of orchestrating impossible comebacks, fueled by deafening hometown crowds.",
  },
  {
    id: 40,
    year: "ACC Era",
    era: "ACC DOMINANCE",
    headline: "Conquering a New Conference",
    body: "Transitioning to a grueling new athletic conference, the program answered by completely taking over, winning titles and securing top tournament seeds to prove their style could dominate anywhere.",
  },
  {
    id: 41,
    year: "1999",
    era: "CWS FINAL",
    headline: "The Ultimate Rivalry on the Ultimate Stage",
    body: "Meeting a bitter in-state rival in the national championship game with the ultimate title on the line, clutch pitching and championship pedigree secured a dramatic victory for regional bragging rights.",
  },
  {
    id: 42,
    year: "Tradition",
    era: "STADIUM CULTURE",
    headline: "The Sweetest Tradition in Baseball",
    body: "Dedicated student assistants helped transform traditional college sports into an absolute event, bringing unique regional flair and energy to the historic ballpark.",
  },
  {
    id: 43,
    year: "Culture",
    era: "CUBAN-AMERICAN HERITAGE",
    headline: "The Heartbeat of Havana in Coral Gables",
    body: "The program has long been enriched by the passion, flair, and baseball traditions of players with deep Hispanic roots, forging a powerful bond with the diverse local community.",
  },
  {
    id: 44,
    year: "Closers",
    era: "NINTH INNING",
    headline: "Closing the Door",
    body: "The high-stakes ninth inning belongs to elite closers, acting as late-inning assassins with devastating arsenals and ice-cold composure to secure victories.",
  },
  {
    id: 45,
    year: "1996",
    era: "HEARTBREAK",
    headline: "The Heartbreak of '96",
    body: "Devastating postseason losses are often paved with heartbreak, but brutal defeats only harden returning players, fueling a relentless drive that culminates in a national title shortly after.",
  },
  {
    id: 46,
    year: "Brotherhood",
    era: "ATHLETIC BROTHERHOOD",
    headline: "The Shared Athletic Brotherhood",
    body: "Cross-campus athletic programs shared an unmatched attitude, feeding off each other's success and aggressive energy to establish a feared regional brand.",
  },
  {
    id: 47,
    year: "Offense",
    era: "AVALANCHE",
    headline: "The National Stage Avalanche",
    body: "Unleashing an absolute offensive avalanche on the national stage, teams scored in waves to completely break the will of opponents and prove they played an entirely different brand of baseball.",
  },
  {
    id: 48,
    year: "Offseason",
    era: "WINTER BROTHERHOOD",
    headline: "The Winter Brotherhood",
    body: "Former stars returning to train during the offseason bridge the gap between generations, allowing current college players to practice alongside professional champions in a lifelong fraternity.",
  },
  {
    id: 49,
    year: "Pitching",
    era: "STRIKEOUT ACE",
    headline: "The Strikeout Machine",
    body: "Velocity and aggressive mentalities allowed early pitching aces to completely overwhelm hitters, earning multi-time All-American honors and elevating the program into a national contender.",
  },
  {
    id: 50,
    year: "Voice",
    era: "BALLPARK SOUNDTRACK",
    headline: "The Voice of the Ballpark",
    body: "Legendary public address announcers acted as the soundtrack of the ballpark through every era, becoming beloved institutional fixtures for the faithful fanbase.",
  },
  {
    id: 51,
    year: "Showmanship",
    era: "TUXEDO STUNT",
    headline: "A Night in a Tuxedo",
    body: "Legendary coaching showmanship proved that entertainment and elite baseball could completely coexist, turning standard game days into unforgettable South Florida galas.",
  },
  {
    id: 52,
    year: "Pitching",
    era: "UNBREAKABLE ARM",
    headline: "The Unbreakable Arm",
    body: "Local pitchers relying on unmatched baseball IQ and the heart of a lion outsmarted batters with fierce competitive intensity, becoming symbols of toughness and consistency.",
  },
  {
    id: 53,
    year: "Swagger",
    era: "UNWRITTEN RULES",
    headline: "Breaking the Unwritten Rules",
    body: "Ignoring conventional etiquette, players celebrated big moments with emotion, confidence, and vibrant energy, helping redefine the expressive image of collegiate baseball.",
  },
  {
    id: 54,
    year: "1990",
    era: "GOLDEN ACE",
    headline: "The Golden Ace",
    body: "Devastating breaking pitches and pinpoint command produced some of the most dominant pitching seasons in program history, racking up strikeouts with supreme confidence.",
  },
  {
    id: 55,
    year: "Basepaths",
    era: "AGGRESSIVE RUNNING",
    headline: "Havoc on the Basepaths",
    body: "Relentless base running and constant movement forced opposing pitchers into crucial mental breakdowns, turning offenses into an unrelenting psychological attack.",
  },
  {
    id: 56,
    year: "Slugger",
    era: "LOCAL HERO",
    headline: "The Coral Gables Slugger",
    body: "Local standouts staying home to wear team colors provided crucial power, consistency, and leadership, perfectly highlighting the strength of the local talent pipeline.",
  },
  {
    id: 57,
    year: "Friday Nights",
    era: "FRIDAY NIGHT LIGHTS",
    headline: "The Friday Night Nightmare",
    body: "Setting the tone for weekend series, elite Friday night starters thrived under bright lights, giving visiting hitters nightmares before the weekend even began.",
  },
  {
    id: 58,
    year: "Radio",
    era: "STUDENT VOICE",
    headline: "The Raw Sound of The U",
    body: "Student-run radio stations captured the unfiltered heartbeat of the team, broadcasting with raw emotion and launching generations of professional sports broadcasters.",
  },
  {
    id: 59,
    year: "2008",
    era: "ACC TITLE",
    headline: "The Return to the Top",
    body: "Capturing conference tournament titles and top overall tournament seeds, dominant campaigns proved that championship culture traveled anywhere.",
  },
  {
    id: 60,
    year: "June",
    era: "JUNE FORTRESS",
    headline: "Fortress in June",
    body: "When postseason regional rounds start, home ballparks transform into impenetrable fortresses where suffocating weather and deafening crowds crush opponent dreams.",
  },
  {
    id: 61,
    year: "Havana",
    era: "HAVANA SWING",
    headline: "The Swing from Havana",
    body: "Fearless left-handed hitters with smooth swings and terrifying power launched majestic shots that sent home crowds into absolute frenzies.",
  },
  {
    id: 62,
    year: "Dominance",
    era: "UNBEATABLE ARM",
    headline: "The Unbeatable Arm",
    body: "Historic undefeated stretches built reputations for reliable pitching aces who commanded games with cold, unflinching confidence.",
  },
  {
    id: 63,
    year: "Mascot Wedding",
    era: "BALLPARK STUNT",
    headline: "A Wedding on the Diamond",
    body: "Unforgettable promotional events like mascot weddings proved that ballparks were places where sports collided with pure, unfiltered local spectacle.",
  },
  {
    id: 64,
    year: "Hecklers",
    era: "RIGHT FIELD",
    headline: "The Right Field Roar",
    body: "Creative fan sections created psychological gauntlets for visiting outfielders, turning bleachers into a relentless theater of baseball pressure.",
  },
  {
    id: 65,
    year: "Power Hitter",
    era: "HEAVY HITTER",
    headline: "The Heavy Hitter",
    body: "Intimidating size and pure destructive swings delivered clutch hits and massive home runs, laying foundations for long professional power-hitting careers.",
  },
  {
    id: 66,
    year: "2001 CWS",
    era: "CHAMPIONSHIP MASTERPIECE",
    headline: "Completing the Masterpiece",
    body: "Clinical precision and overwhelming force in championship games sealed undefeated legacies, cementing legendary dynasties on the national stage.",
  },
  {
    id: 67,
    year: "Texas",
    era: "TEXAS TAKEDOWN",
    headline: "The Texas Takedown",
    body: "Taking down traditional national blue-bloods on the biggest stages proved that modern, high-energy styles of play had conquered college baseball.",
  },
  {
    id: 68,
    year: "Alumni",
    era: "ALUMNI GAME",
    headline: "The Fierce Alumni Battle",
    body: "Annual exhibition games featuring former Major League stars competing against current squads served as powerful reminders of elite program standards.",
  },
  {
    id: 69,
    year: "Scouts",
    era: "RADAR GUNS",
    headline: "The Scout Section",
    body: "Rows of professional scouts holding radar guns behind home plate created daily motivations, turning collegiate games into direct auditions for the majors.",
  },
  {
    id: 70,
    year: "Logo",
    era: "SYMBOL MARK",
    headline: "The Iconic Emblem Pride",
    body: "Unique visual branding communicated aggressive play, championship history, and unshakable confidence, serving as a lifestyle statement for local sports fans.",
  },
  {
    id: 71,
    year: "Weather",
    era: "STORM DELAY",
    headline: "The Rain Delay Advantage",
    body: "Unpredictable tropical thunderstorms tested visitor focus while seasoned home squads stayed loose, using weather interruptions as part of home-field advantages.",
  },
  {
    id: 72,
    year: "Aluminum",
    era: "GORILLA BALL",
    headline: "The Gorilla Ball Era",
    body: "The heavy aluminum bat era of massive offensive numbers turned ping sounds into terrifying weapons, suiting aggressive offensive philosophies.",
  },
  {
    id: 73,
    year: "Athleticism",
    era: "MULTI-SPORT",
    headline: "Elite Multi-Sport Athleticism",
    body: "Attracting athletes with rare physical gifts who brought multi-sport speed and toughness proved that regional athletes were built differently.",
  },
  {
    id: 74,
    year: "Energy",
    era: "MOMENTUM SHIFT",
    headline: "The Stadium Energy Surge",
    body: "Crowd explosions during late-inning rallies created overwhelming sensory experiences that terrified opposing pitchers and shifted momentum instantly.",
  },
  {
    id: 75,
    year: "2015",
    era: "2015 RESURGENCE",
    headline: "The Postseason Resurgence",
    body: "Gritty squads shaking off recent disappointments battled through grueling postseasons to capture super regionals and return to national prominence.",
  },
  {
    id: 76,
    year: "Practice",
    era: "PRESSURE FACTORY",
    headline: "The Pressure Factory",
    body: "Demanding internal practice cultures subjected players to grueling elimination simulations, forging mental toughness before stepping under bright lights.",
  },
  {
    id: 77,
    year: "Outfield",
    era: "BERMUDA TRIANGLE",
    headline: "The Bermuda Triangle Outfield",
    body: "Lightning-fast outfielders tracked down fly balls with incredible closing speed, frustrating opponents by turning extra-base hits into routine outs.",
  },
  {
    id: 78,
    year: "Walk-Off",
    era: "CHAOS",
    headline: "The Walk-Off Chaos",
    body: "Game-winning hits unleashed pure, unfiltered dugout celebrations, offering ultimate releases of tension and unforgettable local parties.",
  },
  {
    id: 79,
    year: "Chemistry",
    era: "CHILDHOOD BONDS",
    headline: "The Local Brotherhood",
    body: "Childhood travel-league rivalries turning into shared college uniforms created immediate, unbreakable chemistry and mutual hometown pride.",
  },
  {
    id: 80,
    year: "Retirement",
    era: "LEGENDARY FAREWELL",
    headline: "Farewell to a Legend",
    body: "Legendary coaching retirements ended monumental eras of sports innovation, leaving behind enduring legacies of showmanship and regional pride.",
  },
  {
    id: 81,
    year: "Blood Feud",
    era: "STATE WAR",
    headline: "The In-State Blood Feud",
    body: "State rivalries defined by intense emotion and high-stakes tension served as absolute wars for regional baseball supremacy.",
  },
  {
    id: 82,
    year: "Omaha",
    era: "OMAHA OR BUST",
    headline: "Omaha or Bust",
    body: "Relentless mentalities focused on singular goals created cultures where reaching national tournaments was universally expected rather than just hoped for.",
  },
  {
    id: 83,
    year: "Two Strikes",
    era: "COUNT RITUAL",
    headline: "The Two-Strike Rise",
    body: "Synchronized crowd roars during two-strike counts turned ballparks into pressure cookers, collaborating to will pitches into catcher mitts.",
  },
  {
    id: 84,
    year: "Runner-Up",
    era: "AGONY",
    headline: "The Agony of the Runner-Up",
    body: "Agonizing championship runner-up finishes were immediately weaponized as winter fuel, turning the pain of defeat into motivation for future title runs.",
  },
  {
    id: 85,
    year: "Generations",
    era: "FAMILY SEATS",
    headline: "Generations in the Stands",
    body: "Families holding exact same season tickets for decades passed down program love like family heirlooms, creating rich communal program souls.",
  },
  {
    id: 86,
    year: "Dogpile",
    era: "OMAHA MOUND",
    headline: "The Postseason Dogpile",
    body: "Visualizing glove-throwing celebrations on national championship mounds provided ultimate driving forces for grueling winter training regimens.",
  },
  {
    id: 87,
    year: "Conference",
    era: "ACC GRIND",
    headline: "The Iron Crucible Conference",
    body: "Navigating grueling conference schedules tested squads against elite pitching, using conference grinds to build battle-tested postseason contenders.",
  },
  {
    id: 88,
    year: "Torch",
    era: "NEW GENERATION",
    headline: "Carrying the Torch",
    body: "Modern players walking in the footsteps of national champions embraced team history, carrying torches with fearless swagger and unshakable confidence.",
  },
  {
    id: 89,
    year: "Sea of Colors",
    era: "VISUAL WALL",
    headline: "The Orange and Green Sea",
    body: "Sold-out regional stadiums transforming into vibrant walls of regional color weaponized fanbases to create physically heavy home-field advantages.",
  },
  {
    id: 90,
    year: "Recruiting",
    era: "AREA CODE 305",
    headline: "Recruiting the Local Pipeline",
    body: "Fierce recruiting battles in talent-rich local area codes kept elite homegrown prospects at home, serving as massive statements of regional pride.",
  },
  {
    id: 91,
    year: "First Pitch",
    era: "CEREMONIAL",
    headline: "The First Pitch Tradition",
    body: "Bringing back legendary alumni and local heroes for ceremonial first pitches bridged program history with vibrant modern presents.",
  },
  {
    id: 92,
    year: "Road Warriors",
    era: "HOSTILE STADIUMS",
    headline: "The Road Warriors",
    body: "Silencing hostile crowds and ruining weekends for opposing fanbases perfectly suited villain personas that thrived on road pressure.",
  },
  {
    id: 93,
    year: "Sundays",
    era: "RUBBER MATCH",
    headline: "The Sunday Rubber Match",
    body: "Exhausted pitching staffs and tense series-deciding Sunday matchups demanded ultimate levels of sheer willpower to secure weekend victories.",
  },
  {
    id: 94,
    year: "Locker Room",
    era: "SILENCE",
    headline: "The Empty Locker Room Silence",
    body: "Chilling locker room silences following season-ending tournament exits provided the loudest motivational燃料 for offseason workouts.",
  },
  {
    id: 95,
    year: "One U",
    era: "ATHLETIC UNITY",
    headline: "One University, One Attitude",
    body: "Shared confidence and institutional refusal to back down created unified athletic fronts across every sport on campus.",
  },
  {
    id: 96,
    year: "Grill",
    era: "BARBECUE LORE",
    headline: "The Smell of the Grill",
    body: "Barbecue scents drifting across humid evening air signaled weekend starts, making high-stakes games feel like massive neighborhood block parties.",
  },
  {
    id: 97,
    year: "The Dirt",
    era: "SACRED GROUND",
    headline: "Defending the Dirt",
    body: "Territorial pride protecting home fields ensured visiting teams knew exactly whose house they were stepping into.",
  },
  {
    id: 98,
    year: "Final Out",
    era: "RHYTHMIC BEAT",
    headline: "Standing for the Final Out",
    body: "Synchronized rhythmic clapping during final outs allowed fans to physically participate in closing out victory celebrations.",
  },
  {
    id: 99,
    year: "Evolution",
    era: "NEW ERA",
    headline: "A New Storm Rising",
    body: "Blending modern analytics with old-school toughness allowed programs to adapt rapidly while fiercely protecting legendary competitive drives.",
  },
  {
    id: 100,
    year: "Legacy",
    era: "IMMORTAL SPIRIT",
    headline: "The Eternal Spirit of Regional Pride",
    body: "Immortal program identities living in every local kid dreaming of wearing team colors prove that regional sports stories never truly stop.",
  },
];

export default function Home() {
  const [selectedArchive, setSelectedArchive] = useState(miamiArchives[0]);
  const [shareButtonText, setShareButtonText] = useState("SHARE WITH THE FAITHFUL");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * miamiArchives.length);
    setSelectedArchive(miamiArchives[randomIndex]);
  }, []);

  const handleRandomShuffle = () => {
    const randomIndex = Math.floor(Math.random() * miamiArchives.length);
    setSelectedArchive(miamiArchives[randomIndex]);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Baseball Archive Story: ${selectedArchive.headline}`,
      text: selectedArchive.body,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        // Fallback
      }
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShareButtonText("LINK COPIED! SHARE WITH FRIENDS");
      setTimeout(() => {
        setShareButtonText("SHARE WITH THE FAITHFUL");
      }, 2500);
    } catch (err) {
      alert("Share failed, please copy link manually.");
    }
  };

  const stadiumImages = [
    "/stadium-1.jpg",
    "/stadium-2.jpg",
    "/stadium-3.jpg",
    "/stadium-4.jpg",
    "/stadium-5.jpg",
    "/stadium-6.jpg",
  ];
  const randomBg = stadiumImages[selectedArchive.id % stadiumImages.length];

  return (
    <main className="min-h-screen bg-[#f47321] text-white flex flex-col justify-between selection:bg-white selection:text-[#f47321]">
      <style dangerouslySetInnerHTML={{ __html: `
        @font-face {
          font-family: 'AlfaSlabOne';
          src: url('/AlfaSlabOne-Regular.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }
        .vintage-number {
          font-family: 'AlfaSlabOne', Impact, sans-serif;
        }
      `}} />

      <header className="w-full pt-4 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/80 font-light">
            EST. ARCHIVE • BASEBALL LEGACY
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/95 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/80 font-sans font-light">
            CORAL GABLES BASEBALL CHRONICLES
          </p>
        </div>
      </header>

      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-2 pb-6 w-full relative">
        <div className="absolute inset-x-4 top-6 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        <div className="absolute inset-x-4 top-4 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        <div className="relative bg-white text-stone-950 overflow-hidden border-2 border-stone-900 rounded-none">
          <div className="relative w-full h-[230px] sm:h-[260px] flex flex-col items-center justify-center overflow-hidden border-b-2 border-stone-900 pt-6">
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={randomBg}
                alt="Stadium Archive Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="absolute inset-0 z-1 bg-black/25"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-2">
              <p className="tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 bg-white/95 px-3 py-1 border border-stone-900 shadow-sm">
                {selectedArchive.era}
              </p>
              <div className="transform -rotate-1">
                <span className="block tracking-tight text-[65px] sm:text-[85px] leading-none text-[#f47321] vintage-number drop-shadow-[0_3px_6px_rgba(0,0,0,0.8)]">
                  {selectedArchive.year}
                </span>
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8 bg-white text-center">
            <h3 className="text-xl sm:text-2xl font-serif font-extrabold mb-3 leading-snug text-stone-950 tracking-tight">
              &ldquo;{selectedArchive.headline}&rdquo;
            </h3>

            <p className="text-stone-800 text-xs sm:text-sm leading-relaxed font-serif mb-7 font-medium tracking-wide">
              &ldquo;{selectedArchive.body}&rdquo;
            </p>

            <div className="flex flex-col space-y-3 items-center">
              <button
                onClick={handleRandomShuffle}
                className="w-full bg-[#005030] hover:bg-[#003820] text-white font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center rounded-none border border-black shadow-sm cursor-pointer"
              >
                NEXT ARCHIVE CHAPTER
              </button>

              <button
                onClick={handleShare}
                className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 font-serif font-bold tracking-widest text-xs uppercase py-3 transition-all duration-300 text-center rounded-none border border-black shadow-sm cursor-pointer"
              >
                {shareButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-[#f47321] pt-4 pb-8 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1.5">
          <p className="font-serif italic text-[10px] tracking-widest text-white/90 uppercase font-bold">
            NOTUSUAL EDITION • BASEBALL CHRONICLES
          </p>
          <p className="font-serif italic text-xs text-white/95 leading-relaxed font-medium">
            Love the vintage South Florida look? Grab our prints & goods.
          </p>
          <div>
            <a
              href="https://www.etsy.com/shop/notusualcreative"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-serif tracking-widest text-xs uppercase underline underline-offset-4 hover:text-white/70 transition-colors font-bold"
            >
              VISIT OUR ETSY SHOP
            </a>
          </div>
          <div className="pt-2 border-t border-white/15 space-y-1">
            <p className="text-[9px] tracking-widest uppercase text-white/60 font-semibold">
              © NOTUSUAL CREATIVE STUDIO
            </p>
            <p className="text-[8px] tracking-wider uppercase text-white/50 font-light">
              Independent archival art studio.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
