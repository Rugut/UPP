Ext.require(['Данные.Обработки.ПоискИЗаменаДублирующихсяЭлементов'], function () 
{
	Ext.define('Обработки.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:359px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Значения настроек',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ЗначенияОтбора',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:9px;width:343px;height:350px;',
			height: 350,width: 343,
			columns:
			[
				{
					text:'Представление',
					width:'275',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'ИндексКартинки',
					flex:1,
				},
				{
					text:'',
					width:'72',
					dataIndex:'Значение',
					flex:1,
				},
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
					{
						name:'Представление',
					},
					{
						name:'ИндексКартинки',
					},
					{
						name:'Значение',
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
						var грид = Ext.getCmp('ЗначенияОтбора');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ПоискИЗаменаДублирующихсяЭлементов.ФормаОтбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
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
			style: 'position:absolute;left:0px;top:367px;width:359px;height:25px;',
			width: 359,
			height: 25,
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});