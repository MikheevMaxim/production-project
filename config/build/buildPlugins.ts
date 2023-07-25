import HtmlWebpackPlagin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { type BuildOptions } from './types/config'

export function buildPlugins ({ paths, isDev }: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlagin({
      template: paths.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: JSON.stringify(isDev)
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}
