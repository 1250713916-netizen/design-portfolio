朱伟健产品设计作品集网站（WebP 图片版）
==========================================

文件结构
- index.html
- styles.css
- script.js
- images/hero.webp
- images/avatar.webp
- images/project-01/cover.webp、01.webp、02.webp……
- images/project-02/cover.webp、01.webp、02.webp……
- images/project-03/cover.webp、01.webp、02.webp……
- images/project-04/cover.webp、01.webp、02.webp……
- images/project-05/cover.webp、01.webp、02.webp……
- images/project-06/cover.webp、01.webp……09.webp

重要：压缩包内包含网站代码和图片目录占位文件，不包含你的真实产品图片。请将图片按上述名称放进对应文件夹。
所有代码中的图片扩展名均使用小写 .webp。GitHub Pages 区分路径大小写，因此图片文件名和代码路径必须完全一致。
如果你的实际图片叫 .WEBP（大写），请将文件重命名为小写 .webp，或者同步修改 script.js 中的路径。

部署到 GitHub Pages
1. 解压 ZIP。
2. 将 index.html、styles.css、script.js 和 images 文件夹直接上传到仓库根目录，不要再多套一层项目文件夹。
3. 把真实 WebP 图片放进 images 对应目录。
4. 在仓库 Settings → Pages 中选择 Deploy from a branch、main、/(root)，保存。
5. 等待部署完成后刷新网站。

图片比例：已将首页项目卡片、项目详情封面、详情图片统一调整为 16:9。建议产品图片统一导出为 2560×1440 px 的 WebP。若原图为 5000×3125（16:10），请优先等比例缩小后扩展画布到 16:9，避免直接裁掉产品。
首页 Hero 为全屏铺满（cover），在不同屏幕比例下仍可能有少量裁切；请在主视觉图中让产品四周留出安全空间。
