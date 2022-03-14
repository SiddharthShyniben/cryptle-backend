import Koa from 'koa';
import Router from '@koa/router';

import koaBody from 'koa-body';

import {allowedWords, getTodayWord} from './words.js';
import compareGuess from './compare.js';

const app = new Koa();
const router = new Router();

const port = process.env.PORT || 3000;

router.post('/wordle-today', koaBody(), async ctx => {
	console.log('requested wordle');
	let body = ctx.request.body;

	if (
		typeof body.guess !== 'string' ||
		body.guess.length !== 7 ||
		!allowedWords.includes(body.guess)
	) {
		ctx.status = 400;
		ctx.body = {error: 'Invalid guess'};
		return;
	}

	const todayWord = getTodayWord();
	const compare = compareGuess(body.guess, todayWord);
	ctx.body = {
		guess: body.guess,
		compare
	};
});

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(port);
