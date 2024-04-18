
export type ITheme = 'dark' | 'light'

export default interface IContext{
    theme: ITheme
    changeTheme: () => void
    
}