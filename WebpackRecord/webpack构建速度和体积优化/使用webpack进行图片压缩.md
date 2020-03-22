### 图片压缩

- 要求：基于 Node 库的 imagemin 或者 tinypng API
- 使用：配置 image-webpack-loader

~~~
return {
    test: /\.(png|svg|jpg|blob)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: `${filename}img/[name]_[hash:8].[ext]`
            }
        },
        {
            loader: 'image-webpack-loader',
            options: {
                mozjpeg: {
                    progressive: true,
                    quality: 65
                },
                optipng: {
                    enabled: false
                },
                pngquant: {
                    quality: '65-90',
                    speed: 4
                },
                gifsicle:{
                    interlaced: false
                },
                webp: {
                    quality: .75
                }
            }
        }
    ]
}
~~~

#### Imagemin 的优点分析

- 很多定制选项
- 可以引入更过第三方优化插件，例如：pngquant
- 可以处理多种图片格式

#### Imagemin 压缩原理

- pngquant：是一款PNG压缩器，通过将图像转换为具有 alpha 通道（通常比 24/32 位PNG文件小60-80%）的更高效的8位png格式，可显著减小文件大小。
- pngcrush：其主要目的是通过尝试不同的压缩级别和png过滤方法来降低png IDAT 数据流的大小。
- optipng: 其设计灵感来自于 pngcrush。optipng可将图像文件重新压缩为更小尺寸，而不会丢失任何信息。
- tinypng：也是将24位png文件转化为更小有索引的8位图片，同时所有非必要的metadata 也会被剥离掉。