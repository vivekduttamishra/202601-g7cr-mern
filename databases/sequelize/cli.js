import promptBuilder from 'prompt-sync'

//const prompt=promptBuilder()

export class ValidationError extends Error{}

export const Text = v=> v.toString()
export const Int = v => {
    v= parseInt(v)
    if(isNaN(v))
        throw new ValidationError('Invalid Value, Expected Int')
    return v;
}
export const Float = v => {
    v= parseFloat(v)
    if(isNaN(v))
        throw new ValidationError('Invalid Value, Expected Int')
    return v;
}
export const CsvArray= v=>{
        return v.split(',')
} 


export default class Cli {

    constructor() {
        this.interactiveMode = false;
        this.commands = {

        }
        this.primaryCommands = [];

        this.addCommand({
            commandFunction: this.help.bind(this),
            commandName: 'help',
            aliases: ['?'],
            help: `
            Provides help on available commands
            UseCase#1 : to List all commands
            > help
            UseCase#2 : to get help on speicific command
            > help command-name
        `
        })

        this.addCommand({
            commandFunction: () => process.exit(0),
            commandName: "quit",
            aliases: ["exit", "x", "q"],
            help: "Exits the interactive mode"
        })
    }

 //{ commandFunction: addBook, helpText:'Adds book to database' }
    addCommand(command, commandName, helpText) {

        if (typeof command === 'function') {
            //old sytle parameter for backword compatibility
            //now converted to new format
            command = {
                commandFunction: command,
                commandName: commandName ?? command.name,
                help: helpText ?? command.help,

            }
        }

        //in the new sytem we will only have command
        command = {
            aliases: [],
            argCount: undefined,
            argsType: [],
            allArgType:Text,
            help: "No Help Available",
            ...command,
            commandName: command.commandName ?? command.commandFunction.name
        }

        //let's now add this command
        if (!command.commandFunction || typeof command.commandFunction !== 'function')
            throw new Error(`Invalid Command Supplied: ${command}`)
        commandName = command.commandName.toLowerCase()
        this.commands[commandName] = command;
        for (let alias of command.aliases) {
            this.commands[alias.toLowerCase()] = command
        }

        //only used for building help not for executing it
        this.primaryCommands.push(commandName)
    }

    help(commandName) {


        if (commandName)
            return this.helpOnCommand(commandName)
        else
            return this.generalHelp()
    }

    generalHelp() {
        let helpText = 'Available commands :'+this.primaryCommands.join(', ')      
       
        return helpText;
    }

    helpOnCommand(commandName) {
        commandName=commandName.toLowerCase()
        let command = this.commands[commandName]
        let help=''
        let aliasMap= command.aliases.length? `aliases: ${command.aliases.join(', ')}`:''
        if (command) {
            help+=`About ${command.commandName}
                ${aliasMap}
                ${command.help??''}
                
            `

            return help
        } else {
            return `Invalid command: ${commandName}`
        }
    }

   

    exectue() {
        let [, , commandName, ...args] = process.argv

        if (!commandName)
            this.executeInteractive()
        else
            this.executeCommand(commandName, args)
    }

    async executeInteractive() {
        this.interactiveMode = true;
        this.prompt = promptBuilder()
        while (true) {
            let input = this.prompt("> ")
            const [commandName, args] = this.parseInput(input)
            //console.log(commandName, args)
            await this.executeCommand(commandName, args)
        }
    }

    parseInput(input) {
        let [commandName, ...rawArgs] = input.split(' ')
        let args = []
        let isMultiWord = false;
        let multiWord = '';
        for (let arg of rawArgs) {
            if (isMultiWord) {
                multiWord += ` ${arg}`
                if (arg.endsWith("\"")) {
                    multiWord = multiWord.substring(0, multiWord.length - 1)
                    args.push(multiWord)
                    isMultiWord = false
                    multiWord = ''
                }
            } else {
                if (arg.startsWith("\"")) {
                    multiWord = arg.substring(1)
                    isMultiWord = true
                } else {
                    args.push(arg)
                }
            }
        }

        return [commandName, args]
    }

    async executeCommand(commandName, args) {
        commandName = commandName.toLowerCase()
        let command = this.commands[commandName]
        let commandFunction=command?.commandFunction
        if (commandFunction) {
            try {
                
                if(command.argCount!==undefined){
                    if(command.argCount>args.length)
                        throw new ValidationError(`Too Few arguments supplied`);

                    for(let i=0;i<command.argCount;i++){
                        let converter = command.argTypes[i]??command.allArgType
                        args[i]= converter(args[i])     
                    }
                } else{
                    //console.log('command',command);
                    
                    args= args.map( a=> command.allArgType(a))
                }


                let result = commandFunction(...args)
                if (result instanceof Promise) {
                    result = await result
                }
                if (result)
                    console.log(result)
                if (!this.interactiveMode)
                    process.exit(0)
            } catch (err) {
                console.error(err.message)
                if (!this.interactiveMode)
                    process.exit(1)
            }
        }
        else {
            console.error(`Invalid command : ${commandName}`)
            if (!this.interactiveMode)
                process.exit(1)
        }
    }

}


