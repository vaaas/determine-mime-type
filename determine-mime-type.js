'use strict'
const DEFAULT = 'application/octet_stream'

const MIMES = {
	'.html': 'text/html',
	'.htm': 'text/html',
	'.css': 'text/css',
	'.xml': 'text/xml',
	'.txt': 'text/plain',

	'.gif': 'image/gif',
	'.jpeg': 'image/jpeg',
	'.jpg': 'image/jpeg',
	'.png': 'image/png',
	'.ico': 'image/x-icon',
	'.bmp': 'image/x-ms-bmp',
	'.svg': 'image/svg+xml',
	'.svgz': 'image/svg+xml',
	'.webp': 'image/webp',

	'.js': 'application/javascript',
	'.atom': 'application/atom+xml',
	'.rss': 'application/rss+xml',
	'.json': 'application/json',
	'.woff': 'application/font-woff',
	'.jar': 'application/java-archive',
	'.war': 'applicaiton/java-archive',
	'.ear': 'applicaiton/java-archive',
	'.doc': 'application/msword',
	'.pdf': 'application/pdf',
	'.rtf': 'application/rtf',
	'.xls': 'application/vnd.ms-excel',
	'.ppt': 'application/vnd.ms-powerpoint',
	'.xhtml': 'application/xhtml+xml',
	'.7z': 'application/x-7z-compressed',
	'.zip': 'application/zip',
	'.rar': 'application/x-rar-compressed',

	'.mp3': 'audio/mpeg',
	'.ogg': 'audio/ogg',
	'.oga': 'audio/ogg',
	'.m4a': 'audio/x-m4a',
	'.aac': 'audio/x-m4a',
	'.opus': 'audio/opus',

	'.webm': 'video/webm',
	'.mp4': 'video/mp4',
	'.mkv': 'video/x-matroska',
	'.flv': 'video/x-flv',
	'.avi': 'video/x-msvideo',
	'.mpg': 'video/mpeg',
	'.mpeg': 'video/mpeg',
	'.wmv': 'video/x-ms-wmv',
	'.mov': 'video/quicktime',
	'.3gp': 'video/3gpp',
	'.3gpp': 'video/3gpp',
}

module.exports = x => MIMES[x.slice(x.lastIndexOf('.'))] || DEFAULT
