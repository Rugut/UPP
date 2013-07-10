Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.РегистрСведений_ФайлыСведенийСпецоператоры_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:741px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список Кэш файлов Спецоператоров',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'РегистрСведенийСписок',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:725px;height:259px;',
			height: 259,width: 725,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Учетная запись',
					width:'3500',
					dataIndex:'УчетнаяЗапись',
					flex:1,
				},
				{
					text:'Данные',
					width:'100',
					dataIndex:'Данные',
					flex:1,
				},
				{
					text:'Дата обновления файла на сервере',
					width:'1400',
					dataIndex:'ДатаФайла',
					flex:1,
				},
				{
					text:'Размер (в байтах)',
					width:'70',
					dataIndex:'Размер',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ДокументооборотСКонтролирующимиОрганами/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'УчетнаяЗапись',
					},
					{
						name:'Данные',
					},
					{
						name:'ДатаФайла',
					},
					{
						name:'Размер',
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
						var грид = Ext.getCmp('РегистрСведенийСписок');
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
			style: 'position:absolute;left:0px;top:0px;width:741px;height:25px;',
			dock: 'top',
			items:
			[
				'-',
				{
					text:'Очистить кэш',
				},
			]
		},
	]
});