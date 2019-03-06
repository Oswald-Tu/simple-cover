import Type from 'data.is';

export default function (...args) {
    if (!args.length) {
        console.error('simpleAssign: 大哥,请传入json数据为参数!');
        return;
    }
    return args.reduce((previous, current) => {
        if (!Type.isObject(previous) || !Type.isObject(current)) {
            console.error('simpleAssign: 要求每一个参数都是json格式的数据!');
            return {};
        }
        let temp = {...previous};
        Object.keys(previous).forEach(key => {
            if (current.hasOwnProperty(key)) {
                temp[key] = current[key];
            }
        });
        return temp;
    })
};
