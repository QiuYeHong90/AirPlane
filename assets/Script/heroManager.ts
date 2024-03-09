import { _decorator, Component, director, EventTouch, instantiate, macro, Node, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('heroManager')
export class heroManager extends Component {
    @property(Prefab)
    bubble: Prefab = null

    start() {
        this.node.on(Node.EventType.TOUCH_MOVE, (event: EventTouch)=>{
         
            let py1 = event.getUILocation()
            this.node.setWorldPosition(py1.x,py1.y, 0)
            // this.node.setWorldPosition()
            
        })

        this.schedule(()=>{
            let bb = instantiate(this.bubble)
            bb.setParent(this.node.parent)
            let position = this.node.getWorldPosition()
            console.log(position)
            bb.setWorldPosition(position.x , position.y + 100, 0)
        },0.25 , macro.REPEAT_FOREVER)
    }

    update(deltaTime: number) {
        
    }
}

