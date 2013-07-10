Ext.define('Справочники.СотрудникиОрганизаций.ФормаВводаЕжегодныхОтпусков',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:266px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ежегодные отпуска сотрудника',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ЕжегодныеОтпуска',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:31px;width:384px;height:202px;',
			height: 202,width: 384,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'1400',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Количество дней отпуска в год',
					width:'1700',
					dataIndex:'КоличествоДнейОтпускаВГод',
					flex:1,
				},
			],
			store:
			{
				data: Ext.create("Данные.Справочники.СотрудникиОрганизаций").data,
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/СотрудникиОрганизаций/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
					},
					{
						name:'КоличествоДнейОтпускаВГод',
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
						var грид = Ext.getCmp('ЕжегодныеОтпуска');
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
			style: 'position:absolute;left:8px;top:7px;width:384px;height:24px;',
			dock: 'top',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'Удалить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:241px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});