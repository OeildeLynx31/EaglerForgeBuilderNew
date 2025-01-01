const PLAYER_CAPABILITIES_BOOLEAN = [
    ["can fly", "allowFlying"],
    ["is flying", "isFlying"],
    ["disable damage", "disableDamage"],
    ["is in creative mode", "isCreativeMode"],
    ["allow edit", "allowEdit"],
];

const player_get_capability_boolean = {
    init: function () {
        this.appendDummyInput('CAPABILITY')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField(new Blockly.FieldDropdown(PLAYER_CAPABILITIES_BOOLEAN), 'CAPABILITY');
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('capability of player');
        this.setInputsInline(true)
        this.setOutput(true, "Boolean");
        this.setTooltip('Gets a capability of a player.');
        this.setHelpUrl('https://eaglerforge.github.io/apidocs/globals/PlayerCapabilities.html');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_capability_boolean: player_get_capability_boolean });

javascript.javascriptGenerator.forBlock['player_get_capability_boolean'] = function () {
    const dropdown_capability = this.getFieldValue('CAPABILITY');
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    const code = `Boolean((${value_player}).$capabilities["${dropdown_capability}"])`;
    return [code, javascript.Order.NONE];
}


const PLAYER_CAPABILITIES_NUMBER = [
    ["walk speed", "walkSpeed0"],
    ["fly speed ", "flySpeed0"],
];

const player_get_capability_number = {
    init: function () {
        this.appendDummyInput('CAPABILITY')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField(new Blockly.FieldDropdown(PLAYER_CAPABILITIES_NUMBER), 'CAPABILITY');
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('capability of player');
        this.setInputsInline(true)
        this.setOutput(true, "Number");
        this.setTooltip('Gets a capability of a player.');
        this.setHelpUrl('https://eaglerforge.github.io/apidocs/globals/PlayerCapabilities.html');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_capability_number: player_get_capability_number });

javascript.javascriptGenerator.forBlock['player_get_capability_number'] = function () {
    const dropdown_capability = this.getFieldValue('CAPABILITY');
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    const code = `(${value_player}).$capabilities["$${dropdown_capability}"]`;
    return [code, javascript.Order.NONE];
}


const PLAYER_FOOD_STATS = [
    ["food exhaustion level", "foodExhaustionLevel"],
    ["food level ", "foodLevel0"],
    ["food saturation level", "foodSaturationLevel"],
];

const player_get_food_stats = {
    init: function () {
        this.appendDummyInput('STAT')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField( new Blockly.FieldDropdown(PLAYER_FOOD_STATS), 'STAT');
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('of player');
        this.setInputsInline(true)
        this.setOutput(true, "Number");
        this.setTooltip('Gets the food stats of a player.');
        this.setHelpUrl('https://eaglerforge.github.io/apidocs/globals/FoodStatsData.html');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_food_stats: player_get_food_stats });

javascript.javascriptGenerator.forBlock['player_get_food_stats'] = function () {
    const dropdown_stat = this.getFieldValue('STAT');
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    const code = `(${value_player}).$foodStats["$${dropdown_stat}"]`;
    return [code, javascript.Order.NONE];
}


const PLAYER_ITEM_TYPE = [
    ["ItemStack", "ItemStack"],
    ["Item", "Item"],
];

const player_get_item_hand = {
    init: function () {
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('get held item of player');
        this.appendDummyInput()
            .appendField('as');
        this.appendDummyInput('TYPE')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField(new Blockly.FieldDropdown(PLAYER_ITEM_TYPE), 'TYPE');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Gets the item in the hand of a player.');
        this.setHelpUrl('');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_item_hand: player_get_item_hand });

javascript.javascriptGenerator.forBlock['player_get_item_hand'] = function () {
    const dropdown_item_type = this.getFieldValue('TYPE');
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    let code;
    if (dropdown_item_type === "Item") {
        code = `(${value_player}).$getHeldItem()?(${value_player}).$getHeldItem().$item:null`;
    } else {
        code = `(${value_player}).$getHeldItem()`;
    }
    return [code, javascript.Order.NONE];
}


const player_get_current_item_pos = {
    init: function () {
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('get held item index of player');
        this.setInputsInline(true);
        this.setOutput(true, "Number");
        this.setTooltip('Gets the selected item index of a player.');
        this.setHelpUrl('');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_current_item_pos: player_get_current_item_pos });

javascript.javascriptGenerator.forBlock['player_get_current_item_pos'] = function () {
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    const code = `${value_player}.$inventory.$currentItem+1`;
    return [code, javascript.Order.NONE];
}


const PLAYER_INVENTORY = [
    ["get main inventory", "main"],
    ["get armor inventory", "armor"],
    ["get enderchest inventory", "enderchest"],
];

const player_get_player_inventory = {
    init: function () {
        this.appendDummyInput('TYPE')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField(new Blockly.FieldDropdown(PLAYER_INVENTORY), 'TYPE');
        this.appendValueInput('PLAYER')
            .setAlign(Blockly.inputs.Align.RIGHT)
            .appendField('of player');
        this.appendDummyInput()
            .appendField('as list');
        this.setInputsInline(true);
        this.setOutput(true);
        this.setTooltip('Gets the inventory of a player as list.');
        this.setHelpUrl('https://eaglerforge.github.io/apidocs/globals/InventoryPlayerData.html');
        this.setColour(30);
    }
};
Blockly.common.defineBlocks({ player_get_player_inventory: player_get_player_inventory });

javascript.javascriptGenerator.forBlock['player_get_player_inventory'] = function () {
    const dropdown_inventory = this.getFieldValue('TYPE');
    const value_player = javascript.javascriptGenerator.valueToCode(this, 'PLAYER', javascript.Order.ATOMIC);
    let code;
    if (dropdown_inventory === "main") {
        code = `(${value_player}).$inventory.$mainInventory.data`;
    } else if (dropdown_inventory === "armor") {
        code = `(${value_player}).$inventory.$armorInventory.data`;
    } else {
        code = `(${value_player}).$getInventoryEnderChest().$inventoryContents.data`
    }
    return [code, javascript.Order.NONE];
}