export const isTokenExist = () => {
    const token = document.cookie
        .split('; ')
        ?.find(row => row.startsWith('jwtLogin='))
        ?.split('=')[1] || undefined;

    const userRole = document.cookie
        .split('; ')
        .find(row => row.startsWith('userRole='))
        .split('=')[1] || undefined;

    return { userRole, token }

}