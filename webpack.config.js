const path = require("path");
const htmlwebpack = require('html-webpack-plugin')
const miniCssExPlu = require('mini-css-extract-plugin')

module.exports ={
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].js",
        clean: true

    },
    
    devServer:{
        static:{
            directory: path.resolve(__dirname, 'src/')
        }
        ,
        port: 9000,
        open: true

    },


    module:{
        rules:[
            {
                test:/\.((c|sa|sc)ss)$/i,

                use:[miniCssExPlu.loader,
                    // "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                // test: /\.(png| jpeg| jpg|gif|woff|eot|svg)$/,
                test: /\.(png|jpeg|gif|jpg||eotwoff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                type: 'asset/resource',//This is use When use icon 
                // use: "asset/resource",  // this is use whenn use photo

            },
            // {
            //     test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
            //     use: [
            //       {
            //         loader: 'file-loader',
            //         options: {
            //           name: '[name].[ext]',
                  
            //         }
            //       }
            //     ]
            //   }
        ]
    },
    plugins:[
        new htmlwebpack({
            template:'./src/index.html',
            filename: 'index.html',

        }),
        new miniCssExPlu({})
    ]
}