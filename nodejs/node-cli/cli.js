import promptBuilder from 'prompt-sync'

const prompt=promptBuilder()

export default class Cli{

    constructor(){
        this.commands={
            
        }

        this.addCommand(this.help.bind(this), 'help', `
            Provides help on available commands
            UseCase#1 : to List all commands
            > help
            UseCase#2 : to get help on speicific command
            > help command-name
        `)

        this.addCommand(()=>process.exit(0), "quit", "Exits the interactive mode")
    }

    help(commandName){
       
        
        if(commandName)
            return this.helpOnCommand(commandName)
        else
            return this.generalHelp()
    }

    generalHelp(){
        let helpText= 'Available commands :'
        let first=true;
        for(let commandName in this.commands){
            if(!first){
                helpText+=","
            }
            helpText+=` ${commandName}`
            first=false;
        }
        return helpText;
    }

    helpOnCommand(commandName){
        let command= this.commands[commandName]
        if(command){
            return command.help ?? `No Help for : ${commandName}`
        }else{
            return `Invalid command: ${commandName}`
        }
    }

    addCommand(commandFunction, commandName, helpText){
        if(!commandName)
            commandName=commandFunction.name;
            
        commandName=commandName.toLowerCase()
        if(helpText)
            commandFunction.help = helpText;
        this.commands[commandName]=commandFunction

    }

    exectue(){
        let [,,commandName,...args]=process.argv
        
        if(!commandName)
            this.executeInteractive()
        else
            this.executeCommand(commandName,args)
    }

    executeInteractive(){
        while(true){
            let input=prompt("> ")
            const [commandName, args] = this.parseInput(input)
            console.log(commandName, args)
            this.executeCommand(commandName, args)
        }
    }

    parseInput(input){
        let [commandName,...rawArgs]=input.split(' ')
        let args=[]
        let isMultiWord=false;
        let multiWord='';
        for(let arg of rawArgs){
            if(isMultiWord){
                multiWord+=` ${arg}`
                if(arg.endsWith("\"")){
                    multiWord=multiWord.substring(0,multiWord.length-1)
                    args.push(multiWord)
                    isMultiWord=false
                    multiWord=''
                }
            } else{
                if(arg.startsWith("\"")){
                    multiWord=arg.substring(1)
                    isMultiWord=true
                } else{
                    args.push(arg)
                }
            }
        }

        return [commandName,args]
    }

    executeCommand(commandName,args){
        commandName=commandName.toLowerCase()
        let command = this.commands[commandName]
        if(command)
            console.log( command(...args))
        else
            console.log( `Invalid command : ${commandName}`)
    }

}


