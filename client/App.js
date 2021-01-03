import React from "react";
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import themeConstants from 'constants/theme'
import MainNav from 'components/Navbar';
import Feed from 'components/Feed';
import Trending from 'components/Trending';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${props => props.theme.color.appBg};
  }
`;

class App extends React.Component {
  render() {
    const { name } = this.props;
    return (
      <>
        <ThemeProvider theme={themeConstants.getTheme()}>
          <GlobalStyle />
          <>
            <MainNav />
            <Feed />
            <Trending />
          </>
        </ThemeProvider>
      </>
    );
  }
}

export default App;
