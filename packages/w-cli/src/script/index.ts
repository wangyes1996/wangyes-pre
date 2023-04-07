import { scriptMeta_item_T, scriptMeta_T } from "../types";
import ora from "ora"
import {execa,$} from 'execa';
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
            $`git clone https://gitee.com/brother-linghu/cornucopia.git`.finally(()=>{
                spinner.succeed();

                
            })
            // execa('git',['clone','https://gitee.com/brother-linghu/cornucopia.git'],{cwd:'./'}).finally(()=>{
           
                
            //     spinner.succeed();
            // }).catch((res)=>{
            //     console.log(res);
                

            // })
        }

    },
    // 执行一键部署docker
    {
        command:"docker",
        option:"",
        describe:"一键安装docker镜像",
        example:"w-cli docker <images>",
        action:[],
        finallAction:async()=>{
           
            const {stdout} = await $`docker search centos`;
            console.log(stdout);
           
            

        }
    }
]