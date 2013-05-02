Ext.define('Обработки.НастройкиПрограммы.НастройкаРолейИсполнителей',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:292px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка задач пользователей',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:267px;width:664px;height:25px;',
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
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:8px;width:180px;height:251px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:194px;top:31px;width:462px;height:228px;',
			height: 228,width: 462,
			columns:
			[
				{
					text:'Организация',
					width:'180',
					dataIndex:'Организация',
					flex:1,
				},
				{
					text:'Роль исполнителя задач',
					width:'140',
					dataIndex:'Роль',
					flex:1,
				},
				{
					text:'Задачи ...',
					width:'100',
					dataIndex:'Использование',
					flex:1,
				},
				{
					text:'Исполнитель',
					width:'100',
					dataIndex:'Исполнитель',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НастройкиПрограммы/ВыбратьПоСсылке/100'},
				fields:
				[
					{
						name:'Организация',
					},
					{
						name:'Роль',
					},
					{
						name:'Использование',
					},
					{
						name:'Исполнитель',
					},
				]
			},
		},
		{
			xtype: 'label',
			name: 'НадписьСотрудник',
			text: '',
			style: 'position:absolute;left:194px;top:8px;width:462px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:276px;top:129px;width:101px;height:24px;',
			items:
			[
				{
					text:'Вывести список...',
				},
			]
		},
	]
});