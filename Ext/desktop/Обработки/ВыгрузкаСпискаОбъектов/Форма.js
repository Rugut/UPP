Ext.require(['Данные.Обработки.ВыгрузкаСпискаОбъектов'], function () 
{
	Ext.define('Обработки.ВыгрузкаСпискаОбъектов.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:426px;height:317px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выгрузка списка объектов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СписокВыгружаемыхОбъектов',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:103px;width:410px;height:181px;',
			height: 181,width: 410,
			columns:
			[
				{
					text:'',
					width:'30',
					dataIndex:'КартинкаЭлемента',
					flex:1,
				},
				{
					text:'Объект',
					width:'100',
					dataIndex:'Объект',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ВыгрузкаСпискаОбъектов/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'КартинкаЭлемента',
					},
					{
						name:'Объект',
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
						var грид = Ext.getCmp('СписокВыгружаемыхОбъектов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ВыгрузкаСпискаОбъектов.ФормаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ВыгрузкаСпискаОбъектов.ФормаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ИмяФайлаОбмена',
			width: 318,
			height: 19,
			style: 'position:absolute;left:100px;top:33px;width:318px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Файл данных:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Выгружаемые объекты',
			style: 'position:absolute;left:8px;top:58px;width:410px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:426px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:292px;width:426px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:79px;width:410px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Подбор',
				},
			]
		},
	]
	});
});