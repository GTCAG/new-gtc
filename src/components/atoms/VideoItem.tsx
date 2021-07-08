import * as React from "react";
import styled, { DefaultTheme, withTheme } from "styled-components";
import Text from "../texts/Text";

interface VideoItemProps {
  video: Video;
  theme: DefaultTheme;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
export interface Video {
  etag: string;
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishTime: string;
    publishedAt: string;
    title: string;
    thumbnails: {
      default: Thumbnail;
      high: Thumbnail;
      medium: Thumbnail;
    };
  };
}

const Root = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary.default};
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  box-shadow: 0 7px 30px -10px rgba(0, 0, 0, 0.5);

  transition: all 0.8s ease;

  &:hover > div > img {
    transform: scale(1.18);
    brightness(1);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
  filter: brightness(0.8);
  transition: all 0.5s ease;
`;

const ImageContainer = styled.div`
  overflow: hidden;
  width: 100%;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoItem = ({ video, theme }: VideoItemProps) => {
  return (
    <Root
      onClick={() => {
        window.location.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      }}>
      <ImageContainer>
        <CoverImage src={video.snippet.thumbnails.high.url} />
      </ImageContainer>

      <Text
        variant="small"
        color={theme.colors.lights.offWhite}
        style={{ padding: 24 }}>
        {video.snippet.title}
      </Text>
    </Root>
  );
};

export default withTheme(VideoItem);
