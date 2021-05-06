import Zanr from '../models/naslovna';
import Knjiga from '../models/knjiga';

//imamo niz objekata sa njihovim propertijima
export const ZANROVI = [
    new Zanr('1','Biografije','#e74c3c'),
    new Zanr('2','Istorijski','#e74c3c'),
    new Zanr('3','Klasici','#e74c3c'),
    new Zanr('4','Kriminalisticki','#e74c3c'),
    new Zanr('5','Ljubavni','#e74c3c'),
    new Zanr('6','Popularna nauka','#e74c3c')
];

export const KNJIGE = [
    new Knjiga ('1',['1','6'],'Ajnstajn - njegov zivot i univerzum','Volter Ajzakson','https://images.twinkl.co.uk/tw1n/image/private/t_630/u/ux/albert-einstein-1933340-1920_ver_1.jpg'),
    new Knjiga ('2',['1','6'],'Tesla - pronalazac modernog doba','Ricard Manson','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWAGERRx2JIi2u18mdT_-QE4GmUIdTp0WPWQ&usqp=CAU'),
    new Knjiga ('3',['2'],'Vreme smrti','Dobrica Cosic','https://www.laguna.rs/_img/korice/2407/vreme_smrti_-_knjiga_i_prerovo_ide_u_rat-dobrica_cosic_v.jpg'),
    new Knjiga ('4',['2'],'Intelektualci','Tom Dzonson','https://www.laguna.rs/_img/korice/4643/intelektualci-pol_dzonson_v.jpg'),
    new Knjiga ('5',['3','5'],'Dama sa kamelijama','Aleksandar Dima Sin','https://www.knjigaknjiga.com/slike/dama-kamelijama-korica.jpg'),
    new Knjiga ('6',['3'],'Proces','Franc Kafka','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcRD_rqU45NBI8j73wA6P7XmVlaTrbDSgcyA&usqp=CAU'),
    new Knjiga ('7',['3'],'Idiot','Fjodor Mihailovic Dostojevski','https://www.laguna.rs/_img/korice/4432/idiot_i_tom-fjodor_mihailovic_dostojevski_v.jpg'),
    new Knjiga ('8',['4'],'Deca zla','Miodrag Majic','https://i.pinimg.com/736x/17/ef/ad/17efadecf4566cad4a3a1f92211e9429.jpg'),
    new Knjiga ('9',['5'],'Preljuba','Paulo Koeljo','https://www.laguna.rs/_img/korice/2520/preljuba-paulo_koeljo_v.jpg'),
    new Knjiga ('10',['5'],'U potrazi za Romeom','Aleksandra Poter','https://www.knjizare-vulkan.rs/files/watermark/files/images/slike_proizvoda/thumbs_w/241562_w.jpg'),
    new Knjiga ('11',['6'],'Homo Deus','Juval Noa Harari','https://covers.zlibcdn2.com/covers/books/f8/a0/9c/f8a09c709bfd57e356d28510a3c3786c.jpg')
]
