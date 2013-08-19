Ext.require(['Данные.Обработки.КонсольОтчетов'], function () 
{
	Ext.define('Обработки.КонсольОтчетов.ФормаВыбораСтрокиДереваЗапросов',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:336px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Выберите строку дерева отчетов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ДеревоЗапросов',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:29px;width:324px;height:265px;',
			height: 265,width: 324,
			columns:
			[
				{
					text:'Отчет',
					width:'308',
					dataIndex:'Отчет',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонсольОтчетов/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Отчет',
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
						var грид = Ext.getCmp('ДеревоЗапросов');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.КонсольОтчетов.ФормаВыбораСтрокиДереваЗапросовСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонсольОтчетов.ФормаВыбораСтрокиДереваЗапросовСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'button',
			name: 'КнопкаНаВерхнийУровень',
			text: 'Перенести на верхний уровень',
			style: 'position:absolute;left:6px;top:6px;width:324px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
	]
	});
});