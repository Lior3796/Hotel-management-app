export const validateForm = (e, userNameRef, userPasswordRef, userRoleRef) => {
    e.preventDefault();

    const Name = userNameRef.current.value;
    const Password = userPasswordRef.current.value;
    const Role = userRoleRef.current.value;

    if (!Password || !Role || !Name) {
        return null;
    }

    return {
        userName: Name,
        userPassword: Password,
        userRole: Role
    }
}