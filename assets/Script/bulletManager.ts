import { _decorator, Collider2D, Component, Contact2DType, IPhysics2DContact, Node, UITransform } from 'cc';
import { enemyManager } from './enemyManager';
const { ccclass, property } = _decorator;

@ccclass('bulletManager')
export class bulletManager extends Component {


    isDie: Boolean = false

    start() {
        // 注册单个碰撞体的回调函数
        let collider = this.getComponent(Collider2D);
        if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            // collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            // collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            // collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // 只在两个碰撞体开始接触时被调用一次
        if (selfCollider.tag != otherCollider.tag) {
            this.die()
            // this.node.destroy()
            let enj = otherCollider.getComponent(enemyManager)
            enj.die()
            
            // console.log('onBeginContact', enj);
        }
        
        
        // if (otherCollider.tag == 1) {
        //     otherCollider.node.destroy()
        //     this.destroy()
        // }
    }

    die() {
        this.isDie = true
        // this.destroy()
        // this.node.destroy()
    }

    protected onDisable(): void {
        let collider = this.getComponent(Collider2D);
        if (collider) { 
            collider.off(Contact2DType.BEGIN_CONTACT)
        }
    }


    update(deltaTime: number) {
        if (this.isDie) {
            this.node.destroy()
            return
        }
        let oldP = this.node.getPosition()
        let newY = oldP.y + 1000 * deltaTime
        let newX = oldP.x 
        this.node.setPosition(newX, newY)
        let height = this.node.getParent().getComponent(UITransform).contentSize.height - 100
        if (newY > height) {
            this.node.destroy()
        }
    }
}

