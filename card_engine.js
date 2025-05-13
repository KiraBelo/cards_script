console.log('Welcome');
const cards = ['[img]https://i.imgur.com/7ADw0ud.jpg[/img]',
'[img]https://i.imgur.com/vETJhmr.jpg[/img]',
'[img]https://i.imgur.com/0DbZP63.jpg[/img]',
'[img]https://i.imgur.com/b9Kwn69.jpg[/img]',
'[img]https://i.imgur.com/o5GAN9g.jpg[/img]',
'[img]https://i.imgur.com/Xia1JfT.jpg[/img]',
'[img]https://i.imgur.com/sLXXemz.jpg[/img]',
'[img]https://i.imgur.com/nUrnp71.jpg[/img]',
'[img]https://i.imgur.com/GMSj45y.jpg[/img]',
'[img]https://i.imgur.com/tDym1sH.jpg[/img]',
'[img]https://i.imgur.com/dlO5CD3.jpg[/img]',
'[img]https://i.imgur.com/ufGkpPd.jpg[/img]',
'[img]https://i.imgur.com/GoASf6O.jpg[/img]',
'[img]https://i.imgur.com/IzaC3Fh.jpg[/img]',
'[img]https://i.imgur.com/xDETJBu.jpg[/img]',
'[img]https://i.imgur.com/snrETo9.jpg[/img]',
'[img]https://i.imgur.com/kKFFVYI.jpg[/img]',
'[img]https://i.imgur.com/CBNQpat.jpg[/img]',
'[img]https://i.imgur.com/CnZuZ0V.jpg[/img]',
'[img]https://i.imgur.com/c607zvH.jpg[/img]',
'[img]https://i.imgur.com/dsmdR3N.jpg[/img]',
'[img]https://i.imgur.com/KRDfppj.jpg[/img]',
'[img]https://i.imgur.com/TGKgfWo.jpg[/img]',
'[img]https://i.imgur.com/dRhvkjJ.jpg[/img]',
'[img]https://i.imgur.com/NF3bLEI.jpg[/img]',
'[img]https://i.imgur.com/HuwidZz.jpg[/img]',
'[img]https://i.imgur.com/TrITWqn.jpg[/img]',
'[img]https://i.imgur.com/T0Hs1A2.jpg[/img]',
'[img]https://i.imgur.com/ERgcTgy.jpg[/img]',
'[img]https://i.imgur.com/Q1mpqXT.jpg[/img]',
'[img]https://i.imgur.com/vl2CG6G.jpg[/img]',
'[img]https://i.imgur.com/soJZ9DW.jpg[/img]',
'[img]https://i.imgur.com/8ZBlhnw.jpg[/img]',
'[img]https://i.imgur.com/HUsOfoe.jpg[/img]',
'[img]https://i.imgur.com/55uVGwo.jpg[/img]',
'[img]https://i.imgur.com/u7P50hH.jpg[/img]',
'[img]https://i.imgur.com/Hy144cF.jpg[/img]',
'[img]https://i.imgur.com/LnASEfu.jpg[/img]',
'[img]https://i.imgur.com/mfOFkTO.jpg[/img]',
'[img]https://i.imgur.com/hS6uDlx.jpg[/img]',
'[img]https://i.imgur.com/Mn2lGPr.jpg[/img]',
'[img]https://i.imgur.com/1KD4mfW.jpg[/img]',
'[img]https://i.imgur.com/UcJRhpF.jpg[/img]',
'[img]https://i.imgur.com/TkZRhvf.jpg[/img]',
'[img]https://i.imgur.com/eZ8iJhk.jpg[/img]',
'[img]https://i.imgur.com/soRhPPW.jpg[/img]',
'[img]https://i.imgur.com/5kVurDF.jpg[/img]',
'[img]https://i.imgur.com/xLVBinv.jpg[/img]',
'[img]https://i.imgur.com/j4PmhgU.jpg[/img]',
'[img]https://i.imgur.com/8JEXP4J.jpg[/img]',
'[img]https://i.imgur.com/7XSzK2C.jpg[/img]',
'[img]https://i.imgur.com/S2hgSEH.jpg[/img]',
'[img]https://i.imgur.com/ESJrq9W.jpg[/img]',
'[img]https://i.imgur.com/iuu9FTj.jpg[/img]',
'[img]https://i.imgur.com/OdFkM29.jpg[/img]',
'[img]https://i.imgur.com/hl8BI3b.jpg[/img]',
'[img]https://i.imgur.com/cIsfoiY.jpg[/img]',
'[img]https://i.imgur.com/UPcCNwi.jpg[/img]',
'[img]https://i.imgur.com/njRl3mm.jpg[/img]',
'[img]https://i.imgur.com/GGrzsSZ.jpg[/img]',
'[img]https://i.imgur.com/Z9UXoRw.jpg[/img]',
'[img]https://i.imgur.com/lhIN0EH.jpg[/img]',
'[img]https://i.imgur.com/iQPuV24.jpg[/img]',
'[img]https://i.imgur.com/cytkOYn.jpg[/img]',
'[img]https://i.imgur.com/VQM1lsN.jpg[/img]',
'[img]https://i.imgur.com/vcpQpF8.jpg[/img]',
'[img]https://i.imgur.com/RibuEzC.jpg[/img]',
'[img]https://i.imgur.com/Vi4Seq5.jpg[/img]',
'[img]https://i.imgur.com/yD2rBjt.jpg[/img]',
'[img]https://i.imgur.com/PZQ6t8w.jpg[/img]',
'[img]https://i.imgur.com/ULDEeT4.jpg[/img]',
'[img]https://i.imgur.com/wsR0Tph.jpg[/img]',
'[img]https://i.imgur.com/Y87FFgl.jpg[/img]',
'[img]https://i.imgur.com/3RInRIo.jpg[/img]',
'[img]https://i.imgur.com/99hdcRb.jpg[/img]',
'[img]https://i.imgur.com/E8rDVzJ.jpg[/img]',
'[img]https://i.imgur.com/0Y1z6oZ.jpg[/img]',
'[img]https://i.imgur.com/vgjJRzt.jpg[/img]',
'[img]https://i.imgur.com/aL0HHXd.jpg[/img]',
'[img]https://i.imgur.com/48ICRR3.jpg[/img]',
'[img]https://i.imgur.com/NwVwsZ9.jpg[/img]',
'[img]https://i.imgur.com/i2oshQ2.jpg[/img]',
'[img]https://i.imgur.com/ul80tt5.jpg[/img]',
'[img]https://i.imgur.com/pzYG9rj.jpg[/img]',
'[img]https://i.imgur.com/QPbsar5.jpg[/img]',
'[img]https://i.imgur.com/IfWGcwq.jpg[/img]',
'[img]https://i.imgur.com/VGUb8dg.jpg[/img]',
'[img]https://i.imgur.com/8CyuoA8.jpg[/img]',
'[img]https://i.imgur.com/HNcjo5E.jpg[/img]',
'[img]https://i.imgur.com/1HxJ4KL.jpg[/img]',
'[img]https://i.imgur.com/NT8KidL.jpg[/img]',
'[img]https://i.imgur.com/2uifxtK.jpg[/img]',
'[img]https://i.imgur.com/EGFd01O.jpg[/img]',
'[img]https://i.imgur.com/9c7o5Kh.jpg[/img]',
'[img]https://i.imgur.com/nQbhM2U.jpg[/img]',
'[img]https://i.imgur.com/layHg9c.jpg[/img]',
'[img]https://i.imgur.com/buB1lTp.jpg[/img]',
'[img]https://i.imgur.com/WcxpODq.jpg[/img]',
'[img]https://i.imgur.com/efEMUdW.jpg[/img]',
'[img]https://i.imgur.com/dRM5ien.jpg[/img]',
'[img]https://i.imgur.com/HLRWr0J.jpg[/img]',
'[img]https://i.imgur.com/UOH0AUj.jpg[/img]',
'[img]https://i.imgur.com/dk7Y0KJ.jpg[/img]',
'[img]https://i.imgur.com/xUc8ghM.jpg[/img]',
'[img]https://i.imgur.com/2hk7GOX.jpg[/img]',
'[img]https://i.imgur.com/82nZZp2.jpg[/img]',
'[img]https://i.imgur.com/eLxXv5M.jpg[/img]',
'[img]https://i.imgur.com/U9ce21F.jpg[/img]',
'[img]https://i.imgur.com/zPX4xYP.jpg[/img]',
'[img]https://i.imgur.com/CFg9RGS.jpg[/img]',
'[img]https://i.imgur.com/1elupZU.jpg[/img]',
'[img]https://i.imgur.com/Xl4DEHR.jpg[/img]',
'[img]https://i.imgur.com/kszBMSh.jpg[/img]',
'[img]https://i.imgur.com/FXdk02z.jpg[/img]',
'[img]https://i.imgur.com/9mrKQ7B.jpg[/img]',
'[img]https://i.imgur.com/HlU7xnZ.jpg[/img]',
'[img]https://i.imgur.com/ZzA6Nnq.jpg[/img]',
'[img]https://i.imgur.com/zu3pZM0.jpg[/img]',
'[img]https://i.imgur.com/GNL1aYQ.jpg[/img]',
'[img]https://i.imgur.com/eW9rdJq.jpg[/img]',
'[img]https://i.imgur.com/Pyu31aQ.jpg[/img]',
'[img]https://i.imgur.com/5wdHRL6.jpg[/img]',
'[img]https://i.imgur.com/RpCb57C.jpg[/img]',
'[img]https://i.imgur.com/NfYaKsH.jpg[/img]',
'[img]https://i.imgur.com/ygIlpS2.jpg[/img]',
'[img]https://i.imgur.com/WvJ1mSg.jpg[/img]',
'[img]https://i.imgur.com/DHFYez8.jpg[/img]',
'[img]https://i.imgur.com/cqVmDvl.jpg[/img]',
'[img]https://i.imgur.com/PXzOfPe.jpg[/img]',
'[img]https://i.imgur.com/ZR08FNc.jpg[/img]',
'[img]https://i.imgur.com/mu7s4nd.jpg[/img]',
'[img]https://i.imgur.com/aFlqlsA.jpg[/img]',
'[img]https://i.imgur.com/AXdXcwZ.jpg[/img]',
'[img]https://i.imgur.com/xLPGw8u.jpg[/img]',
'[img]https://i.imgur.com/xZdU3Y5.jpg[/img]',
'[img]https://i.imgur.com/X3EBhVX.jpg[/img]',
'[img]https://i.imgur.com/Z1Tpim6.jpg[/img]',
'[img]https://i.imgur.com/iVWckHj.jpg[/img]',
'[img]https://i.imgur.com/1uDG4zR.jpg[/img]',
'[img]https://i.imgur.com/1Glv98O.jpg[/img]',
'[img]https://i.imgur.com/zFlKkpK.jpg[/img]',
'[img]https://i.imgur.com/dff0BMp.jpg[/img]',
'[img]https://i.imgur.com/8Ab7iiK.jpg[/img]',
'[img]https://i.imgur.com/qzgLjpI.jpg[/img]',
'[img]https://i.imgur.com/6UgXljo.jpg[/img]',
'[img]https://i.imgur.com/W4lHGGs.jpg[/img]',
'[img]https://i.imgur.com/XYYxeZp.jpg[/img]',
'[img]https://i.imgur.com/pZrsON8.jpg[/img]',
'[img]https://i.imgur.com/bQFO6kf.jpg[/img]',
'[img]https://i.imgur.com/hncrqCn.jpg[/img]',
'[img]https://i.imgur.com/dKmYPGg.jpg[/img]',
'[img]https://i.imgur.com/x1oo4UE.jpg[/img]',
'[img]https://i.imgur.com/8OcxZwu.jpg[/img]',
'[img]https://i.imgur.com/LrkB9Dp.jpg[/img]',
'[img]https://i.imgur.com/NVQJWj1.jpg[/img]',
'[img]https://i.imgur.com/nw2A9OH.jpg[/img]',
'[img]https://i.imgur.com/3QgsKOQ.jpg[/img]',
'[img]https://i.imgur.com/w49peIB.jpg[/img]',
'[img]https://i.imgur.com/AmIvaVD.jpg[/img]',
'[img]https://i.imgur.com/cZeYada.jpg[/img]',
'[img]https://i.imgur.com/6t4zekl.jpg[/img]',
'[img]https://i.imgur.com/kYbMrat.jpg[/img]',
'[img]https://i.imgur.com/EF4MVbv.jpg[/img]',
'[img]https://i.imgur.com/eYKn20M.jpg[/img]',
'[img]https://i.imgur.com/rEWLjhR.jpg[/img]',
'[img]https://i.imgur.com/WZEDNqQ.jpg[/img]',
'[img]https://i.imgur.com/nx0PdNX.jpg[/img]',
'[img]https://i.imgur.com/dZomUKF.jpg[/img]',
'[img]https://i.imgur.com/4oQJFe2.jpg[/img]',
'[img]https://i.imgur.com/hWFIy07.jpg[/img]',
'[img]https://i.imgur.com/TSBgjcj.jpg[/img]',
'[img]https://i.imgur.com/7MyUIlY.jpg[/img]',
'[img]https://i.imgur.com/0R3P9EJ.jpg[/img]',
'[img]https://i.imgur.com/Imtrss7.jpg[/img]',
'[img]https://i.imgur.com/4Pfzf1H.jpg[/img]',
'[img]https://i.imgur.com/c03ludV.jpg[/img]',
'[img]https://i.imgur.com/nKbDlLK.jpg[/img]',
'[img]https://i.imgur.com/EoXXJ9d.jpg[/img]',
'[img]https://i.imgur.com/nNcAVpg.jpg[/img]',
'[img]https://i.imgur.com/g09Rs2l.jpg[/img]',
'[img]https://i.imgur.com/7B3Ew0m.jpg[/img]',
'[img]https://i.imgur.com/X7ZeXhX.jpg[/img]',
'[img]https://i.imgur.com/Di0gQpn.jpg[/img]',
'[img]https://i.imgur.com/vjcyPUJ.jpg[/img]',
'[img]https://i.imgur.com/sXvVA6S.jpg[/img]',
'[img]https://i.imgur.com/0R9MYBJ.jpg[/img]',
'[img]https://i.imgur.com/cvVim1x.jpg[/img]',
'[img]https://i.imgur.com/UP0jC8I.jpg[/img]',
'[img]https://i.imgur.com/U1QoaW8.jpg[/img]',
'[img]https://i.imgur.com/xxMI1z8.jpg[/img]',
'[img]https://i.imgur.com/PKFr2LU.jpg[/img]',
'[img]https://i.imgur.com/5ZygQ74.jpg[/img]',
'[img]https://i.imgur.com/gXcjpMv.jpg[/img]',
'[img]https://i.imgur.com/zRBhCMe.jpg[/img]',
'[img]https://i.imgur.com/9iIjQDH.jpg[/img]',
'[img]https://i.imgur.com/svgBzU9.jpg[/img]',
'[img]https://i.imgur.com/uKwu8gS.jpg[/img]',
'[img]https://i.imgur.com/cUgceZW.jpg[/img]',
'[img]https://i.imgur.com/XTfU79J.jpg[/img]',
'[img]https://i.imgur.com/a1q2Emd.jpg[/img]',
'[img]https://i.imgur.com/JVKVtbo.jpg[/img]',
'[img]https://i.imgur.com/zaMrtru.jpg[/img]',
'[img]https://i.imgur.com/MIOTBeS.jpg[/img]',
'[img]https://i.imgur.com/7mrs5lx.jpg[/img]',
'[img]https://i.imgur.com/Vz3a8fS.jpg[/img]',
'[img]https://i.imgur.com/UyqmiGw.jpg[/img]',
'[img]https://i.imgur.com/ViHAaGu.jpg[/img]',
'[img]https://i.imgur.com/gAeQ0Yh.jpg[/img]',
'[img]https://i.imgur.com/WVOKsHr.jpg[/img]',
'[img]https://i.imgur.com/Eux9hIL.jpg[/img]',
'[img]https://i.imgur.com/FcLtwVg.jpg[/img]',
'[img]https://i.imgur.com/OtxbDn3.jpg[/img]',
'[img]https://i.imgur.com/bM6GtSq.jpg[/img]',
'[img]https://i.imgur.com/831hLoY.jpg[/img]',
'[img]https://i.imgur.com/zamXWrO.jpg[/img]',
'[img]https://i.imgur.com/yydIluq.jpg[/img]',
'[img]https://i.imgur.com/p2iXlVA.jpg[/img]',
'[img]https://i.imgur.com/jdOSJOI.jpg[/img]',
'[img]https://i.imgur.com/Yti9N8q.jpg[/img]',
'[img]https://i.imgur.com/BTRxnlu.jpg[/img]',
'[img]https://i.imgur.com/KG3zR9K.jpg[/img]',
'[img]https://i.imgur.com/RPHlysd.jpg[/img]',
'[img]https://i.imgur.com/CPXX3q1.jpg[/img]',
'[img]https://i.imgur.com/8nW5yFf.jpg[/img]',
'[img]https://i.imgur.com/iMWi2o9.jpg[/img]',
'[img]https://i.imgur.com/m99wVwl.jpg[/img]',
'[img]https://i.imgur.com/ygcsLEz.jpg[/img]',
'[img]https://i.imgur.com/O2J3jkY.jpg[/img]',
'[img]https://i.imgur.com/7uOUbjN.jpg[/img]',
'[img]https://i.imgur.com/4G9TFpK.jpg[/img]',
'[img]https://i.imgur.com/Q358jqK.jpg[/img]',
'[img]https://i.imgur.com/8owxRkP.jpg[/img]',
'[img]https://i.imgur.com/ZWoywAI.jpg[/img]',
'[img]https://i.imgur.com/Xr3SnQC.jpg[/img]',
'[img]https://i.imgur.com/88fEVkV.jpg[/img]',
'[img]https://i.imgur.com/5vJj3LW.jpg[/img]',
'[img]https://i.imgur.com/YreqEb4.jpg[/img]',
'[img]https://i.imgur.com/tcW75fB.jpg[/img]',
'[img]https://i.imgur.com/S6ysdeF.jpg[/img]',
'[img]https://i.imgur.com/r2Xepky.jpg[/img]',
'[img]https://i.imgur.com/ifqy4li.jpg[/img]',
'[img]https://i.imgur.com/F22PWD0.jpg[/img]',
'[img]https://i.imgur.com/fk0wMeD.jpg[/img]',
'[img]https://i.imgur.com/XR1OjUy.jpg[/img]',
'[img]https://i.imgur.com/rCtZjso.jpg[/img]',
'[img]https://i.imgur.com/UzADFUb.jpg[/img]',
'[img]https://i.imgur.com/V0Shqgw.jpg[/img]',
'[img]https://i.imgur.com/vUWjm7h.jpg[/img]',
'[img]https://i.imgur.com/ps9HIKH.jpg[/img]',
'[img]https://i.imgur.com/9CQjXuT.jpg[/img]',
'[img]https://i.imgur.com/lbrWQhV.jpg[/img]',
'[img]https://i.imgur.com/k2FxsP9.jpg[/img]',
'[img]https://i.imgur.com/bo6VZ1Q.jpg[/img]',
'[img]https://i.imgur.com/PS6Od0R.jpg[/img]',
'[img]https://i.imgur.com/97fKEmu.jpg[/img]',
'[img]https://i.imgur.com/HEyzvS1.jpg[/img]',
'[img]https://i.imgur.com/rGO63Ce.jpg[/img]',
'[img]https://i.imgur.com/YP34048.jpg[/img]',
'[img]https://i.imgur.com/SuNlP7H.jpg[/img]',
'[img]https://i.imgur.com/h9Dtxhv.jpg[/img]',
'[img]https://i.imgur.com/h9IrkFD.jpg[/img]',
'[img]https://i.imgur.com/jALgXQy.jpg[/img]',
'[img]https://i.imgur.com/4yoIQYe.jpg[/img]',
'[img]https://i.imgur.com/1RrD7YE.jpg[/img]',
'[img]https://i.imgur.com/wMm3hIF.jpg[/img]',
'[img]https://i.imgur.com/mt48hkt.jpg[/img]',
'[img]https://i.imgur.com/NZJYzP0.jpg[/img]',
'[img]https://i.imgur.com/Lmk9Jwr.jpg[/img]',
'[img]https://i.imgur.com/OiOOeFg.jpg[/img]',
'[img]https://i.imgur.com/iVtlDZS.jpg[/img]',
'[img]https://i.imgur.com/0deUu28.jpg[/img]',
'[img]https://i.imgur.com/1n7GaZQ.jpg[/img]',
'[img]https://i.imgur.com/nZFGpn0.jpg[/img]',
'[img]https://i.imgur.com/876VfYT.jpg[/img]',
'[img]https://i.imgur.com/5ULD9q9.jpg[/img]',
'[img]https://i.imgur.com/MrkVkb7.jpg[/img]',
'[img]https://i.imgur.com/tcASljO.jpg[/img]',
'[img]https://i.imgur.com/gwKG0Dc.jpg[/img]',
'[img]https://i.imgur.com/4NBp5vK.jpg[/img]',
'[img]https://i.imgur.com/sdRy12P.jpg[/img]',
'[img]https://i.imgur.com/MtorwAH.jpg[/img]',
'[img]https://i.imgur.com/cW5yjKT.jpg[/img]',
'[img]https://i.imgur.com/0KK51Mm.jpg[/img]',
'[img]https://i.imgur.com/tQcqqdB.jpg[/img]',
'[img]https://i.imgur.com/B1iiabs.jpg[/img]',
'[img]https://i.imgur.com/mquO5qG.jpg[/img]',
'[img]https://i.imgur.com/BNVu281.jpg[/img]',
'[img]https://i.imgur.com/VkH15bO.jpg[/img]',
'[img]https://i.imgur.com/N9HxQ8Z.jpg[/img]',
'[img]https://i.imgur.com/miEJkS5.jpg[/img]',
'[img]https://i.imgur.com/LoaBrsS.jpg[/img]',
'[img]https://i.imgur.com/10FdFEF.jpg[/img]',
'[img]https://i.imgur.com/OpOnzt2.jpg[/img]',
'[img]https://i.imgur.com/56OLa79.jpg[/img]',
'[img]https://i.imgur.com/Ba5xN34.jpg[/img]',
'[img]https://i.imgur.com/HU5HzT9.jpg[/img]',
'[img]https://i.imgur.com/I8BZyUm.jpg[/img]',
'[img]https://i.imgur.com/iLwv1zP.jpg[/img]',
'[img]https://i.imgur.com/9a3Uz6c.jpg[/img]',
'[img]https://i.imgur.com/PJgJLwY.jpg[/img]',
'[img]https://i.imgur.com/uVzJSQC.jpg[/img]',
'[img]https://i.imgur.com/4vyYdNT.jpg[/img]',
'[img]https://i.imgur.com/JqtdrFO.jpg[/img]',
'[img]https://i.imgur.com/tNLDjuT.jpg[/img]',
'[img]https://i.imgur.com/LPbKzkx.jpg[/img]',
'[img]https://i.imgur.com/8HCJL7Q.jpg[/img]',
'[img]https://i.imgur.com/HqRJex1.jpg[/img]',
'[img]https://i.imgur.com/UZiFQWX.jpg[/img]',
'[img]https://i.imgur.com/nc9mu1Z.jpg[/img]',
'[img]https://i.imgur.com/iWMCObg.jpg[/img]',
'[img]https://i.imgur.com/CFFyw5f.jpg[/img]',
'[img]https://i.imgur.com/ZGJZYx9.jpg[/img]',
'[img]https://i.imgur.com/J9h19lr.jpg[/img]',
'[img]https://i.imgur.com/vh8yVNR.jpg[/img]',
'[img]https://i.imgur.com/CyYRsQa.jpg[/img]',
]

