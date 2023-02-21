let RPC = {};

const appendBitStreamInput = (itemIndex, itemName, itemType) => {
    const parent = document.getElementById('inputsField');
    
    let code = '';
    if (itemType.startsWith('int') || itemType == 'float') {
        code += `<input id="bs_${itemIndex}" type="number">`;
    } else if (itemType.startsWith('bool')) {
        code += `<input id="bs_${itemIndex}" type="checkbox">`
    } else if (itemType.startsWith('encodedString') || itemType == 'string') {
        code += `<input id="bs_${itemIndex}" type="text">`;
    };
    parent.innerHTML += `<div class="bitStreamItem">${itemName}<a class="itemTypeText">(${itemType})</a><br>${code}</div><br>`;
};

const buildInputs = (struct) => {
    document.getElementById('inputsField').innerHTML = '';
    let index = -1;
    for (const item of struct) {
        index++;
        appendBitStreamInput(index, item[0], item[1]);
    }
};

const types = {
    int8: {
        read: 'local {name} = raknetBitStreamReadInt8(bs)',
        write: 'raknetBitStreamWriteInt8(bs, {value})'
    },
    int16: {
        read: 'local {name} = raknetBitStreamReadInt16(bs)',
        write: 'raknetBitStreamWriteInt16(bs, {value})'
    },
    int32: {
        read: 'local {name} = raknetBitStreamReadInt32(bs)',
        write: 'raknetBitStreamWriteInt32(bs, {value})'
    },
    string: {
        read: 'local {name} = raknetBitStreamReadString(bs, {prevVarName})',
        write: 'raknetBitStreamWriteString(bs, \'{value}\')'
    },
    float: {
        read: 'local {name} = raknetBitStreamReadFloat(bs)',
        write: 'raknetBitStreamWriteFloat(bs, {value})'
    },
    bool: {
        read: 'local {name} = raknetBitStreamReadBool(bs)',
        write: 'raknetBitStreamWriteBool(bs, {valueBool})'
    },
    encodedString2048: {
        read: 'local {name} = raknetBitStreamDecodeString(bs, 2048)',
        write: 'raknetBitStreamEncodeString(bs, {value})'
    },
    encodedString4096: {
        read: 'local {name} = raknetBitStreamDecodeString(bs, 4096)',
        write: 'raknetBitStreamEncodeString(bs, {value})'
    },
    bool8: {
        read: 'local {name} = raknetBitStreamReadInt8(bs) ~= 0',
        write: 'raknetBitStreamWriteInt8(bs, {value})'
    }
};

const generate = (struct) => {
    const result = [];
    const bs = [];
    for (let i = 0; i < struct.length; i++) {
        const bsitem = document.getElementById(`bs_${i}`);
        bs[i] = bsitem[bsitem.type == 'checkbox' ? 'checked' : 'value'];
    };

    let index = -1;
    for (const item of struct) {
        index++;
        let line = types[item[1]][document.getElementById('mode').value];
        
        // replace tags
        const tags = [
            ['{value}', bs[index]],
            ['{name}', item[0].replace(' ', '_')],
            ['{prevValue}', bs[index-1]],
            ['{prevVarName}', struct?.[index-1]?.[0].replace(' ', '_') || '_'],
            ['{valueBool}', bs[index-1] != false]
        ];
        for (const tag of tags) line = line.replace(tag[0], tag[1]);
        result.push(line);
    }
    document.getElementById('codeResult').value = result.join('\n');
};

addEventListener('DOMContentLoaded', () => {
    
    const rpcSelector = document.getElementById('RPCLIST');

    fetch('https://raw.githubusercontent.com/GovnocodedByChapo/SAMP-RakNet-Structs/main/RPC.json').then(r => r.json()).then(j => { 
        RPC = j;
        for (const key of Object.keys(RPC)) {
            rpcSelector.innerHTML += `<option>[${RPC[key].type == 'incoming' ? 'IN' : 'OUT'}] ${key} - ${RPC[key].name}</option>`;
        };
    });

    

    rpcSelector.addEventListener('change', () => {
        const rpcIndex = rpcSelector.value.match(/\[.+\]\s(\d+)\s/);
        buildInputs(RPC[rpcIndex[1]].bitStream);
        console.log(RPC[rpcIndex[1]])
    });

    document.getElementById('generate').addEventListener('click', () => {
        const rpcIndex = rpcSelector.value.match(/\[.+\]\s(\d+)\s/);
        generate(RPC[rpcIndex[1]].bitStream);
    });
});