import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
    <Flex flexWrap="wrap" justify-justifyContent="center" alignItems="center" m="10">
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box p="5">
            <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
            <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
            <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}<br />{desc2}</Text>
            <Button fontSize="xl">
                <Link href={linkName}>{buttonText}</Link>
            </Button>
        </Box>
        {purpose}
    </Flex >
)

export default function Home() {
    return (
        <Box>
            <Banner
                purpose={`Teams`}
                title1="hello"
                title2="world"
                desc1="hello"
                desc2="world"
                buttonText="click me"
                imageUrl={`/../public/images/teams/favicon.ico`}
                linkName="/teams"
            />
            <Flex flexWrap="wrap">

            </Flex>
            <Banner
                purpose={`Teams`}
                title1="hello"
                title2="world"
                desc1="hello"
                desc2="world"
                buttonText="click me"
                imageUrl={`/../public/images/teams/favicon.ico`}
                linkName="/teams"
            />
            {/* <Banner purpose={`Fixtures`} />
        <ul>
            <li>
                <Link href="/fixtures">Fixtures</Link>
            </li>
            <li>
                <Link href="/teams">Teams</Link>
            </li>
        </ul> */}
        </Box>
    )
}
