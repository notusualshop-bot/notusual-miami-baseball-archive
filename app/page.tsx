"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const miamiArchives = [
  {
    id: 1,
    year: "1962–1963",
    era: "1962–1963 Era",
    headline: "The Day Miami Baseball Changed Forever",
    body: "Before 1963, Miami baseball was a forgotten program playing in the shadows of bigger names. They had limited resources, no national reputation, and little recognition outside South Florida. Playing on a dusty local field, the team was completely off the national radar. Nobody believed this program could survive, let alone thrive. Then, the university took a desperate gamble on a relentless young coach named Ron Fraser. He didn't just save Miami baseball from extinction; he ignited a cultural revolution. He brought an unmatched intensity that would eventually turn a club-level team into one of the most recognizable and feared programs in college baseball.",
  },
  {
    id: 2,
    year: "1963",
    era: "1963 Season",
    headline: "The Man Who Built The Storm",
    body: "When Ron Fraser stepped onto the Coral Gables campus, he inherited a program with zero funding and zero respect. But Fraser didn't just want to coach a team—he wanted to build a spectacle. Using relentless determination and creativity, he put Miami on the map. Fraser personally fought for every resource the program needed, from equipment to fan support. He promoted the program everywhere he could and convinced local businesses to invest in a wildly ambitious dream. Through sheer force of will, he constructed the foundation of a baseball dynasty, establishing a ruthless, winning culture that would soon terrify traditional powerhouses.",
  },
  {
    id: 3,
    year: "1970s",
    era: "1970s Era",
    headline: "The Wizard of Coral Gables",
    body: "Long before the rest of the country figured out how to market college baseball, Miami was putting on a nightly circus in South Florida. Earning the nickname 'The Wizard of College Baseball,' Ron Fraser transformed Hurricanes games into must-see entertainment. He introduced the legendary Miami Maniac mascot, hosted wild promotional events like 'Dinner on the Diamond,' and turned a simple collegiate game into a massive local party. This wasn't just a gimmick; it was psychological warfare. By blending elite, high-speed baseball with pure Miami showmanship, the Hurricanes made Coral Gables one of the most intimidating places to play.",
  },
  {
    id: 4,
    year: "1974",
    era: "1974 Season",
    headline: "The Night Miami Arrived In Omaha",
    body: "By the early 1970s, the Hurricanes were no longer just a local attraction trying to survive. They were a rising force ready to shock the establishment. In 1974, Miami did the unthinkable: a southern school with little national baseball tradition battered its way to the College World Series. This wasn't a team built on quiet tradition. They were loud, fast, and fiercely competitive, carrying the unmistakable swagger of their city. When they arrived in Omaha, the traditional blue-bloods of college baseball were stunned. The Hurricanes didn't just show up to participate; they arrived to take over, officially announcing the birth of a new national power.",
  },
  {
    id: 5,
    year: "1970s–1980s",
    era: "1970s–1980s Era",
    headline: "The Backyard That Built A Dynasty",
    body: "The ultimate secret weapon behind the Miami baseball empire wasn't just tactics—it was the untamed, raw talent in their own backyard. Recognizing that South Florida was a goldmine for elite prospects, the Hurricanes built one of the strongest local pipelines in college baseball. Instead of losing highly touted local prodigies to established northern schools, Miami convinced the best athletes to stay home and build a legacy for their own city. This pipeline injected the roster with unmatched speed, power, and attitude. It forged a brotherhood of local kids who played with a massive chip on their shoulder and a deep pride in 'The U.'",
  },
  {
    id: 6,
    year: "Mid-1970s",
    era: "Mid-1970s Era",
    headline: "The Birth of the Miami Swagger",
    body: "The infamous Miami swagger didn't just appear overnight. Baseball helped create the attitude that would later define Miami sports. Dressed in vibrant orange and green, the Hurricanes played with a loud, aggressive style that defied the country-club etiquette of traditional baseball. They stole bases relentlessly, celebrated massive hits with unfiltered emotion, and turned every game into a fiercely competitive battle. This unapologetic attitude made them the villains of college baseball to outsiders, but absolute heroes to the people of South Florida.",
  },
  {
    id: 7,
    year: "1973",
    era: "1973 Season",
    headline: "The House That Orange and Green Built",
    body: "A championship team needs a fortress. In 1973, through relentless fundraising and community support, a basic local field was transformed into Mark Light Stadium. But it wasn't built like a normal college ballpark. The design brought the seats incredibly close to the action. The dugouts were tight, the crowd was right on top of the players, and the atmosphere was deafening. It became a terrifying snake pit for visiting opponents and the ultimate weekend party for Miami locals.",
  },
  {
    id: 8,
    year: "Late 1970s",
    era: "Late 1970s Era",
    headline: "Embracing the Villain Role",
    body: "As Miami’s dominance grew, so did the target on their backs. The college baseball establishment—built on quiet tradition and unspoken rules—didn't know how to handle the Hurricanes. Miami players wore their emotions on their sleeves and played with an aggressive, emotional style that infuriated purists. Opposing fans ruthlessly booed them, and rival coaches despised their theatrics. But the hatred only fueled the storm. Instead of apologizing, Miami embraced the villain role, using the hostility of road crowds as pure motivation to completely dismantle their opponents.",
  },
  {
    id: 9,
    year: "1970s–1980s",
    era: "1970s–1980s Era",
    headline: "The Secret Behind the Winning Culture",
    body: "What made Miami baseball truly unstoppable wasn't just the raw talent; it was the brutal internal accountability. In Coral Gables, the standard was different. Players weren't just preparing to win games; they were preparing to carry the weight of 'The U.' Practices were notoriously harder than actual games. Upperclassmen pushed freshmen to their absolute breaking points. If you couldn't handle the pressure of your own teammates, you had no chance of surviving the blinding spotlight of Omaha. This iron-sharpens-iron mentality created a locker room where losing was never just disappointing—it was completely unacceptable.",
  },
  {
    id: 10,
    year: "1978",
    era: "1978 Season",
    headline: "The Storm Demands Respect",
    body: "By the late 1970s, the Hurricanes were consistently knocking on the door of a national championship. The national narrative rapidly shifted from 'Miami is a flashy underdog' to 'Miami is a legitimate monster.' They began routinely defeating established titans, proving their high-octane style could win on the biggest stages. The media and rival programs could no longer dismiss their antics as mere showmanship. The foundation of the empire had been poured, dried, and tested in battle. The Hurricanes forced the baseball establishment to respect the storm, setting the stage for the championship era that would follow.",
  },
  {
    id: 11,
    year: "1982",
    era: "1982 Season",
    headline: "The Miracle That Started Everything",
    body: "Miami arrived in Omaha for the 1982 College World Series not as the heavy favorites, but as a team of destiny. For years, the Hurricanes had knocked on the door of greatness, only to be turned away. But this time, they refused to be denied. Playing with their signature South Florida swagger, disciplined defense, and fearless baseball, they battled through a grueling bracket to capture the program's first National Championship. It validated everything coach Ron Fraser had built. It wasn't just a trophy; it was undeniable proof that the loud, aggressive kids from Coral Gables could conquer the college baseball world.",
  },
  {
    id: 12,
    year: "1985",
    era: "1985 Season",
    headline: "Proving It Was No Accident",
    body: "Winning one national title could be called a miracle, but winning two creates a dynasty. In 1985, the Hurricanes returned to Omaha with a massive target on their backs. Showcasing their absolute resilience, they battled through Omaha against the nation's best teams. They didn't blink under the pressure. Instead, they secured their second national crown. This run cemented Miami’s status as a relentless powerhouse that could perform when the lights were the brightest.",
  },
  {
    id: 13,
    year: "1999",
    era: "1999 Season",
    headline: "The Return of the Hurricanes",
    body: "By the late 1990s, some critics wondered if Miami’s golden era had quietly passed. In 1999, a new generation of Hurricanes silenced those doubters. Playing with the classic, aggressive style that defined the program's roots, they stormed through the postseason and brought the national championship trophy back to Coral Gables. It was a deeply emotional victory for the fanbase, proving that the winning culture wasn't tied to a specific decade—it was embedded in the jersey.",
  },
  {
    id: 14,
    year: "2001",
    era: "2001 Season",
    headline: "The Greatest Hurricane Team Ever Built",
    body: "The 2001 Miami Hurricanes didn't just win a national championship; they completely overwhelmed the competition. Armed with a roster packed with future major leaguers, this team was practically untouchable. They dismantled opponents with an explosive offense and suffocating pitching, leaving no doubt about who owned college baseball. Playing with an unbelievable level of confidence, they marched through Omaha and claimed the program's fourth national title. To this day, the 2001 squad is widely considered one of the most dominant teams in the history of the sport.",
  },
  {
    id: 15,
    year: "Tradition",
    era: "Game Day Tradition",
    headline: "The Shake That Became A Tradition",
    body: "You can’t talk about Miami baseball without talking about the famous Mark Light Shake. What started as a simple ballpark concession evolved into a sacred game-day ritual. For generations of Hurricanes fans, waiting in line for this legendary milkshake is as important as the first pitch. It’s a taste of a South Florida childhood and a staple of the Coral Gables experience. In a sport obsessed with traditions, this sweet treat became the ultimate symbol of a Miami baseball weekend.",
  },
  {
    id: 16,
    year: "Rivalry",
    era: "Rivalry Era",
    headline: "Bad Blood: The Florida State War",
    body: "In the state of Florida, orange and green violently clashes with garnet and gold. The rivalry between Miami and Florida State isn’t just a game; it’s a turf war. For decades, these two programs have battled for in-state supremacy and national titles on the diamond. The games are defined by intense rivalries, unforgettable moments, and nonstop pressure. It doesn't matter what the rankings are when these two meet—it's always a heavyweight fight where pride means everything.",
  },
  {
    id: 17,
    year: "Tradition",
    era: "Baseball Tradition Era",
    headline: "The Legend Behind The Madness",
    body: "While Sebastian the Ibis ruled the football field, Mark Light Field belonged to the Miami Maniac. Introduced to inject pure entertainment into college baseball, the Maniac quickly became a local legend. With wild on-field antics, crowd-surfing, and chaotic routines, the mascot perfectly embodied the unpredictable, fun-loving spirit of the Hurricanes. He turned slow innings into comedy shows and made sure that even on a bad night, the fans went home smiling.",
  },
  {
    id: 18,
    year: "Excellence",
    era: "Decades of Excellence",
    headline: "The Pipeline to the Big Leagues",
    body: "For decades, Mark Light Field has served as a direct pipeline to the major leagues. Fans in Coral Gables have had the rare privilege of watching future Major League stars take their very first swings in a Hurricanes uniform. The program’s ability to develop raw talent into professional standouts is unmatched. When you watch a Miami game, you aren't just watching college athletes; you are watching the future of professional baseball taking shape right in front of you.",
  },
  {
    id: 19,
    year: "Atmosphere",
    era: "Community Culture",
    headline: "The Magic of Friday Nights",
    body: "There is nothing in college sports quite like a Friday night in Coral Gables. As the South Florida sun sets over Mark Light Field, the smell of barbecue fills the air, fans line up for their Mark Light Shakes, and a sea of orange and green fills the stands. It’s more than a baseball game; it’s a weekly family reunion for the Miami faithful. The energy is electric, the crowd is right on top of the action, and the home-field advantage is absolute. Under those lights, the Hurricanes become invincible.",
  },
  {
    id: 20,
    year: "Legacy",
    era: "The Enduring Legacy",
    headline: "The Eternal Spirit of Miami Baseball",
    body: "Championships are won and lost, and rosters change every year, but the spirit of Miami baseball remains unbroken. It lives in the bright orange and green jerseys, the deafening roar of the hometown crowd, and the unwavering confidence of every player who steps onto the diamond. From their scrappy, underfunded beginnings to their reign as national champions, the Hurricanes have always played for more than just a trophy. They play for the fierce pride of 'The U.'",
  },
  {
    id: 21,
    year: "1994",
    era: "1994 Season",
    headline: "Taking the Torch",
    body: "Following a legendary coach is supposed to be the hardest job in sports. When Jim Morris took over the Miami program in 1994, he didn't just inherit a team; he inherited the crushing weight of massive expectations. Fans didn't just want winning seasons; they demanded trips to Omaha. Instead of shrinking under the pressure, Morris embraced it. He seamlessly kept the Hurricanes' aggressive swagger alive while instilling his own relentless discipline. He didn't just maintain the empire; he elevated it, guiding the team to two more national championships and proving that the winning culture in Coral Gables was built to last.",
  },
  {
    id: 22,
    year: "1989–1991",
    era: "1989–1991 Era",
    headline: "Before the Pinstripes",
    body: "Long before he became a five-time World Series champion and the heart of the New York Yankees dynasty, Jorge Posada was a fierce competitor wearing orange and green. Arriving at Miami, Posada played with an intense, fiery passion that perfectly matched the South Florida heat. He wasn't just a talented player; he was a natural leader who refused to back down from any challenge. His time in Coral Gables helped forge the relentless work ethic and mental toughness that would eventually make him one of the most respected players in Major League Baseball history.",
  },
  {
    id: 23,
    year: "1996–1998",
    era: "1996–1998 Era",
    headline: "The Unstoppable Power Bat",
    body: "There are great hitters, and then there was Pat Burrell. During his time at Miami, Burrell was widely considered the most terrifying presence in college baseball. Opposing pitchers didn't just respect him; they feared him. With a powerful swing and massive raw power, he could change the outcome of a game with a single crack of the bat. He dominated the sport, winning the prestigious Golden Spikes Award as the best amateur player in the country, and became the ultimate symbol of Miami's explosive, high-scoring offense in the late 1990s.",
  },
  {
    id: 24,
    year: "1973–2016",
    era: "44-Year Streak",
    headline: "The 44-Year Streak",
    body: "Consistency is the hardest thing to achieve in college sports. For an astonishing 44 consecutive years, the Miami Hurricanes reached the NCAA Tournament. Let that sink in. From 1973 to 2016, through multiple head coaches, countless roster changes, and shifting eras of college baseball, Miami never missed the NCAA Tournament. It is a staggering record of excellence that defies logic. While other elite programs experienced rebuilding years and missed opportunities, the Hurricanes simply reloaded. Year after year, making the tournament wasn't a goal for Miami—it was a birthright.",
  },
  {
    id: 25,
    year: "Rivalry",
    era: "Rivalry Era",
    headline: "The Battle for the Sunshine State",
    body: "Florida State isn't the only team that makes Miami's blood boil. The rivalry with the Florida Gators is a brutal fight for state supremacy. It is a clash of two entirely different cultures: the flashy, aggressive city swagger of Coral Gables versus the traditional, college-town pride of Gainesville. When these two teams meet on the diamond, the intensity rivals a College World Series final. The dugouts are loud, every pitch carries extra pressure, and every single out is violently contested. In the Sunshine State, bragging rights are everything.",
  },
  {
    id: 26,
    year: "2003–2005",
    era: "2003–2005 Era",
    headline: "The Blueprint of a Superstar",
    body: "When Ryan Braun arrived at Miami, it didn't take long for everyone to realize they were watching a generational talent. He was an absolute offensive machine, combining elite speed with incredible power. Braun played the game with a smooth, effortless confidence that made the hardest sport look incredibly easy. Earning Freshman All-American honors, he completely dismantled opposing pitching staffs and became one of the most dangerous offensive weapons in college baseball. His dominance in Coral Gables was just the preview of a career that would ultimately lead to a Major League MVP award.",
  },
  {
    id: 27,
    year: "2009",
    era: "2009 Era",
    headline: "A-Rod's Tribute to The U",
    body: "Alex Rodriguez never officially played a college game for the Hurricanes—he was drafted first overall straight out of high school. But growing up in Miami, the Hurricanes were a major part of his South Florida baseball identity. Years later, as a global baseball icon, Rodriguez made a massive donation to renovate the legendary stadium, which was renamed Alex Rodriguez Park at Mark Light Field. It was the ultimate sign of respect. Even a player who bypassed college to become an MLB superstar recognized that the heart and soul of South Florida baseball belonged to Coral Gables.",
  },
  {
    id: 28,
    year: "MLB Pipeline",
    era: "The MLB Pipeline",
    headline: "The Ultimate Baseball Factory",
    body: "Every summer, the Major League Baseball draft becomes an unofficial showcase for the University of Miami. The program has consistently produced MLB stars, elite prospects, and future big-league talent. But Miami doesn't just produce talented players; it produces players who are ready for the pressure of the big leagues. When an MLB front office drafts a Hurricane, they know exactly what they are getting: a tough, battle-tested competitor who isn't intimidated by the bright lights.",
  },
  {
    id: 29,
    year: "Modern Era",
    era: "Modern Miami Era",
    headline: 'Throwing Up "The U"',
    body: 'It is a simple gesture with two hands, but it carries the weight of an entire community. When a Miami baseball player hits a massive home run or turns a clutch double play, you know exactly what happens next: they throw up "The U." It connects the baseball team to the football team, the alumni to the current students, and the city to the university. It is a universal symbol of South Florida pride, a warning to the opponent, and a reminder that when you play Miami, you are playing an entire culture.',
  },
  {
    id: 30,
    year: "Pursuit",
    era: "The Pursuit of Greatness",
    headline: "The Heartbreaks That Built Champions",
    body: "You don't become a dynasty without tasting bitter defeat. For every glorious championship celebration in Omaha, there were agonizing heartbreaks. There were seasons where incredibly talented Miami teams were eliminated by a single run, a bad bounce, or a late-inning collapse. But in Coral Gables, failure was never fatal; it was fuel. Those brutal losses forged the mental toughness of the program. The players who fell short passed their hunger onto the next recruiting class, ensuring that the fire inside the locker room never burned out.",
  },
  {
    id: 31,
    year: "1982",
    era: "1982 CWS",
    headline: "The Grand Illusion",
    body: 'In the 1982 College World Series, Miami didn\'t just beat Wichita State; they pulled off one of the greatest trick plays in baseball history. Known as "The Grand Illusion," pitcher Mike Kasprzak faked a pickoff throw to first base. The entire Miami infield sold the fake perfectly, diving as if the ball had been overthrown into the dirt. While the Wichita State runner sprinted toward second base in a panic, Kasprzak casually stepped off the mound before revealing the ball and completing one of the most famous hidden-ball tricks in College World Series history. It was a play that required absolute nerve and flawless execution on the biggest stage. It perfectly captured the fearless, creative swagger of the Hurricanes.',
  },
  {
    id: 32,
    year: "Excellence",
    era: "Multi-Decade Excellence",
    headline: 'The Ultimate "Catcher U"',
    body: "Some programs are known for pitchers, others for power hitters. But Coral Gables has a different, unique reputation: it is the ultimate factory for elite catchers. From Charles Johnson and Jorge Posada to Yasmani Grandal, the Hurricanes have consistently produced the men who control the game from behind the plate. Playing catcher at Miami requires more than just physical talent; it demands incredible baseball IQ, toughness, and the ability to manage the intense pressure of a championship pitching staff. When a scout sees a catcher wearing orange and green, they know they are looking at a field general ready for the big leagues.",
  },
  {
    id: 33,
    year: "1990–1992",
    era: "1990–1992 Era",
    headline: "The Defensive Masterpiece",
    body: "Long before he won four Gold Gloves in the Major Leagues, Charles Johnson was setting an impossible standard behind the plate for the Hurricanes. Johnson was an absolute defensive wall. He possessed a terrifyingly strong throwing arm that completely shut down opposing running games and a quiet confidence that controlled the entire field. Opposing runners knew stealing bases against Johnson was a dangerous gamble. He wasn't just a great player; he fundamentally changed how opponents had to scheme against Miami. His dominance in Coral Gables established him as one of the greatest defensive catchers in college baseball history.",
  },
  {
    id: 34,
    year: "1994–1996",
    era: "1994–1996 Era",
    headline: "The General of the Infield",
    body: "Before he became a World Series champion manager, Alex Cora was the heartbeat of the Miami Hurricanes infield. Playing with incredible instincts and a sky-high baseball IQ, Cora was the ultimate field general during the mid-1990s. He wasn't always the biggest or loudest player on the field, but he was always the smartest. Cora had a knack for making the impossible defensive play look routine and delivering a clutch hit exactly when the team needed it most. He helped lead Miami to the College World Series championship game in 1996, cementing his legacy as one of the most brilliant minds to ever wear the uniform.",
  },
  {
    id: 35,
    year: "Omaha",
    era: "The Omaha Tradition",
    headline: "Tickets to Omaha",
    body: "For most college baseball programs, reaching the College World Series in Omaha is a once-in-a-lifetime achievement. For the Miami Hurricanes, it is a business trip. With more than two dozen appearances in the College World Series, Miami has treated the most exclusive stage in college sports like a second home. This sheer volume of success is almost impossible to comprehend. It means that generation after generation of Hurricanes players have walked into the pressure cooker of Omaha and thrived. It is a testament to a program that doesn't rebuild; it simply reloads and books another ticket to Nebraska.",
  },
  {
    id: 36,
    year: "1992",
    era: "1992 Olympics",
    headline: "Taking The Storm to the Olympics",
    body: 'In 1992, baseball returned to the Olympic stage in Barcelona, and Team USA needed a leader. Naturally, they turned to "The Wizard," Miami head coach Ron Fraser. Fraser didn\'t just take his brilliant coaching mind to the Barcelona Games; he took the unapologetic swagger of Coral Gables to the global stage. Having the leader of the Hurricanes manage the United States National Team was the ultimate recognition of Miami\'s baseball supremacy. It proved that the winning culture forged at Mark Light Field wasn\'t just respected across the country—it was respected across the entire world.',
  },
  {
    id: 37,
    year: "2004–2006",
    era: "2004–2006 Era",
    headline: "The Hometown Spark",
    body: 'Born and raised in Miami, Jon Jay grew up understanding exactly what "The U" meant to his city. When he finally put on the orange and green uniform, he played like a man defending his own backyard. Jay was a relentless offensive spark plug, a brilliant outfielder, and a key contributor during the mid-2000s. He represented the absolute best of the South Florida pipeline: a local kid with endless hustle who refused to let his team lose. Jay’s fierce competitiveness at Miami launched a long, successful Major League career, proving once again that South Florida talent is simply built different.',
  },
  {
    id: 38,
    year: "Visual",
    era: "Visual Tradition",
    headline: "The Orange and Green Armor",
    body: 'In sports, uniforms are usually just fabric. But in Coral Gables, the bright orange and green jerseys act as psychological warfare. Over the decades, Miami has worn some of the most vibrant, unapologetic uniform combinations in college baseball. While traditional programs stick to quiet, conservative colors, the Hurricanes take the field looking loud, bold, and heavily armored. Opponents step onto the diamond and are immediately intimidated by the sheer visual presence of "The U." It isn\'t just about fashion; it is about carrying the vibrant, fearless energy of South Florida right on their backs.',
  },
  {
    id: 39,
    year: "Mark Light",
    era: "Mark Light Magic",
    headline: "The Late-Inning Magic",
    body: "There is a terrifying feeling that creeps into the visiting dugout at Mark Light Field during the late innings. No matter the score, opponents know the game is never safe. The Hurricanes have a long, terrifying history of orchestrating impossible late-inning comebacks in front of their home crowd. Whether it’s a sudden barrage of extra-base hits or a chaotic, station-to-station rally, Miami thrives in the pressure of the final outs. Fed by the deafening roar of the hometown fans, the team flips a switch, breaking the spirit of the opposition when they least expect it.",
  },
  {
    id: 40,
    year: "2004–2008",
    era: "2004–2008 ACC Era",
    headline: "Conquering a New Conference",
    body: "When Miami transitioned to the Atlantic Coast Conference (ACC) in 2004, some critics wondered if the Hurricanes’ dominance would fade against a new, grueling schedule of traditional baseball powers. The Hurricanes answered by completely taking over. By 2008, Miami had absolutely conquered the ACC, winning the conference championship and securing the number one overall seed in the NCAA Tournament. They proved that it didn't matter what conference logo was painted on the field. The speed, the power, and the unmistakable Miami swagger could dominate any league in the country.",
  },
  {
    id: 41,
    year: "1999",
    era: "1999 CWS Final",
    headline: "The Ultimate Rivalry on the Ultimate Stage",
    body: "Miami and Florida State hated each other. They had battled for in-state supremacy for decades. But in 1999, the rivalry reached its absolute peak when they met in the College World Series championship game in Omaha. The stakes couldn't have been higher: a national title against your bitterest enemy. In a tense championship battle, Miami leaned on its championship pedigree and clutch pitching to secure a dramatic 6-5 victory. Winning a national title is the dream of every college program, but winning it by taking down your biggest rival on national television? That is the stuff of pure Miami legend.",
  },
  {
    id: 42,
    year: "Tradition",
    era: "1970s–Present",
    headline: "The Sweetest Tradition in Baseball",
    body: 'When Ron Fraser was trying to turn Miami baseball into a local spectacle, he realized he needed more than just a good team—he needed an experience. He created "The Sugarcanes," a dedicated group of student bat girls who became an instant game-day staple. Dressed in orange and green, they brought energy, charm, and a uniquely South Florida flair to Mark Light Field. They didn\'t just retrieve bats; they helped transform a traditional college sport into an absolute event. The tradition has remained one of the most beloved pieces of Hurricanes culture.',
  },
  {
    id: 43,
    year: "Culture",
    era: "Multi-Decade Tradition",
    headline: "The Heartbeat of Havana in Coral Gables",
    body: "You cannot tell the story of Miami Hurricanes baseball without recognizing the influence of South Florida's Cuban-American culture. For decades, the program has been enriched by the passion, flair, and baseball traditions of players with deep Hispanic roots. Stars like Jorge Posada and Yonder Alonso carried that South Florida baseball tradition onto Mark Light Field, bringing a distinct, fiery style of play to the game. The stadium air is frequently filled with the sounds of Spanish cheers and the vibrant culture of Miami. The team embraced the heritage of its city, forging a powerful bond with the local community that goes far beyond baseball.",
  },
  {
    id: 44,
    year: "1992–1994",
    era: "1992–1994 Era",
    headline: "Closing the Door",
    body: "In the high-stakes world of college baseball, the ninth inning belongs to the closers. And nobody slammed the door shut quite like Danny Graves. Pitching for the Hurricanes in the early 1990s, Graves was the ultimate late-inning assassin. When he emerged from the bullpen, opponents knew the game was effectively over. Armed with a devastating arsenal and ice-cold composure, he thrived in the highest-pressure moments. He became one of the most dominant closers in Miami baseball history, setting a standard for Hurricanes relief pitchers during his era.",
  },
  {
    id: 45,
    year: "1996",
    era: "1996 CWS",
    headline: "The Heartbreak of '96",
    body: "The path to greatness is often paved with devastating heartbreak. In the 1996 College World Series championship game, the Hurricanes were just one out away from capturing the national title. But in a cruel twist of fate, LSU hit a dramatic walk-off home run in the bottom of the ninth inning, snatching the championship away in the blink of an eye. It was one of the most crushing defeats in Miami sports history. But the program didn't crumble. That brutal loss hardened the returning players, fueling a relentless drive that would culminate in a national title just three years later.",
  },
  {
    id: 46,
    year: "Brotherhood",
    era: "1980s–1990s",
    headline: "The Brotherhood of The U",
    body: 'During the golden eras of Miami athletics, the baseball and football programs didn\'t just share a campus; they shared an attitude. There was a unique, unbreakable brotherhood between the two teams. Football players and baseball players fed off each other\'s success and unmatched South Florida swagger. The football team dominated the gridiron with intimidation, and the baseball team brought that exact same aggressive energy to the diamond. Together, they made "The U" the most feared athletic brand in the country.',
  },
  {
    id: 47,
    year: "2001",
    era: "June 9, 2001",
    headline: "The Omaha Avalanche",
    body: "The 2001 Miami Hurricanes were an offensive machine, but their performance against Tennessee in the College World Series was simply terrifying. On college baseball's biggest stage, against elite pitching, Miami unleashed an absolute avalanche. They battered the Volunteers, scoring an astonishing 21 runs and recording 20 hits in a brutal 21-13 victory. It was a relentless offensive clinic that left the entire country speechless. The Hurricanes didn't just want to win; they wanted to completely break the will of their opponents. It was a powerful statement that the 2001 team was playing an entirely different game than everyone else.",
  },
  {
    id: 48,
    year: "Tradition",
    era: "Annual Tradition",
    headline: "The Winter Brotherhood",
    body: "One of the greatest secrets of the Miami baseball program happens when the stadium is mostly empty. Throughout the offseason, former Hurricanes who reach the Major Leagues often return to Coral Gables to train and reconnect with the program. They don't go to exclusive private facilities; they come back to Mark Light Field. Current college players find themselves taking batting practice alongside All-Stars and World Series champions. This incredible tradition bridges the gap between generations, reminding every young player putting on the orange and green that they are part of a lifelong fraternity.",
  },
  {
    id: 49,
    year: "1979–1981",
    era: "1979–1981 Era",
    headline: "The Strikeout Machine",
    body: "Before the national championships and the massive television deals, Neal Heaton was putting the college baseball world on notice. Pitching for Miami in the late 1970s and early 1980s, Heaton was a pure strikeout machine. He threw with incredible velocity and an aggressive mentality that completely overwhelmed hitters. He became one of the early pitching stars who helped transform Miami into a national contender, earning two-time All-American honors in the process. Heaton’s brilliance on the mound helped elevate the program from a rising regional threat to a legitimate powerhouse right on the brink of their first championship.",
  },
  {
    id: 50,
    year: "Voice",
    era: "Generations of Baseball",
    headline: "The Voice of Mark Light Field",
    body: "Players graduate and coaches retire, but for generations of Hurricanes fans, one familiar voice has been part of the Mark Light Field experience: Jay Rokeach. Taking over as the public address announcer, Rokeach has been the soundtrack of Miami baseball through every era of its modern history. His distinctive delivery, calm demeanor, and deep understanding of the game have made him a beloved institution in Coral Gables. He has called the names of unknown freshmen and future Hall of Famers alike. To the Miami faithful, a game simply doesn't feel official until they hear his voice echo across the stadium.",
  },
  {
    id: 51,
    year: "1970s",
    era: "1970s Showmanship",
    headline: "A Night in a Tuxedo",
    body: "Ron Fraser understood that college baseball in the 1970s was competing with the beach, the NFL, and the nightlife of Miami. To get fans into the stadium, he became the ultimate showman. In one of his most legendary promotional stunts, Fraser actually managed a game wearing a full, formal tuxedo. He wasn't just coaching a baseball game; he was throwing a South Florida gala on the dirt. From hiring skywriters to wild giveaways, Fraser treated Mark Light Field like a Broadway stage. He taught the entire sport that entertainment and elite baseball could completely coexist.",
  },
  {
    id: 52,
    year: "1994–1997",
    era: "1994–1997 Era",
    headline: "The Unbreakable Arm",
    body: "In a program famous for producing hard-throwing, intimidating pitchers, J.D. Arteaga took a different path to greatness. He didn't have a 100-mph fastball, but he possessed an unmatched baseball IQ and the heart of an absolute lion. A local kid from Miami, Arteaga simply refused to lose. He outsmarted batters, manipulated speeds, and competed with a fiery intensity that embodied the Hurricanes' spirit. He finished his career among the most successful pitchers in Miami history, becoming a symbol of toughness and consistency. He proved that true pitching dominance isn't just about arm strength; it’s about absolute mental toughness.",
  },
  {
    id: 53,
    year: "Swagger",
    era: "The Swagger Era",
    headline: "Breaking the Unwritten Rules",
    body: "For over a century, baseball’s unwritten rules demanded that players keep their heads down and hide their emotions. The Miami Hurricanes completely ignored them. They celebrated big moments with emotion, confidence, and the unmistakable swagger of South Florida. Traditional purists and opposing coaches hated it, calling it disrespectful. But to the Hurricanes, it was just the unapologetic culture of their city. They brought vibrant, expressive energy to the diamond, helping redefine the image of college baseball.",
  },
  {
    id: 54,
    year: "1990",
    era: "1990 Season",
    headline: "The Golden Ace",
    body: "When Alex Fernandez took the mound, the game felt wildly unfair for the opponent. He didn't just beat hitters; he completely overwhelmed them. Armed with devastating breaking pitches and pinpoint command, Fernandez put together one of the most dominant pitching seasons in Miami baseball history. He racked up strikeouts at an astonishing pace, leading the Hurricanes with supreme confidence. His dominant season earned him national recognition and cemented his place among Miami's greatest pitchers.",
  },
  {
    id: 55,
    year: "Basepaths",
    era: "1980s–1990s",
    headline: "Havoc on the Basepaths",
    body: "While fans loved the massive home runs, the true terror of playing Miami came from their aggressive base running. The Hurricanes didn't just wait for a big hit; they pressured defenses with aggressive baserunning, smart execution, and constant movement. Opposing pitchers were constantly looking over their shoulders, terrified of the speed on the basepaths. This relentless, high-pressure style forced opponents into crucial errors and mental breakdowns.",
  },
  {
    id: 56,
    year: "Mid-2000s",
    era: "Mid-2000s Era",
    headline: "The Coral Gables Slugger",
    body: "Gaby Sanchez was the perfect embodiment of the Miami baseball dream. Growing up in the shadow of the university, he stayed home to wear the orange and green, and he made sure the hometown fans never regretted it. Sanchez was a devastating offensive weapon, providing power, consistency, and leadership during the Hurricanes’ mid-2000s seasons. He played with a deep, emotional connection to the city, carrying the offensive load when the team needed it most. His journey from local standout to Hurricane hero perfectly highlighted the strength of the Miami pipeline.",
  },
  {
    id: 57,
    year: "Tradition",
    era: "Multi-Decade Tradition",
    headline: "The Friday Night Nightmare",
    body: "In college baseball, the tone of an entire weekend series is set on Friday night. At Mark Light Field, that meant facing the Hurricanes' absolute best. Miami has a long tradition of developing elite Friday night starters. These were the pitchers who thrived under the bright lights, threw with devastating power, and stared down the opponent’s best hitters without blinking. For visiting teams, stepping into the batter's box on a Friday night in Coral Gables often felt like the weekend was over before it even began.",
  },
  {
    id: 58,
    year: "Broadcasting",
    era: "Decades of Broadcasting",
    headline: "The Raw Sound of The U",
    body: "While major television networks occasionally dropped in, the true, unfiltered heartbeat of Miami baseball has always been captured by WVUM 90.5 FM, the student radio station. For decades, passionate student broadcasters have sat high above Mark Light Field, calling the game with an authenticity and raw emotion that professional networks could never replicate. They live and die with every pitch, perfectly channeling the anxiety, joy, and sheer madness of the student body. The booth became a launching point for generations of passionate student broadcasters, making it a vital piece of the program’s rich cultural history.",
  },
  {
    id: 59,
    year: "2008",
    era: "2008 Season",
    headline: "The Return to the Top",
    body: 'After joining the ACC, Miami quickly proved that its championship culture traveled anywhere. In 2008, the Hurricanes captured the ACC Tournament title and earned the No. 1 overall seed in the NCAA Tournament. Playing with a massive chip on their shoulder, they navigated one of the nation\'s toughest conference schedules and reminded the entire country that "The U" doesn\'t fade away; it simply reloads. It was a dominant campaign that silenced any doubts about Miami’s ability to rule a new era of college baseball.',
  },
  {
    id: 60,
    year: "June",
    era: "The Omaha Push",
    headline: "Fortress in June",
    body: "At the University of Miami, the true test begins when June arrives. When the postseason regional rounds start, Mark Light Field transforms into an impenetrable fortress. The South Florida heat becomes suffocating, the crowd reaches a deafening pitch, and the Hurricanes play with a desperate, win-or-go-home intensity. Over the decades, countless visiting teams have arrived in Coral Gables with Omaha dreams, only to have them completely crushed under the weight of the Miami postseason atmosphere.",
  },
  {
    id: 61,
    year: "2006–2008",
    era: "2006–2008 Era",
    headline: "The Swing from Havana",
    body: "Yonder Alonso didn’t just play for Miami; he embodied the soul of the city. A Cuban-American kid who developed his game in South Florida, Alonso grew into one of the most feared left-handed hitters of his era. With a smooth, effortless swing and terrifying raw power, he became the ultimate run-producer for the Hurricanes. He didn't just hit home runs; he launched majestic, game-changing shots that sent Mark Light Field into an absolute frenzy. Alonso represented the ultimate dream for local kids: dominating in your own backyard before taking that homegrown power to the Major Leagues.",
  },
  {
    id: 62,
    year: "2004–2005",
    era: "2004–2005 Era",
    headline: "The Unbeatable Arm",
    body: "In the long, storied history of Miami pitching, Cesar Carrillo did something that almost defies belief. He began his collegiate career with a remarkable undefeated stretch, building a reputation as one of the most reliable aces in college baseball. Carrillo pitched with remarkable command and a cold, unflinching confidence. Opposing teams knew exactly who was pitching, but for a long stretch, they were completely powerless to stop him. He was an absolute machine, etching his name into the Miami history books as one of the most respected pitchers ever to wear the uniform.",
  },
  {
    id: 63,
    year: "1983",
    era: "1983 Stunt",
    headline: "A Wedding on the Diamond",
    body: 'Ron Fraser’s promotional genius knew absolutely no bounds. In 1983, he decided that a simple baseball game wasn’t enough entertainment, so he created one of his most unforgettable promotional events: a wedding ceremony for the Miami Maniac mascot. In front of a packed stadium of roaring fans, the Maniac tied the knot on the field, complete with a bridal party, a massive cake, and local television coverage. It was utterly absurd, brilliantly executed, and perfectly Miami. It proved that Mark Light Field was a place where college baseball collided with pure, unfiltered spectacle, creating memories that fans still laugh about decades later.',
  },
  {
    id: 64,
    year: "Mark Light",
    era: "Mark Light Tradition",
    headline: "The Right Field Roar",
    body: "Visiting outfielders dread playing at Mark Light Field, and it’s entirely because of the fans. The right-field seating area is known for hosting some of the most vocal, relentless, and creative hecklers in college baseball. They don't just boo; they do their homework. They know the opponents, their tendencies, and every detail they can use to create unforgettable moments. It is a psychological gauntlet for any opposing player. The fans don't just watch the game; they actively participate in dismantling the opponent’s focus.",
  },
  {
    id: 65,
    year: "1997–1999",
    era: "1997–1999 Era",
    headline: "The Heavy Hitter",
    body: "During the late 1990s, the Miami offense was a relentless juggernaut, and Aubrey Huff was the engine driving the destruction. Huff was a massive presence in the batter's box, combining intimidating size with a pure, destructive swing. He consistently delivered clutch hits and massive home runs, becoming a key part of a team that was building toward a national title. His ability to drive in runs in the most high-pressure situations made him a nightmare for opposing pitching staffs. Huff’s dominance in Coral Gables laid the foundation for a long, successful career as a Major League power hitter.",
  },
  {
    id: 66,
    year: "2001",
    era: "2001 CWS Final",
    headline: "Completing the Masterpiece",
    body: "The 2001 Miami Hurricanes entered Omaha with the weight of historic expectations. Everyone knew they were the most talented team in the country, but they still had to finish the job. In the College World Series championship game against a powerhouse Stanford team, the Hurricanes delivered a final, undeniable statement. They played with clinical precision and overwhelming force, completely neutralizing the Cardinal. When the final out was recorded and the dogpile began on the Omaha dirt, it wasn't just a celebration; it was the coronation of a team that had achieved baseball immortality.",
  },
  {
    id: 67,
    year: "1985",
    era: "1985 CWS",
    headline: "The Texas Takedown",
    body: "In the 1980s, the Texas Longhorns were considered the absolute gold standard of college baseball tradition. But in the 1985 College World Series, the loud, aggressive kids from Coral Gables completely flipped the script. Meeting Texas in a high-stakes Omaha showdown, the Hurricanes refused to be intimidated by the history of their opponent. Miami unleashed a barrage of clutch hitting and dominant pitching to take down the Longhorns and secure the national championship. It was a massive culture clash, and Miami’s victory proved that their modern, high-energy style of baseball was the new king of the sport.",
  },
  {
    id: 68,
    year: "Tradition",
    era: "Multi-Decade Tradition",
    headline: "The Alumni Battle",
    body: "Every year, before the regular season begins, Miami hosts one of the most incredible exhibitions in sports: the annual Alumni Game. But this isn't just a relaxed gathering of retired players. Miami's alumni events bring former Hurricanes stars back to Coral Gables, including players who have gone on to successful Major League careers. Young college players get the rare opportunity to compete alongside and against players who once wore the same uniform. It is a fierce, highly competitive game that serves as a powerful reminder of the elite standard required to wear the orange and green.",
  },
  {
    id: 69,
    year: "Scouts",
    era: "Mark Light Tradition",
    headline: "The Scout Section",
    body: "If you look closely behind home plate at Mark Light Field, you will see a quiet but intense group of men holding radar guns and notebooks. Major League scouts regularly visit Coral Gables searching for the next generation of talent. For Miami players, those scouts aren't a distraction; they are a daily motivation. The players know that every pitch, every swing, and every defensive play is being evaluated for the next level. It creates a high-pressure environment that breeds ultimate competitors.",
  },
  {
    id: 70,
    year: "Logo",
    era: "The Visual Identity",
    headline: "The Split-U Pride",
    body: 'In college sports, a logo is everything. While the baseball team has worn various classic hats over the years, the iconic "U" remains the ultimate symbol of the program. Whether it\'s stitched on a cap, painted on the field, or thrown up by the fans, the "U" is a visual declaration of South Florida pride. It instantly communicates a message of aggressive play, championship history, and unshakable confidence. When a Miami player puts on that cap, they aren\'t just representing a school; they are carrying the weight and the attitude of an entire city.',
  },
  {
    id: 71,
    year: "Weather",
    era: "Weather Tradition",
    headline: "The Rain Delay Advantage",
    body: "South Florida weather is notoriously unpredictable, with massive thunderstorms rolling in on a moment's notice. For visiting teams, a sudden rain delay at Mark Light Field can test the patience and focus of the entire roster. But for the Hurricanes, it is a familiar challenge. Miami players are used to adapting to the unpredictable South Florida weather. They know how to stay loose, keep their rhythm, and attack immediately when play resumes. While opponents sit in the dugout losing their rhythm, the Hurricanes are already preparing the next offensive strike.",
  },
  {
    id: 72,
    year: "1980s–1990s",
    era: "The Aluminum Era",
    headline: "The Gorilla Ball Era",
    body: 'Before the NCAA heavily regulated bat compositions, college baseball was dominated by "Gorilla Ball"—an era of heavy aluminum bats and massive offensive numbers. Few programs embraced Gorilla Ball quite like the Miami Hurricanes. Armed with explosive power hitters and a relentless attacking philosophy, Miami turned the ping of the aluminum bat into a terrifying sound for opposing pitchers. They didn\'t just get hits; they launched towering home runs into the Coral Gables night. It was a high-octane, destructive brand of baseball that perfectly suited the loud, aggressive culture of The U.',
  },
  {
    id: 73,
    year: "Athleticism",
    era: "Multi-Decade Tradition",
    headline: "Elite Athleticism",
    body: "The University of Miami is famous for producing elite athletes. Miami has always attracted athletes with rare physical gifts. Some Hurricanes baseball players also brought experience from other sports, adding speed, toughness, and athletic versatility to the diamond. Whether it was sliding hard into second base or tracking down a ball in the outfield with incredible closing speed, they proved that South Florida athletes are simply built differently.",
  },
  {
    id: 74,
    year: "Energy",
    era: "Fan Culture",
    headline: "The Hurricane Energy",
    body: "When the Hurricanes start a late-inning rally, the atmosphere at Mark Light Field changes instantly. Fans rise, the noise level explodes, and the entire stadium feels like a storm building over Coral Gables. It is a brilliant visual and auditory intimidation tactic. For a visiting pitcher standing on the mound, seeing the crowd erupt while the noise echoes across the diamond is a terrifying reminder that momentum has shifted. It transforms a simple baseball game into an overwhelming, suffocating sensory experience.",
  },
  {
    id: 75,
    year: "2015",
    era: "2015 Season",
    headline: "The Resurgence",
    body: "For a program with Miami's historic pedigree, a multi-year absence from Omaha felt like an eternity. But in 2015, a gritty, determined Hurricanes squad refused to be denied. Playing with a massive chip on their shoulder and shaking off the weight of recent disappointments, they battled through a grueling postseason. When they finally captured the Super Regional to secure their return to the College World Series, Mark Light Field erupted. It was an incredibly emotional moment for the program, proving that the championship fire in Coral Gables was still very much alive.",
  },
  {
    id: 76,
    year: "Culture",
    era: "Practice Culture",
    headline: "The Pressure Factory",
    body: "At Miami, the games are meant to be the easy part. Miami's demanding practice culture has always emphasized pressure, preparation, and mental toughness. Behind closed doors, Hurricanes coaches subjected their players to grueling situations meant to simulate the stress of a College World Series elimination game. Whether it was relentless conditioning drills or flawless defensive repetition under the scorching Florida sun, players were pushed to their absolute physical and mental limits. This internal crucible ensured that when a player finally stepped under the bright lights of a real game, they were ready for any situation.",
  },
  {
    id: 77,
    year: "Outfield",
    era: "Multi-Decade Tradition",
    headline: "The Bermuda Triangle Outfield",
    body: "Hitting a fly ball to the outfield at Mark Light Field has often been a frustrating experience for opponents. Over the years, Miami has deployed some of the fastest and most reliable outfielders in program history. Fans affectionately treated the Miami outfield like a Bermuda Triangle. Blessed with elite South Florida speed, Hurricanes outfielders routinely made impossible diving catches. Opponents quickly learned that even well-hit balls were never guaranteed to find grass.",
  },
  {
    id: 78,
    year: "Tradition",
    era: "Mark Light Tradition",
    headline: "The Walk-Off Chaos",
    body: "A walk-off victory is exciting in any stadium, but at Miami, it is pure, unfiltered chaos. When a Hurricane delivers a game-winning hit, the reaction is explosive. Helmets are tossed, water coolers are emptied, and the entire dugout sprints onto the field to mob the hero. The celebrations are loud, emotional, and completely unapologetic—a perfect reflection of the city’s vibrant culture. For the fans in the stands, a walk-off win isn't just a successful end to a game; it is the ultimate release of tension and an unforgettable South Florida party.",
  },
  {
    id: 79,
    year: "Chemistry",
    era: "Team Chemistry",
    headline: "The Local Brotherhood",
    body: "One of the most powerful forces driving the Miami baseball program is the deep, pre-existing bond between the players. Because many Hurricanes have deep roots in South Florida, some players have known each other since childhood. They played with and against each other in local travel leagues long before ever putting on the orange and green. This creates an immediate, unbreakable chemistry in the locker room. They aren't just teammates assigned to the same university; they are childhood rivals and lifelong friends fighting for the pride of their shared hometown.",
  },
  {
    id: 80,
    year: "1992",
    era: "1992 Retirement",
    headline: "Farewell to The Wizard",
    body: 'When Ron Fraser announced his retirement after the 1992 season, it was the end of a monumental era in college sports. "The Wizard" had transformed Miami into a national baseball powerhouse, turning a program into a two-time national champion and a college baseball empire. His final games at Mark Light Field were deeply emotional events, packed with roaring fans, alumni, and former players who returned to pay their respects. Fraser didn\'t just leave behind a brilliant winning record; he left behind an enduring legacy of innovation, showmanship, and absolute Miami pride.',
  },
  {
    id: 81,
    year: "Rivalry",
    era: "Rivalry Tradition",
    headline: "The In-State Blood Feud",
    body: "There is no love lost when Miami and Florida State share a baseball diamond. It doesn't matter what the national rankings are, or how either team's season is going—when the orange and green meets the garnet and gold, it is an absolute war. The games are defined by intense emotion, high-stakes pressure, and a palpable tension in the stadium. It’s a rivalry built on decades of fierce recruiting battles and postseason heartbreak. For the players and fans, beating FSU isn't just a goal; it is one of the biggest statements a season can make.",
  },
  {
    id: 82,
    year: "DNA",
    era: "Championship DNA",
    headline: "Omaha or Bust",
    body: 'At many universities, simply making the NCAA tournament is a reason to celebrate. At the University of Miami, the standard is entirely different. The program operates under a relentless "Omaha or Bust" mentality. Players are recruited, trained, and conditioned with one singular goal: reaching the College World Series. A good regular season means absolutely nothing if it doesn\'t end on the dirt in Nebraska. This immense, self-imposed pressure creates a culture where greatness is not just hoped for—it is universally expected from the moment a player puts on the uniform.',
  },
  {
    id: 83,
    year: "Rituals",
    era: "Fan Rituals",
    headline: "The Two-Strike Rise",
    body: "There is a distinct, spine-tingling rhythm to a Miami baseball game. When a Hurricanes pitcher gets two strikes in a crucial moment, the crowd rises, creating a synchronized, deafening roar of anticipation. It is a powerful fan ritual that turns the stadium into a pressure cooker for the visiting hitter. The fans don't just watch the strikeout happen; they actively try to will the ball into the catcher's mitt.",
  },
  {
    id: 84,
    year: "Heartbreaks",
    era: "Omaha Heartbreaks",
    headline: "The Agony of the Runner-Up",
    body: "The incredible success of the Miami program means they have experienced the ultimate highs, but also the most agonizing lows. Reaching the College World Series championship game and falling short is a unique kind of pain. The Hurricanes have suffered through brutal, season-ending losses in Omaha that left fans speechless and players in tears. But in Coral Gables, runner-up finishes aren't celebrated with parades. Instead, that bitter heartbreak is immediately weaponized, turning the agony of defeat into the ultimate fuel for the following season's winter workouts.",
  },
  {
    id: 85,
    year: "Folklore",
    era: "Mark Light Folklore",
    headline: "The Generations in the Stands",
    body: "Mark Light Field isn't just a stadium; it is a generational gathering place. If you walk through the concourse during a weekend series, you will see families who have held the exact same season tickets for decades. Grandparents who watched the 1982 championship team now bring their grandchildren to watch the modern era. The stories, the heckles, and the deep love for the program are passed down like family heirlooms. This multi-generational devotion gives Miami baseball a rich, communal soul that transcends any single era of players.",
  },
  {
    id: 86,
    year: "DNA",
    era: "Championship DNA",
    headline: "The Postseason Dogpile",
    body: "Every college baseball season begins with a single image in mind: the dogpile. For the Hurricanes, the visualization of throwing their gloves in the air and swarming the pitcher’s mound in Omaha is the ultimate driving force. It is a chaotic, euphoric explosion of pure joy that makes every grueling practice and brutal road trip worth it. When Miami achieves that ultimate victory, the dogpile becomes an iconic photograph, instantly burned into the memory of every fan and permanently remembered by the Hurricanes community.",
  },
  {
    id: 87,
    year: "ACC",
    era: "The ACC Gauntlet",
    headline: "The Iron Crucible",
    body: "Competing in the Atlantic Coast Conference means there are absolutely no easy weekends. Since joining the ACC, Miami has navigated one of the nation's most competitive baseball conferences. Week after week, the Hurricanes are tested by elite pitching and relentless offenses. But Miami embraces the grind. They know that surviving the brutal crucible of ACC play is exactly what prepares them for the intense, unforgiving pressure of the NCAA postseason. Iron sharpens iron, and the ACC ensures the Hurricanes are always battle-tested.",
  },
  {
    id: 88,
    year: "New Era",
    era: "New Era",
    headline: "Carrying the Torch",
    body: 'Putting on the Miami Hurricanes baseball uniform comes with an incredibly heavy burden. Modern players know that when they step onto Mark Light Field, they are walking in the footsteps of national champions, Golden Spikes winners, and Major League All-Stars. The ghosts of the 1982, 1985, 1999, and 2001 championship teams are always watching. But true Hurricanes don\'t shrink from that history; they embrace it. The new generation of players carries the torch with the same fearless swagger and unshakable confidence that built the empire decades ago.',
  },
  {
    id: 89,
    year: "Rituals",
    era: "Fan Rituals",
    headline: "The Orange and Green Sea",
    body: "There are few sights in college sports more intimidating than a sold-out Mark Light Field during an NCAA Regional. The stadium transforms into an absolute sea of bright orange and vibrant green. It is a visual wall of South Florida pride that immediately lets the visiting team know they have entered hostile territory. The vibrant colors reflect the loud, energetic, and completely unapologetic culture of the fan base. When the stadium is packed in its signature colors, the home-field advantage feels physically heavy.",
  },
  {
    id: 90,
    year: "Recruiting",
    era: "Rivalry Tradition",
    headline: "Recruiting the 305",
    body: "The fiercest battles between Miami and its state rivals don't just happen on the field; they happen in living rooms across South Florida. Area code 305 is one of the most talent-rich baseball regions in the country. For decades, the Hurricanes have fought brutal recruiting wars against Florida and Florida State to keep elite local talent at home. When a highly touted Miami kid chooses to wear the orange and green over a rival, it isn't just a recruiting victory; it is a massive statement of local pride.",
  },
  {
    id: 91,
    year: "Folklore",
    era: "Mark Light Folklore",
    headline: "The First Pitch Tradition",
    body: 'Before the umpire yells "Play Ball," Mark Light Field frequently honors its rich history through the ceremonial first pitch. But in Coral Gables, it’s rarely just a local politician. The Hurricanes bring back legendary alumni, beloved former coaches, and local heroes to toe the rubber. When former Hurricanes legends and local heroes step onto the mound to massive applause, it bridges the gap between the program\'s glorious past and its vibrant present. It reminds the current roster exactly who they are playing for.',
  },
  {
    id: 92,
    year: "DNA",
    era: "Championship DNA",
    headline: "The Road Warriors",
    body: "While the Hurricanes are always dangerous at home, their true championship DNA is revealed on the road. Going into hostile SEC or ACC environments during the postseason requires immense mental toughness. Miami has a rich history of walking into enemy stadiums, silencing deafening crowds, and ripping the heart out of the home team. Playing the villain on the road perfectly suits the Miami swagger. They feed off the boos, embrace the hostility, and take absolute pride in ruining the weekend for opposing fans.",
  },
  {
    id: 93,
    year: "Rituals",
    era: "Fan Rituals",
    headline: "The Sunday Rubber Match",
    body: "In a three-game weekend series, Sunday is when boys become men. When a series is tied 1-1, the Sunday rubber match brings a tense, desperate energy to Mark Light Field. The pitching staffs are depleted, the players are exhausted, and the game always comes down to sheer willpower. Miami fans know that Sunday games require a different level of intensity. The crowd hangs on every single pitch, fully aware that winning the series is vital for the ultimate march toward Omaha.",
  },
  {
    id: 94,
    year: "Heartbreaks",
    era: "Omaha Heartbreaks",
    headline: "The Empty Locker Room",
    body: "There is a chilling silence that falls over a locker room when a season ends in Omaha without a trophy. For the seniors who will never wear the uniform again, and the underclassmen who realize how hard it is to get back, the finality of a College World Series elimination is devastating. But the Miami baseball culture demands that players remember that exact feeling of emptiness. It becomes the spoken and unspoken motivation for the entire offseason, ensuring that the team never takes a single rep for granted.",
  },
  {
    id: 95,
    year: "Family",
    era: "The U Family",
    headline: "One University, One Attitude",
    body: 'The University of Miami doesn\'t have a baseball culture and a football culture; it simply has "The U" culture. The swagger, the confidence, and the refusal to back down are shared universally across the athletic department. Athletes across the university often support the baseball program, cheering wildly for the baseball team. This cross-sport unity creates an intimidating, unified front. To wear the orange and green in any sport means you adopt the exact same fearless, South Florida identity.',
  },
  {
    id: 96,
    year: "Folklore",
    era: "Mark Light Folklore",
    headline: "The Smell of the Grill",
    body: "A Miami baseball game is a complete sensory experience, and nothing captures the essence of a South Florida evening quite like the smell of the stadium grills. Long before the first pitch, the unmistakable scent of barbecue drifts across Mark Light Field, blending with the humid evening air. It signals the start of the weekend and sets the tone for a relaxed, communal atmosphere in the stands. It is a simple, beautiful tradition that makes a high-stakes Division I baseball game feel like a massive neighborhood block party.",
  },
  {
    id: 97,
    year: "DNA",
    era: "Championship DNA",
    headline: "Defending the Dirt",
    body: "The Hurricanes view Mark Light Field as sacred ground. Defending their home turf isn't just a strategic advantage; it is a matter of profound respect. Players understand that protecting home field requires intensity, discipline, and pride. They protect their stadium with a territorial pride that ensures visiting teams know exactly whose house they are in.",
  },
  {
    id: 98,
    year: "Rituals",
    era: "Fan Rituals",
    headline: "Standing for the Final Out",
    body: "When the Hurricanes are one out away from securing a victory, many fans rise, clapping in unison to a steady, rhythmic beat as the closer stares down the final batter. It is a moment of collective anticipation that sends chills down the spine of the opposition. The fans demand to be physically involved in the final act of the game, standing shoulder-to-shoulder to witness the official raising of the victory flag.",
  },
  {
    id: 99,
    year: "New Era",
    era: "New Era",
    headline: "A New Storm Rising",
    body: "College baseball is evolving rapidly with the transfer portal, new technologies, and shifting conferences. But the soul of Miami baseball remains completely untouched. The modern Hurricanes adapt to the new era while fiercely protecting the swagger, the community connection, and the intense competitive drive that made the program legendary. They blend cutting-edge analytics with old-school South Florida toughness. The game may look a little different today, but the storm brewing in Coral Gables is just as dangerous as ever.",
  },
  {
    id: 100,
    year: "Legacy",
    era: "The Enduring Legacy",
    headline: "Forever The U",
    body: "Players come and go, coaches retire, and stadiums are renovated, but the identity of Miami baseball is immortal. It lives in every kid playing in a South Florida park who dreams of wearing the orange and green. It lives in the roars of the Mark Light faithful, and in the banners flying proudly over Coral Gables. To be a Hurricane is to be part of a timeless tradition of excellence, swagger, and community. The story of Miami baseball is far from over, because the storm never truly stops.",
  },
];

