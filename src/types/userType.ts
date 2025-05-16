export type UserType = {
  id: string;
  name: string;
  email?: string;
  role: 'ADMIN' | 'MANGER';
};

export type ListCustomersData = {
  listZellerCustomers: {
    items: UserType[];
  };
};

export type ListCustomersVars = {
  filter: {
    role: {
      eq: 'ADMIN' | 'MANGER';
    };
  };
};
