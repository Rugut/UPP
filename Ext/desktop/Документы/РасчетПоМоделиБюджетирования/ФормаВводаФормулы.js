Ext.require(['Данные.Документы.РасчетПоМоделиБюджетирования'], function () 
{
	Ext.define('Документы.РасчетПоМоделиБюджетирования.ФормаВводаФормулы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:433px;height:370px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
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
			items:
			[
				{
					text:'+',
				},
				{
					text:'-',
				},
				{
					text:'*',
				},
				{
					text:'/',
				},
				{
					text:'(',
				},
				{
					text:')',
				},
				'-',
				{
					text:'?',
				},
				{
					text:'<',
				},
				{
					text:'=',
				},
				{
					text:'>',
				},
				'-',
				{
					text:'Мин',
				},
				{
					text:'Макс',
				},
				'-',
				{
					text:'<-',
				},
				{
					text:'->',
				},
				{
					text:'<->',
				},
				'-',
				{
					text:'<Х',
				},
				{
					text:'Х',
				},
				{
					text:'Коды / имена',
				},
				'-',
				{
					text:'1',
				},
				{
					text:'2',
				},
				{
					text:'3',
				},
				{
					text:'4',
				},
				{
					text:'5',
				},
				{
					text:'6',
				},
				{
					text:'7',
				},
				{
					text:'8',
				},
				{
					text:'9',
				},
				{
					text:'0',
				},
				{
					text:',',
				},
				{
					text:'.',
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
					width:'72',
					dataIndex:'Код',
					flex:1,
				},
				{
					text:'Показатель расчета',
					width:'190',
					dataIndex:'Представление',
					flex:1,
				},
				{
					text:'Значение',
					width:'108',
					dataIndex:'Значение',
					flex:1,
				},
				{
					text:'Представление источника',
					width:'268',
					dataIndex:'ПредставлениеИсточника',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/РасчетПоМоделиБюджетирования/ВыбратьПоСсылке/100', timeout: 200},
				fields:
				[
					{
						name:'Ссылка',
					},
					{
						name:'Код',
					},
					{
						name:'Представление',
					},
					{
						name:'Значение',
					},
					{
						name:'ПредставлениеИсточника',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.РасчетПоМоделиБюджетирования.ФормаВводаФормулыСобытия'], function ()
						{
							var obj = Ext.create("Справочники.РасчетПоМоделиБюджетирования.ФормаВводаФормулыСобытия");
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
			style: 'position:absolute;left:0px;top:345px;width:433px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Ок',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});