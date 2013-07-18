Ext.require(['Данные.Отчеты.УниверсальныйОтчет'], function () 
{
	Ext.define('Отчеты.УниверсальныйОтчет.ФормаВыборПоля',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:437px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выбор поля',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТабличноеПолеДоступныеПоля',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:396px;',
			height: 396,width: 384,
			columns:
			[
				{
					text:'Доступные поля',
					width:'100',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Путь к данным',
					width:'100',
					dataIndex:'ПутьКДанным',
					flex:1,
				},
				{
					text:'Значение',
					width:'100',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Детальная запись',
					width:'100',
					dataIndex:'ДетальнаяЗапись',
					flex:1,
				},
				{
					text:'Поле',
					width:'100',
					dataIndex:'Поле',
					flex:1,
				},
				{
					text:'',
					width:'30',
					dataIndex:'Тип',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/УниверсальныйОтчет/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Представление',
					},
					{
						name:'ПутьКДанным',
					},
					{
						name:'Значение',
					},
					{
						name:'ДетальнаяЗапись',
					},
					{
						name:'Поле',
					},
					{
						name:'Тип',
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
						var грид = Ext.getCmp('ТабличноеПолеДоступныеПоля');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.УниверсальныйОтчет.ФормаВыборПоляСобытия'], function ()
						{
							var obj = Ext.create("Справочники.УниверсальныйОтчет.ФормаВыборПоляСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:412px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});