import React from 'react';
import styled from 'styled-components';
import ChannelAnalysisContainer from '../analysis/channel/ChannelAnalysisContainer';
import VideoAnalysisContainer from '../analysis/video/VideoAnalysisContainer';
import ViewersAnalysisContainer from '../analysis/views/ViewersAnalysisContainer';
import qs from 'qs';

const AnalysisContainerBlock = styled.div`
    width: 1080px;
    padding-top: 1.6rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const AnalysisContainer = ({ match }) => {
    const { type } = match.params;

    return (
        <AnalysisContainerBlock>
            {type === 'viewer' ? (
                <ViewersAnalysisContainer />
            ) : type === 'video' ? (
                <VideoAnalysisContainer />
            ) : type === 'channel' ? (
                <ChannelAnalysisContainer />
            ) : null}
        </AnalysisContainerBlock>
    );
};

export default AnalysisContainer;
