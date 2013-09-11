Ext.require(['Данные.Справочники.СтрокиФинансовогоРасчета'], function () 
{
	Ext.define('Справочники.СтрокиФинансовогоРасчета.ФормаВводаФормулы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:433px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод формулы',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:93px;width:417px;height:52px;',
			width: 417,
			height: 52,
			items:
			[
				{
					text:'+',
					tooltip:'Плюс',
				},
				{
					text:'-',
					tooltip:'Минус',
				},
				{
					text:'*',
					tooltip:'Умножить',
				},
				{
					text:'/',
					tooltip:'Разделить',
				},
				{
					text:'(',
					tooltip:'Открывающая скобка',
				},
				{
					text:')',
					tooltip:'Закрывающая скобка',
				},
				'-',
				{
					text:'?',
					tooltip:'',
				},
				{
					text:'<',
					tooltip:'',
				},
				{
					text:'=',
					tooltip:'',
				},
				{
					text:'>',
					tooltip:'',
				},
				'-',
				{
					text:'Мин',
					tooltip:'',
				},
				{
					text:'Макс',
					tooltip:'Макс()',
				},
				'-',
				{
					text:'<-',
					tooltip:'Шаг влево',
				},
				{
					text:'->',
					tooltip:'Шаг вправо',
				},
				{
					text:'<->',
					tooltip:'Раздвинуть',
				},
				'-',
				{
					text:'<Х',
					tooltip:'Стереть символ слева',
				},
				{
					text:'Х',
					tooltip:'Удалить',
				},
				{
					text:'Коды / имена',
					tooltip:'Вставка кодов или представлений аргументов',
				},
				'-',
				{
					text:'1',
					tooltip:'',
				},
				{
					text:'2',
					tooltip:'',
				},
				{
					text:'3',
					tooltip:'',
				},
				{
					text:'4',
					tooltip:'',
				},
				{
					text:'5',
					tooltip:'',
				},
				{
					text:'6',
					tooltip:'',
				},
				{
					text:'7',
					tooltip:'',
				},
				{
					text:'8',
					tooltip:'',
				},
				{
					text:'9',
					tooltip:'',
				},
				{
					text:'0',
					tooltip:'',
				},
				{
					text:',',
					tooltip:'',
				},
				{
					text:'.',
					tooltip:'',
				},
			]
		},
		{
			id: 'ТаблицаАргументы',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:145px;width:417px;height:192px;',
			height: 192,width: 417,
			columns:
			[
				{
					text:'Код строки',
					width:'100',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Строка расчета',
					width:'311',
					dataIndex:'СтрокаРасчета',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Ext.data.Store",
				{
					data: Ext.create("Данные.Справочники.СтрокиФинансовогоРасчета").data,
					fields: ['Ссылка','Код','СтрокаРасчета',]
				}).data.items,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СтрокиФинансовогоРасчета/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'СтрокаРасчета',
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
						var грид = Ext.getCmp('ТаблицаАргументы');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data.Ссылка;
						var Хранилище = грид.store;
						var стрЗнач = Хранилище.findRecord('Ссылка', ссылка).data;
						Ext.require(['Справочники.СтрокиФинансовогоРасчета.ФормаВводаФормулыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.СтрокиФинансовогоРасчета.ФормаВводаФормулыСобытия");
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
			style: 'position:absolute;left:0px;top:345px;width:433px;height:25px;',
			width: 433,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Ок',
					tooltip:'Записать формулу',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});