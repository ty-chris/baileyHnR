import React from "react";
import { useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';

import Popup from "./Popup"
import OtherHome from "./OtherHome"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    position: 'fixed',
    padding: 0,
    top: 0,
    left: 0,
    flexWrap: 'wrap',
    margin: 'auto',
    overflow: 'scroll',
  },
  window: {
    flexGrow: 1,
    margin: 'auto',
    width: "80%",
    maxWidth: "700px",
    height: "66%",
    postition: "justify",
    align: 'center',
  },
  form: {
    margin: '20px',
  },
  field: {
    width: '100%',
  },
  dropdown: {
    width: '100%',
  },
  formControl: {
    minWidth: '100%',
  },

  header: {
    color: "#202124",
    fontFamily: 'Google Sans,Noto Sans Myanmar UI,arial,sans-serif',
    fontSize: '24px',
    fontWeight: 400,
    lineHeight: 1.3333,
  },
}));

const Login = () => {
  let history = useHistory();
  const classes = useStyles();
  const [firstName, setFirstName] = React.useState('First Name');
  const [lastName, setLastName] = React.useState('');
  const [username, setUsername] = React.useState('us3rn@me');
  const [password, setPassword] = React.useState('');
  const [confirm, setConfirm] = React.useState('');
  const [day, setDay] = React.useState('1');
  const [month, setMonth] = React.useState('1');
  const [year, setYear] = React.useState('1900');
  const [age, setAge] = React.useState(1);


  const [nameMsg, setNameMsg] = React.useState('');
  const [usernameMsg, setUsernameMsg] = React.useState('You can use letters & numbers.');
  const [passwordMsg, setPasswordMsg] = React.useState('Use 8 or more characters with a mix of letters, numbers & symbols.');
  const [ageMsg, setAgeMsg] = React.useState('');

  const [nameErrStatus, setNameErrStatus] = React.useState(null);
  const [usernameErrStatus, setUsernameErrStatus] = React.useState(null);
  const [passErrStatus, setPassErrStatus] = React.useState(null);
  const [ageErrStatus, setAgeErrStatus] = React.useState(null);

  const handleChange = (event, newValue) => {
    setAge(newValue);
  };

  const checkFields = () => {
    checkName();
    checkUsername();
    checkPassword();
    checkAge();
    if (!nameErrStatus && !usernameErrStatus && !passErrStatus && !ageErrStatus && 
      (nameErrStatus !== null || usernameErrStatus !== null || passErrStatus !== null || ageErrStatus !== null)) {
      console.log("final:"+passErrStatus);
      history.push('/home')
    }
  };

  const checkName = () => {
    if (firstName === "" && lastName === "") {
      setNameErrStatus(true);
      setNameMsg("Enter first and last name.");
    } else if (firstName === "") {
      setNameErrStatus(true);
      setNameMsg("Enter first name.");
    } else if (lastName === "") {
      setNameErrStatus(true);
      setNameMsg("Enter last name.");
    } else {
      setNameErrStatus(false);
      setNameMsg("");
    }
  };
  const checkUsername = () => {
    var patt = /[^\w]/i;
    if (username === ""){
      setUsernameMsg("Enter username.");
      setUsernameErrStatus(true);
    }else if (patt.test(username)) {
      setUsernameMsg("Sorry, only letters (a-z) and numbers (0-9) are allowed.");
      setUsernameErrStatus(true);
    } else {
      setUsernameMsg("You can use letters & numbers.");
      setUsernameErrStatus(false);
    }
  };

  const checkPassword = () => {
    var uppCasePatt = /[A-Z]/i;
    var lowCasePatt = /[a-z]/i;
    var numberPatt = /[0-9]/i;
    var chinesePatt = /[\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d]/i;


    if (password === "" && confirm === "") {
      setPassErrStatus(true);
      setPasswordMsg("Enter password and confirm the password.");
    } else if (password === "") {
      setPassErrStatus(true);
      setPasswordMsg("Enter password.");
    } else if (confirm === "") {
      setPassErrStatus(true);
      setPasswordMsg("Confirm the password.");
    } else if (password.length !== 9){
      setPassErrStatus(true);
      setPasswordMsg("Password should consist exactly 9 characters.");
    } else if (!uppCasePatt.test(password)){
      setPassErrStatus(true);
      setPasswordMsg("Password should consist at least 1 uppercase alphabet.");
    } else if (!lowCasePatt.test(password)){
      setPassErrStatus(true);
      setPasswordMsg("Password should consist at least 1 lowercase alphabet.");
    } else if (!numberPatt.test(password)){
      setPassErrStatus(true);
      setPasswordMsg("Password should consist at least 1 number.");
    } else if (!chinesePatt.test(password)){
      setPassErrStatus(true);
      setPasswordMsg("Password should consist at least 1 chinese character.");
    } else if (password !== confirm) {
      setPasswordMsg("Password do not match.");
      setPassErrStatus(true);
    } else {
      setPasswordMsg("Use 9 characters with a mix of letters, numbers & chinese characters.");
      setPassErrStatus(false);
    }
  };

  const checkAge = () => {
    if ((2021 - parseInt(year)) === parseInt(age)) {
      setAgeMsg("");
      setAgeErrStatus(false);
    } else {
      setAgeMsg("Age and date of birth do not match.");
      setAgeErrStatus(true);
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh' }}
      >
        <Grid item xs={12}>
          <Paper container className={classes.window} spacing={3}>
            <form
              className={classes.form} noValidate autoComplete="off"
            >
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <span className={classes.header}>Create your TrollTube Account</span>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={nameErrStatus}
                    className={classes.field}
                    label="First Name"
                    variant="outlined"
                    value={firstName}
                    helperText={nameMsg}
                    onChange={e => setFirstName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    error={nameErrStatus}
                    className={classes.field}
                    label="Last Name"
                    variant="outlined"
                    value={lastName}
                    onChange={e => setLastName(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  {/* <TextField className={classes.field} label="Username" variant="outlined" value={username} onChange={e => setUsername(e.target.value)} /> */}
                  <TextField
                    label="Username"
                    error={usernameErrStatus}
                    value={username}
                    className={classes.field}
                    onChange={e => setUsername(e.target.value)}
                    helperText={usernameMsg}
                    InputProps={{
                      endAdornment: <InputAdornment position="end">@trollmail.com</InputAdornment>,
                    }}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    error={passErrStatus}
                    label="Password"
                    variant="outlined"
                    value={password}
                    helperText={passwordMsg}
                    onChange={e => setPassword(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12} sm={6}>
                  <TextField
                    className={classes.field}
                    error={passErrStatus}
                    label="Confirm"
                    variant="outlined"
                    value={confirm}
                    onChange={e => setConfirm(e.target.value)} />
                </Grid>

                <Grid item xs={12} >
                  <Typography id="non-linear-slider" gutterBottom>
                    Date of Birth
            </Typography></Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl error={ageErrStatus} variant="outlined" className={classes.formControl}>
                    <InputLabel>Day</InputLabel>
                    <Select
                      className={classes.dropdown}
                      value={day}
                      onChange={e => setDay(e.target.value)}
                      label="Day"
                    >
                      <MenuItem value={16}>16</MenuItem>
                      <MenuItem value={31}>31</MenuItem>
                      <MenuItem value={14}>14</MenuItem>
                      <MenuItem value={19}>19</MenuItem>
                      <MenuItem value={12}>12</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={21}>21</MenuItem>
                      <MenuItem value={25}>25</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={15}>15</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={10}>10</MenuItem>
                      <MenuItem value={13}>13</MenuItem>
                      <MenuItem value={29}>29</MenuItem>
                      <MenuItem value={18}>18</MenuItem>
                      <MenuItem value={22}>22</MenuItem>
                      <MenuItem value={20}>20</MenuItem>
                      <MenuItem value={28}>28</MenuItem>
                      <MenuItem value={30}>30</MenuItem>
                      <MenuItem value={23}>23</MenuItem>
                      <MenuItem value={17}>17</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={27}>27</MenuItem>
                      <MenuItem value={24}>24</MenuItem>
                      <MenuItem value={11}>11</MenuItem>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={26}>26</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl error={ageErrStatus} variant="outlined" className={classes.formControl}>
                    <InputLabel>Month</InputLabel>
                    <Select
                      className={classes.dropdown}
                      value={month}
                      onChange={e => setMonth(e.target.value)}
                      label="Month"
                    >
                      <MenuItem value={5}>May</MenuItem>
                      <MenuItem value={9}>September</MenuItem>
                      <MenuItem value={12}>December</MenuItem>
                      <MenuItem value={7}>July</MenuItem>
                      <MenuItem value={2}>Febuary</MenuItem>
                      <MenuItem value={11}>November</MenuItem>
                      <MenuItem value={4}>April</MenuItem>
                      <MenuItem value={8}>August</MenuItem>
                      <MenuItem value={10}>October</MenuItem>
                      <MenuItem value={6}>June</MenuItem>
                      <MenuItem value={3}>March</MenuItem>
                      <MenuItem value={1}>January</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <FormControl error={ageErrStatus} variant="outlined" className={classes.formControl}>
                    <InputLabel>Year</InputLabel>
                    <Select
                      className={classes.dropdown}
                      value={year}
                      onChange={e => setYear(e.target.value)}
                      label="Year"
                    >
                      <MenuItem value={2020}>2020</MenuItem>
                      <MenuItem value={2019}>2019</MenuItem>
                      <MenuItem value={2018}>2018</MenuItem>
                      <MenuItem value={2017}>2017</MenuItem>
                      <MenuItem value={2016}>2016</MenuItem>
                      <MenuItem value={2015}>2015</MenuItem>
                      <MenuItem value={2014}>2014</MenuItem>
                      <MenuItem value={2013}>2013</MenuItem>
                      <MenuItem value={2012}>2012</MenuItem>
                      <MenuItem value={2011}>2011</MenuItem>
                      <MenuItem value={2010}>2010</MenuItem>
                      <MenuItem value={2009}>2009</MenuItem>
                      <MenuItem value={2008}>2008</MenuItem>
                      <MenuItem value={2007}>2007</MenuItem>
                      <MenuItem value={2006}>2006</MenuItem>
                      <MenuItem value={2005}>2005</MenuItem>
                      <MenuItem value={2004}>2004</MenuItem>
                      <MenuItem value={2003}>2003</MenuItem>
                      <MenuItem value={2002}>2002</MenuItem>
                      <MenuItem value={2001}>2001</MenuItem>
                      <MenuItem value={2000}>2000</MenuItem>
                      <MenuItem value={1999}>1999</MenuItem>
                      <MenuItem value={1998}>1998</MenuItem>
                      <MenuItem value={1997}>1997</MenuItem>
                      <MenuItem value={1996}>1996</MenuItem>
                      <MenuItem value={1995}>1995</MenuItem>
                      <MenuItem value={1994}>1994</MenuItem>
                      <MenuItem value={1993}>1993</MenuItem>
                      <MenuItem value={1992}>1992</MenuItem>
                      <MenuItem value={1991}>1991</MenuItem>
                      <MenuItem value={1990}>1990</MenuItem>
                      <MenuItem value={1989}>1989</MenuItem>
                      <MenuItem value={1988}>1988</MenuItem>
                      <MenuItem value={1987}>1987</MenuItem>
                      <MenuItem value={1986}>1986</MenuItem>
                      <MenuItem value={1985}>1985</MenuItem>
                      <MenuItem value={1984}>1984</MenuItem>
                      <MenuItem value={1983}>1983</MenuItem>
                      <MenuItem value={1982}>1982</MenuItem>
                      <MenuItem value={1981}>1981</MenuItem>
                      <MenuItem value={1980}>1980</MenuItem>
                      <MenuItem value={1979}>1979</MenuItem>
                      <MenuItem value={1978}>1978</MenuItem>
                      <MenuItem value={1977}>1977</MenuItem>
                      <MenuItem value={1976}>1976</MenuItem>
                      <MenuItem value={1975}>1975</MenuItem>
                      <MenuItem value={1974}>1974</MenuItem>
                      <MenuItem value={1973}>1973</MenuItem>
                      <MenuItem value={1972}>1972</MenuItem>
                      <MenuItem value={1971}>1971</MenuItem>
                      <MenuItem value={1970}>1970</MenuItem>
                      <MenuItem value={1969}>1969</MenuItem>
                      <MenuItem value={1968}>1968</MenuItem>
                      <MenuItem value={1967}>1967</MenuItem>
                      <MenuItem value={1966}>1966</MenuItem>
                      <MenuItem value={1965}>1965</MenuItem>
                      <MenuItem value={1964}>1964</MenuItem>
                      <MenuItem value={1963}>1963</MenuItem>
                      <MenuItem value={1962}>1962</MenuItem>
                      <MenuItem value={1961}>1961</MenuItem>
                      <MenuItem value={1960}>1960</MenuItem>
                      <MenuItem value={1959}>1959</MenuItem>
                      <MenuItem value={1958}>1958</MenuItem>
                      <MenuItem value={1957}>1957</MenuItem>
                      <MenuItem value={1956}>1956</MenuItem>
                      <MenuItem value={1955}>1955</MenuItem>
                      <MenuItem value={1954}>1954</MenuItem>
                      <MenuItem value={1953}>1953</MenuItem>
                      <MenuItem value={1952}>1952</MenuItem>
                      <MenuItem value={1951}>1951</MenuItem>
                      <MenuItem value={1950}>1950</MenuItem>
                      <MenuItem value={1949}>1949</MenuItem>
                      <MenuItem value={1948}>1948</MenuItem>
                      <MenuItem value={1947}>1947</MenuItem>
                      <MenuItem value={1946}>1946</MenuItem>
                      <MenuItem value={1945}>1945</MenuItem>
                      <MenuItem value={1944}>1944</MenuItem>
                      <MenuItem value={1943}>1943</MenuItem>
                      <MenuItem value={1942}>1942</MenuItem>
                      <MenuItem value={1941}>1941</MenuItem>
                      <MenuItem value={1940}>1940</MenuItem>
                      <MenuItem value={1939}>1939</MenuItem>
                      <MenuItem value={1938}>1938</MenuItem>
                      <MenuItem value={1937}>1937</MenuItem>
                      <MenuItem value={1936}>1936</MenuItem>
                      <MenuItem value={1935}>1935</MenuItem>
                      <MenuItem value={1934}>1934</MenuItem>
                      <MenuItem value={1933}>1933</MenuItem>
                      <MenuItem value={1932}>1932</MenuItem>
                      <MenuItem value={1931}>1931</MenuItem>
                      <MenuItem value={1930}>1930</MenuItem>
                      <MenuItem value={1929}>1929</MenuItem>
                      <MenuItem value={1928}>1928</MenuItem>
                      <MenuItem value={1927}>1927</MenuItem>
                      <MenuItem value={1926}>1926</MenuItem>
                      <MenuItem value={1925}>1925</MenuItem>
                      <MenuItem value={1924}>1924</MenuItem>
                      <MenuItem value={1923}>1923</MenuItem>
                      <MenuItem value={1922}>1922</MenuItem>
                      <MenuItem value={1921}>1921</MenuItem>
                      <MenuItem value={1920}>1920</MenuItem>
                      <MenuItem value={1919}>1919</MenuItem>
                      <MenuItem value={1918}>1918</MenuItem>
                      <MenuItem value={1917}>1917</MenuItem>
                      <MenuItem value={1916}>1916</MenuItem>
                      <MenuItem value={1915}>1915</MenuItem>
                      <MenuItem value={1914}>1914</MenuItem>
                      <MenuItem value={1913}>1913</MenuItem>
                      <MenuItem value={1912}>1912</MenuItem>
                      <MenuItem value={1911}>1911</MenuItem>
                      <MenuItem value={1910}>1910</MenuItem>
                      <MenuItem value={1909}>1909</MenuItem>
                      <MenuItem value={1908}>1908</MenuItem>
                      <MenuItem value={1907}>1907</MenuItem>
                      <MenuItem value={1906}>1906</MenuItem>
                      <MenuItem value={1905}>1905</MenuItem>
                      <MenuItem value={1904}>1904</MenuItem>
                      <MenuItem value={1903}>1903</MenuItem>
                      <MenuItem value={1902}>1902</MenuItem>
                      <MenuItem value={1901}>1901</MenuItem>
                      <MenuItem value={1900}>1900</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <Typography id="non-linear-slider" gutterBottom>
                    Age
              </Typography>
                  <Slider
                    error={ageErrStatus}
                    value={age}
                    min={0}
                    step={1}
                    max={100}
                    onChange={handleChange}
                    helperText={ageMsg}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                  />
                </Grid>

                <Grid item className={classes.button} xs={12} sm={6}>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={checkFields}>Next</Button>
                </Grid>
                <Grid item className={classes.button} xs={12} sm={6}>
                  <Popup/>
              </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </div >

  );
};

export default Login;
