import { Text, Flex, UnorderedList, ListItem, Link } from "@chakra-ui/react";

const Intro = () => (
  <Flex maxWidth="700px" direction="column">
    <Text mb={4}>Howdy!</Text>
    <Text mb={4}>
      My name is <b>Iván Mayoral</b>, I am a <b>Senior Software Engineer</b>{" "}
      with over <b>10</b> years of professional experience in Computer Science.
    </Text>
    <Text mb={4}>
      I live in <b>Mexico City</b> and have been working remotely for about 9
      years as a contractor for US Tech Companies:{" "}
      <b>
        <Link href="https://gumgum.com/">GumGum</Link>
      </b>{" "}
      and{" "}
      <b>
        <Link href="https://hellopearl.com">Pearl</Link>
      </b>
    </Text>
    <Text mb={4}>
      I am passionate about Free Software, Linux, UI Development, Accesibility, and React.
    </Text>
    <Text mb={4}>
      My main programming languages are JavaScript (TypeScript {`<3`}), PHP7,
      Ruby and Solidity, however I have worked with C, C++ and Java in my first
      early jobs.
    </Text>
    <Text mb={4}>
      This are some of the{" "}
      <b>
        <Link href="https://github.com/ivanm">Open Source</Link>
      </b>{" "}
      projects that I'm currently working on my free time:
    </Text>
    <UnorderedList>
      <ListItem>
        <b>
          <Link href="http://coinlog.vaan.dev">coinlog:</Link>
        </b>{" "}
        A configurable cryptocurrency price tracker.
      </ListItem>
      <ListItem>
        <b>
          <Link href="http://nft-explorer.vaan.dev">nft-explorer:</Link>
        </b>{" "}
        An visualizarion tool for NFT Collections. An alternative to OpenSea
      </ListItem>
      <ListItem>
        <b>
          <Link href="https://github.com/ivanm/nft-autotool">
            nft-autotool:
          </Link>
        </b>{" "}
        NFT Genereator script using layers with different rarities.
      </ListItem>
    </UnorderedList>
  </Flex>
);
export default Intro;