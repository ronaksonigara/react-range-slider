import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-botom: 5px;
`;

const SliderWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SliderContainer = styled(SliderWrapper)`
  margin-bottom: ${(props) => (props.helperText ? "10px" : "30px")};
`;

const Slider = styled.div`
  position: relative;
  height: 16px;
  flex-grow: 1;
  margin-right: 10px;
`;

const SliderBar = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 5px;
  border-radius: 5px;
  background-color: #ccc;
  overflow: hidden;
`;

const SliderBarFill = styled.div`
  width: ${(props) => `${props.value}%`};
  height: 100%;
  background-color: ${(props) => (props.disabled ? "#89d8b1" : "#0f9d58")};
`;

const SliderInput = styled.input`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 2;
  -webkit-appearance: none;
  margin: 0;
  width: 100%;
  height: 5px;
  border-radius: 5px;
  outline: none;
  background-color: transparent;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    background-color: #fff;
    border: 2px solid ${(props) => (props.disabled ? "#89d8b1" : "#0f9d58")};
    border-radius: 50%;
    ${(props) => (props.disabled ? "pointer-event:none;" : "cursor: pointer;")}

    outline: none;
    &:hover {
      box-shadow: ${(props) =>
        props.disabled ? "none" : "0 0 0 5px rgba(24, 255, 144, 0.12)"};
    }
  }
`;

const HelperText = styled.div`
  margin-top: 5px;
  font-size: 12px;
  color: ${(props) => (props.error ? "#ff653f" : "#6f6f6f")};
`;

const Label = styled.label`
  color: ${(props) => (props.error ? "#ff653f" : "#6f6f6f")};
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-bottom: 10px;
  display: block;
`;

const InputNumber = styled.input.attrs((props) => ({
  type: "number",
}))``;

const SliderBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SliderToolTip = styled.span`
  display: inline-block;
  position: relative;
  border: 1px solid #0f9d58;
  padding: 3px;
  font-size: 12px;
  line-height: 12px;
  border-radius: 5px;
  width: 50px;
  flex-shrink: 0;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 4px;
    height: 4px;
    border-right: 1px solid #0f9d58;
    border-top: 1px solid #0f9d58;
    right: 100%;
    top: 50%;
    transform: rotate(-135deg) translateY(50%);
  }
`;

const propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  helperText: PropTypes.string,
  isError: PropTypes.bool,
  showTooltip: PropTypes.bool,
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  disabled: PropTypes.bool,
  showInput: PropTypes.bool,
};

const defaultProps = {
  value: 0,
  min: 0,
  max: 100,
  step: 1,
  showTooltip: true,
  showInput: false,
  disabled: false,
  helperText: "",
  isError: false,
};

const calculateValue = (value, min, max) => {
  if (value < min) {
    return min;
  } else if (value > max) {
    return max;
  } else {
    return value;
  }
};

const calculatePercent = (value, min, max) => {
  if (value < min) {
    return 0;
  }
  return ((value - min) / (max - min)) * 100;
};

const RangeSlider = (props) => {
  const {
    onChange,
    value,
    min,
    max,
    step,
    helperText,
    isError,
    showTooltip,
    label,
    id,
    disabled,
    showInput,
    ...otherProps
  } = props;
  const tempVaue = calculateValue(value, min, max);
  const [currentValue, setCurentValue] = useState(tempVaue);
  const [inputError, setError] = useState("");
  const handleChange = () => {
    const { value } = event.target;

    if (value > max || value < min) {
      setError(`Enter value between ${min} - ${max}`);
    } else {
      if (Boolean(inputError)) {
        setError("");
      }
      if (onChange) {
        onChange(value);
      }
    }
    setCurentValue(Number(value));
  };

  const handleFocus = () => {
    if (Boolean(inputError)) {
      setError("");
    }
  };

  const renderWrapper = (child1, child2) => {
    return (
      <Container>
        <SliderContainer helperText={Boolean(helperText.trim())}>
          {child1}
          {child2}
        </SliderContainer>
        {showInput && (
          <>
            <InputNumber
              onChange={handleChange}
              onFocus={handleFocus}
              value={Boolean(currentValue) ? currentValue : ""}
              disabled={disabled}
            />
            <HelperText error={true}>{inputError}</HelperText>
          </>
        )}
      </Container>
    );
  };

  const renderHelper = () => {
    if (helperText) {
      return <HelperText error={isError}>{helperText}</HelperText>;
    }

    return null;
  };

  const slider = () => {
    return (
      <SliderWrapper>
        {label && (
          <Label error={isError} htmlFor={id}>
            {label}
          </Label>
        )}
        <SliderBox>
          <Slider>
            <SliderBar>
              <SliderBarFill
                disabled={disabled}
                value={calculatePercent(currentValue, min, max)}
              />
            </SliderBar>
            <SliderInput
              id={id}
              disabled={disabled}
              type="range"
              step={step}
              min={min}
              max={max}
              value={currentValue}
              onChange={handleChange}
              {...otherProps}
            />
          </Slider>
          {showTooltip && (
            <SliderToolTip value={calculatePercent(currentValue, min, max)}>
              {calculateValue(currentValue, min, max)}
            </SliderToolTip>
          )}
        </SliderBox>
      </SliderWrapper>
    );
  };

  return <>{renderWrapper(slider(), renderHelper())}</>;
};

RangeSlider.propTypes = propTypes;
RangeSlider.defaultProps = defaultProps;

export default RangeSlider;
