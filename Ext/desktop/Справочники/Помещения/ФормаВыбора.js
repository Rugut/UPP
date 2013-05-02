Ext.define('Справочники.Помещения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:543px;height:347px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Помещения',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:543px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'Установить пометку удаления',
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
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Установить пометку удаления',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:32px;width:527px;height:307px;',
			height: 307,width: 527,
			columns:
			[
				{
					text:'Территория',
					width:'120',
					dataIndex:'Территория',
					flex:1,
				},
				{
					text:'Наименование',
					width:'120',
					dataIndex:'Наименование',
					flex:1,
				},
				{
					text:'Свободно С',
					width:'100',
					dataIndex:'СвободноС',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/Помещения/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Территория',
					},
					{
						name:'Наименование',
					},
					{
						name:'СвободноС',
					},
				]
			},
		},
	]
});