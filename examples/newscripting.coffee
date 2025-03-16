#@ts-check
# New Scripting API explained

@x = 0 # Easy one, but will be replaced with @t
@y = 0 # same as @x

@t = # transform object, holds width, height, X, and Y.
    x: 0
    y: 0
    w: 100
    h: 100

@clone 50 # Creates clone(s), if given right instructions.

@run 'create',
    name: "Villager"
    ammount: 50
    callInit: true

# Villager

@on 'init', -> # @on allows for events. You can call them with the method below
    @level = 0
    @tradechart =[
        {name: "Sticky Good Trade", wants: [{item: "minecraft.emerald", amount: 15}, gives: {item: "minecraft.slime", amount: 64}]}
        {name: "Nobody Cares", wants: [{item: "minecraft.emerald", amount: 225}], gives: {item: "minecraft.stick", amount: 16777216}}
        ]

@call 'init' # Basic way to call.