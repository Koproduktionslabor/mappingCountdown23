await loadScript('https://hydra-extensions.glitch.me/hydra-src.js')
s0.initImage('https://i.ibb.co/0GxNQKB/UMAP4-Master-Frame-e02.png');

srcRel(s0).saturate(0).thresh(0.3).color(0,1,.8)
		.mask(srcRel(s0).thresh(0.001))
//.add(src(o0).scrollX(0.01).scrollY([-0.01,0.01].smooth()).scale(0.8),0.5)
.layer(src(o0).scrollY(-0.0005).modulate(noise(2,1).thresh().pixelate(100,50),0.001)
       .mask(osc(3,.5).thresh(0.5,0).rotate(()=>time*0.2).modulate(noise(5)).modulate(srcRel(s0))))
  .out()

src(o0).pixelate(200,350).mask(srcRel(s0).thresh(0.001, 0)).out(o1)

render(o1)
