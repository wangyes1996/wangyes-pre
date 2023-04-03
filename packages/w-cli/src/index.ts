#!/usr/bin/env node
"use strict";
import chalk from "chalk";
import { prompt } from "enquirer";

import { version } from "../package.json";

import fs from "fs-extra";
import sade from "sade";
import { res_T } from "./types";
import { findItemByKey, scriptMeta } from "./script";
import figlet from 'figlet'
import ora from "ora"
const spinner = ora("Loading unicorns");




const prog = sade("w-cli");
console.log(figlet.textSync('FreeDom Is Everything!', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: 150,
    whitespaceBreak: true
}));
prog.version(version);
scriptMeta.forEach((item, index) => {
    prog
        .command(item.command)
        .describe(item.describe)
        .example(item.example)
        .action(async (arag)=>{
            const res: res_T = await prompt(findItemByKey(scriptMeta,item.command).action);

            item.finallAction(res)
       
         // loading 成功
        })
});

// prog
//     .command("init")
//     .option("-version")
//     .describe("create project")
//     .example("w-cli init")
//     .action(async (arag) => {
//         // console.log(arag, 11);

//         const { username }: res_T = await prompt({
//             type: "input",
//             name: "username",
//             message: "what is you name?",
//         });
//     });

prog.parse(process.argv);
