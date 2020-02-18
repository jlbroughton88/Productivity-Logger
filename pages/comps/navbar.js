import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "use-auth0-hooks";

export default function Navbar() {
  const { pathname, query } = useRouter();
  const { isAuthenticated, isLoading, login, logout, user } = useAuth();
  if (isAuthenticated) {
    console.log("this is the user...");
    console.log(user);
  }

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          {!isLoading &&
            (isAuthenticated ? (
              <>
                <li>
                  <Link href="/profile">
                    <a>Profile</a>
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() =>
                      logout({
                        returnTo: "https://productivity-logger.now.sh/"
                      })
                    }
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <button
                  onClick={() =>
                    login({ appState: { returnTo: { pathname, query } } })
                  }
                >
                  Login
                </button>
              </li>
            ))}
          <button
            onClick={() =>
              logout({ returnTo: "https://productivity-logger.now.sh/" })
            }
          >
            TEST Logout
          </button>
        </ul>
      </nav>
    </header>
  );
}
