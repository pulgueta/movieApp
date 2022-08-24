import { signInWithEmailAndPassword } from "firebase/auth";

import { AUTH } from "../firebase";
import { loginProps } from "../../interfaces/types";

export const firebaseLogin = async ({ email, password }: loginProps) => {
  return await signInWithEmailAndPassword(AUTH, email, password)
    .then(({ user }) => {
      localStorage.setItem("uid", user.uid);
    })
    .catch((err) => console.log(err.code));
};
