import React from "react";
import InputMask from "react-input-mask";
import TextField from "@material-ui/core/TextField";
// import classnames from "classnames";

const MaskInput = props => {
  const { mask, formLabel, onChange, value, name, fullWidth } = props;
  return (
    <div className="form-group">
      <InputMask
        mask={mask}
        autoComplete="off"
        value={value}
        onChange={onChange}
      >
        {() => {
          return (
            <TextField
              name={name}
              label={formLabel}
              value={value}
              margin="normal"
              fullWidth={fullWidth}
              required
              type="text"
            />
          );
        }}
      </InputMask>
    </div>
  );
};

export default MaskInput;
