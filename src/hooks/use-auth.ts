import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const signInSchema = z.object({
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "At least 6 characters required"),
});

const signUpSchema = z.object({
  firstName: z.string().min(3, "At least 3 characters required"),
  lastName: z.string().min(3, "At least 3 characters required"),
  email: z.string().email("Invalid Email Address"),
  password: z.string().min(6, "At least 6 characters required"),
});

type SignInData = z.infer<typeof signInSchema>;
type SignUpData = z.infer<typeof signUpSchema>;

export const useAuth = () => {
  const { signIn, signOut } = useAuthActions();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const signInForm = useForm<SignInData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const signUpForm = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const handleSignIn = async (data: SignInData) => {
    try {
      setIsLoading(true);
      await signIn("password", {
        email: data.email,
        password: data.password,
        flow: "signIn",
      });
      router.push("/dashboard");
    } catch (error) {
      console.log("Sign in error:", error);
      signInForm.setError("password", {
        message: "Invalid email or password",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (data: SignUpData) => {
    try {
      setIsLoading(true);
      await signIn("password", {
        email: data.email,
        password: data.password,
        name: `${data.firstName} ${data.lastName}`,
        flow: "signUp",
      });
      router.push("/dashboard");
    } catch (error) {
      console.log("Sign up error:", error);
      signUpForm.setError("root", {
        message: "Failed to create account. Email may be already registered.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      router.push("/auth/sign-in");
    } catch (error) {
      console.log("Sign out error:", error);
      setIsLoading(false);
    }
  };

  return {
    signInForm,
    signUpForm,
    handleSignIn,
    handleSignOut,
    isLoading,
    setIsLoading,
  };
};
