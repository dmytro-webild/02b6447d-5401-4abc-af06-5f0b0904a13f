"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentyOne from '@/components/sections/feature/FeatureCardTwentyOne';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import MetricCardSeven from '@/components/sections/metrics/MetricCardSeven';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import SplitAbout from '@/components/sections/about/SplitAbout';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="largeSmallSizeMediumTitles"
        background="noise"
        cardStyle="outline"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="solid"
        headingFontWeight="semibold"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Games",
          id: "products",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Support",
          id: "faq",
        },
      ]}
      brandName="NexGame"
      button={{
        text: "Login",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroLogoBillboard
      background={{
        variant: "sparkles-gradient",
      }}
      logoText="BEYOND THE PLAY"
      description="Experience the next evolution of competitive gaming. Immersive worlds, cutting-edge mechanics, and a community built for champions."
      buttons={[
        {
          text: "Play Now",
          href: "#products",
        },
        {
          text: "Learn More",
          href: "#about",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/digital-art-dark-cosmic-night-sky_23-2151700781.jpg"
      imageAlt="Next-gen gaming world"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="about" data-section="about">
      <SplitAbout
      textboxLayout="split"
      useInvertedBackground={false}
      title="Unrivaled Immersion"
      description="We craft experiences that go beyond the screen. Our studio combines industry-leading technology with narrative depth to create worlds you won't want to leave."
      buttons={[
        {
          text: "Read Our Story",
          href: "#",
        },
      ]}
      bulletPoints={[
        {
          title: "4K World Design",
          description: "Every pixel crafted for peak realism.",
        },
        {
          title: "Dynamic Combat",
          description: "Fluid mechanics that respond to your style.",
        },
        {
          title: "Social Integration",
          description: "Build guilds, make alliances, win together.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-boy-holding-black-controller_23-2148243649.jpg"
      imageAlt="Gaming experience close up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "Aetheria RPG",
          price: "$59.99",
          imageSrc: "http://img.b2bpic.net/free-photo/geometric-heart-shape-outdoors_23-2150827398.jpg",
        },
        {
          id: "2",
          name: "Blade Edge",
          price: "$49.99",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-religious-cross-with-neon-light_23-2150945819.jpg",
        },
        {
          id: "3",
          name: "Vortex Tactics",
          price: "$39.99",
          imageSrc: "http://img.b2bpic.net/free-vector/paintball-icon-collection_1262-3429.jpg",
        },
        {
          id: "4",
          name: "Quest Log Online",
          price: "$29.99",
          imageSrc: "http://img.b2bpic.net/free-vector/video-game-element-collection_23-2150255406.jpg",
        },
        {
          id: "5",
          name: "Level Up Masters",
          price: "$19.99",
          imageSrc: "http://img.b2bpic.net/free-photo/abstract-bokeh-background-textured_640221-529.jpg",
        },
        {
          id: "6",
          name: "Guild Alliance",
          price: "$0.00",
          imageSrc: "http://img.b2bpic.net/free-vector/wizard-esport-mascot-logo-gaming-team_343694-1212.jpg",
        },
      ]}
      title="Featured Titles"
      description="Explore our flagship gaming collection, from high-stakes RPGs to tactical shooters."
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyOne
      useInvertedBackground={false}
      title="Platform Excellence"
      description="Robust tools and services designed to keep your game running smooth 24/7."
      accordionItems={[
        {
          id: "f1",
          title: "Low Latency Servers",
          content: "Global infrastructure ensuring minimal lag for every player.",
        },
        {
          id: "f2",
          title: "Advanced Anti-Cheat",
          content: "Fair play is our priority with real-time detection systems.",
        },
        {
          id: "f3",
          title: "Cross-Platform Support",
          content: "Seamless play between PC, console, and mobile devices.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-vector/futuristic-infographics-design_23-2148444703.jpg"
      imageAlt="Feature interface"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardSeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={true}
      metrics={[
        {
          id: "m1",
          value: "12M+",
          title: "Active Players",
          items: [
            "Across 150 regions",
          ],
        },
        {
          id: "m2",
          value: "500K+",
          title: "Daily Matches",
          items: [
            "Played every single day",
          ],
        },
        {
          id: "m3",
          value: "24/7",
          title: "Uptime",
          items: [
            "99.9% Reliable connection",
          ],
        },
      ]}
      title="Community Milestones"
      description="Join millions of players building a global legacy."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Alex R.",
          date: "2023-10-15",
          title: "Top Tier",
          quote: "The most polished combat system I have ever played.",
          tag: "RPG Gamer",
          avatarSrc: "http://img.b2bpic.net/free-photo/smiling-viewer-changing-channels-television-set-with-remote-control_482257-92306.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/digital-art-dark-cosmic-night-sky_23-2151700781.jpg",
          imageAlt: "esports player headshot",
        },
        {
          id: "2",
          name: "Sarah K.",
          date: "2023-11-02",
          title: "Incredible",
          quote: "I love the community features and guild mechanics.",
          tag: "Hardcore Gamer",
          avatarSrc: "http://img.b2bpic.net/free-photo/cartoon-woman-wearing-glasses_23-2151136814.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-boy-holding-black-controller_23-2148243649.jpg",
          imageAlt: "esports player headshot",
        },
        {
          id: "3",
          name: "Mark D.",
          date: "2023-11-20",
          title: "Fast paced",
          quote: "The tactical shooter experience is second to none.",
          tag: "Pro Player",
          avatarSrc: "http://img.b2bpic.net/free-photo/person-working-animation-porject_23-2149269895.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/geometric-heart-shape-outdoors_23-2150827398.jpg",
          imageAlt: "esports player headshot",
        },
        {
          id: "4",
          name: "Emily P.",
          date: "2023-12-05",
          title: "Worth it",
          quote: "Graphics are stunning and the story keeps me hooked.",
          tag: "Story Lover",
          avatarSrc: "http://img.b2bpic.net/free-photo/young-adult-enjoying-playing-video-game_23-2149250001.jpg",
          imageSrc: "http://img.b2bpic.net/free-photo/view-3d-religious-cross-with-neon-light_23-2150945819.jpg",
          imageAlt: "esports player headshot",
        },
        {
          id: "5",
          name: "Chris J.",
          date: "2023-12-12",
          title: "Classic",
          quote: "Reminds me of my favorite childhood games but modernized.",
          tag: "Veteran",
          avatarSrc: "http://img.b2bpic.net/free-photo/hispanic-teenager-playing-video-game-holding-controller-relaxed-with-serious-expression-face-simple-natural-looking-camera_839833-3187.jpg",
          imageSrc: "http://img.b2bpic.net/free-vector/paintball-icon-collection_1262-3429.jpg",
          imageAlt: "esports player headshot",
        },
      ]}
      title="Player Voices"
      description="Hear what the community has to say about our latest releases."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="default"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Is the platform free to play?",
          content: "Most of our titles are free to download and play, with optional premium content.",
        },
        {
          id: "q2",
          title: "Do I need a high-end PC?",
          content: "Our games are optimized for a wide range of hardware, from modest rigs to high-end setups.",
        },
        {
          id: "q3",
          title: "Can I play with friends?",
          content: "Absolutely, our multiplayer systems allow you to invite friends across various platforms.",
        },
      ]}
      title="Got Questions?"
      description="We've got answers. Check our common queries below."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Stay Updated"
      title="Join the Beta"
      description="Sign up to receive news, updates, and early access to our next generation of games."
      imageSrc="http://img.b2bpic.net/free-photo/abstract-science-fiction-futuristic-space-with-blue-neon-lights_181624-24952.jpg"
      imageAlt="Beta access sign up"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="NexGame"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
