'use client';
import React from 'react';
import { css } from '../lib/css';
import FestiveBar from './FestiveBar';
import HeaderTools from './HeaderTools';
import MobileMenu from './MobileMenu';
import A from './A';
import EnquiryForm from './EnquiryForm';
import SiteFooter from './SiteFooter';

export default class Main extends React.Component {
  constructor(props) { super(props); this.state = { type: 'Birthday', slide: 0, paused: false }; }
  componentDidMount() { this.timer = setInterval(() => { if (!this.state.paused) this.setState({ slide: (this.state.slide + 1) % 5 }); }, 7000); }
  componentWillUnmount() { clearInterval(this.timer); }
  hexToRgb(h) {
    const m = /^#?([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i.exec(h || '');
    return m ? [parseInt(m[1],16), parseInt(m[2],16), parseInt(m[3],16)] : [237,40,53];
  }
  renderVals() {
    const accent = this.props.accent ?? '#ED2835';
    const amber = this.props.amber ?? '#FFC233';
    const g = this.props.glowStrength ?? 0.28;
    const [r, gg, b] = this.hexToRgb(accent);
    const tile = (x) => 'margin: 0; ' + x + 'border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328; display: block';
    const base = 'font: inherit; font-size: 15px; font-weight: 600; padding: 12px 18px; min-height: 44px; border-radius: 999px; cursor: pointer; ';
    const types = ['Birthday', 'Stag / Hen', 'Team building', 'Corporate', 'Just racing'].map((label) => {
      const on = this.state.type === label;
      return {
        label,
        pressed: on ? 'true' : 'false',
        style: base + (on ? 'background: ' + accent + '; color: #09090B; border: 1px solid ' + accent : 'background: transparent; color: #E4E4E7; border: 1px solid #3F3F46'),
        pick: () => this.setState({ type: label })
      };
    });
    const SL = [
      ['c2a615d5274599ccc19ef695052deaba', 'Friends cheering round the digital Scalextric track', 'NORWICH’S MOTORSPORT VENUE · BUILT FOR EVERYONE', 'Lights out.', 'Game on.', 'A real motorsport venue that’s brilliant for everyone. Petrolheads get a full-motion simulator and a 160ft Scalextric circuit. Everyone else gets big-screen gaming, pool, pinball, pizza* and a cracking night out.', 'Book your visit', '/book', 'Plan an event', '/parties-and-events-norwich'],
      ['7c15572ebe192fbe0f7eae982a1bb152', 'Driver in a full-motion racing simulator', 'PRO RACING SIMULATORS · 4K OR VR', 'Full motion.', 'Real race kit.', '4 DOF motion, a direct-drive wheel, real pedals, a gated shifter and an active harness. Book the sim room by the hour from £80 for up to 2 people.', 'Book a sim session', '/book', 'See the simulators', '/attractions/racing-simulator-norwich'],
      ['b9fe66c760257f986f787f1fb05c7ef2', 'Group celebrating on the podium with a trophy', 'BIRTHDAYS · STAG & HEN · TEAM DAYS', 'Parties with', 'pole position.', 'Take over the whole cave for up to 50 people, with activities for 34 players at once — racing, games, pizza* and your own drinks, from £40 per person.', 'Book a party', '/book', 'Parties & events', '/parties-and-events-norwich'],
      ['3bb7b8b6d1661fa12a1c6d470c802daf', 'Friends laughing over a two-player arcade game', 'NOT A PETROLHEAD? PERFECT.', 'Not into cars?', 'Come anyway.', 'Games consoles on big-screen TVs, pool, darts, pinball, air hockey and arcade classics. No licence, no experience, no age limits on the experiences**.', 'See all attractions', '/attractions', 'Why it works for you', '/who-its-for/fun-group-activities-norwich'],
      ['3d9a0547fd1c48350560b4509e8d5467', 'Drinks on ice at the bar', 'CHRISTMAS PARTIES · DEC WEEKNIGHTS & SATURDAYS', 'Festive', 'grand prix.', 'Whole-cave Christmas parties with pizza* and Bring Your Own drinks for the team — from £45 per person, weeknights through December.', 'Book Christmas', '/christmas-party-norwich', 'Christmas planner', '/guides/christmas-party-ideas-norwich']
    ];
    const si = this.state.slide % SL.length;
    const slides = SL.map(([id, alt, kicker, l1, l2, copy, cta1, href1, cta2, href2], i) => ({ img: '/images/' + id + '.webp', alt, kicker, l1, l2, copy, cta1, href1, cta2, href2, hidden: i === si ? 'false' : 'true', selected: i === si ? 'true' : 'false', label: 'Slide ' + (i + 1) + ': ' + l1 + ' ' + l2,
      imgStyle: 'position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 60% 50%; transition: opacity 1.1s ease, transform 8s ease-out; opacity: ' + (i === si ? '1' : '0') + '; transform: scale(' + (i === si ? '1.06' : '1') + ')',
      dotStyle: 'flex: 1; height: 44px; padding: 0; border: 0; background: none; cursor: pointer; display: flex; align-items: center',
      barStyle: 'display: block; width: 100%; height: 4px; border-radius: 2px; transition: background .3s; background: ' + (i === si ? accent : (i < si ? '#A1A1AA' : '#3F3F46')),
      go: () => this.setState({ slide: i }) }));
    const cur = slides[si];
    const counter = String(si + 1).padStart(2, '0') + ' / ' + String(SL.length).padStart(2, '0');
    const prev = () => this.setState({ slide: (si - 1 + SL.length) % SL.length });
    const next = () => this.setState({ slide: (si + 1) % SL.length });
    const togglePause = () => this.setState({ paused: !this.state.paused });
    return { slides, cur, counter, prev, next, togglePause, pauseLabel: this.state.paused ? "Play slideshow" : "Pause slideshow", pauseIcon: this.state.paused ? "▶" : "❚❚",
      accent, amber,
      glow: 'rgba(' + r + ',' + gg + ',' + b + ',' + g + ')',
      types,
      gallery: [
        { label: 'Slot cars racing past cheering friends', src: '/images/df355e4462e1a0cc01c740047878ecdf.webp', style: tile('') },
        { label: 'Race suit and helmets on display', src: '/images/b1f31c249d74acb3cc85257e6956012e.webp', style: tile('grid-row: span 2; ') },
        { label: 'Group lifting a trophy on race night', src: '/images/b9fe66c760257f986f787f1fb05c7ef2.webp', style: tile('') },
        { label: 'Wide view of the venue with the neon on', src: '/images/d8088e3823809fc023e85fd23c0ce0d9.webp', style: tile('grid-column: span 2; ') },
        { label: 'Close-up of a glowing pinball playfield', src: '/images/087eb617edc639f42d522945ddefd32b.webp', style: tile('') },
        { label: 'The Mini Cooper sofa in the lounge', src: '/images/d76d56e086301523c4971afc4f5dfe57.webp', style: tile('') }
      ],
      brands: [
        { name: 'Race Car Graphics UK', href: 'https://racecargraphics.uk/', logo: '/images/af46cb048a3538fff3ada1542e3a6666.png' },
        { name: 'Broadland Digital', href: 'https://broadlanddigital.co.uk/', logo: '/images/3af5e52699d5da909dbac3e38fd47a32.svg' },
        { name: 'Consensus Media', href: '#', logo: '/images/8ca017d8a0e0e8edd2c55f414a56e8af.svg' },
        { name: 'Auto Opulence', href: 'https://autoopulence.co.uk/', logo: '/images/30d005beeac001ad9a9af4176bcf0bb6.svg' }
      ],
      games: [
        { tag: '100IN SCREEN', name: 'Games Console Lounge', href: '/attractions/gaming-lounge-norwich', copy: 'Console games on a 100-inch screen, from a sofa built out of a converted Mini Cooper.', photo: '/images/9dc6e1e4d0002cd48daa24a834848cbd.webp', alt: 'Mini Cooper sofa facing the big screen' },
        { tag: 'FLIPPERS', name: 'Digital Pinball', href: '/attractions/digital-pinball-norwich', copy: 'Full-size digital pinball with all the lights, sound and multiball chaos.', photo: '/images/61be8e75bbfd3651047d20e5a346ffd3.webp', alt: 'Hands on the flippers of a glowing pinball machine' },
        { tag: 'CUE UP', name: '9ft Pool / Billiards', href: '/attractions/pool-table-norwich', copy: 'A 9ft pro pool / billiards table for the sharp shooters in the group. Cues provided.', photo: '/images/44da4bb4e9c2f25471b7f35352440547.webp', alt: 'View along the cue on the 9ft pool / billiards table' },
        { tag: 'FAST HANDS', name: 'Air Hockey', href: '/attractions/air-hockey-norwich', copy: 'Quick, loud and fiercely competitive. Best of three?', photo: '/images/4b14d96bd1414bd7eaf55fc8afca2612.webp', alt: 'Two players mid-rally at air hockey' },
        { tag: 'TABLE TOP', name: 'Table Football', href: '/attractions/table-football-norwich', copy: 'Classic foosball for settling office rivalries — no spinning.', photo: '/images/acb9b99ec403334bf4a49d12c7cc7fb9.webp', alt: 'Close-up of a table football game' },
        { tag: 'PLAYER 2', name: 'Two-Player Arcade', href: '/attractions/arcade-norwich', copy: 'Side-by-side retro arcade classics for head-to-head high scores.', photo: '/images/30c5e67b4cd608a17bdb32e677371fd2.webp', alt: 'Two friends playing a retro arcade cabinet' }
      ],
      offers: [
        { num: '01', title: 'Birthdays', copy: 'Race nights for any age. Bring the cake, we’ll bring the chequered flag.' },
        { num: '02', title: 'Stag & Hen', copy: 'Head-to-head grudge matches, Bring Your Own drinks and a podium finish for the guest of honour.' },
        { num: '03', title: 'Team Building', copy: 'Leagues, pit-stop challenges and lap-time leaderboards that get every department talking.' },
        { num: '04', title: 'Corporate Events', copy: 'Client hospitality, product launches and away days with tailored packages.' },
        { num: '05', title: 'Exclusive Hire', copy: 'Three hours, the whole cave, your playlist. Longer sessions on request.' },
        { num: '06', title: 'Pizza* & Bring Your Own drinks', copy: 'Pit-stop pizza* for the group, and Bring Your Own drinks pre-chilled and waiting — cups and ice provided.' }
      ]
    };
  }
  render() {
    const V = this.renderVals() || {};
    return (<>
<div className="lc" style={css("font-family: 'Barlow', system-ui, sans-serif; color: #E4E4E7; background: #09090B; min-height: 100vh; overflow-x: hidden")}>
<FestiveBar />
<header style={css("position: sticky; top: 0; z-index: 10; background: rgba(9,9,11,0.92); border-bottom: 1px solid #1F1F23; backdrop-filter: blur(10px)")}>
<nav className="lc-section" aria-label="Main" style={css("max-width: 1360px; margin: 0 auto; padding: 0 40px; height: 92px; display: flex; align-items: center; justify-content: space-between; gap: 24px")}>
<A href="#top" aria-label="LeMan Cave home" style={css("display: flex; align-items: center")}>
<img src="/images/d8a1bc65662ee5a26ca2d3cbc9ca559e.svg" alt="LeMan Cave" style={css("height: 80px; width: auto; display: block")} />
</A>
<div className="lc-nav-links" style={css("display: flex; align-items: center; flex-wrap: nowrap; white-space: nowrap; gap: 22px; font-size: 14px; font-weight: 500; letter-spacing: 0.04em; text-transform: uppercase; height: 92px")}><div className="lc-mm"><A href="/attractions" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Attractions"}<svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></A><div className="lc-mm-p" style={css("display: none; position: absolute; left: 0; right: 0; top: 92px; background: #0B0B0E; border-top: 1px solid #1F1F23; border-bottom: 1px solid #27272A; box-shadow: 0 40px 80px rgba(0,0,0,0.65); z-index: 20")}><div style={css("max-width: 1360px; margin: 0 auto; padding: 36px 40px 30px; box-sizing: border-box")}><div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) 300px; gap: 36px")}><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #ED2835; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Racing"}</span><A href="/attractions/racing-simulator-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Pro Racing Simulator"}</A><A href="/attractions/scalextric-track-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Digital Scalextric"}</A><A href="/attractions/motorbike-simulator-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Motorcycle Sim"}</A><A href="/attractions/motorsport-memorabilia-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Retro Memorabilia"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #71717A; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Games"}</span><A href="/attractions/arcade-games-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Games & Arcade"}</A><A href="/attractions/gaming-lounge-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Games Console Lounge"}</A><A href="/attractions/digital-pinball-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Digital Pinball"}</A><A href="/attractions/pool-table-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Pool / Billiards Table"}</A><A href="/attractions/air-hockey-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Air Hockey"}</A><A href="/attractions/table-football-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Table Football"}</A><A href="/attractions/darts-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Darts"}</A><A href="/attractions/arcade-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Arcade"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #FFC233; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Learn & compare"}</span><A href="/guides/race-simulator-guide" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Race Simulator Guide"}</A><A href="/guides/sim-racing-tips" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Sim Racing Tips"}</A><A href="/compare/sim-racing-vs-karting" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Sim Racing vs Karting"}</A><A href="/compare/4k-vs-vr-racing" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"4K vs VR"}</A><A href="/compare/motion-vs-static-simulator" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Motion vs Static"}</A><A href="/guides/le-mans-history" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Le Mans History"}</A></div><A href="/attractions/racing-simulator-norwich" style={css("position: relative; display: block; min-height: 260px; border-radius: 10px; overflow: hidden; background: #131316; text-decoration: none; text-transform: none; letter-spacing: 0")}><img src="/images/87af79a958a3ccd899908f5b2bb8b25b.webp" alt="" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} /><span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.96) 20%, rgba(9,9,11,0.1) 80%)")}></span><span style={css("position: absolute; left: 20px; right: 20px; bottom: 18px; display: flex; flex-direction: column; gap: 6px")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #FFC233")}>{"4 DOF \u00b7 4K OR VR"}</span><span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 30px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Pro racing simulators"}</span><span style={css("color: #ED2835; font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase")}>{"From \u00a380/hr \u2192"}</span></span></A></div><div style={css("margin-top: 26px; padding-top: 18px; border-top: 1px solid #1F1F23; display: flex; flex-wrap: wrap; gap: 24px; font-size: 13px; letter-spacing: 0.06em")}><A href="/attractions" style={css("color: #ED2835; font-weight: 700; text-decoration: none")}>{"All attractions \u2192"}</A><A href="/party-packages-norwich" style={css("color: #E4E4E7; font-weight: 700; text-decoration: none")}>{"Price list \u2192"}</A><A href="/experience-gifts-norwich" style={css("color: #E4E4E7; font-weight: 700; text-decoration: none")}>{"Gift vouchers \u2192"}</A></div></div></div></div><div className="lc-mm"><A href="/pizza-party-norwich" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Food & Drink"}<svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></A><div className="lc-mm-p" style={css("display: none; position: absolute; left: 0; right: 0; top: 92px; background: #0B0B0E; border-top: 1px solid #1F1F23; border-bottom: 1px solid #27272A; box-shadow: 0 40px 80px rgba(0,0,0,0.65); z-index: 20")}><div style={css("max-width: 1360px; margin: 0 auto; padding: 36px 40px 30px; box-sizing: border-box")}><div style={css("display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)) 300px; gap: 36px")}><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #ED2835; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Food & drink"}</span><A href="/pizza-party-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Pit-Stop Pizza*"}</A><A href="/bring-your-own-drinks-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Bring Your Own Drinks"}</A><A href="/compare/saturday-party-packages-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Saturday Packages Compared"}</A><A href="/party-packages-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Price list"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #71717A; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Good to know"}</span><A href="/leman-cave-faqs" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Cakes by arrangement"}</A><A href="/pizza-party-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Dietary options"}</A><A href="/bring-your-own-drinks-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Drinks pre-chilled"}</A><A href="/bring-your-own-drinks-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Leftover drinks collected after"}</A></div><A href="/pizza-party-norwich" style={css("position: relative; display: block; min-height: 260px; border-radius: 10px; overflow: hidden; background: #131316; text-decoration: none; text-transform: none; letter-spacing: 0")}><img src="/images/674381e1bdc07d2b4660c7c77ccae43e.webp" alt="" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} /><span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.96) 20%, rgba(9,9,11,0.1) 80%)")}></span><span style={css("position: absolute; left: 20px; right: 20px; bottom: 18px; display: flex; flex-direction: column; gap: 6px")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #FFC233")}>{"BRING YOUR OWN DRINK & PIZZA*"}</span><span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 30px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Pizza* for the whole grid"}</span><span style={css("color: #ED2835; font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase")}>{"\u00a360pp \u2192"}</span></span></A></div><div style={css("margin-top: 26px; padding-top: 18px; border-top: 1px solid #1F1F23; display: flex; flex-wrap: wrap; gap: 24px; font-size: 13px; letter-spacing: 0.06em")}><A href="/leman-cave-faqs" style={css("color: #ED2835; font-weight: 700; text-decoration: none")}>{"Food & drink FAQs \u2192"}</A></div></div></div></div><div className="lc-mm"><A href="/parties-and-events-norwich" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Parties & Events"}<svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></A><div className="lc-mm-p" style={css("display: none; position: absolute; left: 0; right: 0; top: 92px; background: #0B0B0E; border-top: 1px solid #1F1F23; border-bottom: 1px solid #27272A; box-shadow: 0 40px 80px rgba(0,0,0,0.65); z-index: 20")}><div style={css("max-width: 1360px; margin: 0 auto; padding: 36px 40px 30px; box-sizing: border-box")}><div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) 300px; gap: 36px")}><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #ED2835; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Parties"}</span><A href="/party-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Exclusive Venue Hire"}</A><A href="/birthday-party-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Birthday Parties"}</A><A href="/kids-party-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Kids Parties"}</A><A href="/teenage-party-ideas-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Teen Parties"}</A><A href="/stag-do-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Stag Dos"}</A><A href="/hen-do-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Hen Dos"}</A><A href="/night-out-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Group Nights Out"}</A><A href="/family-days-out-norfolk" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Family Days Out"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #71717A; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Business & clubs"}</span><A href="/corporate-events-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Corporate Events"}</A><A href="/team-building-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Team Building"}</A><A href="/corporate-hospitality-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Client Entertaining"}</A><A href="/leaving-do-ideas-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Leaving & Retirement"}</A><A href="/christmas-party-norwich" className="lc-mm-feat" style={css("display: flex; align-items: center; gap: 8px; padding: 6px 0; color: #34C77B; font-size: 15px; font-weight: 700; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Christmas Parties"}<span style={css("font-family: 'JetBrains Mono', monospace; font-size: 10px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; color: #FFFFFF; background: #1E9E5E; padding: 3px 7px; border-radius: 3px")}>{"Featured"}</span></A><A href="/group-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Group Bookings"}</A><A href="/car-club-meet-venue-norfolk" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Car Club Meets"}</A><A href="/club-social-ideas-norfolk" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Club Socials"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #60A5FA; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Who it\u2019s for"}</span><A href="/who-its-for/family-entertainment-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Families"}</A><A href="/who-its-for/things-to-do-with-friends-in-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Friends"}</A><A href="/who-its-for/corporate-team-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Corporate Teams"}</A><A href="/who-its-for/motorsport-experience-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Motorsport Fans"}</A><A href="/who-its-for/gaming-venue-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Gamers"}</A><A href="/who-its-for/fun-group-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Not Into Cars?"}</A><A href="/who-its-for/rainy-day-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Tourists"}</A><A href="/who-its-for/things-to-do-in-norwich-for-adults" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Locals"}</A><A href="/accessible-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Accessibility"}</A></div><A href="/christmas-party-norwich" style={css("position: relative; display: block; min-height: 260px; border-radius: 10px; overflow: hidden; background: #131316; text-decoration: none; text-transform: none; letter-spacing: 0")}><img src="/images/7c15572ebe192fbe0f7eae982a1bb152.webp" alt="" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} /><span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.96) 20%, rgba(9,9,11,0.1) 80%)")}></span><span style={css("position: absolute; left: 20px; right: 20px; bottom: 18px; display: flex; flex-direction: column; gap: 6px")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #FFC233")}>{"DEC WEEKNIGHTS & SATURDAYS"}</span><span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 30px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Christmas parties"}</span><span style={css("color: #ED2835; font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase")}>{"From \u00a345pp \u2192"}</span></span></A></div><div style={css("margin-top: 26px; padding-top: 18px; border-top: 1px solid #1F1F23; display: flex; flex-wrap: wrap; gap: 24px; font-size: 13px; letter-spacing: 0.06em")}><A href="/parties-and-events-norwich" style={css("color: #ED2835; font-weight: 700; text-decoration: none")}>{"All parties & events \u2192"}</A><A href="/guides/venue-hire-guide" style={css("color: #E4E4E7; font-weight: 700; text-decoration: none")}>{"Venue hire guide \u2192"}</A><A href="/guides" style={css("color: #E4E4E7; font-weight: 700; text-decoration: none")}>{"Party planners & checklists \u2192"}</A></div></div></div></div><A href="/party-packages-norwich" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Prices"}</A><A href="/leman-cave-photos" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Gallery"}</A><div className="lc-mm"><A href="/contact-leman-cave-norwich" style={css("display: flex; align-items: center; gap: 6px; height: 92px; box-sizing: border-box; white-space: nowrap; flex: none; text-decoration: none; color: #F4F4F5; border-bottom: 2px solid transparent")}>{"Visit Us"}<svg aria-hidden="true" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"></path></svg></A><div className="lc-mm-p" style={css("display: none; position: absolute; left: 0; right: 0; top: 92px; background: #0B0B0E; border-top: 1px solid #1F1F23; border-bottom: 1px solid #27272A; box-shadow: 0 40px 80px rgba(0,0,0,0.65); z-index: 20")}><div style={css("max-width: 1360px; margin: 0 auto; padding: 36px 40px 30px; box-sizing: border-box")}><div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)) 300px; gap: 36px")}><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #4ADE80; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Plan your visit"}</span><A href="/contact-leman-cave-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Visit & Contact"}</A><A href="/leman-cave-opening-times" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Opening Times"}</A><A href="/leman-cave-parking-and-travel" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Travel & Parking"}</A><A href="/accessible-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Accessibility"}</A><A href="/leman-cave-faqs" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"FAQs"}</A><A href="/experience-gifts-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Gift Vouchers"}</A><A href="/advertising-screens-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Advertise With Us"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #A78BFA; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Visiting from"}</span><A href="/locations/things-to-do-in-norwich-for-groups" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Norwich"}</A><A href="/locations/party-venue-norfolk" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Norfolk"}</A><A href="/locations/party-venue-near-great-yarmouth" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Great Yarmouth"}</A><A href="/locations/party-venue-near-cromer" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Cromer"}</A><A href="/locations/party-venue-near-lowestoft" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Lowestoft"}</A><A href="/locations/party-venue-near-ipswich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Ipswich"}</A><A href="/locations/party-venue-near-cambridge" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Cambridge"}</A><A href="/locations" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"All 18 locations"}</A></div><div style={css("display: flex; flex-direction: column; min-width: 0")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.16em; color: #FFC233; text-transform: uppercase; margin-bottom: 10px; display: block")}>{"Guides & ideas"}</span><A href="/guides" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Blog & Guides"}</A><A href="/guides/things-to-do-in-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Things to do in Norwich"}</A><A href="/guides/indoor-activities-norfolk" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Indoor Activities in Norfolk"}</A><A href="/guides/gifts-for-petrolheads" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Gifts for Petrolheads"}</A><A href="/compare/best-indoor-activities-norwich" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Indoor Activities Compared"}</A><A href="/compare/sim-room-vs-whole-cave-hire" style={css("display: block; padding: 6px 0; color: #E4E4E7; font-size: 15px; font-weight: 500; letter-spacing: 0; text-transform: none; text-decoration: none")}>{"Sim Room vs Whole Cave"}</A></div><A href="/contact-leman-cave-norwich" style={css("position: relative; display: block; min-height: 260px; border-radius: 10px; overflow: hidden; background: #131316; text-decoration: none; text-transform: none; letter-spacing: 0")}><img src="/images/1f8523dff0e8abab56a7b3457a5e06ba.webp" alt="" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} /><span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.96) 20%, rgba(9,9,11,0.1) 80%)")}></span><span style={css("position: absolute; left: 20px; right: 20px; bottom: 18px; display: flex; flex-direction: column; gap: 6px")}><span style={css("font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.14em; color: #FFC233")}>{"NR6 7BW \u00b7 PARKING ON SITE"}</span><span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 30px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Find the cave"}</span><span style={css("color: #ED2835; font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase")}>{"Map & contact \u2192"}</span></span></A></div><div style={css("margin-top: 26px; padding-top: 18px; border-top: 1px solid #1F1F23; display: flex; flex-wrap: wrap; gap: 24px; font-size: 13px; letter-spacing: 0.06em")}><A href="/contact-leman-cave-norwich" style={css("color: #ED2835; font-weight: 700; text-decoration: none")}>{"bookings@lemancave.co.uk \u2192"}</A><A href="/leman-cave-opening-times" style={css("color: #E4E4E7; font-weight: 700; text-decoration: none")}>{"Bookings only \u00b7 Mon\u2013Fri 09:00\u201321:00 \u00b7 Sat 10:00\u201321:00 \u2192"}</A></div></div></div></div></div>
<div style={css("display: flex; align-items: center; gap: 12px")}>
<HeaderTools />

<A href="/book" style={css(`background: ${V.accent}; color: #09090B; font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 14px 22px; border-radius: 4px`)}>{"Book now"}</A>
<MobileMenu />
</div>
</nav>
</header>
<section id="top" aria-roledescription="carousel" aria-label="Welcome to LeMan Cave" style={css("position: relative; min-height: 800px; display: flex; align-items: flex-end; background: #0E0E11; overflow: hidden")}>
{(V.slides || []).map((sl, $index) => (<React.Fragment key={$index}>
<img src={sl.img} alt={sl.alt} aria-hidden={sl.hidden} style={css(sl.imgStyle)} />
</React.Fragment>))}
<div aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(90deg, rgba(9,9,11,0.94) 0%, rgba(9,9,11,0.72) 40%, rgba(9,9,11,0.15) 72%, rgba(9,9,11,0.05) 100%)")}></div>
<div aria-hidden="true" style={css("position: absolute; left: 0; right: 0; bottom: 0; height: 340px; background: linear-gradient(to top, #09090B 10%, transparent)")}></div>
<div className="lc-section" style={css("position: relative; max-width: 1360px; width: 100%; margin: 0 auto; padding: 170px 40px 72px; box-sizing: border-box")}>
<h1 style={css("margin: 0 0 14px; font-family: 'JetBrains Mono', monospace; font-size: 14px; font-weight: 500; line-height: 1.5; letter-spacing: 0.16em; color: #FFC233; text-transform: uppercase")}>{"Indoor activities Norwich \u00b7 racing sims & games"}</h1>
<div aria-live="polite" style={css("min-height: 440px; display: flex; flex-direction: column; justify-content: flex-end")}>
<p style={css(`margin: 0 0 20px; font-family: 'JetBrains Mono', monospace; font-size: 14px; letter-spacing: 0.16em; color: ${V.accent}`)}>{V.cur.kicker}</p>
<p style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(64px, 11vw, 168px); line-height: 0.88; letter-spacing: -0.01em; color: #FFFFFF; text-transform: uppercase")}>{V.cur.l1}<br /><span style={css(`color: ${V.accent}`)}>{V.cur.l2}</span></p>
<p style={css("margin: 28px 0 0; max-width: 580px; font-size: 20px; line-height: 1.55; color: #D4D4D8")}>{V.cur.copy}</p>
<div style={css("display: flex; flex-wrap: wrap; gap: 14px; margin-top: 36px")}>
<A href={V.cur.href1} style={css(`background: ${V.accent}; color: #09090B; font-weight: 700; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase; padding: 18px 30px; border-radius: 4px`)}>{V.cur.cta1}</A>
<A href={V.cur.href2} style={css("border: 1px solid #52525B; color: #FFFFFF; font-weight: 600; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase; padding: 17px 30px; border-radius: 4px")}>{V.cur.cta2}</A>
</div>
</div>
<div style={css("display: flex; flex-wrap: wrap; align-items: center; gap: 18px; margin-top: 44px")}>
<span style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.12em; color: #F4F4F5; min-width: 64px")}>{V.counter}</span>
<div role="tablist" aria-label="Choose slide" style={css("display: flex; gap: 8px; flex: 1 1 260px; max-width: 520px")}>
{(V.slides || []).map((d, $index) => (<React.Fragment key={$index}>
<button type="button" role="tab" aria-selected={d.selected} aria-label={d.label} onClick={d.go} style={css(d.dotStyle)}><span aria-hidden="true" style={css(d.barStyle)}></span></button>
</React.Fragment>))}
</div>
<div style={css("display: flex; gap: 8px")}>
<button type="button" aria-label="Previous slide" onClick={V.prev} style={css("width: 44px; height: 44px; border-radius: 50%; border: 1px solid #3F3F46; background: rgba(9,9,11,0.6); color: #F4F4F5; cursor: pointer; font-size: 18px")}>{"\u2190"}</button>
<button type="button" aria-label={V.pauseLabel} onClick={V.togglePause} style={css("width: 44px; height: 44px; border-radius: 50%; border: 1px solid #3F3F46; background: rgba(9,9,11,0.6); color: #F4F4F5; cursor: pointer; font-size: 14px")}>{V.pauseIcon}</button>
<button type="button" aria-label="Next slide" onClick={V.next} style={css(`width: 44px; height: 44px; border-radius: 50%; border: 1px solid #3F3F46; background: ${V.accent}; color: #09090B; cursor: pointer; font-size: 18px; font-weight: 800`)}>{"\u2192"}</button>
</div>
</div>
<div style={css("display: flex; flex-wrap: wrap; gap: 0; margin-top: 64px; border-top: 1px solid #27272A")}>
<div style={css("flex: 1 1 200px; padding: 22px 24px 0 0")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"SIM ROOM"}</div>
<div style={css(`font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; color: ${V.amber}; margin-top: 6px`)}>{"FROM \u00a380/HR"}</div>
</div>
<div style={css("flex: 1 1 200px; padding: 22px 24px 0 0")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"EXCLUSIVE HIRE"}</div>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; color: #FFFFFF; margin-top: 6px")}>{"FROM \u00a340PP"}</div>
</div>
<div style={css("flex: 1 1 200px; padding: 22px 24px 0 0")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"MON\u2013FRI \u00b7 BY BOOKING"}</div>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; color: #FFFFFF; margin-top: 6px")}>{"09:00\u201321:00"}</div>
</div>
<div style={css("flex: 1 1 200px; padding: 22px 0 0 0")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"SATURDAY \u00b7 BY BOOKING"}</div>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; color: #FFFFFF; margin-top: 6px")}>{"10:00\u201321:00"}</div>
</div>
</div>
</div>
</section>
<div aria-hidden="true" style={css("height: 16px; background: repeating-conic-gradient(#F4F4F5 0% 25%, #09090B 0% 50%) 0 0 / 16px 16px; opacity: 0.85")}></div>
<section className="lc-section" aria-labelledby="lane-h" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px 0")}>
<div style={css("text-align: center; margin-bottom: 48px")}>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"CHOOSE YOUR LANE"}</p>
<h2 id="lane-h" style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"One entertainment venue in Norwich. Two kinds of fun."}</h2>
</div>
<div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 20px")}>
<A href="/attractions/racing-simulator-norwich" style={css("position: relative; min-height: 560px; border-radius: 10px; overflow: hidden; background: #131316; display: flex; flex-direction: column; justify-content: flex-end; text-decoration: none")}>
<img src="/images/87af79a958a3ccd899908f5b2bb8b25b.webp" alt="Driver on the pro racing simulator at LeMan Cave, indoor activities Norwich" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} />
<span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.97) 0%, rgba(9,9,11,0.6) 45%, rgba(9,9,11,0.1) 75%)")}></span>
<span style={css("position: relative; padding: 40px; display: flex; flex-direction: column; gap: 14px")}>
<span style={css(`align-self: flex-start; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #09090B; background: ${V.accent}; padding: 6px 10px; border-radius: 3px`)}>{"PETROLHEADS"}</span>
<span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 56px; line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Live for a"}<br />{"race day?"}</span>
<span style={css("max-width: 460px; font-size: 17px; line-height: 1.55; color: #D4D4D8")}>{"A full-motion simulator, a 160ft Scalextric circuit, live timing and real race kit. The closest thing to the grid without a race licence."}</span>
<span style={css(`font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; color: ${V.accent}`)}>{"Explore racing \u2192"}</span>
</span>
</A>
<A href="/attractions/arcade-games-norwich" style={css("position: relative; min-height: 560px; border-radius: 10px; overflow: hidden; background: #131316; display: flex; flex-direction: column; justify-content: flex-end; text-decoration: none")}>
<img src="/images/30c5e67b4cd608a17bdb32e677371fd2.webp" alt="Two friends laughing as they play a retro arcade game" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} />
<span aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.97) 0%, rgba(9,9,11,0.6) 45%, rgba(9,9,11,0.1) 75%)")}></span>
<span style={css("position: relative; padding: 40px; display: flex; flex-direction: column; gap: 14px")}>
<span style={css(`align-self: flex-start; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #09090B; background: ${V.amber}; padding: 6px 10px; border-radius: 3px`)}>{"EVERYONE ELSE"}</span>
<span style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 56px; line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Just here"}<br />{"for a good time?"}</span>
<span style={css("max-width: 460px; font-size: 17px; line-height: 1.55; color: #D4D4D8")}>{"You\u2019re in the right place. Big-screen games consoles, pool, pinball, air hockey and arcade classics \u2014 plus pizza* and your own drinks."}</span>
<span style={css(`font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; color: ${V.amber}`)}>{"Explore games \u2192"}</span>
</span>
</A>
</div>
<div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1px; margin-top: 20px; background: #27272A; border: 1px solid #27272A; border-radius: 8px; overflow: hidden")}>
<div style={css("background: #0F0F12; padding: 26px 28px; display: flex; gap: 16px; align-items: center")}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={V.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={css("flex: none")}><path d="M20 6 9 17l-5-5"></path></svg>
<span style={css("font-size: 16px; line-height: 1.45; color: #E4E4E7")}><strong style={css("color: #FFFFFF")}>{"No experience needed"}</strong>{" \u2014 our team shows everyone the ropes."}</span>
</div>
<div style={css("background: #0F0F12; padding: 26px 28px; display: flex; gap: 16px; align-items: center")}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={V.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={css("flex: none")}><circle cx="9" cy="8" r="3"></circle><circle cx="17" cy="9" r="2.5"></circle><path d="M3 20c0-3.5 2.7-6 6-6s6 2.5 6 6M14 20c0-2.5 1.5-4.5 3.5-4.5S21 17.5 21 20"></path></svg>
<span style={css("font-size: 16px; line-height: 1.45; color: #E4E4E7")}><strong style={css("color: #FFFFFF")}>{"All ages welcome"}</strong>{" \u2014 no age limits on the experiences**."}</span>
</div>
<div style={css("background: #0F0F12; padding: 26px 28px; display: flex; gap: 16px; align-items: center")}>
<svg aria-hidden="true" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={V.accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={css("flex: none")}><path d="M7 3h10l-1 7a4 4 0 0 1-8 0z"></path><path d="M12 14v7M8 21h8"></path></svg>
<span style={css("font-size: 16px; line-height: 1.45; color: #E4E4E7")}><strong style={css("color: #FFFFFF")}>{"Pizza* & Bring Your Own"}</strong>{" \u2014 make a proper night of it."}</span>
</div>
</div>
</section>
<section id="experiences" className="lc-section" aria-labelledby="exp-h" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px 100px")}>
<div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 48px")}>
<div>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"01 / FOR THE PETROLHEADS"}</p>
<h2 id="exp-h" style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Racing simulators in Norwich: pick your machine"}</h2>
</div>
<p style={css("margin: 0; max-width: 420px; font-size: 18px; line-height: 1.6; color: #A1A1AA")}>{"A full-motion rig, live timing and a proper grid. Book by the half-hour, or take over the whole cave."}</p>
</div>
<div style={css("display: flex; flex-wrap: wrap; gap: 20px")}>
<article style={css("flex: 2 1 560px; min-height: 540px; position: relative; border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328; display: flex; flex-direction: column; justify-content: flex-end")}>
<img src="/images/87af79a958a3ccd899908f5b2bb8b25b.webp" alt="Driver gripping the wheel of the pro racing simulator, triple screens showing a mountain circuit" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: 50% 30%")} />
<div aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to top, rgba(9,9,11,0.96) 0%, rgba(9,9,11,0.75) 40%, rgba(9,9,11,0.1) 75%)")}></div>
<div style={css("position: relative; padding: 36px")}>
<div style={css(`display: inline-block; font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.12em; color: #09090B; background: ${V.amber}; padding: 6px 10px; border-radius: 3px`)}>{"FLAGSHIP"}</div>
<h3 style={css("margin: 16px 0 10px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 56px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Pro Racing Simulator"}</h3>
<p style={css("margin: 0 0 20px; max-width: 480px; font-size: 17px; line-height: 1.55; color: #D4D4D8")}>{"Feel every kerb. A full-motion rig with force haptics and 4K screens \u2014 or strap into VR."}</p>
<div style={css("display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 26px")}>
<span style={css("font-size: 13px; font-weight: 600; letter-spacing: 0.06em; padding: 7px 12px; border: 1px solid #3F3F46; border-radius: 3px; color: #E4E4E7")}>{"4 DOF MOTION"}</span>
<span style={css("font-size: 13px; font-weight: 600; letter-spacing: 0.06em; padding: 7px 12px; border: 1px solid #3F3F46; border-radius: 3px; color: #E4E4E7")}>{"4K SCREENS"}</span>
<span style={css("font-size: 13px; font-weight: 600; letter-spacing: 0.06em; padding: 7px 12px; border: 1px solid #3F3F46; border-radius: 3px; color: #E4E4E7")}>{"VR READY"}</span>
<span style={css("font-size: 13px; font-weight: 600; letter-spacing: 0.06em; padding: 7px 12px; border: 1px solid #3F3F46; border-radius: 3px; color: #E4E4E7")}>{"FORCE HAPTICS"}</span>
</div>
<A href="/book" style={css(`display: inline-flex; align-items: center; gap: 10px; background: ${V.accent}; color: #09090B; font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 15px 24px; border-radius: 4px`)}>{"Book a sim session\n"}<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
<A href="/attractions/racing-simulator-norwich" style={css("display: inline-block; margin-left: 18px; color: #FFFFFF; font-weight: 600; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 15px 4px; text-decoration: underline; text-underline-offset: 4px")}>{"Explore the simulator"}</A>
</div>
</article>
<article style={css("flex: 1 1 340px; min-height: 540px; position: relative; border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328; display: flex; flex-direction: column; justify-content: flex-end")}>
<img src="/images/a4d76c894b274fea3d423afb9eae94ae.webp" alt="Digital Scalextric cars racing through a bend under red light" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} />
<div aria-hidden="true" style={css("position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(9,9,11,0.85) 0%, rgba(9,9,11,0.1) 35%, rgba(9,9,11,0.1) 50%, rgba(9,9,11,0.95) 85%)")}></div>
<div style={css(`position: absolute; top: 90px; left: 36px; right: 36px; font-family: 'JetBrains Mono', monospace; color: ${V.amber}`)}>
<div style={css("font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"FASTEST LAP \u00b7 TODAY"}</div>
<div style={css("font-size: 44px; margin-top: 6px")}>{"00:06.214"}</div>
</div>
<div style={css("position: relative; padding: 36px")}>
<h3 style={css("margin: 0 0 10px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 44px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Digital Scalextric"}</h3>
<p style={css("margin: 0 0 22px; font-size: 16px; line-height: 1.55; color: #A1A1AA")}>{"160ft of track, a working pit lane and live timing screens. Bragging rights included."}</p>
<A href="/attractions/scalextric-track-norwich" style={css(`display: inline-flex; align-items: center; gap: 8px; color: ${V.accent}; font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 12px 0`)}>{"Explore Scalextric\n"}<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
</div>
</article>
<article style={css("flex: 1 1 100%; min-height: 280px; border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328; display: flex; flex-wrap: wrap")}>
<div style={css("flex: 1 1 420px; min-height: 280px; position: relative; background: #18181C")}><img src="/images/80e1b5cd2743753b0c06cbf34ef30502.webp" alt="Rider leaning into a corner on the classic 1990s motorcycle simulator" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} /></div>
<div style={css("flex: 1 1 420px; padding: 40px; display: flex; flex-direction: column; justify-content: center; gap: 12px")}>
<div style={css(`font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: ${V.amber}`)}>{"RETRO \u00b7 TWO WHEELS"}</div>
<h3 style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 44px; line-height: 0.95; color: #FFFFFF; text-transform: uppercase")}>{"Classic Motorcycle Sim"}</h3>
<p style={css("margin: 0; max-width: 460px; font-size: 16px; line-height: 1.55; color: #A1A1AA")}>{"Lean into the corners on a genuine 1990s arcade motorcycle simulator. Pure nostalgia, full throttle."}</p>
<A href="/attractions/motorbike-simulator-norwich" style={css(`align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; color: ${V.accent}; font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 12px 0`)}>{"Explore the moto sim\n"}<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
</div>
</article>
</div>
</section>
<section id="games" aria-labelledby="games-h" style={css("background: #0F0F12; border-top: 1px solid #1F1F23; border-bottom: 1px solid #1F1F23")}>
<div className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px")}>
<div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 48px")}>
<div>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"02 / NOT A PETROLHEAD?"}</p>
<h2 id="games-h" style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Everyone gets"}<br />{"a podium"}</h2>
</div>
<p style={css("margin: 0; max-width: 420px; font-size: 18px; line-height: 1.6; color: #A1A1AA")}>{"Not into cars? You\u2019ll still have the best night out in Norwich. Big-screen gaming, pinball, pool and table games \u2014 between races or instead of them."}</p>
</div>
<div style={css("display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 20px")}>
{(V.games || []).map((p, $index) => (<React.Fragment key={$index}>
<article style={css("border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328; display: flex; flex-direction: column")}>
<img src={p.photo} alt={p.alt} style={css("width: 100%; height: 190px; object-fit: cover; display: block; border-bottom: 1px solid #232328; background: #18181C")} />
<div style={css("padding: 26px 28px 22px; display: flex; flex-direction: column; gap: 10px; flex: 1")}>
<div style={css(`font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: ${V.amber}`)}>{p.tag}</div>
<h3 style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 32px; line-height: 1; color: #FFFFFF; text-transform: uppercase")}>{p.name}</h3>
<p style={css("margin: 0; font-size: 16px; line-height: 1.55; color: #A1A1AA; flex: 1")}>{p.copy}</p>
<A href={p.href} style={css(`align-self: flex-start; display: inline-flex; align-items: center; gap: 8px; color: ${V.accent}; font-weight: 700; font-size: 14px; letter-spacing: 0.06em; text-transform: uppercase; padding: 10px 0; text-decoration: none`)}>{"Find out more \u2192"}</A>
</div>
</article>
</React.Fragment>))}
</div>
<div style={css("display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; margin-top: 32px; padding: 26px 30px; border: 1px solid #27272A; border-radius: 8px")}>
<p style={css("margin: 0; font-size: 17px; color: #D4D4D8")}>{"Ask us about adding games to your session or venue hire."}</p>
<A href="/attractions/arcade-games-norwich" style={css(`display: inline-flex; align-items: center; gap: 10px; background: ${V.accent}; color: #09090B; font-weight: 700; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 15px 24px; border-radius: 4px`)}>{"Explore games & arcade\n"}<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
</div>
</div>
</section>
<section id="about" className="lc-section" aria-labelledby="about-h" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px 40px")}>
<div style={css("display: flex; flex-wrap: wrap; gap: 64px; align-items: flex-start")}>
<div style={css("flex: 1 1 440px")}>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"03 / ABOUT LEMAN CAVE"}</p>
<h2 id="about-h" style={css("margin: 0 0 28px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Built by"}<br />{"racing fans"}</h2>
<p style={css("margin: 0 0 18px; font-size: 19px; line-height: 1.65; color: #D4D4D8")}>{"LeMan Cave started with a simple idea: the thrill of race day shouldn\u2019t need a paddock pass."}</p>
<p style={css("margin: 0; font-size: 19px; line-height: 1.65; color: #A1A1AA")}>{"Today it\u2019s a home for serious sim drivers, first-timers and everyone in between \u2014 a place to compete, catch up and celebrate, wrapped in the sights and sounds of motorsport."}</p>
</div>
<div style={css("flex: 1 1 440px; display: flex; flex-direction: column; gap: 20px")}>
<blockquote style={css("margin: 0; padding: 36px; background: #131316; border: 1px solid #232328; border-radius: 8px")}>
<svg aria-hidden="true" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={V.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21c3 0 7-1 7-8V5H3v7h4M14 21c3 0 7-1 7-8V5h-7v7h4"></path></svg>
<p style={css("margin: 16px 0 20px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; line-height: 1.1; color: #FFFFFF; text-transform: uppercase")}>{"Even if you\u2019re a regular at circuit racing and track days, it\u2019s a great way to learn a course before that daunting first lap out. We regularly get visitors using the sims before their dream European trip to Spa, Zandvoort and the N\u00fcrburgring, to learn the corners and make the experience more enjoyable."}</p>
</blockquote>
<div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; background: #27272A; border: 1px solid #27272A; border-radius: 8px; overflow: hidden")}>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 26px; color: #FFFFFF; text-transform: uppercase")}>{"Race"}</div>
<div style={css("font-size: 14px; line-height: 1.5; color: #A1A1AA; margin-top: 6px")}>{"Pro-grade rigs and live timing."}</div>
</div>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 26px; color: #FFFFFF; text-transform: uppercase")}>{"Play"}</div>
<div style={css("font-size: 14px; line-height: 1.5; color: #A1A1AA; margin-top: 6px")}>{"Games for every skill level."}</div>
</div>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 26px; color: #FFFFFF; text-transform: uppercase")}>{"Relax"}</div>
<div style={css("font-size: 14px; line-height: 1.5; color: #A1A1AA; margin-top: 6px")}>{"Bring Your Own drinks and good company."}</div>
</div>
</div>
</div>
</div>
</section>
<section id="venue" className="lc-section" aria-labelledby="venue-h" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px")}>
<div style={css("display: flex; flex-wrap: wrap; gap: 64px; align-items: stretch")}>
<div style={css("flex: 1 1 520px; min-height: 520px; position: relative; border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328")}>
<img src="/images/4a552ab4df1d6b27548d7bd0e68e6d3e.webp" alt="Inside LeMan Cave: race suits and helmets on the wall, neon signs, bar and pool / billiards table" style={css("position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover")} />
<div style={css("position: absolute; left: 24px; bottom: 24px; background: rgba(9,9,11,0.85); border: 1px solid #27272A; border-radius: 6px; padding: 18px 22px; backdrop-filter: blur(6px)")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"ON THE WALLS"}</div>
<div style={css("font-size: 16px; color: #E4E4E7; margin-top: 6px")}>{"Race suits \u00b7 helmets \u00b7 signed prints \u00b7 neon"}</div>
</div>
</div>
<div style={css("flex: 1 1 460px; display: flex; flex-direction: column; justify-content: center")}>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"04 / THE CAVE"}</p>
<h2 id="venue-h" style={css("margin: 0 0 28px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 84px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"A garage built"}<br />{"for good times"}</h2>
<p style={css("margin: 0 0 18px; font-size: 19px; line-height: 1.65; color: #D4D4D8")}>{"LeMan Cave is a purpose-built motorsport den in Norwich. Low light, loud engines and walls lined with racing memorabilia \u2014 it\u2019s where petrolheads, first-timers and office leagues come to settle scores."}</p>
<p style={css("margin: 0 0 40px; font-size: 19px; line-height: 1.65; color: #A1A1AA")}>{"Fully air-conditioned, with a Sonos sound system and ambient lighting throughout. Add pizza*, bring your own drinks, and make the place yours."}</p>
<div style={css("display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; background: #27272A; border: 1px solid #27272A; border-radius: 6px; overflow: hidden")}>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css(`font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 44px; color: ${V.amber}`)}>{"~1,600"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"square feet of play"}</div>
</div>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 44px; color: #FFFFFF")}>{"160ft"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"of digital track"}</div>
</div>
<div style={css("background: #09090B; padding: 22px")}>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 44px; color: #FFFFFF")}>{"Drinks"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"Bring Your Own"}</div>
</div>
</div>
</div>
</div>
</section>
<section id="sound" className="lc-section" aria-labelledby="sound-h" style={css("max-width: 1360px; margin: 0 auto; padding: 0 40px 120px")}>
<div style={css("background: #0F0F12; border: 1px solid #232328; border-radius: 8px; padding: clamp(28px, 5vw, 56px) clamp(20px, 4vw, 48px); display: flex; flex-wrap: wrap; gap: clamp(32px, 4vw, 48px); align-items: center")}>
<div style={css("flex: 1 1 380px")}>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"05 / SOUND SYSTEM"}</p>
<h2 id="sound-h" style={css("margin: 0 0 20px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(44px, 5vw, 72px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Your tunes,"}<br />{"turned up"}</h2>
<p style={css("margin: 0; font-size: 19px; line-height: 1.65; color: #A1A1AA")}>{"A Sonos sound system with integrated ceiling speakers and a sub fills the whole cave. It\u2019s Wi-Fi ready, so you can connect and play your own tunes."}</p>
</div>
<div style={css("flex: 1 1 520px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 1px; background: #27272A; border: 1px solid #27272A; border-radius: 6px; overflow: hidden")}>
<div style={css("background: #09090B; padding: 26px 22px")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"SYSTEM"}</div>
<div style={css(`font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 40px; color: ${V.amber}; margin-top: 6px`)}>{"Sonos"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"Throughout the cave"}</div>
</div>
<div style={css("background: #09090B; padding: 26px 22px")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"SPEAKERS"}</div>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 40px; color: #FFFFFF; margin-top: 6px")}>{"Ceiling + sub"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"Integrated ceiling speakers and a subwoofer"}</div>
</div>
<div style={css("background: #09090B; padding: 26px 22px")}>
<div style={css("font-family: 'JetBrains Mono', monospace; font-size: 12px; letter-spacing: 0.14em; color: #71717A")}>{"PLAY"}</div>
<div style={css("font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: 40px; color: #FFFFFF; margin-top: 6px")}>{"Wi-Fi ready"}</div>
<div style={css("font-size: 14px; color: #A1A1AA; margin-top: 4px")}>{"Connect and play your own tunes"}</div>
</div>
</div>
</div>
</section>
<section id="events" aria-labelledby="offer-h" style={css("background: #0F0F12; border-top: 1px solid #1F1F23; border-bottom: 1px solid #1F1F23")}>
<div className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px")}>
<div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 56px")}>
<div>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"06 / WHAT WE OFFER"}</p>
<h2 id="offer-h" style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"A private hire venue in Norwich: your race, your rules"}</h2>
</div>
<A href="/contact-leman-cave-norwich" style={css("border: 1px solid #52525B; color: #FFFFFF; font-weight: 600; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 16px 26px; border-radius: 4px")}>{"Ask about packages"}</A>
</div>
<div style={css("display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1px; background: #27272A; border: 1px solid #27272A; border-radius: 8px; overflow: hidden")}>
{(V.offers || []).map((o, $index) => (<React.Fragment key={$index}>
<div style={css("background: #0F0F12; padding: 36px 32px; display: flex; flex-direction: column; gap: 14px; min-height: 220px")}>
<div style={css("display: flex; justify-content: space-between; align-items: center")}>
<span style={css("font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #71717A")}>{o.num}</span>
<span aria-hidden="true" style={css(`width: 10px; height: 10px; border-radius: 50%; background: ${V.accent}`)}></span>
</div>
<h3 style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 800; font-size: 34px; line-height: 1; color: #FFFFFF; text-transform: uppercase")}>{o.title}</h3>
<p style={css("margin: 0; font-size: 16px; line-height: 1.6; color: #A1A1AA")}>{o.copy}</p>
</div>
</React.Fragment>))}
</div>
</div>
</section>
<section id="gallery" className="lc-section" aria-labelledby="gallery-h" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px 0")}>
<div style={css("display: flex; flex-wrap: wrap; justify-content: space-between; align-items: flex-end; gap: 24px; margin-bottom: 48px")}>
<div>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"07 / GALLERY"}</p>
<h2 id="gallery-h" style={css("margin: 0; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 88px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Inside"}<br />{"the cave"}</h2>
</div>
<A href="https://www.instagram.com/leman.cave/" style={css("display: inline-flex; align-items: center; gap: 10px; border: 1px solid #52525B; color: #FFFFFF; font-weight: 600; font-size: 15px; letter-spacing: 0.06em; text-transform: uppercase; padding: 16px 24px; border-radius: 4px")}>
<svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="0.6"></circle></svg>{"\nFollow @leman.cave"}</A>
</div>
<div className="lc-gallery" style={css("display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); grid-auto-rows: 220px; gap: 12px")}>
<figure style={css("margin: 0; grid-column: span 2; grid-row: span 2; border-radius: 8px; overflow: hidden; position: relative; background: #131316")}>
<img src="/images/4b14d96bd1414bd7eaf55fc8afca2612.webp" alt="Friends laughing over a game of air hockey" style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
</figure>
{(V.gallery || []).map((g, $index) => (<React.Fragment key={$index}>
<figure style={css(g.style)}>
<img src={g.src} alt={g.label} style={css("width: 100%; height: 100%; object-fit: cover; display: block")} />
</figure>
</React.Fragment>))}
</div>
</section>
<section aria-labelledby="book-h" className="lc-section" style={css("max-width: 1360px; margin: 0 auto; padding: 120px 40px 60px")}>
<div style={css(`position: relative; border-radius: 10px; overflow: hidden; background: ${V.accent}; padding: 64px 56px; display: flex; flex-wrap: wrap; gap: 40px; align-items: center; justify-content: space-between`)}>
<div aria-hidden="true" style={css("position: absolute; right: 0; top: 0; bottom: 0; width: 220px; background: repeating-conic-gradient(#09090B 0% 25%, transparent 0% 50%) 0 0 / 40px 40px; opacity: 0.18")}></div>
<div style={css("position: relative; flex: 1 1 460px")}>
<h2 id="book-h" style={css("margin: 0 0 14px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 80px); line-height: 0.92; color: #09090B; text-transform: uppercase")}>{"Grid slots"}<br />{"fill fast"}</h2>
<p style={css("margin: 0; max-width: 460px; font-size: 18px; line-height: 1.55; color: #1C1C1F")}>{"See live availability and lock in your session online in under a minute."}</p>
</div>
<div style={css("position: relative; display: flex; flex-direction: column; gap: 12px; flex: 0 1 360px")}>
<A href="/book" style={css("display: flex; justify-content: space-between; align-items: center; background: #09090B; color: #FFFFFF; font-weight: 700; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase; padding: 20px 24px; border-radius: 4px")}>{"Book a session\n"}<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
<A href="/attractions" style={css("display: flex; justify-content: space-between; align-items: center; background: rgba(9,9,11,0.12); border: 2px solid #09090B; color: #09090B; font-weight: 700; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase; padding: 18px 22px; border-radius: 4px")}>{"Browse experiences\n"}<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"></path></svg></A>
<A href="/account" style={css("color: #09090B; font-weight: 600; font-size: 15px; padding: 10px 0; text-decoration: underline")}>{"Manage an existing booking"}</A>
</div>
</div>
</section>
<section id="contact" className="lc-section" aria-labelledby="contact-h" style={css("max-width: 1360px; margin: 0 auto; padding: 60px 40px 120px")}>
<div style={css("display: flex; flex-wrap: wrap; gap: 64px")}>
<div style={css("flex: 1 1 380px; display: flex; flex-direction: column; gap: 32px")}>
<div>
<p style={css(`margin: 0 0 12px; font-family: 'JetBrains Mono', monospace; font-size: 13px; letter-spacing: 0.16em; color: ${V.accent}`)}>{"08 / PIT WALL"}</p>
<h2 id="contact-h" style={css("margin: 0 0 18px; font-family: 'Big Shoulders Display', sans-serif; font-weight: 900; font-size: clamp(48px, 6vw, 84px); line-height: 0.92; color: #FFFFFF; text-transform: uppercase")}>{"Get in touch"}</h2>
<p style={css("margin: 0; font-size: 18px; line-height: 1.6; color: #A1A1AA")}>{"Planning something bigger? Tell us the date, the crew and the vibe \u2014 we\u2019ll build the package."}</p>
</div>
<div style={css("display: flex; flex-direction: column; border-top: 1px solid #27272A")}>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Phone"}</span><A href="tel:01603517080" style={css("font-weight: 600")}>{"01603 517080"}</A></div>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Email"}</span><A href="mailto:bookings@lemancave.co.uk" style={css("font-weight: 600")}>{"bookings@lemancave.co.uk"}</A></div>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Find us"}</span><span style={css("font-weight: 600; text-align: right")}>{"Unit 1, Consensus House, St Faith\u2019s Rd, NR6 7BW"}</span></div>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Mon\u2013Fri"}</span><span style={css("font-family: 'JetBrains Mono', monospace")}>{"09:00 \u2013 21:00"}</span></div>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Saturday"}</span><span style={css("font-family: 'JetBrains Mono', monospace")}>{"10:00 \u2013 21:00"}</span></div>
<div style={css("display: flex; justify-content: space-between; gap: 16px; padding: 18px 0; border-bottom: 1px solid #27272A")}><span style={css("color: #71717A")}>{"Sunday"}</span><span style={css("font-family: 'JetBrains Mono', monospace")}>{"12:00 \u2013 16:00"}</span></div>
</div>
<div style={css("position: relative; height: 300px; border-radius: 8px; overflow: hidden; background: #131316; border: 1px solid #232328")}><iframe title={"Map: LeMan Cave, Consensus House, St Faith\u2019s Rd, Norwich NR6 7BW"} src="https://maps.google.com/maps?q=52.672141,1.298626&z=15&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" style={css("position: absolute; inset: 0; width: 100%; height: 100%; border: 0; filter: invert(90%) hue-rotate(180deg) saturate(0.85) contrast(0.95)")}></iframe><A href="https://www.google.com/maps/dir/?api=1&destination=52.672141,1.298626" target="_blank" rel="noopener" style={css("position: absolute; left: 14px; bottom: 14px; background: #ED2835; color: #09090B; font-weight: 700; font-size: 13px; letter-spacing: 0.06em; text-transform: uppercase; padding: 10px 16px; border-radius: 4px")}>{"Get directions \u2192"}</A><span style={css("position: absolute; right: 14px; bottom: 14px; background: rgba(9, 9, 11, 0.85); color: #E4E4E7; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.12em; text-transform: uppercase; padding: 8px 12px; border-radius: 4px")}>{"NR6 7BW \u00b7 Parking on site"}</span></div>
</div>
<EnquiryForm formType="general-enquiry" aria-label="Enquiry form" style={css("flex: 1.3 1 480px; background: #131316; border: 1px solid #232328; border-radius: 10px; padding: 44px; display: flex; flex-direction: column; gap: 22px")}>
<fieldset style={css("border: 0; padding: 0; margin: 0")}>
<legend style={css("font-size: 14px; font-weight: 600; letter-spacing: 0.06em; text-transform: uppercase; color: #A1A1AA; margin-bottom: 12px")}>{"What are you planning?"}</legend>
<div style={css("display: flex; flex-wrap: wrap; gap: 10px")}>
{(V.types || []).map((t, $index) => (<React.Fragment key={$index}>
<button type="button" onClick={t.pick} aria-pressed={t.pressed} style={css(t.style)}>{t.label}</button>
</React.Fragment>))}
</div>
</fieldset>
<div style={css("display: flex; flex-wrap: wrap; gap: 16px")}>
<label style={css("flex: 1 1 200px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 600; color: #A1A1AA")}>{"Name\n"}<input type="text" placeholder="Your name" style={css("background: #09090B; border: 1px solid #3F3F46; border-radius: 4px; padding: 15px 16px; color: #FFFFFF; font-size: 16px")} name="name" required={true} /></label>
<label style={css("flex: 1 1 200px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 600; color: #A1A1AA")}>{"Email\n"}<input type="email" placeholder="you@example.com" style={css("background: #09090B; border: 1px solid #3F3F46; border-radius: 4px; padding: 15px 16px; color: #FFFFFF; font-size: 16px")} name="email" required={true} /></label>
</div>
<div style={css("display: flex; flex-wrap: wrap; gap: 16px")}>
<label style={css("flex: 1 1 200px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 600; color: #A1A1AA")}>{"Preferred date\n"}<input type="date" style={css("background: #09090B; border: 1px solid #3F3F46; border-radius: 4px; padding: 14px 16px; color: #FFFFFF; font-size: 16px; color-scheme: dark")} name="preferred_date" /></label>
<label style={css("flex: 1 1 200px; display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 600; color: #A1A1AA")}>{"Group size\n"}<input type="number" min="1" placeholder="e.g. 12" style={css("background: #09090B; border: 1px solid #3F3F46; border-radius: 4px; padding: 15px 16px; color: #FFFFFF; font-size: 16px")} name="group_size" /></label>
</div>
<label style={css("display: flex; flex-direction: column; gap: 8px; font-size: 14px; font-weight: 600; color: #A1A1AA")}>{"Tell us more\n"}<textarea rows="5" placeholder={"Timings, experiences you\u2019re after, food\u2026"} style={css("background: #09090B; border: 1px solid #3F3F46; border-radius: 4px; padding: 15px 16px; color: #FFFFFF; font-size: 16px; resize: vertical")} name="tell_us_more"></textarea></label>
<button type="submit" style={css(`align-self: flex-start; background: ${V.accent}; color: #09090B; border: 0; cursor: pointer; font-weight: 700; font-size: 16px; letter-spacing: 0.06em; text-transform: uppercase; padding: 18px 32px; border-radius: 4px`)}>{"Send enquiry"}</button>
</EnquiryForm>
</div>
</section>
<SiteFooter />
</div>
</>);
  }
}
