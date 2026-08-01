"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const miamiArchives = [
  {
    id: 1,
    year: "1983",
    era: "1983 Season (January 2, 1984 Orange Bowl)",
    headline: "The Miracle in the Orange Bowl vs. Nebraska",
    body: "In the 1984 Orange Bowl, an emerging Miami program faced the heavily favored Nebraska Cornhuskers in a defining championship showdown. After trading momentum throughout the night, the Hurricanes held onto a narrow lead late in the game. Nebraska’s final two-point conversion attempt was broken up by Ken Calhoun, preserving Miami’s dramatic 31-30 victory and delivering the program’s first national championship in unforgettable fashion.",
  },
  {
    id: 2,
    year: "2002",
    era: "January 3, 2002",
    headline: "The 2002 Orange Bowl Masterclass vs. Nebraska",
    body: "Returning to the Orange Bowl for the 2002 national title showdown against Nebraska, Miami's offense played with breathtaking efficiency. Ken Dorsey carved up the Cornhusker secondary, connecting repeatedly with Andre Johnson and Jeremy Shockey, while the defense swarmed from the opening whistle to build a commanding 34-0 halftime lead on the way to a dominant 37-14 championship coronation.",
  },
  {
    id: 3,
    year: "1979",
    era: "1979–1983",
    headline: "Howard Schnellenberger’s Vision and Foundation",
    body: "When Howard Schnellenberger arrived in 1979, he inherited a program facing major uncertainty. Through a pro-style football philosophy, aggressive recruiting throughout South Florida, and a clear vision for long-term success, he rebuilt Miami’s foundation. His work created the structure that eventually transformed the Hurricanes into a national championship contender.",
  },
  {
    id: 4,
    year: "1984",
    era: "1984–1988",
    headline: "The Jimmy Johnson Era and the Rise of Miami Football",
    body: "Following Schnellenberger’s departure, Jimmy Johnson continued Miami’s rise by creating a fast, aggressive, and highly competitive football identity. His approach challenged traditional college football expectations and helped establish the swagger, speed, and confidence that became closely associated with The U during the 1980s.",
  },
  {
    id: 5,
    year: "1986",
    era: "January 2, 1987 (1986 Season)",
    headline: "The 1986 Fiesta Bowl Defensive Battle vs. Penn State",
    body: "In the 1987 Fiesta Bowl, Miami faced Penn State in a physical defensive struggle between two elite programs. The Hurricanes’ defense matched the Nittany Lions’ toughness throughout the game, but turnovers and late execution ultimately decided the outcome. Despite the loss, the matchup reflected the intensity and defensive identity of Miami football during the mid-1980s.",
  },
  {
    id: 6,
    year: "1980s",
    era: "1980s Era",
    headline: "The Atmospheric Tradition of “The Smoke”",
    body: "During Miami’s golden era of the 1980s, the team’s dramatic entrance through a wall of smoke became one of the most recognizable sights in college football. The tradition created an intimidating atmosphere before kickoff and became a visual symbol of the confidence and energy surrounding Hurricanes football.",
  },
  {
    id: 7,
    year: "1987",
    era: "1987",
    headline: "The 1987 National Championship Campaign",
    body: "The 1987 Hurricanes entered the season with one of the most talented rosters in college football. After navigating a demanding schedule with elite performances on both sides of the ball, Miami defeated Oklahoma in the Orange Bowl to complete a championship season and capture its second national title.",
  },
  {
    id: 8,
    year: "1988",
    era: "October 15, 1988",
    headline: "Inside the 1988 Catholics vs. Convicts Clash",
    body: "The 1988 Miami–Notre Dame matchup became one of the most heavily discussed games in college football history. Beyond the rivalry itself, the game represented a cultural collision between two programs with completely different identities. Notre Dame ultimately secured a dramatic 31-30 victory, creating one of the defining chapters of the rivalry.",
  },
  {
    id: 9,
    year: "1986",
    era: "1986",
    headline: "Vinny Testaverde Claims Miami’s First Heisman Trophy",
    body: "During the 1986 season, quarterback Vinny Testaverde delivered one of the finest individual performances in Miami history. His arm talent, decision-making, and leadership throughout the season earned him the Heisman Trophy, making him the first Hurricane player ever to receive college football’s most prestigious individual award.",
  },
  {
    id: 10,
    year: "1985",
    era: "1985–1988",
    headline: "Michael Irvin: Leadership and Big Plays",
    body: "Wide receiver Michael Irvin became one of the defining personalities of Miami’s late-1980s offense. Known for his confidence, competitiveness, and ability to deliver in critical moments, Irvin helped establish the standard for future generations of Hurricane receivers.",
  },
  {
    id: 11,
    year: "1985",
    era: "November 30, 1985",
    headline: "The Historic Comeback Against Florida State",
    body: "Facing a difficult challenge against in-state rival Florida State during the 1985 season, Miami produced a memorable second-half comeback. The Hurricanes overcame a significant deficit and rallied for a 35-27 victory, adding another unforgettable chapter to one of college football’s greatest rivalries.",
  },
  {
    id: 12,
    year: "1989",
    era: "January 2, 1989",
    headline: "The 1989 Orange Bowl Thriller vs. Nebraska",
    body: "In a fiercely contested New Year's Day clash at the Orange Bowl, Miami squared off against a disciplined Nebraska squad. Displaying offensive resilience and clutch defensive stands in the second half, the Hurricanes held off a late Cornhusker charge to secure a hard-fought 23-3 victory, reinforcing their postseason pedigree.",
  },
  {
    id: 13,
    year: "1985",
    era: "November 30, 1985",
    headline: "The 1985 State Rivalry Comeback",
    body: "Miami’s 1985 victory over Florida State became one of the early defining moments of the rivalry’s modern era. After falling behind, the Hurricanes responded with offensive execution and defensive adjustments to complete a memorable 35-27 comeback victory.",
  },
  {
    id: 14,
    year: "1980s",
    era: "Mid-1980s",
    headline: "Speed Over Size on Defense",
    body: "During the mid-1980s, Miami developed a defensive philosophy built around speed, athleticism, and pursuit. By prioritizing fast linebackers and defensive backs who could cover space, the Hurricanes created a style that challenged the traditional power-running offenses of the era.",
  },
  {
    id: 15,
    year: "1991",
    era: "January 1, 1991",
    headline: "The 1991 Cotton Bowl Statement vs. Texas",
    body: "In the 1991 Cotton Bowl, Miami faced Texas in Dallas and delivered one of the most dominant postseason performances in program history. The Hurricanes controlled the game from start to finish, earning a commanding 46-3 victory and reinforcing their status as one of the nation’s elite teams.",
  },
  {
    id: 16,
    year: "1980s",
    era: "1980s–1990s",
    headline: "Building Miami’s Defensive Identity",
    body: "Throughout Miami’s championship eras, defense was built around aggression, preparation, and creating game-changing plays. Turnovers became a signature element of the program’s identity, reflecting a mentality that every defensive possession could change the direction of a game.",
  },
  {
    id: 17,
    year: "1991",
    era: "1991",
    headline: "The 1991 Shared National Championship Season",
    body: "The 1991 season ended with Miami sharing the national championship with Washington in the final media polls. Led by one of the strongest defenses in college football, the Hurricanes continued to demonstrate the speed, discipline, and talent that defined the program’s golden era.",
  },
  {
    id: 18,
    year: "1992",
    era: "January 1, 1992",
    headline: "The 1992 Fiesta Bowl Mastery vs. Nebraska",
    body: "In the 1992 Fiesta Bowl, Miami delivered a dominant defensive performance against Nebraska. The Hurricanes controlled the game from the opening moments, shutting down the Cornhuskers’ option attack in a 22-0 victory that showcased Miami’s defensive excellence.",
  },
  {
    id: 19,
    year: "1980s",
    era: "1980s–1990s",
    headline: "Iron Sharpens Iron in Coral Gables",
    body: "Former players often describe Miami’s championship-era practices as some of the most competitive environments they experienced. With future professional talent competing against each other daily, the intensity inside the program helped prepare players for the pressure of college football’s biggest stages.",
  },
  {
    id: 20,
    year: "1980s",
    era: "1980s Onward",
    headline: "The Cult of Excellence: Beyond the Gridiron",
    body: "Beneath the roaring stadium lights and the swagger of national championships, representing The U meant holding yourself to an uncompromising standard. The fierce internal accountability demanded in Coral Gables forged players who didn't just survive the spotlight, but dominated whatever arena they stepped into next.",
  },
  {
    id: 21,
    year: "1970s",
    era: "1970s–1990s",
    headline: "Playing on the Historic Orange Bowl Turf",
    body: "For decades, the Orange Bowl served as the home of Miami football and provided the backdrop for some of the program’s greatest moments. The familiar environment, passionate crowds, and unique stadium atmosphere became deeply connected to the identity of Hurricanes football.",
  },
  {
    id: 22,
    year: "1994",
    era: "January 1, 1994",
    headline: "The 1994 Orange Bowl Battle vs. Nebraska",
    body: "Miami faced Nebraska in a physical Orange Bowl matchup that highlighted the contrast between Miami’s speed and Nebraska’s powerful rushing attack. The game reflected the intensity of a major postseason battle between two programs with championship traditions.",
  },
  {
    id: 23,
    year: "1980s",
    era: "1980s–1990s",
    headline: "Winning Through the Third Phase",
    body: "Miami’s championship teams understood that special teams could influence the outcome of games. Strong coverage units, field position battles, and disciplined execution provided another advantage during the program’s most successful eras.",
  },
  {
    id: 24,
    year: "2004",
    era: "2004",
    headline: "Miami Joins the Atlantic Coast Conference",
    body: "In 2004, Miami officially joined the Atlantic Coast Conference, beginning a new chapter in the program’s history. The move changed the annual schedule and introduced new conference rivalries while maintaining the Hurricanes’ national ambitions.",
  },
  {
    id: 25,
    year: "2001",
    era: "2001",
    headline: "The 2001 Team’s Unmatched Talent and Execution",
    body: "The 2001 Hurricanes are widely remembered for the extraordinary amount of future professional talent across the roster. Combining elite players, disciplined preparation, and dominant performances throughout the season, Miami completed an undefeated campaign with a Rose Bowl victory and another national championship.",
  },
  {
    id: 26,
    year: "1991",
    era: "1991",
    headline: "The 1991 Shared National Championship Season",
    body: "The 1991 Hurricanes finished the season as a national champion in the final media polls, sharing the honor with Washington. Led by an elite defense and a roster filled with future professional talent, Miami continued to reinforce its reputation as one of college football’s most dominant programs of the era.",
  },
  {
    id: 27,
    year: "2000",
    era: "October 28, 2000",
    headline: "The Mountaineer Miracles: The 2000 WVU Comeback",
    body: "Facing a hostile, deafening road environment in Morgantown during the 2000 season, Miami found themselves trapped in a frantic, high-scoring duel against West Virginia. Displaying championship resilience, quarterback Ken Dorsey and an explosive offense orchestrated a brilliant second-half surge, capped off by clutch-time conversions to secure a thrilling 47-21 victory that kept their national title ambitions alive.",
  },
  {
    id: 28,
    year: "1992",
    era: "1992",
    headline: "Gino Torretta Claims Miami’s Second Heisman Trophy",
    body: "During the 1992 season, quarterback Gino Torretta guided Miami’s offense with intelligence, accuracy, and composure under pressure. His leadership throughout the season earned him the Heisman Trophy, making him the second Hurricane player to receive college football’s most prestigious individual award.",
  },
  {
    id: 29,
    year: "1994",
    era: "1994",
    headline: "Warren Sapp: A Force in the Trenches",
    body: "During the 1994 season, defensive tackle Warren Sapp established himself as one of the most disruptive players in college football. With explosive quickness, powerful technique, and the ability to collapse offensive schemes, he earned consensus All-American honors and became one of Miami’s most feared defensive stars.",
  },
  {
    id: 30,
    year: "1990s",
    era: "1990s–2000s Transition Era",
    headline: "The Defensive Roots: Ray Lewis and Ed Reed",
    body: "Ray Lewis and Ed Reed represented two different generations of Miami defensive excellence. Lewis brought unmatched intensity and leadership in the mid-1990s, while Reed became a defining playmaker at safety during the championship era. Together, they helped establish the standard of defensive greatness associated with The U.",
  },
  {
    id: 31,
    year: "1991",
    era: "January 1, 1991",
    headline: "The 1991 Cotton Bowl Statement vs. Texas",
    body: "Miami delivered one of its most dominant postseason performances in the 1991 Cotton Bowl against Texas. Controlling both sides of the ball, the Hurricanes secured a commanding 46-3 victory and reinforced their position among college football’s elite programs.",
  },
  {
    id: 32,
    year: "1991",
    era: "November 16, 1991",
    headline: "Wide Right II: Another Classic Miami–Florida State Finish",
    body: "The rivalry between Miami and Florida State produced another unforgettable moment in 1991 when a late Seminoles field goal attempt sailed wide right. Miami escaped Tallahassee with a dramatic 17-16 victory, adding another legendary chapter to one of college football’s greatest rivalries.",
  },
  {
    id: 33,
    year: "1992",
    era: "January 1, 1992",
    headline: "The 1992 Fiesta Bowl Mastery vs. Nebraska",
    body: "In the Fiesta Bowl following the 1991 season, Miami’s defense delivered a complete performance against Nebraska. The Hurricanes contained the Cornhuskers’ option attack and recorded a 22-0 shutout, showcasing the speed and discipline that defined Miami’s championship-era defenses.",
  },
  {
    id: 34,
    year: "1993",
    era: "January 1, 1993 (1992 Season)",
    headline: "The 1993 Sugar Bowl Shutout vs. Alabama",
    body: "In the 1993 Sugar Bowl, Miami faced Alabama inside the Louisiana Superdome in a major postseason matchup. The Hurricanes’ defense controlled the game from the beginning, shutting out the Crimson Tide 29-0 and delivering one of the program’s most memorable bowl performances.",
  },
  {
    id: 35,
    year: "1993",
    era: "1993–1995",
    headline: "Ray Lewis: The Defensive Heartbeat",
    body: "Ray Lewis became the emotional leader of Miami’s defense during the mid-1990s. His sideline-to-sideline range, physical style, and vocal presence made him one of the defining defensive personalities of the program’s history.",
  },
  {
    id: 36,
    year: "1995",
    era: "January 1, 1995 (1994 Season)",
    headline: "The 1995 Orange Bowl: Clash of Heavyweights",
    body: "The 1995 Orange Bowl brought together Miami and Nebraska in a battle between two nationally recognized programs. The matchup highlighted the contrast between Miami’s athletic defensive speed and Nebraska’s powerful rushing attack, creating another memorable postseason chapter.",
  },
  {
    id: 37,
    year: "1994",
    era: "January 1, 1994",
    headline: "The 1994 Orange Bowl Battle vs. Nebraska",
    body: "Miami faced Nebraska in a physical Orange Bowl contest that tested both teams’ strengths. The game reflected the contrasting styles of two elite programs, with each side battling for control throughout the postseason matchup.",
  },
  {
    id: 38,
    year: "1994",
    era: "January 1, 1994",
    headline: "Facing Arizona’s Desert Swarm Defense",
    body: "In the 1994 Fiesta Bowl, Miami faced Arizona’s famous “Desert Swarm” defense in a low-scoring defensive battle. The Hurricanes struggled to generate offensive rhythm against Arizona’s aggressive scheme, making the game a difficult postseason challenge during a transitional period.",
  },
  {
    id: 39,
    year: "1990",
    era: "January 1, 1990 (1989 Season)",
    headline: "The 1990 Orange Bowl Dominance vs. Texas",
    body: "Capping off the 1989 national championship season, Miami met a tough Texas squad in the Orange Bowl. Playing with supreme confidence under head coach Dennis Erickson, the Hurricanes executed a suffocating defensive game plan that completely neutralized the Longhorns' attack, cruising to a convincing 31-3 victory to cement their status at the pinnacle of college football.",
  },
  {
    id: 40,
    year: "1987",
    era: "October 3, 1987",
    headline: "The 1987 State Showdown Blowout vs. Florida State",
    body: "Before the legendary \"Wide Right\" drama materialized later that evening, the 1987 regular-season meeting against in-state rival Florida State showcased the sheer, terrifying offensive might of Jimmy Johnson's squad. Piling up points with lightning-fast execution on national television, Miami's early-game explosion set the tone for an unforgettable autumn march toward a consensus national title.",
  },
  {
    id: 41,
    year: "1997",
    era: "1997–2000",
    headline: "Santana Moss: Electric in the Open Field",
    body: "Santana Moss became one of Miami’s most explosive playmakers during the late 1990s. Known for his acceleration as both a receiver and return specialist, Moss delivered memorable performances, including his standout game against Boston College in 2000, where his big-play ability changed the momentum of the contest.",
  },
  {
    id: 42,
    year: "1998",
    era: "1998–2001",
    headline: "Reggie Wayne: The Clutch Pass-Catcher",
    body: "Reggie Wayne provided consistency and precision throughout Miami’s rise into the national spotlight. With reliable hands, sharp route running, and the ability to make important receptions, Wayne became an important part of the offense that reached the 2001 national championship.",
  },
  {
    id: 43,
    year: "1998",
    era: "1998–2001",
    headline: "Ed Reed: The Ultimate Ball Hawk",
    body: "Ed Reed became one of the most memorable defensive backs in Miami history. His anticipation, preparation, and ability to create game-changing interceptions made him the centerpiece of one of the nation’s strongest secondaries during the Hurricanes’ championship era.",
  },
  {
    id: 44,
    year: "1999",
    era: "1999–2002",
    headline: "Ken Dorsey: Calm Under Pressure",
    body: "Quarterback Ken Dorsey guided Miami through one of the greatest stretches in program history. Known for his football intelligence and composure in critical moments, Dorsey led the Hurricanes through championship seasons and some of the biggest games in college football.",
  },
  {
    id: 45,
    year: "1999",
    era: "1999–2001",
    headline: "Clinton Portis and Miami’s Explosive Backfield",
    body: "Clinton Portis brought speed, vision, and big-play ability to Miami’s offense during the championship era. His ability to turn small openings into explosive gains made him one of the most dangerous weapons on a talented Hurricanes roster.",
  },
  {
    id: 46,
    year: "2000",
    era: "September 9, 2000",
    headline: "The Husky Stadium Rain Battle",
    body: "In a rain-soaked road battle against Washington in Seattle, Miami faced difficult conditions and a hostile environment. The Hurricanes fought throughout the game but ultimately fell 34-29, experiencing a challenging non-conference test against a strong opponent.",
  },
  {
    id: 47,
    year: "2000",
    era: "January 4, 2000 (1999 Season)",
    headline: "The 2000 Sugar Bowl Victory vs. Florida",
    body: "Closing the 1999 season in the Sugar Bowl, Miami faced in-state rival Florida in a highly anticipated postseason matchup. The Hurricanes executed a disciplined game plan and earned a 28-20 victory, providing an important statement win before the arrival of the championship era.",
  },
  {
    id: 48,
    year: "2000",
    era: "2000–2003",
    headline: "Jonathan Vilma: The Defensive General",
    body: "Jonathan Vilma became one of the leaders of Miami’s early-2000s defense. With exceptional instincts, preparation, and sideline-to-sideline ability, he helped anchor a defensive unit known for speed, discipline, and physical play.",
  },
  {
    id: 49,
    year: "2001",
    era: "November 17, 2001",
    headline: "Surviving Blacksburg in 2001",
    body: "During the undefeated 2001 season, Miami faced one of its toughest road challenges at Virginia Tech. In a hostile environment, the Hurricanes relied on defensive stops and late-game execution to escape with a hard-fought 26-24 victory.",
  },
  {
    id: 50,
    year: "2001",
    era: "October 27, 2001",
    headline: "The 2001 Showdown vs. Florida State",
    body: "In front of a passionate Orange Bowl crowd, Miami delivered a dominant performance against Florida State in 2001. The Hurricanes’ 49-27 victory showcased the balance, talent, and confidence of the team that would go on to win the national championship.",
  },
  {
    id: 51,
    year: "1984",
    era: "January 2, 1984",
    headline: "The 1984 Orange Bowl Triumph vs. Nebraska",
    body: "In a breathtaking showdown at the 1984 Orange Bowl, an underdog Miami squad faced off against the heavily favored, undefeated powerhouse Nebraska Cornhuskers. In a game filled with high-stakes momentum swings, the Hurricanes clung tightly to a narrow lead as the clock wound down. A dramatic, last-second defensive bat-down by Ken Calhoun on a two-point conversion attempt sealed a 31-30 victory, marking a watershed moment and securing a legendary national title in the most thrilling fashion imaginable.",
  },
  {
    id: 52,
    year: "1984",
    era: "November 23, 1984",
    headline: "The Famous Hail Mary Finish Against Boston College",
    body: "One of the most unforgettable endings in college football history took place at the Miami Orange Bowl in 1984 when the Hurricanes hosted Boston College and quarterback Doug Flutie. In a dramatic offensive battle, Flutie’s last-second Hail Mary pass reached the end zone as time expired, giving Boston College a stunning 47-45 victory and creating a moment forever remembered in college football history.",
  },
  {
    id: 53,
    year: "1987",
    era: "October 3, 1987",
    headline: "Wide Right I: The Birth of a Rivalry Legend",
    body: "The Miami–Florida State rivalry produced its first legendary “Wide Right” moment in 1987. With Florida State attempting a potential game-winning field goal late in the fourth quarter, the kick sailed wide right, allowing Miami to escape with a dramatic 26-25 victory and adding another unforgettable chapter to the rivalry.",
  },
  {
    id: 54,
    year: "1988",
    era: "October 15, 1988",
    headline: "Inside the 1988 Catholics vs. Convicts Clash",
    body: "The 1988 Miami–Notre Dame matchup became one of the most heavily discussed games in college football history. Beyond the rivalry itself, the game represented a cultural collision between two programs with completely different identities. Notre Dame ultimately secured a dramatic 31-30 victory, creating one of the defining chapters of the rivalry.",
  },
  {
    id: 55,
    year: "1989",
    era: "November 25, 1989",
    headline: "Miami vs. Notre Dame: The 1989 Orange Bowl Showdown",
    body: "After the emotional rivalry battles of the previous years, Miami welcomed Notre Dame back to the Orange Bowl in 1989. The Hurricanes delivered a focused performance from start to finish, earning a 27-10 victory and reinforcing their dominance in one of college football’s most intense rivalries.",
  },
  {
    id: 56,
    year: "1991",
    era: "January 1, 1991",
    headline: "The 1991 Cotton Bowl Statement vs. Texas",
    body: "In the 1991 Cotton Bowl, Miami faced Texas in Dallas and delivered one of the most dominant postseason performances in program history. The Hurricanes controlled the game from start to finish, earning a commanding 46-3 victory and reinforcing their status as one of the nation’s elite teams.",
  },
  {
    id: 57,
    year: "1991",
    era: "November 16, 1991",
    headline: "Wide Right II: Another Classic Miami–Florida State Finish",
    body: "The rivalry between Miami and Florida State produced another unforgettable moment in 1991 when a late Seminoles field goal attempt sailed wide right. Miami escaped Tallahassee with a dramatic 17-16 victory, adding another legendary chapter to one of college football’s greatest rivalries.",
  },
  {
    id: 58,
    year: "1992",
    era: "January 1, 1992",
    headline: "The 1992 Fiesta Bowl Mastery vs. Nebraska",
    body: "In the Fiesta Bowl following the 1991 season, Miami’s defense delivered a complete performance against Nebraska. The Hurricanes contained the Cornhuskers’ option attack and recorded a 22-0 shutout, showcasing the speed and discipline that defined Miami’s championship-era defenses.",
  },
  {
    id: 59,
    year: "1993",
    era: "January 1, 1993 (1992 Season)",
    headline: "The 1993 Sugar Bowl Shutout vs. Alabama",
    body: "In the 1993 Sugar Bowl at the Louisiana Superdome, Miami faced Alabama in a major postseason matchup. The Hurricanes’ defense delivered a dominant performance, controlling the game throughout and securing a 29-0 shutout victory that showcased Miami’s national championship-level ability.",
  },
  {
    id: 60,
    year: "2000",
    era: "January 4, 2000 (1999 Season)",
    headline: "The 2000 Sugar Bowl Victory vs. Florida",
    body: "Closing the 1999 season in the Sugar Bowl, Miami faced in-state rival Florida in a highly anticipated postseason matchup. The Hurricanes executed a disciplined game plan and earned a 28-20 victory, providing an important statement win before the arrival of legendary championship-era dominance.",
  },
  {
    id: 61,
    year: "2000",
    era: "September 9, 2000",
    headline: "The Husky Stadium Rain Battle",
    body: "In a rain-soaked road battle against Washington in Seattle, Miami faced difficult conditions and a hostile environment. The Hurricanes fought throughout the game but ultimately fell 34-29, experiencing a challenging non-conference test against a strong opponent.",
  },
  {
    id: 62,
    year: "2002",
    era: "January 3, 2002",
    headline: "Andre Johnson’s Rose Bowl Breakout",
    body: "In the 2002 Rose Bowl against Nebraska, wide receiver Andre Johnson delivered one of the most memorable performances of Miami’s championship season. Recording 199 receiving yards and two touchdowns, Johnson showcased his explosive ability on the national stage and played a major role in Miami’s 37-14 victory.",
  },
  {
    id: 63,
    year: "2001",
    era: "2001 Season (January 3, 2002)",
    headline: "The 2001 Rose Bowl National Championship",
    body: "The 2001 Hurricanes completed one of the most dominant seasons in college football history by defeating Nebraska in the Rose Bowl for the national championship. Miami controlled the game on both sides of the ball, earning a 37-14 victory and capturing the program’s fifth national title.",
  },
  {
    id: 64,
    year: "2003",
    era: "January 3, 2003",
    headline: "The 2003 Fiesta Bowl Championship Thriller",
    body: "The 2003 Fiesta Bowl between Miami and Ohio State became one of the most memorable championship games in college football history. The game went into overtime and featured intense physical play, dramatic momentum swings, and controversial officiating decisions that remain debated among fans today.",
  },
  {
    id: 65,
    year: "2004",
    era: "January 1, 2004",
    headline: "The 2004 Orange Bowl Battle Against Florida State",
    body: "Miami and Florida State renewed their legendary rivalry in the 2004 Orange Bowl. In a defensive struggle decided by small margins, the Hurricanes made enough plays in critical moments to secure a 16-14 victory.",
  },
  {
    id: 66,
    year: "1999",
    era: "November 20, 1999",
    headline: "The 1999 Overtime Classic vs. Syracuse",
    body: "In a dramatic late-season clash inside the Orange Bowl, Miami squared off against a tough Syracuse squad led by star quarterback Donovan McNabb. In a game filled with clutch offensive drives and high-stakes momentum swings, the Hurricanes outlasted the visitors in a pulse-pounding overtime thriller, sealing an unforgettable 38-31 victory.",
  },
  {
    id: 67,
    year: "2009",
    era: "September 12, 2009",
    headline: "The 2009 Road Victory at Oklahoma",
    body: "Miami traveled to Norman in 2009 to face a highly ranked Oklahoma team in a nationally watched matchup. Behind strong defensive pressure and timely plays, the Hurricanes earned a 21-20 victory that became one of the program’s most memorable wins of the decade.",
  },
  {
    id: 68,
    year: "2006",
    era: "December 29, 2006",
    headline: "The 2006 Russell Athletic Bowl Defensive Clash",
    body: "In a historic postseason renewal of one of college football's most storied rivalries, Miami squared off against Nebraska in the 2006 Russell Athletic Bowl in Orlando. Pitting two proud defensive units against each other in a bruising, low-scoring battle, the Hurricanes fought through a gritty physical contest that highlighted the hard-nosed competitive spirit of the program's transitional era.",
  },
  {
    id: 69,
    year: "2003",
    era: "October 11, 2003",
    headline: "The 2003 Defensive Masterclass in Tallahassee vs. FSU",
    body: "Visiting Doak Campbell Stadium in 2003, Miami faced a hostile environment against state rival Florida State. Powered by a suffocating defensive masterclass—highlighted by Sean Taylor's iconic 50-yard interception return for a touchdown—the Hurricanes built a commanding lead and withstood a fierce second-half FSU rally, locking down a hard-fought 22-14 victory in enemy territory.",
  },
  {
    id: 70,
    year: "2007",
    era: "November 10, 2007",
    headline: "The Final Game at the Orange Bowl",
    body: "In November 2007, Miami played its final game at the historic Orange Bowl before the stadium’s demolition. The night marked the end of an era for a venue that had hosted decades of Hurricanes history, championship celebrations, and unforgettable moments.",
  },
  {
    id: 71,
    year: "Mascot",
    era: "Mascot Tradition Era",
    headline: "Sebastian the Ibis and Miami Tradition",
    body: "Sebastian the Ibis became one of the most recognizable symbols of Miami athletics. Connected to South Florida identity and local ibis folklore, the mascot represents the university’s unique regional character and remains a beloved figure on game days.",
  },
  {
    id: 72,
    year: "1926",
    era: "1926 Origin",
    headline: "The Origin of Miami’s Colors",
    body: "When the University of Miami was established in 1926, orange and green became the foundation of the school’s athletic identity. The colors reflected the natural environment of South Florida and grew into one of the most recognizable combinations in college sports.",
  },
  {
    id: 73,
    year: "1970s",
    era: "1970s",
    headline: "The Evolution of the Split-Block “U”",
    body: "The split-block “U” developed into one of the most recognizable symbols of Miami athletics. Over time, it evolved from a simple athletic mark into a representation of the confidence, identity, and culture surrounding Hurricanes sports.",
  },
  {
    id: 74,
    year: "1980s",
    era: "1980s Era",
    headline: "The Atmospheric Tradition of “The Smoke”",
    body: "During Miami’s golden era of the 1980s, the team’s dramatic entrance through a wall of smoke became one of the most recognizable sights in college football, establishing an intimidating matchday atmosphere.",
  },
  {
    id: 75,
    year: "Stadium",
    era: "1937–2007",
    headline: "The House of Horrors: The Orange Bowl Atmosphere",
    body: "For seven decades, the legendary Miami Orange Bowl stood as a true house of horrors for visiting opponents. Hosting numerous historic bowl games and generations of roaring crowds, the stadium's electric, enclosed atmosphere generated a wall of sound that routinely rattled visiting teams.",
  },
  {
    id: 76,
    year: "Culture",
    era: "Cultural Phrase Era",
    headline: "The Origin of “It’s All About The U”",
    body: "“It’s All About The U” became one of the most recognizable expressions connected to Miami football culture. Popularized by players, alumni, and supporters, the phrase represents the pride, confidence, and shared identity that have surrounded the Hurricanes program for generations.",
  },
  {
    id: 77,
    year: "1998",
    era: "November 14, 1998",
    headline: "The 1998 Orange Bowl Upset of #2 Florida State",
    body: "In a breathtaking prime-time thriller inside the Orange Bowl in 1998, an unranked Miami squad hosted an undefeated, heavily favored Florida State team. Powered by electric big plays, ferocious defensive stands, and an unforgettable blocked field goal returned in the final minutes, the Hurricanes shocked the sports world with a stunning 47-34 upset victory that sent the stadium into historic pandemonium.",
  },
  {
    id: 78,
    year: "2017",
    era: "2017 Season",
    headline: "The Birth of the Turnover Chain",
    body: "Introduced during the 2017 season, the Turnover Chain quickly became one of the most recognizable symbols in modern college football. Created as a celebration of defensive turnovers, the chain captured the confidence, personality, and defensive energy that defined Miami’s resurgence that season.",
  },
  {
    id: 79,
    year: "1985",
    era: "October 5, 1985",
    headline: "The 1985 Statement Blowout in Norman vs. Oklahoma",
    body: "Traveling into one of the most notoriously hostile environments in college sports early in the 1985 season, Jimmy Johnson led the Hurricanes into Norman to face top-ranked Oklahoma. Displaying astonishing speed and fearless execution on both sides of the ball, Miami completely dismantled the Sooners in a stunning 27-14 rout that sent shockwaves through the national rankings.",
  },
  {
    id: 80,
    year: "1990",
    era: "September 8, 1990",
    headline: "The 1990 Thriller at Notre Dame Stadium",
    body: "Early in the 1990 campaign, Miami traveled north to face powerhouse Notre Dame in a hostile South Bend atmosphere. In a brutal, high-intensity heavyweight fight that lived up to its fierce billing, the Hurricanes went toe-to-toe with the Fighting Irish in a game decided by the absolute slimmest of margins, showcasing the unyielding competitive mettle of the program.",
  },
  {
    id: 81,
    year: "2007",
    era: "November 10, 2007",
    headline: "The Final Game at the Orange Bowl",
    body: "In November 2007, Miami played its final game at the historic Orange Bowl before the stadium’s demolition. The night marked the end of an era for a venue that had hosted decades of Hurricanes history, championship celebrations, and unforgettable moments.",
  },
  {
    id: 82,
    year: "2003",
    era: "October 2, 2003",
    headline: "The 2003 Orange Bowl Offensive Explosion vs. WVU",
    body: "Under the lights of the Orange Bowl in 2003, Miami’s offense put on an absolute clinic of modern passing efficiency against Big East rival West Virginia. Directing a precise, high-octane scheme, quarterback Brock Berlin and a star-studded supporting cast dismantled the Mountaineers' secondary in a dazzling performance that showcased the program's relentless offensive reload.",
  },
  {
    id: 83,
    year: "2016",
    era: "December 28, 2016",
    headline: "The 2016 Russell Athletic Bowl Triumph vs. WVU",
    body: "Capping off a promising first season under head coach Mark Richt in December 2016, Miami traveled to Orlando to face a high-powered West Virginia offense in the Russell Athletic Bowl. Powered by sharp quarterback play and opportunistic defensive takeaways, the Hurricanes secured a decisive 31-14 victory, capturing their first bowl win in a decade and injecting new energy into the program.",
  },
  {
    id: 84,
    year: "1987",
    era: "January 1, 1987 (1986 Season)",
    headline: "The 1987 Cotton Bowl Masterclass vs. Arkansas",
    body: "Following a bitter regular-season finish, Miami traveled to Dallas for the 1987 Cotton Bowl to face an elite Arkansas squad. The Hurricanes' defense put on an absolute clinic, completely suffocating the Razorbacks' attack en route to a dominant 20-7 victory that demonstrated the team's fierce competitive pride.",
  },
  {
    id: 85,
    year: "2002",
    era: "October 12, 2002",
    headline: "The 2002 Orange Bowl Overtime Thriller vs. FSU",
    body: "In one of the most heart-stopping editions of the historic state rivalry, Miami hosted Florida State in 2002 with national championship implications hanging in the balance. Trailing late in a fierce defensive struggle, Ken Dorsey engineered a clutch, game-tying drive, setting the stage for a dramatic overtime finish where the Hurricanes' defense made the definitive stop to secure a thrilling 28-27 victory.",
  },
  {
    id: 86,
    year: "1983",
    era: "December 1983 – January 1984",
    headline: "Schnellenberger’s Championship Blueprint",
    body: "Before departing for the professional ranks, architect Howard Schnellenberger masterminded the ultimate blueprint for South Florida dominance. By locking down local blue-chip talent and installing a fearless pro-style system, he proved that a regional university could shock the establishment and reach the absolute summit of college football.",
  },
  {
    id: 87,
    year: "1987",
    era: "Autumn 1987",
    headline: "Jimmy Johnson’s 1987 Undefeated Regular Season",
    body: "Under the relentless drive of head coach Jimmy Johnson, the 1987 squad tore through a brutal regular-season schedule undefeated. Playing with supreme swagger and unmatched athletic speed, Johnson's teams established the cultural template of modern football intimidation, laying the groundwork for their ultimate national championship crown.",
  },
  {
    id: 88,
    year: "1989",
    era: "1989–1994",
    headline: "Dennis Erickson’s Championship Era",
    body: "Following Jimmy Johnson’s departure, Dennis Erickson continued Miami’s national prominence by maintaining the program’s aggressive identity while expanding the offensive approach. During his tenure, the Hurricanes captured national championships in 1989 and 1991, proving that Miami’s speed, talent, and competitive culture could continue at the highest level.",
  },
  {
    id: 89,
    year: "1995",
    era: "1995–2000",
    headline: "Butch Davis Rebuilding Miami’s Foundation",
    body: "Taking over during a challenging period for the program, Butch Davis focused on rebuilding the roster through disciplined recruiting, player development, and a renewed commitment to fundamentals. His work helped restore the talent base that would eventually support Miami’s return to championship contention.",
  },
  {
    id: 90,
    year: "2001",
    era: "2001–2003",
    headline: "Larry Coker and the 2001 Championship Season",
    body: "Taking over a veteran roster filled with elite talent, Larry Coker guided Miami through the undefeated 2001 season. With outstanding performances across the entire team, the Hurricanes defeated Nebraska in the Rose Bowl to capture the national championship.",
  },
  {
    id: 91,
    year: "2019",
    era: "November 9, 2019",
    headline: "The 2019 Offensive Masterclass vs. Louisville",
    body: "In a dazzling display of explosive offensive firepower in November 2019, Miami dismantled a high-scoring Louisville squad inside Hard Rock Stadium. Triggered by record-setting receiving performances and aggressive downfield passing, the Hurricanes dominated from the opening whistle in a stunning 52-27 blowout that showcased the program's high-ceiling offensive potential.",
  },
  {
    id: 92,
    year: "2020",
    era: "November 6, 2020",
    headline: "The 2020 Cardiac Canes Comeback in Raleigh",
    body: "Trailing late in a hostile road environment against North Carolina State in 2020, Miami engineered a magnificent, high-stakes fourth-quarter turnaround. Led by quarterback D'Eriq King’s clutch dual-threat heroics and resilient defensive stops down the stretch, the Hurricanes clawed all the way back to capture a breathtaking 44-41 victory.",
  },
  {
    id: 93,
    year: "2017",
    era: "October 14, 2017",
    headline: "The 2017 Coastal Clash vs. Georgia Tech",
    body: "During Miami's magical 2017 resurgence, the Hurricanes hosted a notoriously difficult Georgia Tech option attack in a high-tension coastal battle. Facing a late deficit and struggling to break through the triple-option clock control, Miami executed a brilliant, last-minute scoring drive followed by a game-winning defensive stand to preserve an unbeaten season with a gritty 25-24 victory.",
  },
  {
    id: 94,
    year: "2013",
    era: "October 17, 2013",
    headline: "The 2013 Thriller vs. North Carolina",
    body: "In a chaotic, high-scoring Coastal Division battle under the Thursday night lights in 2013, Miami engaged in a wild offensive shootout with North Carolina. Powered by electrifying playmaker Duke Johnson and clutch execution down the stretch, the Hurricanes outlasted the Tar Heels in a pulse-pounding 27-23 victory that kept their fans on the edge of their seats.",
  },
  {
    id: 95,
    year: "2017",
    era: "December 30, 2017",
    headline: "The 2017 Orange Bowl Clash vs. Wisconsin",
    body: "Returning to their historic bowl home in South Florida to conclude a thrilling 2017 campaign, Miami met a physical, undefeated-bound Wisconsin squad in the Orange Bowl. In a fiercely contested postseason battle that showcased the return of national relevance, the Hurricanes went blow-for-blow in a high-intensity thriller that electrified a massive local fan base.",
  },
  {
    id: 96,
    year: "1990s",
    era: "1990s",
    headline: "1990s Pop Culture and Miami Football Identity",
    body: "During the 1990s, Miami football developed a unique cultural identity that extended beyond the field. The team’s confidence, style, and visual presence became closely connected with music, fashion, and broader sports culture, making “The U” one of the most recognizable brands in college football.",
  },
  {
    id: 97,
    year: "Hall of Fame",
    era: "Multi-Decade Tradition",
    headline: "The Ring of Honor and All-Time Greats",
    body: "The historical foundation of Miami football is permanently enshrined in its illustrious Ring of Honor inside Hard Rock Stadium. From Ted Hendricks and Jim Kelly to Michael Irvin, Warren Sapp, Ray Lewis, and Ed Reed, the program's lore is immortalized by legendary figures whose transcendent collegiate dominance forever changed the trajectory of the sport.",
  },
  {
    id: 98,
    year: "Recruiting",
    era: "Timeless Strategy",
    headline: "Securing the South Florida Local Pipeline",
    body: "The lifeblood of Miami's historical success has always relied on an unbreakable, symbiotic relationship with the talent-rich high schools of Miami-Dade, Broward, and Palm Beach counties. By keeping the nation's most elite homegrown prospects inside state lines, the university maintained a peerless athletic reservoir that powered decades of championship contention.",
  },
  {
    id: 99,
    year: "Modern",
    era: "Modern Era",
    headline: "The Global Expansion of The U Brand",
    body: "Driven by decades of iconic televised dominance, cultural crossover appeal, and an influential worldwide alumni network, the identity of Miami football expanded far beyond regional borders. Today, the split-block emblem stands recognized globally as a universal symbol of unapologetic confidence, high-end athleticism, and sports culture.",
  },
  {
    id: 100,
    year: "Legacy",
    era: "Enduring Legacy",
    headline: "The Eternal Spirit of The U",
    body: "The story of Miami Hurricanes football is not just written in championship trophies or historic box scores; it lives on in the swagger, the resilience, and the unapologetic pride of everyone who wears orange and green. From the concrete echoes of the Orange Bowl to the modern roar of Hard Rock Stadium, the spirit of The U remains an untamed, enduring force in college football—a timeless testament to the fighters of South Florida.",
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
      title: `Miami Hurricanes Football Story: ${selectedArchive.headline}`,
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
            MIAMI HURRICANES FOOTBALL STORY
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
                alt="Miami Hurricanes Stadium Archive"
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
