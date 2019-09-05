import styled from "styled-components";

export default styled.img`
  width: 1rem;
  height: 1rem;
  box-sizing: border-box;
  margin-left: 1rem;
  // filter: invert(7%) sepia(6%) saturate(2428%) hue-rotate(28deg) brightness(91%)
  //   contrast(93%) opacity(90%);

  filter: invert(18%) sepia(17%) saturate(2735%) hue-rotate(351deg)
    brightness(99%) contrast(90%);

  &:hover {
    cursor: pointer;
  }
`;
