import promptBuilder from 'prompt-sync'

//const prompt=promptBuilder()

export default class Cli {

    constructor() {
        this.interactiveMode = false;
        this.commands = {

        }
        

        this.addCommand(this.help.bind(this), 'help', `
            Provides help on available commands
            UseCase#1 : to List all commands
            > help
            UseCase#2 : to get help on speicific command
            > help command-name
        `)

        this.addCommand(() => process.exit(0), "quit", "Exits the interactive mode")
    }

    help(commandName) {


        if (commandName)
            return this.helpOnCommand(commandName)
        else
            return this.generalHelp()
    }

    generalHelp() {
        let helpText = 'Available commands :'
        let first = true;
        for (let commandName in this.commands) {
            if (!first) {
                helpText += ","
            }
            helpText += ` ${commandName}`
            first = false;
        }
        return helpText;
    }

    helpOnCommand(commandName) {
        let command = this.commands[commandName]
        if (command) {
            return command.help ?? `No Help for : ${commandName}`
        } else {
            return `Invalid command: ${commandName}`
        }
    }

    addCommand(command, commandName, helpText) {

        if(typeof command === 'function'){
            command={
                commandFunction:command
            }
        }

        if(!command.commandFunction || typeof command.commandFunction !== 'function'){
            throw new Error("Invalid Command Function")
        }

        command={
            ...command,
            commandName: command.commandName??command.commandFunction.name,
            help: helpText?? command.help ?? "No Help Available"
        }

      
        this.commands[commandName.toLowerCase()] = command

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
            console.log(commandName, args)
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
        let command = this.commands[commandName]?.commandFunction
        if (command) {
            try{

                let result = command(...args)
                if (result instanceof Promise) {
                    result = await result
                }
                if(result)
                    console.log(result)
                if(!this.interactiveMode)
                    process.exit(0)
            }catch(err){
                console.error(err.message)
                if(!this.interactiveMode)
                    process.exit(1)
            }
        }
        else{
            console.error(`Invalid command : ${commandName}`)
            if(!this.interactiveMode)
                process.exit(1)
        }
    }

}


