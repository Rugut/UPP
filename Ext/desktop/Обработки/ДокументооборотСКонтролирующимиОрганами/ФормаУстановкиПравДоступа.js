Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.ФормаУстановкиПравДоступа',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:456px;height:444px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Выберите пользователей учетной записи',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'Пользователи',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:72px;width:440px;height:304px;',
			height: 304,width: 440,
			columns:
			[
				{
					text:'',
					width:'21',
					dataIndex:'Пометка',
					flex:1,
				},
				{
					text:'Пользователь',
					width:'141',
					dataIndex:'Пользователь',
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
						name:'Пометка',
					},
					{
						name:'Пользователь',
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
						var грид = Ext.getCmp('Пользователи');
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:419px;width:456px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Электронный документооборот с контролирующими органами по организации #Организация успешно настроен.\r\nСоздана учетная запись: #УчетнаяЗапись\r\nВыберите пользователей, имеющих право использовать эту учетную запись:',
			style: 'position:absolute;left:8px;top:8px;width:440px;height:56px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Позже список пользователей можно будет изменить на вкладке "Документооборот" формы организации.',
			style: 'position:absolute;left:8px;top:384px;width:440px;height:28px;text-align:left;',
		},
		],
	}],
	dockedItems:
	[
	]
});