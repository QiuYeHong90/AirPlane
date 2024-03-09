import { _decorator, Component, director, instantiate, macro, Node, Prefab, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('bgManager')
export class bgManager extends Component {

    
    

    start() {
        
    }

    

    update(deltaTime: number) {
        
        this.node.setPosition(this.node.position.x, this.node.position.y - 500 * deltaTime)
        // let height = this.node.getComponent(UITransform).contentSize.height
        let height = 2556
        height = height
        if (this.node.position.y < -height) {
            console.debug("到底部了-----")
            this.node.setPosition(0,height)
        }
    }
}

