await loadScript('https://hydra-extensions.glitch.me/hydra-src.js')
 s0.initImage('https://i.ibb.co/0GxNQKB/UMAP4-Master-Frame-e02.png');

src(o0)
//.scroll([-0.001,0,0,0,0.001],[-0.001,0,0.001,0.001,-0.001])
//.saturate(1.02)
//.modulateHue(src(o0).scale(2).saturate(2),-10)
  .mask(srcRel(s0).thresh(0.1,0))
.layer(srcRel(s0).mask(noise().thresh(0.5,0).pixelate(150,50).modulateScale(srcRel(s0).saturate(0).thresh(0.1).mult(gradient().modulate(srcRel(s0))))).mask(srcRel(s0).thresh(0.1)))
//.modulate(o0,0.01)
.out()
