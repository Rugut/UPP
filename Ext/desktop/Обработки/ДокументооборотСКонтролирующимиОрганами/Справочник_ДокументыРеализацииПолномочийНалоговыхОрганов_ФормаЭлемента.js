Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:810px;height:404px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Документ реализации полномочий налоговых органов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:77px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНалоговыйОрган',
			text: 'Налоговый орган:',
			style: 'position:absolute;left:8px;top:153px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:178px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер документа:',
			style: 'position:absolute;left:8px;top:102px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаДокумента',
			text: 'Дата документа:',
			style: 'position:absolute;left:8px;top:127px;width:97px;height:19px;text-align:left;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:810px;height:25px;',
			items:
			[
				{
					text:'Найти в списке',
				},
				'-',
				{
					text:'Перечитать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НалоговыйОрган',
			text: 'НалоговыйОрган',
			style: 'position:absolute;left:111px;top:153px;width:689px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Организация',
			text: 'Организация',
			style: 'position:absolute;left:111px;top:178px;width:689px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НомерДокумента',
			text: 'НомерДокумента',
			style: 'position:absolute;left:111px;top:102px;width:691px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ДатаДокумента',
			text: 'ДатаДокумента',
			style: 'position:absolute;left:111px;top:127px;width:691px;height:19px;',
		},
		{
			id: 'Вложения',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:243px;width:794px;height:128px;',
			height: 128,width: 794,
			columns:
			[
				{
					text:'Имя',
					width:'533',
					dataIndex:'ИмяФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'108',
					dataIndex:'Размер',
					flex:1,
				},
				{
					text:'Тип',
					width:'147',
					dataIndex:'ТипСодержимого',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'ИмяФайла',
					},
					{
						name:'Размер',
					},
					{
						name:'ТипСодержимого',
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
						var грид = Ext.getCmp('Вложения');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ДокументооборотСКонтролирующимиОрганами.Справочник_ДокументыРеализацииПолномочийНалоговыхОрганов_ФормаЭлементаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:219px;width:792px;height:24px;',
			items:
			[
				{
					text:'Открыть',
				},
				{
					text:'Выгрузить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'Файлы документа',
			style: 'position:absolute;left:8px;top:203px;width:794px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:794px;height:44px;',
			height: 44,width: 794,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:0px;width:794px;height:36px;',
			height: 36,width: 794,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ВидДокумента',
			style: 'position:absolute;left:111px;top:77px;width:691px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:379px;width:810px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});