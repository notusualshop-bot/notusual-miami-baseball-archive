"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const miamiBaseballStories = [
  {
    id: "01",
    year: "1962–1963",
    era: "1962–1963 CHRONICLE",
    headline: "The Day Miami Baseball Changed Forever",
    story: "Before 1963, Miami baseball was a forgotten program playing in the shadows of bigger names. They had limited resources, no national reputation, and little recognition outside South Florida. Playing on a dusty local field, the team was completely off the national radar. Nobody believed this program could survive, let alone thrive. Then, the university took a desperate gamble on a relentless young coach named Ron Fraser. He didn't just save Miami baseball from extinction; he ignited a cultural revolution. He brought an unmatched intensity that would eventually turn a club-level team into one of the most recognizable and feared programs in college baseball.",
    legacy: "Miami baseball wasn't born with a silver spoon; it was built from the dirt up by people who refused to lose."
  },
  {
    id: "02",
    year: "1963",
    era: "1963 CHRONICLE",
    headline: "The Man Who Built The Storm",
    story: "When Ron Fraser stepped onto the Coral Gables campus, he inherited a program with zero funding and zero respect. But Fraser didn't just want to coach a team—he wanted to build a spectacle. Using relentless determination and creativity, he put Miami on the map. Fraser personally fought for every resource the program needed, from equipment to fan support. He promoted the program everywhere he could and convinced local businesses to invest in a wildly ambitious dream. Through sheer force of will, he constructed the foundation of a baseball dynasty, establishing a ruthless, winning culture that would soon terrify traditional powerhouses.",
    legacy: "Ron Fraser didn't just build a team; he created the entire identity and swagger of Miami baseball."
  },
  {
    id: "03",
    year: "1970s",
    era: "1970S CHRONICLE",
    headline: "The Wizard of Coral Gables",
    story: "Long before the rest of the country figured out how to market college baseball, Miami was putting on a nightly circus in South Florida. Earning the nickname 'The Wizard of College Baseball,' Ron Fraser transformed Hurricanes games into must-see entertainment. He introduced the legendary Miami Maniac mascot, hosted wild promotional events like 'Dinner on the Diamond,' and turned a simple collegiate game into a massive local party. This wasn't just a gimmick; it was psychological warfare. By blending elite, high-speed baseball with pure Miami showmanship, the Hurricanes made Coral Gables one of the most intimidating places to play.",
    legacy: "Miami proved that college baseball didn’t have to be quiet and traditional—it could be loud, flashy, and undeniable."
  },
  {
    id: "04",
    year: "1974",
    era: "1974 CHRONICLE",
    headline: "The Night Miami Arrived In Omaha",
    story: "By the early 1970s, the Hurricanes were no longer just a local attraction trying to survive. They were a rising force ready to shock the establishment. In 1974, Miami did the unthinkable: a southern school with little national baseball tradition battered its way to the College World Series. This wasn't a team built on quiet tradition. They were loud, fast, and fiercely competitive, carrying the unmistakable swagger of their city. When they arrived in Omaha, the traditional blue-bloods of college baseball were stunned. The Hurricanes didn't just show up to participate; they arrived to take over, officially announcing the birth of a new national power.",
    legacy: "The 1974 season was the moment Miami baseball kicked down the door and demanded the respect of the entire country."
  },
  {
    id: "05",
    year: "1970s–1980s",
    era: "1970S-80S CHRONICLE",
    headline: "The Backyard That Built A Dynasty",
    story: "The ultimate secret weapon behind the Miami baseball empire wasn't just tactics—it was the untamed, raw talent in their own backyard. Recognizing that South Florida was a goldmine for elite prospects, the Hurricanes built one of the strongest local pipelines in college baseball. Instead of losing highly touted local prodigies to established northern schools, Miami convinced the best athletes to stay home and build a legacy for their own city. This pipeline injected the roster with unmatched speed, power, and attitude. It forged a brotherhood of local kids who played with a massive chip on their shoulder and a deep pride in 'The U.'",
    legacy: "The greatest strength of Miami baseball has always been the fierce, homegrown talent of South Florida."
  },
  {
    id: "06",
    year: "Mid-1970s",
    era: "SPECIAL REPORT",
    headline: "The Birth of the Miami Swagger",
    story: "The infamous Miami swagger didn't just appear overnight. Baseball helped create the attitude that would later define Miami sports. Dressed in vibrant orange and green, the Hurricanes played with a loud, aggressive style that defied the country-club etiquette of traditional baseball. They stole bases relentlessly, celebrated massive hits with unfiltered emotion, and turned every game into a fiercely competitive battle. This unapologetic attitude made them the villains of college baseball to outsiders, but absolute heroes to the people of South Florida.",
    legacy: "The Hurricanes didn't just play the game; they permanently changed how it looked, sounded, and felt."
  },
  {
    id: "07",
    year: "1973",
    era: "STADIUM CHRONICLE",
    headline: "The House That Orange and Green Built",
    story: "A championship team needs a fortress. In 1973, through relentless fundraising and community support, a basic local field was transformed into Mark Light Stadium. But it wasn't built like a normal college ballpark. The design brought the seats incredibly close to the action. The dugouts were tight, the crowd was right on top of the players, and the atmosphere was deafening. It became a terrifying snake pit for visiting opponents and the ultimate weekend party for Miami locals.",
    legacy: "Mark Light Field wasn't just a stadium; it became the beating heart and the loudest weapon of the Coral Gables community."
  },
  {
    id: "08",
    year: "Late 1970s",
    era: "CHRONICLE FEATURE",
    headline: "Embracing the Villain Role",
    story: "As Miami’s dominance grew, so did the target on their backs. The college baseball establishment—built on quiet tradition and unspoken rules—didn't know how to handle the Hurricanes. Miami players wore their emotions on their sleeves and played with an aggressive, emotional style that infuriated purists. Opposing fans ruthlessly booed them, and rival coaches despised their theatrics. But the hatred only fueled the storm. Instead of apologizing, Miami embraced the villain role, using the hostility of road crowds as pure motivation to completely dismantle their opponents.",
    legacy: "They didn't care if the rest of the country hated them, just as long as everybody feared them."
  },
  {
    id: "09",
    year: "1970s–1980s",
    era: "CULTURE CHRONICLE",
    headline: "The Secret Behind the Winning Culture",
    story: "What made Miami baseball truly unstoppable wasn't just the raw talent; it was the brutal internal accountability. In Coral Gables, the standard was different. Players weren't just preparing to win games; they were preparing to carry the weight of 'The U.' Practices were notoriously harder than actual games. Upperclassmen pushed freshmen to their absolute breaking points. If you couldn't handle the pressure of your own teammates, you had no chance of surviving the blinding spotlight of Omaha. This iron-sharpens-iron mentality created a locker room where losing was never just disappointing—it was completely unacceptable.",
    legacy: "The true battle wasn't against the opponent; it was meeting the uncompromising, daily standard of 'The U.'"
  },
  {
    id: "10",
    year: "1978",
    era: "1978 CHRONICLE",
    headline: "The Storm Demands Respect",
    story: "By the late 1970s, the Hurricanes were consistently knocking on the door of a national championship. The national narrative rapidly shifted from 'Miami is a flashy underdog' to 'Miami is a legitimate monster.' They began routinely defeating established titans, proving their high-octane style could win on the biggest stages. The media and rival programs could no longer dismiss their antics as mere showmanship. The foundation of the empire had been poured, dried, and tested in battle. The Hurricanes forced the baseball establishment to respect the storm, setting the stage for the championship era that would follow.",
    legacy: "The Hurricanes forced the rest of the country to accept that they were here to stay."
  },
  {
    id: "11",
    year: "1982",
    era: "CHAMPIONSHIP EDITION",
    headline: "The Miracle That Started Everything",
    story: "Miami arrived in Omaha for the 1982 College World Series not as the heavy favorites, but as a team of destiny. For years, the Hurricanes had knocked on the door of greatness, only to be turned away. But this time, they refused to be denied. Playing with their signature South Florida swagger, disciplined defense, and fearless baseball, they battled through a grueling bracket to capture the program's first National Championship. It validated everything coach Ron Fraser had built. It wasn't just a trophy; it was undeniable proof that the loud, aggressive kids from Coral Gables could conquer the college baseball world.",
    legacy: "The 1982 championship changed Miami from a regional powerhouse into college baseball royalty."
  },
  {
    id: "12",
    year: "1985",
    era: "DYNASTY CHRONICLE",
    headline: "Proving It Was No Accident",
    story: "Winning one national title could be called a miracle, but winning two creates a dynasty. In 1985, the Hurricanes returned to Omaha with a massive target on their backs. Showcasing their absolute resilience, they battled through Omaha against the nation's best teams. They didn't blink under the pressure. Instead, they secured their second national crown. This run cemented Miami’s status as a relentless powerhouse that could perform when the lights were the brightest.",
    legacy: "The 1985 title proved to the entire country that the Miami storm was here to stay."
  },
  {
    id: "13",
    year: "1999",
    era: "1999 CHRONICLE",
    headline: "The Return of the Hurricanes",
    story: "By the late 1990s, some critics wondered if Miami’s golden era had quietly passed. In 1999, a new generation of Hurricanes silenced those doubters. Playing with the classic, aggressive style that defined the program's roots, they stormed through the postseason and brought the national championship trophy back to Coral Gables. It was a deeply emotional victory for the fanbase, proving that the winning culture wasn't tied to a specific decade—it was embedded in the jersey.",
    legacy: "The 1999 championship proved that the fierce Hurricane spirit could be passed down to a new generation."
  },
  {
    id: "14",
    year: "2001",
    era: "LEGENDARY TEAM",
    headline: "The Greatest Hurricane Team Ever Built",
    story: "The 2001 Miami Hurricanes didn't just win a national championship; they completely overwhelmed the competition. Armed with a roster packed with future major leaguers, this team was practically untouchable. They dismantled opponents with an explosive offense and suffocating pitching, leaving no doubt about who owned college baseball. Playing with an unbelievable level of confidence, they marched through Omaha and claimed the program's fourth national title. To this day, the 2001 squad is widely considered one of the most dominant teams in the history of the sport.",
    legacy: "The 2001 team set a standard that future Hurricanes would chase forever."
  },
  {
    id: "15",
    year: "Tradition",
    era: "BALLPARK CHRONICLE",
    headline: "The Shake That Became A Tradition",
    story: "You can’t talk about Miami baseball without talking about the famous Mark Light Shake. What started as a simple ballpark concession evolved into a sacred game-day ritual. For generations of Hurricanes fans, waiting in line for this legendary milkshake is as important as the first pitch. It’s a taste of a South Florida childhood and a staple of the Coral Gables experience. In a sport obsessed with traditions, this sweet treat became the ultimate symbol of a Miami baseball weekend.",
    legacy: "Some stadiums have hot dogs; Mark Light Field has a milkshake that defines an entire community."
  },
  {
    id: "16",
    year: "Rivalry",
    era: "STATE WAR CHRONICLE",
    headline: "Bad Blood: The Florida State War",
    story: "In the state of Florida, orange and green violently clashes with garnet and gold. The rivalry between Miami and Florida State isn’t just a game; it’s a turf war. For decades, these two programs have battled for in-state supremacy and national titles on the diamond. The games are defined by intense rivalries, unforgettable moments, and nonstop pressure. It doesn't matter what the rankings are when these two meet—it's always a heavyweight fight where pride means everything.",
    legacy: "You aren't a true Hurricane until you’ve experienced the absolute intensity of the Florida State rivalry."
  },
  {
    id: "17",
    year: "Mascot",
    era: "BALLPARK LORE",
    headline: "The Legend Behind The Madness",
    story: "While Sebastian the Ibis ruled the football field, Mark Light Field belonged to the Miami Maniac. Introduced to inject pure entertainment into college baseball, the Maniac quickly became a local legend. With wild on-field antics, crowd-surfing, and chaotic routines, the mascot perfectly embodied the unpredictable, fun-loving spirit of the Hurricanes. He turned slow innings into comedy shows and made sure that even on a bad night, the fans went home smiling.",
    legacy: "The Miami Maniac proved that nobody throws a baseball party quite like Coral Gables."
  },
  {
    id: "18",
    year: "Pipeline",
    era: "PRO PIPELINE",
    headline: "The Pipeline to the Big Leagues",
    story: "For decades, Mark Light Field has served as a direct pipeline to the major leagues. Fans in Coral Gables have had the rare privilege of watching future Major League stars take their very first swings in a Hurricanes uniform. The program’s ability to develop raw talent into professional standouts is unmatched. When you watch a Miami game, you aren't just watching college athletes; you are watching the future of professional baseball taking shape right in front of you.",
    legacy: "'The U' doesn’t just chase college championships; it produces legends for the Major Leagues."
  },
  {
    id: "19",
    year: "Atmosphere",
    era: "FRIDAY CHRONICLE",
    headline: "The Magic of Friday Nights",
    story: "There is nothing in college sports quite like a Friday night in Coral Gables. As the South Florida sun sets over Mark Light Field, the smell of barbecue fills the air, fans line up for their Mark Light Shakes, and a sea of orange and green fills the stands. It’s more than a baseball game; it’s a weekly family reunion for the Miami faithful. The energy is electric, the crowd is right on top of the action, and the home-field advantage is absolute. Under those lights, the Hurricanes become invincible.",
    legacy: "Friday nights in Coral Gables aren't just games—they are the heartbeat of the Miami community."
  },
  {
    id: "20",
    year: "Legacy",
    era: "CHRONICLE ARCHIVE",
    headline: "The Eternal Spirit of Miami Baseball",
    story: "Championships are won and lost, and rosters change every year, but the spirit of Miami baseball remains unbroken. It lives in the bright orange and green jerseys, the deafening roar of the hometown crowd, and the unwavering confidence of every player who steps onto the diamond. From their scrappy, underfunded beginnings to their reign as national champions, the Hurricanes have always played for more than just a trophy. They play for the fierce pride of 'The U.'",
    legacy: "As long as there is baseball in South Florida, the storm will never die."
  },
  {
    id: "21",
    year: "1994",
    era: "1994 CHRONICLE",
    headline: "Taking the Torch",
    story: "Following a legendary coach is supposed to be the hardest job in sports. When Jim Morris took over the Miami program in 1994, he didn't just inherit a team; he inherited the crushing weight of massive expectations. Fans didn't just want winning seasons; they demanded trips to Omaha. Instead of shrinking under the pressure, Morris embraced it. He seamlessly kept the Hurricanes' aggressive swagger alive while instilling his own relentless discipline. He didn't just maintain the empire; he elevated it, guiding the team to two more national championships and proving that the winning culture in Coral Gables was built to last.",
    legacy: "The true mark of a dynasty is surviving a change in leadership without ever losing its soul."
  },
  {
    id: "22",
    year: "1989–1991",
    era: "PRO ROOTS",
    headline: "Before the Pinstripes",
    story: "Long before he became a five-time World Series champion and the heart of the New York Yankees dynasty, Jorge Posada was a fierce competitor wearing orange and green. Arriving at Miami, Posada played with an intense, fiery passion that perfectly matched the South Florida heat. He wasn't just a talented player; he was a natural leader who refused to back down from any challenge. His time in Coral Gables helped forge the relentless work ethic and mental toughness that would eventually make him one of the most respected players in Major League Baseball history.",
    legacy: "Before he conquered New York, Jorge Posada learned how to be a champion in Coral Gables."
  },
  {
    id: "23",
    year: "1996–1998",
    era: "POWER HITTER",
    headline: "The Unstoppable Power Bat",
    story: "There are great hitters, and then there was Pat Burrell. During his time at Miami, Burrell was widely considered the most terrifying presence in college baseball. Opposing pitchers didn't just respect him; they feared him. With a powerful swing and massive raw power, he could change the outcome of a game with a single crack of the bat. He dominated the sport, winning the prestigious Golden Spikes Award as the best amateur player in the country, and became the ultimate symbol of Miami's explosive, high-scoring offense in the late 1990s.",
    legacy: "Pat Burrell didn't just hit home runs; he launched baseballs into Miami legend."
  },
  {
    id: "24",
    year: "1973–2016",
    era: "44-YEAR STREAK",
    headline: "The 44-Year Streak",
    story: "Consistency is the hardest thing to achieve in college sports. For an astonishing 44 consecutive years, the Miami Hurricanes reached the NCAA Tournament. Let that sink in. From 1973 to 2016, through multiple head coaches, countless roster changes, and shifting eras of college baseball, Miami never missed the NCAA Tournament. It is a staggering record of excellence that defies logic. While other elite programs experienced rebuilding years and missed opportunities, the Hurricanes simply reloaded. Year after year, making the tournament wasn't a goal for Miami—it was a birthright.",
    legacy: "For over four decades, college baseball didn't officially start until the Hurricanes took the field."
  },
  {
    id: "25",
    year: "Rivalry Era",
    era: "SUNSHINE STATE",
    headline: "The Battle for the Sunshine State",
    story: "Florida State isn't the only team that makes Miami's blood boil. The rivalry with the Florida Gators is a brutal fight for state supremacy. It is a clash of two entirely different cultures: the flashy, aggressive city swagger of Coral Gables versus the traditional, college-town pride of Gainesville. When these two teams meet on the diamond, the intensity rivals a College World Series final. The dugouts are loud, every pitch carries extra pressure, and every single out is violently contested. In the Sunshine State, bragging rights are everything.",
    legacy: "Beating the Gators isn't just another win on the schedule; it's a matter of absolute South Florida pride."
  },
  {
    id: "26",
    year: "2003–2005",
    era: "SUPERSTAR ERA",
    headline: "The Blueprint of a Superstar",
    story: "When Ryan Braun arrived at Miami, it didn't take long for everyone to realize they were watching a generational talent. He was an absolute offensive machine, combining elite speed with incredible power. Braun played the game with a smooth, effortless confidence that made the hardest sport look incredibly easy. Earning Freshman All-American honors, he completely dismantled opposing pitching staffs and became one of the most dangerous offensive weapons in college baseball. His dominance in Coral Gables was just the preview of a career that would ultimately lead to a Major League MVP award.",
    legacy: "Ryan Braun was the ultimate Miami prospect: immensely talented, incredibly confident, and completely unstoppable."
  },
  {
    id: "27",
    year: "2009",
    era: "STADIUM TRIBUTE",
    headline: "A-Rod's Tribute to The U",
    story: "Alex Rodriguez never officially played a college game for the Hurricanes—he was drafted first overall straight out of high school. But growing up in Miami, the Hurricanes were a major part of his South Florida baseball identity. Years later, as a global baseball icon, Rodriguez made a massive donation to renovate the legendary stadium, which was renamed Alex Rodriguez Park at Mark Light Field. It was the ultimate sign of respect. Even a player who bypassed college to become an MLB superstar recognized that the heart and soul of South Florida baseball belonged to Coral Gables.",
    legacy: "You don't have to play for The U to understand its massive impact on the baseball world."
  },
  {
    id: "28",
    year: "Pipeline",
    era: "MLB PIPELINE",
    headline: "The Ultimate Baseball Factory",
    story: "Every summer, the Major League Baseball draft becomes an unofficial showcase for the University of Miami. The program has consistently produced MLB stars, elite prospects, and future big-league talent. But Miami doesn't just produce talented players; it produces players who are ready for the pressure of the big leagues. When an MLB front office drafts a Hurricane, they know exactly what they are getting: a tough, battle-tested competitor who isn't intimidated by the bright lights.",
    legacy: "Coral Gables isn't just a college campus; it is the ultimate training ground for Major League Baseball."
  },
  {
    id: "29",
    year: "Modern Era",
    era: "MODERN ERA",
    headline: "Throwing Up 'The U'",
    story: "It is a simple gesture with two hands, but it carries the weight of an entire community. When a Miami baseball player hits a massive home run or turns a clutch double play, you know exactly what happens next: they throw up 'The U.' It connects the baseball team to the football team, the alumni to the current students, and the city to the university. It is a universal symbol of South Florida pride, a warning to the opponent, and a reminder that when you play Miami, you are playing an entire culture.",
    legacy: "It’s more than just a hand sign; it’s a declaration of absolute confidence."
  },
  {
    id: "30",
    year: "Pursuit",
    era: "GREATNESS",
    headline: "The Heartbreaks That Built Champions",
    story: "You don't become a dynasty without tasting bitter defeat. For every glorious championship celebration in Omaha, there were agonizing heartbreaks. There were seasons where incredibly talented Miami teams were eliminated by a single run, a bad bounce, or a late-inning collapse. But in Coral Gables, failure was never fatal; it was fuel. Those brutal losses forged the mental toughness of the program. The players who fell short passed their hunger onto the next recruiting class, ensuring that the fire inside the locker room never burned out.",
    legacy: "The Hurricanes didn't just learn how to win; they learned how to turn heartbreak into absolute motivation."
  },
  {
    id: "31",
    year: "1982",
    era: "CWS TRICK PLAY",
    headline: "The Grand Illusion",
    story: "In the 1982 College World Series, Miami didn't just beat Wichita State; they pulled off one of the greatest trick plays in baseball history. Known as 'The Grand Illusion,' pitcher Mike Kasprzak faked a pickoff throw to first base. The entire Miami infield sold the fake perfectly, diving as if the ball had been overthrown into the dirt. While the Wichita State runner sprinted toward second base in a panic, Kasprzak casually stepped off the mound before revealing the ball and completing one of the most famous hidden-ball tricks in College World Series history. It was a play that required absolute nerve and flawless execution on the biggest stage. It perfectly captured the fearless, creative swagger of the Hurricanes.",
    legacy: "Miami proved that baseball didn’t have to be predictable to be successful; it just had to be brilliant."
  },
  {
    id: "32",
    year: "Catcher U",
    era: "CATCHER LINEAGE",
    headline: "The Ultimate 'Catcher U'",
    story: "Some programs are known for pitchers, others for power hitters. But Coral Gables has a different, unique reputation: it is the ultimate factory for elite catchers. From Charles Johnson and Jorge Posada to Yasmani Grandal, the Hurricanes have consistently produced the men who control the game from behind the plate. Playing catcher at Miami requires more than just physical talent; it demands incredible baseball IQ, toughness, and the ability to manage the intense pressure of a championship pitching staff. When a scout sees a catcher wearing orange and green, they know they are looking at a field general ready for the big leagues.",
    legacy: "At Miami, the catcher isn't just a position; it’s a lineage of absolute baseball royalty."
  },
  {
    id: "33",
    year: "1990–1992",
    era: "DEFENSIVE WALL",
    headline: "The Defensive Masterpiece",
    story: "Long before he won four Gold Gloves in the Major Leagues, Charles Johnson was setting an impossible standard behind the plate for the Hurricanes. Johnson was an absolute defensive wall. He possessed a terrifyingly strong throwing arm that completely shut down opposing running games and a quiet confidence that controlled the entire field. Opposing runners knew stealing bases against Johnson was a dangerous gamble. He wasn't just a great player; he fundamentally changed how opponents had to scheme against Miami. His dominance in Coral Gables established him as one of the greatest defensive catchers in college baseball history.",
    legacy: "Charles Johnson made defense look like an absolute art form."
  },
  {
    id: "34",
    year: "1994–1996",
    era: "INFIELD GENERAL",
    headline: "The General of the Infield",
    story: "Before he became a World Series champion manager, Alex Cora was the heartbeat of the Miami Hurricanes infield. Playing with incredible instincts and a sky-high baseball IQ, Cora was the ultimate field general during the mid-1990s. He wasn't always the biggest or loudest player on the field, but he was always the smartest. Cora had a knack for making the impossible defensive play look routine and delivering a clutch hit exactly when the team needed it most. He helped lead Miami to the College World Series championship game in 1996, cementing his legacy as one of the most brilliant minds to ever wear the uniform.",
    legacy: "Alex Cora proved that true baseball dominance starts in the mind."
  },
  {
    id: "35",
    year: "Omaha",
    era: "OMAHA TRADITION",
    headline: "Tickets to Omaha",
    story: "For most college baseball programs, reaching the College World Series in Omaha is a once-in-a-lifetime achievement. For the Miami Hurricanes, it is a business trip. With more than two dozen appearances in the College World Series, Miami has treated the most exclusive stage in college sports like a second home. This sheer volume of success is almost impossible to comprehend. It means that generation after generation of Hurricanes players have walked into the pressure cooker of Omaha and thrived. It is a testament to a program that doesn't rebuild; it simply reloads and books another ticket to Nebraska.",
    legacy: "For Miami, the season isn't considered a success unless it ends in Omaha."
  },
  {
    id: "36",
    year: "1992",
    era: "OLYMPICS",
    headline: "Taking The Storm to the Olympics",
    story: "In 1992, baseball returned to the Olympic stage in Barcelona, and Team USA needed a leader. Naturally, they turned to 'The Wizard,' Miami head coach Ron Fraser. Fraser didn't just take his brilliant coaching mind to the Barcelona Games; he took the unapologetic swagger of Coral Gables to the global stage. Having the leader of the Hurricanes manage the United States National Team was the ultimate recognition of Miami's baseball supremacy. It proved that the winning culture forged at Mark Light Field wasn't just respected across the country—it was respected across the entire world.",
    legacy: "In 1992, the Hurricanes' fearless leader became the face of American baseball."
  },
  {
    id: "37",
    year: "2004–2006",
    era: "LOCAL SPARK",
    headline: "The Hometown Spark",
    story: "Born and raised in Miami, Jon Jay grew up understanding exactly what 'The U' meant to his city. When he finally put on the orange and green uniform, he played like a man defending his own backyard. Jay was a relentless offensive spark plug, a brilliant outfielder, and a key contributor during the mid-2000s. He represented the absolute best of the South Florida pipeline: a local kid with endless hustle who refused to let his team lose. Jay’s fierce competitiveness at Miami launched a long, successful Major League career, proving once again that South Florida talent is simply built different.",
    legacy: "Jon Jay was the ultimate reminder that nobody plays harder for Miami than a kid from Miami."
  },
  {
    id: "38",
    year: "Visuals",
    era: "ARMOR",
    headline: "The Orange and Green Armor",
    story: "In sports, uniforms are usually just fabric. But in Coral Gables, the bright orange and green jerseys act as psychological warfare. Over the decades, Miami has worn some of the most vibrant, unapologetic uniform combinations in college baseball. While traditional programs stick to quiet, conservative colors, the Hurricanes take the field looking loud, bold, and heavily armored. Opponents step onto the diamond and are immediately intimidated by the sheer visual presence of 'The U.' It isn't just about fashion; it is about carrying the vibrant, fearless energy of South Florida right on their backs.",
    legacy: "The Hurricanes don't just beat their opponents; they outshine them."
  },
  {
    id: "39",
    year: "Mark Light",
    era: "LATE INNINGS",
    headline: "The Late-Inning Magic",
    story: "There is a terrifying feeling that creeps into the visiting dugout at Mark Light Field during the late innings. No matter the score, opponents know the game is never safe. The Hurricanes have a long, terrifying history of orchestrating impossible late-inning comebacks in front of their home crowd. Whether it’s a sudden barrage of extra-base hits or a chaotic, station-to-station rally, Miami thrives in the pressure of the final outs. Fed by the deafening roar of the hometown fans, the team flips a switch, breaking the spirit of the opposition when they least expect it.",
    legacy: "At Mark Light Field, the most dangerous time to play the Hurricanes is when they have their backs against the wall."
  },
  {
    id: "40",
    year: "2004–2008",
    era: "ACC ERA",
    headline: "Conquering a New Conference",
    story: "When Miami transitioned to the Atlantic Coast Conference (ACC) in 2004, some critics wondered if the Hurricanes’ dominance would fade against a new, grueling schedule of traditional baseball powers. The Hurricanes answered by completely taking over. By 2008, Miami had absolutely conquered the ACC, winning the conference championship and securing the number one overall seed in the NCAA Tournament. They proved that it didn't matter what conference logo was painted on the field. The speed, the power, and the unmistakable Miami swagger could dominate any league in the country.",
    legacy: "The Hurricanes didn't just join a new conference; they immediately became the standard it was measured by."
  },
  {
    id: "41",
    year: "1999",
    era: "CWS FINAL",
    headline: "The Ultimate Rivalry on the Ultimate Stage",
    story: "Miami and Florida State hated each other. They had battled for in-state supremacy for decades. But in 1999, the rivalry reached its absolute peak when they met in the College World Series championship game in Omaha. The stakes couldn't have been higher: a national title against your bitterest enemy. In a tense championship battle, Miami leaned on its championship pedigree and clutch pitching to secure a dramatic 6-5 victory. Winning a national title is the dream of every college program, but winning it by taking down your biggest rival on national television? That is the stuff of pure Miami legend.",
    legacy: "The 1999 championship didn't just earn Miami a trophy; it gave them the ultimate bragging rights over Florida State."
  },
  {
    id: "42",
    year: "Tradition",
    era: "SUGARCANES",
    headline: "The Sweetest Tradition in Baseball",
    story: "When Ron Fraser was trying to turn Miami baseball into a local spectacle, he realized he needed more than just a good team—he needed an experience. He created 'The Sugarcanes,' a dedicated group of student bat girls who became an instant game-day staple. Dressed in orange and green, they brought energy, charm, and a uniquely South Florida flair to Mark Light Field. They didn't just retrieve bats; they helped transform a traditional college sport into an absolute event. The tradition has remained one of the most beloved pieces of Hurricanes culture.",
    legacy: "Ron Fraser understood that Miami baseball wasn't just a game; it was the hottest ticket in town."
  },
  {
    id: "43",
    year: "Culture",
    era: "HAVANA ROOTS",
    headline: "The Heartbeat of Havana in Coral Gables",
    story: "You cannot tell the story of Miami Hurricanes baseball without recognizing the influence of South Florida's Cuban-American culture. For decades, the program has been enriched by the passion, flair, and baseball traditions of players with deep Hispanic roots. Stars like Jorge Posada and Yonder Alonso carried that South Florida baseball tradition onto Mark Light Field, bringing a distinct, fiery style of play to the game. The stadium air is frequently filled with the sounds of Spanish cheers and the vibrant culture of Miami. The team embraced the heritage of its city, forging a powerful bond with the local community that goes far beyond baseball.",
    legacy: "Miami baseball isn't just a college program; it is a proud reflection of the vibrant, diverse city it represents."
  },
  {
    id: "44",
    year: "1992–1994",
    era: "CLOSERS",
    headline: "Closing the Door",
    story: "In the high-stakes world of college baseball, the ninth inning belongs to the closers. And nobody slammed the door shut quite like Danny Graves. Pitching for the Hurricanes in the early 1990s, Graves was the ultimate late-inning assassin. When he emerged from the bullpen, opponents knew the game was effectively over. Armed with a devastating arsenal and ice-cold composure, he thrived in the highest-pressure moments. He became one of the most dominant closers in Miami baseball history, setting a standard for Hurricanes relief pitchers during his era.",
    legacy: "When Danny Graves took the mound, the only thing left for the opponent to do was pack their bags."
  },
  {
    id: "45",
    year: "1996",
    era: "1996 CWS",
    headline: "The Heartbreak of '96",
    story: "The path to greatness is often paved with devastating heartbreak. In the 1996 College World Series championship game, the Hurricanes were just one out away from capturing the national title. But in a cruel twist of fate, LSU hit a dramatic walk-off home run in the bottom of the ninth inning, snatching the championship away in the blink of an eye. It was one of the most crushing defeats in Miami sports history. But the program didn't crumble. That brutal loss hardened the returning players, fueling a relentless drive that would culminate in a national title just three years later.",
    legacy: "The Hurricanes learned that the most painful losses are simply the foundation for the next championship."
  },
  {
    id: "46",
    year: "Brotherhood",
    era: "U BROTHERHOOD",
    headline: "The Brotherhood of The U",
    story: "During the golden eras of Miami athletics, the baseball and football programs didn't just share a campus; they shared an attitude. There was a unique, unbreakable brotherhood between the two teams. Football players and baseball players fed off each other's success and unmatched South Florida swagger. The football team dominated the gridiron with intimidation, and the baseball team brought that exact same aggressive energy to the diamond. Together, they made 'The U' the most feared athletic brand in the country.",
    legacy: "In Coral Gables, the culture of winning and intimidation didn't change with the seasons."
  },
  {
    id: "47",
    year: "2001",
    era: "OMAHA AVALANCHE",
    headline: "The Omaha Avalanche",
    story: "The 2001 Miami Hurricanes were an offensive machine, but their performance against Tennessee in the College World Series was simply terrifying. On college baseball's biggest stage, against elite pitching, Miami unleashed an absolute avalanche. They battered the Volunteers, scoring an astonishing 21 runs and recording 20 hits in a brutal 21-13 victory. It was a relentless offensive clinic that left the entire country speechless. The Hurricanes didn't just want to win; they wanted to completely break the will of their opponents. It was a powerful statement that the 2001 team was playing an entirely different game than everyone else.",
    legacy: "When the 2001 offense caught fire, there was absolutely nowhere for an opposing pitcher to hide."
  },
  {
    id: "48",
    year: "Tradition",
    era: "WINTER BROTHERHOOD",
    headline: "The Winter Brotherhood",
    story: "One of the greatest secrets of the Miami baseball program happens when the stadium is mostly empty. Throughout the offseason, former Hurricanes who reach the Major Leagues often return to Coral Gables to train and reconnect with the program. They don't go to exclusive private facilities; they come back to Mark Light Field. Current college players find themselves taking batting practice alongside All-Stars and World Series champions. This incredible tradition bridges the gap between generations, reminding every young player putting on the orange and green that they are part of a lifelong fraternity.",
    legacy: "You can leave the university for the Major Leagues, but you never truly leave The U."
  },
  {
    id: "49",
    year: "1979–1981",
    era: "STRIKEOUT ACE",
    headline: "The Strikeout Machine",
    story: "Before the national championships and the massive television deals, Neal Heaton was putting the college baseball world on notice. Pitching for Miami in the late 1970s and early 1980s, Heaton was a pure strikeout machine. He threw with incredible velocity and an aggressive mentality that completely overwhelmed hitters. He became one of the early pitching stars who helped transform Miami into a national contender, earning two-time All-American honors in the process. Heaton’s brilliance on the mound helped elevate the program from a rising regional threat to a legitimate powerhouse right on the brink of their first championship.",
    legacy: "Neal Heaton was the early ace who proved Miami pitchers could dominate anyone in the country."
  },
  {
    id: "50",
    year: "Voice",
    era: "BALLPARK SOUND",
    headline: "The Voice of Mark Light Field",
    story: "Players graduate and coaches retire, but for generations of Hurricanes fans, one familiar voice has been part of the Mark Light Field experience: Jay Rokeach. Taking over as the public address announcer, Rokeach has been the soundtrack of Miami baseball through every era of its modern history. His distinctive delivery, calm demeanor, and deep understanding of the game have made him a beloved institution in Coral Gables. He has called the names of unknown freshmen and future Hall of Famers alike. To the Miami faithful, a game simply doesn't feel official until they hear his voice echo across the stadium.",
    legacy: "The voice of Jay Rokeach is as essential to Miami baseball as the orange and green jerseys."
  },
  {
    id: "51",
    year: "1970s",
    era: "SHOWMANSHIP",
    headline: "A Night in a Tuxedo",
    story: "Ron Fraser understood that college baseball in the 1970s was competing with the beach, the NFL, and the nightlife of Miami. To get fans into the stadium, he became the ultimate showman. In one of his most legendary promotional stunts, Fraser actually managed a game wearing a full, formal tuxedo. He wasn't just coaching a baseball game; he was throwing a South Florida gala on the dirt. From hiring skywriters to wild giveaways, Fraser treated Mark Light Field like a Broadway stage. He taught the entire sport that entertainment and elite baseball could completely coexist.",
    legacy: "Ron Fraser didn't just sell baseball tickets; he sold an unforgettable night out."
  },
  {
    id: "52",
    year: "1994–1997",
    era: "UNBREAKABLE ARM",
    headline: "The Unbreakable Arm",
    story: "In a program famous for producing hard-throwing, intimidating pitchers, J.D. Arteaga took a different path to greatness. He didn't have a 100-mph fastball, but he possessed an unmatched baseball IQ and the heart of an absolute lion. A local kid from Miami, Arteaga simply refused to lose. He outsmarted batters, manipulated speeds, and competed with a fiery intensity that embodied the Hurricanes' spirit. He finished his career among the most successful pitchers in Miami history, becoming a symbol of toughness and consistency. He proved that true pitching dominance isn't just about arm strength; it’s about absolute mental toughness.",
    legacy: "You didn't need the fastest fastball to become a Miami legend; you just needed the biggest heart."
  },
  {
    id: "53",
    year: "Swagger",
    era: "UNWRITTEN RULES",
    headline: "Breaking the Unwritten Rules",
    story: "For over a century, baseball’s unwritten rules demanded that players keep their heads down and hide their emotions. The Miami Hurricanes completely ignored them. They celebrated big moments with emotion, confidence, and the unmistakable swagger of South Florida. Traditional purists and opposing coaches hated it, calling it disrespectful. But to the Hurricanes, it was just the unapologetic culture of their city. They brought vibrant, expressive energy to the diamond, helping redefine the image of college baseball.",
    legacy: "Miami didn't just play baseball; they brought the fearless energy of the streets to the diamond."
  },
  {
    id: "54",
    year: "1990",
    era: "GOLDEN ACE",
    headline: "The Golden Ace",
    story: "When Alex Fernandez took the mound, the game felt wildly unfair for the opponent. He didn't just beat hitters; he completely overwhelmed them. Armed with devastating breaking pitches and pinpoint command, Fernandez put together one of the most dominant pitching seasons in Miami baseball history. He racked up strikeouts at an astonishing pace, leading the Hurricanes with supreme confidence. His dominant season earned him national recognition and cemented his place among Miami's greatest pitchers.",
    legacy: "Alex Fernandez set a standard of pitching perfection that still echoes in Coral Gables."
  },
  {
    id: "55",
    year: "Basepaths",
    era: "BASEPATH HAVOC",
    headline: "Havoc on the Basepaths",
    story: "While fans loved the massive home runs, the true terror of playing Miami came from their aggressive base running. The Hurricanes didn't just wait for a big hit; they pressured defenses with aggressive baserunning, smart execution, and constant movement. Opposing pitchers were constantly looking over their shoulders, terrified of the speed on the basepaths. This relentless, high-pressure style forced opponents into crucial errors and mental breakdowns.",
    legacy: "Miami’s offense wasn’t just explosive; it was an unrelenting psychological attack."
  },
  {
    id: "56",
    year: "Mid-2000s",
    era: "SLUGGER ERA",
    headline: "The Coral Gables Slugger",
    story: "Gaby Sanchez was the perfect embodiment of the Miami baseball dream. Growing up in the shadow of the university, he stayed home to wear the orange and green, and he made sure the hometown fans never regretted it. Sanchez was a devastating offensive weapon, providing power, consistency, and leadership during the Hurricanes’ mid-2000s seasons. He played with a deep, emotional connection to the city, carrying the offensive load when the team needed it most. His journey from local standout to Hurricane hero perfectly highlighted the strength of the Miami pipeline.",
    legacy: "Gaby Sanchez proved once again that the best baseball talent in the country was already living in Miami's backyard."
  },
  {
    id: "57",
    year: "Tradition",
    era: "FRIDAY NIGHTS",
    headline: "The Friday Night Nightmare",
    story: "In college baseball, the tone of an entire weekend series is set on Friday night. At Mark Light Field, that meant facing the Hurricanes' absolute best. Miami has a long tradition of developing elite Friday night starters. These were the pitchers who thrived under the bright lights, threw with devastating power, and stared down the opponent’s best hitters without blinking. For visiting teams, stepping into the batter's box on a Friday night in Coral Gables often felt like the weekend was over before it even began.",
    legacy: "Surviving a Friday night against the Hurricanes is one of the hardest tasks in college sports."
  },
  {
    id: "58",
    year: "Broadcasting",
    era: "STUDENT RADIO",
    headline: "The Raw Sound of The U",
    story: "While major television networks occasionally dropped in, the true, unfiltered heartbeat of Miami baseball has always been captured by WVUM 90.5 FM, the student radio station. For decades, passionate student broadcasters have sat high above Mark Light Field, calling the game with an authenticity and raw emotion that professional networks could never replicate. They live and die with every pitch, perfectly channeling the anxiety, joy, and sheer madness of the student body. The booth became a launching point for generations of passionate student broadcasters, making it a vital piece of the program’s rich cultural history.",
    legacy: "The true passion of Miami baseball is best heard through the voices of its own students."
  },
  {
    id: "59",
    year: "2008",
    era: "ACC TITLE",
    headline: "The Return to the Top",
    story: "After joining the ACC, Miami quickly proved that its championship culture traveled anywhere. In 2008, the Hurricanes captured the ACC Tournament title and earned the No. 1 overall seed in the NCAA Tournament. Playing with a massive chip on their shoulder, they navigated one of the nation's toughest conference schedules and reminded the entire country that 'The U' doesn't fade away; it simply reloads. It was a dominant campaign that silenced any doubts about Miami’s ability to rule a new era of college baseball.",
    legacy: "The 2008 campaign was a loud, aggressive reminder that the Miami baseball empire never truly sleeps."
  },
  {
    id: "60",
    year: "June",
    era: "JUNE FORTRESS",
    headline: "Fortress in June",
    story: "At the University of Miami, the true test begins when June arrives. When the postseason regional rounds start, Mark Light Field transforms into an impenetrable fortress. The South Florida heat becomes suffocating, the crowd reaches a deafening pitch, and the Hurricanes play with a desperate, win-or-go-home intensity. Over the decades, countless visiting teams have arrived in Coral Gables with Omaha dreams, only to have them completely crushed under the weight of the Miami postseason atmosphere.",
    legacy: "At Miami, the real season doesn't even begin until the calendar flips to June."
  },
  {
    id: "61",
    year: "2006–2008",
    era: "HAVANA SWING",
    headline: "The Swing from Havana",
    story: "Yonder Alonso didn’t just play for Miami; he embodied the soul of the city. A Cuban-American kid who developed his game in South Florida, Alonso grew into one of the most feared left-handed hitters of his era. With a smooth, effortless swing and terrifying raw power, he became the ultimate run-producer for the Hurricanes. He didn't just hit home runs; he launched majestic, game-changing shots that sent Mark Light Field into an absolute frenzy. Alonso represented the ultimate dream for local kids: dominating in your own backyard before taking that homegrown power to the Major Leagues.",
    legacy: "Yonder Alonso was the perfect combination of pure South Florida talent and unmistakable Hurricanes swagger."
  },
  {
    id: "62",
    year: "2004–2005",
    era: "UNBEATABLE ARM",
    headline: "The Unbeatable Arm",
    story: "In the long, storied history of Miami pitching, Cesar Carrillo did something that almost defies belief. He began his collegiate career with a remarkable undefeated stretch, building a reputation as one of the most reliable aces in college baseball. Carrillo pitched with remarkable command and a cold, unflinching confidence. Opposing teams knew exactly who was pitching, but for a long stretch, they were completely powerless to stop him. He was an absolute machine, etching his name into the Miami history books as one of the most respected pitchers ever to wear the uniform.",
    legacy: "During his dominant stretch, Cesar Carrillo became one of the most respected pitchers in college baseball."
  },
  {
    id: "63",
    year: "1983",
    era: "MASCOT WEDDING",
    headline: "A Wedding on the Diamond",
    story: "Ron Fraser’s promotional genius knew absolutely no bounds. In 1983, he decided that a simple baseball game wasn’t enough entertainment, so he created one of his most unforgettable promotional events: a wedding ceremony for the Miami Maniac mascot. In front of a packed stadium of roaring fans, the Maniac tied the knot on the field, complete with a bridal party, a massive cake, and local television coverage. It was utterly absurd, brilliantly executed, and perfectly Miami. It proved that Mark Light Field was a place where college baseball collided with pure, unfiltered spectacle, creating memories that fans still laugh about decades later.",
    legacy: "Only at 'The U' could a mascot's wedding become a legendary piece of baseball history."
  },
  {
    id: "64",
    year: "Mark Light",
    era: "RIGHT FIELD ROAR",
    headline: "The Right Field Roar",
    story: "Visiting outfielders dread playing at Mark Light Field, and it’s entirely because of the fans. The right-field seating area is known for hosting some of the most vocal, relentless, and creative hecklers in college baseball. They don't just boo; they do their homework. They know the opponents, their tendencies, and every detail they can use to create unforgettable moments. It is a psychological gauntlet for any opposing player. The fans don't just watch the game; they actively participate in dismantling the opponent’s focus.",
    legacy: "If you play outfield against Miami, the hardest part isn't catching the ball; it’s surviving the crowd."
  },
  {
    id: "65",
    year: "1997–1999",
    era: "HEAVY HITTER",
    headline: "The Heavy Hitter",
    story: "During the late 1990s, the Miami offense was a relentless juggernaut, and Aubrey Huff was the engine driving the destruction. Huff was a massive presence in the batter's box, combining intimidating size with a pure, destructive swing. He consistently delivered clutch hits and massive home runs, becoming a key part of a team that was building toward a national title. His ability to drive in runs in the most high-pressure situations made him a nightmare for opposing pitching staffs. Huff’s dominance in Coral Gables laid the foundation for a long, successful career as a Major League power hitter.",
    legacy: "Aubrey Huff didn't just swing the bat; he punished the baseball."
  },
  {
    id: "66",
    year: "2001",
    era: "CWS FINAL",
    headline: "Completing the Masterpiece",
    story: "The 2001 Miami Hurricanes entered Omaha with the weight of historic expectations. Everyone knew they were the most talented team in the country, but they still had to finish the job. In the College World Series championship game against a powerhouse Stanford team, the Hurricanes delivered a final, undeniable statement. They played with clinical precision and overwhelming force, completely neutralizing the Cardinal. When the final out was recorded and the dogpile began on the Omaha dirt, it wasn't just a celebration; it was the coronation of a team that had achieved baseball immortality.",
    legacy: "The final out in 2001 didn't just end a season; it cemented a legendary dynasty."
  },
  {
    id: "67",
    year: "1985",
    era: "TEXAS TAKEDOWN",
    headline: "The Texas Takedown",
    story: "In the 1980s, the Texas Longhorns were considered the absolute gold standard of college baseball tradition. But in the 1985 College World Series, the loud, aggressive kids from Coral Gables completely flipped the script. Meeting Texas in a high-stakes Omaha showdown, the Hurricanes refused to be intimidated by the history of their opponent. Miami unleashed a barrage of clutch hitting and dominant pitching to take down the Longhorns and secure the national championship. It was a massive culture clash, and Miami’s victory proved that their modern, high-energy style of baseball was the new king of the sport.",
    legacy: "Miami didn't just beat Texas; they showed the entire country that Miami belonged among college baseball's giants."
  },
  {
    id: "68",
    year: "Tradition",
    era: "ALUMNI GAME",
    headline: "The Alumni Battle",
    story: "Every year, before the regular season begins, Miami hosts one of the most incredible exhibitions in sports: the annual Alumni Game. But this isn't just a relaxed gathering of retired players. Miami's alumni events bring former Hurricanes stars back to Coral Gables, including players who have gone on to successful Major League careers. Young college players get the rare opportunity to compete alongside and against players who once wore the same uniform. It is a fierce, highly competitive game that serves as a powerful reminder of the elite standard required to wear the orange and green.",
    legacy: "The toughest opponent the Hurricanes face all year might just be their own alumni."
  },
  {
    id: "69",
    year: "Scouts",
    era: "SCOUT SECTION",
    headline: "The Scout Section",
    story: "If you look closely behind home plate at Mark Light Field, you will see a quiet but intense group of men holding radar guns and notebooks. Major League scouts regularly visit Coral Gables searching for the next generation of talent. For Miami players, those scouts aren't a distraction; they are a daily motivation. The players know that every pitch, every swing, and every defensive play is being evaluated for the next level. It creates a high-pressure environment that breeds ultimate competitors.",
    legacy: "At Mark Light Field, you aren't just playing for a college crowd; you are auditioning for the Major Leagues."
  },
  {
    id: "70",
    year: "Logo",
    era: "SPLIT-U PRIDE",
    headline: "The Split-U Pride",
    story: "In college sports, a logo is everything. While the baseball team has worn various classic hats over the years, the iconic 'U' remains the ultimate symbol of the program. Whether it's stitched on a cap, painted on the field, or thrown up by the fans, the 'U' is a visual declaration of South Florida pride. It instantly communicates a message of aggressive play, championship history, and unshakable confidence. When a Miami player puts on that cap, they aren't just representing a school; they are carrying the weight and the attitude of an entire city.",
    legacy: "The split 'U' isn't just a letter; it’s a lifestyle."
  },
  {
    id: "71",
    year: "Weather",
    era: "RAIN DELAY",
    headline: "The Rain Delay Advantage",
    story: "South Florida weather is notoriously unpredictable, with massive thunderstorms rolling in on a moment's notice. For visiting teams, a sudden rain delay at Mark Light Field can test the patience and focus of the entire roster. But for the Hurricanes, it is a familiar challenge. Miami players are used to adapting to the unpredictable South Florida weather. They know how to stay loose, keep their rhythm, and attack immediately when play resumes. While opponents sit in the dugout losing their rhythm, the Hurricanes are already preparing the next offensive strike.",
    legacy: "In Coral Gables, the unpredictable weather doesn't stop the storm; it’s just part of the home-field advantage."
  },
  {
    id: "72",
    year: "1980s–1990s",
    era: "GORILLA BALL",
    headline: "The Gorilla Ball Era",
    story: "Before the NCAA heavily regulated bat compositions, college baseball was dominated by 'Gorilla Ball'—an era of heavy aluminum bats and massive offensive numbers. Few programs embraced Gorilla Ball quite like the Miami Hurricanes. Armed with explosive power hitters and a relentless attacking philosophy, Miami turned the ping of the aluminum bat into a terrifying sound for opposing pitchers. They didn't just get hits; they launched towering home runs into the Coral Gables night. It was a high-octane, destructive brand of baseball that perfectly suited the loud, aggressive culture of The U.",
    legacy: "During the aluminum bat era, the Miami offense was a relentless force of nature."
  },
  {
    id: "73",
    year: "Athleticism",
    era: "ELITE ATHLETES",
    headline: "Elite Athleticism",
    story: "The University of Miami is famous for producing elite athletes. Miami has always attracted athletes with rare physical gifts. Some Hurricanes baseball players also brought experience from other sports, adding speed, toughness, and athletic versatility to the diamond. Whether it was sliding hard into second base or tracking down a ball in the outfield with incredible closing speed, they proved that South Florida athletes are simply built differently.",
    legacy: "At Miami, elite athleticism isn't confined to a single sport; it’s in the DNA."
  },
  {
    id: "74",
    year: "Energy",
    era: "HURRICANE ENERGY",
    headline: "The Hurricane Energy",
    story: "When the Hurricanes start a late-inning rally, the atmosphere at Mark Light Field changes instantly. Fans rise, the noise level explodes, and the entire stadium feels like a storm building over Coral Gables. It is a brilliant visual and auditory intimidation tactic. For a visiting pitcher standing on the mound, seeing the crowd erupt while the noise echoes across the diamond is a terrifying reminder that momentum has shifted. It transforms a simple baseball game into an overwhelming, suffocating sensory experience.",
    legacy: "At Miami, momentum doesn't just happen — the entire stadium creates it."
  },
  {
    id: "75",
    year: "2015",
    era: "2015 RESURGENCE",
    headline: "The Resurgence",
    story: "For a program with Miami's historic pedigree, a multi-year absence from Omaha felt like an eternity. But in 2015, a gritty, determined Hurricanes squad refused to be denied. Playing with a massive chip on their shoulder and shaking off the weight of recent disappointments, they battled through a grueling postseason. When they finally captured the Super Regional to secure their return to the College World Series, Mark Light Field erupted. It was an incredibly emotional moment for the program, proving that the championship fire in Coral Gables was still very much alive.",
    legacy: "The 2015 squad reminded the entire country that the road to Omaha still runs through Coral Gables."
  },
  {
    id: "76",
    year: "Culture",
    era: "PRACTICE CULTURE",
    headline: "The Pressure Factory",
    story: "At Miami, the games are meant to be the easy part. Miami's demanding practice culture has always emphasized pressure, preparation, and mental toughness. Behind closed doors, Hurricanes coaches subjected their players to grueling situations meant to simulate the stress of a College World Series elimination game. Whether it was relentless conditioning drills or flawless defensive repetition under the scorching Florida sun, players were pushed to their absolute physical and mental limits. This internal crucible ensured that when a player finally stepped under the bright lights of a real game, they were ready for any situation.",
    legacy: "Champions aren't born in Omaha; they are forged in the brutal practices of Coral Gables."
  },
  {
    id: "77",
    year: "Outfield",
    era: "BERMUDA TRIANGLE",
    headline: "The Bermuda Triangle Outfield",
    story: "Hitting a fly ball to the outfield at Mark Light Field has often been a frustrating experience for opponents. Over the years, Miami has deployed some of the fastest and most reliable outfielders in program history. Fans affectionately treated the Miami outfield like a Bermuda Triangle. Blessed with elite South Florida speed, Hurricanes outfielders routinely made impossible diving catches. Opponents quickly learned that even well-hit balls were never guaranteed to find grass.",
    legacy: "Opponents quickly learned that nothing lands safely in the Miami outfield."
  },
  {
    id: "78",
    year: "Walk-Off",
    era: "WALK-OFF CHAOS",
    headline: "The Walk-Off Chaos",
    story: "A walk-off victory is exciting in any stadium, but at Miami, it is pure, unfiltered chaos. When a Hurricane delivers a game-winning hit, the reaction is explosive. Helmets are tossed, water coolers are emptied, and the entire dugout sprints onto the field to mob the hero. The celebrations are loud, emotional, and completely unapologetic—a perfect reflection of the city’s vibrant culture. For the fans in the stands, a walk-off win isn't just a successful end to a game; it is the ultimate release of tension and an unforgettable South Florida party.",
    legacy: "Nobody celebrates a game-winning moment with more raw passion than the Hurricanes."
  },
  {
    id: "79",
    year: "Chemistry",
    era: "LOCAL BROTHERHOOD",
    headline: "The Local Brotherhood",
    story: "One of the most powerful forces driving the Miami baseball program is the deep, pre-existing bond between the players. Because many Hurricanes have deep roots in South Florida, some players have known each other since childhood. They played with and against each other in local travel leagues long before ever putting on the orange and green. This creates an immediate, unbreakable chemistry in the locker room. They aren't just teammates assigned to the same university; they are childhood rivals and lifelong friends fighting for the pride of their shared hometown.",
    legacy: "The chemistry of the Hurricanes is forged years before they ever step onto campus."
  },
  {
    id: "80",
    year: "1992",
    era: "THE WIZARD",
    headline: "Farewell to The Wizard",
    story: "When Ron Fraser announced his retirement after the 1992 season, it was the end of a monumental era in college sports. 'The Wizard' had transformed Miami into a national baseball powerhouse, turning a program into a two-time national champion and a college baseball empire. His final games at Mark Light Field were deeply emotional events, packed with roaring fans, alumni, and former players who returned to pay their respects. Fraser didn't just leave behind a brilliant winning record; he left behind an enduring legacy of innovation, showmanship, and absolute Miami pride.",
    legacy: "Ron Fraser stepped away, but his visionary spirit will forever be the foundation of Mark Light Field."
  },
  {
    id: "81",
    year: "Rivalry",
    era: "BLOOD FEUD",
    headline: "The In-State Blood Feud",
    story: "There is no love lost when Miami and Florida State share a baseball diamond. It doesn't matter what the national rankings are, or how either team's season is going—when the orange and green meets the garnet and gold, it is an absolute war. The games are defined by intense emotion, high-stakes pressure, and a palpable tension in the stadium. It’s a rivalry built on decades of fierce recruiting battles and postseason heartbreak. For the players and fans, beating FSU isn't just a goal; it is one of the biggest statements a season can make.",
    legacy: "The Miami-FSU rivalry isn't just a series; it’s a battle for the soul of Florida baseball."
  },
  {
    id: "82",
    year: "DNA",
    era: "CHAMPIONSHIP DNA",
    headline: "Omaha or Bust",
    story: "At many universities, simply making the NCAA tournament is a reason to celebrate. At the University of Miami, the standard is entirely different. The program operates under a relentless 'Omaha or Bust' mentality. Players are recruited, trained, and conditioned with one singular goal: reaching the College World Series. A good regular season means absolutely nothing if it doesn't end on the dirt in Nebraska. This immense, self-imposed pressure creates a culture where greatness is not just hoped for—it is universally expected from the moment a player puts on the uniform.",
    legacy: "In Coral Gables, the season doesn't end until you reach Omaha."
  },
  {
    id: "83",
    year: "Rituals",
    era: "FAN RITUALS",
    headline: "The Two-Strike Rise",
    story: "There is a distinct, spine-tingling rhythm to a Miami baseball game. When a Hurricanes pitcher gets two strikes in a crucial moment, the crowd rises, creating a synchronized, deafening roar of anticipation. It is a powerful fan ritual that turns the stadium into a pressure cooker for the visiting hitter. The fans don't just watch the strikeout happen; they actively try to will the ball into the catcher's mitt.",
    legacy: "At Mark Light Field, a strikeout isn't just a pitch; it’s a collaboration between the team and the city."
  },
  {
    id: "84",
    year: "Heartbreaks",
    era: "OMAHA HEARTBREAKS",
    headline: "The Agony of the Runner-Up",
    story: "The incredible success of the Miami program means they have experienced the ultimate highs, but also the most agonizing lows. Reaching the College World Series championship game and falling short is a unique kind of pain. The Hurricanes have suffered through brutal, season-ending losses in Omaha that left fans speechless and players in tears. But in Coral Gables, runner-up finishes aren't celebrated with parades. Instead, that bitter heartbreak is immediately weaponized, turning the agony of defeat into the ultimate fuel for the following season's winter workouts.",
    legacy: "The pain of losing in Omaha is exactly what drives the Hurricanes to return."
  },
  {
    id: "85",
    year: "Folklore",
    era: "MARK LIGHT FOLKLORE",
    headline: "The Generations in the Stands",
    story: "Mark Light Field isn't just a stadium; it is a generational gathering place. If you walk through the concourse during a weekend series, you will see families who have held the exact same season tickets for decades. Grandparents who watched the 1982 championship team now bring their grandchildren to watch the modern era. The stories, the heckles, and the deep love for the program are passed down like family heirlooms. This multi-generational devotion gives Miami baseball a rich, communal soul that transcends any single era of players.",
    legacy: "You don't just become a Miami baseball fan; you inherit the tradition."
  },
  {
    id: "86",
    year: "DNA",
    era: "DOGPILE",
    headline: "The Postseason Dogpile",
    story: "Every college baseball season begins with a single image in mind: the dogpile. For the Hurricanes, the visualization of throwing their gloves in the air and swarming the pitcher’s mound in Omaha is the ultimate driving force. It is a chaotic, euphoric explosion of pure joy that makes every grueling practice and brutal road trip worth it. When Miami achieves that ultimate victory, the dogpile becomes an iconic photograph, instantly burned into the memory of every fan and permanently remembered by the Hurricanes community.",
    legacy: "The championship dogpile is the greatest masterpiece a baseball team can paint."
  },
  {
    id: "87",
    year: "ACC",
    era: "ACC GAUNTLET",
    headline: "The Iron Crucible",
    story: "Competing in the Atlantic Coast Conference means there are absolutely no easy weekends. Since joining the ACC, Miami has navigated one of the nation's most competitive baseball conferences. Week after week, the Hurricanes are tested by elite pitching and relentless offenses. But Miami embraces the grind. They know that surviving the brutal crucible of ACC play is exactly what prepares them for the intense, unforgiving pressure of the NCAA postseason. Iron sharpens iron, and the ACC ensures the Hurricanes are always battle-tested.",
    legacy: "The Hurricanes don't just survive the hardest conference in baseball; they use it to build champions."
  },
  {
    id: "88",
    year: "New Era",
    era: "CARRIER OF TORCH",
    headline: "Carrying the Torch",
    story: "Putting on the Miami Hurricanes baseball uniform comes with an incredibly heavy burden. Modern players know that when they step onto Mark Light Field, they are walking in the footsteps of national champions, Golden Spikes winners, and Major League All-Stars. The ghosts of the 1982, 1985, 1999, and 2001 championship teams are always watching. But true Hurricanes don't shrink from that history; they embrace it. The new generation of players carries the torch with the same fearless swagger and unshakable confidence that built the empire decades ago.",
    legacy: "The names on the roster change, but the attitude of 'The U' is eternal."
  },
  {
    id: "89",
    year: "Rituals",
    era: "ORANGE AND GREEN SEA",
    headline: "The Orange and Green Sea",
    story: "There are few sights in college sports more intimidating than a sold-out Mark Light Field during an NCAA Regional. The stadium transforms into an absolute sea of bright orange and vibrant green. It is a visual wall of South Florida pride that immediately lets the visiting team know they have entered hostile territory. The vibrant colors reflect the loud, energetic, and completely unapologetic culture of the fan base. When the stadium is packed in its signature colors, the home-field advantage feels physically heavy.",
    legacy: "The colors of The U aren't just worn; they are weaponized by the fans."
  },
  {
    id: "90",
    year: "Recruiting",
    era: "RECRUITING THE 305",
    headline: "Recruiting the 305",
    story: "The fiercest battles between Miami and its state rivals don't just happen on the field; they happen in living rooms across South Florida. Area code 305 is one of the most talent-rich baseball regions in the country. For decades, the Hurricanes have fought brutal recruiting wars against Florida and Florida State to keep elite local talent at home. When a highly touted Miami kid chooses to wear the orange and green over a rival, it isn't just a recruiting victory; it is a massive statement of local pride.",
    legacy: "The rivalry begins long before the first pitch; it starts with protecting the backyard."
  },
  {
    id: "91",
    year: "Folklore",
    era: "FIRST PITCH",
    headline: "The First Pitch Tradition",
    story: "Before the umpire yells 'Play Ball,' Mark Light Field frequently honors its rich history through the ceremonial first pitch. But in Coral Gables, it’s rarely just a local politician. The Hurricanes bring back legendary alumni, beloved former coaches, and local heroes to toe the rubber. When former Hurricanes legends and local heroes step onto the mound to massive applause, it bridges the gap between the program's glorious past and its vibrant present. It reminds the current roster exactly who they are playing for.",
    legacy: "The ceremonial first pitch at Miami is a weekly reminder of the program's legendary brotherhood."
  },
  {
    id: "92",
    year: "DNA",
    era: "ROAD WARRIORS",
    headline: "The Road Warriors",
    story: "While the Hurricanes are always dangerous at home, their true championship DNA is revealed on the road. Going into hostile SEC or ACC environments during the postseason requires immense mental toughness. Miami has a rich history of walking into enemy stadiums, silencing deafening crowds, and ripping the heart out of the home team. Playing the villain on the road perfectly suits the Miami swagger. They feed off the boos, embrace the hostility, and take absolute pride in ruining the weekend for opposing fans.",
    legacy: "A true Hurricane loves winning at home, but absolutely thrives on silencing a road crowd."
  },
  {
    id: "93",
    year: "Rituals",
    era: "RUBBER MATCH",
    headline: "The Sunday Rubber Match",
    story: "In a three-game weekend series, Sunday is when boys become men. When a series is tied 1-1, the Sunday rubber match brings a tense, desperate energy to Mark Light Field. The pitching staffs are depleted, the players are exhausted, and the game always comes down to sheer willpower. Miami fans know that Sunday games require a different level of intensity. The crowd hangs on every single pitch, fully aware that winning the series is vital for the ultimate march toward Omaha.",
    legacy: "On Sundays in Coral Gables, only the toughest survive."
  },
  {
    id: "94",
    year: "Heartbreaks",
    era: "EMPTY LOCKER ROOM",
    headline: "The Empty Locker Room",
    story: "There is a chilling silence that falls over a locker room when a season ends in Omaha without a trophy. For the seniors who will never wear the uniform again, and the underclassmen who realize how hard it is to get back, the finality of a College World Series elimination is devastating. But the Miami baseball culture demands that players remember that exact feeling of emptiness. It becomes the spoken and unspoken motivation for the entire offseason, ensuring that the team never takes a single rep for granted.",
    legacy: "The silence of a season-ending loss is the loudest motivation a Hurricane will ever hear."
  },
  {
    id: "95",
    year: "Family",
    era: "THE U FAMILY",
    headline: "One University, One Attitude",
    story: "The University of Miami doesn't have a baseball culture and a football culture; it simply has 'The U' culture. The swagger, the confidence, and the refusal to back down are shared universally across the athletic department. Athletes across the university often support the baseball program, cheering wildly for the baseball team. This cross-sport unity creates an intimidating, unified front. To wear the orange and green in any sport means you adopt the exact same fearless, South Florida identity.",
    legacy: "The U isn't just a sports program; it is an unbreakable athletic brotherhood."
  },
  {
    id: "96",
    year: "Folklore",
    era: "SMELL OF GRILL",
    headline: "The Smell of the Grill",
    story: "A Miami baseball game is a complete sensory experience, and nothing captures the essence of a South Florida evening quite like the smell of the stadium grills. Long before the first pitch, the unmistakable scent of barbecue drifts across Mark Light Field, blending with the humid evening air. It signals the start of the weekend and sets the tone for a relaxed, communal atmosphere in the stands. It is a simple, beautiful tradition that makes a high-stakes Division I baseball game feel like a massive neighborhood block party.",
    legacy: "The unmistakable aroma of Mark Light Field is the smell of a perfect Miami evening."
  },
  {
    id: "97",
    year: "DNA",
    era: "DEFENDING DIRT",
    headline: "Defending the Dirt",
    story: "The Hurricanes view Mark Light Field as sacred ground. Defending their home turf isn't just a strategic advantage; it is a matter of profound respect. Players understand that protecting home field requires intensity, discipline, and pride. They protect their stadium with a territorial pride that ensures visiting teams know exactly whose house they are in.",
    legacy: "You can play hard at Mark Light Field, but you never disrespect the dirt."
  },
  {
    id: "98",
    year: "Rituals",
    era: "FINAL OUT",
    headline: "Standing for the Final Out",
    story: "When the Hurricanes are one out away from securing a victory, many fans rise, clapping in unison to a steady, rhythmic beat as the closer stares down the final batter. It is a moment of collective anticipation that sends chills down the spine of the opposition. The fans demand to be physically involved in the final act of the game, standing shoulder-to-shoulder to witness the official raising of the victory flag.",
    legacy: "The fans don't just watch the final out; they stand up and demand it."
  },
  {
    id: "99",
    year: "New Era",
    era: "NEW STORM",
    headline: "A New Storm Rising",
    story: "College baseball is evolving rapidly with the transfer portal, new technologies, and shifting conferences. But the soul of Miami baseball remains completely untouched. The modern Hurricanes adapt to the new era while fiercely protecting the swagger, the community connection, and the intense competitive drive that made the program legendary. They blend cutting-edge analytics with old-school South Florida toughness. The game may look a little different today, but the storm brewing in Coral Gables is just as dangerous as ever.",
    legacy: "The game of baseball changes, but the fearless soul of The U remains forever."
  },
  {
    id: "100",
    year: "Legacy",
    era: "ENDURING LEGACY",
    headline: "Forever The U",
    story: "Players come and go, coaches retire, and stadiums are renovated, but the identity of Miami baseball is immortal. It lives in every kid playing in a South Florida park who dreams of wearing the orange and green. It lives in the roars of the Mark Light faithful, and in the banners flying proudly over Coral Gables. To be a Hurricane is to be part of a timeless tradition of excellence, swagger, and community. The story of Miami baseball is far from over, because the storm never truly stops.",
    legacy: "It’s more than a game. It’s more than a team. It’s All About The U."
  }
];

