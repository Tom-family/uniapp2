module.exports = {
	devServer: {
		host: '192.168.110.178', // 可以通过局域网访问
		port: 8080, // 设置端口号，默认为 8080
		proxy: {
			'/api': {
			    target: 'http://192.168.1.13:7070',
			    changeOrigin: true,
			    pathRewrite: {
			      '^/api': ''
			    }
			  },
		}
	}
}