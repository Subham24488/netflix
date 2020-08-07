import React, { useState, useEffect } from "react";
import { netflix } from "../../images/net.ico";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  console.log(show);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIcAAACHCAMAAAALObo4AAAAbFBMVEUAAACxBg/lCRSCBQu2Bg+SBQ3oCRStBg+qBg/rCRSjBQ+mBg+YBQ3vCRWbBQ7IBxGNBA3aCBOIBAzQCBJ6BAseAQNXAwhzBAo7AgXBBhFOAwdBAgZeAwgXAQIzAgU+AAZnBAkkAQMpAgRHAwb44ZTYAAAD90lEQVR4nO3b227rKhAGYNuYM55gQk5t2pW18/7vuCHtihwzS9oXZawtMZeRpXzi5zDFTde1atWqVatWrVq1+l+U3+/WdVk9EsGtCk4/79BiXdP59RE+FsV+3MHmYV0a1o5+VRUccSfWDrE/0DuYLByDPm7gUHMB0WoDxziWAzK/BEPkMAVj0C/rksgB+zKYfgOHUroYkGkDh4RyC5mWwRA5ekC2kHEDh4GpnKqLvZ3KoULJmBbfROXo+aUMZnHokjkMlAMyvNE7lEf2dk7vkH4sthAx0zt64MhMfad3GI/s7YbeYX1fBvPshugcChhyxlzJHdIwJBhJ7kjBIO3h/EHuUA7Z2/90Q57OIYGVh64e6R3Gm3KmanJHb3lAuqH45VgzKjrSBEEO3ZHcISE4pBv6JHcYHkvGFB4OKckcvXUMCWaXHwmUDgXelQMy3MkdKRjkCsJlhyJ0SOPYX7ohZteQmg4FgZdnzPSL2JGC8diha9Mjxq5mSF0HZxLphn530RhF55DWBVZuZdOxi0DqUMAjegVxArCK1MEU1g2d3HpAajrSBHHBF4xB3G60DmnBI7eYerx6B69Lt6qjtykYpBsSN58HhGw8HsEg3ZBWzK+Cqe1IA4IcunuWg6FzpAnCA0e6ofQpmOWWWtmhwHmkG9I946/B1HYY5xl2vZyDoXP0KgeDdUMuBbPcUis7HsEgL2TEmAZkGUx1h3GclVcQwxBfg6ntkAZSBCVjyivGkjnyynVYNyQujxVD50hbmWfIvf8cgiN05C3V+RvypsykAbGE45GDuSJ9+y76xQSpPh45GHdDBmTwy2BoHKcPZAtRKZjnyq3uyFsqnDrsFjOSOvKAxO6I9O0sOEvqMLH7jd1iMv6cIAQOaU36EosEwzyhIy/d9CW/ymAED88JQubokBcyI3OGzpEg+TKKI3t7fE4QEofMjnvBSN2QB3JHh7zTvTBnKR0+fx6Qvj0FI8kcff9wfJaMyQUgd3Rl3y4uwSlyRyyDmQO3dI7xy9Eh7x+M/5ogpA6sG2JA7zghfz98TxAax/cbdawbkt6SOzrsFpM9Jgit41quGM0eWzut44DdYj6CoXV05WWZ2HtD73jH7oaA3oF2Q17SO8puSMxe0TveylwGMPSODvtHKr6BA3kRMgRF7ziXjCkFQ+7AuqEdbOA4Id0QSHpHh5wxSm3gwK4gYAMH1g2ZDRwH7Hp5A0dX3mKKWW3gOCJvyuQGDqQbErtY0fH8Ucmro3OT0FMqrbX4Js1Vflcwjr20BniIp+vxfj7/8/rE4X5/u96ih/6y26dZK7Se/I87bj59+fvnx398/HA+3iIfw487WrVq1apVq1atWlWpfwHKckXEDVTxXgAAAABJRU5ErkJggg=="
        alt="Netflix logo"
      />
    </div>
  );
};

export default Nav;