export default function Home() {
  const stadiumImages = [
    "/stadium-1.jpg",
    "/stadium-2.jpg",
    "/stadium-3.jpg",
    "/stadium-4.jpg",
    "/stadium-5.jpg",
    "/stadium-6.jpg",
  ];

  const [selectedArchive, setSelectedArchive] = useState(miamiBaseballStories[0]);
  const [currentBg, setCurrentBg] = useState(stadiumImages[0]);
  const [shareButtonText, setShareButtonText] = useState("SHARE WITH THE U FAITHFUL");

  useEffect(() => {
    const randomStoryIndex = Math.floor(Math.random() * miamiBaseballStories.length);
    setSelectedArchive(miamiBaseballStories[randomStoryIndex]);

    const randomBgIndex = Math.floor(Math.random() * stadiumImages.length);
    setCurrentBg(stadiumImages[randomBgIndex]);
  }, []);

  const handleRandomShuffle = () => {
    const randomStoryIndex = Math.floor(Math.random() * miamiBaseballStories.length);
    setSelectedArchive(miamiBaseballStories[randomStoryIndex]);

    const availableImages = stadiumImages.filter((img) => img !== currentBg);
    const newBg = availableImages[Math.floor(Math.random() * availableImages.length)];
    setCurrentBg(newBg);
  };

  const handleShare = async () => {
    const shareData = {
      title: `Miami Baseball Archive Story: ${selectedArchive.headline}`,
      text: selectedArchive.story,
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
        .vintage-newspaper {
          background-color: #f7f3e9;
          background-image: radial-gradient(#d6c7b2 0.75px, transparent 0.75px);
          background-size: 15px 15px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3), inset 0 0 25px rgba(180, 160, 130, 0.25);
          border: 4px double #1c1917;
        }
        .newspaper-headline {
          font-family: Georgia, serif;
          letter-spacing: -0.02em;
        }
      `}} />

      {/* 顶部报头栏 */}
      <header className="w-full pt-4 pb-2 px-4 text-center">
        <div className="max-w-md mx-auto space-y-1">
          <p className="tracking-[0.3em] uppercase text-[10px] text-white/80 font-light">
            THE DAILY CHRONICLE • SOUTH FLORIDA EDITION
          </p>
          <p className="tracking-[0.25em] uppercase text-xs text-white/95 font-medium">
            NOTUSUAL CREATIVE STUDIO
          </p>
          <p className="tracking-[0.2em] uppercase text-xs text-white/80 font-sans font-light">
            CORAL GABLES BASEBALL CHRONICLES
          </p>
        </div>
      </header>

      {/* 报纸风格核心容器 */}
      <div className="max-w-md sm:max-w-lg mx-auto px-4 pt-2 pb-6 w-full relative">
        <div className="absolute inset-x-4 top-6 bottom-2 bg-stone-300 border-2 border-stone-900 translate-y-3 translate-x-2 pointer-events-none"></div>
        <div className="absolute inset-x-4 top-4 bottom-1 bg-stone-100 border-2 border-stone-900 translate-y-1.5 translate-x-1 pointer-events-none"></div>

        {/* 核心卡片容器：复古报纸头条质感 */}
        <div className="relative vintage-newspaper text-stone-950 overflow-hidden rounded-none p-2 sm:p-4">
          
          {/* 报纸副标与双线分隔符 */}
          <div className="border-b-2 border-stone-900 pb-2 mb-3 text-center">
            <div className="flex justify-between items-center text-[9px] font-mono tracking-widest text-stone-600 uppercase border-b border-stone-900 pb-1 mb-1">
              <span>SPECIAL ARCHIVE EDITION</span>
              <span>VOL. {selectedArchive.id} • NO. 305</span>
            </div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-bold text-stone-900">
              {selectedArchive.era}
            </p>
          </div>

          {/* 图片展示区 */}
          <div className="relative w-full h-[260px] flex flex-col items-center justify-center overflow-hidden border-2 border-stone-900 mb-4 px-4">
            <div className="absolute inset-0 z-0 grayscale contrast-150 brightness-90">
              <Image
                src={currentBg}
                alt="Miami Baseball Archive Background"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
            
            <div className="absolute inset-0 z-1 bg-black/20"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-1 w-full">
              <div className="transform -rotate-1 w-full px-2">
                <span className="block tracking-tight text-[55px] sm:text-[65px] leading-none text-white vintage-number drop-shadow-[0_4px_6px_rgba(0,0,0,0.9)]">
                  {selectedArchive.year}
                </span>
              </div>
            </div>
          </div>

          {/* 报纸头条与正文区 */}
          <div className="text-center px-2 pb-2">
            <h3 className="text-xl sm:text-2xl newspaper-headline font-black mb-3 leading-tight text-stone-950">
              &ldquo;{selectedArchive.headline}&rdquo;
            </h3>

            {/* 报纸式双线装饰 */}
            <div className="w-16 h-0.5 bg-stone-900 mx-auto mb-3"></div>

            <p className="text-stone-900 text-xs sm:text-sm leading-relaxed font-serif mb-4 text-justify tracking-wide px-1">
              &ldquo;{selectedArchive.story}&rdquo;
            </p>

            {/* 醒目的 Legacy 金句展示框（报纸社论风格） */}
            <p className="text-stone-950 text-xs sm:text-sm leading-relaxed font-serif font-bold italic mb-6 border-t border-b border-stone-900 py-2.5 bg-stone-200/50">
              &ldquo;{selectedArchive.legacy}&rdquo;
            </p>

            <div className="flex flex-col space-y-2.5 items-center">
              <button
                onClick={handleRandomShuffle}
                className="w-full bg-[#005030] hover:bg-[#003820] text-white font-serif font-bold tracking-widest text-xs uppercase py-3.5 transition-all duration-300 text-center rounded-none border border-stone-900 shadow-sm cursor-pointer"
              >
                READ NEXT HEADLINE CHAPTER
              </button>

              <button
                onClick={handleShare}
                className="w-full bg-stone-300 hover:bg-stone-400 text-stone-900 font-serif font-bold tracking-widest text-xs uppercase py-3 transition-all duration-300 text-center rounded-none border border-stone-900 shadow-sm cursor-pointer"
              >
                {shareButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部版权栏 */}
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
