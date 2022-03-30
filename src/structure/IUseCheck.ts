import { ComputedRef } from "vue";
import { INode } from '../../dist/structure/INode';

export default interface IUseCheck {
    indeterminate: ComputedRef<boolean>;
    checked: ComputedRef<boolean>;
    noneChecked: ComputedRef<boolean>;
    someChecked: ComputedRef<boolean>;
    allChecked: ComputedRef<boolean>;
    someIndeterminate: ComputedRef<boolean>;
    click: () => void;
    rebuild: () => void;
    updateState: () => void;
    recurseDown: (node: INode, v: boolean) => void;
}