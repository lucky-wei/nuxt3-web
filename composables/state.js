export const useTheme = () => {
    return useState('theme', () => {
        return {
            '--primary-menu-bg': '#545c64',
            '--primary-menu-color': '#fff',
        }
    })
}