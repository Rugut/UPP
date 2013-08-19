Ext.require(['Данные.Справочники.КонтактныеЛица'], function () 
{
	Ext.define('Справочники.КонтактныеЛица.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:464px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Справочник Контактные лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:448px;height:280px;',
			height: 280,width: 448,
			columns:
			[
				{
					text:'',
					width:'32',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Код',
					width:'40',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'ФИО',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'84',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'Имя',
					width:'120',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Количество дней до напоминания',
					width:'14',
					dataIndex:'КоличествоДнейДоНапоминания',
					flex:1,
				},
				{
					text:'Напоминать о дне рождения',
					width:'20',
					dataIndex:'НапоминатьОДнеРождения',
					flex:1,
				},
				{
					text:'Описание',
					width:'120',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Отчество',
					width:'120',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Пол',
					width:'80',
					dataIndex:'Пол.Представление',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'120',
					dataIndex:'Фамилия',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.КонтактныеЛица").data,
					fields: ['Ссылка','Картинка','Код','Наименование','ДатаРождения','Имя','КоличествоДнейДоНапоминания','НапоминатьОДнеРождения','Описание','Отчество','Пол.Представление','Фамилия',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'Наименование',
					},
					{
						name:'ДатаРождения',
					},
					{
						name:'Имя',
					},
					{
						name:'КоличествоДнейДоНапоминания',
					},
					{
						name:'НапоминатьОДнеРождения',
					},
					{
						name:'Описание',
					},
					{
						name:'Отчество',
					},
					{
						name:'Пол',
					},
					{
						name:'Фамилия',
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
						Ext.require(['Справочники.КонтактныеЛица.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.КонтактныеЛица.ФормаВыбораСобытия");
							obj.ПередатьСсылку(стрЗнач);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:464px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
		],
	}],
	dockedItems:
	[
	]
	});
});