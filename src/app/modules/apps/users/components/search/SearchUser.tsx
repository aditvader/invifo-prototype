import { FC, useEffect, useState } from "react";
import { useFormikContext } from "formik";
import CustomDataTable from "../../../../../../customs/layout/CustomDataTable";
import { User } from "../../model/UserModel";
import { getUsers } from "../../services/userService";
import { formatDate } from "../../../../../../utils/utils";

type Props = {
  userIDProp: string;
  userNameProp: string;
  salesUserOnly?: boolean;
  onCloseSearch(): any;
};
const SearchUser: FC<Props> = ({
  userIDProp,
  userNameProp,
  salesUserOnly = false,
  onCloseSearch,
}) => {
  const { setFieldValue } = useFormikContext();
  const [users, setUsers] = useState<User[]>();
  useEffect(() => {
    async function getUsersData() {
      const response = await getUsers(salesUserOnly);
      const { data } = response.data;
      setUsers(data.users);
    }
    getUsersData();
  }, []);
  return (
    <CustomDataTable
      data={users}
      onSelectedData={(user: User) => {
        setFieldValue(userIDProp, user.ID);
        setFieldValue(userNameProp, user.firstName + " " + user.lastName);
        onCloseSearch();
      }}
      columns={[
        {
          header: "ID",
          field: "ID",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "First Name",
          field: "firstName",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "Last Name",
          field: "lastName",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "Position",
          field: "position",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "Username",
          field: "username",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "User Group",
          field: "userGroup.groupName",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "Authorization",
          field: "authorization.authName",
          body: null,
          sortable: true,
          filter: true,
        },
        {
          header: "Created At",
          field: "CreatedAt",
          body: (rowData: User) => formatDate(rowData.CreatedAt),
          sortable: true,
          filter: true,
        },
      ]}
    />
  );
};

export default SearchUser;