const fortuneForm = document.querySelector('#fortuneForm');
const fortuneButton = document.querySelector('#fortuneButton');
const questionTextarea = document.querySelector('#question');

// Обработчик отправки формы
fortuneForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const text = questionTextarea.value.trim();
    if (text === '' || text === '...') {
        questionTextarea.value = '...';
        questionTextarea.placeholder = 'Оставь вопрос на стене, путник!';
        questionTextarea.classList.add('error');
        setTimeout(() => questionTextarea.classList.remove('error'), 1000);
        return;
    }

    // Блокируем кнопку и очищаем поле
    fortuneButton.disabled = true;
    questionTextarea.readOnly = true;
    questionTextarea.value = '';

    // Генерируем ответ
    const random = Math.floor(Math.random() * cards.length);
    const card = cards[random];
    const answer = `[b]${text}[/b]\n${card}`;

    // Анимация "печатной машинки"
    let i = 0;
    const typeAnswer = () => {
        if (i < answer.length) {
            questionTextarea.value += answer[i];
            i++;
            setTimeout(typeAnswer, 50);
        } else {
            questionTextarea.readOnly = true;
            fortuneButton.disabled = false;
            fortuneButton.textContent = 'Копировать';
        }
    };
    typeAnswer();

    // Воспроизведение звука
    const sound = new Audio('https://freesound.org/data/previews/387/387232_5121236-lq.mp3');
    sound.play().catch(() => console.log('Sound blocked by browser'));
});

// Копирование и сброс формы
fortuneButton.addEventListener('click', (e) => {
    if (fortuneButton.textContent === 'Копировать') {
        e.preventDefault();
        questionTextarea.select();
        document.execCommand('copy');

        // Показываем уведомление
        const feedback = document.createElement('div');
        feedback.textContent = 'Ответ скопирован!';
        feedback.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            color: #d4a373;
            font-family: 'Amatic SC', cursive;
            font-size: 1.2em;
            text-shadow: 0 0 5px #8b4513;
            opacity: 0;
            transition: opacity 0.5s;
        `;
        fortuneForm.appendChild(feedback);
        setTimeout(() => {
            feedback.style.opacity = '1';
            setTimeout(() => {
                feedback.style.opacity = '0';
                setTimeout(() => feedback.remove(), 500);
            }, 1000);
        }, 100);

        // Сбрасываем форму
        questionTextarea.value = '';
        questionTextarea.readOnly = false;
        fortuneButton.textContent = 'Получить ответ';
        questionTextarea.placeholder = 'Напиши на стене вопрос';
    }
});

// Удаление класса ошибки при вводе
questionTextarea.addEventListener('input', () => {
    questionTextarea.classList.remove('error');
});
