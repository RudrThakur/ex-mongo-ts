interface IRole {
  role: string;
  access: string[];
}

export const roles: IRole[] = [
  { role: "admin", access: ["create_projects"] },
  {
    role: "manager",
    access: [
      "create_tasks",
      "assign_tasks",
      "review_tasks",
      "uncomplete_tasks",
      "delete_tasks",
    ],
  },
  {
    role: "developer",
    access: ["change_task_status"],
  },
];

export const getAccessByRole = (roleQuery: string): string[] => {
  const role: IRole[] = roles.filter((r) => r.role == roleQuery);
  return role[0].access;
};

export const getRoleWithAccess = (roleQuery: string): IRole => {
  const role: IRole[] = roles.filter((r) => r.role == roleQuery);
  return role[0];
};

export const doesRoleHaveAccess = (
  roleQuery: string,
  accessQuery: string
): boolean => {
  const role: IRole[] = roles.filter((r) => r.role == roleQuery);
  return role[0].access.includes(accessQuery);
};
