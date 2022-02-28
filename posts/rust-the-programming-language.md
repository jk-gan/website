---
title: "Rust: The Programming Language"
subtitle: "A language empowering everyone to build reliable and efficient software."
slug: rust-the-programming-language
image: "/rust-the-programming-language/logo.jpeg"
date: "2019-08-18"
tags: ["rust", "introduction"]
---
![Rust logo](/rust-the-programming-language/logo.jpeg)

Recently I took a serious amount of time to work on some Rust projects. I also shared a lot of Rust related articles on my social media. Few people come to ask me about Rust and why am I using it. I think this is a good chance to write down my opinions about [Rust](https://www.rust-lang.org/).

So here you go.

## What is Rust?

<figure>
    <div class="aspect-w-16 aspect-h-9">
        <iframe src="https://www.youtube.com/embed/8EPsnf_ZYU0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="text-sm text-center text-gray-400">Rust Introduction from Mozilla</p>
</figure>

Rust is an open-source systems programming language developed by Mozilla that focuses on speed, memory safety and parallelism. It offers the performance of C and C++ but with safeguards to stop developers shooting themselves in the foot.

Developers are using Rust to create a wide range of new software applications, such as game engines, operating systems, file systems, browser components and simulation engines for virtual reality.

![Rust Hello World](/rust-the-programming-language/rust-hello-world.png)
<figcaption class="text-sm text-center text-gray-400 -mt-4">Hello world in Rust</figcaption>

## But why Rust?

> “Rust changes the game when it comes to writing safe systems software. Rust provides the performance and control needed to write low-level systems, while empowering software developers to write robust, secure programs.” — Microsoft

> “As a project where security is a primary focus, the type-safety and memory-safety of Rust were extremely appealing. Over the past year, we’ve found that even though Rust has a high learning curve, it’s an investment that has paid off.” — Facebook (Libra)

> Rust is the most loved language four years in a row in Stack Overflow Developer Survey

![Why Rust?](/rust-the-programming-language/why-rust.png)
<figcaption class="text-sm text-center text-gray-400 -mt-4">From Rust official website</figcaption>

### Memory safety without Garbage Collection

Guaranteed memory and thread safety without a garbage collector is probably the biggest selling point of Rust. Rust introduces ownership and lifetimes to ensure systems are free of memory-related issues while maintaining high performance.

Humans tend to make mistakes. Developers are not an exception. Especially in this era where computers and software are everywhere. People’s lives, their happiness, everything is being dependent on the technology that we’re building. Mistakes in the critical system can cause disaster and even endanger human life.

Among all different kinds of software errors, memory-related errors are the most complex and unpredictable classes of errors because you cannot easily write tests to catch them. It may stay in the code for years, like a ticking bomb waiting for its hour.

![Linux CVEs](/rust-the-programming-language/linux-memory-bugs.png)
<figcaption class="text-sm text-center text-gray-400 -mt-4">~51% of the CVEs are concurrency and memory safety issues in Linux kernel (<a href="https://phil-opp.github.io/talk-konstanz-may-2018/#14">source</a>)</figcaption>

![Window CVEs](/rust-the-programming-language/window-memory-bugs.png)
<figcaption class="text-sm text-center text-gray-400 -mt-4">~70% of the vulnerabilities Microsoft assigns a CVE each year continue to be memory safety issues (<a href="https://msrc-blog.microsoft.com/2019/07/16/a-proactive-approach-to-more-secure-code/">source</a>)</figcaption>

Unlike other system languages which most memory errors are discovered in running time, these memory errors are fundamentally impossible to get in the safe subset of Rust. The compiler flags those issues and forces them to be fixed before the program ever runs.

> Rust has been designed to remove the burden of memory safety from our shoulders, allowing us to focus on logical correctness and soundness instead.

### Performance

Rust is fast. It has no Garbage collector. It compiles to native machine code with no runtime. It is meant to be performed as well as comparable code written in C or C++.

It also features [zero-cost abstraction](https://boats.gitlab.io/blog/post/zero-cost-abstractions):
> What you don’t use, you don’t pay for. And further: What you do use, you couldn’t hand code any better.

Rust also come with concurrency built-in and this is what makes Rust’s ownership system really shines. Developers can choose from a wide variety of paradigms (message passing, shared state, lock-free, purely functional), and Rust will help you avoid common pitfalls. There are more details in this [post](https://blog.rust-lang.org/2015/04/10/Fearless-Concurrency.html).

### Useful compiler message
> Rust compiler is your biggest enemy and your best friend

Rust compiler is very strict. It does the most significant job to prevent errors in Rust programs. It **analyzes the code at compile-time** and issues warnings, if the code does not follow memory management rules or lifetime annotations correctly. This makes Rust a little bit hard to write but it is extremely satisfying once it compiles.

![Rust compiler message](/rust-the-programming-language/compiler-error.png)
<figcaption class="text-sm text-center text-gray-400 -mt-4">This is an example which compiler complaining the code is against the ownership rule</figcaption>

You can pair program with the compiler and be sure to have crafted a solid application afterward. It teaches you how to write better program even in other languages.

### Great Tooling

Rust provides decent tooling to ease the development:

- [Cargo](https://github.com/rust-lang/cargo) is the dependency manager which will download crate(a library or an executable) from [crates.io](https://crates.io/). It can also build your codes with just a single command: `cargo build`.
- [RLS](https://github.com/rust-lang/rls) is the language server for Rust. It provides IDE support for Rust developers.
- [rustup](https://rustup.rs/) is the preferred tool for managing your Rust installation.
- [clippy](https://github.com/rust-lang/rust-clippy) is a code linter to catch common mistakes and improve your Rust code.
- [rustfmt](https://github.com/rust-lang/rustfmt) is an opinionated code formatter for Rust according to style guidelines.

### It is written in Rust! ([Bootstrapping](https://en.wikipedia.org/wiki/Bootstrapping_(compilers)))
> If the compiler is bootstrapped, it is likely to be stable enough to be useful on some other code.

If the compiler developers are using Rust everyday, they are likely to have improved it to the point where it is usable (even if buggy). It is a non-trivial test of the language being compiled, and as such is a form of [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food).

## What can I build with Rust?
Almost everything. Backend, frontend, library, embedded system, OS, CLI tool and etc. Rust empowering every developers to build robust system with confidence.

## Who is using Rust?
- **Facebook:** Using Rust in their [source control](https://twitter.com/Sunjay03/status/1019782490800603136) and [Diem](https://github.com/diem/diem)
- **Google**: As part of the [Fuchsia Project](https://fuchsia.googlesource.com/)
- **Amazon**: Using Rust in [Firecracker](https://firecracker-microvm.github.io/)
- **Microsoft**: Using Rust in part of their [Azure IoT Edge](https://twitter.com/maxgortman/status/1012011425353461760)
- **Mozilla**: Using Rust in [Firefox Quantum](https://blog.rust-lang.org/2017/11/14/Fearless-Concurrency-In-Firefox-Quantum.html)
- **Bitbucket**: Using Rust in [backend](https://bitbucket.org/blog/why-rust)
- **Dropbox**: Using Rust in [backend](https://blogs.dropbox.com/tech/2018/06/extending-magic-pocket-innovation-with-the-first-petabyte-scale-smr-drive-deployment/) and [compressor & decompressor](https://dropbox.tech/infrastructure/lossless-compression-with-brotli)
- **Discord**: Using Rust in [backend](https://blog.discord.com/using-rust-to-scale-elixir-for-11-million-concurrent-users-c6f19fc029d3) and [Discord Store](https://twitter.com/manishearth/status/1027676698068713473?lang=en)
- **npm**: Using Rust in some of the [npm core services](https://www.youtube.com/watch?v=GCsxYAxw3JQ)
- **Reddit**: Using Rust in its [comment processing](https://www.reddit.com/r/rust/comments/7utj4t/reddit_is_hiring_a_senior_rust_engineer/)
- **Twitter**: As part of the [Build team](https://twitter.com/stuhood/status/978410393944047617?s=19)
- **Zhihu**: Using Rust in [search engine](https://www.youtube.com/watch?v=SluBJgFygSY&feature=youtu.be)
- **PingCAP**: Using Rust in [TiKV](https://github.com/tikv/tikv)
- **Parity**: Using Rust in [backend](https://www.parity.io/why-rust/)
- **TenX**: Using Rust in [backend](https://www.facebook.com/julianhosp/photos/a.623980494324570/2229270310462239/?type=1&theater)
- **OneSignal**: Using Rust in [backend](https://onesignal.com/blog/rust-at-onesignal/)
- **Atlas Weekend**: Using rust in [backend](https://www.reddit.com/r/rust/comments/cdg5b4/rust_in_the_on_of_the_biggest_music_festival/)

Of course there are a lot more companies are using Rust in production, you can check [here](https://www.rust-lang.org/production/users).

## Should you learn Rust?
Rust is not easy to learn. There are easier languages to learn, but Rust teaches you how to think properly and this is the knowledge which also applicable in other languages. Even you didn’t expect to write a single line of Rust code, I suggest you to take a look on Rust. It is exciting.

If you’re planning to learn a new language, why don’t just give Rust a try? With the release of Rust 2018, it’s never been easier to get started.
> “Now is a great time to learn Rust because the 2018 Edition, just released December 6th (2018), has a lot of improvements to the idioms of the language to make Rust more ergonomic to read and write,” says Nichols(Co-author of “The Rust Programming Langauge”).

## How to get started?
You can start with ["The book"](https://doc.rust-lang.org/book/). In my opinion, this is the best learning material I’ve seen of any language from the official team.

Other great resources:
- [Rust by Example](https://doc.rust-lang.org/rust-by-example/)
- [Learn Rust With Entirely Too Many Linked Lists](https://rust-unofficial.github.io/too-many-lists/)
- [A Gentle Introduction To Rust](https://stevedonovan.github.io/rust-gentle-intro/readme.html)

---
I can’t cover all the awesome features that Rust provided. If you’re interested to learn more about Rust, please give it a shot. I hope you enjoy it.

![Ferris](/rust-the-programming-language/ferris.gif)
<figcaption class="text-sm text-center text-gray-400 -mt-4">Ferris (unofficial mascot of the Rust Community)</figcaption>

---
Currently I’m working on a new product in Rust as well as my web framework, [Obsidian](https://github.com/obsidian-rs/obsidian), hopefully they will be released very soon.