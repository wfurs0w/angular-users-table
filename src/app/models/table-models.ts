export interface User {
  fullName: string;
  gender: string;
  name: {
    first: string;
    last: string;
  };
  picture: {
    medium: string;
  };
  location: {
    city: string;
    street: {
      name: string;
      number: number;
    },
  };
  email: string;
  phone: string;
}

export interface Column {
  caption: string;
  dataField: string;
  visible: boolean;
  sort?: boolean;
}

