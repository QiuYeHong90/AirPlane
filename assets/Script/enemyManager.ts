import { _decorator, assetManager, Collider2D, ColliderComponent, Component, Contact2DType, director, ImageAsset, Node, resources, Sprite, SpriteFrame } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('enemyManager')
export class enemyManager extends Component {
    isDie: Boolean = false
    isAnimation: Boolean = false



    start() {
        
    }

    update(deltaTime: number) {
        if (this.isDie) {
            if (this.isAnimation) {

            } else {
                this.node.destroy()
            }
            return
        }
        let oldP = this.node.getPosition()
        let newY = oldP.y - 1000 * deltaTime
        let newX = oldP.x
        this.node.setPosition(newX, newY)
        if (newY < -1000) {
            this.isDie = true
        }
    }

    die() {
        if (this.isDie == true) {
            return
        }

        this.isDie = true
        this.isAnimation = true
        const url = 'test/enemyDie';
        resources.load(url, ImageAsset, (err: any, spriteFrame) => {
            console.debug("ssss---", spriteFrame)
            let ff = SpriteFrame.createWithImage(spriteFrame)
            const sprite = this.getComponent(Sprite);
            sprite.spriteFrame = ff;
            setTimeout(()=> {
                this.isAnimation = false
            }, 300)
        });
        
    }
}

