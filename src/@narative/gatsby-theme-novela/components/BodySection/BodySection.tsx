import styled from "@emotion/styled";

import mediaqueries from "@narative/gatsby-theme-novela/src/styles/media";

const BodySection = styled.section<{ narrow?: boolean }>`
  width: 100%;
  max-width: 1220px;
  margin: 0 auto;
  padding: 0 4rem;
  height: 100%;

  ${mediaqueries.desktop`
    max-width: 850px;
  `};

  ${p =>
    p.narrow
      ? mediaqueries.tablet`
          padding: 0 2rem;
          max-width: 527px;
        `
      : mediaqueries.tablet`
          padding: 0 4rem;
          max-width: 567px;
        `}

  ${mediaqueries.phablet`
    max-width: 100%;
  `};
`;

export default BodySection;
