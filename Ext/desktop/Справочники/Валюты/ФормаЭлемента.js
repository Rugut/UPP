Ext.require(['Данные.Справочники.Валюты'], function () 
{
	Ext.define('Справочники.Валюты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:432px;height:397px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Валюта',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:322px;top:33px;width:40px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:33px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 222,
			height: 19,
			style: 'position:absolute;left:98px;top:33px;width:222px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:432px;height:25px;',
			width: 432,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеПолное',
			text: 'Полностью:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеПолное',
			width: 326,
			height: 19,
			style: 'position:absolute;left:98px;top:57px;width:326px;height:19px;',
		},
		{
			id: 'СписокКурсыВалют',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:244px;width:416px;height:120px;',
			height: 120,width: 416,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Период',
					width:'84',
					dataIndex:'Период',
					flex:1,
				},
				{
					text:'Валюта',
					width:'70',
					dataIndex:'Валюта',
					flex:1,
				},
				{
					text:'Курс',
					width:'133',
					dataIndex:'Курс',
					flex:1,
				},
				{
					text:'Кратность',
					width:'70',
					dataIndex:'Кратность',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.Валюты").data,
					fields: ['Ссылка','Картинка','Период','Валюта','Курс','Кратность',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Валюты/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Период',
					},
					{
						name:'Валюта',
					},
					{
						name:'Курс',
					},
					{
						name:'Кратность',
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
						var грид = Ext.getCmp('СписокКурсыВалют');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.Валюты.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Валюты.ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:220px;width:416px;height:24px;',
			width: 416,
			height: 24,
			items:
			[
			]
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:48px;top:105px;width:76px;height:19px;',
			width: 76,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры прописи целой части для русского языка',
			style: 'position:absolute;left:8px;top:85px;width:416px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи4наРусском',
			text: 'Род:',
			style: 'position:absolute;left:20px;top:105px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи1наРусском',
			text: 'один:',
			style: 'position:absolute;left:126px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи1наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:164px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи2наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи2наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:264px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи3наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:105px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи3наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:105px;width:60px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:48px;top:153px;width:76px;height:19px;',
			width: 76,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'Параметры прописи дробной части для русского языка',
			style: 'position:absolute;left:8px;top:133px;width:416px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи8наРусском',
			text: 'Род:',
			style: 'position:absolute;left:20px;top:153px;width:28px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи5наРусском',
			text: 'один:',
			style: 'position:absolute;left:126px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи5наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:164px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи6наРусском',
			text: 'два:',
			style: 'position:absolute;left:226px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи6наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:264px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописи7наРусском',
			text: 'пять:',
			style: 'position:absolute;left:326px;top:153px;width:36px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеПрописи7наРусском',
			width: 60,
			height: 19,
			style: 'position:absolute;left:364px;top:153px;width:60px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПолеПрописиДлинаДробнойЧасти',
			text: 'Количество разрядов при выводе дробной части в виде числа:',
			style: 'position:absolute;left:20px;top:177px;width:342px;height:19px;text-align:left;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:364px;top:177px;width:60px;height:19px;',
			width: 60,
			height: 19,
		},
		{
			xtype: 'label',
			text: 'История курсов',
			style: 'position:absolute;left:8px;top:204px;width:416px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:372px;width:432px;height:25px;',
			width: 432,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});