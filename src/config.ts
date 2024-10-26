import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Fuwari',
  subtitle: 'Demo Site',
  lang: 'zh_CN',         
  themeColor: {
    hue: 345,         // 主题颜色的默认色调，范围从 0 到 360。例如，红色: 0，青绿色: 200，青色: 250，粉色: 345
    fixed: false,     // 隐藏访客的主题颜色选择器
  },
  banner: {
    enable: false,
    src: 'assets/images/demo-banner.png',   // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
    position: 'center',      // 相当于 object-position，仅支持 'top'、'center'、'bottom'。默认为 'center'
    credit: {
      enable: false,         // 显示横幅图片的来源文本
      text: '',              // 要显示的来源文本
      url: ''                // （可选）指向原始艺术品或艺术家页面的 URL 链接
    }
  },
  favicon: [    // 如果此数组为空，则使用默认的 favicon
    // {
    //   src: '/favicon/icon.png',    // favicon 的路径，相对于 /public 目录
    //   theme: 'light',              // （可选）'light' 或 'dark'，仅在有不同的明暗模式 favicon 时设置
    //   sizes: '32x32',              // （可选）favicon 的尺寸，仅在有不同尺寸的 favicon 时设置
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    {
      name: 'GitHub',
      url: 'https://github.com/jcjz03',     // 内部链接不应包含基路径，系统会自动添加
      external: true,                               // 显示外部链接图标，并在新标签页中打开
    },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/demo-pic.png',  // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
  name: 'Y2p6',
  bio: '要么全力以赴，要么果断放弃',
  links: [
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/jcjz03',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
