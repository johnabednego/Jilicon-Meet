import { Metadata } from "next";
import MyMeetingsPage from "./MyMeetingsPage";

export const metadata: Metadata = {
  title: "Jilicon Meet",
};

export default function Page() {
  return <MyMeetingsPage />;
}
