import React, { useState } from "react";
import { Menu, Button, rem } from "@mantine/core";
import {
  IconExternalLink,
  IconCheck,
  IconPhone,
  IconCreditCard,
  IconAlertCircle,
} from "@tabler/icons-react"; // استيراد أيقونات مختلفة
import { useMutate } from "../../hooks";
import { notify } from "../../utils/toast";

function MenuChangeStatus({ initialStatus, refetch, bookingId }) {
  const [status, setStatus] = useState(initialStatus);
  console.log("🚀 ~ MenuChangeStatus ~ status:", status);

  const getIconForStatus = (label) => {
    switch (label) {
      case "pending":
        return <IconAlertCircle style={{ width: rem(17), height: rem(17) }} />;
      case "lead_in":
        return <IconExternalLink style={{ width: rem(17), height: rem(17) }} />;
      case "contact":
        return <IconPhone style={{ width: rem(17), height: rem(17) }} />;
      case "confirmed":
        return <IconCheck style={{ width: rem(17), height: rem(17) }} />;
      case "payment":
        return <IconCreditCard style={{ width: rem(17), height: rem(17) }} />;
      default:
        return <IconExternalLink style={{ width: rem(17), height: rem(17) }} />;
    }
  };

  const getBackgroundColorForStatus = (label) => {
    console.log("🚀 ~ getBackgroundColorForStatus ~ label:", label);
    switch (label) {
      case "pending":
        return "bg-orange-500";
      case "lead_in":
        return "bg-blue-500";
      case "contact":
        return "!bg-main";
      case "confirmed":
        return "bg-purple-500";
      case "payment":
        return "bg-teal-500";
      default:
        return "bg-main";
    }
  };

  const { mutate, isLoading } = useMutate({
    mutationKey: ["bookings/${bookingId}/change-status"],
    endpoint: `bookings/${bookingId}/change-status`,
    onSuccess: () => {
      refetch();
      notify("success");
    },
    onError: (err) => {
      notify("error", err?.response?.data?.message);
    },
    formData: true,
  });
  return (
    <div>
      <Menu width={200} shadow="md">
        <Menu.Target>
          <Button className={`${getBackgroundColorForStatus(status)} `}>
            {status}
          </Button>
        </Menu.Target>

        <Menu.Dropdown>
          {["pending", "lead_in", "contact", "confirmed", "payment"].map(
            (label) => (
              <React.Fragment key={label}>
                <Menu.Item
                  onClick={() => {
                    mutate({
                      status: label,
                    });
                    setStatus(label);
                  }}
                  leftSection={getIconForStatus(label)}
                >
                  {label}
                </Menu.Item>
                <Menu.Divider />
              </React.Fragment>
            )
          )}
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

export default MenuChangeStatus;
