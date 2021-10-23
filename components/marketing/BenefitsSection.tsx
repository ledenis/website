import React from 'react';
import {
  Box,
  Grid,
  Text,
  Container,
  Flex,
  Heading,
  Paragraph,
  Section,
  Separator,
  darkTheme,
} from '@modulz/design-system';
import { MarketingCaption } from './MarketingCaption';

export const BenefitsSection = () => {
  return (
    <Section
      css={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container size="3">
        <Box css={{ mb: '$7' }}>
          <MarketingCaption css={{ mb: '$1' }}>Why Radix Primitives</MarketingCaption>
          <Heading as="h2" size="3">
            Take the pain out of UI work
          </Heading>
        </Box>

        <Grid columns={{ '@initial': 1, '@bp1': 2 }} gap={{ '@initial': 4, '@bp1': 7, '@bp2': 9 }}>
          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Save time. Ship faster.
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It takes a <em style={{ fontFamily: 'Georgia, serif' }}>lot</em> of time to develop
              and maintain robust UI components. From the ground up, we created Radix Primitives for
              building high quality products, so that you can save time and money, and ship a better
              product faster.
            </Paragraph>
          </Box>

          <Box>
            <Text
              as="h3"
              size="6"
              css={{ fontWeight: 500, letterSpacing: '-0.03em', lineHeight: 1.3, mb: '$2' }}
            >
              Focus on your product
            </Text>
            <Paragraph css={{ mb: '$5' }}>
              It’s no secret that proper UI components are incredibly tricky to build. So if you can
              actually build an excellent component library, is this the best use of your team’s
              time? With Radix, you can focus on your unique engineering challenges instead.
            </Paragraph>
          </Box>
        </Grid>
      </Container>
    </Section>
  );
};
