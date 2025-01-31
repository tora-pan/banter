import tw from "tailwind-styled-components/dist/tailwind";
import { setUserSettingsOpen, useSettingsState } from "../../features/settings";
import SettingsSidebar from "./SettingsSidebar";
import SettingsView from "./SettingsView";
import LogoutConfirm from "./LogoutConfirm";
import Image from "next/image";
import closeButton from "../../../assets/closeButton.svg";
import { useAppDispatch } from "../../redux/hooks";

export default function UserSettings() {
  const { userSettingsOpen, logoutConfirmOpen } = useSettingsState();
  const dispatch = useAppDispatch();

  return (
    <Container>
      {logoutConfirmOpen ? <LogoutConfirm /> : null}

      <SettingsSidebar />

      <SettingsView />

      <CloseButton>
        <StyledImage
          onClick={() => dispatch(setUserSettingsOpen(!userSettingsOpen))}
          src={closeButton}
          width={36}
          height={36}
          alt={"Close button"}
        />

        <Caption>ESC</Caption>
      </CloseButton>
    </Container>
  );
}

const Container = tw.div`
  flex w-screen h-screen
`;

const CloseButton = tw.figure`
  pt-15 text-center
`;

const StyledImage = tw(Image)`
  cursor-pointer
`;

const Caption = tw.figcaption`
`;
