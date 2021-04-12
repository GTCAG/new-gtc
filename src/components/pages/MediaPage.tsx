import React, { useEffect, useState } from "react";
import styled, { withTheme, DefaultTheme } from "styled-components";
import PageHeader from "../atoms/PageHeader";
import Display from "../texts/Display";
import VideoItem, { Video } from "../atoms/VideoItem";
import bgImg from "../../images/service.jpg";
import PageSection from "../atoms/PageSection";
import axios from "axios";
import TitleBox from "../atoms/TitleBox";
import HashLoader from "react-spinners/HashLoader";

interface MediaPageProps {
  theme: DefaultTheme;
}

const Root = styled.div`
  width: 100%;
`;

const Grid = styled.div`
  margin-top: 200px;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
`;

const MediaPage: React.FC<MediaPageProps> = ({ theme }) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:4001/videos")
      .then((res) => setVideos(res.data))
      .catch((err) => console.log("err", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Root>
      <PageHeader height="600px" img={bgImg}>
        <Display variant="large" color={theme.colors.lights.offWhite}>
          Media
        </Display>
      </PageHeader>

      <PageSection bgColor={theme.colors.background}>
        <TitleBox>
          <Display color={theme.colors.lights.offWhite}>Latest Videos</Display>
        </TitleBox>
        {loading && (
          <div
            style={{
              transform: "translateY(250px)",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <HashLoader color={theme.colors.accent.default} size={77} />
          </div>
        )}
        <Grid>
          {videos?.map((video) => (
            <VideoItem video={video} key={video.id.videoId} />
          ))}
        </Grid>
      </PageSection>
    </Root>
  );
};

export default withTheme(MediaPage);
