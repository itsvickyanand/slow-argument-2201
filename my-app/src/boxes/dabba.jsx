import { Box, Text } from '@chakra-ui/react'
import AirbnbCard from './Air'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Dabba = () => {
  return (
    <div>
      <Text marginLeft="20px" fontSize="3xl" textAlign="left">
        Continue browsing <ArrowForwardIcon />
      </Text>
      <Box display="flex" gap="10px" w="100%" p={4} color="white">
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/154122062/original/f3572c38ca47d9a4adfbd6348415327d336beaff.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/151582345/original/a706511660388aeb14de3b376a09a57c17d897ee.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/231442813/original/27e952d5225aceaef4b816f146465f66e679384f.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/177597451/original/3f8c91d67ad4d3b7f01be0dabab2922dec30f4eb.png" />
      </Box>
      <Text marginLeft="20px" fontSize="3xl" textAlign="left">
        Most popular Gigs in<span color="blue"> Web Programming</span>{' '}
      </Text>
      <Box display="flex" gap="10px" w="100%" p={4} color="white">
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/218766939/original/27321a300299a520be3480f7fb4b91c78f09f697.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/240890002/original/ae2b1ba885e8902ae71a128e29d3ba618ecd44d3.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/216425498/original/af67128d2152c1dec64064ed05cac4b5b8ea9c81.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/268175245/original/f05b09642fc41310fa61b7a3dd8bf50bc0e09b03.png" />
      </Box>
      <Text marginLeft="20px" fontSize="3xl" textAlign="left">
        Gigs you may like
      </Text>
      <Box display="flex" gap="10px" w="100%" p={4} color="white">
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/79670756/original/0b171697a812cd934794e5635eb2535c789a1f57.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/275797725/original/d2511b62c779cc91014c67504bbb4257567fb314.jpeg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110297776/original/77922ca0d3a289aa98f08a596191a6d8c83d85d3.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/110297776/original/77922ca0d3a289aa98f08a596191a6d8c83d85d3.jpg" />
      </Box>
      <Box display="flex" gap="10px" w="100%" p={4} color="white">
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157781550/original/a9a7bf0927cc5cc557f988452e200acd3cb5fe5b.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106063136/original/3e3281a6c8f335f848b4418832c92c943ac5fb50.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/69430316/original/b858e3542d661ba40a7b360e4f387bab8ef687b7.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150768203/original/557bf3f6de27178e8282385c728088a8aac31e94.png" />
      </Box>
      <Text marginLeft="20px" fontSize="3xl" textAlign="left">
        Verified Pro services in<span color="blue"> Web Programming</span>{' '}
      </Text>
      <Box display="flex" gap="10px" w="100%" p={4} color="white">
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157781550/original/a9a7bf0927cc5cc557f988452e200acd3cb5fe5b.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/150768203/original/557bf3f6de27178e8282385c728088a8aac31e94.png" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/106063136/original/3e3281a6c8f335f848b4418832c92c943ac5fb50.jpg" />
        <AirbnbCard image="https://fiverr-res.cloudinary.com/t_gig_cards_web,q_auto,f_auto/gigs/157781550/original/a9a7bf0927cc5cc557f988452e200acd3cb5fe5b.png" />
      </Box>
    </div>
  )
}

export default Dabba
