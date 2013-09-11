Ext.require(['Данные.Обработки.ПоискИЗаменаДублирующихсяЭлементов'], function () 
{
	Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоиска',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:675px;height:182px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Поиск дублирующихся элементов справочников',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'НайденныеОбъекты',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:30px;width:659px;height:119px;',
			height: 119,width: 659,
			columns:
			[
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПоискИЗаменаДублирующихсяЭлементов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
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
						var грид = Ext.getCmp('НайденныеОбъекты');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоискИЗаменаДублирующихсяЭлементов.ФормаПоискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСообщение',
			text: 'НадписьСообщение',
			style: 'position:absolute;left:8px;top:2px;width:659px;height:28px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:157px;width:675px;height:25px;',
			width: 675,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Да',
					tooltip:'',
				},
				'-',
				{
					text:'Нет',
					tooltip:'',
				},
				'-',
				{
					text:'Отмена',
					tooltip:'Закрыть',
				},
			]
		},
	]
	});
});