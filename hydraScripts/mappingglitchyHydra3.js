await loadScript('https://hydra-extensions.glitch.me/hydra-src.js')
 s0.initImage('https://i.ibb.co/0GxNQKB/UMAP4-Master-Frame-e02.png');

src(o0)
//.blend(gradient(1).repeat(30,30).hue(0.8).scrollY(0,-0.1).modulate(srcRel(s0)),0.01)
//.scroll([-0.001,0,0,0,0.001].smooth(),[-0.001,0,0.001,0.001,-0.001].smooth())
.scrollY(-0.001)
.blend(solid(),0.0015)
//.saturate(1.01)
//.hue(0.005)
.modulate(src(o0).scale(1.01),0.001)
//.modulateHue(src(o0).scale(2).saturate(2),-.2)
.colorama(-0.002)
.rotate(0.003)
.blend(o0,0.06)
.layer(srcRel(s0).hue(()=>time*0.3).saturate(5).mask(voronoi([20,12,1,3,8],10,10).rotate(()=>Math.PI/2).thresh(0.1,0).luma().modulateScale(srcRel(s0).saturate(0).thresh(0.1).mult(gradient().modulate(srcRel(s0))))).mask(srcRel(s0).thresh(0.1,0)).luma(0.1,0))
 .mask(srcRel(s0).thresh(0.1,0))
//.modulate(o0,0.01)
.out()


speed = 0.1
