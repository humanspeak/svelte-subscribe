# svelte-subscribe

[![npm version](http://img.shields.io/npm/v/@humanspeak/svelte-subscribe.svg)](https://www.npmjs.com/package/svelte-subscribe)
[![npm downloads](https://img.shields.io/npm/dm/@humanspeak/svelte-subscribe.svg)](https://www.npmjs.com/package/svelte-subscribe)
![license](https://img.shields.io/npm/l/svelte-subscribe)
![build](https://img.shields.io/github/actions/workflow/status/humanspeak/svelte-subscribe/publish.yml)
[![coverage](https://coveralls.io/repos/github/humanspeak/svelte-subscribe/badge.svg?branch=main)](https://coveralls.io/github/humanspeak/svelte-subscribe?branch=main)
[![size](https://img.shields.io/bundlephobia/min/@humanspeak/svelte-subscribe)](https://bundlephobia.com/result?p=@humanspeak/svelte-subscribe)

Subscribe to non top-level stores in your Svelte templates.

Visit the [REPL](https://svelte.dev/repl/d1bb4f2249f54790934066edf63cb5cc?version=3.48.0) for an example.

```svelte
<script>
    import { writable } from 'svelte/store'
    import { Subscribe } from '@humanspeak/svelte-subscribe'

    const users = [{ friend: writable('John') }]
</script>

{#each users as { friend }}
    {$friend}
    <!-- ⛔ Stores must be declared at the top level of the component -->
    <Subscribe {friend} let:friend>
        {friend}
    </Subscribe>
{/each}
```

## Installation

```bash
$ npm i -D svelte-subscribe
```

## Usage

`Subscribe` receives multiple stores as props and exposes multiple [slot props](https://svelte.dev/tutorial/slot-props) that are subscribed to each prop with the same name.

```svelte
<Subscribe a={writable(123)} let:a b={readable('abc')} let:b>
    {a}
    {b}
    <!-- 123 abc -->
</Subscribe>
```

All slot props are strongly typed for a pleasant TypeScript experience.
