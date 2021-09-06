import { render, fireEvent } from "./../../test-utils";
import { Navbar } from "./../../components/navbar";
import { leagues } from "./../../data";

const rednerNavbar = (props) => {
  const utils = render(<Navbar {...props} />);
  return { ...utils };
};

describe("Navbar component", () => {
  test("render navbar properly", () => {
    const { getByText } = rednerNavbar();
    expect(getByText("football app")).toBeInTheDocument();
  });

  test("open and close the leagues wrapper component", () => {
    const { getByTestId, container } = rednerNavbar();

    leagues.forEach((el) => {
      expect(container).not.toHaveTextContent(el.name);
    });

    const leagueIconBtn = getByTestId("leagueIconBtn");
    fireEvent.click(leagueIconBtn);

    const leagueWrapper = getByTestId("leagueWrapper");
    expect(leagueWrapper).toBeTruthy();

    const outsideClickWrapper = getByTestId("outsideClickWrapper");
    fireEvent.click(outsideClickWrapper);

    leagues.forEach((el) => {
      expect(container).not.toHaveTextContent(el.name);
    });
  });

  test("check default league logo", () => {
    const { getByAltText } = rednerNavbar();
    expect(getByAltText("Premier League Logo")).toBeTruthy();
  });

  test("redirect to league view after click in league logo", () => {
    const { getByTestId, getByAltText, getByText } = rednerNavbar();
    const leagueIconBtn = getByTestId("leagueIconBtn");
    fireEvent.click(leagueIconBtn);

    const leagueWrapper = getByTestId("leagueWrapper");
    expect(leagueWrapper).toBeInTheDocument();

    const linkBeforeClicking = document.URL;

    const testLogo = getByTestId("cardLink-4331");
    fireEvent.click(testLogo);

    expect(leagueWrapper).not.toBeInTheDocument();

    const linkAfterClicking = document.URL;

    expect(linkBeforeClicking).not.toBe(linkAfterClicking);
    expect(linkAfterClicking).toBe("http://localhost/liga/4331");
  });

  test("redirect to root view after clik in App logo", () => {
    const { getByText } = rednerNavbar();
    const appLogo = getByText(/football app/i);
    fireEvent.click(appLogo);
    const url = document.URL;
    expect(url).toBe("http://localhost/");
  });
});
