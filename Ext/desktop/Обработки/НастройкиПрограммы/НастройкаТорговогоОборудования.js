Ext.require(['Данные.Обработки.НастройкиПрограммы'], function () 
{
	Ext.define('Обработки.НастройкиПрограммы.НастройкаТорговогоОборудования',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:650px;height:327px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка торгового оборудования',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:302px;width:650px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			id: 'СписокРазделов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:166px;height:286px;',
			height: 286,width: 166,
			columns:
			[
				{
					text:'Представление',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Имя раздела',
					width:'100',
					dataIndex:'ИмяРаздела',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'ИмяРаздела',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('СписокРазделов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НастройкиПрограммы.НастройкаТорговогоОборудованияСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиПрограммы.НастройкаТорговогоОборудованияСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:180px;top:8px;width:462px;height:286px;',
			height: 286,width: 462,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Торговое оборудование',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРаздела18',
			text: 'Торговое оборудование',
			style: 'position:absolute;left:12px;top:6px;width:244px;height:30px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать подключаемое оборудование в тонком клиенте',
			style: 'position:absolute;left:27px;top:48px;width:337px;height:19px;',
		},
					]
				},
				{
					title:'Выгрузка товаров',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПорядокНазначенияPLU',
			text: 'Порядок назначения кодов товаров (PLU):',
			style: 'position:absolute;left:12px;top:49px;width:222px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПорядокНазначенияPLU',
			width: 219,
			height: 20,
			style: 'position:absolute;left:237px;top:48px;width:219px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Используется при заполнении списка товаров, выгружаемых в ККМ в режиме Offline.',
			style: 'position:absolute;left:12px;top:70px;width:444px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаздела14',
			text: 'Выгрузка товаров в ККМ Off-Line',
			style: 'position:absolute;left:12px;top:6px;width:348px;height:30px;',
		},
					]
				},
				{
					title:'Штрихкоды',
					items:
					[
		{
			xtype: 'label',
			name: 'Надпись10',
			text: 'Префикс штрихкода штучного товара:',
			style: 'position:absolute;left:12px;top:48px;width:199px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись11',
			text: 'Префикс штрихкода весового товара:',
			style: 'position:absolute;left:12px;top:108px;width:199px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'EAN13ПрефиксШтучногоТовара',
			width: 52,
			height: 19,
			style: 'position:absolute;left:213px;top:48px;width:52px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'EAN13ПрефиксВесовогоТовара',
			width: 52,
			height: 19,
			style: 'position:absolute;left:213px;top:108px;width:52px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разрешить назначение неуникальных штрихкодов',
			style: 'position:absolute;left:12px;top:219px;width:289px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись12',
			text: 'Необходимо указать, если предполагается печать этикеток с изображением штрихкодов для штучных товаров.',
			style: 'position:absolute;left:12px;top:72px;width:440px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись13',
			text: 'Необходимо указать, если предполагается печать этикеток с изображением штрихкодов для весовых товаров.',
			style: 'position:absolute;left:12px;top:129px;width:440px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись14',
			text: 'Установить, если на торговом предприятии допускается назначать разным товарам или товарам с разными единицами измерения один и тот же штрихкод.',
			style: 'position:absolute;left:28px;top:239px;width:424px;height:32px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'Длина кода весового товара:',
			style: 'position:absolute;left:12px;top:165px;width:199px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'EAN13ДлинаКодаВесовогоТовара',
			style: 'position:absolute;left:213px;top:165px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'Необходимо указать в соответствии с установками имеющегося торгового оборудования.',
			style: 'position:absolute;left:12px;top:186px;width:440px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазделаШтрихкоды',
			text: 'Штрихкоды',
			style: 'position:absolute;left:12px;top:6px;width:140px;height:30px;',
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});