import { Box, Flex, Link, HStack, IconButton, Text } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Box
      className="rounded-t-[30px]"
      as="footer"
      bg="black"
      color="white"
      py={10}
    >
      <Flex
        direction={{ base: "column", md: "row-reverse" }}
        justify="space-between"
        align="center"
        px={8}
        maxW="1080px"
        mx="auto"
      >
        <HStack mb={{ base: 4, md: 0 }} spacing={4}>
          <IconButton
            as={Link}
            target="_blank"
            href="https://www.facebook.com"
            aria-label="Facebook"
            icon={<FaFacebook />}
            variant={"outline"}
            _hover={""}
            color="white"
            fontSize="20px"
          />
          <IconButton
            as={Link}
            href="https://www.instagram.com"
            aria-label="Instagram"
            icon={<FaInstagram />}
            variant={"outline"}
            _hover={""}
            color="white"
            fontSize="20px"
          />
          <IconButton
            as={Link}
            href="https://www.twitter.com"
            aria-label="Twitter"
            icon={<FaTwitter />}
            variant={"outline"}
            _hover={""}
            color="white"
            fontSize="20px"
          />
        </HStack>
        <div className="flex flex-col items-center justify-center gap-2">
          <p>Phone: +977-456-7890</p>
          <p>contact@nepalhostels.com</p>
        </div>
        <Flex direction={"column"}>
          <Text textAlign="center" fontSize={"xl"} mt={{ base: 4, md: 2 }}>
            &copy; Native Plug {new Date().getFullYear()}
          </Text>
          <Link
            mt={1}
            textAlign="center"
            textDecoration={"underline"}
            href="/privacy"
          >
            Privacy Policy
          </Link>
          <Link
            mt={1}
            textAlign="center"
            textDecoration={"underline"}
            href="/terms"
          >
            Terms of Service
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
