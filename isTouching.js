class Functions {
    isTouching(a, b, Log,DistanceX,DistanceY)
    {
        var distanceX = DistanceX | a.width / 2 + b.width / 2;
        var distanceY = DistanceY | a.height / 2 + b.height / 2;

        if (a.x - b.x < distanceX && b.x - a.x < distanceX)
        {
            if (a.y - b.y < distanceY && b.y - a.y < distanceY) {

                return true;

            }
        }
    
        else {return false;}
    }
    
    bounceOff(a, b) {
        if (isTouching(a, b)) {
            if (a.velocityY == 0) {
                a.velocityY = 1;
            }
            if (a.velocityX == 0) {
                a.velocityX = 1;
            }
            a.velocityY = a.velocityY * -1;
            a.velocityX = a.velocityX * -1;
        }
    }
}
