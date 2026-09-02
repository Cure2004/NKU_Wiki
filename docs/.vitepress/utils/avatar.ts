/** QQ个人头像 */
export function getQqAvatar(qq?: string) {
	return qq ? `https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=3` : undefined
}

/** QQ群头像 */
export function getQqGroupAvatar(qq?: string) {
	return qq ? `https://p.qlogo.cn/gh/${qq}/${qq}/0/` : undefined
}

/** GitHub用户头像 */
export function getGithubAvatar(user?: string) {
	return user ? `https://avatars-githubusercontent.webp.se/${user}?s=96` : undefined
}
