import React from 'react';
import styled from 'styled-components';
import { FaRegPlayCircle, FaRegCommentDots } from 'react-icons/fa';
import { BsPlay } from 'react-icons/bs';
import { FiThumbsUp, FiThumbsDown } from 'react-icons/fi';
const VideoPerformanceSummaryComponentWrap = styled.div`
    width: 1080px;
    box-shadow: none;
    position: relative;
    padding: 20px 25px 25px;
    margin-bottom: 20px;
    .channel-video-analysis-info-wrap {
        width: 100%;
        padding: 0 0 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        .video-analysis-block {
            width: 150px;
            display: flex;
            flex-direction: column;
            padding-right: 1rem;
            span {
                :first-child {
                    font-size: 20px;
                    font-weight: 700;
                }
                :last-child {
                    padding-left: 5px;
                }
            }
        }
    }
`;

const VideoPerformanceSummaryComponent = ({ channelDetail }) => {
    const { channel_statistics, channel_likeability_index } = channelDetail;
    const { view_count, video_count } = channel_statistics[0];
    const {
        total_likeability,
        total_dislike_ability,
        video_count_len,
        total_comment_count,
    } = channel_likeability_index;

    return (
        <VideoPerformanceSummaryComponentWrap>
            <div>closer food 채널 영상 퍼포먼스</div>
            <div className="channel-video-analysis-info-wrap">
                <p className="video-analysis-block">
                    <span>{video_count}</span>
                    <span>
                        <FaRegPlayCircle />
                        <span>영상수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>{Math.ceil(view_count / video_count)}</span>
                    <span>
                        <BsPlay />
                        <span>영상별평균조회수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>
                        {video_count_len == 0
                            ? 0
                            : Math.ceil(total_comment_count / video_count_len)}
                    </span>
                    <span>
                        <FaRegCommentDots />
                        <span>평균 댓글수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>
                        {video_count_len == 0
                            ? 0
                            : Math.ceil(total_likeability / video_count_len)}
                    </span>
                    <span>
                        <FiThumbsUp />
                        <span>평균 좋아요수</span>
                    </span>
                </p>
                <p className="video-analysis-block">
                    <span>
                        {video_count_len == 0
                            ? 0
                            : Math.ceil(
                                  total_dislike_ability / video_count_len,
                              )}
                    </span>
                    <span>
                        <FiThumbsDown />
                        <span>평균 싫어요수</span>
                    </span>
                </p>
            </div>
        </VideoPerformanceSummaryComponentWrap>
    );
};

export default VideoPerformanceSummaryComponent;
