var yinYangImage, moveSpeed, moveDistance, divSize, imageXAxis, rightSide, imageYAxis;
var margin = 10;
function loadImage()
{
  yinYangImage = document.getElementById('imgYinYang');
  moveSpeed = 100;
  moveDistance = 20;
  divSize = document.getElementById('imgDiv').offsetWidth;
  console.log(divSize);
  imageXAxis = 0;
  imageYAxis = 0;
  rightSide = false;

  setTimeout (moveImage, moveSpeed);
}

function moveImage()
{

  // move right
  if (rightSide == false && imageXAxis < divSize - imgYinYang.width - margin)
  {
    imageXAxis += moveDistance;
    yinYangImage.style.left = imageXAxis + "px";
    if (imageXAxis >= divSize - imgYinYang.width - margin)
    {
      rightSide = true;
    }
    setTimeout(moveImage, moveSpeed);
  }

  // move down
  else if(imageYAxis <= 100 && imageYAxis < divSize - imgYinYang.width - margin)
  {
    imageYAxis += moveDistance;
    yinYangImage.style.top = imageYAxis + "px";
    setTimeout(moveImage, moveSpeed);
  }

  //move left
  else if (rightSide == true && imageXAxis > 0)
  {
    imageXAxis -= moveDistance;
    yinYangImage.style.left = imageXAxis + "px";
    setTimeout(moveImage, moveSpeed);
  }
}
