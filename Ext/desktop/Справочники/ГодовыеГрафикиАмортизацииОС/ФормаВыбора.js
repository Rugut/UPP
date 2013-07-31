Ext.require(['Данные.Справочники.ГодовыеГрафикиАмортизацииОС'], function () 
{
	Ext.define('Справочники.ГодовыеГрафикиАмортизацииОС.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:476px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Годовые графики амортизации ОС',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:460px;height:280px;',
			height: 280,width: 460,
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
					text:'Наименование',
					width:'220',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Прочие сведения',
					width:'120',
					dataIndex:'Комментарий',
					flex:1,
				},
				{
					text:'Январь',
					width:'80',
					dataIndex:'Коэффициент1',
					flex:1,
				},
				{
					text:'Февраль',
					width:'80',
					dataIndex:'Коэффициент2',
					flex:1,
				},
				{
					text:'Март',
					width:'80',
					dataIndex:'Коэффициент3',
					flex:1,
				},
				{
					text:'Апрель',
					width:'80',
					dataIndex:'Коэффициент4',
					flex:1,
				},
				{
					text:'Май',
					width:'80',
					dataIndex:'Коэффициент5',
					flex:1,
				},
				{
					text:'Июнь',
					width:'80',
					dataIndex:'Коэффициент6',
					flex:1,
				},
				{
					text:'Июль',
					width:'80',
					dataIndex:'Коэффициент7',
					flex:1,
				},
				{
					text:'Август',
					width:'80',
					dataIndex:'Коэффициент8',
					flex:1,
				},
				{
					text:'Сентябрь',
					width:'80',
					dataIndex:'Коэффициент9',
					flex:1,
				},
				{
					text:'Октябрь',
					width:'80',
					dataIndex:'Коэффициент10',
					flex:1,
				},
				{
					text:'Ноябрь',
					width:'80',
					dataIndex:'Коэффициент11',
					flex:1,
				},
				{
					text:'Декабрь',
					width:'80',
					dataIndex:'Коэффициент12',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.ГодовыеГрафикиАмортизацииОС").data,
					fields: ['Картинка','Код','Наименование','Комментарий','Коэффициент1','Коэффициент2','Коэффициент3','Коэффициент4','Коэффициент5','Коэффициент6','Коэффициент7','Коэффициент8','Коэффициент9','Коэффициент10','Коэффициент11','Коэффициент12',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ГодовыеГрафикиАмортизацииОС/ВыбратьПоСсылке/100', timeout: 200},
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
						name:'Комментарий',
					},
					{
						name:'Коэффициент1',
					},
					{
						name:'Коэффициент2',
					},
					{
						name:'Коэффициент3',
					},
					{
						name:'Коэффициент4',
					},
					{
						name:'Коэффициент5',
					},
					{
						name:'Коэффициент6',
					},
					{
						name:'Коэффициент7',
					},
					{
						name:'Коэффициент8',
					},
					{
						name:'Коэффициент9',
					},
					{
						name:'Коэффициент10',
					},
					{
						name:'Коэффициент11',
					},
					{
						name:'Коэффициент12',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.ГодовыеГрафикиАмортизацииОС.ФормаВыбораСобытия'], function ()
						{
							var obj = Ext.create("Справочники.ГодовыеГрафикиАмортизацииОС.ФормаВыбораСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:476px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
	});
});