Ext.require(['Данные.Обработки.УниверсальныйПоискОбъектов'], function () 
{
	Ext.define('Обработки.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителя',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:576px;height:480px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Дополнительные параметры ограничений',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'fieldset',
			title: 'Поля поиска',
			style: 'position:absolute;left:8px;top:4px;width:560px;height:16px;',
		},
		{
			id: 'СписокИменПолей',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:560px;height:202px;',
			height: 202,width: 560,
			columns:
			[
				{
					text:'Имя поля',
					width:'277',
					dataIndex:'Представление',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйПоискОбъектов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Представление',
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
						var грид = Ext.getCmp('СписокИменПолей');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителяСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:256px;width:560px;height:192px;',
			height: 192,width: 560,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			id: 'ПостроительОтбор',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:42px;width:560px;height:150px;',
			height: 150,width: 560,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Тип сравнения',
					width:'60',
					dataIndex:'ВидСравнения',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'С',
					width:'100',
					dataIndex:'ЗначениеС',
					flex:1,
				},
				{
					text:'По',
					width:'100',
					dataIndex:'ЗначениеПо',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйПоискОбъектов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Имя',
					},
					{
						name:'ВидСравнения',
					},
					{
						name:'Значение',
					},
					{
						name:'ЗначениеС',
					},
					{
						name:'ЗначениеПо',
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
						var грид = Ext.getCmp('ПостроительОтбор');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителяСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйПоискОбъектов.ФормаНастройкиПостроителяСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'fieldset',
			title: 'Дополнительные ограничения на область поиска',
			style: 'position:absolute;left:0px;top:0px;width:560px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:24px;width:560px;height:24px;',
			items:
			[
				{
					text:'Включить все',
				},
				{
					text:'Выключить все',
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:455px;width:576px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				{
					text:'Отмена',
				},
				'-',
				{
					text:'По умолчанию',
				},
			]
		},
	]
	});
});