Ext.define('Обработки.ПолучениеПочты.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:636px;height:446px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Получение почты',
	
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			id: 'ТаблицаПисем',
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:620px;height:380px;',
			height: 380,width: 620,
			columns:
			[
				{
					text:'',
					width:'20',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'',
					width:'21',
					dataIndex:'Вложения',
					flex:1,
				},
				{
					text:'Адрес отправителя',
					width:'179',
					dataIndex:'АдресОтправителя',
					flex:1,
				},
				{
					text:'Отправитель',
					width:'1800',
					dataIndex:'Отправитель',
					flex:1,
				},
				{
					text:'Тема',
					width:'2200',
					dataIndex:'Тема',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ПолучениеПочты/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Использование',
					},
					{
						name:'Вложения',
					},
					{
						name:'АдресОтправителя',
					},
					{
						name:'Отправитель',
					},
					{
						name:'Тема',
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
						var грид = Ext.getCmp('ТаблицаПисем');
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
			style: 'position:absolute;left:0px;top:0px;width:636px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Показать письмо',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Входящие эл.письма',
				},
				{
					text:'Открыть событие',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Редактировать письмо',
				},
				'-',
				{
					text:'Установить флажки',
				},
				{
					text:'Снять флажки',
				},
				'-',
				{
					text:'Входящие эл.письма',
				},
				'-',
				{
					text:'Открыть событие',
				},
				'-',
				{
					text:'Настройка ...',
				},
				'-',
				{
					text:'Обновить',
				},
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:421px;width:636px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Выполнить',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});