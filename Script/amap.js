var body = $response.body;
console.log("aaaaaaaaaaaaa");
console.log(body);
var str = '{"status":"1","regeocode":{"roads":[{"id":"0791H50F040016284","location":"115.915,28.6703","direction":"北","name":"岔道口西路","distance":"45.6473"},{"id":"0791H50F040016277","location":"115.915,28.6715","direction":"南","name":"金盘路","distance":"88.0576"}],"roadinters":[],"formatted_address":"江西省南昌市西湖区丁公路街道岔道口西路27-9号金盘东路社区","addressComponent":{"city":"南昌市","province":"江西省","adcode":"360103","district":"西湖区","towncode":"360103009000","streetNumber":{"number":"27-9号","location":"115.914720,28.670479","direction":"西南","distance":"35.1861","street":"岔道口西路"},"country":"中国","township":"丁公路街道","businessAreas":[{"location":"115.914406,28.671383","name":"金盘","id":"360103"}],"building":{"name":[],"type":[]},"neighborhood":{"name":[],"type":[]},"citycode":"0791"},"aois":[{"area":"14173.646020","type":"120302","id":"B0FFHU6KP3","location":"115.914359,28.670845","adcode":"360103","name":"金盘东路社区","distance":"0"},{"area":"2827.548389","type":"120302","id":"B031702ZWP","location":"115.915507,28.670737","adcode":"360103","name":"恒利源香槟巧筑","distance":"23.6366"}],"pois":[{"id":"B0FFHU6KP3","direction":"西","businessarea":"金盘","address":"岔道口西路29号2栋附近","poiweight":"0.261129","name":"金盘东路社区","location":"115.914359,28.670845","distance":"61.5683","tel":[],"type":"商务住宅;住宅区;住宅小区"},{"id":"B031702ZWP","direction":"东","businessarea":"金盘","address":"岔道口西路33号","poiweight":"0.235855","name":"恒利源香槟巧筑","location":"115.915507,28.670737","distance":"52.4936","tel":"0791-87038208","type":"商务住宅;住宅区;住宅小区"},{"id":"B031704BKK","direction":"西南","businessarea":"金盘","address":"岔道西路27号","poiweight":"0.159082","name":"岔道西社区卫生服务站","location":"115.914670,28.670465","distance":"39.7562","tel":[],"type":"医疗保健服务;综合医院;卫生院"},{"id":"B031703QP3","direction":"北","businessarea":"金盘","address":"金盘路32号","poiweight":"0.378842","name":"丁公路派出所","location":"115.915091,28.671450","distance":"83.4684","tel":"0791-88399110","type":"政府机构及社会团体;公检法机构;公安警察"},{"id":"B0FFG1X1JL","direction":"西南","businessarea":"金盘","address":"丁公路和二七南路交界","poiweight":"0.223199","name":"岔道口西路56号小区","location":"115.914507,28.670218","distance":"70.6866","tel":[],"type":"商务住宅;住宅区;住宅小区"},{"id":"B0FFF2IMW9","direction":"东南","businessarea":"金盘","address":"岔道口西路40号附近","poiweight":"0.196366","name":"卫生庭院","location":"115.915685,28.670176","distance":"91.3828","tel":[],"type":"商务住宅;住宅区;住宅小区"},{"id":"B0FFF49967","direction":"东南","businessarea":"金盘","address":"岔道口西路25号","poiweight":"0.174594","name":"乐轩儿童乐园","location":"115.915533,28.670251","distance":"74.7477","tel":[],"type":"体育休闲服务;休闲场所;游乐场"},{"id":"B0FFHEUT5N","direction":"西南","businessarea":"金盘","address":"岔道口西路56号","poiweight":"0.165457","name":"LeRoy筋骨养护馆","location":"115.914493,28.670466","distance":"53.6897","tel":"15070086976","type":"医疗保健服务;医疗保健服务场所;医疗保健服务场所"},{"id":"B0FFKQFCUG","direction":"西南","businessarea":"金盘","address":"丁公路与岔道口西路交叉口东150米","poiweight":"0.166415","name":"治乾教育丁公路校区","location":"115.914286,28.670363","distance":"76.9056","tel":"15170403612;18897911115","type":"科教文化服务;培训机构;培训机构"},{"id":"B0FFHD0KQ1","direction":"东南","businessarea":"金盘","address":"岔道口西路25-3号附近","poiweight":"0.164815","name":"好康健之家","location":"115.915389,28.670085","distance":"80.3333","tel":[],"type":"医疗保健服务;医疗保健服务场所;医疗保健服务场所"},{"id":"B0FFI5FHPJ","direction":"西","businessarea":"金盘","address":"岔道口西路62号附近","poiweight":"0.169045","name":"治乾教育阳光昂立","location":"115.914139,28.670396","distance":"88.1477","tel":"15797911116","type":"科教文化服务;培训机构;培训机构"},{"id":"B0FFH19JQR","direction":"北","businessarea":"金盘","address":"金盘路38号(金盘路小学对面)","poiweight":"0.181423","name":"奋安国鸿装潢部","location":"115.914706,28.671483","distance":"90.0621","tel":"13576908530","type":"购物服务;家居建材市场;家居建材市场"},{"id":"B0FFI48A11","direction":"东南","businessarea":"金盘","address":"岔道口西路25号附近","poiweight":"0.227956","name":"乐华阳光","location":"115.915521,28.670040","distance":"91.6053","tel":[],"type":"商务住宅;商务住宅相关;商务住宅相关"},{"id":"B0FFFF8VSU","direction":"南","businessarea":"金盘","address":"岔道口西路31号4单元101室","poiweight":"0.203318","name":"林记炒菜馆","location":"115.914926,28.670388","distance":"35.7181","tel":"13870650402","type":"餐饮服务;中餐厅;中餐厅"},{"id":"B0FFG4UF98","direction":"西南","businessarea":"金盘","address":"岔道口西路54-2号(合味原大酒楼旁)","poiweight":"0.231063","name":"爱好者台球","location":"115.914682,28.670270","distance":"56.1309","tel":"15870008383","type":"体育休闲服务;运动场馆;台球厅"},{"id":"B0FFG4UF85","direction":"东南","businessarea":"金盘","address":"丁公路岔道口西路25号","poiweight":"0.241134","name":"万事达超市(丁公店)","location":"115.915579,28.670255","distance":"77.8131","tel":"0791-86160415","type":"购物服务;超级市场;超市"}]},"info":"OK","infocode":"10000"}';
var obj = JSON.parse(str);
body = JSON.stringify(obj);
console.log("bbbbbbbbbbbbbb");
console.log(body);
$done(body);