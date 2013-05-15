Ext.define('Справочники.ОстаткиОтпусковОрганизаций.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Остатки отпусков сотрудников',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'',
					width:'24',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'Сотрудник',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'Дата актуальности',
					width:'80',
					dataIndex:'ДатаАктуальности',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусковОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'ДатаАктуальности',
					},
				]
			},
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:176px;width:384px;height:116px;',
			height: 116,width: 384,
			columns:
			[
				{
					text:'Вид ежегодного отпуска',
					width:'100',
					dataIndex:'ВидЕжегодногоОтпуска',
					flex:1,
				},
				{
					text:'Количество',
					width:'100',
					dataIndex:'Количество',
					flex:1,
				},
				{
					text:'Дата начала рабочего года',
					width:'80',
					dataIndex:'ДатаНачалаРабочегоГода',
					flex:1,
				},
				{
					text:'Дата окончания рабочего года',
					width:'80',
					dataIndex:'ДатаОкончанияРабочегоГода',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/ОстаткиОтпусковОрганизаций/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'ВидЕжегодногоОтпуска',
					},
					{
						name:'Количество',
					},
					{
						name:'ДатаНачалаРабочегоГода',
					},
					{
						name:'ДатаОкончанияРабочегоГода',
					},
				]
			},
		},
		{
			xtype: 'fieldset',
			title: 'Остатки',
			style: 'position:absolute;left:8px;top:156px;width:384px;height:16px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Список отборов)',
				},
				'-',
				{
					text:'(История отборов)',
				},
					]
				},
				{
					text:'Отключить отбор',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'(Поля сортировки)',
				},
					]
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
				'-',
				{
					text:'Обновить',
				},
					]
				},
				'-',
				{
					text:'Удалить',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
});