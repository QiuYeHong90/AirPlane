import { _decorator, Component, instantiate, macro, Node, Prefab, UITransform } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('gameManager')
export class gameManager extends Component {
    @property(Prefab)
    ennemy: Prefab = null

    start() {
        this.schedule((t)=> {
            let enemy = instantiate(this.ennemy)
            enemy.setParent(this.node.parent)
            let scale = Math.random() * 3 + 3
            enemy.setScale(scale,scale)
            let w = this.node.parent.getComponent(UITransform).contentSize.width
            console.debug("-=-=-=-=",w)
            let x = Math.random() * w
            enemy.setWorldPosition(x,enemy.getWorldPosition().y, 0)
        },0.5, macro.REPEAT_FOREVER)
    }

    update(deltaTime: number) {
        
    }
}

