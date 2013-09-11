Ext.require(['Данные.Справочники.НастройкиАналитикиУчета'], function () 
{
	Ext.define('Справочники.НастройкиАналитикиУчета.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:506px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройки аналитики учета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:490px;height:539px;',
			height: 539,width: 490,
			columns:
			[
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Упр. учет',
					width:'60',
					dataIndex:'УправленческийУчет',
					flex:1,
				},
				{
					text:'Регл. учет',
					width:'60',
					dataIndex:'РегламентированныйУчет',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.НастройкиАналитикиУчета").data,
					fields: ['Ссылка','Родитель.Представление','Наименование','УправленческийУчет','РегламентированныйУчет',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиАналитикиУчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Наименование',
					},
					{
						name:'УправленческийУчет',
					},
					{
						name:'РегламентированныйУчет',
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
						var грид = Ext.getCmp('СправочникСписок');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.НастройкиАналитикиУчета.ФормаСпискаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НастройкиАналитикиУчета.ФормаСпискаСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:506px;height:25px;',
			width: 506,
			height: 25,
			items:
			[
				'-',
				{
					text:'&Изменить',
					tooltip:'Изменить текущий элемент',
					iconCls:'x-Change',
				},
				{
					text:'Закончить редактирование',
					tooltip:'',
				},
				{
					text:'Обновить',
					tooltip:'Обновить текущий список',
					iconCls:'x-Refresh',
				},
				'-',
				{
					text:'Заполнить по умолчанию',
					tooltip:'',
				},
				'-',
				{
					text:'Справка',
					tooltip:'Открыть справку',
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