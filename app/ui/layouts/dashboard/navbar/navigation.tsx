import type React from "react";
import Icon from "@/app/ui/icon";
import Menu from "@/app/ui/layouts/dashboard/navbar/menu";

const Navigation: React.FC = () => {
  return (
    <Menu>
      <Menu.Wrapper>
        <Menu.Item href="/">Home</Menu.Item>
        <Menu.Item href="/dashboard">Dashboard</Menu.Item>
        <Menu.Item href="/dashboard/projects">Projects</Menu.Item>
        <Menu.Item href="/dashboard/tasks">Tasks</Menu.Item>
        <Menu.Item href="/dashboard/reporting">Reporting</Menu.Item>
        <Menu.Item href="/dashboard/users">Users</Menu.Item>
      </Menu.Wrapper>
      <Menu.Action>
        <Menu.Action.Item href="/dashboard">Upgrade now</Menu.Action.Item>
        <Menu.Action.Item href="/dashboard">
          <Icon.Setting />
        </Menu.Action.Item>
        <Menu.Action.Item href="/dashboard">
          <Icon.Notification />
        </Menu.Action.Item>
        <Menu.Action.ItemSignOut>
          <Icon.SignOut />
        </Menu.Action.ItemSignOut>
      </Menu.Action>
    </Menu>
  );
};

Navigation.displayName = "Navigation";

export default Navigation;
