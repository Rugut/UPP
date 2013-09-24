
Ext.require(['Метаданные.Справочники', 'Ext.resizer.Resizer'], function () {

    function ПолучитьФорму(АдресФормы) {
        
        Ext.require([АдресФормы], function () {
                    Ext.onReady(function () {
                        var win = Ext.create(АдресФормы, {});
                        if (win) {
                            win.show();
                            return win;
                        }
                    });
                });
    };

    function УстановитьПозициюЭлемента(Элемент, РазницаПоШирине, РазницаПоВысоте) {

        var ШиринаЭлемента = Элемент.Ширина;
        var ВысотаЭлемента = Элемент.Высота;
        //Разница первоначального размера окна от текущего

        if (Элемент.МенятьПозицию) {
            Элемент.setPosition(РазницаПоШирине + Элемент.ОсьХ, Элемент.ОсьУ);
            if (Элемент.МенятьВысоту) {
                Элемент.setHeight(РазницаПоВысоте + ВысотаЭлемента);
            };
            if (Элемент.МенятьШирину) {
                Элемент.setWidth(РазницаПоШирине + ШиринаЭлемента);
            };

        }
        else {
            if (Элемент.МенятьВысоту) {
                Элемент.setHeight(РазницаПоВысоте + ВысотаЭлемента);
            };
            if (Элемент.МенятьШирину) {
                Элемент.setWidth(РазницаПоШирине + ШиринаЭлемента);
            };
        };
    };

    Ext.define('js.ФормаСписка',
	{
	    requires: ['Ext.util.*'],
	extend: 'Ext.window.Window',
	height:400,
	width:340,
	title: 'Выбор объекта: Справочник',
	items:
      [
        {
         xtype: 'form',
         id: 'form',
	    items:
	    [
	          {
	              xtype: 'button',
	              style: 'position:absolute;left:260px;top:5px;',//h:65px;height:20px;',
	              //Значения по умолчанию фиксируем
	              ОсьХ: 260,
	              ОсьУ: 5,
	              Ширина: 65,
	              Высота: 20,
	              МенятьПозицию: true,
	              МенятьВысоту: false,
	              МенятьШирину: false,
	              Фиксировать: false,
	              width: 65,
	              height: 20,
	              text: 'OK',
	              handler: function () {
	                  var грид = Ext.getCmp('СправочникСписок1');
	                  var ИмяСпр = грид.getView().getSelectionModel().getSelection()[0].data.Имя;
	                  var FormId = 'Справочники.' + ИмяСпр + '.ФормаСписка';
	                  ПолучитьФорму(FormId);
	              }
	          },
	                {
	                    xtype: 'button',
	                    style: 'position:absolute;left:260px;top:30px;',//dth:65px;height:20px;',
	                    МенятьПозицию: true,
	                    МенятьВысоту: false,
	                    МенятьШирину: false,
	                    Фиксировать: false,
	                    ОсьХ: 260,
	                    ОсьУ: 30,
	                    Ширина: 65,
	                    Высота: 20,
	                    width: 65,
	                    height: 20,
	                    text: 'Отмена',
	                   handler: function () { this.up('window').close(); },
	                },
	      
	        {	

	            xtype: 'grid',
	            id: 'СправочникСписок1',
	            hideHeaders: true,
	            // disabled: true, выключает и делает недоступным грид
	          //  enableRowBody: false,
	            viewConfig: {
	                stripeRows: false,
	            },
	            style: 'position:absolute;left:5px;top:5px;',//width:250px;height:400px;',
	            МенятьПозицию: false,
	            МенятьВысоту: true,
	            МенятьШирину: true,
	            Фиксировать: false,
	            ОсьХ: 5,
	            ОсьУ: 5,
	            Ширина: 250,
	            Высота: 400,
	            height: 400,
	            width: 250,
	            columns:
	            [
	                {
	                    xtype: 'actioncolumn',
	                    width: 20,
	                    items: [{
	                        icon: 'css/images/default/menu/ico/Catalog.gif',  // Use a URL in the icon config
	                        tooltip: 'Sell stock',
	                    }]
	                },
	                {
	                    text: 'Имя',
	                    width: '350',
	                    dataIndex: 'Имя',
	                    flex: 1,
	                },		        
	            ],
	            store: {
	                data: Ext.create("Метаданные.Справочники").data,
	                fields:
	                    [{ name: 'Имя', },]
	            },

	            listeners:
	            {
	                dblclick:
	                {
	                    element: 'body',
	                    fn: function() {

	                        var грид = Ext.getCmp('СправочникСписок1');
	                        var ИмяСпр = грид.getView().getSelectionModel().getSelection()[0].data.Имя;
	                        var FormId = 'Справочники.' + ИмяСпр + '.ФормаСписка';
	                        ПолучитьФорму(FormId);
	                    }                
	                }
	            },
	        },	
	    ],
        }],
	listeners: {
	    resize: {

	        fn: function (win, width, height, opt) {
	        
	                var РазницаПоШирине = width - 340;
	                var РазницаПоВысоте = height - 400;
	                //Перебор элементов формы
	                var форма = win.down('form');
	                //var ЭтаФорма = форма.getForm();
	                var items = форма.items;
	                var i = 0;

	                for (i; i < items.length; i += 1) {
	                   var текЭлемент = items.getAt(i);
	                   if (текЭлемент.Фиксировать) {
	                       continue;
	                   };
	                    УстановитьПозициюЭлемента(items.getAt(i),  РазницаПоШирине, РазницаПоВысоте);
	                };
	        }
	    }
	}
	});
    
 
   


});

