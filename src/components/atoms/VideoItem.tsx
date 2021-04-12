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

const HoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.cta.default};

  transition: all 0.14s linear;
`;

const Root = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  border: 5px solid ${({ theme }) => theme.colors.cta.default};
  box-sizing: border-box;
  overflow: hidden;
  cursor: pointer;

  &:hover > #hover-box {
    top: 0%;
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 100%;
  transform: scale(1);
  object-fit: cover;
  filter: brightness(1);
  opacity: 1;
`;

const VideoItem = ({ video, theme }: VideoItemProps) => {
  return (
    <Root
      onClick={() => {
        window.location.href = `https://www.youtube.com/watch?v=${video.id.videoId}`;
      }}>
      <CoverImage src={video.snippet.thumbnails.high.url} />
      <HoverBox id="hover-box">
        <Text
          style={{ textAlign: "center", padding: 16, boxSizing: "border-box" }}
          variant="medium"
          color={theme.colors.accent.default}>
          {video.snippet.title}
        </Text>
      </HoverBox>
    </Root>
  );
};

export default withTheme(VideoItem);
