import { scriptMeta_item_T, scriptMeta_T } from "../types";
import ora from "ora"
import {execa} from 'execa';
const spinner = ora("Loading unicorns");

export const findItemByKey=(obj:scriptMeta_T,key:string):scriptMeta_item_T|any=>{
      return obj.find((item:scriptMeta_item_T)=> item.command===key)
}

export const scriptMeta:scriptMeta_T=[
    // 生成项目模板
    {
        command:"init",
        option:"",
        describe:"create project",
        example:"w-cli init",
        action:[
            {
                type:"input",
                name:"username",
                message:"what is your name?"
            },
            {
                type:"input",
                name:"project",
                message:"what is your project name?"
            },
    
        ],
        finallAction:()=>{
            spinner.start();
            spinner.color = "yellow";
            spinner.text = "Loading rainbows";
            execa('git',['clone','https://gitee.com/brother-linghu/cornucopia.git'],{cwd:'./'})
            setTimeout(() => {
                spinner.succeed();
            }, 3000);
        }

    },
    // 执行一键部署docker

]