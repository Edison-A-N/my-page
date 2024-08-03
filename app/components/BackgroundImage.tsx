'use client';

import { Box } from '@mui/material';
import styled from 'styled-components';

export const BackgroundImage = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 300px; // 调整该值以更改背景图的高度
  background-image: url('/path-to-your-image.jpg'); // 替换为你的图像路径
  background-size: cover;
  background-position: center;
  z-index: -1;
`;
