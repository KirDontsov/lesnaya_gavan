import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaskInput from "./MaskInput";
import Arrow from "./Arrow";
import { connect } from "react-redux";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "../scss/Form.scss";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(",")
  },
  palette: {
    primary: {
      main: "#4ca376"
    },
    secondary: {
      main: "#4ca376"
    }
  }
});

class Form extends Component {
  render() {
    const { email, phone, name } = this.props;
    const values = {
      email,
      phone,
      name
    };
    if (this.props.type === "sectionForm") {
      return (
        <ThemeProvider theme={theme}>
          <form action="" className={this.props.type}>
            <h3 className="fromTitle">
              Хотите получить больше информации о нашей гостинице?
            </h3>

            <p className="fieldTitle">Ваше Имя</p>
            <TextField
              onChange={e => this.props.setName(e.currentTarget.value)}
              value={values.name}
              margin="normal"
              fullWidth={true}
              required
            />
            {values.name.length !== 0 && (
              <span className="errorMessage">Введите Имя</span>
            )}

            <p className="fieldTitle">Ваш Телефон</p>
            <MaskInput
              name="phone"
              mask="+7 (999) 999-99-99"
              // component={MaskInput}
              label="Required"
              type="text"
              value={values.phone}
              onChange={e => this.props.setPhone(e.currentTarget.value)}
              fullWidth={true}
            />
            <p className="fieldTitle">Ваш Email</p>
            <TextField
              onChange={e => this.props.setEmail(e.currentTarget.value)}
              value={values.email}
              margin="normal"
              fullWidth={true}
              required
            />
            {values.email.length !== 0 && !values.email.includes("@") && (
              <span className="errorMessage">
                Введен некорректный адрес почты
              </span>
            )}

            <div className="btn__container">
              <Button
                variant="contained"
                onClick={e => this.props.changeDisabled()}
                className="next btn send"
              >
                {this.props.fetching ? "Отправка..." : "Отправить"}
              </Button>
              <Arrow />
              {this.props.res ? (
                <div className="alert">Сообщение оправлено</div>
              ) : null}
            </div>
          </form>
        </ThemeProvider>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <form action="" className={this.props.type}>
          <h3 className="fromTitle">
            Хотите получить больше информации о нашей гостинице?
          </h3>
          <MaskInput
            name="phone"
            mask="+7 (999) 999-99-99"
            // component={MaskInput}
            label="Required"
            formLabel="Телефон"
            type="text"
            value={values.phone}
            onChange={e => this.props.setPhone(e.currentTarget.value)}
            fullWidth={true}
          />

          <TextField
            label="Email"
            onChange={e => this.props.setEmail(e.currentTarget.value)}
            value={values.email}
            margin="normal"
            fullWidth={true}
            required
          />
          {values.email.length !== 0 && !values.email.includes("@") && (
            <span className="errorMessage">
              Введен некорректный адрес почты
            </span>
          )}
          <br />

          <div className="btn__container">
            <Button
              variant="contained"
              onClick={e => this.props.changeDisabled()}
              className="next btn send"
            >
              {this.props.fetching ? "Отправка..." : "Отправить"}
            </Button>
            <Arrow />
            {this.props.res ? (
              <div className="alert">Сообщение оправлено</div>
            ) : null}
          </div>
        </form>
      </ThemeProvider>
    );
  }
}

const mapState = state => ({
  email: state.form.email,
  phone: state.form.phone,
  name: state.form.name,
  fetching: state.form.fetching,
  res: state.form.res
});

const mapDispatch = ({
  shutter: { changeClass },
  form: { setEmail, setPhone, setName, changeDisabled }
}) => ({
  changeClass,
  setEmail,
  setPhone,
  setName,
  changeDisabled
});

export default connect(mapState, mapDispatch)(Form);
