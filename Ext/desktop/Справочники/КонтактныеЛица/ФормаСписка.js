Ext.define('Справочники.КонтактныеЛица.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:396px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Контактные лица',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'СправочникСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:380px;height:280px;',
			height: 280,width: 380,
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
					width:'2200',
					dataIndex:'ФИО',
					flex:1,
				},
				{
					text:'Дата рождения',
					width:'80',
					dataIndex:'ДатаРождения',
					flex:1,
				},
				{
					text:'Имя',
					width:'113',
					dataIndex:'Имя',
					flex:1,
				},
				{
					text:'Количество дней до напоминания',
					width:'80',
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
					width:'1200',
					dataIndex:'Описание',
					flex:1,
				},
				{
					text:'Отчество',
					width:'1200',
					dataIndex:'Отчество',
					flex:1,
				},
				{
					text:'Пол',
					width:'80',
					dataIndex:'Пол',
					flex:1,
				},
				{
					text:'Фамилия',
					width:'1200',
					dataIndex:'Фамилия',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.КонтактныеЛица").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/КонтактныеЛица/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Код',
					},
					{
						name:'ФИО',
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
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.Банки.ФормаЭлементаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.Банки.ФормаЭлементаСобытия");
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
			style: 'position:absolute;left:0px;top:0px;width:396px;height:25px;',
			dock: 'top',
			items:
			[
			]
		},
	]
});