export default function Home() {
  const [selectedArchive, setSelectedArchive] = useState(miamiArchives[0]);
  const [shareButtonText, setShareButtonText] = useState("SHARE WITH THE U FAITHFUL");

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
      title: `Miami Hurricanes Baseball Story: ${selectedArchive.headline}`,
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
        setShareButtonText("SHARE WITH THE U FAITHFUL");
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

      <header className="w-full pt-3 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-0.5">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/70 font-light">
            EST. ARCHIVE • THE U
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/90 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/70 font-sans font-light">
            MIAMI HURRICANES BASEBALL STORY
          </p>
        </div>
      </header>

      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-1 pb-4 w-full relative">
        <div className="absolute inset-x-4 top-4 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        <div className="absolute inset-x-4 top-2 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        <div className="relative bg-white text-stone-950 overflow-hidden border-2 border-stone-900 rounded-none">
          <div className="relative w-full h-[220px] sm:h-[250px] flex flex-col items-center justify-center overflow-hidden border-b-2 border-stone-900">
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={randomBg}
                alt="Miami Hurricanes Baseball Stadium Archive"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="absolute inset-0 z-1 bg-black/20"></div>

            <div className="relative z-10 flex flex-col items-center text-center px-4 space-y-1">
              <p className="tracking-[0.15em] uppercase text-[10px] sm:text-xs font-bold text-stone-900 bg-white/90 px-2 py-0.5 border border-stone-900">
                {selectedArchive.era}
              </p>
              <div className="transform -rotate-1 mt-1">
                <span className="block tracking-tight text-[75px] sm:text-[100px] leading-none text-[#f47321] vintage-number drop-shadow-[0_2px_4px_rgba(255,255,255,0.9)]">
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
                NEXT CHAPTER IN THE U
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

      <footer className="w-full bg-[#f47321] pt-6 pb-8 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1.5">
          <p className="font-serif italic text-[10px] tracking-widest text-white/80 uppercase font-bold">
            NOTUSUAL EDITION • THE U
          </p>
          <p className="font-serif italic text-xs text-white/90 leading-relaxed font-medium">
            Love the vintage Miami look? Grab our prints & goods.
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
          <div className="pt-2 border-t border-white/10 space-y-1">
            <p className="text-[9px] tracking-widest uppercase text-white/50 font-semibold">
              © NOTUSUAL HURRICANES ARCHIVE
            </p>
            <p className="text-[8px] tracking-wider uppercase text-white/40 font-light">
              Independent studio. Not affiliated with the University of Miami.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
