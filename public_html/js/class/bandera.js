/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


class bandera extends rectvol {
    constructor(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name)
    {
        super(left,top,width,height,vx,vy,ax,ay,ang, vang, aang, name);
        this._index = 0;
        this._banner = 1;
    }
    
    get index()
    {
        return this._index;
    }
    
    set index(i)
    {
        this._index = i;
        this.x = bloc[i].x + bloc[i].width - this.width;
        this.y = bloc[i].y - 58;
    }

    draw(transf='')
    {
        super.draw(transf);
    }
    
    move()
    {
        this.x = bloc[this._index].x + bloc[this._index].width - this.width;
        this.y = bloc[this._index].y - 54;
    }
    
    hide()
    {
        super.hide();
        document.getElementById("banner1").style.visibility = "hidden";
        document.getElementById("banner2").style.visibility = "hidden";
    }
    
    show()
    {
        super.show();
        if(this._banner==1)
        {
            document.getElementById("banner1").style.visibility = "visible";
            document.getElementById("banner2").style.visibility = "hidden";
        }
        else if(this._banner==2)
        {
            document.getElementById("banner1").style.visibility = "hidden";
            document.getElementById("banner2").style.visibility = "visible";
        }
    }
    
    setBanner(num)
    {
        this._banner = num;
    }
    
    naiveCopy(obj)
    {
        super.naiveCopy(obj);
        this._index = obj.index;
    }
   
    update() {
        if(sco > checkpoint*checkpoint_dist) //we show flag every 1000 points.
        {
            checkpoint++;
            var array = [bc1.index, bc2.index, bc3.index, bc4.index, bc5.index, bc6.index];
            this._index = match(maxindex, array);
            this.show();
        }
        if(this.x < -30) //we hide flag if it goes at an x less than -30
        {
            this.setBanner(1);
            this.hide();
        }
    }
}



